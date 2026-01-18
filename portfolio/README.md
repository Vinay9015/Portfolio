# Vinay's Data Analyst Portfolio

A modern, responsive portfolio website built with HTML, CSS, and JavaScript.

## 📁 Project Structure

```
portfolio/
├── index.html              # Home page (intro/summary)
├── css/
│   └── styles.css          # Main stylesheet
├── js/
│   └── main.js             # JavaScript functionality
├── pages/
│   ├── education.html      # Education details
│   ├── experience.html     # Work experience
│   ├── projects.html       # GitHub projects
│   ├── dashboards.html     # Tableau/Power BI dashboards
│   ├── publications.html   # Research papers
│   ├── skills.html         # Technical skills
│   ├── certifications.html # Certifications
│   └── contact.html        # Contact form
├── assets/
│   └── images/             # Screenshots, profile photo
│       ├── profile.jpg     # Your photo (add this)
│       ├── sales-dashboard.png
│       ├── crop-dashboard.png
│       └── linkedin-dashboard.png
└── README.md
```

## 🚀 Steps to Make It Online

### Option 1: GitHub Pages (FREE - Recommended)

1. **Create GitHub Repository**
   ```bash
   # Initialize git in your portfolio folder
   cd portfolio
   git init
   git add .
   git commit -m "Initial portfolio commit"
   ```

2. **Push to GitHub**
   - Create a new repository on GitHub named `portfolio` (or `your-username.github.io` for custom domain)
   - Push your code:
   ```bash
   git remote add origin https://github.com/YOUR-USERNAME/portfolio.git
   git branch -M main
   git push -u origin main
   ```

3. **Enable GitHub Pages**
   - Go to your repository → Settings → Pages
   - Under "Source", select `main` branch
   - Click Save
   - Your site will be live at: `https://YOUR-USERNAME.github.io/portfolio`

### Option 2: Vercel (FREE - Easy)

1. **Sign up at [vercel.com](https://vercel.com)**
2. **Import your GitHub repository**
3. **Click Deploy**
4. Your site will be live at: `https://your-project.vercel.app`

### Option 3: Netlify (FREE)

1. **Sign up at [netlify.com](https://netlify.com)**
2. **Drag & drop your portfolio folder** or connect GitHub
3. Your site will be live instantly

---

## ✏️ Where to Add Your Content

### 🔗 REQUIRED UPDATES (Search for "TODO" in code)

#### 1. Personal Information (Update in ALL pages)
- `YOUR-EMAIL@example.com` → Your email
- `YOUR-LINKEDIN` → Your LinkedIn username
- `YOUR-GITHUB` → Your GitHub username

#### 2. index.html (Home Page)
- Line ~80: Update hero description/tagline
- Line ~90: Add resume PDF link
- Line ~150: Update LinkedIn URL in CTA section

#### 3. pages/education.html
- Line ~70: Update bachelor's degree details
- Line ~85: Add your university name, dates, GPA
- Line ~95: Update relevant coursework

#### 4. pages/experience.html
- Line ~65: Update LTIMindtree dates if needed
- Line ~75: Customize job description
- Line ~95: Update achievements (keep quantified results!)
- Line ~140: Add any internships

#### 5. pages/projects.html
- Line ~85: Update ChurnGuard GitHub link
- Line ~130: Update Crop Yield GitHub link
- Line ~175: Update LinkedIn Pipeline GitHub link
- Add more projects as needed

#### 6. pages/dashboards.html
- Line ~75: Add Tableau Public link for Sales Dashboard
- Line ~110: Add Tableau Public link for Crop Yield
- Line ~145: Add Power BI screenshots
- Replace placeholder images with actual dashboard screenshots

#### 7. pages/publications.html
- Line ~65: Update paper title
- Line ~70: Update author names
- Line ~80: Add complete abstract
- Line ~95: Add paper link when available

#### 8. pages/skills.html
- Update skill percentages based on your proficiency
- Add/remove skills as needed

#### 9. pages/certifications.html
- Replace placeholder certifications with your actual ones
- Add credential verification links

#### 10. pages/contact.html
- Line ~150: Set up Formspree for contact form:
  1. Go to [formspree.io](https://formspree.io)
  2. Create free account
  3. Create new form
  4. Replace `YOUR-FORMSPREE-ID` with your form ID

---

## 🖼️ Adding Images

### Dashboard Screenshots
1. Take screenshots of your Tableau/Power BI dashboards
2. Save as PNG files (recommended: 1920x1080 or 1200x675)
3. Place in `assets/images/` folder
4. Update image paths in `dashboards.html`

### Profile Photo
1. Use a professional headshot
2. Save as `profile.jpg` in `assets/images/`
3. Update `index.html` to use the image instead of placeholder

### Project Screenshots
1. Take screenshots of your project demos
2. Save in `assets/images/`
3. Update `projects.html` with image paths

---

## 📱 Contact Form Setup (Formspree)

1. Go to [formspree.io](https://formspree.io) and sign up (FREE)
2. Click "New Form"
3. Name it (e.g., "Portfolio Contact")
4. Copy the form endpoint ID (looks like: `xrgvnzqp`)
5. In `pages/contact.html`, replace:
   ```html
   action="https://formspree.io/f/YOUR-FORMSPREE-ID"
   ```
   with:
   ```html
   action="https://formspree.io/f/xrgvnzqp"
   ```

---

## 🎨 Customization

### Colors (css/styles.css)
```css
:root {
    --accent: #00d4aa;           /* Main accent color */
    --bg-primary: #0a0a0f;       /* Background */
    --text-primary: #ffffff;      /* Text color */
}
```

### Fonts
The portfolio uses:
- **Syne** - For headings (bold, modern)
- **Space Mono** - For body text (technical feel)

To change fonts, update the Google Fonts link in each HTML file.

---

## 📋 Pre-Launch Checklist

- [ ] Updated all personal information (email, LinkedIn, GitHub)
- [ ] Added profile photo
- [ ] Added dashboard screenshots
- [ ] Updated all project GitHub links
- [ ] Added publication details and links
- [ ] Updated certifications with credential links
- [ ] Set up Formspree contact form
- [ ] Added resume PDF to `assets/` folder
- [ ] Tested all navigation links
- [ ] Tested on mobile devices
- [ ] Tested contact form submission

---

## 🔒 Security Notes

- Never commit sensitive information (API keys, passwords)
- Use HTTPS for all external links
- Formspree handles form spam protection automatically

---

## 📞 Support

If you need help customizing this portfolio, feel free to reach out!

---

Built with ❤️ for data professionals
