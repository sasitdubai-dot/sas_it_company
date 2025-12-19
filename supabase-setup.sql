-- Create projects table
CREATE TABLE IF NOT EXISTS projects (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  client VARCHAR(255) NOT NULL,
  description TEXT NOT NULL,
  short_description VARCHAR(500) NOT NULL,
  category VARCHAR(100) NOT NULL,
  status VARCHAR(50) DEFAULT 'planning',
  start_date DATE,
  completion_date DATE,
  technologies TEXT[] DEFAULT '{}',
  features TEXT[] DEFAULT '{}',
  image_urls TEXT[] DEFAULT '{}',
  budget VARCHAR(100),
  team_size VARCHAR(100),
  testimonial TEXT,
  testimonial_author VARCHAR(255),
  project_url VARCHAR(500),
  github_url VARCHAR(500),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create updated_at trigger
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ language 'plpgsql';

CREATE TRIGGER update_projects_updated_at 
  BEFORE UPDATE ON projects 
  FOR EACH ROW 
  EXECUTE FUNCTION update_updated_at_column();

-- Create storage bucket for project images
INSERT INTO storage.buckets (id, name, public) 
VALUES ('project-images', 'project-images', true)
ON CONFLICT (id) DO NOTHING;

-- Set up RLS (Row Level Security) policies
ALTER TABLE projects ENABLE ROW LEVEL SECURITY;

-- Allow public read access to projects
CREATE POLICY "Public projects are viewable by everyone" 
ON projects FOR SELECT 
USING (true);

-- Allow service role to insert projects (for Prisma/API usage)
CREATE POLICY "Service role can insert projects" 
ON projects FOR INSERT 
WITH CHECK (true);

-- Allow service role to update projects (for Prisma/API usage)
CREATE POLICY "Service role can update projects" 
ON projects FOR UPDATE 
USING (true);

-- Allow authenticated users to delete projects
CREATE POLICY "Authenticated users can delete projects" 
ON projects FOR DELETE 
USING (auth.role() = 'authenticated');

-- Storage policies for project images
CREATE POLICY "Public project images are viewable by everyone" 
ON storage.objects FOR SELECT 
USING (bucket_id = 'project-images');

CREATE POLICY "Authenticated users can upload project images" 
ON storage.objects FOR INSERT 
WITH CHECK (bucket_id = 'project-images' AND auth.role() = 'authenticated');

CREATE POLICY "Authenticated users can update project images" 
ON storage.objects FOR UPDATE 
USING (bucket_id = 'project-images' AND auth.role() = 'authenticated');

CREATE POLICY "Authenticated users can delete project images" 
ON storage.objects FOR DELETE 
USING (bucket_id = 'project-images' AND auth.role() = 'authenticated');



