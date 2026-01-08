# 📋 Project Credentials & Information

## 🗄️ Database (Supabase)

**Database Provider:** Supabase (PostgreSQL)

**Project Reference:** `izijmhjkpyaglwywcbyy`

**Dashboard URL:** https://supabase.com/dashboard/project/izijmhjkpyaglwywcbyy

**Database Host:** `aws-1-ap-northeast-2.pooler.supabase.com`

**Database Name:** `postgres`

**Database User:** `postgres.izijmhjkpyaglwywcbyy`

**Database Password:** `sasi23212456`

**Connection Pool Port:** `6543`

**Direct Connection Port:** `5432`

**Storage Bucket:** `properties` (public bucket for images)

---

## 🌐 Hosting (Vercel)

**Hosting Provider:** Vercel

**Dashboard URL:** https://vercel.com/dashboard

**Project Name:** `sas_it_company_uae` (or your Vercel project name)

**Live Site URL:** Check your Vercel project dashboard for the deployed URL

**Note:** The site automatically deploys when you push to the main branch on GitHub.

**Local Development:** `http://localhost:3000`

---

## 🔐 Admin Panel

**Admin Login URL:** 
- Local: `http://localhost:3000/admin`
- Production: `{your-vercel-url}/admin`

**Username:** `admin`

**Password:** `sasit2024`

**Admin Email:** `admin@sasitservices.com`

**Admin Dashboard:** `/admin/dashboard`

**Admin Routes:**
- Projects Management: `/admin/projects`
- Blog Management: `/admin/blogs`
- Testimonials: `/admin/testimonials`
- Clients: `/admin/clients`

---

## 📁 Code Repository

**Repository Path:** `D:\adobe x\it_company_uae_website\uae_it_company`

**GitHub:** (Check your GitHub account for the repository URL)

**Environment File:** `.env.local` (contains all database and API keys)

---

## 🔑 Important Notes

1. **Admin Credentials:** The admin panel uses hardcoded credentials. For production, consider implementing proper authentication.

2. **Database Password:** The password is stored in `.env.local`. Never commit this file to Git.

3. **Supabase Keys:** All Supabase API keys are in `.env.local`:
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   - `SUPABASE_SERVICE_ROLE_KEY`

4. **Storage Bucket:** Make sure the `properties` bucket is set to **Public** in Supabase Storage settings.

5. **Environment Variables:** When deploying to Vercel, add all environment variables from `.env.local` to your Vercel project settings.

---

## 📞 Support

For admin access issues, contact: `admin@sasitservices.com`

---

*Last Updated: January 2026*

