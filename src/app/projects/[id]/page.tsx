'use client';

import Link from 'next/link';
import { useParams, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import React from 'react';
import { Project } from '@prisma/client';
import {
  ArrowLeftIcon,
  CalendarIcon,
  UserGroupIcon,
  CurrencyDollarIcon,
  CheckCircleIcon,
  GlobeAltIcon,
  DevicePhoneMobileIcon,
  CogIcon,
  ServerIcon,
  ShieldCheckIcon,
  BuildingOfficeIcon,
  ShoppingBagIcon,
  TruckIcon,
  HeartIcon,
  AcademicCapIcon,
  HomeIcon,
  CodeBracketIcon,
  LinkIcon,
} from '@heroicons/react/24/outline';

// Map category to icon
const getCategoryIcon = (category: string) => {
  const categoryMap: { [key: string]: React.ComponentType<React.SVGProps<SVGSVGElement>> } = {
    'web-development': GlobeAltIcon,
    'mobile-development': DevicePhoneMobileIcon,
    'software-development': CogIcon,
    'cloud-infrastructure': ServerIcon,
    'cybersecurity': ShieldCheckIcon,
    'logistics': TruckIcon,
    'retail': ShoppingBagIcon,
    'healthcare': HeartIcon,
    'education': AcademicCapIcon,
    'corporate': BuildingOfficeIcon,
    'residential': HomeIcon,
  };
  return categoryMap[category] || GlobeAltIcon;
};

// Format category name for display
const formatCategoryName = (category: string) => {
  return category
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
};

// Format status for display
const formatStatus = (status: string) => {
  return status
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
};

// Get status color
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

// Format date for display
const formatDate = (date: Date | null) => {
  if (!date) return 'N/A';
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
};

export default function ProjectDetailPage() {
  const params = useParams();
  const router = useRouter();
  const [project, setProject] = useState<Project | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (params.id) {
      loadProject(params.id as string);
    }
  }, [params.id]);

  const loadProject = async (id: string) => {
    try {
      setLoading(true);
      const response = await fetch(`/api/projects/${id}`);
      
      if (!response.ok) {
        if (response.status === 404) {
          setError('Project not found');
        } else {
          setError('Failed to load project');
        }
        return;
      }

      const data = await response.json();
      setProject(data);
    } catch (err) {
      console.error('Error loading project:', err);
      setError('Failed to load project');
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="bg-[#1a1a2e] min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-4 border-[#4a9eff] border-t-transparent mb-4"></div>
          <p className="text-gray-300">Loading project...</p>
        </div>
      </div>
    );
  }

  if (error || !project) {
    return (
      <div className="bg-[#1a1a2e] min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Project Not Found</h2>
          <p className="text-gray-300 mb-6">{error || 'The project you are looking for does not exist.'}</p>
          <Link
            href="/projects"
            className="inline-block bg-[#4a9eff] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#3a8eef] transition-colors"
          >
            Back to Projects
          </Link>
        </div>
      </div>
    );
  }

  const Icon = getCategoryIcon(project.category);

  return (
    <div className="bg-[#1a1a2e] min-h-screen">
      {/* Header with Back Button */}
      <div className="bg-[#16213e] border-b border-gray-700">
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12 py-6">
          <Link
            href="/projects"
            className="inline-flex items-center text-[#4a9eff] hover:text-[#3a8eef] transition-colors mb-4"
          >
            <ArrowLeftIcon className="h-5 w-5 mr-2" />
            Back to Projects
          </Link>
        </div>
      </div>

      {/* Project Hero Section */}
      <section className="hero-gradient py-12">
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="flex items-center mb-4">
            <Icon className="h-10 w-10 text-[#4a9eff] mr-4" />
            <div>
              <div className="flex items-center gap-3 mb-2">
                <h1 className="text-4xl md:text-5xl font-bold text-white">
                  {project.title}
                </h1>
                <span className={`px-3 py-1 rounded-full text-sm font-medium text-white ${getStatusColor(project.status)}`}>
                  {formatStatus(project.status)}
                </span>
              </div>
              <p className="text-xl text-gray-300">{project.client}</p>
              <p className="text-gray-400 mt-1">{formatCategoryName(project.category)}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12">
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Project Images */}
              {project.imageUrls && project.imageUrls.length > 0 && (
                <div className="card p-0 overflow-hidden">
                  <div className="grid grid-cols-1 gap-4">
                    {project.imageUrls.map((imageUrl, index) => (
                      <div key={index} className="aspect-video relative overflow-hidden bg-gray-800">
                        <img
                          src={imageUrl}
                          alt={`${project.title} - Image ${index + 1}`}
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            e.currentTarget.style.display = 'none';
                          }}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Description */}
              <div className="card">
                <h2 className="text-2xl font-bold text-white mb-4">Project Overview</h2>
                <p className="text-gray-300 leading-relaxed whitespace-pre-line">
                  {project.description}
                </p>
              </div>

              {/* Key Features */}
              {project.features && project.features.length > 0 && (
                <div className="card">
                  <h2 className="text-2xl font-bold text-white mb-4">Key Features</h2>
                  <div className="space-y-3">
                    {project.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start text-gray-300">
                        <CheckCircleIcon className="h-5 w-5 text-[#4a9eff] mr-3 flex-shrink-0 mt-0.5" />
                        <span className="text-base">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Technologies */}
              {project.technologies && project.technologies.length > 0 && (
                <div className="card">
                  <h2 className="text-2xl font-bold text-white mb-4">Technologies Used</h2>
                  <div className="flex flex-wrap gap-3">
                    {project.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-4 py-2 bg-[#0f3460] text-[#4a9eff] rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Testimonial */}
              {project.testimonial && project.testimonialAuthor && (
                <div className="card bg-[#0f3460] border-[#4a9eff]">
                  <h2 className="text-2xl font-bold text-white mb-4">Client Testimonial</h2>
                  <p className="text-gray-300 italic mb-4 text-lg leading-relaxed">
                    &ldquo;{project.testimonial}&rdquo;
                  </p>
                  <p className="text-white font-medium text-lg">
                    — {project.testimonialAuthor}
                  </p>
                </div>
              )}

              {/* GitHub Link */}
              {project.githubUrl && (
                <div className="card bg-[#0f3460] border-[#4a9eff]">
                  <h2 className="text-2xl font-bold text-white mb-4">Source Code</h2>
                  <p className="text-gray-300 mb-4 text-base">
                    Check out the source code for this project on GitHub.
                  </p>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 bg-[#4a9eff] hover:bg-[#3a8eef] text-white px-6 py-3 rounded-lg font-semibold transition-colors group"
                  >
                    <CodeBracketIcon className="h-6 w-6 group-hover:scale-110 transition-transform" />
                    <span>View on GitHub</span>
                    <LinkIcon className="h-5 w-5 opacity-70 group-hover:opacity-100 transition-opacity" />
                  </a>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Project Details Card */}
              <div className="card">
                <h3 className="text-xl font-bold text-white mb-4">Project Details</h3>
                <div className="space-y-4">
                  <div>
                    <div className="flex items-center text-gray-400 mb-2">
                      <CalendarIcon className="h-5 w-5 mr-2" />
                      <span className="text-sm font-medium">Start Date</span>
                    </div>
                    <p className="text-white">{formatDate(project.startDate)}</p>
                  </div>

                  <div>
                    <div className="flex items-center text-gray-400 mb-2">
                      <CalendarIcon className="h-5 w-5 mr-2" />
                      <span className="text-sm font-medium">Completion Date</span>
                    </div>
                    <p className="text-white">{formatDate(project.completionDate)}</p>
                  </div>

                  {project.teamSize && (
                    <div>
                      <div className="flex items-center text-gray-400 mb-2">
                        <UserGroupIcon className="h-5 w-5 mr-2" />
                        <span className="text-sm font-medium">Team Size</span>
                      </div>
                      <p className="text-white">{project.teamSize}</p>
                    </div>
                  )}

                  {project.budget && (
                    <div>
                      <div className="flex items-center text-gray-400 mb-2">
                        <CurrencyDollarIcon className="h-5 w-5 mr-2" />
                        <span className="text-sm font-medium">Budget</span>
                      </div>
                      <p className="text-white">{project.budget}</p>
                    </div>
                  )}
                </div>
              </div>

              {/* Project Links */}
              {(project.projectUrl || project.githubUrl) && (
                <div className="card">
                  <h3 className="text-xl font-bold text-white mb-4">Project Links</h3>
                  <div className="space-y-3">
                    {project.projectUrl && (
                      <a
                        href={project.projectUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 w-full bg-[#4a9eff] hover:bg-[#3a8eef] text-white px-4 py-3 rounded-lg font-semibold transition-colors"
                      >
                        <LinkIcon className="h-5 w-5" />
                        Visit Live Project
                      </a>
                    )}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 w-full bg-[#0f3460] hover:bg-[#1a2a4a] border border-[#4a9eff] text-white px-4 py-3 rounded-lg font-semibold transition-colors"
                      >
                        <CodeBracketIcon className="h-5 w-5" />
                        View on GitHub
                      </a>
                    )}
                  </div>
                </div>
              )}

              {/* Short Description */}
              {project.shortDescription && (
                <div className="card">
                  <h3 className="text-xl font-bold text-white mb-2">Quick Summary</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {project.shortDescription}
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

