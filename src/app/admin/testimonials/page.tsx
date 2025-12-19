'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useAdmin } from '@/contexts/AdminContext';
import {
  PlusIcon,
  PencilSquareIcon,
  TrashIcon,
  StarIcon,
  MagnifyingGlassIcon,
  UserIcon,
  BuildingOfficeIcon,
} from '@heroicons/react/24/outline';
import { formatDistanceToNow } from 'date-fns';

interface Testimonial {
  id: number;
  name: string;
  position: string;
  company: string;
  industry: string;
  rating: number;
  text: string;
  project: string;
  createdAt: Date;
  status: 'active' | 'inactive';
  featured: boolean;
}

export default function TestimonialManagement() {
  const { user } = useAdmin();
  const [testimonials, setTestimonials] = useState<Testimonial[]>([
    {
      id: 1,
      name: 'Ahmed Al-Mansouri',
      position: 'CEO',
      company: 'Dubai Logistics Hub',
      industry: 'Logistics',
      rating: 5,
      text: 'SAS IT Services transformed our entire network infrastructure. The improvement in efficiency and reliability has been remarkable. Their team is professional, knowledgeable, and always available when we need support.',
      project: 'Enterprise Network Upgrade',
      createdAt: new Date('2024-01-15'),
      status: 'active',
      featured: true,
    },
    {
      id: 2,
      name: 'Sarah Johnson',
      position: 'Operations Manager',
      company: 'Emirates Retail Chain',
      industry: 'Retail',
      rating: 5,
      text: 'The CCTV system installation across our 15 locations was flawlessly executed. The centralized monitoring has significantly improved our security posture. Excellent project management and technical expertise.',
      project: 'Multi-Location CCTV System',
      createdAt: new Date('2024-01-12'),
      status: 'active',
      featured: true,
    },
    {
      id: 3,
      name: 'Dr. Mohammed Hassan',
      position: 'IT Director',
      company: 'Emirates Healthcare Center',
      industry: 'Healthcare',
      rating: 5,
      text: 'SAS IT Services provided a robust and secure infrastructure that supports our critical healthcare operations seamlessly. Their understanding of healthcare compliance requirements is exceptional.',
      project: 'Hospital IT Infrastructure',
      createdAt: new Date('2024-01-10'),
      status: 'active',
      featured: false,
    },
    {
      id: 4,
      name: 'Lisa Kumar',
      position: 'Facilities Manager',
      company: 'TechCorp Dubai',
      industry: 'Technology',
      rating: 4,
      text: 'The smart office automation solution has transformed our workplace. Energy savings exceeded expectations and employee satisfaction has improved significantly.',
      project: 'Smart Office Automation',
      createdAt: new Date('2024-01-08'),
      status: 'inactive',
      featured: false,
    },
  ]);

  const [searchTerm, setSearchTerm] = useState('');
  const [selectedIndustry, setSelectedIndustry] = useState('All');
  const [selectedStatus, setSelectedStatus] = useState('All');

  const industries = ['All', 'Logistics', 'Retail', 'Healthcare', 'Technology', 'Education', 'Finance'];
  const statuses = ['All', 'active', 'inactive'];

  const filteredTestimonials = testimonials.filter(testimonial => {
    const matchesSearch = testimonial.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         testimonial.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         testimonial.text.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesIndustry = selectedIndustry === 'All' || testimonial.industry === selectedIndustry;
    const matchesStatus = selectedStatus === 'All' || testimonial.status === selectedStatus;
    
    return matchesSearch && matchesIndustry && matchesStatus;
  });

  const handleDelete = (id: number) => {
    if (confirm('Are you sure you want to delete this testimonial?')) {
      setTestimonials(prev => prev.filter(testimonial => testimonial.id !== id));
    }
  };

  const handleStatusChange = (id: number, newStatus: Testimonial['status']) => {
    setTestimonials(prev => prev.map(testimonial => 
      testimonial.id === id ? { ...testimonial, status: newStatus } : testimonial
    ));
  };

  const handleFeaturedToggle = (id: number) => {
    setTestimonials(prev => prev.map(testimonial => 
      testimonial.id === id ? { ...testimonial, featured: !testimonial.featured } : testimonial
    ));
  };

  const renderStars = (rating: number) => {
    return [...Array(5)].map((_, i) => (
      <StarIcon
        key={i}
        className={`h-4 w-4 ${i < rating ? 'text-yellow-400 fill-current' : 'text-gray-600'}`}
      />
    ));
  };

  return (
    <div className="min-h-screen bg-[#1a1a2e]">
      {/* Header */}
      <header className="bg-[#16213e] border-b border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4">
              <Link
                href="/admin/dashboard"
                className="text-gray-300 hover:text-[#4a9eff] transition-colors"
              >
                ← Back to Dashboard
              </Link>
              <h1 className="text-2xl font-bold text-white">Testimonial Management</h1>
            </div>
            
            <Link
              href="/admin/testimonials/create"
              className="btn-primary"
            >
              <PlusIcon className="h-5 w-5 mr-2" />
              Add New Testimonial
            </Link>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Filters */}
        <div className="card mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="relative">
              <MagnifyingGlassIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search testimonials..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-[#1a1a2e] border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-[#4a9eff] focus:outline-none"
              />
            </div>

            <select
              value={selectedIndustry}
              onChange={(e) => setSelectedIndustry(e.target.value)}
              className="w-full px-4 py-3 bg-[#1a1a2e] border border-gray-600 rounded-lg text-white focus:border-[#4a9eff] focus:outline-none"
            >
              {industries.map(industry => (
                <option key={industry} value={industry}>
                  {industry === 'All' ? 'All Industries' : industry}
                </option>
              ))}
            </select>

            <select
              value={selectedStatus}
              onChange={(e) => setSelectedStatus(e.target.value)}
              className="w-full px-4 py-3 bg-[#1a1a2e] border border-gray-600 rounded-lg text-white focus:border-[#4a9eff] focus:outline-none"
            >
              {statuses.map(status => (
                <option key={status} value={status}>
                  {status === 'All' ? 'All Statuses' : status.charAt(0).toUpperCase() + status.slice(1)}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="card text-center">
            <div className="text-2xl font-bold text-[#4a9eff] mb-2">
              {testimonials.length}
            </div>
            <div className="text-gray-300 text-sm">Total Testimonials</div>
          </div>
          <div className="card text-center">
            <div className="text-2xl font-bold text-green-400 mb-2">
              {testimonials.filter(t => t.status === 'active').length}
            </div>
            <div className="text-gray-300 text-sm">Active</div>
          </div>
          <div className="card text-center">
            <div className="text-2xl font-bold text-purple-400 mb-2">
              {testimonials.filter(t => t.featured).length}
            </div>
            <div className="text-gray-300 text-sm">Featured</div>
          </div>
          <div className="card text-center">
            <div className="text-2xl font-bold text-yellow-400 mb-2">
              {(testimonials.reduce((acc, t) => acc + t.rating, 0) / testimonials.length).toFixed(1)}
            </div>
            <div className="text-gray-300 text-sm">Average Rating</div>
          </div>
        </div>

        {/* Testimonials List */}
        <div className="space-y-6">
          {filteredTestimonials.length === 0 ? (
            <div className="card text-center py-12">
              <UserIcon className="h-16 w-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">No testimonials found</h3>
              <p className="text-gray-300 mb-6">
                {searchTerm || selectedIndustry !== 'All' || selectedStatus !== 'All'
                  ? 'Try adjusting your search or filters.'
                  : 'Add your first client testimonial to get started.'}
              </p>
              <Link href="/admin/testimonials/create" className="btn-primary">
                <PlusIcon className="h-5 w-5 mr-2" />
                Add New Testimonial
              </Link>
            </div>
          ) : (
            filteredTestimonials.map((testimonial) => (
              <div key={testimonial.id} className="card">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-4">
                      <span className={`px-2 py-1 ${testimonial.status === 'active' ? 'bg-green-600' : 'bg-gray-600'} text-white rounded text-xs font-medium`}>
                        {testimonial.status.charAt(0).toUpperCase() + testimonial.status.slice(1)}
                      </span>
                      {testimonial.featured && (
                        <span className="px-2 py-1 bg-purple-600 text-white rounded text-xs font-medium">
                          Featured
                        </span>
                      )}
                      <span className="px-2 py-1 bg-[#0f3460] text-[#4a9eff] rounded text-xs font-medium">
                        {testimonial.industry}
                      </span>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                      <div className="lg:col-span-2">
                        <blockquote className="text-gray-300 italic mb-4 text-lg leading-relaxed">
                          &ldquo;{testimonial.text}&rdquo;
                        </blockquote>

                        <div className="flex mb-2">
                          {renderStars(testimonial.rating)}
                        </div>

                        <div className="text-sm text-gray-400">
                          Project: <span className="text-[#4a9eff]">{testimonial.project}</span>
                        </div>
                      </div>

                      <div className="bg-[#0f3460] rounded-lg p-4">
                        <div className="flex items-center mb-3">
                          <div className="w-12 h-12 bg-[#4a9eff] rounded-full flex items-center justify-center mr-3">
                            <UserIcon className="h-6 w-6 text-white" />
                          </div>
                          <div>
                            <div className="text-white font-semibold">{testimonial.name}</div>
                            <div className="text-gray-300 text-sm">{testimonial.position}</div>
                          </div>
                        </div>

                        <div className="flex items-center text-gray-300 text-sm">
                          <BuildingOfficeIcon className="h-4 w-4 mr-2" />
                          <span>{testimonial.company}</span>
                        </div>

                        <div className="mt-4 text-xs text-gray-400">
                          Added {formatDistanceToNow(testimonial.createdAt)} ago
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col space-y-2 ml-6">
                    <Link
                      href={`/admin/testimonials/edit/${testimonial.id}`}
                      className="p-2 text-gray-400 hover:text-blue-400 transition-colors"
                      title="Edit Testimonial"
                    >
                      <PencilSquareIcon className="h-5 w-5" />
                    </Link>
                    
                    <button
                      onClick={() => handleDelete(testimonial.id)}
                      className="p-2 text-gray-400 hover:text-red-400 transition-colors"
                      title="Delete Testimonial"
                    >
                      <TrashIcon className="h-5 w-5" />
                    </button>
                  </div>
                </div>

                {/* Quick Actions */}
                <div className="mt-6 pt-4 border-t border-gray-700 flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <select
                      value={testimonial.status}
                      onChange={(e) => handleStatusChange(testimonial.id, e.target.value as Testimonial['status'])}
                      className="px-3 py-1 bg-[#1a1a2e] border border-gray-600 rounded text-white text-sm focus:border-[#4a9eff] focus:outline-none"
                    >
                      <option value="active">Active</option>
                      <option value="inactive">Inactive</option>
                    </select>

                    <label className="flex items-center text-sm">
                      <input
                        type="checkbox"
                        checked={testimonial.featured}
                        onChange={() => handleFeaturedToggle(testimonial.id)}
                        className="mr-2 rounded border-gray-600 text-[#4a9eff] focus:ring-[#4a9eff]"
                      />
                      <span className="text-gray-300">Featured</span>
                    </label>
                  </div>

                  <div className="text-sm text-gray-400">
                    Last updated: {formatDistanceToNow(testimonial.createdAt)} ago
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

