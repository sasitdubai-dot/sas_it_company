'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { getProjects } from '../../../../lib/projects';
import { Project } from '@prisma/client';
import {
  ChevronRightIcon,
  CheckCircleIcon,
  CalendarIcon,
  UserGroupIcon,
  GlobeAltIcon,
  ExclamationTriangleIcon,
} from '@heroicons/react/24/outline';

export default function DynamicProjectsPage() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    loadProjects();
  }, []);

  const loadProjects = async () => {
    try {
      setLoading(true);
      const data = await getProjects();
      setProjects(data || []);
    } catch (err) {
      console.error('Error loading projects:', err);
      setError('Failed to load projects. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'bg-green-500';
      case 'in-progress':
        return 'bg-blue-500';
      case 'planning':
        return 'bg-yellow-500';
      case 'on-hold':
        return 'bg-orange-500';
      case 'cancelled':
        return 'bg-red-500';
      default:
        return 'bg-gray-500';
    }
  };

  const formatStatus = (status: string) => {
    return status.split('-').map(word => 
      word.charAt(0).toUpperCase() + word.slice(1)
    ).join(' ');
  };

  const formatCategory = (category: string) => {
    return category.split('-').map(word => 
      word.charAt(0).toUpperCase() + word.slice(1)
    ).join(' ');
  };

  if (loading) {
    return (
      <div className="page-container">
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
              className="w-12 h-12 border-4 border-var-accent-blue border-t-transparent rounded-full mx-auto mb-4"
            />
            <p className="text-white">Loading projects...</p>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="page-container">
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <ExclamationTriangleIcon className="w-16 h-16 text-red-500 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-white mb-2">Error Loading Projects</h2>
            <p className="text-gray-400 mb-4">{error}</p>
            <button
              onClick={loadProjects}
              className="btn-primary"
            >
              Try Again
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="page-container">
      {/* Hero Section */}
      <section className="page-section">
        <div className="page-content">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h1 className="page-title">Dynamic Projects Portfolio</h1>
            <p className="page-subtitle">
              Real-time projects from our database. These projects are managed through our admin panel 
              and automatically updated on the website.
            </p>
          </motion.div>

          {/* Stats */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="page-stats"
          >
            <div className="stat-item">
              <div className="stat-value">{projects.length}</div>
              <div className="stat-label">Total Projects</div>
            </div>
            <div className="stat-item">
              <div className="stat-value">{projects.filter(p => p.status === 'completed').length}</div>
              <div className="stat-label">Completed</div>
            </div>
            <div className="stat-item">
              <div className="stat-value">{projects.filter(p => p.status === 'in-progress').length}</div>
              <div className="stat-label">In Progress</div>
            </div>
            <div className="stat-item">
              <div className="stat-value">{projects.filter(p => p.status === 'planning').length}</div>
              <div className="stat-label">Planning</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="page-section" style={{ backgroundColor: '#16213e' }}>
        <div className="page-content">
          {projects.length === 0 ? (
            <div className="text-center py-16">
              <GlobeAltIcon className="w-16 h-16 text-gray-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">No Projects Yet</h3>
              <p className="text-gray-400 mb-4">Projects will appear here once they are added through the admin panel.</p>
              <Link href="/admin/projects" className="btn-primary">
                Add First Project
              </Link>
            </div>
          ) : (
            <div className="page-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))' }}>
              {projects.map((project, index) => (
                <motion.div 
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="card"
                >
                  <div className="mb-6">
                    {/* Project Image */}
                    <div className="w-full h-48 bg-gray-700 rounded-lg mb-4 overflow-hidden">
                      {project.imageUrls && project.imageUrls.length > 0 ? (
                        <Image
                          src={project.imageUrls[0]}
                          alt={project.title}
                          width={400}
                          height={200}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center">
                          <GlobeAltIcon className="w-16 h-16 text-gray-500" />
                        </div>
                      )}
                    </div>
                    
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-sm text-var-accent-blue font-medium">
                        {formatCategory(project.category)}
                      </span>
                      <span className={`px-3 py-1 rounded-full text-xs font-medium text-white ${getStatusColor(project.status)}`}>
                        {formatStatus(project.status)}
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
                    <p className="text-sm text-gray-400 mb-1">Client: {project.client}</p>
                    <p className="text-gray-300 mb-4 leading-relaxed">{project.shortDescription}</p>
                    
                    <div className="flex items-center gap-4 text-sm text-gray-400 mb-4">
                      {project.startDate && (
                        <div className="flex items-center gap-1">
                          <CalendarIcon className="w-4 h-4" />
                          <span>{new Date(project.startDate).toLocaleDateString()}</span>
                        </div>
                      )}
                      {project.teamSize && (
                        <div className="flex items-center gap-1">
                          <UserGroupIcon className="w-4 h-4" />
                          <span>{project.teamSize}</span>
                        </div>
                      )}
                    </div>
                    
                    {project.technologies && project.technologies.length > 0 && (
                      <div className="mb-4">
                        <p className="text-sm font-medium text-white mb-2">Technologies Used:</p>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.slice(0, 4).map((tech, index) => (
                            <span
                              key={index}
                              className="px-2 py-1 bg-var-primary-light text-var-accent-blue rounded text-xs"
                            >
                              {tech}
                            </span>
                          ))}
                          {project.technologies.length > 4 && (
                            <span className="px-2 py-1 bg-gray-600 text-gray-300 rounded text-xs">
                              +{project.technologies.length - 4} more
                            </span>
                          )}
                        </div>
                      </div>
                    )}

                    {project.features && project.features.length > 0 && (
                      <div className="mb-4">
                        <p className="text-sm font-medium text-white mb-2">Key Features:</p>
                        <div className="space-y-1">
                          {project.features.slice(0, 3).map((feature, index) => (
                            <div key={index} className="flex items-center text-sm text-gray-300">
                              <CheckCircleIcon className="w-3 h-3 text-green-500 mr-2 flex-shrink-0" />
                              {feature}
                            </div>
                          ))}
                          {project.features.length > 3 && (
                            <p className="text-xs text-gray-400">+{project.features.length - 3} more features</p>
                          )}
                        </div>
                      </div>
                    )}

                    {project.budget && (
                      <div className="mb-4">
                        <p className="text-sm font-medium text-white">Budget: <span className="text-var-accent-blue">{project.budget}</span></p>
                      </div>
                    )}
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <Link
                      href={`/projects/dynamic/${project.id}`}
                      className="inline-flex items-center text-var-accent-blue hover:text-blue-300 font-medium transition-colors"
                    >
                      View Details
                      <ChevronRightIcon className="w-4 h-4 ml-1" />
                    </Link>
                    
                    {project.projectUrl && (
                      <a
                        href={project.projectUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-gray-400 hover:text-white transition-colors"
                      >
                        Live Demo →
                      </a>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="cta-container">
          <h2 className="cta-title">Ready to Start Your Project?</h2>
          <p className="cta-description">
            Let&apos;s discuss how we can help bring your ideas to life with our expert development team.
          </p>
          <div className="cta-buttons">
            <Link href="/contact" className="cta-btn-primary">
              Start Your Project
            </Link>
            <Link href="/services" className="cta-btn-secondary">
              View Our Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
