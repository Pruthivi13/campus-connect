import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown, Check } from 'lucide-react';

const Dropdown = ({ label, options, value, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      {label && (
        <label className="block text-xs font-semibold text-gray-500 uppercase mb-1 ml-1">
          {label}
        </label>
      )}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className={`w-full text-left px-4 py-3 rounded-xl border bg-gray-50 dark:bg-black text-gray-800 dark:text-white transition-all duration-200 outline-none flex items-center justify-between
          ${isOpen
            ? 'border-green-500 ring-2 ring-green-500/20 shadow-[0_0_15px_-3px_rgba(34,197,94,0.2)]'
            : 'border-gray-200 dark:border-green-500/30 hover:border-green-400 dark:hover:border-green-500/50'
          }`}
      >
        <span className="block truncate">{value}</span>
        <ChevronDown
          className={`h-4 w-4 text-gray-400 pointer-events-none transition-transform duration-300 ml-2 shrink-0 ${isOpen ? 'rotate-180 text-green-500' : ''
            }`}
        />
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute z-50 w-full mt-2 bg-white dark:bg-black rounded-xl shadow-xl border border-gray-200 dark:border-green-500/30 max-h-60 overflow-auto animate-in fade-in slide-in-from-top-2 duration-200 
          [&::-webkit-scrollbar]:w-1.5 
          [&::-webkit-scrollbar-track]:bg-transparent 
          [&::-webkit-scrollbar-thumb]:bg-gray-300 
          dark:[&::-webkit-scrollbar-thumb]:bg-green-900/30
          [&::-webkit-scrollbar-thumb]:rounded-full 
          hover:[&::-webkit-scrollbar-thumb]:bg-gray-400 
          dark:hover:[&::-webkit-scrollbar-thumb]:bg-green-700/50">
          <ul className="py-2">
            {options.map((option) => (
              <li key={option}>
                <button
                  type="button"
                  onClick={() => {
                    onChange(option);
                    setIsOpen(false);
                  }}
                  className={`w-full text-left px-4 py-2.5 flex items-center justify-between text-sm transition-colors
                    ${option === value
                      ? 'bg-green-50 dark:bg-green-900/40 text-green-700 dark:text-green-400 font-bold'
                      : 'text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-green-900/10'
                    }`}
                >
                  <span className="truncate">{option}</span>
                  {option === value && <Check className="h-4 w-4 text-green-600" />}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
