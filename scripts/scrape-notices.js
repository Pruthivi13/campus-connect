import * as cheerio from 'cheerio';
import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const NOTICE_URL = 'https://www.soa.ac.in/iter-student-notice';
const DATA_FILE = path.join(__dirname, '../src/data/notices.json');

async function scrapeNotices() {
  console.log('Fetching notices from:', NOTICE_URL);
  
  try {
    const response = await fetch(NOTICE_URL);
    const html = await response.text();
    const $ = cheerio.load(html);
    
    // Determine the scraping logic based on the site structure.
    // Based on the content chunk seen earlier, it seems notices are likely in a list or blog-post format.
    // Squarespace sites (which SOA seems to be) often use 'article' or specific classes.
    // We'll try to find links that look like notices.
    
    const scrapedNotices = [];
    
    // This selector is a guess based on common Squarespace blog lists. 
    // We might need to adjust this if the structure is different.
    // Searching for headers that contain links is a good generic strategy.
    $('h1 a, h2 a, h3 a, .summary-title a').each((i, el) => {
      const title = $(el).text().trim();
      const link = $(el).attr('href');
      
      // Filter out irrelevant links if necessary
      if (!title || !link) return;

      // Basic type inference
      let type = 'academic';
      const lowerTitle = title.toLowerCase();
      if (lowerTitle.includes('placement') || lowerTitle.includes('internship')) type = 'placement';
      else if (lowerTitle.includes('holiday') || lowerTitle.includes('closed') || lowerTitle.includes('suspension')) type = 'admin';
      else if (lowerTitle.includes('event') || lowerTitle.includes('fest') || lowerTitle.includes('lecture')) type = 'event';

      // Date extraction (basic attempt, otherwise use today or look for date element)
      // Often urls have dates like /2024/1/13/...
      let date = new Date().toISOString().split('T')[0];
      const dateMatch = link.match(/\/(\d{4})\/(\d{1,2})\/(\d{1,2})\//);
      if (dateMatch) {
        date = `${dateMatch[1]}-${dateMatch[2].padStart(2, '0')}-${dateMatch[3].padStart(2, '0')}`;
      }

      // Make link absolute if relative
      const fullLink = link.startsWith('http') ? link : `https://www.soa.ac.in${link}`;

      scrapedNotices.push({
        text: title, // Mapping 'text' to match existing schema
        date: date,
        type: type,
        link: fullLink,
        isNew: true // Flag to identify scraped vs local if needed
      });
    });

    if (scrapedNotices.length === 0) {
      console.warn('No notices found! parsing selector might be incorrect.');
      return;
    }

    console.log(`Found ${scrapedNotices.length} notices.`);

    // Read existing data
    let existingNotices = [];
    try {
      const fileData = await fs.readFile(DATA_FILE, 'utf-8');
      existingNotices = JSON.parse(fileData);
    } catch (e) {
      console.log('No existing data file, creating new one.');
    }

    // Merge strategy: 
    // 1. Keep all existing "manual" notices (ids 1-100 maybe?) or just dedupe by text.
    // 2. Add new scraped notices if they don't exist.
    
    // Let's just prepend new ones and dedupe by text for simplicity.
    let allNotices = [...scrapedNotices];
    
    // Add existing ones if they are not in the scraped list
    existingNotices.forEach(existing => {
        if (!allNotices.find(n => n.text === existing.text)) {
            allNotices.push(existing);
        }
    });

    // Sort by date descending and keep top 10
    allNotices.sort((a, b) => new Date(b.date) - new Date(a.date));
    allNotices = allNotices.slice(0, 10);

    // Re-assign IDs
    const finalNotices = allNotices.map((n, index) => ({
        ...n,
        id: index + 1
    }));

    await fs.writeFile(DATA_FILE, JSON.stringify(finalNotices, null, 4));
    console.log('Successfully updated notices.json');

  } catch (error) {
    console.error('Error scraping notices:', error);
  }
}

scrapeNotices();
