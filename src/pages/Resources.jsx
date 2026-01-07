import React, { useState, useEffect } from 'react';
import resourcesData from '../data/resources.json';
import ResourceCard from '../components/resources/ResourceCard';
import Dropdown from '../components/common/Dropdown';
import { Search, Filter, BookOpen, ChevronDown } from 'lucide-react';
import { useSearchParams } from 'react-router-dom';

const Resources = () => {
  const [searchParams] = useSearchParams();
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const query = searchParams.get('search');
    if (query) {
      setSearchTerm(query);
    }
  }, [searchParams]);
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
      resource.subject.toLowerCase().includes(searchTerm.toLowerCase()) ||
      resource.author.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesSemester = filters.semester === 'All' || resource.semester === filters.semester;
    const matchesSubject = filters.subject === 'All' || resource.subject === filters.subject;
    const matchesType = filters.type === 'All' || resource.type === filters.type;

    return matchesSearch && matchesSemester && matchesSubject && matchesType;
  });

  return (
    <div className="container mx-auto px-6 py-8 relative z-10">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4 flex items-center justify-center gap-3">
            <BookOpen className="h-10 w-10 text-green-600" />
            Resource Library
          </h1>
          <p className="text-xl text-slate-700 dark:text-gray-300 max-w-2xl mx-auto">
            Access a vast collection of study materials, past papers, and academic resources curated for your success.
          </p>
        </div>

        {/* Controls */}
        <div className="bg-white dark:bg-black p-6 rounded-2xl border border-gray-200 dark:border-green-500/30 mb-8 dark:shadow-[0_0_40px_-10px_rgba(34,197,94,0.2)]">
          <div className="flex flex-col gap-6">

            {/* Search Bar */}
            <div className="relative w-full">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search by title, subject, or author..."
                className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 dark:border-green-500/10 bg-gray-50 dark:bg-[#1a1a1a] text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-green-500 transition-all"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            {/* Filters Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

              {/* Semester Filter */}
              <Dropdown
                label="Semester"
                options={semesters}
                value={filters.semester}
                onChange={(val) => handleFilterChange('semester', val)}
              />

              {/* Subject Filter */}
              <Dropdown
                label="Subject"
                options={subjects}
                value={filters.subject}
                onChange={(val) => handleFilterChange('subject', val)}
              />

              {/* Type Filter */}
              <Dropdown
                label="Resource Type"
                options={types}
                value={filters.type}
                onChange={(val) => handleFilterChange('type', val)}
              />

            </div>
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-6 text-gray-500 dark:text-gray-400 text-sm font-medium">
          Showing {filteredResources.length} resources
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredResources.length > 0 ? (
            filteredResources.map((resource) => (
              <ResourceCard key={resource.id} resource={resource} />
            ))
          ) : (
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
    </div>
  );
};

export default Resources;
