import React from 'react';
import { Book, ClipboardList, FileText, GraduationCap, Calendar, Bell } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  const resources = [
    {
      title: 'Notes',
      description: 'Access subject-wise lecture notes',
      icon: <Book className="h-8 w-8 text-white" />,
      bg: 'bg-blue-500',
      glow: 'dark:shadow-lg dark:shadow-green-500/50 dark:hover:shadow-xl dark:hover:shadow-green-500/60',
      link: '/resources'
    },
    {
      title: 'Assignments',
      description: 'View and submit your assignments',
      icon: <ClipboardList className="h-8 w-8 text-white" />,
      bg: 'bg-green-500',
      glow: 'dark:shadow-lg dark:shadow-green-500/50 dark:hover:shadow-xl dark:hover:shadow-green-500/60',
      link: '/resources'
    },
    {
      title: 'PYQs',
      description: 'Previous year question papers',
      icon: <FileText className="h-8 w-8 text-white" />,
      bg: 'bg-purple-500',
      glow: 'dark:shadow-lg dark:shadow-green-500/50 dark:hover:shadow-xl dark:hover:shadow-green-500/60',
      link: '/resources'
    },
    {
      title: 'Study Materials',
      description: 'Additional learning resources',
      icon: <GraduationCap className="h-8 w-8 text-white" />,
      bg: 'bg-orange-500',
      glow: 'dark:shadow-lg dark:shadow-green-500/50 dark:hover:shadow-xl dark:hover:shadow-green-500/60',
      link: '/resources'
    }
  ];

  const notices = [
    {
      id: 1,
      title: 'Mid-sem Examination Schedule',
      description: 'The mid-term examinations will be conducted from December 15-20, 2025. Check the detailed timetable on the notice board.',
      date: 'Nov 26, 2025',
      tags: ['Examinations', 'Urgent'],
      color: 'border-l-4 border-l-red-500',
      glow: 'dark:shadow-lg dark:shadow-green-500/50 dark:hover:shadow-xl dark:hover:shadow-green-500/60',
      tagColors: ['bg-red-100 text-red-600', 'bg-red-600 text-white']
    },
    {
      id: 2,
      title: 'Register for Infosys Recruitment Drive',
      description: 'Register now for the 2025-26 batch recruitment drive by Infosys. Check the job description and apply now.',
      date: 'Nov 21, 2025',
      tags: ['Placement', 'Open'],
      color: 'border-l-4 border-l-green-500',
      glow: 'dark:shadow-lg dark:shadow-green-500/50 dark:hover:shadow-xl dark:hover:shadow-green-500/60',
      tagColors: ['bg-green-100 text-green-600', 'bg-green-500 text-white']
    },
    {
      id: 3,
      title: 'Tech Fest Registration Open',
      description: 'Register for the Tech Event "Innovate 2025" before December 6th. Multiple competitions and exciting prizes!',
      date: 'Nov 26, 2025',
      tags: ['Events'],
      color: 'border-l-4 border-l-blue-500',
      glow: 'dark:shadow-lg dark:shadow-green-500/50 dark:hover:shadow-xl dark:hover:shadow-green-500/60',
      tagColors: ['bg-blue-100 text-blue-600']
    },
    {
      id: 4,
      title: 'Library Maintenance',
      description: 'Students are requested not to use Library for there will be a window glass installation from 28 Nov-29 Nov 2025.',
      date: 'Nov 26, 2025',
      tags: ['Facilities'],
      color: 'border-l-4 border-l-blue-400',
      glow: 'dark:shadow-lg dark:shadow-green-500/50 dark:hover:shadow-xl dark:hover:shadow-green-500/60',
      tagColors: ['bg-blue-100 text-blue-500']
    }
  ];

  return (
    <div className="max-w-6xl mx-auto px-8 lg:px-12 py-8 relative z-10">

      {/* 1. Academic Resources Section */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Academic Resources</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {resources.map((resource, index) => (
            <Link
              to={resource.link}
              key={index}
              className={`bg-white dark:bg-black p-8 rounded-3xl shadow-md hover:shadow-lg dark:shadow-[0_0_40px_-10px_rgba(34,197,94,0.3)] hover:dark:shadow-[0_0_50px_-8px_rgba(34,197,94,0.4)] hover:-translate-y-1 transition-all duration-300 flex flex-col items-start h-[280px] justify-between group border border-gray-100 dark:border-transparent ${resource.glow}`}
            >
              <div className={`${resource.bg} p-4 rounded-2xl shadow-lg mb-6 group-hover:scale-110 transition-transform duration-300`}>
                {resource.icon}
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3">{resource.title}</h3>
                <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed font-medium">
                  {resource.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* 2. Recent Notices Section */}
      <div>
        <div className="flex justify-between items-end mb-6">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Recent Notices</h2>
          <Link to="/notices" className="bg-green-600 hover:bg-green-700 text-white px-6 py-2.5 rounded-xl font-semibold transition-all active:scale-95 dark:shadow-lg dark:shadow-green-500/50">
            View All Notices
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {notices.map((notice) => (
            <div
              key={notice.id}
              className={`bg-white dark:bg-black rounded-2xl p-6 transition-all flex flex-col h-full shadow-md hover:shadow-lg dark:shadow-[0_0_40px_-10px_rgba(34,197,94,0.3)] hover:dark:shadow-[0_0_50px_-8px_rgba(34,197,94,0.4)] border border-gray-100 dark:border-transparent ${notice.color} ${notice.glow}`}
            >
              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {notice.tags.map((tag, idx) => (
                  <span key={idx} className={`text-xs font-bold px-3 py-1 rounded-lg ${notice.tagColors[idx] || 'bg-gray-100 text-gray-600'}`}>
                    {tag}
                  </span>
                ))}
              </div>

              <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-3 leading-tight">
                {notice.title}
              </h3>

              <p className="text-slate-700 dark:text-gray-400 text-xs leading-relaxed mb-6 flex-grow">
                {notice.description}
              </p>

              <div className="flex items-center text-slate-600 dark:text-gray-400 text-xs font-medium border-t border-gray-100 dark:border-black pt-4 mt-auto">
                <Calendar className="h-4 w-4 mr-2" />
                {notice.date}
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default Home;
