'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import React from 'react';
import { Project } from '@prisma/client';
import {
  BuildingOfficeIcon,
  ShoppingBagIcon,
  TruckIcon,
  HeartIcon,
  AcademicCapIcon,
  HomeIcon,
  CheckCircleIcon,
  CalendarIcon,
  UserGroupIcon,
  CurrencyDollarIcon,
  GlobeAltIcon,
  DevicePhoneMobileIcon,
  CogIcon,
  ServerIcon,
  ShieldCheckIcon,
  CodeBracketIcon,
  LinkIcon,
  ArrowRightIcon,
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

// Calculate duration between dates
const calculateDuration = (startDate: Date | null, completionDate: Date | null) => {
  if (!startDate || !completionDate) return null;
  const diffTime = Math.abs(completionDate.getTime() - startDate.getTime());
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  const weeks = Math.ceil(diffDays / 7);
  return `${weeks} week${weeks !== 1 ? 's' : ''}`;
};

export default function ProjectsPage() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadProjects();
  }, []);

  const loadProjects = async () => {
    try {
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

  // Transform database projects to display format
  const displayProjects = projects.map((project) => {
    const Icon = getCategoryIcon(project.category);
    const duration = calculateDuration(
      project.startDate ? new Date(project.startDate) : null,
      project.completionDate ? new Date(project.completionDate) : null
    );
    
    return {
      id: project.id,
      title: project.title,
      client: project.client,
      industry: formatCategoryName(project.category),
      icon: Icon,
      description: project.description,
      results: project.features || [],
      technologies: project.technologies || [],
      duration: duration || project.teamSize || 'N/A',
      team: project.teamSize || 'N/A',
      investment: project.budget || 'N/A',
      image: project.imageUrls && project.imageUrls.length > 0 ? project.imageUrls[0] : null,
      testimonial: project.testimonial && project.testimonialAuthor ? {
        text: project.testimonial,
        author: project.testimonialAuthor
      } : null,
      githubUrl: project.githubUrl || null,
      projectUrl: project.projectUrl || null,
    };
  });

  // Calculate industries from actual projects
  const getIndustries = () => {
    const categoryCounts: { [key: string]: number } = {};
    projects.forEach(project => {
      const category = formatCategoryName(project.category);
      categoryCounts[category] = (categoryCounts[category] || 0) + 1;
    });

    const industryMap: { [key: string]: { icon: React.ComponentType<React.SVGProps<SVGSVGElement>>; color: string } } = {
      'Web Development': { icon: GlobeAltIcon, color: 'bg-blue-600' },
      'Mobile Development': { icon: DevicePhoneMobileIcon, color: 'bg-purple-600' },
      'Software Development': { icon: CogIcon, color: 'bg-green-600' },
      'Cloud Infrastructure': { icon: ServerIcon, color: 'bg-yellow-600' },
      'Cybersecurity': { icon: ShieldCheckIcon, color: 'bg-red-600' },
      'Healthcare': { icon: HeartIcon, color: 'bg-red-600' },
      'Education': { icon: AcademicCapIcon, color: 'bg-blue-600' },
      'Retail': { icon: ShoppingBagIcon, color: 'bg-green-600' },
      'Logistics': { icon: TruckIcon, color: 'bg-yellow-600' },
      'Corporate Offices': { icon: BuildingOfficeIcon, color: 'bg-purple-600' },
      'Residential': { icon: HomeIcon, color: 'bg-pink-600' },
    };

    return Object.entries(categoryCounts).map(([name, count]) => ({
      name,
      icon: industryMap[name]?.icon || GlobeAltIcon,
      projects: count,
      color: industryMap[name]?.color || 'bg-gray-600',
    }));
  };

  const industries = getIndustries();

  return (
    <div className="bg-[#1a1a2e]">
      {/* Hero Section */}
      <section className="hero-gradient py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our <span className="text-gradient">Project Portfolio</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Showcasing successful IT implementations across diverse industries in Dubai and UAE. 
              From small businesses to large enterprises, we deliver excellence.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-[#4a9eff]">{projects.length}</div>
                <div className="text-gray-300 text-sm">Total Projects</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#4a9eff]">{projects.filter(p => p.status === 'completed').length}</div>
                <div className="text-gray-300 text-sm">Completed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#4a9eff]">{projects.filter(p => p.status === 'in-progress').length}</div>
                <div className="text-gray-300 text-sm">In Progress</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#4a9eff]">{industries.length}</div>
                <div className="text-gray-300 text-sm">Categories</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-20 bg-[#16213e]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">
              Industries We Serve
            </h2>
            <p className="text-gray-300">
              Specialized IT solutions across various sectors
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {industries.map((industry, index) => (
              <div key={index} className="card text-center group">
                <div className={`w-12 h-12 ${industry.color} rounded-lg flex items-center justify-center mx-auto mb-4`}>
                  <industry.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-white font-medium mb-2 text-sm">
                  {industry.name}
                </h3>
                <p className="text-gray-400 text-xs">
                  {industry.projects} Projects
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">
              Featured Case Studies
            </h2>
            <p className="text-gray-300">
              In-depth look at our most impactful projects
            </p>
          </div>

          {loading ? (
            <div className="text-center py-20">
              <div className="inline-block animate-spin rounded-full h-12 w-12 border-4 border-[#4a9eff] border-t-transparent mb-4"></div>
              <p className="text-gray-300">Loading projects...</p>
            </div>
          ) : displayProjects.length === 0 ? (
            <div className="text-center py-20">
              <GlobeAltIcon className="h-16 w-16 text-gray-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">No Projects Yet</h3>
              <p className="text-gray-400">Projects will appear here once they are added through the admin panel.</p>
            </div>
          ) : (
            <div className="space-y-20">
              {displayProjects.map((project, index) => (
                <div key={project.id} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                    <div className="flex items-center mb-6">
                      <project.icon className="h-10 w-10 text-[#4a9eff] mr-4" />
                      <div>
                        <Link href={`/projects/${project.id}`}>
                          <h3 className="text-2xl font-bold text-white hover:text-[#4a9eff] transition-colors cursor-pointer">
                            {project.title}
                          </h3>
                        </Link>
                        <p className="text-gray-400">{project.client}</p>
                      </div>
                    </div>

                    <p className="text-gray-300 mb-6 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Project Details */}
                    <div className="grid grid-cols-3 gap-4 mb-6">
                      <div className="text-center">
                        <CalendarIcon className="h-5 w-5 text-[#4a9eff] mx-auto mb-2" />
                        <div className="text-white font-medium text-sm">{project.duration}</div>
                        <div className="text-gray-400 text-xs">Duration</div>
                      </div>
                      <div className="text-center">
                        <UserGroupIcon className="h-5 w-5 text-[#4a9eff] mx-auto mb-2" />
                        <div className="text-white font-medium text-sm">{project.team}</div>
                        <div className="text-gray-400 text-xs">Team Size</div>
                      </div>
                      <div className="text-center">
                        <CurrencyDollarIcon className="h-5 w-5 text-[#4a9eff] mx-auto mb-2" />
                        <div className="text-white font-medium text-sm">{project.investment}</div>
                        <div className="text-gray-400 text-xs">Investment</div>
                      </div>
                    </div>

                    {/* Key Results */}
                    {project.results && project.results.length > 0 && (
                      <div className="mb-6">
                        <h4 className="text-white font-semibold mb-3">Key Results:</h4>
                        <div className="space-y-2">
                          {project.results.map((result, idx) => (
                            <div key={idx} className="flex items-center text-gray-300">
                              <CheckCircleIcon className="h-4 w-4 text-[#4a9eff] mr-2 flex-shrink-0" />
                              <span className="text-sm">{result}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Technologies */}
                    {project.technologies && project.technologies.length > 0 && (
                      <div className="mb-6">
                        <h4 className="text-white font-semibold mb-3">Technologies Used:</h4>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech, idx) => (
                            <span
                              key={idx}
                              className="px-3 py-1 bg-[#0f3460] text-[#4a9eff] rounded-full text-xs font-medium"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Testimonial */}
                    {project.testimonial && (
                      <div className="card bg-[#0f3460] border-[#4a9eff] mb-6">
                        <p className="text-gray-300 italic mb-4">
                          &ldquo;{project.testimonial.text}&rdquo;
                        </p>
                        <p className="text-white font-medium">
                          — {project.testimonial.author}
                        </p>
                      </div>
                    )}

                    {/* Project Links */}
                    <div className="flex flex-wrap gap-3 mb-6">
                      <Link
                        href={`/projects/${project.id}`}
                        className="inline-flex items-center gap-2 bg-[#4a9eff] hover:bg-[#3a8eef] text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                      >
                        View Details
                        <ArrowRightIcon className="h-5 w-5" />
                      </Link>
                      {project.projectUrl && (
                        <a
                          href={project.projectUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 bg-[#0f3460] hover:bg-[#1a2a4a] border border-[#4a9eff] text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <LinkIcon className="h-5 w-5" />
                          Live Project
                        </a>
                      )}
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 bg-[#0f3460] hover:bg-[#1a2a4a] border border-[#4a9eff] text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <CodeBracketIcon className="h-5 w-5" />
                          GitHub
                        </a>
                      )}
                    </div>
                  </div>

                  <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                    <Link href={`/projects/${project.id}`}>
                      <div className="card p-0 overflow-hidden cursor-pointer hover:opacity-90 transition-opacity">
                        {project.image ? (
                          <div className="aspect-video relative overflow-hidden bg-gray-800">
                            <img
                              src={project.image}
                              alt={project.title}
                              className="w-full h-full object-cover"
                              onError={(e) => {
                                console.error('Image load error for:', project.image);
                                // Show placeholder on error
                                e.currentTarget.style.display = 'none';
                                const placeholder = e.currentTarget.nextElementSibling;
                                if (placeholder) {
                                  (placeholder as HTMLElement).style.display = 'flex';
                                }
                              }}
                            />
                            <div className="absolute inset-0 bg-gradient-to-br from-[#0f3460] to-[#4a9eff] flex items-center justify-center hidden">
                              <div className="text-center text-white">
                                <project.icon className="h-16 w-16 mx-auto mb-4" />
                                <h4 className="text-xl font-semibold mb-2">{project.industry}</h4>
                                <p className="text-white/80">{project.client}</p>
                              </div>
                            </div>
                          </div>
                        ) : (
                          <div className="aspect-video bg-gradient-to-br from-[#0f3460] to-[#4a9eff] flex items-center justify-center">
                            <div className="text-center text-white">
                              <project.icon className="h-16 w-16 mx-auto mb-4" />
                              <h4 className="text-xl font-semibold mb-2">{project.industry}</h4>
                              <p className="text-white/80">{project.client}</p>
                            </div>
                          </div>
                        )}
                      </div>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-[#16213e]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">
              Our Project Process
            </h2>
            <p className="text-gray-300">
              Structured approach ensuring successful project delivery
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="card text-center">
              <div className="w-12 h-12 bg-[#4a9eff] rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold">
                1
              </div>
              <h3 className="text-white font-semibold mb-3">Discovery & Analysis</h3>
              <p className="text-gray-300 text-sm">
                Comprehensive assessment of requirements, existing infrastructure, and business objectives.
              </p>
            </div>

            <div className="card text-center">
              <div className="w-12 h-12 bg-[#4a9eff] rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold">
                2
              </div>
              <h3 className="text-white font-semibold mb-3">Design & Planning</h3>
              <p className="text-gray-300 text-sm">
                Detailed solution design, project timeline, resource allocation, and risk assessment.
              </p>
            </div>

            <div className="card text-center">
              <div className="w-12 h-12 bg-[#4a9eff] rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold">
                3
              </div>
              <h3 className="text-white font-semibold mb-3">Implementation</h3>
              <p className="text-gray-300 text-sm">
                Professional installation, configuration, testing, and quality assurance processes.
              </p>
            </div>

            <div className="card text-center">
              <div className="w-12 h-12 bg-[#4a9eff] rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold">
                4
              </div>
              <h3 className="text-white font-semibold mb-3">Support & Maintenance</h3>
              <p className="text-gray-300 text-sm">
                Ongoing support, monitoring, maintenance, and optimization services.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#0f3460] to-[#4a9eff]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Start Your Next Project?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Let&apos;s discuss how we can help transform your IT infrastructure with proven solutions.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-white text-[#0f3460] px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Start Your Project
            </Link>
            <Link href="/services" className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-[#0f3460] transition-colors">
              View Our Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

