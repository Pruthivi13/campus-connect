import React from 'react';
import { FileText, Video, Link as LinkIcon, Download, Eye } from 'lucide-react';

const ResourceCard = ({ resource }) => {
    const getIcon = (type) => {
        switch (type) {
            case 'PDF': return <FileText className="h-6 w-6 text-red-500" />;
            case 'Video': return <Video className="h-6 w-6 text-blue-500" />;
            case 'PYQ': return <FileText className="h-6 w-6 text-purple-500" />;
            case 'Syllabus': return <FileText className="h-6 w-6 text-green-500" />;
            default: return <LinkIcon className="h-6 w-6 text-gray-500" />;
        }
    };

    return (
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 p-5 hover:shadow-md transition-all duration-300 group">
            <div className="flex items-start justify-between mb-4">
                <div className="bg-gray-50 dark:bg-gray-700/50 p-3 rounded-lg group-hover:scale-110 transition-transform duration-300">
                    {getIcon(resource.type)}
                </div>
                <span className="text-xs font-semibold px-2 py-1 rounded-md bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 uppercase tracking-wider">
                    {resource.type}
                </span>
            </div>

            <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-2 line-clamp-2 min-h-[3.5rem]">
                {resource.title}
            </h3>

            <div className="text-sm text-gray-500 dark:text-gray-400 mb-4 space-y-1">
                <p><span className="font-medium">Subject:</span> {resource.subject}</p>
                <p><span className="font-medium">By:</span> {resource.author}</p>
            </div>

            <div className="pt-4 border-t border-gray-100 dark:border-gray-700 flex justify-between items-center">
                <span className="text-xs text-gray-400">{resource.date}</span>
                <a
                    href={resource.downloadLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm font-semibold text-green-600 hover:text-green-700 transition-colors"
                >
                    {resource.type === 'Video' ? (
                        <>
                            <Eye className="h-4 w-4" /> Watch
                        </>
                    ) : (
                        <>
                            <Download className="h-4 w-4" /> Download
                        </>
                    )}
                </a>
            </div>
        </div>
    );
};

export default ResourceCard;
