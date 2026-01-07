import React from 'react';
import { Mail, Phone, MapPin, MessageCircle, HelpCircle } from 'lucide-react';

const HelpSupport = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-[#050505] text-slate-900 dark:text-white pt-20 pb-12 px-6 transition-colors duration-300">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-center text-slate-900 dark:text-white">Help & Support</h1>
        
        <div className="grid gap-8">
          
          {/* Contact Section */}
          <div className="bg-green-50 dark:bg-green-900/10 border border-green-100 dark:border-green-500/20 rounded-2xl p-8 shadow-sm">
            <h2 className="text-xl font-semibold mb-6 flex items-center gap-2 text-green-700 dark:text-green-400">
              <MessageCircle className="w-6 h-6" />
              Contact Us
            </h2>
            <div className="space-y-4">
               <div className="flex items-center gap-3 text-slate-700 dark:text-gray-300">
                <Mail className="w-5 h-5 text-green-600 dark:text-green-500" />
                <span>mail.to.pruthivi@gmail.com</span>
              </div>
              <div className="flex items-center gap-3 text-slate-700 dark:text-gray-300">
                <Phone className="w-5 h-5 text-green-600 dark:text-green-500" />
                <span>9337005825</span>
              </div>
              <div className="flex items-center gap-3 text-slate-700 dark:text-gray-300">
                <MapPin className="w-5 h-5 text-green-600 dark:text-green-500" />
                <span>Campus Address, City</span>
              </div>
            </div>
          </div>

          {/* FAQS */}
          <div className="space-y-6">
            <h2 className="text-xl font-semibold flex items-center gap-2 text-slate-800 dark:text-gray-200">
              <HelpCircle className="w-6 h-6 text-green-600" />
              Frequently Asked Questions
            </h2>
            
            <div className="bg-white dark:bg-[#0a0a0a] border border-gray-200 dark:border-gray-800 rounded-xl p-6 shadow-sm">
               <h3 className="font-medium text-lg mb-2 text-slate-900 dark:text-white">How do I access study resources?</h3>
               <p className="text-slate-600 dark:text-gray-400">Navigate to the "Resources" page from the main menu to find lecture notes, previous papers, and other study materials organized by department.</p>
            </div>

            <div className="bg-white dark:bg-[#0a0a0a] border border-gray-200 dark:border-gray-800 rounded-xl p-6 shadow-sm">
               <h3 className="font-medium text-lg mb-2 text-slate-900 dark:text-white">Where can I check notices?</h3>
               <p className="text-slate-600 dark:text-gray-400">The "Notice Board" section provides real-time updates on exams, events, and important announcements.</p>
            </div>

             <div className="bg-white dark:bg-[#0a0a0a] border border-gray-200 dark:border-gray-800 rounded-xl p-6 shadow-sm">
               <h3 className="font-medium text-lg mb-2 text-slate-900 dark:text-white">How can I report an issue?</h3>
               <p className="text-slate-600 dark:text-gray-400">Please use the contact details provided above to email or call us regarding any technical issues or feedback.</p>
            </div>

            <div className="bg-white dark:bg-[#0a0a0a] border border-gray-200 dark:border-gray-800 rounded-xl p-6 shadow-sm">
               <h3 className="font-medium text-lg mb-2 text-slate-900 dark:text-white">Is there a mobile app available?</h3>
               <p className="text-slate-600 dark:text-gray-400">Currently, we serve via a responsive web application. A dedicated mobile app is in the roadmap and will be announced soon.</p>
            </div>

            <div className="bg-white dark:bg-[#0a0a0a] border border-gray-200 dark:border-gray-800 rounded-xl p-6 shadow-sm">
               <h3 className="font-medium text-lg mb-2 text-slate-900 dark:text-white">Can I contribute resources?</h3>
               <p className="text-slate-600 dark:text-gray-400">Yes! We welcome contributions. Please reach out to the student council tech team to submit lecture notes or previous year papers.</p>
            </div>

             <div className="bg-white dark:bg-[#0a0a0a] border border-gray-200 dark:border-gray-800 rounded-xl p-6 shadow-sm">
               <h3 className="font-medium text-lg mb-2 text-slate-900 dark:text-white">How often is the content updated?</h3>
               <p className="text-slate-600 dark:text-gray-400">Notices are updated in real-time. Study materials are typically organized and updated at the start of each semester.</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default HelpSupport;
