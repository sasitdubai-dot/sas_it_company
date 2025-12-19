-- Fix RLS policies to allow Prisma/API to insert and update projects
-- Run this in Supabase SQL Editor

-- Drop existing policies
DROP POLICY IF EXISTS "Authenticated users can insert projects" ON projects;
DROP POLICY IF EXISTS "Authenticated users can update projects" ON projects;

-- Create new policies that allow all operations (since we're using Prisma with service role)
-- These policies allow Prisma to work without authentication
CREATE POLICY "Allow all inserts" 
ON projects FOR INSERT 
WITH CHECK (true);

CREATE POLICY "Allow all updates" 
ON projects FOR UPDATE 
USING (true);

-- Keep the delete policy as is, or update it too
DROP POLICY IF EXISTS "Authenticated users can delete projects" ON projects;
CREATE POLICY "Allow all deletes" 
ON projects FOR DELETE 
USING (true);

