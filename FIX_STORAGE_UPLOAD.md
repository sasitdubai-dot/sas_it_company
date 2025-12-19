# 🔧 Fix: "new row violates row-level security policy" for Image Uploads

## The Problem

When uploading images, you're getting this error:
```
StorageApiError: new row violates row-level security policy
```

This means the storage bucket's RLS policies are blocking uploads because they require authentication.

## ✅ Solution: Update Storage Policies

### Step 1: Run SQL Script in Supabase

1. **Go to Supabase Dashboard:**
   - Visit: https://supabase.com/dashboard/project/vhndezwapxlwihgzypsf

2. **Open SQL Editor:**
   - Click **"SQL Editor"** in the left sidebar
   - Click **"New query"**

3. **Copy and Run the Fix:**
   - Open `fix-storage-policies.sql` from your project
   - Copy ALL the contents
   - Paste into SQL Editor
   - Click **"Run"** (or press Ctrl+Enter)

This will:
- Remove old policies that require authentication
- Create new policies that allow uploads without authentication
- Fix policies for your `proect` bucket

### Step 2: Verify Bucket is Public

1. **Go to Storage** in Supabase dashboard
2. **Click on your `proect` bucket**
3. **Make sure "Public bucket" is enabled** ✅
4. If not, enable it and save

### Step 3: Test Image Upload

1. **Go to `/admin/projects`**
2. **Try uploading a project with images**
3. **It should work now!**

## 🔍 What Changed

### Before (Blocking):
```sql
CREATE POLICY "Authenticated users can upload project images" 
ON storage.objects FOR INSERT 
WITH CHECK (bucket_id = 'project-images' AND auth.role() = 'authenticated');
```

### After (Allowing):
```sql
CREATE POLICY "Allow all uploads to proect bucket" 
ON storage.objects FOR INSERT 
WITH CHECK (bucket_id = 'proect');
```

## ✅ That's It!

After running the SQL script, image uploads will work! 🎉

