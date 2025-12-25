import React, { useState, useEffect } from 'react';

const GreetingHeader = () => {
  const [greeting, setGreeting] = useState('');
  const [date, setDate] = useState('');

  useEffect(() => {
    const updateGreeting = () => {
      const now = new Date();
      const hour = now.getHours();
      
      if (hour < 12) setGreeting('Good Morning');
      else if (hour < 18) setGreeting('Good Afternoon');
      else setGreeting('Good Evening');

      const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
      setDate(now.toLocaleDateString(undefined, options));
    };

    updateGreeting();
    const interval = setInterval(updateGreeting, 60000); // Update every minute
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="mb-8">
      <h1 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-2">
        {greeting}, <span className="text-green-600">Student</span>
      </h1>
      <p className="text-gray-600 dark:text-gray-400 text-lg">
        {date}
      </p>
    </div>
  );
};

export default GreetingHeader;
