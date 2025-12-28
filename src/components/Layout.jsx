import React from 'react';
import Header from './Header';
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen transition-colors duration-300">
      <Header />
      <main className="flex-grow relative bg-white dark:bg-gradient-to-b dark:from-[#0d5a1d] dark:via-[#0a4515] dark:to-[#052a0a]">
        {/* Subtle grid pattern overlay - only visible in dark mode */}
        <div className="absolute inset-0 pointer-events-none opacity-0 dark:opacity-10" 
          style={{
            backgroundImage: `
              radial-gradient(circle at 20% 50%, rgba(34, 197, 94, 0.15) 0%, transparent 50%),
              radial-gradient(circle at 80% 50%, rgba(34, 197, 94, 0.15) 0%, transparent 50%),
              radial-gradient(circle, rgba(34,197,94,0.2) 1px, transparent 1px)
            `,
            backgroundSize: '100% 100%, 100% 100%, 40px 40px'
          }}
        />
        <div className="relative z-10">
          {children}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
