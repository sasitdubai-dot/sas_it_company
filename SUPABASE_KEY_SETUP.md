# 🔑 Get Your Supabase Anon Key

You need to get your actual Supabase anon key to enable image uploads. Here's how:

## 📋 **Step 1: Get Your Supabase Keys**

1. **Go to your Supabase Dashboard**
   - Visit: https://supabase.com/dashboard
   - Login to your account
   - Select your project: `iyqtzrbyfyjfpgyzgkqb`

2. **Navigate to Settings**
   - Click on **Settings** (gear icon) in the left sidebar
   - Click on **API** in the settings menu

3. **Copy Your Keys**
   You'll see two important values:
   
   **Project URL:** (you already have this)
   ```
   https://iyqtzrbyfyjfpgyzgkqb.supabase.co
   ```
   
   **anon public key:** (this is what you need)
   ```
   eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Iml5cXR6cmJ5ZnlqZnBneXpna3FiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDM2NzI4MDAsImV4cCI6MjAxOTI0ODgwMH0.EXAMPLE_KEY_STRING
   ```

## 🔧 **Step 2: Update Your Environment File**

Replace the placeholder in your `.env.local` file:

```env
# Before (current - not working)
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key

# After (with your actual key)
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Iml5cXR6cmJ5ZnlqZnBneXpna3FiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDM2NzI4MDAsImV4cCI6MjAxOTI0ODgwMH0.YOUR_ACTUAL_KEY_HERE
```

## 🚀 **Step 3: Restart Your Development Server**

```bash
# Stop current server (Ctrl+C in terminal)
# Then restart:
npm run dev
```

## 🎯 **Step 4: Test Image Upload**

1. **Visit**: http://localhost:3000/admin/projects
2. **Try uploading an image** - it should now work!
3. **Check browser console** for any error messages

## 🔍 **Troubleshooting**

### **If you still can't upload:**

1. **Check browser console** (F12 → Console tab)
2. **Look for error messages** related to Supabase or CORS
3. **Verify your Supabase project is active** (not paused)

### **Common Issues:**

**CORS Error:**
- Make sure your project URL is correct
- Check if your Supabase project is paused (free tier pauses after inactivity)

**Storage Bucket Error:**
- The `project-images` bucket should exist
- Check Storage → Buckets in Supabase dashboard
- Make sure it's set to **Public**

## 🆘 **Alternative: Use Mock Upload (Temporary)**

I've added a fallback system. If Supabase isn't working, the system will:
- ✅ Still save your project data to the database
- ✅ Use placeholder images for testing
- ✅ Show console messages about using mock upload

This lets you test the full workflow while you set up Supabase properly.

## 📝 **Current Status**

With the updates I made:
- ✅ **Better error handling** for image uploads
- ✅ **Detailed console logging** to help debug issues
- ✅ **Mock upload fallback** when Supabase isn't configured
- ✅ **Improved file validation** with better error messages

## 🎉 **Next Steps**

1. **Get your Supabase anon key** from the dashboard
2. **Update `.env.local`** with the real key
3. **Restart your server**
4. **Test uploading** - should work perfectly!

The system is designed to work either way - with real Supabase storage or mock uploads for testing! 🚀

