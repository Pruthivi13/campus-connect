import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import noticesData from '../../data/notices.json';

const NoticeBoardTicker = () => {
  // Sort by date (descending) and take top 5
  // Safety check: ensure noticesData is an array, handling potential ESM/CommonJS interop
  const safeNotices = Array.isArray(noticesData) 
    ? noticesData 
    : (Array.isArray(noticesData?.default) ? noticesData.default : []);
  
  const displayedNotices = [...safeNotices]
    .sort((a, b) => new Date(b.date || 0) - new Date(a.date || 0))
    .slice(0, 5);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-scroll logic
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % displayedNotices.length);
    }, 4000); // 4 seconds interval

    return () => clearInterval(interval);
  }, [isPaused]);

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? displayedNotices.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % displayedNotices.length);
  };

  if (!displayedNotices || displayedNotices.length === 0) return null;

  return (
    <div 
      className="max-w-4xl mx-auto mb-12 relative z-20"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="bg-white dark:bg-black rounded-2xl shadow-md dark:shadow-[0_0_15px_-3px_rgba(34,197,94,0.4)] py-3 px-4 flex items-center justify-between gap-4 border border-green-100 dark:border-green-600 transition-all duration-300">
        
        {/* Left Arrow */}
        <button 
          onClick={handlePrevious}
          className="p-1.5 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-500 dark:text-white hover:text-green-600 dark:hover:text-green-400 transition-colors focus:outline-none"
          aria-label="Previous Notice"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>

        {/* Content Area */}
        <div className="flex-1 flex flex-col items-center justify-center text-center overflow-hidden">
          {displayedNotices[currentIndex].link ? (
            <a 
              href={displayedNotices[currentIndex].link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-800 dark:text-white font-medium text-base truncate w-full px-4 mb-2 hover:text-green-600 dark:hover:text-green-400 hover:underline transition-all cursor-pointer block"
            >
              {displayedNotices[currentIndex].text}
            </a>
          ) : (
            <p className="text-gray-800 dark:text-white font-medium text-base truncate w-full px-4 mb-2">
              {displayedNotices[currentIndex].text}
            </p>
          )}
          
          {/* Pagination Dots */}
          <div className="flex items-center gap-1.5">
            {displayedNotices.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`transition-all duration-300 rounded-full ${
                  idx === currentIndex 
                    ? 'w-2 h-2 bg-green-500' 
                    : 'w-1.5 h-1.5 bg-gray-200 dark:bg-gray-600 hover:bg-gray-300 dark:hover:bg-gray-500'
                }`}
                aria-label={`Go to notice ${idx + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Right Arrow */}
        <button 
          onClick={handleNext}
          className="p-1.5 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-500 dark:text-white hover:text-green-600 dark:hover:text-green-400 transition-colors focus:outline-none"
          aria-label="Next Notice"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
};

export default NoticeBoardTicker;
