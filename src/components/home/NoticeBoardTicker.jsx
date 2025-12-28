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
      }, 3000);
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
    <div className="w-full max-w-4xl mx-auto relative z-20">
      <div
        className="bg-black/80 backdrop-blur-md rounded-full shadow-lg py-4 px-6 flex items-center justify-between border-2 border-green-600 transition-colors duration-300"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Left Arrow */}
        <button
          onClick={handlePrev}
          className="p-2 rounded-full hover:bg-green-800/50 text-green-400 transition-colors"
          aria-label="Previous Notice"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>

        {/* Content */}
        <div className="flex-1 overflow-hidden relative h-6">
          <div className="text-center w-full px-4">
            <p className="text-sm md:text-base font-medium text-white truncate">
              {noticesData[currentIndex].text}
            </p>
          </div>
        </div>

        {/* Right Arrow */}
        <button
          onClick={handleNext}
          className="p-2 rounded-full hover:bg-green-800/50 text-green-400 transition-colors"
          aria-label="Next Notice"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>

      {/* Pagination Dots */}
      <div className="flex justify-center gap-2 mt-4">
        {noticesData.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-2.5 w-2.5 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? 'bg-green-500 w-5'
                : 'bg-green-800 hover:bg-green-600'
            }`}
            aria-label={`Go to notice ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default NoticeBoardTicker;
