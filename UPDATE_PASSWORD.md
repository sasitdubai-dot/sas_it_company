# 🔑 How to Update Database Password

## Step 1: Get Your Database Password

1. Go to **Supabase Dashboard**: https://supabase.com/dashboard
2. Select your project: **vhndezwapxlwihgzypsf**
3. Click **Settings** (gear icon) in the left sidebar
4. Click **Database** in the settings menu
5. Scroll to **Database Password** section
6. If you don't remember it:
   - Click **Reset database password**
   - Copy the new password immediately (you won't see it again!)

## Step 2: Update .env.local File

Open `.env.local` and replace `[YOUR-PASSWORD]` on lines 10 and 13:

**Before:**
```env
DATABASE_URL="postgresql://postgres.vhndezwapxlwihgzypsf:[YOUR-PASSWORD]@aws-1-ap-southeast-1.pooler.supabase.com:6543/postgres?pgbouncer=true"
DIRECT_URL="postgresql://postgres.vhndezwapxlwihgzypsf:[YOUR-PASSWORD]@aws-1-ap-southeast-1.pooler.supabase.com:5432/postgres"
```

**After (example with password "MyPassword123"):**
```env
DATABASE_URL="postgresql://postgres.vhndezwapxlwihgzypsf:MyPassword123@aws-1-ap-southeast-1.pooler.supabase.com:6543/postgres?pgbouncer=true"
DIRECT_URL="postgresql://postgres.vhndezwapxlwihgzypsf:MyPassword123@aws-1-ap-southeast-1.pooler.supabase.com:5432/postgres"
```

## Step 3: URL-Encode Special Characters

If your password contains special characters, you MUST encode them:

| Character | Encoded |
|-----------|---------|
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

**Example:**
- Password: `My@Pass#123`
- Encoded: `My%40Pass%23123`

So the connection string would be:
```env
DATABASE_URL="postgresql://postgres.vhndezwapxlwihgzypsf:My%40Pass%23123@aws-1-ap-southeast-1.pooler.supabase.com:6543/postgres?pgbouncer=true"
```

## Step 4: Update .env File (if it exists)

Do the same for `.env` file if you have one.

## Step 5: Restart Development Server

After updating the password:

1. **Stop the server** (Ctrl+C in terminal)
2. **Restart it:**
   ```bash
   npm run dev
   ```

## Step 6: Test Connection

Try creating a project again from the admin panel. The error should be gone!

## 🔍 Quick Check

To verify your password is correct, you can test the connection:

```bash
# This will try to connect and show any errors
npx prisma db pull
```

If it connects successfully, your password is correct!

## ⚠️ Common Mistakes

1. **Forgetting to URL-encode special characters** - This is the #1 cause of connection failures
2. **Leaving `[YOUR-PASSWORD]` as-is** - Must be replaced with actual password
3. **Extra spaces or quotes** - Make sure there are no extra spaces around the password
4. **Using wrong password** - Make sure you're using the Database password, not the API keys

## 💡 Still Having Issues?

If you're still getting "Tenant or user not found" after updating:

1. Double-check the password is correct
2. Verify all special characters are URL-encoded
3. Make sure there are no extra spaces in the connection string
4. Try resetting the database password in Supabase and using the new one
5. Check that your Supabase project is active (not paused)

