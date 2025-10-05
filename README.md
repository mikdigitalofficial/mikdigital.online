# MIK Digital - Professional Portfolio Website

A secure, performance-optimized portfolio website for MIK Digital, featuring comprehensive digital marketing services, case studies, and contact information.

## 🔒 Security Features

This website implements industry-standard security headers to protect against common web vulnerabilities:

### Security Headers Implemented

All HTML pages include the following security headers via meta tags:

- **Content Security Policy (CSP)**: Strict policy allowing only trusted sources
- **X-Frame-Options**: Prevents clickjacking attacks (`DENY`)
- **X-Content-Type-Options**: Prevents MIME type sniffing (`nosniff`)
- **X-XSS-Protection**: Enables XSS protection (`1; mode=block`)
- **Referrer-Policy**: Controls referrer information (`strict-origin-when-cross-origin`)
- **Permissions-Policy**: Restricts browser features (`camera=(), microphone=(), geolocation=(), payment=(), usb=()`)

### Content Security Policy Details

The CSP allows the following trusted domains:

#### Scripts
- `'self'` - Self-hosted scripts
- `cdnjs.cloudflare.com` - Font Awesome, Prism.js
- `cdn.tailwindcss.com` - Tailwind CSS framework
- `unpkg.com` - Feather icons
- `www.googletagmanager.com` - Google Analytics/GTM
- `connect.facebook.net` - Facebook Pixel
- `www.clarity.ms` - Microsoft Clarity analytics
- `cdn.jsdelivr.net` - Chart.js library

#### Styles
- `'self'` and `'unsafe-inline'` - Self-hosted and inline styles
- `cdnjs.cloudflare.com` - Font Awesome CSS
- `fonts.googleapis.com` - Google Fonts
- `use.fontawesome.com` - Font Awesome backup
- `maxcdn.bootstrapcdn.com` - Font Awesome backup

#### Fonts
- `'self'` - Self-hosted fonts
- `fonts.gstatic.com` - Google Fonts
- `cdnjs.cloudflare.com` - Font Awesome fonts

#### Images
- `'self'` - Self-hosted images
- `data:` - Data URLs for icons
- `https:` - All HTTPS images
- `blob:` - Blob URLs for generated content

#### Connections
- `'self'` - Self connections
- `www.google-analytics.com` - Google Analytics
- `www.googletagmanager.com` - Google Tag Manager
- `www.facebook.com` - Facebook tracking
- `connect.facebook.net` - Facebook Pixel
- `www.clarity.ms` - Microsoft Clarity

### Third-Party Scripts Security

All third-party scripts are loaded from trusted CDNs with:
- HTTPS-only connections
- Integrity checks where available
- Crossorigin attributes for security
- Proper CSP allowlist entries

## 🚀 Features

- Responsive design optimized for all devices
- SEO-optimized with structured data
- Performance-optimized loading
- Secure implementation with CSP
- Analytics integration (Google Analytics, Facebook Pixel)
- Contact forms and lead generation
- Case studies and portfolio showcase

## 📁 File Structure

```
portfolio/
├── index.html                 # Home page
├── blog.html                  # Blog page  
├── case-studies.html          # Case studies page
├── contact.html               # Contact page
├── documentation.html         # Site documentation
├── code-snippets.html         # Code examples
├── google-ads-freelancer.html # Google Ads services
├── privacy-policy.html        # Privacy policy
├── case-studies/
│   └── index.html            # Case studies directory
├── style.css                 # Main stylesheet
├── main.js                   # Main JavaScript
├── sitemap.xml              # SEO sitemap
├── robots.txt               # Search engine directives
└── public/
    ├── favicon.ico          # Website favicon
    └── site.webmanifest     # PWA manifest
```

## 🛡️ Security Best Practices

1. **Content Security Policy**: Strict CSP implementation preventing XSS attacks
2. **HTTPS Only**: All external resources loaded via HTTPS
3. **Frame Protection**: X-Frame-Options prevents clickjacking
4. **Content Type Validation**: X-Content-Type-Options prevents MIME confusion
5. **Referrer Control**: Strict referrer policy for privacy
6. **Feature Permissions**: Restricted access to sensitive browser APIs

## 🚀 Deployment

For deployment instructions including security configuration, see [DEPLOYMENT-GUIDE.md](DEPLOYMENT-GUIDE.md).

The security headers are implemented via HTML meta tags and should also be configured at the server level using the provided Apache configuration in the deployment guide.

## 📊 Analytics & Tracking

This website includes:
- Google Analytics for traffic analysis
- Google Tag Manager for event tracking  
- Facebook Pixel for advertising optimization
- Microsoft Clarity support (configured but not currently active)

All tracking scripts are properly secured under the Content Security Policy.
