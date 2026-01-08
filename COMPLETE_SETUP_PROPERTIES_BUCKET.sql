-- COMPLETE SETUP FOR PROPERTIES BUCKET
-- Run this entire file in Supabase SQL Editor to fix image loading issues

-- Step 1: Make the bucket PUBLIC (CRITICAL - required for public URLs to work)
UPDATE storage.buckets 
SET public = true 
WHERE id = 'properties';

-- Step 2: Drop existing policies if they exist (to avoid conflicts)
DROP POLICY IF EXISTS "Public project images are viewable by everyone" ON storage.objects;
DROP POLICY IF EXISTS "Allow all uploads to properties bucket" ON storage.objects;
DROP POLICY IF EXISTS "Allow all updates to properties bucket" ON storage.objects;
DROP POLICY IF EXISTS "Allow all deletes from properties bucket" ON storage.objects;

-- Step 3: Create SELECT policy - CRITICAL for public image access
CREATE POLICY "Public project images are viewable by everyone" 
ON storage.objects FOR SELECT 
USING (bucket_id = 'properties');

-- Step 4: Create INSERT policy - for uploading images
CREATE POLICY "Allow all uploads to properties bucket" 
ON storage.objects FOR INSERT 
WITH CHECK (bucket_id = 'properties');

-- Step 5: Create UPDATE policy - for updating images
CREATE POLICY "Allow all updates to properties bucket" 
ON storage.objects FOR UPDATE 
USING (bucket_id = 'properties');

-- Step 6: Create DELETE policy - for deleting images
CREATE POLICY "Allow all deletes from properties bucket" 
ON storage.objects FOR DELETE 
USING (bucket_id = 'properties');

-- Verification: Check if bucket is public
SELECT id, name, public 
FROM storage.buckets 
WHERE id = 'properties';

-- Verification: Check if policies exist
SELECT policyname, cmd, qual 
FROM pg_policies 
WHERE tablename = 'objects' 
AND policyname LIKE '%properties%';

