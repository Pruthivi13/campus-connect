import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import noticesData from '../../data/notices.json';

const NoticeBoardTicker = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    let interval;
    if (!isPaused) {
      interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % noticesData.length);
      }, 3000); // Change every 3 seconds
    }
    return () => clearInterval(interval);
  }, [isPaused]);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % noticesData.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + noticesData.length) % noticesData.length);
  };

  return (
    <div className="w-full max-w-4xl mx-auto mb-8 px-4 relative z-20">
      <div
        className="bg-white/90 dark:bg-black/90 backdrop-blur-md rounded-full shadow-lg py-3 px-4 flex items-center justify-between border border-gray-100 dark:border-black transition-colors duration-300"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Left Arrow */}
        <button
          onClick={handlePrev}
          className="p-1.5 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-600 dark:text-gray-300 transition-colors"
          aria-label="Previous Notice"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>

        {/* Content */}
        <div className="flex-1 overflow-hidden relative h-6">
          <div className="text-center w-full px-4">
            <p className="text-sm md:text-base font-medium text-gray-800 dark:text-white truncate">
              {noticesData[currentIndex].text}
            </p>
          </div>
        </div>

        {/* Right Arrow */}
        <button
          onClick={handleNext}
          className="p-1.5 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-600 dark:text-gray-300 transition-colors"
          aria-label="Next Notice"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>

      {/* Pagination Dots */}
      <div className="flex justify-center gap-2 mt-3">
        {noticesData.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-2 w-2 rounded-full transition-all duration-300 ${index === currentIndex
                ? 'bg-green-500 w-4'
                : 'bg-gray-300 dark:bg-gray-600 hover:bg-green-300'
              }`}
            aria-label={`Go to notice ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default NoticeBoardTicker;
