-- Fix Storage RLS Policies to Allow Image Uploads
-- Run this in Supabase SQL Editor

-- Drop existing storage policies
DROP POLICY IF EXISTS "Public project images are viewable by everyone" ON storage.objects;
DROP POLICY IF EXISTS "Authenticated users can upload project images" ON storage.objects;
DROP POLICY IF EXISTS "Authenticated users can update project images" ON storage.objects;
DROP POLICY IF EXISTS "Authenticated users can delete project images" ON storage.objects;

-- Create new policies that allow all operations (for Prisma/API usage)
-- Public read access
CREATE POLICY "Public project images are viewable by everyone" 
ON storage.objects FOR SELECT 
USING (bucket_id = 'proect');

-- Allow all uploads (no authentication required)
CREATE POLICY "Allow all uploads to proect bucket" 
ON storage.objects FOR INSERT 
WITH CHECK (bucket_id = 'proect');

-- Allow all updates
CREATE POLICY "Allow all updates to proect bucket" 
ON storage.objects FOR UPDATE 
USING (bucket_id = 'proect');

-- Allow all deletes
CREATE POLICY "Allow all deletes from proect bucket" 
ON storage.objects FOR DELETE 
USING (bucket_id = 'proect');

