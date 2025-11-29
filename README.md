# Lingeshwar Kulal - Cybersecurity Portfolio

A professional portfolio website built with React.js showcasing cybersecurity expertise, VAPT skills, and projects.

## Features

- 🎨 Modern, responsive design with cybersecurity theme
- 🔒 Security-focused color scheme (Matrix green on dark)
- 📱 Mobile-friendly and fully responsive
- ⚡ Fast performance with Vite
- 🎯 Smooth scrolling navigation
- 💼 Complete sections: Hero, About, Skills, Projects, Experience, Education, Contact

## Setup Instructions

### 1. Install Dependencies

```bash
cd portfolio-website
npm install
```

### 2. Add Your Profile Photo

**IMPORTANT:** Copy your profile photo to `src/assets/profile.jpg`

The image should be:
- Named exactly `profile.jpg`
- Placed in the `src/assets/` folder
- Ideally 400x400px or similar square dimensions
- Professional headshot quality

### 3. Run the Development Server

```bash
npm run dev
```

The site will be available at `http://localhost:5173`

### 4. Build for Production

```bash
npm run build
```

The production files will be in the `dist` folder.

## Project Structure

```
portfolio-website/
├── src/
│   ├── assets/
│   │   └── profile.jpg          # Your profile photo goes here
│   ├── components/
│   │   ├── Header.jsx           # Navigation header
│   │   ├── Hero.jsx             # Hero section with photo
│   │   ├── About.jsx            # About section
│   │   ├── Skills.jsx           # Core skills
│   │   ├── Projects.jsx         # Featured projects
│   │   ├── Experience.jsx       # Work experience
│   │   ├── Education.jsx        # Education & certifications
│   │   ├── Contact.jsx          # Contact information
│   │   └── Footer.jsx           # Footer
│   ├── App.jsx                  # Main app component
│   ├── main.jsx                 # Entry point
│   └── index.css                # Global styles
├── index.html
├── package.json
└── vite.config.js
```

## Customization

### Colors
The color theme can be customized in `src/index.css`:
- `--primary-color`: Matrix green (#00ff41)
- `--secondary-color`: Dark navy (#0a0e27)
- `--accent-color`: Accent navy (#1a1f3a)

### Content
All content is hardcoded in the component files. To update:
- Personal info: Edit `src/components/Hero.jsx`
- About text: Edit `src/components/About.jsx`
- Skills: Edit `src/components/Skills.jsx`
- Projects: Edit `src/components/Projects.jsx`
- Experience: Edit `src/components/Experience.jsx`
- Contact links: Edit `src/components/Contact.jsx`

## Technologies Used

- React 18.3
- Vite 5.4
- Modern CSS with CSS Variables
- Responsive Grid & Flexbox layouts

## Deployment

### Deploy to GitHub Pages

1. Install gh-pages:
```bash
npm install --save-dev gh-pages
```

2. Add to package.json:
```json
"homepage": "https://LingeshwarKulal.github.io/portfolio",
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}
```

3. Deploy:
```bash
npm run deploy
```

### Deploy to Netlify/Vercel

Simply connect your GitHub repository and these platforms will auto-deploy from the main branch.

## Contact

**Lingeshwar Kulal**
- Email: lingeshwarkulal106@gmail.com
- LinkedIn: [linkedin.com/in/lingeshwarkulal2001](https://www.linkedin.com/in/lingeshwarkulal2001/)
- GitHub: [github.com/LingeshwarKulal](https://github.com/LingeshwarKulal)

## License

© 2025 Lingeshwar Kulal. All rights reserved.
