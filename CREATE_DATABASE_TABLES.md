# 🗄️ Create Database Tables - Step by Step

## Step 1: Run SQL Script in Supabase

1. **Go to Supabase Dashboard:**
   - Visit: https://supabase.com/dashboard/project/vhndezwapxlwihgzypsf

2. **Open SQL Editor:**
   - Click **"SQL Editor"** in the left sidebar
   - Click **"New query"** button (top right)

3. **Copy and Paste the SQL:**
   - Open `supabase-setup.sql` file from your project
   - Copy ALL the contents (Ctrl+A, Ctrl+C)
   - Paste into the SQL Editor (Ctrl+V)

4. **Run the SQL:**
   - Click **"Run"** button (or press Ctrl+Enter)
   - Wait for success message: "Success. No rows returned"

5. **Verify Tables Created:**
   - Click **"Table Editor"** in the left sidebar
   - You should see **"projects"** table listed

## Step 2: Push Prisma Schema

After creating tables, sync Prisma with the database:

```bash
# Make sure your dev server is stopped (Ctrl+C)
npx prisma db push
```

This will:
- Sync your Prisma schema with the database
- Generate the Prisma client
- Verify everything matches

## Step 3: Generate Prisma Client

```bash
npx prisma generate
```

## Step 4: Verify Everything Works

```bash
# Test the connection
npm run test:db
```

If all goes well, you should see:
```
✅ Successfully connected to database!
✅ Query successful!
✅ Projects table exists!
🎉 All tests passed!
```

## Step 5: Restart Your Server

```bash
npm run dev
```

Now try creating a project from the admin panel - it should work! 🎉

## 🔍 Troubleshooting

### "Table already exists" error
- That's okay! The SQL uses `CREATE TABLE IF NOT EXISTS`, so it's safe to run multiple times.

### "Permission denied" error
- Make sure you're using the correct database password
- Check that your Supabase project is active (not paused)

### Prisma push fails
- Make sure the connection strings are correct
- Verify the tables were created in Step 1
- Check that DIRECT_URL is set correctly

