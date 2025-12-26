import React from 'react';
import Header from './Header';
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen transition-colors duration-300">
      <Header />
      <main className="flex-grow bg-gray-50 dark:bg-gradient-to-b dark:from-black dark:via-green-900 dark:to-black transition-colors duration-300">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
