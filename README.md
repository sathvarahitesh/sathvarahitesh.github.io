# Hitesh Sathvara | Portfolio Website

Personal portfolio website of **Hitesh Sathvara**, a Python Developer and Software Engineer (MCA student) from Ahmedabad, Gujarat, India.

**Live site:** https://sathvarahitesh.github.io/

## About this project

A fast, responsive, single-page portfolio that presents my education, skills, projects and certifications, with a downloadable resume and contact details. All content comes from my resume.

## Technologies

- HTML5 (semantic markup)
- CSS3 (custom properties, Flexbox, Grid, responsive layout)
- JavaScript (vanilla): theme toggle, mobile menu, scroll animations
- Inter font (Google Fonts) with a system-font fallback
- Inline SVG icons (no external icon library)

## Features

- Dark and light mode that follows the device and remembers the visitor's choice
- Fully responsive: phones, tablets, laptops and desktops
- Mobile menu with keyboard support
- Sections: Hero, About, Skills, Projects, Education, Certifications, Resume, Contact
- View and download resume (PDF)
- Accessibility: semantic HTML, skip link, visible focus states, ARIA labels, reduced-motion support
- SEO: title, meta description, Open Graph tags, favicon
- No frameworks and no build step

## Project structure

```
sathvarahitesh.github.io/
├── index.html
├── favicon.svg
├── robots.txt
├── sitemap.xml
├── README.md
├── .gitignore
├── css/
│   └── style.css
├── js/
│   └── script.js
└── assets/
    ├── icons/
    ├── images/
    │   ├── og-image.png
    │   └── projects/
    └── resume/
        └── Hitesh_Sathvara_Resume.pdf
```

## Run locally

1. Install [Visual Studio Code](https://code.visualstudio.com/).
2. Install the **Live Server** extension (by Ritwick Dey).
3. Open the project folder in VS Code.
4. Right-click `index.html` and choose **Open with Live Server**.
5. The site opens at `http://127.0.0.1:5500`.

## Deploy with GitHub Pages

1. Create a public repository named `USERNAME.github.io`.
2. Upload all project files to the `main` branch.
3. Open **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**, select branch `main` and folder `/ (root)`, then **Save**.
5. After a few minutes the site is live at `https://USERNAME.github.io/`.

## Update the site

Edit the files, then upload them again or run:

```
git add .
git commit -m "Describe your change"
git push
```

GitHub Pages republishes automatically within a few minutes.

## Contact

- Email: hbsatvara@gmail.com
- LinkedIn: https://www.linkedin.com/in/hitesh-satvara/
- GitHub: https://github.com/sathvarahitesh
