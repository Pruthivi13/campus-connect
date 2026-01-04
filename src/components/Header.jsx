import React, { useState, useEffect } from 'react';
import { Moon, Sun, Home, BookOpen, Bell, Map, Users } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { Link, useLocation } from 'react-router-dom';
import statusConfig from '../data/status.json';
import NoticeBoardTicker from './home/NoticeBoardTicker';

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
    <div className="relative min-h-[360px] pb-8 overflow-hidden">
      {/* Light Mode Gradient Background */}
      <div
        className={`absolute inset-0 bg-gradient-to-b from-green-300 via-green-200 to-green-100 transition-opacity duration-300 ease-in-out ${theme === 'dark' ? 'opacity-0' : 'opacity-100'
          }`}
      />

      {/* Dark Mode Gradient Background */}
      <div
        className={`absolute inset-0 bg-gradient-to-b from-black via-[#0a2a12] to-[#0d5a1d] transition-opacity duration-300 ease-in-out ${theme === 'dark' ? 'opacity-100' : 'opacity-0'
          }`}
      />
      <div className="max-w-6xl mx-auto px-8 pt-4 pb-28 relative z-20">

        {/* Row 1: Logo and Right Actions */}
        <div className="flex justify-between items-center mb-8">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            {/* Logo Container */}
            <div className="relative h-[180px] w-[500px]">
              <img
                src="/logo-new.png"
                alt="Campus Connect Logo"
                className="h-full w-auto object-contain object-left scale-150 origin-left transition-all duration-500 ease-in-out"
              />
            </div>
          </Link>

          {/* Right Actions */}
          <div className="flex items-center gap-4">
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="relative w-16 h-8 rounded-full bg-white/50 dark:bg-gray-800/50 border-0 outline-none transition-colors duration-300"
              aria-label="Toggle Theme"
            >
              <div
                className={`absolute top-0.5 h-7 w-7 rounded-full flex items-center justify-center transition-all duration-300 ease-in-out ${theme === 'dark'
                  ? 'left-8 bg-gray-800'
                  : 'left-0.5 bg-[#14AE5C]'
                  }`}
              >
                {theme === 'dark' ? (
                  <Sun className="h-4 w-4 text-yellow-400" />
                ) : (
                  <Moon className="h-4 w-4 text-white" />
                )}
              </div>
            </button>

            {/* Campus Status Badge */}
            <div className="relative flex items-center gap-2 bg-white dark:bg-gray-800 rounded-xl pl-5 pr-2 py-2 shadow-sm transition-all">
              {/* Status Dot */}
              <div className={`absolute top-2 left-2 h-2 w-2 rounded-full ${status.isOpen ? 'bg-[#14AE5C]' : 'bg-red-500'} animate-pulse`} />

              <span className="text-gray-800 dark:text-gray-100 text-sm font-medium">Campus Status</span>

              <span className={`px-3 py-1 rounded-xl text-sm font-semibold transition-colors ${status.isOpen
                ? 'bg-[#a8f0c0] text-[#0d5a1d]'
                : 'bg-[#ff8fa3] text-[#7f1d1d]'
                }`}>
                {status.text}
              </span>
            </div>
          </div>
        </div>

        {/* Row 2: Navigation with Icons */}
        <nav className="flex justify-center mb-6">
          <ul className="flex items-center gap-2 bg-white/80 dark:bg-black/50 backdrop-blur-sm px-3 py-2 rounded-full shadow-md dark:border dark:border-[#14AE5C]/30">
            {navItems.map((item) => {
              const IconComponent = item.icon;
              return (
                <li key={item.name}>
                  <Link
                    to={item.path}
                    className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${isActive(item.path)
                      ? 'bg-green-500 text-white dark:bg-[#14AE5C] dark:shadow-[0_0_15px_rgba(20,174,92,0.6)]'
                      : 'text-gray-700 dark:text-gray-300 hover:bg-green-100 dark:hover:bg-[#14AE5C]/20'
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
        <div className="flex justify-center mb-8">
          <div className="relative w-full max-w-2xl">
            <input
              type="text"
              placeholder="Search notices, resources, or events..."
              className="w-full pl-14 pr-6 py-3.5 rounded-full border-2 border-green-500 dark:border-[#14AE5C] bg-white text-gray-700 placeholder-gray-400 focus:ring-2 focus:ring-green-400/50 dark:focus:ring-[#14AE5C]/50 focus:border-green-400 dark:focus:border-[#14AE5C] transition-all duration-300"
            />
            <div className="absolute left-1.5 top-1/2 -translate-y-1/2 bg-green-500 dark:bg-[#14AE5C] dark:shadow-[0_0_12px_rgba(20,174,92,0.7)] p-2.5 rounded-full">
              <svg className="h-5 w-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>
        </div>

        {/* Notice Board Ticker */}
        <div className="relative z-40 -mb-16">
          <NoticeBoardTicker />
        </div>

      </div>

      {/* Bottom Curved Section - Concave (Inward at Center) */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-30">
        <svg
          className="relative block w-full h-[80px]"
          viewBox="0 0 1440 80"
          preserveAspectRatio="none"
        >
          <path
            d="M0,80 Q720,0 1440,80 L1440,80 L0,80 Z"
            fill="currentColor"
            className="text-white dark:text-black transition-colors duration-300"
          />
        </svg>
      </div>
    </div>
  );
};

export default Header;
