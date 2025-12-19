'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAdmin } from '@/contexts/AdminContext';
import Link from 'next/link';
import {
  DocumentTextIcon,
  ChatBubbleLeftRightIcon,
  FolderOpenIcon,
  UserGroupIcon,
  ChartBarIcon,
  PlusIcon,
  ArrowRightOnRectangleIcon,
  PencilSquareIcon,
  EyeIcon,
} from '@heroicons/react/24/outline';

export default function AdminDashboard() {
  const { user, logout, isAuthenticated } = useAdmin();
  const router = useRouter();

  const [stats, setStats] = useState({
    totalBlogs: 6,
    totalTestimonials: 8,
    totalProjects: 12,
    totalClients: 15,
  });

  const [recentActivity, setRecentActivity] = useState([
    { id: 1, type: 'blog', action: 'created', title: 'Top 5 Cybersecurity Threats', time: '2 hours ago' },
    { id: 2, type: 'testimonial', action: 'updated', title: 'Ahmed Al-Mansouri Review', time: '4 hours ago' },
    { id: 3, type: 'project', action: 'created', title: 'Emirates Healthcare Project', time: '1 day ago' },
    { id: 4, type: 'blog', action: 'published', title: 'Cloud Migration Benefits', time: '2 days ago' },
  ]);

  const handleLogout = () => {
    logout();
    router.push('/admin');
  };

  if (!isAuthenticated) {
    return null;
  }

  const managementCards = [
    {
      title: 'Blog Management',
      description: 'Create, edit, and manage blog posts',
      icon: DocumentTextIcon,
      href: '/admin/blogs',
      count: stats.totalBlogs,
      color: 'bg-blue-600',
    },
    {
      title: 'Testimonials',
      description: 'Manage client testimonials and reviews',
      icon: ChatBubbleLeftRightIcon,
      href: '/admin/testimonials',
      count: stats.totalTestimonials,
      color: 'bg-green-600',
    },
    {
      title: 'Add Project',
      description: 'Create new portfolio projects',
      icon: PlusIcon,
      href: '/admin/projects',
      count: stats.totalProjects,
      color: 'bg-purple-600',
    },
    {
      title: 'Manage Projects',
      description: 'View, edit, and delete projects',
      icon: FolderOpenIcon,
      href: '/admin/projects/manage',
      count: stats.totalProjects,
      color: 'bg-indigo-600',
    },
    {
      title: 'Clients',
      description: 'Manage client information and logos',
      icon: UserGroupIcon,
      href: '/admin/clients',
      count: stats.totalClients,
      color: 'bg-orange-600',
    },
  ];

  return (
    <div className="min-h-screen bg-[#1a1a2e]">
      {/* Admin Header */}
      <header className="bg-[#16213e] border-b border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-white">
                SAS IT Services <span className="text-[#4a9eff]">Admin</span>
              </h1>
            </div>
            
            <div className="flex items-center space-x-4">
              <Link
                href="/"
                className="text-gray-300 hover:text-[#4a9eff] transition-colors"
              >
                <EyeIcon className="h-5 w-5 inline mr-2" />
                View Site
              </Link>
              
              <div className="text-gray-300">
                Welcome, <span className="text-[#4a9eff]">{user?.username}</span>
              </div>
              
              <button
                onClick={handleLogout}
                className="text-gray-300 hover:text-red-400 transition-colors"
              >
                <ArrowRightOnRectangleIcon className="h-5 w-5 inline mr-2" />
                Logout
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-white mb-4">
            Dashboard Overview
          </h2>
          <p className="text-gray-300">
            Manage your website content and monitor activity from here.
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {managementCards.map((card, index) => (
            <div key={index} className="card group hover:bg-[#0f3460] transition-colors">
              <div className="flex items-center justify-between mb-4">
                <div className={`w-12 h-12 ${card.color} rounded-lg flex items-center justify-center`}>
                  <card.icon className="h-6 w-6 text-white" />
                </div>
                <span className="text-2xl font-bold text-[#4a9eff]">
                  {card.count}
                </span>
              </div>
              <h3 className="text-white font-semibold mb-2">{card.title}</h3>
              <p className="text-gray-300 text-sm mb-4">{card.description}</p>
              <Link
                href={card.href}
                className="text-[#4a9eff] hover:text-white transition-colors text-sm font-medium inline-flex items-center"
              >
                Manage
                <PencilSquareIcon className="h-4 w-4 ml-2" />
              </Link>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Quick Actions */}
          <div className="card">
            <h3 className="text-xl font-bold text-white mb-6">Quick Actions</h3>
            <div className="space-y-4">
              <Link
                href="/admin/blogs/create"
                className="flex items-center p-4 bg-[#0f3460] rounded-lg hover:bg-[#1a1a2e] transition-colors group"
              >
                <div className="w-10 h-10 bg-[#4a9eff] rounded-lg flex items-center justify-center mr-4">
                  <PlusIcon className="h-5 w-5 text-white" />
                </div>
                <div>
                  <div className="text-white font-medium group-hover:text-[#4a9eff] transition-colors">
                    Create New Blog Post
                  </div>
                  <div className="text-gray-400 text-sm">Write and publish a new article</div>
                </div>
              </Link>

              <Link
                href="/admin/testimonials/create"
                className="flex items-center p-4 bg-[#0f3460] rounded-lg hover:bg-[#1a1a2e] transition-colors group"
              >
                <div className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center mr-4">
                  <PlusIcon className="h-5 w-5 text-white" />
                </div>
                <div>
                  <div className="text-white font-medium group-hover:text-green-400 transition-colors">
                    Add New Testimonial
                  </div>
                  <div className="text-gray-400 text-sm">Add client feedback and reviews</div>
                </div>
              </Link>

              <Link
                href="/admin/projects"
                className="flex items-center p-4 bg-[#0f3460] rounded-lg hover:bg-[#1a1a2e] transition-colors group"
              >
                <div className="w-10 h-10 bg-purple-600 rounded-lg flex items-center justify-center mr-4">
                  <PlusIcon className="h-5 w-5 text-white" />
                </div>
                <div>
                  <div className="text-white font-medium group-hover:text-purple-400 transition-colors">
                    Add New Project
                  </div>
                  <div className="text-gray-400 text-sm">Showcase completed work</div>
                </div>
              </Link>

              <Link
                href="/admin/projects/manage"
                className="flex items-center p-4 bg-[#0f3460] rounded-lg hover:bg-[#1a1a2e] transition-colors group"
              >
                <div className="w-10 h-10 bg-indigo-600 rounded-lg flex items-center justify-center mr-4">
                  <PencilSquareIcon className="h-5 w-5 text-white" />
                </div>
                <div>
                  <div className="text-white font-medium group-hover:text-indigo-400 transition-colors">
                    Manage Projects
                  </div>
                  <div className="text-gray-400 text-sm">Edit or delete existing projects</div>
                </div>
              </Link>
            </div>
          </div>

          {/* Recent Activity */}
          <div className="card">
            <h3 className="text-xl font-bold text-white mb-6">Recent Activity</h3>
            <div className="space-y-4">
              {recentActivity.map((activity) => (
                <div key={activity.id} className="flex items-center justify-between py-3 border-b border-gray-700 last:border-0">
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-[#4a9eff] rounded-full mr-3"></div>
                    <div>
                      <p className="text-white text-sm">
                        {activity.type.charAt(0).toUpperCase() + activity.type.slice(1)} 
                        <span className="text-[#4a9eff] mx-1">{activity.action}</span>
                      </p>
                      <p className="text-gray-400 text-xs">{activity.title}</p>
                    </div>
                  </div>
                  <span className="text-gray-400 text-xs">{activity.time}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Website Analytics Preview */}
        <div className="mt-8">
          <div className="card">
            <h3 className="text-xl font-bold text-white mb-6">Website Analytics Overview</h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-[#4a9eff] mb-2">2,543</div>
                <div className="text-gray-300 text-sm">Monthly Visitors</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400 mb-2">156</div>
                <div className="text-gray-300 text-sm">Contact Forms</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-400 mb-2">89</div>
                <div className="text-gray-300 text-sm">Quote Requests</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-400 mb-2">45</div>
                <div className="text-gray-300 text-sm">Blog Readers</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

