# Solartopia

A solarpunk community website similar to Edge City, built for GitHub Pages.

## Setup for GitHub Pages

1. Push this repository to GitHub
2. Go to your repository settings
3. Navigate to "Pages" in the left sidebar
4. Under "Source", select the branch you want to deploy (usually `main` or `master`)
5. Select the root folder (`/`)
6. Click "Save"
7. Your site will be available at `https://[your-username].github.io/solartopia/`

## Local Development

Simply open `index.html` in your browser, or use a local server:

```bash
# Using Python
python -m http.server 8000

# Using Node.js (if you have http-server installed)
npx http-server

# Using PHP
php -S localhost:8000
```

Then visit `http://localhost:8000` in your browser.

## Customization

- Edit `index.html` to update content
- Modify `styles.css` to change colors, fonts, and styling
- Update `script.js` to add or modify interactive features

## Features

- Responsive design that works on all devices
- Smooth scrolling navigation
- Interactive timeline
- Form handling for newsletter signups
- Fade-in animations on scroll
- Mobile-friendly hamburger menu

## Color Scheme

The site uses a green/solarpunk color palette:
- Primary: `#2d5016` (dark green)
- Secondary: `#4a7c2a` (medium green)
- Accent: `#6ba644` (light green)

You can customize these in the `:root` variables in `styles.css`.