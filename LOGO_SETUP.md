# Vaani - App Logo Setup

## Adding Your Custom Logo

### 1. App Logo (Within the App)

Place your PNG logo file in the following location:

```
src/assets/images/logo.png
```

**Requirements:**

- File name: `logo.png`
- Recommended size: 512x512 pixels or larger
- Format: PNG with transparent background (recommended)
- The logo will be automatically resized in the app

### 2. App Icons (Home Screen Icons)

#### Android Icons

Replace the following files in `android/app/src/main/res/`:

- `mipmap-hdpi/ic_launcher.png` (72x72px)
- `mipmap-mdpi/ic_launcher.png` (48x48px)
- `mipmap-xhdpi/ic_launcher.png` (96x96px)
- `mipmap-xxhdpi/ic_launcher.png` (144x144px)
- `mipmap-xxxhdpi/ic_launcher.png` (192x192px)

- `mipmap-hdpi/ic_launcher_round.png` (72x72px)
- `mipmap-mdpi/ic_launcher_round.png` (48x48px)
- `mipmap-xhdpi/ic_launcher_round.png` (96x96px)
- `mipmap-xxhdpi/ic_launcher_round.png` (144x144px)
- `mipmap-xxxhdpi/ic_launcher_round.png` (192x192px)

#### iOS Icons (if needed)

Replace icons in `ios/MobileApp/Images.xcassets/AppIcon.appiconset/`

### 3. After Adding Your Logo

1. Place your `logo.png` file in `src/assets/images/`
2. Replace Android app icons if desired
3. Clean and rebuild the app:
   ```bash
   cd android
   ./gradlew clean
   cd ..
   npx react-native run-android
   ```

### 4. App Name Changes Made

The app name has been changed from "MobileApp" to "Vaani" in:

- `app.json`
- `package.json`
- `android/app/src/main/res/values/strings.xml`
- `ios/MobileApp/Info.plist`
- App header and titles

## Quick Logo Generator Tools

If you need to generate app icons in multiple sizes:

- **Online**: https://appicon.co/ or https://makeappicon.com/
- **Tools**: Icon Set Creator, App Icon Generator

## Current Logo Usage

The logo appears in:

- Language card (32x32 size)
- Header area
- Can be easily added to other screens

You can adjust the logo size by changing the `size` prop in the component.
