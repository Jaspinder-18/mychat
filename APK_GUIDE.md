# How to Build Your Stealth Chat APK

Your app has been converted to be mobile-ready with a "Notes App" disguise.

## 1. Important Configuration
Before building, you MUST update the IP address to point to your backend server.
1. Open `e:\mychat\frontend\src\config.js`.
2. Change the `API_BASE_URL` to your computer's IP address (e.g., `http://192.168.1.5:5000`).
   - Run `ipconfig` (Windows) or `ifconfig` (Mac/Linux) to find your IPv4 address.
   - **Do not use localhost** as the Android phone cannot see it.

## 2. Using the App (Stealth Mode)
- When you open the app, it looks like a "Quick Notes" app.
- To unlock the Chat:
  1. In the note text area, type exactly: `#mychat=1809`
  2. Click **Save**.
  3. The app will switch to the Login screen.
- To use as a Notes app:
  1. Type anything else.
  2. Click **Save**.
  3. It will simulate saving a text file.

## 3. Generating the APK
You need **Android Studio** installed on your computer to generate the final .apk file.

1. **Sync your changes:**
   Open a terminal in the `frontend` folder and run:
   ```bash
   npm run build
   npx cap sync
   ```

2. **Open in Android Studio:**
   ```bash
   npx cap open android
   ```

3. **Build APK:**
   - In Android Studio, wait for Gradle sync to finish.
   - Go to menu: `Build` > `Build Bundle(s) / APK(s)` > `Build APK(s)`.
   - Once done, click "locate" to find your `.apk` file.
   - Transfer this file to your phone and install it!

## 4. Minimum Data Usage
- The app uses efficient text-based communication.
- Assets are bundled in the APK, so no data is wasted downloading the UI.
