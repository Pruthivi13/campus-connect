import { useState, useEffect } from 'react';
import staticNotices from '../data/notices.json';

/**
 * Custom hook to fetch notices from the API with fallback to static data.
 * @param {number} limit - Maximum number of notices to return (default: 10)
 * @returns {{ notices: Array, loading: boolean, error: string|null }}
 */
export function useNotices(limit = 10) {
    const [notices, setNotices] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        let isMounted = true;

        async function fetchNotices() {
            try {
                const response = await fetch('/api/scrape');
                
                if (!response.ok) {
                    throw new Error(`API error: ${response.status}`);
                }
                
                const data = await response.json();
                
                if (isMounted) {
                    // Sort by date and limit
                    const sortedData = [...data]
                        .sort((a, b) => new Date(b.date) - new Date(a.date))
                        .slice(0, limit);
                    setNotices(sortedData);
                    setLoading(false);
                }
            } catch (err) {
                console.warn('Failed to fetch notices from API, using static data:', err);
                
                if (isMounted) {
                    // Fallback to static notices
                    const fallbackNotices = Array.isArray(staticNotices) 
                        ? staticNotices 
                        : (staticNotices?.default || []);
                    
                    const sortedFallback = [...fallbackNotices]
                        .sort((a, b) => new Date(b.date) - new Date(a.date))
                        .slice(0, limit);
                    
                    setNotices(sortedFallback);
                    setError('Using cached notices');
                    setLoading(false);
                }
            }
        }

        fetchNotices();

        return () => {
            isMounted = false;
        };
    }, [limit]);

    return { notices, loading, error };
}
