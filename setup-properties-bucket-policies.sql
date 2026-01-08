-- Setup Storage Policies for 'properties' Bucket
-- Run this in Supabase SQL Editor

-- Make sure the bucket is public (you can also do this via the UI)
UPDATE storage.buckets 
SET public = true 
WHERE id = 'properties';

-- Drop existing policies if they exist
DROP POLICY IF EXISTS "Public project images are viewable by everyone" ON storage.objects;
DROP POLICY IF EXISTS "Allow all uploads to properties bucket" ON storage.objects;
DROP POLICY IF EXISTS "Allow all updates to properties bucket" ON storage.objects;
DROP POLICY IF EXISTS "Allow all deletes from properties bucket" ON storage.objects;

-- Create new policies that allow all operations (for public bucket)
-- Public read access
CREATE POLICY "Public project images are viewable by everyone" 
ON storage.objects FOR SELECT 
USING (bucket_id = 'properties');

-- Allow all uploads (for public bucket, you may want to restrict this in production)
CREATE POLICY "Allow all uploads to properties bucket" 
ON storage.objects FOR INSERT 
WITH CHECK (bucket_id = 'properties');

-- Allow all updates
CREATE POLICY "Allow all updates to properties bucket" 
ON storage.objects FOR UPDATE 
USING (bucket_id = 'properties');

-- Allow all deletes
CREATE POLICY "Allow all deletes from properties bucket" 
ON storage.objects FOR DELETE 
USING (bucket_id = 'properties');

