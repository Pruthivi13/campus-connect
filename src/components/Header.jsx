import React, { useState, useEffect } from 'react';
import { Moon, Sun, Home, BookOpen, Bell, Map, Users } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { Link, useLocation } from 'react-router-dom';
import statusConfig from '../data/status.json';

const Header = () => {
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();
  const [status, setStatus] = useState({ isOpen: false, text: 'Checking...' });

  const navItems = [
    { name: 'Home', path: '/', icon: Home },
    { name: 'Resources', path: '/resources', icon: BookOpen },
    { name: 'Notice Board', path: '/notices', icon: Bell },
    { name: 'Campus Map', path: '/map', icon: Map },
    { name: 'About Us', path: '/about', icon: Users },
  ];

  const isActive = (path) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    return false;
  };

  useEffect(() => {
    const checkStatus = () => {
      const now = new Date();

      const todayStr = now.toISOString().split('T')[0];
      const holiday = statusConfig.holidays.find(h => h.date === todayStr);

      if (holiday) {
        setStatus({ isOpen: false, text: 'Closed' });
        return;
      }

      const day = now.getDay();
      if (!statusConfig.schedule.days.includes(day)) {
        setStatus({ isOpen: false, text: 'Closed' });
        return;
      }

      const [openHour, openMinute] = statusConfig.schedule.openTime.split(':').map(Number);
      const [closeHour, closeMinute] = statusConfig.schedule.closeTime.split(':').map(Number);

      const currentMinutes = now.getHours() * 60 + now.getMinutes();
      const openMinutes = openHour * 60 + openMinute;
      const closeMinutes = closeHour * 60 + closeMinute;

      if (currentMinutes >= openMinutes && currentMinutes < closeMinutes) {
        setStatus({ isOpen: true, text: 'Open' });
      } else {
        setStatus({ isOpen: false, text: 'Closed' });
      }
    };

    checkStatus();
    const interval = setInterval(checkStatus, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative bg-gradient-to-b from-green-300 via-green-200 to-green-100 dark:from-[#0d4a0d] dark:via-[#0a3a0a] dark:to-[#052505] min-h-[360px] pb-8">
      <div className="max-w-6xl mx-auto px-8 pt-8 pb-28 relative z-20">

        {/* Row 1: Logo and Right Actions */}
        <div className="flex justify-between items-center mb-8">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            {/* X/Clover Icon - 4 overlapping circles */}
            <svg className="h-10 w-10" viewBox="0 0 40 40" fill="none">
              <circle cx="12" cy="12" r="10" fill="#22c55e" />
              <circle cx="28" cy="12" r="10" fill="#22c55e" />
              <circle cx="12" cy="28" r="10" fill="#22c55e" />
              <circle cx="28" cy="28" r="10" fill="#22c55e" />
            </svg>
            <span className="text-green-700 dark:text-white text-xl font-semibold tracking-wide">Campus Connect</span>
          </Link>

          {/* Right Actions */}
          <div className="flex items-center gap-4">
            {/* Dark Mode Toggle - No border */}
            <button
              onClick={toggleTheme}
              className="relative w-16 h-8 rounded-full bg-green-200 dark:bg-green-800 border-0 outline-none transition-colors duration-300"
              aria-label="Toggle Theme"
            >
              <div
                className={`absolute top-0.5 h-7 w-7 rounded-full bg-white dark:bg-green-500 shadow-md flex items-center justify-center transition-all duration-300 ease-in-out ${
                  theme === 'dark' ? 'left-8' : 'left-0.5'
                }`}
              >
                {theme === 'dark' ? (
                  <Sun className="h-4 w-4 text-white" />
                ) : (
                  <Moon className="h-4 w-4 text-green-600" />
                )}
              </div>
            </button>

            {/* Campus Status Badge */}
            <div className="flex items-center gap-2 bg-white dark:bg-green-900/50 rounded-lg px-3 py-1.5 shadow-sm">
              <span className={`h-2 w-2 rounded-full ${status.isOpen ? 'bg-green-500' : 'bg-red-500'}`} />
              <span className="text-gray-600 dark:text-gray-300 text-xs font-medium">Campus Status</span>
              <span className={`px-2 py-0.5 rounded text-xs font-bold ${
                status.isOpen 
                  ? 'bg-green-500 text-white' 
                  : 'bg-red-500 text-white'
              }`}>
                {status.text}
              </span>
            </div>
          </div>
        </div>

        {/* Row 2: Navigation with Icons */}
        <nav className="flex justify-center mb-6">
          <ul className="flex items-center gap-2 bg-white/80 dark:bg-black/50 backdrop-blur-sm px-3 py-2 rounded-full shadow-md dark:border dark:border-green-500/30">
            {navItems.map((item) => {
              const IconComponent = item.icon;
              return (
                <li key={item.name}>
                  <Link
                    to={item.path}
                    className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                      isActive(item.path)
                        ? 'bg-green-500 text-white dark:bg-green-600'
                        : 'text-gray-700 dark:text-gray-300 hover:bg-green-100 dark:hover:bg-green-900/50'
                    }`}
                  >
                    <IconComponent className="h-4 w-4" />
                    {item.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Row 3: Search Bar */}
        <div className="flex justify-center">
          <div className="relative w-full max-w-2xl">
            <input
              type="text"
              placeholder="Search notices, resources, or events..."
              className="w-full pl-14 pr-6 py-3.5 rounded-full border-2 border-green-500 bg-white text-gray-700 placeholder-gray-400 focus:ring-2 focus:ring-green-400/50 focus:border-green-400 transition-all duration-300"
            />
            <div className="absolute left-1.5 top-1/2 -translate-y-1/2 bg-green-500 p-2.5 rounded-full">
              <svg className="h-5 w-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>
        </div>

      </div>

      {/* Bottom Curved Section - gentle arc */}
      <div className="absolute -bottom-1 left-0 w-full overflow-visible z-30">
        <svg
          className="relative block w-full h-16"
          viewBox="0 0 1440 60"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0 C480,60 960,60 1440,0 L1440,60 L0,60 Z"
            fill="currentColor"
            className="text-white dark:text-[#0d5a1d]"
          />
        </svg>
      </div>
    </div>
  );
};

export default Header;
