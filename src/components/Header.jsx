import React, { useState, useEffect } from 'react';
import { Search, Moon, Sun, Clover } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { Link, useLocation } from 'react-router-dom';
import NoticeBoardTicker from './home/NoticeBoardTicker';
import statusConfig from '../data/status.json';

const Header = () => {
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();
  const [status, setStatus] = useState({ isOpen: false, text: 'Checking...' });

  const navItems = [
    { name: 'Home', icon: '/svgs/Home.svg', path: '/' },
    { name: 'Resources', icon: '/svgs/resouces.svg', path: '/resources' },
    { name: 'Notice Board', icon: '/svgs/notice.svg', path: '/notices' },
    { name: 'Campus Map', icon: '/svgs/map.svg', path: '/map' },
    { name: 'About Us', icon: '/svgs/person.svg', path: '/about' },
  ];

  const isActive = (path) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    return false;
  };

  useEffect(() => {
    const checkStatus = () => {
      const now = new Date();

      // 1. Check Holidays
      const todayStr = now.toISOString().split('T')[0];
      const holiday = statusConfig.holidays.find(h => h.date === todayStr);

      if (holiday) {
        setStatus({ isOpen: false, text: holiday.name });
        return;
      }

      // 2. Check Day of Week
      const day = now.getDay(); // 0 = Sunday, 1 = Monday, etc.
      if (!statusConfig.schedule.days.includes(day)) {
        setStatus({ isOpen: false, text: 'Weekend Closed' });
        return;
      }

      // 3. Check Time
      const [openHour, openMinute] = statusConfig.schedule.openTime.split(':').map(Number);
      const [closeHour, closeMinute] = statusConfig.schedule.closeTime.split(':').map(Number);

      const currentMinutes = now.getHours() * 60 + now.getMinutes();
      const openMinutes = openHour * 60 + openMinute;
      const closeMinutes = closeHour * 60 + closeMinute;

      if (currentMinutes >= openMinutes && currentMinutes < closeMinutes) {
        setStatus({ isOpen: true, text: 'Campus Open' });
      } else {
        setStatus({ isOpen: false, text: 'Campus Closed' });
      }
    };

    checkStatus();
    const interval = setInterval(checkStatus, 60000); // Update every minute
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative bg-gradient-to-r from-green-300 via-white to-green-300 dark:from-green-900 dark:via-green-900 dark:to-green-800 transition-colors duration-300">
      <div className="container mx-auto px-6 pt-6 pb-24 relative z-20">


        {/* Unified Navigation Bar */}
        <div className="flex justify-between items-center mb-10">
          {/* Logo - Brand Element */}
          <div className="flex-shrink-0">
            <img src="/logo.png" alt="Campus Connect Logo" className="h-32 w-auto" />
          </div>

          {/* Navigation - Center */}
          <nav className="flex-1 flex justify-center">
            <ul className="flex items-center gap-1 bg-white/10 backdrop-blur-md p-1 rounded-full">
              {navItems.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.path}
                    className={`flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${isActive(item.path)
                      ? 'bg-white text-green-600 shadow-sm'
                      : 'text-black hover:bg-black/10 dark:text-white dark:hover:bg-white/10'
                      }`}
                  >
                    <img
                      src={item.icon}
                      alt={item.name}
                      className={`h-4 w-4 ${isActive(item.path) ? '' : 'brightness-0 dark:invert'}`}
                    />
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-6">
            {/* Dark Mode Toggle Switch */}
            <button
              onClick={toggleTheme}
              className={`relative h-8 w-16 rounded-full transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2 ${theme === 'dark' ? 'bg-green-950' : 'bg-black/10 hover:bg-black/20'
                }`}
              aria-label="Toggle Dark Mode"
            >
              <div
                className={`absolute top-1 left-1 h-6 w-6 rounded-full bg-white shadow-md transform transition-transform duration-300 flex items-center justify-center ${theme === 'dark' ? 'translate-x-8' : 'translate-x-0'
                  }`}
              >
                {theme === 'dark' ? (
                  <img src="/svgs/dark-moon.svg" alt="Dark Mode" className="h-4 w-4" />
                ) : (
                  <img src="/svgs/dark-sun.svg" alt="Light Mode" className="h-4 w-4" />
                )}
              </div>
            </button>

            {/* Status Badge */}
            <div className="bg-white/90 backdrop-blur-md px-4 py-1.5 rounded-full flex items-center gap-2 shadow-lg">
              <span className={`h-2 w-2 rounded-full ${status.isOpen ? 'bg-green-500' : 'bg-red-500'} animate-pulse`} />
              <span className="text-xs font-bold text-gray-600 uppercase tracking-wider">{status.text}</span>
            </div>
          </div>
        </div>

        {/* Search Bar - INSIDE Gradient */}
        <div className="flex justify-center mb-8">
          <div className="relative w-full max-w-2xl">
            <input
              type="text"
              placeholder="Search notices, resources, or events..."
              className="w-full pl-14 pr-6 py-4 rounded-full border-none text-gray-700 placeholder-gray-400 shadow-2xl focus:ring-4 focus:ring-green-400/30 bg-white/95 dark:bg-black dark:text-white dark:placeholder-gray-400 backdrop-blur-sm transition-colors duration-300"
            />
            <div className="absolute left-2 top-1/2 -translate-y-1/2 bg-green-500 p-2 rounded-full">
              <img src="/svgs/Search.svg" alt="Search" className="h-5 w-5 brightness-0 invert" />
            </div>
          </div>
        </div>

        {/* Notice Board Ticker - Protruding/Inside Gradient */}
        <NoticeBoardTicker />

      </div>

      {/* Decorative Curve SVG */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-10">
        <svg
          className="relative block w-full h-16 sm:h-24 text-gray-50 dark:text-black transition-colors duration-300"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,80 Q600,0 1200,80 V120 H0 Z"
            fill="currentColor"
          />
        </svg>
      </div>
    </div>
  );
};

export default Header;
