# 🔧 Troubleshooting 500 Error When Creating Projects

## Common Causes and Solutions

### 1. ⚠️ Database Password Not Replaced

**Problem:** The connection string still has `[YOUR-PASSWORD]` placeholder.

**Solution:**
1. Open `.env` and `.env.local` files
2. Find `DATABASE_URL` and `DIRECT_URL`
3. Replace `[YOUR-PASSWORD]` with your actual Supabase database password
4. **Important:** URL-encode special characters:
   - `@` → `%40`
   - `#` → `%23`
   - `$` → `%24`
   - `&` → `%26`
   - etc.

**Example:**
```env
# Before (won't work)
DATABASE_URL="postgresql://postgres.vhndezwapxlwihgzypsf:[YOUR-PASSWORD]@aws-1-ap-southeast-1.pooler.supabase.com:6543/postgres?pgbouncer=true"

# After (with actual password)
DATABASE_URL="postgresql://postgres.vhndezwapxlwihgzypsf:MyPassword123%40@aws-1-ap-southeast-1.pooler.supabase.com:6543/postgres?pgbouncer=true"
```

### 2. 🗄️ Database Table Doesn't Exist

**Problem:** The `projects` table hasn't been created yet.

**Solution:**
1. Go to Supabase Dashboard: https://supabase.com/dashboard
2. Select your project: `vhndezwapxlwihgzypsf`
3. Click **SQL Editor** in the sidebar
4. Copy the entire contents of `supabase-setup.sql` from your project
5. Paste into SQL Editor
6. Click **Run** (or press Ctrl+Enter)
7. Verify success message appears

**Verify Table Exists:**
- Go to **Table Editor** in Supabase
- You should see `projects` table listed

### 3. 🔄 Prisma Client Not Generated

**Problem:** Prisma client is out of date or not generated.

**Solution:**
1. **Stop your development server** (Ctrl+C in terminal)
2. Run:
   ```bash
   npx prisma generate
   ```
3. If you get permission errors, close your IDE/editor and try again
4. Restart dev server:
   ```bash
   npm run dev
   ```

### 4. 🔌 Database Connection Issues

**Check Connection:**
1. Verify your Supabase project is **active** (not paused)
2. Check that the region matches: `ap-southeast-1`
3. Verify the project reference: `vhndezwapxlwihgzypsf`

**Test Connection:**
You can test the connection by running:
```bash
npx prisma db pull
```
This will try to connect and pull the schema. If it fails, you'll see the exact error.

### 5. 📋 Schema Mismatch

**Problem:** Prisma schema doesn't match database schema.

**Solution:**
1. After running `supabase-setup.sql`, run:
   ```bash
   npx prisma db push
   ```
2. This will sync your Prisma schema with the database

### 6. 🔍 Check Server Logs

**View Detailed Error:**
1. Look at your terminal where `npm run dev` is running
2. When you try to create a project, check the console output
3. Look for error messages starting with:
   - `Error creating project:`
   - `Error details:`
   - `Full error stack:`

**Common Error Messages:**

**"Can't reach database server"**
- Password is wrong or not replaced
- Database is paused
- Network/firewall issue

**"relation 'projects' does not exist"**
- Table hasn't been created
- Run `supabase-setup.sql`

**"column 'X' does not exist"**
- Schema mismatch
- Run `npx prisma db push`

**"Invalid input syntax for type uuid"**
- Prisma client needs regeneration
- Run `npx prisma generate`

## 🔍 Step-by-Step Debugging

### Step 1: Verify Environment Variables
```bash
# Check if password is replaced
cat .env.local | grep DATABASE_URL
# Should NOT contain [YOUR-PASSWORD]
```

### Step 2: Test Database Connection
```bash
# Try to connect (will show error if connection fails)
npx prisma db pull
```

### Step 3: Verify Table Exists
1. Go to Supabase Dashboard → Table Editor
2. Check if `projects` table exists
3. If not, run `supabase-setup.sql`

### Step 4: Regenerate Prisma Client
```bash
# Stop dev server first!
npx prisma generate
```

### Step 5: Check Browser Console
1. Open browser DevTools (F12)
2. Go to Console tab
3. Try creating a project
4. Look for error messages
5. Check Network tab for the `/api/projects/create` request
6. Click on it to see the response

## 🎯 Quick Fix Checklist

- [ ] Replaced `[YOUR-PASSWORD]` in `.env` and `.env.local`
- [ ] URL-encoded special characters in password
- [ ] Ran `supabase-setup.sql` in Supabase SQL Editor
- [ ] Verified `projects` table exists in Supabase
- [ ] Stopped dev server and ran `npx prisma generate`
- [ ] Restarted dev server
- [ ] Checked browser console for detailed error messages
- [ ] Checked server terminal for error logs

## 💡 Still Not Working?

1. **Share the exact error message** from:
   - Browser console (F12 → Console)
   - Server terminal (where `npm run dev` runs)
   - Network tab (F12 → Network → click on failed request)

2. **Verify these values:**
   - Supabase project is active
   - Password is correct and URL-encoded
   - Table exists in database
   - Prisma client is generated

3. **Try a simple test:**
   ```bash
   # Test if you can query the database
   npx prisma studio
   # This opens a GUI to view your database
   ```

## 📞 Need More Help?

The improved error handling will now show you the exact error message in the admin panel. Check:
1. The red error banner at the top of the admin form
2. Browser console (F12)
3. Server terminal logs

The error message will tell you exactly what's wrong!

