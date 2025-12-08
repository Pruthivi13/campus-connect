import React from 'react';

const PlaceholderPage = ({ title }) => {
  return (
    <div className="container mx-auto px-6 py-12 relative z-10 text-center">
      <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">{title}</h2>
      <p className="text-gray-600 dark:text-gray-400">This page is coming soon!</p>
    </div>
  );
};

export default PlaceholderPage;
