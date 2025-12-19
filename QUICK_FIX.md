# 🚨 QUICK FIX: Database Connection Error

## The Problem

You're getting this error:
```
FATAL: Tenant or user not found
```

This means your database password is not set correctly.

## The Solution (2 Steps)

### Step 1: Get Your Database Password

1. Go to: https://supabase.com/dashboard/project/vhndezwapxlwihgzypsf/settings/database
2. Scroll to **Database Password** section
3. If you don't remember it, click **Reset database password**
4. **Copy the password immediately** (you won't see it again!)

### Step 2: Update .env.local

Open `.env.local` and find these two lines (around line 10 and 13):

```env
DATABASE_URL="postgresql://postgres.vhndezwapxlwihgzypsf:[YOUR-PASSWORD]@aws-1-ap-southeast-1.pooler.supabase.com:6543/postgres?pgbouncer=true"
DIRECT_URL="postgresql://postgres.vhndezwapxlwihgzypsf:[YOUR-PASSWORD]@aws-1-ap-southeast-1.pooler.supabase.com:5432/postgres"
```

**Replace `[YOUR-PASSWORD]` with your actual password.**

**Example:**
If your password is `MyPassword123`, change it to:
```env
DATABASE_URL="postgresql://postgres.vhndezwapxlwihgzypsf:MyPassword123@aws-1-ap-southeast-1.pooler.supabase.com:6543/postgres?pgbouncer=true"
DIRECT_URL="postgresql://postgres.vhndezwapxlwihgzypsf:MyPassword123@aws-1-ap-southeast-1.pooler.supabase.com:5432/postgres"
```

### ⚠️ Important: URL-Encode Special Characters

If your password has special characters, encode them:

| Character | Use This Instead |
|-----------|------------------|
| `@` | `%40` |
| `#` | `%23` |
| `$` | `%24` |
| `%` | `%25` |
| `&` | `%26` |
| `+` | `%2B` |
| `=` | `%3D` |
| `?` | `%3F` |
| `/` | `%2F` |
| ` ` (space) | `%20` |

**Example:** Password `Pass@123#` becomes `Pass%40123%23`

### Step 3: Test the Connection

After updating, test it:

```bash
npm run test:db
```

This will tell you if the connection works!

### Step 4: Restart Server

1. Stop your dev server (Ctrl+C)
2. Start it again: `npm run dev`
3. Try creating a project again

## ✅ That's It!

Once you've replaced `[YOUR-PASSWORD]` with your actual password, the error should be gone.

## 🔍 Still Not Working?

Run the test script to see the exact error:
```bash
npm run test:db
```

It will tell you exactly what's wrong!

