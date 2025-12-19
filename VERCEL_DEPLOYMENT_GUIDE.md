## Vercel Deployment Guide

Follow these steps to deploy `sas_it_company_uae` to Vercel and configure environment variables.

1. **Prepare your GitHub repository**
   - Confirm the latest changes are pushed (`git push origin main`).
   - Ensure `.env` is not committed. Use `.env.example` for reference.

2. **Create the Vercel project**
   - Go to [https://vercel.com/new](https://vercel.com/new) and sign in.
   - Pick **Import Git Repository** → select `sas_it_company_uae`.
   - When prompted for the framework, Vercel detects **Next.js** automatically.

3. **Set environment variables**
   - In the “Environment Variables” step, add the following keys:
     - `DATABASE_URL`
     - `DIRECT_URL`
     - `NEXT_PUBLIC_SUPABASE_URL`
     - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   - Use `.env.example` for structure. Make sure the password is URL-encoded (e.g., `@` → `%40`).
   - After deployment, repeat these keys for **Production**, **Preview**, and **Development** environments so previews work too.

4. **Trigger the first build**
   - Click **Deploy**. Vercel installs dependencies, runs `npm run build`, and hosts the site.
   - A successful build proves Prisma schema is compatible and Supabase credentials are valid.

5. **Run Prisma migrations (optional)**
   - Vercel deployments can run `npx prisma migrate deploy` via a post-deploy hook if desired.
   - Alternatively, run migrations locally via `npx prisma db push` before deployment.

6. **Configure Supabase Storage (for images)**
   - Deployments rely on Supabase Storage bucket `project-images`.
   - Ensure the bucket exists and Row Level Security policies (see `supabase-setup.sql`) are applied.
   - For local testing without Supabase, mock uploads are available, but Production should use real credentials.

7. **Verify the live site**
   - After deployment, visit the provided Vercel URL.
   - Test critical flows:
     - Landing page animation & glass navbar
     - Admin login redirect
     - Admin projects form (create a sample project)
     - Check Supabase database to confirm records

8. **Assign a custom domain (optional)**
   - From the Vercel project dashboard, open the **Domains** tab.
   - Add your custom domain and update DNS as instructed.

9. **Automate deployments**
   - Every push to `main` builds automatically.
   - Pull requests receive preview deployments for QA.

10. **Monitor & troubleshoot**
    - Use Vercel’s **Deployments** tab to review logs.
    - If builds fail due to Prisma or Supabase, check the environment variables and Supabase access.
    - Reference `WINDOWS_PERMISSION_FIX.md` for local build issues; Vercel runs on Linux so `.next/trace` errors won’t occur there.

With GitHub and Vercel connected, updates now deploy automatically.

