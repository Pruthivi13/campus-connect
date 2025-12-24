import React from 'react';
import { Mail, Phone, MapPin, Globe, Users, Target, History } from 'lucide-react';

const AboutUs = () => {
  return (
    <div className="container mx-auto px-6 py-8 relative z-10">
      <div className="max-w-4xl mx-auto space-y-12">

        {/* Hero Section */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold text-gray-800 dark:text-white">About Campus Connect</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Empowering students with a centralized platform for all academic and campus needs.
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700">
            <div className="h-12 w-12 bg-green-100 dark:bg-green-900/30 rounded-xl flex items-center justify-center mb-6">
              <Target className="h-6 w-6 text-green-600 dark:text-green-400" />
            </div>
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">Our Mission</h2>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              To streamline campus communication and resource access, ensuring every student has the tools they need to succeed in their academic journey.
            </p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700">
            <div className="h-12 w-12 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex items-center justify-center mb-6">
              <Globe className="h-6 w-6 text-blue-600 dark:text-blue-400" />
            </div>
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">Our Vision</h2>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              To create a digitally connected campus ecosystem where information flows seamlessly between administration, faculty, and students.
            </p>
          </div>
        </div>

        {/* History / Context */}
        <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 flex flex-col md:flex-row gap-8 items-center">
          <div className="flex-1">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4 flex items-center gap-2">
              <History className="h-6 w-6 text-purple-600" />
              Our Story
            </h2>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
              Campus Connect started as a final year project by a group of passionate students who wanted to solve the problem of fragmented information on campus. Today, it serves thousands of students daily.
            </p>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              We are constantly evolving, adding new features based on student feedback to make campus life easier and more productive.
            </p>
          </div>
          <div className="flex-shrink-0 bg-gray-100 dark:bg-gray-700 h-48 w-full md:w-64 rounded-xl flex items-center justify-center">
            <span className="text-gray-400 dark:text-gray-500 font-medium">Campus Image</span>
          </div>
        </div>

        {/* Contact Information */}
        <div className="bg-gradient-to-br from-gray-900 to-gray-800 text-white rounded-2xl p-8 shadow-lg">
          <h2 className="text-2xl font-bold mb-8 text-center">Get in Touch</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="h-12 w-12 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4 backdrop-blur-sm">
                <MapPin className="h-6 w-6 text-green-400" />
              </div>
              <h3 className="font-semibold mb-2">Visit Us</h3>
              <p className="text-gray-300 text-sm">
                Student Center, Block B<br />
                University Campus
              </p>
            </div>
            <div className="text-center">
              <div className="h-12 w-12 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4 backdrop-blur-sm">
                <Phone className="h-6 w-6 text-blue-400" />
              </div>
              <h3 className="font-semibold mb-2">Call Us</h3>
              <p className="text-gray-300 text-sm">
                +1 (555) 123-4567<br />
                Mon-Fri, 9am - 5pm
              </p>
            </div>
            <div className="text-center">
              <div className="h-12 w-12 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4 backdrop-blur-sm">
                <Mail className="h-6 w-6 text-purple-400" />
              </div>
              <h3 className="font-semibold mb-2">Email Us</h3>
              <p className="text-gray-300 text-sm">
                admin@campusconnect.edu<br />
                support@campusconnect.edu
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default AboutUs;
