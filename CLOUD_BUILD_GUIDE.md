# Build APK Without Android Studio (Cloud Build)

Since you don't want to install Android Studio (which is very large), you can use **GitHub Actions** to build the APK file for you in the cloud for free.

## Prerequisites
1. You need a **GitHub Account**.
2. You need `git` installed on your computer.

## Step 1: Initialize Git (If not already done)
Open your terminal in `e:\mychat\` and run:

```powershell
git init
git add .
git commit -m "Initial commit for Stealth Chat"
```

## Step 2: Push to GitHub
1. Create a **new repository** on GitHub (keep it Private if you want).
2. Follow the instructions to push your code:
   ```powershell
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
   git branch -M main
   git push -u origin main
   ```

## Step 3: Download Your APK
1. Go to your repository page on GitHub.
2. Click on the **"Actions"** tab at the top.
3. You should see a workflow named **"Build Android APK"** running (yellow circle).
4. Click on it and wait for it to finish (green checkmark).
5. Click on the specific run (e.g., "Initial commit...").
6. Scroll down to the **"Artifacts"** section.
7. Click **"stealth-chat-apk"** to download the zip file.
8. Unzip it to find `app-debug.apk`.
9. Send this file to your phone and install it!

## Note on "Unknown Sources"
Since this is a debug APK signed with a test key, your phone might warn you about "Unknown Sources" or "Unsafe App". This is normal for apps not meant for the Play Store. You can safely allow it.
