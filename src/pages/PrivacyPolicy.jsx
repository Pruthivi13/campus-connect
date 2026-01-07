import React from 'react';
import { Shield, Lock, Eye } from 'lucide-react';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-[#050505] text-slate-900 dark:text-white pt-20 pb-12 px-6 transition-colors duration-300">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-center text-slate-900 dark:text-white">Privacy Policy</h1>
        
        <div className="bg-white dark:bg-[#0a0a0a] border border-gray-200 dark:border-gray-800 rounded-2xl p-8 shadow-sm space-y-8">
          
          <div className="text-slate-600 dark:text-gray-400">
            <p>Last updated: January 2025</p>
          </div>

          <section>
             <h2 className="text-xl font-semibold mb-4 flex items-center gap-2 text-green-700 dark:text-green-400">
              <Shield className="w-5 h-5" />
              1. Information We Collect
            </h2>
            <p className="text-slate-700 dark:text-gray-300 leading-relaxed">
              We collect information that you strictly provide to us for the purpose of accessing academic resources. This may include basic usage data to improve the platform's performance. We do not collect personal identification information unless you voluntarily submit it through our contact forms.
            </p>
          </section>

          <section>
             <h2 className="text-xl font-semibold mb-4 flex items-center gap-2 text-green-700 dark:text-green-400">
              <Lock className="w-5 h-5" />
              2. How We Use Your Information
            </h2>
            <p className="text-slate-700 dark:text-gray-300 leading-relaxed">
              The information is used solely to provide and improve the services offered by Campus Connect. We do not sell, trade, or otherwise transfer your personally identifiable information to outside parties.
            </p>
          </section>

          <section>
             <h2 className="text-xl font-semibold mb-4 flex items-center gap-2 text-green-700 dark:text-green-400">
              <Eye className="w-5 h-5" />
              3. Data Security
            </h2>
            <p className="text-slate-700 dark:text-gray-300 leading-relaxed">
              We implement a variety of security measures to maintain the safety of your data. However, please be aware that no method of transmission over the internet, or method of electronic storage, is 100% secure.
            </p>
          </section>

          <section>
             <h2 className="text-xl font-semibold mb-4 text-green-700 dark:text-green-400">
              4. Changes to This Policy
            </h2>
            <p className="text-slate-700 dark:text-gray-300 leading-relaxed">
              We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.
            </p>
          </section>
          
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
