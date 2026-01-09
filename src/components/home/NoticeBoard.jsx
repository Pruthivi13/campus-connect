import React from 'react';
import { useNotices } from '../../hooks/useNotices';
import { Calendar, Bell, Info, Award, Loader2 } from 'lucide-react';

const NoticeBoard = () => {
    const { notices: noticesData, loading } = useNotices(10);
    const getIcon = (type) => {
        switch (type) {
            case 'placement': return <Award className="h-5 w-5 text-purple-500" />;
            case 'academic': return <Calendar className="h-5 w-5 text-blue-500" />;
            case 'admin': return <Info className="h-5 w-5 text-red-500" />;
            case 'event': return <Bell className="h-5 w-5 text-yellow-500" />;
            default: return <Info className="h-5 w-5 text-gray-500" />;
        }
    };

    const getTypeColor = (type) => {
        switch (type) {
            case 'placement': return 'bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300';
            case 'academic': return 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300';
            case 'admin': return 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300';
            case 'event': return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300';
            default: return 'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300';
        }
    };

    return (
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 overflow-hidden">
            <div className="p-6 border-b border-gray-100 dark:border-gray-700 flex justify-between items-center">
                <h2 className="text-xl font-bold text-gray-800 dark:text-white flex items-center gap-2">
                    <Bell className="h-5 w-5 text-green-600" />
                    Notice Board
                </h2>
                <button className="text-sm text-green-600 hover:text-green-700 font-medium">View All</button>
            </div>

            <div className="divide-y divide-gray-100 dark:divide-gray-700">
                {loading ? (
                    <div className="p-8 flex items-center justify-center">
                        <Loader2 className="h-6 w-6 text-green-600 animate-spin" />
                    </div>
                ) : noticesData.map((notice) => (
                    <div key={notice.id} className="p-4 hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors cursor-pointer group">
                        <div className="flex gap-4">
                            <div className={`flex-shrink-0 h-10 w-10 rounded-full flex items-center justify-center ${getTypeColor(notice.type)} bg-opacity-50`}>
                                {getIcon(notice.type)}
                            </div>
                            <div className="flex-1">
                                <div className="flex justify-between items-start mb-1">
                                    <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${getTypeColor(notice.type)}`}>
                                        {notice.type.charAt(0).toUpperCase() + notice.type.slice(1)}
                                    </span>
                                    <span className="text-xs text-gray-400">{notice.date}</span>
                                </div>
                                <h3 className="text-sm font-medium text-gray-800 dark:text-gray-200 group-hover:text-green-600 transition-colors line-clamp-2">
                                    {notice.text}
                                </h3>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default NoticeBoard;
