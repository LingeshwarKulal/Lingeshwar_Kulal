# 📸 HOW TO ADD YOUR PROFILE PHOTO

## Quick Instructions

Your profile photo needs to be added manually. Follow these steps:

### Method 1: Using File Explorer (Easiest)

1. **Locate your photo** - Find the professional headshot photo you want to use
2. **Copy the photo** to this location:
   ```
   E:\Portfolio\portfolio-website\src\assets\
   ```
3. **Rename it** to exactly: `profile.jpg`
4. **Done!** The photo is now integrated into your portfolio

### Method 2: Using PowerShell

```powershell
# If your photo is saved somewhere, copy it:
Copy-Item "C:\Path\To\Your\Photo.jpg" -Destination "E:\Portfolio\portfolio-website\src\assets\profile.jpg"
```

## Photo Recommendations

- ✅ Professional headshot
- ✅ Good lighting and clear background
- ✅ Square aspect ratio (400x400px ideal)
- ✅ JPG or JPEG format
- ✅ File size under 2MB
- ✅ High quality but web-optimized

## Verify It's Working

After adding the photo:

1. Open terminal in the project folder
2. Run: `npm run dev`
3. Open: `http://localhost:5173`
4. Your photo should appear in the Hero section with a green glowing border

## Troubleshooting

**Photo not showing?**
- Check filename is exactly `profile.jpg` (lowercase, no spaces)
- Check location is exactly `src/assets/profile.jpg`
- Restart the dev server (`Ctrl+C` then `npm run dev`)

**Wrong photo displayed?**
- Replace `profile.jpg` with the correct image
- Refresh browser (`Ctrl+Shift+R` for hard refresh)

---

**Current Status:** Photo needs to be added manually to `src/assets/profile.jpg`
