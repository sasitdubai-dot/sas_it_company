'use client';

import React, { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Project } from '@prisma/client';
import {
  PlusIcon,
  XMarkIcon,
  DocumentArrowUpIcon,
  CheckCircleIcon,
  ExclamationTriangleIcon,
  PencilSquareIcon,
  ArrowLeftIcon,
  GlobeAltIcon,
  DevicePhoneMobileIcon,
  CogIcon,
  ServerIcon,
  ShieldCheckIcon,
} from '@heroicons/react/24/outline';

interface ProjectFormData {
  title: string;
  client: string;
  description: string;
  shortDescription: string;
  category: string;
  status: string;
  startDate: string;
  completionDate: string;
  technologies: string[];
  features: string[];
  imageUrls: string[];
  budget: string;
  teamSize: string;
  testimonial: string;
  testimonialAuthor: string;
  projectUrl: string;
  githubUrl: string;
}

const projectCategories = [
  { value: 'web-development', label: 'Web Development', icon: GlobeAltIcon },
  { value: 'mobile-development', label: 'Mobile Development', icon: DevicePhoneMobileIcon },
  { value: 'software-development', label: 'Software Development', icon: CogIcon },
  { value: 'cloud-infrastructure', label: 'Cloud Infrastructure', icon: ServerIcon },
  { value: 'cybersecurity', label: 'Cybersecurity', icon: ShieldCheckIcon },
];

const projectStatuses = [
  { value: 'planning', label: 'Planning', color: 'bg-yellow-500' },
  { value: 'in-progress', label: 'In Progress', color: 'bg-blue-500' },
  { value: 'completed', label: 'Completed', color: 'bg-green-500' },
  { value: 'on-hold', label: 'On Hold', color: 'bg-orange-500' },
  { value: 'cancelled', label: 'Cancelled', color: 'bg-red-500' },
];

