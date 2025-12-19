import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
const supabaseServiceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY

// Client for public operations (uses anon key)
export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Admin client for server-side operations (uses service role key, bypasses RLS)
export const supabaseAdmin = supabaseServiceRoleKey
  ? createClient(supabaseUrl, supabaseServiceRoleKey, {
      auth: {
        autoRefreshToken: false,
        persistSession: false
      }
    })
  : null

// Database Types
export interface Project {
  id?: string
  title: string
  client: string
  description: string
  short_description: string
  category: string
  status: string
  start_date?: string
  completion_date?: string
  technologies: string[]
  features: string[]
  image_urls: string[]
  budget?: string
  team_size?: string
  testimonial?: string
  testimonial_author?: string
  project_url?: string
  github_url?: string
  created_at?: string
  updated_at?: string
}

// Upload image to Supabase Storage
// Uses admin client if available to bypass RLS, otherwise uses regular client
export async function uploadProjectImage(file: File, projectId: string, index: number) {
  const fileExt = file.name.split('.').pop()
  const fileName = `${projectId}-${index}.${fileExt}`
  const filePath = `projects/${fileName}`

  // Use admin client if available (for server-side operations), otherwise use regular client
  const client = supabaseAdmin || supabase

  const { data, error } = await client.storage
    .from('proect')
    .upload(filePath, file, {
      cacheControl: '3600',
      upsert: false
    })

  if (error) {
    throw error
  }

  // Get public URL
  const { data: { publicUrl } } = client.storage
    .from('proect')
    .getPublicUrl(filePath)

  return publicUrl
}

// Create new project
export async function createProject(projectData: Omit<Project, 'id' | 'created_at' | 'updated_at'>) {
  const { data, error } = await supabase
    .from('projects')
    .insert([projectData])
    .select()
    .single()

  if (error) {
    throw error
  }

  return data
}

// Get all projects
export async function getProjects() {
  const { data, error } = await supabase
    .from('projects')
    .select('*')
    .order('created_at', { ascending: false })

  if (error) {
    throw error
  }

  return data
}

// Get project by ID
export async function getProject(id: string) {
  const { data, error } = await supabase
    .from('projects')
    .select('*')
    .eq('id', id)
    .single()

  if (error) {
    throw error
  }

  return data
}

// Update project
export async function updateProject(id: string, projectData: Partial<Project>) {
  const { data, error } = await supabase
    .from('projects')
    .update(projectData)
    .eq('id', id)
    .select()
    .single()

  if (error) {
    throw error
  }

  return data
}

// Delete project
export async function deleteProject(id: string) {
  const { error } = await supabase
    .from('projects')
    .delete()
    .eq('id', id)

  if (error) {
    throw error
  }

  return true
}



