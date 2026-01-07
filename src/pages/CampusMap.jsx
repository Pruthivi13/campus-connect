import React from 'react';
import { Calendar, Clock, MapPin, Phone, Coffee, Library, AlertCircle } from 'lucide-react';

import adminBlockImg from '../assets/campus map/administrative block.png';
import csBlockImg from '../assets/campus map/computer science block.png';
import eBlockImg from '../assets/campus map/e block.png';
import libraryImg from '../assets/campus map/library.png';
import cafeteriaImg from '../assets/campus map/cafeteria.png';
import sBlockImg from '../assets/campus map/S block.png';

const CampusMap = () => {
  const locations = [
    { id: 1, name: 'Administrative Block', color: 'bg-blue-600', dot: 'bg-blue-500', shadow: 'shadow-blue-500/50', image: adminBlockImg, link: 'https://maps.app.goo.gl/wuxpefx14s1WzP3b7' },
    { id: 2, name: 'Library', color: 'bg-purple-600', dot: 'bg-purple-500', shadow: 'shadow-purple-500/50', image: libraryImg, link: 'https://maps.app.goo.gl/vBH2e2yWZQVLCyuZA' },
    { id: 3, name: 'Cafeteria', color: 'bg-red-600', dot: 'bg-red-500', shadow: 'shadow-red-500/50', image: cafeteriaImg, link: 'https://maps.app.goo.gl/EhxEeJpA6wH6i5rm8' },
    { id: 4, name: 'Computer Science Block', color: 'bg-orange-600', dot: 'bg-orange-500', shadow: 'shadow-orange-500/50', image: csBlockImg, link: 'https://maps.app.goo.gl/4quyprHZmsF7AExJ6' },
    { id: 5, name: 'S Block', color: 'bg-green-600', dot: 'bg-green-500', shadow: 'shadow-green-500/50', image: sBlockImg, link: 'https://maps.app.goo.gl/Taz8cdSCRQdoFj3L7' },
    { id: 6, name: 'E Block', color: 'bg-cyan-600', dot: 'bg-cyan-500', shadow: 'shadow-cyan-500/50', image: eBlockImg, link: 'https://maps.app.goo.gl/ojmw1HtomPfc76Fz5' },
  ];

  const infoCards = [
    {
      label: "Campus Hours",
      days: "Monday - Saturday",
      time: "9 AM - 6 PM",
      icon: Clock,
    },
    {
      label: "Cafeteria Hours",
      days: "Monday - Saturday",
      time: "9 AM - 6 PM",
      icon: Coffee,
    },
    {
      label: "Library Hours",
      days: "Monday - Saturday",
      time: "9 AM - 6 PM",
      icon: Library,
    },
    {
      label: "Emergency Contact",
      days: "Monday - Saturday",
      time: "9 AM - 6 PM",
      icon: Phone,
    },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-[#050505] text-slate-900 dark:text-white py-12 px-6 relative overflow-hidden transition-colors duration-300">


      <div className="max-w-5xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-3xl font-bold mb-2 text-slate-900 dark:text-white">Campus Map</h1>
          <p className="text-slate-600 dark:text-gray-400">Navigate through campus facilities and important locations</p>
        </div>

        {/* Main Container */}
        <div className="bg-white dark:bg-black rounded-[2rem] border border-green-200 dark:border-2 dark:border-green-500 shadow-xl dark:shadow-[0_0_50px_-10px_rgba(34,197,94,0.4)] p-8 md:p-12 transition-all duration-300">
          
          {/* Location Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {locations.map((loc) => (
              <a 
                key={loc.id} 
                href={loc.link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white dark:bg-black border border-gray-100 dark:border-gray-800 rounded-2xl p-0 overflow-hidden aspect-[1.6/1] relative group hover:border-green-500/30 shadow-sm dark:shadow-none hover:shadow-md transition-all duration-300 block cursor-pointer"
              >
                {/* Image or Color Block */}
                <div className="w-full h-full relative">
                  {loc.image ? (
                    <img 
                      src={loc.image} 
                      alt={loc.name} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  ) : (
                    <div className="w-full h-full flex flex-col items-center justify-center gap-4 bg-gray-50 dark:bg-gray-900/50">
                       <div className={`w-20 h-12 rounded-lg ${loc.color} shadow-lg dark:shadow-[0_0_30px_currentColor]`} />
                    </div>
                  )}
                  
                  {/* Overlay Gradient for Text Readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80" />
                </div>

                {/* Top Right Dot */}
                <div className={`absolute top-4 right-4 w-4 h-4 rounded-full ${loc.dot} shadow-[0_0_10px_currentColor] dark:shadow-[0_0_15px_currentColor] z-10`} />
                
                {/* Bottom Left Name */}
                <div className="absolute bottom-4 left-4 z-10">
                   <span className="text-white font-bold text-lg tracking-wide">{loc.name}</span>
                </div>
              </a>
            ))}
          </div>

          {/* Divider Line */}
          <div className="w-full h-px bg-gray-200 dark:bg-green-500 dark:shadow-[0_0_10px_#22c55e] mb-12" />

          {/* Important Information Section */}
          <div className="space-y-8">
            <h2 className="text-xl font-medium text-slate-900 dark:text-green-500 inline-block border-b border-gray-200 dark:border-green-500/50 pb-1 dark:shadow-[0_2px_10px_-2px_rgba(34,197,94,0.5)]">
              Important Information
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-8">
              {infoCards.map((info, index) => (
                <div key={index} className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <span className="text-slate-700 dark:text-gray-300 font-medium text-lg min-w-[140px]">{info.label}:</span>
                  
                  {/* Info Pill */}
                  <div className="bg-green-600 dark:bg-black border border-transparent dark:border-green-500/30 rounded-xl px-4 py-2 flex items-center gap-3 w-full sm:w-auto shadow-md dark:shadow-[0_0_15px_-5px_rgba(34,197,94,0.2)] hover:dark:border-green-500/60 hover:dark:shadow-[0_0_20px_-5px_rgba(34,197,94,0.4)] transition-all">
                    <div className="text-white dark:text-green-500">
                      <info.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-[10px] text-green-100 dark:text-gray-400 uppercase tracking-wider font-semibold">{info.days}</div>
                      <div className="bg-white/20 dark:bg-green-600 rounded-full px-2 py-0.5 text-[10px] text-white dark:text-black font-bold inline-block mt-0.5">
                        <Clock className="w-3 h-3 inline-block mr-1 -mt-0.5" />
                        {info.time}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default CampusMap;
