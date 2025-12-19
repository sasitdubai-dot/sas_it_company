# 🚀 Supabase Integration Setup Guide

This guide will help you set up Supabase for your SAS IT Services website to store and manage projects dynamically.

## 📋 Prerequisites

- A Supabase account (free tier available)
- Your Next.js project running locally
- Basic understanding of databases

## 🔧 Step 1: Create Supabase Project

1. **Go to [Supabase](https://supabase.com)** and sign up/login
2. **Click "New Project"**
3. **Fill in project details:**
   - Organization: Choose or create one
   - Name: `sas-it-services` (or your preferred name)
   - Database Password: Create a strong password (save this!)
   - Region: Choose closest to your users (e.g., `ap-southeast-1` for UAE)
4. **Click "Create new project"**
5. **Wait for setup to complete** (usually 2-3 minutes)

## 🗄️ Step 2: Set Up Database

### Option A: Using Supabase Dashboard (Recommended)

1. **Go to your project dashboard**
2. **Click "SQL Editor" in the sidebar**
3. **Copy the contents of `supabase-setup.sql`** from your project root
4. **Paste it into the SQL editor**
5. **Click "Run"** to execute the SQL commands

### Option B: Using Supabase CLI

```bash
# Install Supabase CLI
npm install -g supabase

# Login to Supabase
supabase login

# Link your project (get project ref from dashboard URL)
supabase link --project-ref your-project-ref

# Run the setup SQL
supabase db reset
```

## 🔑 Step 3: Get API Keys

1. **Go to Settings > API** in your Supabase dashboard
2. **Copy these values:**
   - `Project URL` (looks like: `https://your-project.supabase.co`)
   - `anon public` key (long JWT token)

## 🌍 Step 4: Configure Environment Variables

1. **Create `.env.local` file** in your project root:

```bash
# Copy from .env.local.example
cp .env.local.example .env.local
```

2. **Edit `.env.local`** and add your Supabase credentials:

```env
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key-here
```

⚠️ **Important:** Never commit `.env.local` to version control!

## 🖼️ Step 5: Set Up Storage for Images

1. **Go to Storage** in your Supabase dashboard
2. **The `project-images` bucket should already exist** (created by our SQL script)
3. **If not, create it manually:**
   - Click "New bucket"
   - Name: `project-images`
   - Public: ✅ Enabled
   - Click "Create bucket"

## 🔒 Step 6: Configure Row Level Security (RLS)

The SQL script already sets up RLS policies, but here's what they do:

### Projects Table Policies:
- **Public Read**: Anyone can view projects (for website visitors)
- **Authenticated Insert/Update/Delete**: Only authenticated users can modify projects

### Storage Policies:
- **Public Read**: Anyone can view project images
- **Authenticated Upload**: Only authenticated users can upload images

## 🧪 Step 7: Test the Connection

1. **Start your development server:**
```bash
npm run dev
```

2. **Visit the admin panel:**
```
http://localhost:3000/admin/projects
```

3. **Try uploading a test project** with images

4. **Check the dynamic projects page:**
```
http://localhost:3000/projects/dynamic
```

## 🎯 Step 8: Verify Database Setup

1. **Go to Table Editor** in Supabase dashboard
2. **You should see the `projects` table** with these columns:
   - `id` (UUID, Primary Key)
   - `title` (VARCHAR)
   - `client` (VARCHAR)
   - `description` (TEXT)
   - `short_description` (VARCHAR)
   - `category` (VARCHAR)
   - `status` (VARCHAR)
   - `start_date` (DATE)
   - `completion_date` (DATE)
   - `technologies` (TEXT[])
   - `features` (TEXT[])
   - `image_urls` (TEXT[])
   - `budget` (VARCHAR)
   - `team_size` (VARCHAR)
   - `testimonial` (TEXT)
   - `testimonial_author` (VARCHAR)
   - `project_url` (VARCHAR)
   - `github_url` (VARCHAR)
   - `created_at` (TIMESTAMP)
   - `updated_at` (TIMESTAMP)

## 🔧 Troubleshooting

### Image Upload Issues

**Problem:** Images not uploading
**Solution:**
1. Check if `project-images` bucket exists
2. Verify storage policies are set correctly
3. Check browser console for errors
4. Ensure file size is under 5MB

### Database Connection Issues

**Problem:** "Failed to load projects"
**Solution:**
1. Verify `.env.local` has correct values
2. Check Supabase project is active (not paused)
3. Verify RLS policies allow public read access

### Authentication Issues

**Problem:** Can't insert/update projects
**Solution:**
1. The current setup allows authenticated users only
2. For testing, you can temporarily modify RLS policies
3. Or implement proper authentication (see Advanced Setup)

## 🚀 Advanced Setup (Optional)

### Add Authentication

If you want to add proper admin authentication:

1. **Enable Authentication** in Supabase dashboard
2. **Configure providers** (Email, Google, etc.)
3. **Update RLS policies** to check for specific user roles
4. **Add login/logout functionality** to your admin panel

### Add Real-time Updates

To make projects update in real-time:

```javascript
// In your projects page
useEffect(() => {
  const subscription = supabase
    .channel('projects')
    .on('postgres_changes', 
      { event: '*', schema: 'public', table: 'projects' },
      (payload) => {
        // Refresh projects list
        loadProjects();
      }
    )
    .subscribe();

  return () => subscription.unsubscribe();
}, []);
```

## 📱 Production Deployment

### Vercel Deployment

1. **Add environment variables** in Vercel dashboard:
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`

2. **Update CORS settings** in Supabase:
   - Go to Settings > API
   - Add your production domain to allowed origins

### Custom Domain (Optional)

1. **Set up custom domain** in Supabase dashboard
2. **Update environment variables** with new URL
3. **Update CORS settings** accordingly

## 🎉 You're All Set!

Your website now has:
- ✅ **Dynamic project management** through admin panel
- ✅ **Image upload and storage** via Supabase
- ✅ **Real-time project display** on frontend
- ✅ **Secure database** with proper permissions
- ✅ **Scalable architecture** ready for production

## 🔗 Useful Links

- [Supabase Documentation](https://supabase.com/docs)
- [Next.js + Supabase Guide](https://supabase.com/docs/guides/getting-started/tutorials/with-nextjs)
- [Row Level Security Guide](https://supabase.com/docs/guides/auth/row-level-security)
- [Storage Guide](https://supabase.com/docs/guides/storage)

## 💡 Next Steps

1. **Add more project fields** as needed
2. **Implement project categories** filtering
3. **Add project search** functionality  
4. **Create project detail pages**
5. **Add analytics** tracking
6. **Implement SEO** optimization

Need help? Check the troubleshooting section or reach out for support! 🚀



