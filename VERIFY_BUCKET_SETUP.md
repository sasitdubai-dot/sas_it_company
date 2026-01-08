# Verify Storage Bucket Setup

## Critical Steps to Complete:

### ✅ Step 1: Make Bucket Public (REQUIRED)
**Option A: Via UI (Recommended)**
1. Go to Supabase Dashboard → Storage → Buckets
2. Click on the `properties` bucket
3. Enable the **"Public bucket"** toggle ✅
4. Click **Save**

**Option B: Via SQL**
Run this in Supabase SQL Editor:
```sql
UPDATE storage.buckets 
SET public = true 
WHERE id = 'properties';
```

### ✅ Step 2: Verify SELECT Policy Exists (CRITICAL for image loading)
The SELECT policy is what allows public read access. Make sure you've run this:
```sql
CREATE POLICY "Public project images are viewable by everyone" 
ON storage.objects FOR SELECT 
USING (bucket_id = 'properties');
```

You can check if it exists by running:
```sql
SELECT * FROM pg_policies 
WHERE tablename = 'objects' 
AND policyname = 'Public project images are viewable by everyone';
```

### ✅ Step 3: Test the Image URL
Try accessing this URL directly in your browser:
```
https://izijmhjkpyaglwywcbyy.supabase.co/storage/v1/object/public/properties/projects/80decabe-ccff-42f8-9b68-5b33a2ed24ed-0.png
```

If the image loads in the browser → ✅ Bucket is public and policies are correct
If you get 404 or 403 → ❌ Bucket is not public or SELECT policy is missing

### ✅ Step 4: Restart Next.js Dev Server
After making changes, restart your Next.js dev server:
1. Stop the server (Ctrl+C)
2. Start again: `npm run dev` or `yarn dev`

## Quick Checklist:
- [ ] Bucket `properties` is set to **Public** (toggle enabled in UI)
- [ ] SELECT policy exists and allows public read access
- [ ] Image URL works when accessed directly in browser
- [ ] Next.js dev server has been restarted

