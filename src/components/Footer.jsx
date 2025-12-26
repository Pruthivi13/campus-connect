import React from 'react';
import { Clover } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-green-300 via-white to-green-300 dark:bg-gradient-to-r dark:from-green-900 dark:via-green-900 dark:to-green-800 pt-16 pb-8 transition-colors duration-300">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Column 1: Logo and Description */}
          <div className="flex flex-col items-start h-full">
            <img
              src="/logo-dark.png"
              alt="Campus Connect Logo"
              className="h-48 w-auto object-contain"
            />
            <p className="text-sm text-green-100 max-w-xs -mt-23 pl-2">
              Your ultimate campus resource finder
            </p>
          </div>

          {/* Column 2: About */}
          <div>
            <h3 className="font-bold mb-6 text-black dark:text-white text-lg">About Campus Connect</h3>
            <p className="text-sm text-black dark:text-gray-200 leading-relaxed font-medium">
              Your one-stop portal for accessing academic resources, notices, and campus information.
            </p>
          </div>

          {/* Column 3: Quick Links */}
          <div>
            <h3 className="font-bold mb-6 text-black dark:text-white text-lg">Quick Links</h3>
            <ul className="space-y-4 text-sm text-black dark:text-gray-200 font-medium">
              <li><a href="#" className="hover:text-green-700 dark:hover:text-green-400 transition-colors">About College</a></li>
              <li><a href="#" className="hover:text-green-700 dark:hover:text-green-400 transition-colors">Help & Support</a></li>
              <li><a href="#" className="hover:text-green-700 dark:hover:text-green-400 transition-colors">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Column 4: Contact Information */}
          <div>
            <h3 className="font-bold mb-6 text-black dark:text-white text-lg">Contact Information</h3>
            <ul className="space-y-4 text-sm text-black dark:text-gray-200 font-medium">
              <li className="flex items-center gap-3">
                <div className="bg-black/10 dark:bg-white/10 p-2 rounded-full">
                  <img src="/svgs/mail.svg" alt="Email" className="h-3.5 w-3.5 brightness-0 dark:invert" />
                </div>
                <span>mail.to.pruthivi@gmail.com</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="bg-black/10 dark:bg-white/10 p-2 rounded-full">
                  <img src="/svgs/call small.svg" alt="Phone" className="h-3.5 w-3.5 brightness-0 dark:invert" />
                </div>
                <span>9337005825</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="bg-black/10 dark:bg-white/10 p-2 rounded-full">
                  <img src="/svgs/location.svg" alt="Location" className="h-3.5 w-3.5 brightness-0 dark:invert" />
                </div>
                <span>Campus Address, City</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-black/10 dark:border-gray-800 pt-8 text-center text-xs font-semibold text-black dark:text-gray-300">
          © 2025 Campus Connect. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
