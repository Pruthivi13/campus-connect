import React, { useState, useEffect } from 'react';
import noticesData from '../data/notices.json';
import { Calendar, Bell, Info, Award, Search, BookOpen, AlertCircle } from 'lucide-react';
import { useSearchParams } from 'react-router-dom';

const Notices = () => {
  const [searchParams] = useSearchParams();
  const [filter, setFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const query = searchParams.get('search');
    if (query) {
      setSearchTerm(query);
    }
  }, [searchParams]);

  const handleSubscribe = async () => {
    if (!('Notification' in window)) {
      alert('This browser does not support desktop notification');
      return;
    }

    const permission = await Notification.requestPermission();
    if (permission === 'granted') {
      new Notification('Subscribed!', {
        body: 'You will now receive updates for new notices.',
        icon: '/pwa-192x192.png'
      });
    }
  };

  const getIcon = (type) => {
    switch (type) {
      case 'placement': return <Award className="h-6 w-6 text-purple-400" />;
      case 'academic': return <BookOpen className="h-6 w-6 text-blue-400" />;
      case 'admin': return <AlertCircle className="h-6 w-6 text-red-400" />;
      case 'event': return <Bell className="h-6 w-6 text-yellow-400" />;
      default: return <Info className="h-6 w-6 text-gray-400" />;
    }
  };

  const getTypeColor = (type) => {
    switch (type) {
      case 'placement': return 'border-l-purple-600';
      case 'academic': return 'border-l-blue-600';
      case 'admin': return 'border-l-red-600';
      case 'event': return 'border-l-yellow-600';
      default: return 'border-l-gray-600';
    }
  };

  const getBadgeColor = (type) => {
    switch (type) {
      case 'placement': return 'bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300';
      case 'academic': return 'bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300';
      case 'admin': return 'bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-300';
      case 'event': return 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-900 dark:text-yellow-300';
      default: return 'bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-300';
    }
  };

  const safeNotices = Array.isArray(noticesData) 
    ? noticesData 
    : (Array.isArray(noticesData?.default) ? noticesData.default : []);

  const filteredNotices = safeNotices.filter(notice => {
    const matchesFilter = filter === 'all' || notice.type === filter;
    const matchesSearch = notice.text.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <div className="container mx-auto px-6 py-8 relative z-10">
      <div className="max-w-4xl mx-auto">

        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-3">Notice Board</h1>
          <p className="text-gray-600 dark:text-gray-400">Stay updated with the latest announcements and circulars.</p>
        </div>

        {/* Controls */}
        <div className="bg-white dark:bg-black/50 dark:border-green-500/20 p-6 rounded-2xl shadow-sm border border-gray-100 mb-8 backdrop-blur-sm">

          {/* Search & Subscribe */}
          <div className="flex gap-4 mb-4">
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search notices..."
                className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 dark:border-green-500/20 bg-gray-50 dark:bg-black text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-green-500 transition-all"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <button
              onClick={handleSubscribe}
              className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl font-semibold flex items-center gap-2 transition-all shadow-lg shadow-green-500/30"
            >
              <Bell className="h-5 w-5" />
              <span className="hidden sm:inline">Subscribe</span>
            </button>
          </div>

          {/* Filter Buttons */}
          <div className="flex gap-3 overflow-visible pb-4 px-2 py-2">
            {[
              { key: 'all', label: 'All' },
              { key: 'academic', label: 'Academic' },
              { key: 'placement', label: 'Placement' },
              { key: 'admin', label: 'Admin' },
              { key: 'event', label: 'Event' }
            ].map((type) => (
              <button
                key={type.key}
                onClick={() => setFilter(type.key)}
                className={`px-6 py-3 rounded-xl text-sm font-bold capitalize whitespace-nowrap transition-all ${filter === type.key
                  ? 'bg-green-600 text-white shadow-lg shadow-green-500/50 dark:shadow-green-500/60 hover:bg-green-700'
                  : 'bg-gray-300 dark:bg-[#2a2a2a] text-gray-700 dark:text-gray-400 hover:bg-gray-400 dark:hover:bg-[#3a3a3a]'
                  }`}
              >
                {type.label}
              </button>
            ))}
          </div>
        </div>

        {/* Notice List */}
        <div className="space-y-4">
          {filteredNotices.length > 0 ? (
            filteredNotices.map((notice) => (
              <div
                key={notice.id}
                onClick={() => notice.link && window.open(notice.link, '_blank')}
                className={`bg-white dark:bg-black p-6 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-md dark:shadow-[0_0_40px_-10px_rgba(34,197,94,0.3)] hover:dark:shadow-[0_0_50px_-8px_rgba(34,197,94,0.4)] transition-all duration-300 hover:-translate-y-1 group border-l-4 ${getTypeColor(notice.type)} ${notice.link ? 'cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-900/40' : ''}`}
              >
                <div className="flex items-start gap-4">
                  {/* Icon */}
                  <div className={`flex-shrink-0 h-14 w-14 rounded-xl flex items-center justify-center ${getBadgeColor(notice.type)} backdrop-blur-sm`}>
                    {getIcon(notice.type)}
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2 mb-3">
                      <h3 className={`text-lg font-semibold text-slate-900 dark:text-white drop-shadow-sm leading-tight transition-colors ${notice.link ? 'group-hover:text-green-600 dark:group-hover:text-green-400 group-hover:underline' : ''}`}>
                        {notice.text}
                      </h3>
                      <span className="text-sm text-slate-600 dark:text-gray-400 font-medium whitespace-nowrap flex items-center gap-1.5">
                        <Calendar className="h-4 w-4" />
                        {notice.date}
                      </span>
                    </div>

                    {/* Badge */}
                    <span className={`inline-block text-xs font-bold px-3 py-1.5 rounded-lg uppercase tracking-wider ${getBadgeColor(notice.type)}`}>
                      {notice.type}
                    </span>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center py-16 text-gray-500 dark:text-gray-400 bg-white dark:bg-black rounded-2xl border-2 border-dashed border-gray-300 dark:border-gray-700">
              <Info className="h-12 w-12 mx-auto mb-4 opacity-50" />
              <p className="text-lg font-medium">No notices found matching your criteria.</p>
            </div>
          )}
        </div>

      </div>
    </div>
  );
};

export default Notices;
