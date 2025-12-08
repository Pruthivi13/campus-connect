import React from 'react';

const Home = () => {
  return (
    <div className="container mx-auto px-6 py-6 md:py-12 relative z-10">
      
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Welcome Card */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8 text-center transition-colors duration-300">
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">Welcome to Campus Connect</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Your central hub for all campus resources, notices, and information.
          </p>
          <div className="flex justify-center gap-4">
            <button className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-6 rounded-full transition-colors">
              Get Started
            </button>
            <button className="border border-green-600 text-green-600 hover:bg-green-50 dark:hover:bg-green-900/30 font-bold py-2 px-6 rounded-full transition-colors">
              Learn More
            </button>
          </div>
        </div>

        {/* Quick Stats/Info Grid can go here */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur p-6 rounded-xl shadow-sm border border-green-100 dark:border-gray-700">
            <h3 className="font-bold text-lg text-green-800 dark:text-green-400 mb-2">Latest Notices</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">Check out the most recent announcements from the administration.</p>
          </div>
          <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur p-6 rounded-xl shadow-sm border border-green-100 dark:border-gray-700">
            <h3 className="font-bold text-lg text-green-800 dark:text-green-400 mb-2">Resource Library</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">Access study materials, past papers, and academic journals.</p>
          </div>
          <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur p-6 rounded-xl shadow-sm border border-green-100 dark:border-gray-700">
            <h3 className="font-bold text-lg text-green-800 dark:text-green-400 mb-2">Campus Map</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">Navigate the campus easily with our interactive map.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
