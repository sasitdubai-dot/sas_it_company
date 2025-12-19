'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Project } from '@prisma/client';
import {
  PencilSquareIcon,
  TrashIcon,
  PlusIcon,
  EyeIcon,
  ArrowLeftIcon,
  MagnifyingGlassIcon,
} from '@heroicons/react/24/outline';

export default function ManageProjectsPage() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [deleteConfirm, setDeleteConfirm] = useState<string | null>(null);
  const [deleting, setDeleting] = useState(false);
  const router = useRouter();

  useEffect(() => {
    loadProjects();
  }, []);

  const loadProjects = async () => {
    try {
      setLoading(true);
      const response = await fetch('/api/projects');
      if (!response.ok) {
        throw new Error('Failed to fetch projects');
      }
      const data = await response.json();
      setProjects(data || []);
    } catch (err) {
      console.error('Error loading projects:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this project? This action cannot be undone.')) {
      return;
    }

    try {
      setDeleting(true);
      const response = await fetch(`/api/projects/${id}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        throw new Error('Failed to delete project');
      }

      // Remove from local state
      setProjects(projects.filter(p => p.id !== id));
      setDeleteConfirm(null);
    } catch (err) {
      console.error('Error deleting project:', err);
      alert('Failed to delete project. Please try again.');
    } finally {
      setDeleting(false);
    }
  };

  const formatDate = (date: Date | null) => {
    if (!date) return 'N/A';
    return new Date(date).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  };

  const formatCategory = (category: string) => {
    return category
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  };

  const filteredProjects = projects.filter(project =>
    project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    project.client.toLowerCase().includes(searchTerm.toLowerCase()) ||
    project.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <Link
              href="/admin/dashboard"
              className="inline-flex items-center text-[#4a9eff] hover:text-[#3a8eef] transition-colors mb-4"
            >
              <ArrowLeftIcon className="h-5 w-5 mr-2" />
              Back to Dashboard
            </Link>
            <h1 className="admin-title text-3xl">Manage Projects</h1>
            <p className="admin-subtitle">View, edit, and delete your projects</p>
          </div>
          <Link
            href="/admin/projects"
            className="btn-primary inline-flex items-center gap-2"
          >
            <PlusIcon className="h-5 w-5" />
            Add New Project
          </Link>
        </div>

        {/* Search Bar */}
        <div className="card mb-6">
          <div className="relative">
            <MagnifyingGlassIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search projects by title, client, or category..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="form-input pl-10 w-full"
            />
          </div>
        </div>

        {/* Projects List */}
        {loading ? (
          <div className="text-center py-20">
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-4 border-[#4a9eff] border-t-transparent mb-4"></div>
            <p className="text-gray-300">Loading projects...</p>
          </div>
        ) : filteredProjects.length === 0 ? (
          <div className="card text-center py-20">
            <p className="text-gray-300 mb-4">
              {searchTerm ? 'No projects found matching your search.' : 'No projects yet.'}
            </p>
            <Link href="/admin/projects" className="btn-primary inline-flex items-center gap-2">
              <PlusIcon className="h-5 w-5" />
              Add Your First Project
            </Link>
          </div>
        ) : (
          <div className="space-y-3">
            {filteredProjects.map((project) => (
              <div key={project.id} className="card hover:bg-[#0f3460] transition-colors">
                <div className="flex items-start gap-4">
                  {/* Thumbnail */}
                  {project.imageUrls && project.imageUrls.length > 0 ? (
                    <img
                      src={project.imageUrls[0]}
                      alt={project.title}
                      className="w-20 h-20 object-cover rounded-lg flex-shrink-0"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                        const placeholder = e.currentTarget.nextElementSibling;
                        if (placeholder) {
                          (placeholder as HTMLElement).style.display = 'flex';
                        }
                      }}
                    />
                  ) : null}
                  <div className={`w-20 h-20 bg-[#0f3460] rounded-lg flex items-center justify-center flex-shrink-0 ${project.imageUrls && project.imageUrls.length > 0 ? 'hidden' : ''}`}>
                    <span className="text-3xl font-bold text-[#4a9eff]">
                      {project.title.charAt(0).toUpperCase()}
                    </span>
                  </div>

                  {/* Project Info */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1 min-w-0">
                        <h3 className="text-lg font-semibold text-white mb-1 truncate">{project.title}</h3>
                        <p className="text-sm text-gray-400 mb-2">Client: {project.client}</p>
                        
                        {/* Tags */}
                        <div className="flex flex-wrap gap-2 mb-2">
                          <span className="px-2.5 py-1 bg-[#0f3460] text-[#4a9eff] rounded-full text-xs font-medium">
                            {formatCategory(project.category)}
                          </span>
                          <span className={`px-2.5 py-1 rounded-full text-xs font-medium ${
                            project.status === 'completed' ? 'bg-green-500/20 text-green-400' :
                            project.status === 'in-progress' ? 'bg-blue-500/20 text-blue-400' :
                            project.status === 'planning' ? 'bg-yellow-500/20 text-yellow-400' :
                            'bg-gray-500/20 text-gray-400'
                          }`}>
                            {project.status.replace('-', ' ')}
                          </span>
                        </div>

                        {/* Description */}
                        <p className="text-sm text-gray-300 mb-2 line-clamp-2">
                          {project.shortDescription || project.description?.substring(0, 100) || 'No description available.'}
                        </p>

                        {/* Metadata */}
                        <div className="flex flex-wrap gap-3 text-xs text-gray-400 mt-2">
                          <span>Created: {formatDate(project.createdAt)}</span>
                          {project.technologies && project.technologies.length > 0 && (
                            <span>{project.technologies.length} Technologies</span>
                          )}
                          {project.features && project.features.length > 0 && (
                            <span>{project.features.length} Features</span>
                          )}
                        </div>
                      </div>

                      {/* Action Buttons */}
                      <div className="flex gap-2 flex-shrink-0">
                        <Link
                          href={`/projects/${project.id}`}
                          target="_blank"
                          className="inline-flex items-center justify-center gap-1.5 px-3 py-2 bg-[#0f3460] hover:bg-[#1a2a4a] border border-[#4a9eff] text-white rounded-lg transition-colors text-sm"
                          title="View Project"
                        >
                          <EyeIcon className="h-4 w-4" />
                          <span className="hidden sm:inline">View</span>
                        </Link>
                        <Link
                          href={`/admin/projects/edit/${project.id}`}
                          className="inline-flex items-center justify-center gap-1.5 px-3 py-2 bg-[#4a9eff] hover:bg-[#3a8eef] text-white rounded-lg transition-colors text-sm"
                          title="Edit Project"
                        >
                          <PencilSquareIcon className="h-4 w-4" />
                          <span className="hidden sm:inline">Edit</span>
                        </Link>
                        <button
                          onClick={() => handleDelete(project.id)}
                          disabled={deleting}
                          className="inline-flex items-center justify-center gap-1.5 px-3 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed text-sm"
                          title="Delete Project"
                        >
                          <TrashIcon className="h-4 w-4" />
                          <span className="hidden sm:inline">Delete</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Stats */}
        {!loading && projects.length > 0 && (
          <div className="mt-8 card">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <div>
                <div className="text-2xl font-bold text-[#4a9eff]">{projects.length}</div>
                <div className="text-gray-400 text-sm">Total Projects</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-green-400">
                  {projects.filter(p => p.status === 'completed').length}
                </div>
                <div className="text-gray-400 text-sm">Completed</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-blue-400">
                  {projects.filter(p => p.status === 'in-progress').length}
                </div>
                <div className="text-gray-400 text-sm">In Progress</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-yellow-400">
                  {projects.filter(p => p.status === 'planning').length}
                </div>
                <div className="text-gray-400 text-sm">Planning</div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

