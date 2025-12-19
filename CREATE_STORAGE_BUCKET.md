# 🪣 Create Storage Bucket for Project Images

## The Error

```
StorageApiError: Bucket not found
```

This means the `project-images` storage bucket doesn't exist in your Supabase project yet.

## ✅ Solution: Create the Bucket

### Option 1: Using Supabase Dashboard (Easiest)

1. **Go to Supabase Dashboard:**
   - Visit: https://supabase.com/dashboard/project/vhndezwapxlwihgzypsf

2. **Navigate to Storage:**
   - Click **"Storage"** in the left sidebar
   - You'll see a list of buckets (probably empty)

3. **Create New Bucket:**
   - Click **"New bucket"** button (top right)
   - Fill in the details:
     - **Name:** `project-images` (must be exactly this)
     - **Public bucket:** ✅ **Enable this** (very important!)
     - **File size limit:** Leave default or set to 5MB
     - **Allowed MIME types:** Leave empty (allows all image types)
   - Click **"Create bucket"**

4. **Verify It's Created:**
   - You should now see `project-images` in your buckets list
   - Make sure it shows as **"Public"**

### Option 2: Using SQL (Alternative)

If you prefer SQL, you can run this in Supabase SQL Editor:

```sql
-- Create storage bucket for project images
INSERT INTO storage.buckets (id, name, public) 
VALUES ('project-images', 'project-images', true)
ON CONFLICT (id) DO NOTHING;
```

Then set up the storage policies:

```sql
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
```

## ⚠️ Important Settings

### Must Be Public
The bucket **MUST** be set to **Public** so that:
- Images can be accessed via public URLs
- The website can display project images
- No authentication required to view images

### Bucket Name Must Match
The bucket name must be exactly `project-images` (case-sensitive) because that's what the code expects.

## 🔍 Verify It Works

After creating the bucket:

1. **Check in Dashboard:**
   - Go to Storage → You should see `project-images`
   - It should show as "Public"

2. **Test Image Upload:**
   - Go to `/admin/projects`
   - Try uploading a project with an image
   - It should work now!

## 🚨 If You Still Get Errors

### Error: "Bucket not found"
- Double-check the bucket name is exactly `project-images`
- Make sure you're in the correct Supabase project

### Error: "Permission denied"
- Make sure the bucket is set to **Public**
- Check that storage policies are set correctly

### Error: "File too large"
- Check the file size limit in bucket settings
- Default is usually 50MB, which should be enough for images

## 📝 Quick Checklist

- [ ] Go to Supabase Dashboard → Storage
- [ ] Click "New bucket"
- [ ] Name: `project-images` (exact match)
- [ ] Public bucket: ✅ Enabled
- [ ] Click "Create bucket"
- [ ] Verify it appears in the list
- [ ] Try uploading a project with an image

## ✅ That's It!

Once the bucket is created, image uploads will work! 🎉

