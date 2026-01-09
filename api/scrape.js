import * as cheerio from 'cheerio';

const NOTICE_URL = 'https://www.soa.ac.in/iter-news-and-events';

export default async function handler(req, res) {
    // Set CORS headers
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET');
    
    // Cache for 1 hour (3600 seconds) to reduce load on college website
    res.setHeader('Cache-Control', 's-maxage=3600, stale-while-revalidate=7200');

    if (req.method !== 'GET') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    try {
        const response = await fetch(NOTICE_URL);
        
        if (!response.ok) {
            throw new Error(`Failed to fetch: ${response.status}`);
        }
        
        const html = await response.text();
        const $ = cheerio.load(html);

        const scrapedNotices = [];

        // Scrape notices from headers with links (Squarespace structure)
        $('h1 a, h2 a, h3 a, .summary-title a').each((i, el) => {
            const title = $(el).text().trim();
            const link = $(el).attr('href');

            if (!title || !link) return;

            // Infer notice type from title
            let type = 'academic';
            const lowerTitle = title.toLowerCase();
            if (lowerTitle.includes('placement') || lowerTitle.includes('internship')) {
                type = 'placement';
            } else if (lowerTitle.includes('holiday') || lowerTitle.includes('closed') || lowerTitle.includes('suspension')) {
                type = 'admin';
            } else if (lowerTitle.includes('event') || lowerTitle.includes('fest') || lowerTitle.includes('lecture')) {
                type = 'event';
            }

            // Extract date from URL (format: /YYYY/MM/DD/)
            let date = new Date().toISOString().split('T')[0];
            const dateMatch = link.match(/\/(\d{4})\/(\d{1,2})\/(\d{1,2})\//);
            if (dateMatch) {
                date = `${dateMatch[1]}-${dateMatch[2].padStart(2, '0')}-${dateMatch[3].padStart(2, '0')}`;
            }

            // Make link absolute if relative
            const fullLink = link.startsWith('http') ? link : `https://www.soa.ac.in${link}`;

            scrapedNotices.push({
                text: title,
                date: date,
                type: type,
                link: fullLink,
                isNew: true
            });
        });

        // Sort by date descending and take top 10
        const sortedNotices = scrapedNotices
            .sort((a, b) => new Date(b.date) - new Date(a.date))
            .slice(0, 10)
            .map((n, index) => ({ ...n, id: index + 1 }));

        return res.status(200).json(sortedNotices);

    } catch (error) {
        console.error('Error scraping notices:', error);
        return res.status(500).json({ 
            error: 'Failed to fetch notices',
            message: error.message 
        });
    }
}
