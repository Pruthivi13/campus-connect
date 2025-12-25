import React from 'react';
import GreetingHeader from '../components/home/GreetingHeader';
import NoticeBoard from '../components/home/NoticeBoard';
import { Mail, BookOpen, MapPin, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="container mx-auto px-6 py-8 relative z-10">

      {/* 1. Greeting Section */}
      <GreetingHeader />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

        {/* Left Column: Quick Actions & Stats */}
        <div className="lg:col-span-2 space-y-8">

          {/* Quick Actions Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Link to="/resources" className="group bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 hover:shadow-md transition-all duration-300">
              <div className="h-12 w-12 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <BookOpen className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-2">Resource Library</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">Access study materials, past papers, and academic journals.</p>
              <div className="flex items-center text-blue-600 dark:text-blue-400 text-sm font-semibold">
                Browse Resources <ArrowRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>

            <Link to="/map" className="group bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 hover:shadow-md transition-all duration-300">
              <div className="h-12 w-12 bg-green-100 dark:bg-green-900/30 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <MapPin className="h-6 w-6 text-green-600 dark:text-green-400" />
              </div>
              <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-2">Campus Map</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">Navigate the campus easily with our interactive map.</p>
              <div className="flex items-center text-green-600 dark:text-green-400 text-sm font-semibold">
                View Map <ArrowRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          </div>

          {/* Contact Us Section */}
          <div className="bg-gradient-to-br from-green-600 to-green-700 rounded-2xl p-8 text-white relative overflow-hidden">
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <h3 className="text-2xl font-bold mb-2">Need Help?</h3>
                <p className="text-green-100 max-w-md">
                  Have questions about campus facilities or need academic support? Reach out to the administration directly.
                </p>
              </div>
              <a
                href="mailto:admin@campusconnect.edu"
                className="bg-white text-green-700 hover:bg-green-50 font-bold py-3 px-8 rounded-xl shadow-lg transition-colors flex items-center gap-2 whitespace-nowrap"
              >
                <Mail className="h-5 w-5" />
                Contact Us
              </a>
            </div>

            {/* Decorative Circles */}
            <div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-white opacity-10 rounded-full blur-2xl"></div>
            <div className="absolute bottom-0 left-0 -mb-10 -ml-10 w-40 h-40 bg-black opacity-10 rounded-full blur-2xl"></div>
          </div>

        </div>

        {/* Right Column: Notice Board */}
        <div className="lg:col-span-1">
          <NoticeBoard />
        </div>

      </div>
    </div>
  );
};

export default Home;
