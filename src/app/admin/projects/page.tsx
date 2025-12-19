'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { uploadProjectImage } from '../../../../lib/supabase';
import { mockUploadImage, isSupabaseConfigured } from '../../../../lib/mock-upload';
import {
  PlusIcon,
  PhotoIcon,
  XMarkIcon,
  DocumentArrowUpIcon,
  CheckCircleIcon,
  ExclamationTriangleIcon,
  FolderPlusIcon,
  CogIcon,
  GlobeAltIcon,
  ServerIcon,
  ShieldCheckIcon,
  DevicePhoneMobileIcon,
  PencilSquareIcon,
  ArrowLeftIcon,
} from '@heroicons/react/24/outline';
import Link from 'next/link';

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
  images: File[];
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

const popularTechnologies = [
  'React', 'Next.js', 'TypeScript', 'Node.js', 'Python', 'Django', 'Flask',
  'MongoDB', 'PostgreSQL', 'MySQL', 'AWS', 'Azure', 'Docker', 'Kubernetes',
  'React Native', 'Flutter', 'Vue.js', 'Angular', 'Express.js', 'GraphQL',
  'Redis', 'Elasticsearch', 'Jenkins', 'GitHub Actions', 'Terraform',
];

export default function AdminProjectsPage() {
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
    images: [],
    budget: '',
    teamSize: '',
    testimonial: '',
    testimonialAuthor: '',
    projectUrl: '',
    githubUrl: '',
  });

  const [newTechnology, setNewTechnology] = useState('');
  const [newFeature, setNewFeature] = useState('');
  const [dragActive, setDragActive] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [previewImages, setPreviewImages] = useState<string[]>([]);
  const fileInputRef = React.useRef<HTMLInputElement>(null);

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

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFiles(Array.from(e.dataTransfer.files));
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log('File input changed:', e.target.files?.length || 0, 'files');
    if (e.target.files && e.target.files.length > 0) {
      handleFiles(Array.from(e.target.files));
    } else {
      console.log('No files selected');
    }
  };

  const handleFiles = (files: File[]) => {
    console.log('Files dropped/selected:', files.length);
    
    const imageFiles = files.filter(file => {
      // Check file type and size (5MB limit)
      const isValidType = file.type.startsWith('image/');
      const isValidSize = file.size <= 5 * 1024 * 1024; // 5MB in bytes
      
      console.log(`File: ${file.name}, Type: ${file.type}, Size: ${file.size}, Valid: ${isValidType && isValidSize}`);
      
      if (!isValidType) {
        alert(`${file.name} is not a valid image file. Supported: JPG, PNG, GIF, WebP`);
        return false;
      }
      
      if (!isValidSize) {
        alert(`${file.name} is too large. Maximum size is 5MB.`);
        return false;
      }
      
      return true;
    });
    
    console.log('Valid image files:', imageFiles.length);
    
    if (imageFiles.length === 0) {
      console.log('No valid image files to process');
      return;
    }
    
    setFormData(prev => ({
      ...prev,
      images: [...prev.images, ...imageFiles]
    }));

    // Create preview URLs
    imageFiles.forEach((file, index) => {
      const reader = new FileReader();
      reader.onload = (e) => {
        if (e.target?.result) {
          console.log(`Preview created for file ${index + 1}`);
          setPreviewImages(prev => [...prev, e.target!.result as string]);
        }
      };
      reader.onerror = (e) => {
        console.error('FileReader error:', e);
      };
      reader.readAsDataURL(file);
    });
  };

  const handleRemoveImage = (index: number) => {
    setFormData(prev => ({
      ...prev,
      images: prev.images.filter((_, i) => i !== index)
    }));
    setPreviewImages(prev => prev.filter((_, i) => i !== index));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Validate required fields
      if (!formData.title || !formData.client || !formData.description || !formData.shortDescription || !formData.category) {
        throw new Error('Please fill in all required fields');
      }

      // Create project first to get ID
      const projectData = {
        title: formData.title,
        client: formData.client,
        description: formData.description,
        shortDescription: formData.shortDescription,
        category: formData.category,
        status: formData.status,
        startDate: formData.startDate ? new Date(formData.startDate) : null,
        completionDate: formData.completionDate ? new Date(formData.completionDate) : null,
        technologies: formData.technologies,
        features: formData.features,
        imageUrls: [], // Will be updated after image upload
        budget: formData.budget || null,
        teamSize: formData.teamSize || null,
        testimonial: formData.testimonial || null,
        testimonialAuthor: formData.testimonialAuthor || null,
        projectUrl: formData.projectUrl || null,
        githubUrl: formData.githubUrl || null,
      };

      // Debug log to check data being sent
      console.log('Sending project data:', {
        ...projectData,
        featuresCount: formData.features.length,
        features: formData.features,
        technologiesCount: formData.technologies.length,
        technologies: formData.technologies,
        budget: formData.budget
      });

      // Create project via API
      const createResponse = await fetch('/api/projects/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(projectData),
      });

      if (!createResponse.ok) {
        const errorData = await createResponse.json().catch(() => ({}));
        const errorMessage = errorData.details || errorData.error || 'Failed to create project';
        console.error('API Error Response:', errorData);
        throw new Error(errorMessage);
      }

      const project = await createResponse.json();
      
      // Upload images if any
      let imageUrls: string[] = [];
      if (formData.images.length > 0) {
        try {
          const uploadPromises = formData.images.map(async (file, index) => {
            // Use mock upload if Supabase is not configured
            if (!isSupabaseConfigured()) {
              console.log('Using mock upload - Supabase not configured');
              return mockUploadImage(file, project.id, index);
            }
            
            // Use API route for server-side upload (bypasses RLS)
            try {
              const uploadFormData = new FormData();
              uploadFormData.append('file', file);
              uploadFormData.append('projectId', project.id);
              uploadFormData.append('index', index.toString());

              const uploadResponse = await fetch('/api/upload-image', {
                method: 'POST',
                body: uploadFormData,
              });

              if (!uploadResponse.ok) {
                const errorData = await uploadResponse.json().catch(() => ({}));
                throw new Error(errorData.error || 'Failed to upload image');
              }

              const { url } = await uploadResponse.json();
              return url;
            } catch (error) {
              console.error(`Error uploading image ${index}:`, error);
              throw error;
            }
          });
          
          imageUrls = await Promise.all(uploadPromises);
          
          // Update project with image URLs via API
          const updateResponse = await fetch(`/api/projects/update/${project.id}`, {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ imageUrls: imageUrls }),
          });

          if (!updateResponse.ok) {
            throw new Error('Failed to update project with images');
          }
        } catch (uploadError) {
          console.error('Image upload error:', uploadError);
          // Continue without images if upload fails
          console.log('Continuing without images due to upload error');
        }
      }
      
      setSubmitStatus('success');
      
      // Reset form after successful submission
      setTimeout(() => {
        setFormData({
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
          images: [],
          budget: '',
          teamSize: '',
          testimonial: '',
          testimonialAuthor: '',
          projectUrl: '',
          githubUrl: '',
        });
        setPreviewImages([]);
        setSubmitStatus('idle');
      }, 3000);
      
    } catch (error) {
      console.error('Error submitting project:', error);
      const errorMsg = error instanceof Error ? error.message : 'An unknown error occurred';
      setErrorMessage(errorMsg);
      setSubmitStatus('error');
      
      // Log full error details
      console.error('Full error:', {
        message: errorMsg,
        error: error,
        stack: error instanceof Error ? error.stack : undefined
      });
      
      // Show error message for 10 seconds (longer to read detailed errors)
      setTimeout(() => {
        setSubmitStatus('idle');
        setErrorMessage('');
      }, 10000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="container">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-6">
          <Link
            href="/admin/dashboard"
            className="inline-flex items-center text-[#4a9eff] hover:text-[#3a8eef] transition-colors mb-4"
          >
            <ArrowLeftIcon className="h-5 w-5 mr-2" />
            Back to Dashboard
          </Link>
          <div className="flex items-center justify-between">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="admin-header"
            >
              <div className="admin-icon">
                <FolderPlusIcon className="w-8 h-8 text-white" />
              </div>
              <h1 className="admin-title">Add New Project</h1>
              <p className="admin-subtitle">Upload and manage your project portfolio</p>
            </motion.div>
            <Link
              href="/admin/projects/manage"
              className="inline-flex items-center gap-2 px-4 py-2 bg-[#0f3460] hover:bg-[#1a2a4a] border border-[#4a9eff] text-white rounded-lg transition-colors"
            >
              <PencilSquareIcon className="h-5 w-5" />
              Manage Projects
            </Link>
          </div>
        </div>

        {/* Configuration Status */}
        {!isSupabaseConfigured() && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-yellow-600 text-white p-4 rounded-lg mb-6 flex items-center gap-2"
          >
            <ExclamationTriangleIcon className="w-5 h-5" />
            <div>
              <p className="font-semibold">Supabase Not Configured</p>
              <p className="text-sm">Using mock image uploads. See SUPABASE_KEY_SETUP.md for setup instructions.</p>
            </div>
          </motion.div>
        )}

        {/* Success/Error Messages */}
        {submitStatus === 'success' && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="success-message flex items-center gap-2"
          >
            <CheckCircleIcon className="w-5 h-5" />
            Project uploaded successfully!
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
              <span className="font-semibold">Error uploading project</span>
            </div>
            {errorMessage && (
              <p className="text-sm ml-7 opacity-90">{errorMessage}</p>
            )}
            <p className="text-sm ml-7 opacity-75">Please check the console for more details.</p>
          </motion.div>
        )}

        {/* Form */}
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
                  placeholder="Enter project title"
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
                  placeholder="Enter client name"
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
                  placeholder="Brief one-line description"
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
                  placeholder="Detailed project description, challenges faced, solutions implemented..."
                  rows={6}
                  required
                />
              </div>
            </div>
          </div>

          {/* Technologies */}
          <div className="card">
            <h2 className="text-xl font-semibold text-white mb-6">Technologies Used</h2>
            
            {/* Popular Technologies Quick Add */}
            <div className="mb-4">
              <p className="text-sm text-gray-400 mb-2">Quick add popular technologies:</p>
              <div className="flex flex-wrap gap-2">
                {popularTechnologies.slice(0, 10).map(tech => (
                  <button
                    key={tech}
                    type="button"
                    onClick={() => {
                      if (!formData.technologies.includes(tech)) {
                        setFormData(prev => ({
                          ...prev,
                          technologies: [...prev.technologies, tech]
                        }));
                      }
                    }}
                    disabled={formData.technologies.includes(tech)}
                    className={`px-3 py-1 text-sm rounded-full transition-all ${
                      formData.technologies.includes(tech)
                        ? 'bg-gray-600 text-gray-400 cursor-not-allowed'
                        : 'bg-var-accent-blue text-white hover:bg-blue-600'
                    }`}
                  >
                    {tech}
                  </button>
                ))}
              </div>
            </div>

            {/* Custom Technology Input */}
            <div className="flex gap-2 mb-4">
              <input
                type="text"
                value={newTechnology}
                onChange={(e) => setNewTechnology(e.target.value)}
                className="form-input flex-1"
                placeholder="Add custom technology"
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

            {/* Selected Technologies */}
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
                placeholder="Add project feature"
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

          {/* Project Images */}
          <div className="card">
            <h2 className="text-xl font-semibold text-white mb-6">Project Images</h2>
            
            {/* Image Upload Area */}
            <div
              className={`border-2 border-dashed rounded-lg p-8 text-center transition-colors cursor-pointer ${
                dragActive 
                  ? 'border-blue-400 bg-blue-500/10' 
                  : 'border-gray-600 hover:border-gray-500 hover:bg-gray-800/20'
              }`}
              onDragEnter={handleDrag}
              onDragLeave={handleDrag}
              onDragOver={handleDrag}
              onDrop={handleDrop}
              onClick={() => {
                console.log('Upload area clicked, triggering file input');
                fileInputRef.current?.click();
              }}
            >
              <DocumentArrowUpIcon className="w-12 h-12 text-gray-400 mx-auto mb-4" />
              <p className="text-white mb-2">
                Drag and drop images here, or{' '}
                <span className="text-blue-400 cursor-pointer hover:underline">
                  browse files
                </span>
              </p>
              <p className="text-sm text-gray-400 mb-4">
                Supports: JPG, PNG, GIF, WebP (Max 5MB each)
              </p>
              
              {/* Alternative button for testing */}
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  console.log('Button clicked, triggering file input');
                  fileInputRef.current?.click();
                }}
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm transition-colors"
              >
                Select Files
              </button>
              
              {/* Hidden file input */}
              <input
                ref={fileInputRef}
                type="file"
                multiple
                accept="image/*"
                onChange={handleFileChange}
                className="hidden"
              />
            </div>

            {/* Image Previews */}
            {previewImages.length > 0 && (
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-6">
                {previewImages.map((src, index) => (
                  <div key={index} className="relative group">
                    <img
                      src={src}
                      alt={`Preview ${index + 1}`}
                      className="w-full h-32 object-cover rounded-lg"
                    />
                    <button
                      type="button"
                      onClick={() => handleRemoveImage(index)}
                      className="absolute top-2 right-2 p-1 bg-red-500 text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      <XMarkIcon className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>

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
                  placeholder="e.g., $10,000 - $25,000"
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
                  placeholder="e.g., 3-5 developers"
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
                  placeholder="https://project-url.com"
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
                  placeholder="https://github.com/username/repo"
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
                  placeholder="Client feedback about the project..."
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
                  placeholder="Client Name, Position, Company"
                />
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex justify-end">
            <motion.button
              type="submit"
              disabled={isSubmitting}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`btn-primary px-8 py-3 text-lg ${
                isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
              }`}
            >
              {isSubmitting ? (
                <>
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                  />
                  Uploading...
                </>
              ) : (
                <>
                  <DocumentArrowUpIcon className="w-5 h-5" />
                  Upload Project
                </>
              )}
            </motion.button>
          </div>
        </motion.form>
      </div>
    </div>
  );
}
