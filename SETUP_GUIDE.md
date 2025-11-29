# 🚀 Quick Start Guide - Lingeshwar Kulal Portfolio

## Prerequisites

Make sure you have installed:
- Node.js (v16 or higher) - [Download here](https://nodejs.org/)
- npm (comes with Node.js)

Check your installation:
```bash
node --version
npm --version
```

## Step-by-Step Setup

### 1. Navigate to Project Directory

```bash
cd E:\Portfolio\portfolio-website
```

### 2. Add Your Profile Photo

**CRITICAL STEP:** Before running the project, add your profile photo:

1. Save your professional photo to: `E:\Portfolio\portfolio-website\src\assets\profile.jpg`
2. The file MUST be named exactly `profile.jpg`
3. Recommended size: 400x400px or similar square dimensions

### 3. Install Dependencies

```bash
npm install
```

If you encounter errors, try:
```bash
npm cache clean --force
npm install
```

### 4. Start Development Server

```bash
npm run dev
```

The website will open at: `http://localhost:5173`

### 5. Build for Production

When ready to deploy:
```bash
npm run build
```

This creates optimized files in the `dist` folder.

## Troubleshooting

### npm install fails
1. Clear npm cache: `npm cache clean --force`
2. Delete `node_modules` folder if it exists
3. Delete `package-lock.json` if it exists
4. Run `npm install` again

### Profile image not showing
1. Verify the file is named exactly `profile.jpg`
2. Check it's in `src/assets/` folder
3. Restart the dev server

### Port 5173 already in use
Run: `npm run dev -- --port 3000`

## What's Included

✅ Fully responsive portfolio website
✅ Cybersecurity-themed design (Matrix green on dark)
✅ All sections: Hero, About, Skills, Projects, Experience, Education, Contact
✅ Smooth scroll navigation
✅ Modern React components
✅ Production-ready build system

## Features by Section

- **Header**: Sticky navigation with smooth scrolling
- **Hero**: Profile photo with glowing effect + intro
- **About**: Detailed background and approach
- **Skills**: Categorized skills (Security, Networking, AI-Assisted Dev, Tools, OS)
- **Projects**: 4 highlighted projects with descriptions
- **Experience**: SYSAP Technologies role details
- **Education**: Degrees and certifications
- **Contact**: Email, LinkedIn, GitHub links

## Customization Tips

### Update Content
- Edit component files in `src/components/`
- Each section has its own file (Hero.jsx, About.jsx, etc.)

### Change Colors
- Edit `src/index.css`
- Modify CSS variables: `--primary-color`, `--secondary-color`, etc.

### Add More Projects
- Edit `src/components/Projects.jsx`
- Add objects to the `projects` array

## Deploy to Web

### Option 1: GitHub Pages
```bash
npm install --save-dev gh-pages
```

Add to `package.json`:
```json
"homepage": "https://yourusername.github.io/portfolio"
```

Deploy:
```bash
npm run deploy
```

### Option 2: Netlify
1. Push code to GitHub
2. Connect GitHub repo to Netlify
3. Auto-deploys on every push

### Option 3: Vercel
1. Push code to GitHub
2. Import project in Vercel
3. Auto-deploys on every push

## Need Help?

Contact: lingeshwarkulal106@gmail.com

---

Built with ❤️ using React + Vite
