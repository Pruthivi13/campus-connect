import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-r from-green-100 via-green-200 to-green-100 dark:from-[#021a08] dark:via-[#0d5520] dark:to-[#021a08] pt-12 pb-6">

      <div className="max-w-6xl mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8 text-center md:text-left">
          {/* Column 1: Logo and Description */}
          <div className="flex flex-col items-center md:items-start gap-4">
            <div className="flex items-center gap-3">
              <img
                src="/logo.png"
                alt="Campus Connect Logo"
                className="h-32 md:h-48 w-auto object-contain"
              />
            </div>
            <p className="text-sm text-green-700 dark:text-green-200/80">
              Your ultimate campus resource finder
            </p>
          </div>

          {/* Column 2: About */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="font-bold mb-4 text-green-700 dark:text-green-400 text-sm uppercase tracking-wide">About Campus Resource Finder</h3>
            <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
              Your one-stop portal for accessing academic resources, notices, and campus information.
            </p>
          </div>



          {/* Column 3: Quick Links */}
          <div className="flex flex-col items-center">
            <h3 className="font-bold mb-4 text-green-700 dark:text-green-400 text-sm uppercase tracking-wide">Quick Links</h3>
            <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300 text-center">
              <li><a href="https://www.soa.ac.in/iter" target="_blank" rel="noopener noreferrer" className="hover:text-green-600 dark:hover:text-green-400 transition-colors">About College</a></li>
              <li><Link to="/help-support" className="hover:text-green-600 dark:hover:text-green-400 transition-colors">Help & Support</Link></li>
              <li><Link to="/privacy-policy" className="hover:text-green-600 dark:hover:text-green-400 transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>

          {/* Column 4: Contact Information */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="font-bold mb-4 text-green-700 dark:text-green-400 text-sm uppercase tracking-wide">Contact Information</h3>
            <ul className="space-y-3 text-sm text-gray-700 dark:text-gray-300">
              <li className="flex items-center justify-center md:justify-start gap-2">
                <Mail className="h-4 w-4 text-green-600 dark:text-green-400 flex-shrink-0" />
                <span>campusconnectforstudents@gmail.com</span>
              </li>
              <li className="flex items-center justify-center md:justify-start gap-2">
                <Phone className="h-4 w-4 text-green-600 dark:text-green-400 flex-shrink-0" />
                <span>+91 98765 43210</span>
              </li>
              <li className="flex items-center justify-center md:justify-start gap-2">
                <MapPin className="h-4 w-4 text-green-600 dark:text-green-400 flex-shrink-0" />
                <span>Jagamara, Khandagiri, Bhubaneswar - 751030, Odisha, India</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-green-300 dark:border-green-700/50 pt-6 text-center text-sm text-gray-600 dark:text-gray-400">
          © 2025 Campus Resource Finder. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
