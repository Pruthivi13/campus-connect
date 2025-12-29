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
        className={`absolute inset-0 bg-gradient-to-b from-green-300 via-green-200 to-green-100 transition-opacity duration-300 ease-in-out ${
          theme === 'dark' ? 'opacity-0' : 'opacity-100'
        }`}
      />
      
      {/* Dark Mode Gradient Background */}
      <div 
        className={`absolute inset-0 bg-gradient-to-b from-[#0d4a0d] via-[#0a3a0a] to-[#052505] transition-opacity duration-300 ease-in-out ${
          theme === 'dark' ? 'opacity-100' : 'opacity-0'
        }`}
      />
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
          {/* Right Actions */}
          <div className="flex items-center gap-4">
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="relative w-16 h-8 rounded-full bg-white dark:bg-green-900 shadow-sm transition-colors duration-300"
              aria-label="Toggle Theme"
            >
              <div
                className={`absolute top-0.5 h-7 w-7 rounded-full flex items-center justify-center transition-all duration-300 ease-in-out shadow-sm ${
                  theme === 'dark' 
                    ? 'left-8 bg-white' 
                    : 'left-0.5 bg-green-500'
                }`}
              >
                {theme === 'dark' ? (
                  <Sun className="h-4 w-4 text-green-600" />
                ) : (
                  <Moon className="h-4 w-4 text-white" />
                )}
              </div>
            </button>

            {/* Campus Status Badge */}
            <div className="relative flex items-center gap-3 bg-white dark:bg-green-900/50 rounded-lg pl-4 pr-1.5 py-1.5 shadow-sm">
                {/* Status Dot - Floating top-left */}
               <span className={`absolute -top-1 -left-1 h-3 w-3 rounded-full border-2 border-white dark:border-green-900 ${status.isOpen ? 'bg-green-500' : 'bg-red-500'}`} />
               
              <span className="text-gray-800 dark:text-gray-200 text-sm font-medium">Campus Status</span>
              
              <span className={`px-4 py-1 rounded-full text-sm font-medium ${
                status.isOpen 
                  ? 'bg-green-300 text-green-900' 
                  : 'bg-red-200 text-red-900'
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
        <div className="flex justify-center mb-8">
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
        
        {/* Notice Board Ticker */}
        <div className="relative z-40 -mb-16">
           <NoticeBoardTicker />
        </div>

      </div>

      {/* Bottom Curved Section - Convex (Green Bulge) */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-30">
        <svg
          className="relative block w-full h-[100px]"
          viewBox="0 0 1440 100"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0 C480,100 960,100 1440,0 V100 H0 V0 Z"
            fill="currentColor"
            className="text-white dark:text-[#0d5a1d] transition-colors duration-300"
          />
        </svg>
      </div>
    </div>
  );
};

export default Header;
