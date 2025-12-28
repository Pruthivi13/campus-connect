import React, { useState } from 'react';
import resourcesData from '../data/resources.json';
import ResourceCard from '../components/resources/ResourceCard';
import { Search, Filter, BookOpen, ChevronDown, FileQuestion, Book } from 'lucide-react';

const Resources = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filters, setFilters] = useState({
    semester: 'All',
    subject: 'All',
    type: 'All'
  });

  // Extract unique values for dropdowns
  const semesters = ['All', ...new Set(resourcesData.map(item => item.semester))].sort();
  const subjects = ['All', ...new Set(resourcesData.map(item => item.subject))].sort();
  const types = ['All', ...new Set(resourcesData.map(item => item.type))].sort();

  const handleFilterChange = (key, value) => {
    setFilters(prev => ({ ...prev, [key]: value }));
  };

  const filteredResources = resourcesData.filter(resource => {
    const matchesSearch = resource.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      resource.subject.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesSemester = filters.semester === 'All' || resource.semester === filters.semester;
    const matchesSubject = filters.subject === 'All' || resource.subject === filters.subject;
    const matchesType = filters.type === 'All' || resource.type === filters.type;

    return matchesSearch && matchesSemester && matchesSubject && matchesType;
  });

  const pyqResources = filteredResources.filter(r => r.type === 'PYQ');
  const studyMaterials = filteredResources.filter(r => r.type !== 'PYQ');

  return (
    <div className="container mx-auto px-6 py-8 relative z-10">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-4 flex items-center justify-center gap-3">
            <BookOpen className="h-10 w-10 text-green-600" />
            Resource Library
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Access a vast collection of study materials, past papers, and academic resources curated for your success.
          </p>
        </div>

        {/* Controls */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 mb-8">
          <div className="flex flex-col gap-6">

            {/* Search Bar */}
            <div className="relative w-full">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search by title, subject, or author..."
                className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-green-500 transition-all"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            {/* Filters Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

              {/* Semester Filter */}
              <div className="relative">
                <label className="block text-xs font-semibold text-gray-500 uppercase mb-1 ml-1">Semester</label>
                <div className="relative">
                  <select
                    value={filters.semester}
                    onChange={(e) => handleFilterChange('semester', e.target.value)}
                    className="w-full appearance-none pl-4 pr-10 py-3 rounded-xl border border-gray-200 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-green-500 cursor-pointer"
                  >
                    {semesters.map(sem => <option key={sem} value={sem}>{sem}</option>)}
                  </select>
                  <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400 pointer-events-none" />
                </div>
              </div>

              {/* Subject Filter */}
              <div className="relative">
                <label className="block text-xs font-semibold text-gray-500 uppercase mb-1 ml-1">Subject</label>
                <div className="relative">
                  <select
                    value={filters.subject}
                    onChange={(e) => handleFilterChange('subject', e.target.value)}
                    className="w-full appearance-none pl-4 pr-10 py-3 rounded-xl border border-gray-200 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-green-500 cursor-pointer"
                  >
                    {subjects.map(sub => <option key={sub} value={sub}>{sub}</option>)}
                  </select>
                  <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400 pointer-events-none" />
                </div>
              </div>

              {/* Type Filter */}
              <div className="relative">
                <label className="block text-xs font-semibold text-gray-500 uppercase mb-1 ml-1">Resource Type</label>
                <div className="relative">
                  <select
                    value={filters.type}
                    onChange={(e) => handleFilterChange('type', e.target.value)}
                    className="w-full appearance-none pl-4 pr-10 py-3 rounded-xl border border-gray-200 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-green-500 cursor-pointer"
                  >
                    {types.map(type => <option key={type} value={type}>{type}</option>)}
                  </select>
                  <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400 pointer-events-none" />
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-6 text-gray-500 dark:text-gray-400 text-sm font-medium">
          Showing {filteredResources.length} resources
        </div>

        {/* Study Materials Section */}
        {studyMaterials.length > 0 && (
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6 flex items-center gap-2 border-b border-gray-200 dark:border-gray-700 pb-2">
              <Book className="h-6 w-6 text-blue-600" />
              Study Materials
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {studyMaterials.map((resource) => (
                <ResourceCard key={resource.id} resource={resource} />
              ))}
            </div>
          </div>
        )}

        {/* PYQ Section */}
        {pyqResources.length > 0 && (
          <div>
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6 flex items-center gap-2 border-b border-gray-200 dark:border-gray-700 pb-2">
              <FileQuestion className="h-6 w-6 text-purple-600" />
              Previous Year Questions
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {pyqResources.map((resource) => (
                <ResourceCard key={resource.id} resource={resource} />
              ))}
            </div>
          </div>
        )}

        {/* No Results */}
        {filteredResources.length === 0 && (
          <div className="col-span-full text-center py-16">
            <div className="bg-gray-100 dark:bg-gray-800 rounded-full h-20 w-20 flex items-center justify-center mx-auto mb-4">
              <Search className="h-8 w-8 text-gray-400" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">No resources found</h3>
            <p className="text-gray-500 dark:text-gray-400">Try adjusting your filters or search terms.</p>
            <button
              onClick={() => {
                setSearchTerm('');
                setFilters({ semester: 'All', subject: 'All', type: 'All' });
              }}
              className="mt-4 text-green-600 font-semibold hover:underline"
            >
              Clear all filters
            </button>
          </div>
        )}

      </div>
    </div>
  );
};

export default Resources;
