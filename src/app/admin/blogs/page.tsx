'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useAdmin } from '@/contexts/AdminContext';
import {
  PlusIcon,
  PencilSquareIcon,
  TrashIcon,
  EyeIcon,
  MagnifyingGlassIcon,
  FunnelIcon,
  CalendarIcon,
  UserIcon,
} from '@heroicons/react/24/outline';
import { formatDistanceToNow } from 'date-fns';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  author: string;
  publishedAt: Date;
  status: 'published' | 'draft' | 'archived';
  readTime: string;
  tags: string[];
  featured: boolean;
}

export default function BlogManagement() {
  const { user } = useAdmin();
  const [blogs, setBlogs] = useState<BlogPost[]>([
    {
      id: 1,
      title: 'Top 5 Cybersecurity Threats Facing Dubai Businesses in 2024',
      excerpt: 'Learn about the latest cybersecurity threats targeting businesses in Dubai and how to protect your organization.',
      content: 'Cybersecurity has become a critical concern for businesses in Dubai...',
      category: 'Security',
      author: 'Ahmed Al-Rashid',
      publishedAt: new Date('2024-01-15'),
      status: 'published',
      readTime: '8 min read',
      tags: ['Cybersecurity', 'Business Security', 'Dubai', 'Threats'],
      featured: true,
    },
    {
      id: 2,
      title: 'How to Choose the Right CCTV System for Your Business',
      excerpt: 'A comprehensive guide to selecting the perfect surveillance system based on your business needs.',
      content: 'Choosing the right CCTV system is crucial for business security...',
      category: 'Project Highlights',
      author: 'Sarah Johnson',
      publishedAt: new Date('2024-01-10'),
      status: 'published',
      readTime: '6 min read',
      tags: ['CCTV', 'Surveillance', 'Business Security', 'Guide'],
      featured: false,
    },
    {
      id: 3,
      title: 'The Benefits of Cloud Migration for UAE Businesses',
      excerpt: 'Discover why more UAE businesses are moving to the cloud and how it can improve efficiency.',
      content: 'Cloud migration has become essential for businesses looking to stay competitive...',
      category: 'Cloud Solutions',
      author: 'Mohammed Hassan',
      publishedAt: new Date('2024-01-08'),
      status: 'published',
      readTime: '10 min read',
      tags: ['Cloud Computing', 'Migration', 'UAE Business'],
      featured: true,
    },
    {
      id: 4,
      title: 'Network Security Best Practices - Draft',
      excerpt: 'Essential network security measures every business should implement.',
      content: 'Network security is the foundation of any secure IT infrastructure...',
      category: 'Security',
      author: 'Ahmed Al-Rashid',
      publishedAt: new Date('2024-01-12'),
      status: 'draft',
      readTime: '12 min read',
      tags: ['Network Security', 'Best Practices', 'IT Security'],
      featured: false,
    },
  ]);

  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedStatus, setSelectedStatus] = useState('All');

  const categories = ['All', 'Security', 'Project Highlights', 'Cloud Solutions', 'IT Tips', 'Networking'];
  const statuses = ['All', 'published', 'draft', 'archived'];

  const filteredBlogs = blogs.filter(blog => {
    const matchesSearch = blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         blog.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         blog.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === 'All' || blog.category === selectedCategory;
    const matchesStatus = selectedStatus === 'All' || blog.status === selectedStatus;
    
    return matchesSearch && matchesCategory && matchesStatus;
  });

  const handleDelete = (id: number) => {
    if (confirm('Are you sure you want to delete this blog post?')) {
      setBlogs(prev => prev.filter(blog => blog.id !== id));
    }
  };

  const handleStatusChange = (id: number, newStatus: BlogPost['status']) => {
    setBlogs(prev => prev.map(blog => 
      blog.id === id ? { ...blog, status: newStatus } : blog
    ));
  };

  const handleFeaturedToggle = (id: number) => {
    setBlogs(prev => prev.map(blog => 
      blog.id === id ? { ...blog, featured: !blog.featured } : blog
    ));
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'published': return 'bg-green-600';
      case 'draft': return 'bg-yellow-600';
      case 'archived': return 'bg-gray-600';
      default: return 'bg-gray-600';
    }
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
              <h1 className="text-2xl font-bold text-white">Blog Management</h1>
            </div>
            
            <Link
              href="/admin/blogs/create"
              className="btn-primary"
            >
              <PlusIcon className="h-5 w-5 mr-2" />
              Create New Post
            </Link>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Filters */}
        <div className="card mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Search */}
            <div className="relative">
              <MagnifyingGlassIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search blog posts..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-[#1a1a2e] border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-[#4a9eff] focus:outline-none"
              />
            </div>

            {/* Category Filter */}
            <div>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full px-4 py-3 bg-[#1a1a2e] border border-gray-600 rounded-lg text-white focus:border-[#4a9eff] focus:outline-none"
              >
                {categories.map(category => (
                  <option key={category} value={category}>
                    {category === 'All' ? 'All Categories' : category}
                  </option>
                ))}
              </select>
            </div>

            {/* Status Filter */}
            <div>
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
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="card text-center">
            <div className="text-2xl font-bold text-[#4a9eff] mb-2">
              {blogs.length}
            </div>
            <div className="text-gray-300 text-sm">Total Posts</div>
          </div>
          <div className="card text-center">
            <div className="text-2xl font-bold text-green-400 mb-2">
              {blogs.filter(b => b.status === 'published').length}
            </div>
            <div className="text-gray-300 text-sm">Published</div>
          </div>
          <div className="card text-center">
            <div className="text-2xl font-bold text-yellow-400 mb-2">
              {blogs.filter(b => b.status === 'draft').length}
            </div>
            <div className="text-gray-300 text-sm">Drafts</div>
          </div>
          <div className="card text-center">
            <div className="text-2xl font-bold text-purple-400 mb-2">
              {blogs.filter(b => b.featured).length}
            </div>
            <div className="text-gray-300 text-sm">Featured</div>
          </div>
        </div>

        {/* Blog Posts List */}
        <div className="space-y-6">
          {filteredBlogs.length === 0 ? (
            <div className="card text-center py-12">
              <div className="text-gray-400 mb-4">
                <PlusIcon className="h-16 w-16 mx-auto mb-4" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">No blog posts found</h3>
              <p className="text-gray-300 mb-6">
                {searchTerm || selectedCategory !== 'All' || selectedStatus !== 'All'
                  ? 'Try adjusting your search or filters.'
                  : 'Create your first blog post to get started.'}
              </p>
              <Link href="/admin/blogs/create" className="btn-primary">
                <PlusIcon className="h-5 w-5 mr-2" />
                Create New Post
              </Link>
            </div>
          ) : (
            filteredBlogs.map((blog) => (
              <div key={blog.id} className="card">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-3">
                      <span className={`px-2 py-1 ${getStatusColor(blog.status)} text-white rounded text-xs font-medium`}>
                        {blog.status.charAt(0).toUpperCase() + blog.status.slice(1)}
                      </span>
                      {blog.featured && (
                        <span className="px-2 py-1 bg-purple-600 text-white rounded text-xs font-medium">
                          Featured
                        </span>
                      )}
                      <span className="px-2 py-1 bg-[#0f3460] text-[#4a9eff] rounded text-xs font-medium">
                        {blog.category}
                      </span>
                    </div>

                    <h3 className="text-xl font-semibold text-white mb-2">
                      {blog.title}
                    </h3>
                    
                    <p className="text-gray-300 mb-4 leading-relaxed">
                      {blog.excerpt}
                    </p>

                    <div className="flex items-center space-x-6 text-sm text-gray-400">
                      <div className="flex items-center">
                        <UserIcon className="h-4 w-4 mr-1" />
                        <span>{blog.author}</span>
                      </div>
                      <div className="flex items-center">
                        <CalendarIcon className="h-4 w-4 mr-1" />
                        <span>{formatDistanceToNow(blog.publishedAt)} ago</span>
                      </div>
                      <span>{blog.readTime}</span>
                    </div>

                    <div className="mt-3">
                      <div className="flex flex-wrap gap-1">
                        {blog.tags.slice(0, 3).map((tag, idx) => (
                          <span
                            key={idx}
                            className="px-2 py-1 bg-gray-700 text-gray-300 rounded text-xs"
                          >
                            {tag}
                          </span>
                        ))}
                        {blog.tags.length > 3 && (
                          <span className="px-2 py-1 bg-gray-700 text-gray-300 rounded text-xs">
                            +{blog.tags.length - 3} more
                          </span>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col space-y-2 ml-6">
                    <Link
                      href={`/blog/${blog.id}`}
                      className="p-2 text-gray-400 hover:text-[#4a9eff] transition-colors"
                      title="View Post"
                    >
                      <EyeIcon className="h-5 w-5" />
                    </Link>
                    
                    <Link
                      href={`/admin/blogs/edit/${blog.id}`}
                      className="p-2 text-gray-400 hover:text-blue-400 transition-colors"
                      title="Edit Post"
                    >
                      <PencilSquareIcon className="h-5 w-5" />
                    </Link>
                    
                    <button
                      onClick={() => handleDelete(blog.id)}
                      className="p-2 text-gray-400 hover:text-red-400 transition-colors"
                      title="Delete Post"
                    >
                      <TrashIcon className="h-5 w-5" />
                    </button>
                  </div>
                </div>

                {/* Quick Actions */}
                <div className="mt-4 pt-4 border-t border-gray-700 flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <select
                      value={blog.status}
                      onChange={(e) => handleStatusChange(blog.id, e.target.value as BlogPost['status'])}
                      className="px-3 py-1 bg-[#1a1a2e] border border-gray-600 rounded text-white text-sm focus:border-[#4a9eff] focus:outline-none"
                    >
                      <option value="draft">Draft</option>
                      <option value="published">Published</option>
                      <option value="archived">Archived</option>
                    </select>

                    <label className="flex items-center text-sm">
                      <input
                        type="checkbox"
                        checked={blog.featured}
                        onChange={() => handleFeaturedToggle(blog.id)}
                        className="mr-2 rounded border-gray-600 text-[#4a9eff] focus:ring-[#4a9eff]"
                      />
                      <span className="text-gray-300">Featured</span>
                    </label>
                  </div>

                  <div className="text-sm text-gray-400">
                    Last updated: {formatDistanceToNow(blog.publishedAt)} ago
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

