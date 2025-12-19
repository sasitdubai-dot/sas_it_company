# How to Get Your Supabase Anon Key

## Step-by-Step Guide

### 1. From your Supabase Dashboard
You're already logged in - great! Now:

### 2. Navigate to API Settings
- Look at the **LEFT SIDEBAR** 
- At the bottom, find the **Settings** icon (⚙️ gear icon)
- Click on **Settings**

### 3. Click on "API"
- In the Settings menu, click on **"API"**
- You'll see a page with your API configuration

### 4. Find Your Keys
You'll see two important values:

#### Project URL
```
https://iyqtzrbyfyjfpgyzgkqb.supabase.co
```
(You already have this one ✅)

#### anon (public) key
```
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Iml5cXR6cmJ5ZnlqZnBneXpna3FiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDM2NzI4MDAsImV4cCI6MjAxOTI0ODgwMH0.XXXXXXXXXXXXXXX
```
(This is what you need! 🎯)

### 5. Copy the anon key
- Click the **Copy** button next to the anon key
- Or select and copy the entire key

### 6. Update your .env.local file
Replace the placeholder with your actual key:
```env
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...YOUR_ACTUAL_KEY
```

## Alternative Method: Project Settings

If you can't find it in API settings:

1. Click on **"Project Settings"** (might be under Settings)
2. Look for **"API"** or **"API Keys"** tab
3. Find the **"anon public"** key

## What NOT to use:
- ❌ **service_role key** - This is secret, never use in frontend
- ✅ **anon key** - This is safe for frontend use

## Still Can't Find It?

The anon key is sometimes labeled as:
- "anon"
- "anon public"
- "public anon key"
- "Anonymous API key"

It's always the FIRST key shown, and it's safe to expose in client-side code.


