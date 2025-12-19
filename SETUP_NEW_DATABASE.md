# 🚀 New Supabase Database Setup

Your project has been configured to connect to the new Supabase database. Follow these steps to complete the setup:

## ✅ What's Already Done

1. ✅ Environment variables updated with new Supabase credentials
2. ✅ Prisma schema updated to use UUID (matching database)
3. ✅ Supabase client configured with anon key and service role key support

## 🔧 Required Steps

### 1. Replace Database Password

**IMPORTANT:** You need to replace `[YOUR-PASSWORD]` in your `.env` and `.env.local` files with your actual Supabase database password.

**In `.env` and `.env.local`:**
```env
DATABASE_URL="postgresql://postgres.vhndezwapxlwihgzypsf:[YOUR-PASSWORD]@aws-1-ap-southeast-1.pooler.supabase.com:6543/postgres?pgbouncer=true"
DIRECT_URL="postgresql://postgres.vhndezwapxlwihgzypsf:[YOUR-PASSWORD]@aws-1-ap-southeast-1.pooler.supabase.com:5432/postgres"
```

**Note:** If your password contains special characters, URL-encode them:
- `@` becomes `%40`
- `#` becomes `%23`
- `$` becomes `%24`
- etc.

### 2. Run Database Setup SQL

1. Go to your Supabase Dashboard: https://supabase.com/dashboard
2. Select your project: `vhndezwapxlwihgzypsf`
3. Click **SQL Editor** in the sidebar
4. Copy the contents of `supabase-setup.sql` from your project root
5. Paste it into the SQL editor
6. Click **Run** to execute

This will create:
- `projects` table with all required columns
- Storage bucket `project-images` (if it doesn't exist)
- Row Level Security (RLS) policies
- Storage policies for image uploads

### 3. Create Storage Bucket (if needed)

If the bucket wasn't created by the SQL script:

1. Go to **Storage** in your Supabase dashboard
2. Click **New bucket**
3. Name: `project-images`
4. Public: ✅ **Enabled** (important!)
5. Click **Create bucket**

### 4. Regenerate Prisma Client

After updating the password and running the SQL setup:

```bash
# Generate Prisma client with new schema
npx prisma generate

# Push schema to database (if needed)
npx prisma db push
```

### 5. Test the Connection

1. **Start your development server:**
   ```bash
   npm run dev
   ```

2. **Visit the admin panel:**
   ```
   http://localhost:3000/admin/projects
   ```

3. **Try uploading a test project** with images

4. **Check the projects page:**
   ```
   http://localhost:3000/projects/dynamic
   ```

## 🔑 Environment Variables Summary

Your `.env.local` should have:

```env
# Supabase Configuration
NEXT_PUBLIC_SUPABASE_URL=https://vhndezwapxlwihgzypsf.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
SUPABASE_SERVICE_ROLE_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...

# Prisma Database Configuration
DATABASE_URL="postgresql://postgres.vhndezwapxlwihgzypsf:[YOUR-PASSWORD]@aws-1-ap-southeast-1.pooler.supabase.com:6543/postgres?pgbouncer=true"
DIRECT_URL="postgresql://postgres.vhndezwapxlwihgzypsf:[YOUR-PASSWORD]@aws-1-ap-southeast-1.pooler.supabase.com:5432/postgres"
```

## 🎯 What Works Now

- ✅ **Admin Panel** (`/admin/projects`) - Upload projects with images
- ✅ **Projects Page** (`/projects/dynamic`) - Display projects from database
- ✅ **Image Upload** - Uses Supabase Storage with service role key for admin operations
- ✅ **Prisma ORM** - Type-safe database operations
- ✅ **API Routes** - RESTful endpoints for project CRUD operations

## 🚨 Troubleshooting

### "Failed to connect to database"
- Check that you've replaced `[YOUR-PASSWORD]` with your actual password
- Verify the password is URL-encoded if it contains special characters
- Check that your Supabase project is active (not paused)

### "Table 'projects' does not exist"
- Run the SQL setup script in Supabase SQL Editor
- Check that the SQL executed successfully

### "Bucket 'project-images' not found"
- Create the bucket manually in Storage section
- Make sure it's set to **Public**

### "Image upload failed"
- Verify `SUPABASE_SERVICE_ROLE_KEY` is set in `.env.local`
- Check that the storage bucket exists and is public
- Check browser console for specific error messages

## 📝 Next Steps

1. Replace `[YOUR-PASSWORD]` in connection strings
2. Run `supabase-setup.sql` in Supabase SQL Editor
3. Create storage bucket if needed
4. Run `npx prisma generate`
5. Test uploading a project from admin panel

You're all set! 🎉

