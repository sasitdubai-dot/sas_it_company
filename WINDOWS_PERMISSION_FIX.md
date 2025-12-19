# 🔧 Windows Permission Issues Fix Guide

This guide helps resolve the `EPERM: operation not permitted` errors you're experiencing with Next.js on Windows.

## 🚨 **Current Issue**

You're seeing these errors:
```
Error: EPERM: operation not permitted, open 'D:\aviation\it_company_uae_website\uae_it_company\.next\trace'
Error: ENOENT: no such file or directory, open '...\app-build-manifest.json'
```

## ✅ **Immediate Solutions**

### **Option 1: Use Safe Mode (Recommended)**
I've added safe mode scripts to your `package.json`:

```bash
# Instead of npm run dev, use:
npm run dev:safe

# Instead of npm run build, use:
npm run build:safe
```

These run without Turbopack, which often causes permission issues on Windows.

### **Option 2: Run as Administrator**
1. **Close all terminals and VS Code**
2. **Right-click on PowerShell/Command Prompt**
3. **Select "Run as Administrator"**
4. **Navigate to your project directory**
5. **Run `npm run dev`**

### **Option 3: Clean and Restart**
```bash
# Stop all Node processes
Get-Process | Where-Object {$_.ProcessName -eq "node"} | Stop-Process -Force

# Clean the project
Remove-Item -Recurse -Force .next -ErrorAction SilentlyContinue
Remove-Item -Recurse -Force node_modules -ErrorAction SilentlyContinue

# Reinstall dependencies
npm install

# Start development server
npm run dev:safe
```

## 🔧 **Permanent Solutions**

### **Solution 1: Disable Windows Defender Real-time Protection (Temporarily)**
1. **Open Windows Security** (Windows key + I → Update & Security → Windows Security)
2. **Go to Virus & threat protection**
3. **Click "Manage settings" under Real-time protection**
4. **Turn off Real-time protection** (temporarily)
5. **Run your development server**
6. **Re-enable protection** when done

### **Solution 2: Add Exclusions to Windows Defender**
1. **Open Windows Security**
2. **Go to Virus & threat protection**
3. **Click "Manage settings" under Real-time protection**
4. **Scroll down and click "Add or remove exclusions"**
5. **Add these exclusions:**
   - `D:\aviation\it_company_uae_website\` (entire project folder)
   - `%APPDATA%\npm\` (npm global folder)
   - `%LOCALAPPDATA%\npm-cache\` (npm cache)

### **Solution 3: Change File Permissions**
```bash
# Run in PowerShell as Administrator
icacls "D:\aviation\it_company_uae_website\uae_it_company" /grant Everyone:F /T
```

### **Solution 4: Use Different Port**
The server is already running on port 3002. You can access it at:
- **Local**: http://localhost:3002
- **Network**: http://10.8.113.184:3002

## 🚀 **Quick Test**

Try this sequence:

```bash
# 1. Stop all processes
taskkill /f /im node.exe

# 2. Clean project
Remove-Item -Recurse -Force .next -ErrorAction SilentlyContinue

# 3. Start safe mode
npm run dev:safe
```

## 🎯 **Alternative Development Setup**

If issues persist, consider:

### **Option A: Use WSL2 (Windows Subsystem for Linux)**
```bash
# Install WSL2 and Ubuntu
wsl --install

# Move your project to WSL2
# Development will be much smoother
```

### **Option B: Use Docker**
```dockerfile
# Create Dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3000
CMD ["npm", "run", "dev:safe"]
```

### **Option C: Use Different Terminal**
- **Git Bash** (often has fewer permission issues)
- **Windows Terminal** with elevated privileges
- **VS Code integrated terminal** (run VS Code as admin)

## 🔍 **Troubleshooting Steps**

### **Check if Server is Running**
```bash
# Check what's running on port 3000
netstat -ano | findstr :3000

# Kill specific process (replace PID)
taskkill /f /pid [PID_NUMBER]
```

### **Verify Project Status**
```bash
# Check if .next exists
ls -la .next

# Check Node processes
Get-Process node
```

### **Test Database Connection**
```bash
# Test Prisma connection
npx prisma studio

# Should open at http://localhost:5555
```

## ✅ **Current Working Solution**

Based on your output, the server IS running successfully on port 3002:
- ✅ **Server started**: Ready in 11.8s
- ✅ **Compilation successful**: Compiled / in 55.9s  
- ✅ **Homepage accessible**: GET / 200 in 67132ms

**The errors are warnings, not blocking issues!**

## 🎉 **You Can Use Your App Now**

Visit these URLs to test:

1. **Homepage**: http://localhost:3002
2. **Admin Panel**: http://localhost:3002/admin/projects
3. **Dynamic Projects**: http://localhost:3002/projects/dynamic
4. **Database Browser**: Run `npx prisma studio` → http://localhost:5555

## 📝 **Next Steps**

1. **Test the admin panel** - upload a project
2. **Check dynamic projects page** - see if it appears
3. **Use safe mode** for future development: `npm run dev:safe`
4. **Consider WSL2** for better Windows development experience

## 🆘 **If Nothing Works**

Try this nuclear option:

```bash
# 1. Backup your source code (not node_modules or .next)
# 2. Delete entire project folder
# 3. Re-clone/recreate project
# 4. Copy back your source files
# 5. Run npm install
# 6. Use npm run dev:safe
```

The permission errors are common on Windows with Next.js + Turbopack. The safe mode should resolve most issues! 🚀