export default function EditProjectPage() {
  const params = useParams();
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState<string>('');

  const [formData, setFormData] = useState<ProjectFormData>({
    title: '',
    client: '',
    description: '',
    shortDescription: '',
    category: '',
    status: 'planning',
    startDate: '',
    completionDate: '',
    technologies: [],
    features: [],
    imageUrls: [],
    budget: '',
    teamSize: '',
    testimonial: '',
    testimonialAuthor: '',
    projectUrl: '',
    githubUrl: '',
  });

  const [newTechnology, setNewTechnology] = useState('');
  const [newFeature, setNewFeature] = useState('');

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
        throw new Error('Failed to fetch project');
      }
      const project: Project = await response.json();
      
      setFormData({
        title: project.title,
        client: project.client,
        description: project.description,
        shortDescription: project.shortDescription,
        category: project.category,
        status: project.status,
        startDate: project.startDate ? new Date(project.startDate).toISOString().split('T')[0] : '',
        completionDate: project.completionDate ? new Date(project.completionDate).toISOString().split('T')[0] : '',
        technologies: project.technologies || [],
        features: project.features || [],
        imageUrls: project.imageUrls || [],
        budget: project.budget || '',
        teamSize: project.teamSize || '',
        testimonial: project.testimonial || '',
        testimonialAuthor: project.testimonialAuthor || '',
        projectUrl: project.projectUrl || '',
        githubUrl: project.githubUrl || '',
      });
    } catch (err) {
      console.error('Error loading project:', err);
      setErrorMessage('Failed to load project');
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleAddTechnology = () => {
    if (newTechnology.trim() && !formData.technologies.includes(newTechnology.trim())) {
      setFormData(prev => ({
        ...prev,
        technologies: [...prev.technologies, newTechnology.trim()]
      }));
      setNewTechnology('');
    }
  };

  const handleRemoveTechnology = (tech: string) => {
    setFormData(prev => ({
      ...prev,
      technologies: prev.technologies.filter(t => t !== tech)
    }));
  };

  const handleAddFeature = () => {
    if (newFeature.trim() && !formData.features.includes(newFeature.trim())) {
      setFormData(prev => ({
        ...prev,
        features: [...prev.features, newFeature.trim()]
      }));
      setNewFeature('');
    }
  };

  const handleRemoveFeature = (feature: string) => {
    setFormData(prev => ({
      ...prev,
      features: prev.features.filter(f => f !== feature)
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      if (!formData.title || !formData.client || !formData.description || !formData.shortDescription || !formData.category) {
        throw new Error('Please fill in all required fields');
      }

      const projectData = {
        ...formData,
        startDate: formData.startDate ? new Date(formData.startDate) : null,
        completionDate: formData.completionDate ? new Date(formData.completionDate) : null,
      };

      const response = await fetch(`/api/projects/update/${params.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(projectData),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.details || errorData.error || 'Failed to update project');
      }

      setSubmitStatus('success');
      setTimeout(() => {
        router.push('/admin/projects/manage');
      }, 2000);
    } catch (error) {
      console.error('Error updating project:', error);
      const errorMsg = error instanceof Error ? error.message : 'An unknown error occurred';
      setErrorMessage(errorMsg);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (loading) {
    return (
      <div className="admin-container">
        <div className="text-center py-20">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-4 border-[#4a9eff] border-t-transparent mb-4"></div>
          <p className="text-gray-300">Loading project...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="admin-container">
      <div className="admin-form max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-6">
          <Link
            href="/admin/projects/manage"
            className="inline-flex items-center text-[#4a9eff] hover:text-[#3a8eef] transition-colors mb-4"
          >
            <ArrowLeftIcon className="h-5 w-5 mr-2" />
            Back to Manage Projects
          </Link>
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="admin-header"
          >
            <div className="admin-icon">
              <PencilSquareIcon className="w-8 h-8 text-white" />
            </div>
            <h1 className="admin-title">Edit Project</h1>
            <p className="admin-subtitle">Update project information</p>
          </motion.div>
        </div>

        {/* Success/Error Messages */}
        {submitStatus === 'success' && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="success-message flex items-center gap-2"
          >
            <CheckCircleIcon className="w-5 h-5" />
            Project updated successfully! Redirecting...
          </motion.div>
        )}

        {submitStatus === 'error' && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="error-message flex flex-col gap-2"
          >
            <div className="flex items-center gap-2">
              <ExclamationTriangleIcon className="w-5 h-5" />
              <span className="font-semibold">Error updating project</span>
            </div>
            {errorMessage && (
              <p className="text-sm ml-7 opacity-90">{errorMessage}</p>
            )}
          </motion.div>
        )}

        {/* Form - Reuse the same form structure from add page */}
        <motion.form
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          onSubmit={handleSubmit}
          className="space-y-8"
        >
          {/* Basic Information */}
          <div className="card">
            <h2 className="text-xl font-semibold text-white mb-6">Basic Information</h2>
            <div className="form-grid">
              <div>
                <label className="form-label">Project Title *</label>
                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleInputChange}
                  className="form-input"
                  required
                />
              </div>
              
              <div>
                <label className="form-label">Client Name *</label>
                <input
                  type="text"
                  name="client"
                  value={formData.client}
                  onChange={handleInputChange}
                  className="form-input"
                  required
                />
              </div>

              <div>
                <label className="form-label">Category *</label>
                <select
                  name="category"
                  value={formData.category}
                  onChange={handleInputChange}
                  className="form-select"
                  required
                >
                  <option value="">Select category</option>
                  {projectCategories.map(cat => (
                    <option key={cat.value} value={cat.value}>{cat.label}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="form-label">Status</label>
                <select
                  name="status"
                  value={formData.status}
                  onChange={handleInputChange}
                  className="form-select"
                >
                  {projectStatuses.map(status => (
                    <option key={status.value} value={status.value}>{status.label}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="form-label">Start Date</label>
                <input
                  type="date"
                  name="startDate"
                  value={formData.startDate}
                  onChange={handleInputChange}
                  className="form-input"
                />
              </div>

              <div>
                <label className="form-label">Completion Date</label>
                <input
                  type="date"
                  name="completionDate"
                  value={formData.completionDate}
                  onChange={handleInputChange}
                  className="form-input"
                />
              </div>
            </div>
          </div>

          {/* Project Description */}
          <div className="card">
            <h2 className="text-xl font-semibold text-white mb-6">Project Description</h2>
            <div className="space-y-4">
              <div>
                <label className="form-label">Short Description *</label>
                <input
                  type="text"
                  name="shortDescription"
                  value={formData.shortDescription}
                  onChange={handleInputChange}
                  className="form-input"
                  maxLength={150}
                  required
                />
                <p className="text-sm text-gray-400 mt-1">
                  {formData.shortDescription.length}/150 characters
                </p>
              </div>

              <div>
                <label className="form-label">Detailed Description *</label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  className="form-input form-textarea"
                  rows={6}
                  required
                />
              </div>
            </div>
          </div>

          {/* Technologies */}
          <div className="card">
            <h2 className="text-xl font-semibold text-white mb-6">Technologies Used</h2>
            <div className="flex gap-2 mb-4">
              <input
                type="text"
                value={newTechnology}
                onChange={(e) => setNewTechnology(e.target.value)}
                className="form-input flex-1"
                placeholder="Add technology"
                onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), handleAddTechnology())}
              />
              <button
                type="button"
                onClick={handleAddTechnology}
                className="btn-primary"
              >
                <PlusIcon className="w-4 h-4" />
              </button>
            </div>
            <div className="flex flex-wrap gap-2">
              {formData.technologies.map(tech => (
                <span
                  key={tech}
                  className="inline-flex items-center gap-1 px-3 py-1 bg-var-primary-light text-var-accent-blue rounded-full text-sm"
                >
                  {tech}
                  <button
                    type="button"
                    onClick={() => handleRemoveTechnology(tech)}
                    className="text-red-400 hover:text-red-300"
                  >
                    <XMarkIcon className="w-4 h-4" />
                  </button>
                </span>
              ))}
            </div>
          </div>

          {/* Features */}
          <div className="card">
            <h2 className="text-xl font-semibold text-white mb-6">Key Features</h2>
            <div className="flex gap-2 mb-4">
              <input
                type="text"
                value={newFeature}
                onChange={(e) => setNewFeature(e.target.value)}
                className="form-input flex-1"
                placeholder="Add feature"
                onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), handleAddFeature())}
              />
              <button
                type="button"
                onClick={handleAddFeature}
                className="btn-primary"
              >
                <PlusIcon className="w-4 h-4" />
              </button>
            </div>
            <div className="space-y-2">
              {formData.features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-3 bg-var-primary-medium rounded-lg"
                >
                  <span className="text-white">{feature}</span>
                  <button
                    type="button"
                    onClick={() => handleRemoveFeature(feature)}
                    className="text-red-400 hover:text-red-300"
                  >
                    <XMarkIcon className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Image URLs (Display only - images are managed separately) */}
          {formData.imageUrls && formData.imageUrls.length > 0 && (
            <div className="card">
              <h2 className="text-xl font-semibold text-white mb-6">Project Images</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {formData.imageUrls.map((url, index) => (
                  <div key={index} className="relative">
                    <img
                      src={url}
                      alt={`Project image ${index + 1}`}
                      className="w-full h-32 object-cover rounded-lg"
                    />
                  </div>
                ))}
              </div>
              <p className="text-sm text-gray-400 mt-4">
                Note: To change images, delete and recreate the project or contact support.
              </p>
            </div>
          )}

          {/* Additional Details */}
          <div className="card">
            <h2 className="text-xl font-semibold text-white mb-6">Additional Details</h2>
            <div className="form-grid">
              <div>
                <label className="form-label">Budget (Optional)</label>
                <input
                  type="text"
                  name="budget"
                  value={formData.budget}
                  onChange={handleInputChange}
                  className="form-input"
                />
              </div>

              <div>
                <label className="form-label">Team Size</label>
                <input
                  type="text"
                  name="teamSize"
                  value={formData.teamSize}
                  onChange={handleInputChange}
                  className="form-input"
                />
              </div>

              <div>
                <label className="form-label">Project URL</label>
                <input
                  type="url"
                  name="projectUrl"
                  value={formData.projectUrl}
                  onChange={handleInputChange}
                  className="form-input"
                />
              </div>

              <div>
                <label className="form-label">GitHub URL</label>
                <input
                  type="url"
                  name="githubUrl"
                  value={formData.githubUrl}
                  onChange={handleInputChange}
                  className="form-input"
                />
              </div>
            </div>
          </div>

          {/* Client Testimonial */}
          <div className="card">
            <h2 className="text-xl font-semibold text-white mb-6">Client Testimonial (Optional)</h2>
            <div className="space-y-4">
              <div>
                <label className="form-label">Testimonial</label>
                <textarea
                  name="testimonial"
                  value={formData.testimonial}
                  onChange={handleInputChange}
                  className="form-input form-textarea"
                  rows={4}
                />
              </div>

              <div>
                <label className="form-label">Testimonial Author</label>
                <input
                  type="text"
                  name="testimonialAuthor"
                  value={formData.testimonialAuthor}
                  onChange={handleInputChange}
                  className="form-input"
                />
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex justify-end gap-4">
            <Link
              href="/admin/projects/manage"
              className="px-8 py-3 bg-[#0f3460] hover:bg-[#1a2a4a] border border-[#4a9eff] text-white rounded-lg font-semibold transition-colors"
            >
              Cancel
            </Link>
            <motion.button
              type="submit"
              disabled={isSubmitting}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`btn-primary px-8 py-3 text-lg ${
                isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
              }`}
            >
              {isSubmitting ? 'Updating...' : 'Update Project'}
            </motion.button>
          </div>
        </motion.form>
      </div>
    </div>
  );
}

