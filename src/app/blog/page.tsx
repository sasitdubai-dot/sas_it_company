'use client';

import { useState } from 'react';
import Link from 'next/link';
import { 
  CalendarIcon, 
  UserIcon, 
  TagIcon, 
  ArrowRightIcon,
  MagnifyingGlassIcon,
  FunnelIcon,
} from '@heroicons/react/24/outline';
import { formatDistanceToNow } from 'date-fns';

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = [
    'All',
    'Tech News',
    'IT Tips',
    'Project Highlights',
    'Security',
    'Networking',
    'Cloud Solutions',
    'Industry Insights',
  ];

  const blogPosts = [
    {
      id: 1,
      title: 'Top 5 Cybersecurity Threats Facing Dubai Businesses in 2024',
      excerpt: 'Learn about the latest cybersecurity threats targeting businesses in Dubai and how to protect your organization with comprehensive security measures.',
      content: 'Cybersecurity has become a critical concern for businesses in Dubai as digital transformation accelerates...',
      category: 'Security',
      author: 'Ahmed Al-Rashid',
      publishedAt: new Date('2024-01-15'),
      readTime: '8 min read',
      image: '/images/blog/cybersecurity-threats.jpg',
      tags: ['Cybersecurity', 'Business Security', 'Dubai', 'Threats'],
      featured: true,
    },
    {
      id: 2,
      title: 'How to Choose the Right CCTV System for Your Business',
      excerpt: 'A comprehensive guide to selecting the perfect surveillance system based on your business needs, budget, and security requirements.',
      content: 'Choosing the right CCTV system is crucial for business security. This guide will help you make an informed decision...',
      category: 'Project Highlights',
      author: 'Sarah Johnson',
      publishedAt: new Date('2024-01-10'),
      readTime: '6 min read',
      image: '/images/blog/cctv-guide.jpg',
      tags: ['CCTV', 'Surveillance', 'Business Security', 'Guide'],
      featured: false,
    },
    {
      id: 3,
      title: 'The Benefits of Cloud Migration for UAE Businesses',
      excerpt: 'Discover why more UAE businesses are moving to the cloud and how it can improve efficiency, reduce costs, and enhance scalability.',
      content: 'Cloud migration has become essential for businesses looking to stay competitive in today\'s digital landscape...',
      category: 'Cloud Solutions',
      author: 'Mohammed Hassan',
      publishedAt: new Date('2024-01-08'),
      readTime: '10 min read',
      image: '/images/blog/cloud-migration.jpg',
      tags: ['Cloud Computing', 'Migration', 'UAE Business', 'Digital Transformation'],
      featured: true,
    },
    {
      id: 4,
      title: '5 Essential IT Tips for Small Businesses in Dubai',
      excerpt: 'Simple yet effective IT strategies that can help small businesses in Dubai improve productivity and reduce technology costs.',
      content: 'Small businesses often struggle with IT management. Here are five essential tips to help streamline your technology...',
      category: 'IT Tips',
      author: 'Lisa Kumar',
      publishedAt: new Date('2024-01-05'),
      readTime: '5 min read',
      image: '/images/blog/small-business-it.jpg',
      tags: ['Small Business', 'IT Tips', 'Productivity', 'Dubai'],
      featured: false,
    },
    {
      id: 5,
      title: 'Network Infrastructure Trends Shaping UAE Businesses',
      excerpt: 'Explore the latest networking technologies and trends that are revolutionizing how businesses in the UAE manage their IT infrastructure.',
      content: 'The networking landscape is evolving rapidly. Here are the key trends shaping the future of business networking...',
      category: 'Networking',
      author: 'Ahmed Al-Rashid',
      publishedAt: new Date('2024-01-03'),
      readTime: '7 min read',
      image: '/images/blog/network-trends.jpg',
      tags: ['Networking', 'Infrastructure', 'UAE', 'Technology Trends'],
      featured: false,
    },
    {
      id: 6,
      title: 'Success Story: Emirates Retail Chain CCTV Implementation',
      excerpt: 'Learn how we helped Emirates Retail Chain secure their 15 locations with an advanced CCTV surveillance system.',
      content: 'This case study details our comprehensive CCTV implementation project for Emirates Retail Chain...',
      category: 'Project Highlights',
      author: 'Sarah Johnson',
      publishedAt: new Date('2023-12-28'),
      readTime: '12 min read',
      image: '/images/blog/emirates-retail-case.jpg',
      tags: ['Case Study', 'CCTV', 'Retail', 'Success Story'],
      featured: true,
    },
  ];

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const featuredPosts = blogPosts.filter(post => post.featured);
  const recentPosts = blogPosts.slice(0, 5);

  return (
    <div className="bg-[#1a1a2e]">
      {/* Hero Section */}
      <section className="hero-gradient py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              IT <span className="text-gradient">Insights & News</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Stay updated with the latest technology trends, expert tips, and 
              project highlights from the IT industry in Dubai and UAE.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-xl mx-auto relative">
              <MagnifyingGlassIcon className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search articles, tips, and insights..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-[#16213e] border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-[#4a9eff] focus:outline-none"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="py-8 bg-[#16213e] border-b border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center">
            <FunnelIcon className="h-5 w-5 text-gray-400 mr-3" />
            <div className="flex flex-wrap gap-2 justify-center">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    selectedCategory === category
                      ? 'bg-[#4a9eff] text-white'
                      : 'bg-[#1a1a2e] text-gray-300 hover:bg-[#0f3460] hover:text-[#4a9eff]'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      {selectedCategory === 'All' && (
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">
              Featured Articles
            </h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {featuredPosts.slice(0, 3).map((post, index) => (
                <Link key={post.id} href={`/blog/${post.id}`}>
                  <div className={`card group cursor-pointer h-full ${index === 0 ? 'lg:col-span-2 lg:row-span-2' : ''}`}>
                    <div className="aspect-video bg-gradient-to-br from-[#0f3460] to-[#4a9eff] rounded-lg mb-6 flex items-center justify-center">
                      <div className="text-center text-white">
                        <TagIcon className="h-12 w-12 mx-auto mb-2" />
                        <p className="text-sm opacity-80">{post.category}</p>
                      </div>
                    </div>
                    
                    <div className="space-y-1 mb-4">
                      {post.tags.slice(0, 3).map((tag, idx) => (
                        <span
                          key={idx}
                          className="inline-block px-2 py-1 bg-[#0f3460] text-[#4a9eff] rounded text-xs font-medium mr-2"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    <h3 className={`font-bold text-white mb-4 group-hover:text-[#4a9eff] transition-colors ${
                      index === 0 ? 'text-2xl' : 'text-xl'
                    }`}>
                      {post.title}
                    </h3>
                    
                    <p className="text-gray-300 mb-6 leading-relaxed">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between text-sm text-gray-400">
                      <div className="flex items-center">
                        <UserIcon className="h-4 w-4 mr-2" />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center">
                          <CalendarIcon className="h-4 w-4 mr-1" />
                          <span>{formatDistanceToNow(post.publishedAt)} ago</span>
                        </div>
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center text-[#4a9eff] font-medium mt-4 group-hover:text-white transition-colors">
                      Read More
                      <ArrowRightIcon className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* All Posts */}
      <section className={`py-20 ${selectedCategory === 'All' ? 'bg-[#16213e]' : ''}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            
            {/* Main Content */}
            <div className="lg:col-span-3">
              <h2 className="text-3xl font-bold text-white mb-8">
                {selectedCategory === 'All' ? 'Latest Articles' : `${selectedCategory} Articles`}
              </h2>
              
              <div className="space-y-8">
                {filteredPosts.map((post) => (
                  <Link key={post.id} href={`/blog/${post.id}`}>
                    <div className="card group cursor-pointer">
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="aspect-video bg-gradient-to-br from-[#0f3460] to-[#4a9eff] rounded-lg flex items-center justify-center">
                          <TagIcon className="h-8 w-8 text-white" />
                        </div>
                        
                        <div className="md:col-span-2">
                          <div className="space-y-1 mb-3">
                            {post.tags.slice(0, 3).map((tag, idx) => (
                              <span
                                key={idx}
                                className="inline-block px-2 py-1 bg-[#0f3460] text-[#4a9eff] rounded text-xs font-medium mr-2"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                          
                          <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#4a9eff] transition-colors">
                            {post.title}
                          </h3>
                          
                          <p className="text-gray-300 mb-4">
                            {post.excerpt}
                          </p>
                          
                          <div className="flex items-center justify-between text-sm text-gray-400">
                            <div className="flex items-center space-x-4">
                              <div className="flex items-center">
                                <UserIcon className="h-4 w-4 mr-1" />
                                <span>{post.author}</span>
                              </div>
                              <div className="flex items-center">
                                <CalendarIcon className="h-4 w-4 mr-1" />
                                <span>{formatDistanceToNow(post.publishedAt)} ago</span>
                              </div>
                            </div>
                            <span>{post.readTime}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>

              {filteredPosts.length === 0 && (
                <div className="text-center py-12">
                  <TagIcon className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-2">
                    No articles found
                  </h3>
                  <p className="text-gray-400">
                    Try adjusting your search or category filter.
                  </p>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Recent Posts */}
              <div className="card">
                <h3 className="text-xl font-bold text-white mb-6">Recent Posts</h3>
                <div className="space-y-4">
                  {recentPosts.map((post) => (
                    <Link key={post.id} href={`/blog/${post.id}`}>
                      <div className="group cursor-pointer">
                        <h4 className="text-white font-medium mb-2 group-hover:text-[#4a9eff] transition-colors text-sm leading-tight">
                          {post.title}
                        </h4>
                        <p className="text-gray-400 text-xs">
                          {formatDistanceToNow(post.publishedAt)} ago • {post.readTime}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Categories */}
              <div className="card">
                <h3 className="text-xl font-bold text-white mb-6">Categories</h3>
                <div className="space-y-2">
                  {categories.slice(1).map((category) => (
                    <button
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      className="block w-full text-left text-gray-300 hover:text-[#4a9eff] transition-colors text-sm py-2"
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>

              {/* Newsletter Signup */}
              <div className="card bg-[#0f3460] border-[#4a9eff]">
                <h3 className="text-xl font-bold text-white mb-4">Stay Updated</h3>
                <p className="text-gray-300 mb-4 text-sm">
                  Subscribe to our newsletter for the latest IT insights and tips.
                </p>
                <div className="space-y-3">
                  <input
                    type="email"
                    placeholder="Your email address"
                    className="w-full px-4 py-2 bg-[#1a1a2e] border border-gray-600 rounded text-white placeholder-gray-400 focus:border-[#4a9eff] focus:outline-none text-sm"
                  />
                  <button className="btn-primary w-full text-sm py-2">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#0f3460] to-[#4a9eff]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Need Expert IT Advice?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Our team of certified IT professionals is ready to help you with your technology challenges.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-white text-[#0f3460] px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Get Expert Consultation
            </Link>
            <Link href="/services" className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-[#0f3460] transition-colors">
              Explore Our Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

