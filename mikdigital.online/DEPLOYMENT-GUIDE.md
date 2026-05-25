# MIK Digital Website - Deployment Guide

## 🚀 Pre-Deployment Checklist

### ✅ Files Ready for Upload
- [ ] `index.html` - Home page
- [ ] `case-studies.html` - Case studies page  
- [ ] `services.html` - Services page
- [ ] `contact.html` - Contact page
- [ ] `sitemap.xml` - SEO sitemap
- [ ] `robots.txt` - Search engine directives
- [ ] `public/favicon.ico` - Website favicon
- [ ] `public/site.webmanifest` - PWA manifest

### ✅ SEO Configuration
- [ ] All meta tags properly set
- [ ] Structured data (JSON-LD) implemented
- [ ] Google Analytics tracking code included
- [ ] Google Tag Manager configured
- [ ] Sitemap includes all pages
- [ ] Robots.txt properly configured

## 📋 Deployment Options

### Option 1: Traditional Web Hosting
**Recommended for: Business websites with custom domains**

#### Step 1: Choose a Hosting Provider
- **Recommended**: Bluehost, HostGator, SiteGround, or GoDaddy
- **Alternative**: Shared hosting with cPanel access

#### Step 2: Upload Files
1. Access your hosting control panel (cPanel)
2. Navigate to File Manager
3. Go to `public_html` or `www` folder
4. Upload all HTML files to root directory
5. Upload `sitemap.xml` and `robots.txt` to root
6. Create `public` folder and upload favicon and manifest

#### Step 3: Configure Domain
1. Point domain to hosting nameservers
2. Set up SSL certificate (Let's Encrypt recommended)
3. Configure redirects if needed

### Option 2: Cloud Hosting (Netlify/Vercel)
**Recommended for: Fast deployment and automatic updates**

#### Netlify Deployment
1. **Sign up**: Create account at [netlify.com](https://netlify.com)
2. **Upload**: Drag and drop entire folder to Netlify
3. **Domain**: Connect custom domain or use Netlify subdomain
4. **SSL**: Automatic SSL certificate provided

#### Vercel Deployment
1. **Sign up**: Create account at [vercel.com](https://vercel.com)
2. **Import**: Connect GitHub repository or upload files
3. **Deploy**: Automatic deployment on file changes
4. **Domain**: Connect custom domain or use Vercel subdomain

### Option 3: GitHub Pages
**Recommended for: Free hosting with version control**

1. **Create Repository**: New repository on GitHub
2. **Upload Files**: Push all files to repository
3. **Enable Pages**: Settings → Pages → Source → Main branch
4. **Custom Domain**: Add custom domain in repository settings

## 🔧 Post-Deployment Configuration

### 1. Google Analytics Setup
```javascript
// Verify tracking code is working
// Check real-time reports in GA4
// Set up conversion goals
// Configure audience segments
```

### 2. Google Tag Manager Configuration
```javascript
// Verify GTM container is loading
// Set up conversion tracking tags
// Configure remarketing audiences
// Test all triggers and variables
```

### 3. Search Engine Submission
1. **Google Search Console**:
   - Add property and verify ownership
   - Submit sitemap: `https://yourdomain.com/sitemap.xml`
   - Request indexing for all pages

2. **Bing Webmaster Tools**:
   - Add site and verify ownership
   - Submit sitemap
   - Monitor indexing status

### 4. Social Media Verification
- **Facebook Business**: Verify domain ownership
- **LinkedIn**: Add company page if applicable
- **Instagram**: Link to business account

## 📊 Performance Optimization

### 1. Enable Compression
```apache
# .htaccess file for Apache
<IfModule mod_deflate.c>
    AddOutputFilterByType DEFLATE text/html text/plain text/xml text/css text/javascript application/javascript application/x-javascript
</IfModule>
```

### 2. Set Cache Headers
```apache
# .htaccess file for Apache
<IfModule mod_expires.c>
    ExpiresActive on
    ExpiresByType text/css "access plus 1 year"
    ExpiresByType application/javascript "access plus 1 year"
    ExpiresByType image/png "access plus 1 year"
    ExpiresByType image/jpg "access plus 1 year"
    ExpiresByType image/jpeg "access plus 1 year"
</IfModule>
```

### 3. Security Headers
```apache
# .htaccess file for Apache - Enhanced Security Headers
Header always set X-Content-Type-Options nosniff
Header always set X-Frame-Options DENY
Header always set X-XSS-Protection "1; mode=block"
Header always set Referrer-Policy "strict-origin-when-cross-origin"
Header always set Permissions-Policy "camera=(), microphone=(), geolocation=(), payment=(), usb=()"

# Content Security Policy - Allows self, Google Analytics, Facebook Pixel, Microsoft Clarity, and CDNs
Header always set Content-Security-Policy "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://cdnjs.cloudflare.com https://cdn.tailwindcss.com https://unpkg.com https://www.googletagmanager.com https://connect.facebook.net https://www.clarity.ms https://cdn.jsdelivr.net; style-src 'self' 'unsafe-inline' https://cdnjs.cloudflare.com https://fonts.googleapis.com https://use.fontawesome.com https://maxcdn.bootstrapcdn.com; font-src 'self' https://fonts.gstatic.com https://cdnjs.cloudflare.com; img-src 'self' data: https: blob:; connect-src 'self' https://www.google-analytics.com https://www.googletagmanager.com https://www.facebook.com https://connect.facebook.net https://www.clarity.ms; frame-src 'self' https://www.googletagmanager.com; object-src 'none'; base-uri 'self'; frame-ancestors 'none';"
```

### 4. Security Headers Explanation
- **Content-Security-Policy**: Comprehensive CSP allowing necessary third-party scripts while blocking malicious content
- **X-Frame-Options**: Prevents clickjacking attacks by denying iframe embedding
- **X-Content-Type-Options**: Prevents MIME type sniffing attacks
- **X-XSS-Protection**: Enables XSS protection in older browsers
- **Referrer-Policy**: Controls referrer information sent with requests
- **Permissions-Policy**: Restricts access to browser features like camera, microphone, geolocation

**Allowed Third-Party Domains in CSP:**
- Google Analytics (`www.googletagmanager.com`)
- Facebook Pixel (`connect.facebook.net`)
- Microsoft Clarity (`www.clarity.ms`) - for analytics
- Font Awesome (`cdnjs.cloudflare.com`, `use.fontawesome.com`)
- Google Fonts (`fonts.googleapis.com`, `fonts.gstatic.com`)
- Tailwind CSS (`cdn.tailwindcss.com`)
- Chart.js (`cdn.jsdelivr.net`)
- Feather Icons (`unpkg.com`)

## 🧪 Testing Checklist

### Functionality Testing
- [ ] All pages load correctly
- [ ] Navigation links work properly
- [ ] Contact form functions (if applicable)
- [ ] Mobile menu dropdown works
- [ ] Social media links open correctly
- [ ] All images display properly

### SEO Testing
- [ ] Meta tags display correctly
- [ ] Structured data validates
- [ ] Sitemap is accessible
- [ ] Robots.txt is accessible
- [ ] Page titles are unique
- [ ] Meta descriptions are compelling

### Performance Testing
- [ ] Page load times under 3 seconds
- [ ] Mobile-friendly test passes
- [ ] Core Web Vitals are good
- [ ] Images are optimized
- [ ] CSS and JS are minified

### Analytics Testing
- [ ] Google Analytics tracking works
- [ ] Google Tag Manager loads
- [ ] Conversion tracking functions
- [ ] Real-time reports show data

## 🔍 Monitoring & Maintenance

### Regular Checks
- **Weekly**: Check analytics reports
- **Monthly**: Review search console data
- **Quarterly**: Update content and performance
- **Annually**: Review and update SEO strategy

### Performance Monitoring
- Google PageSpeed Insights
- GTmetrix
- WebPageTest
- Google Search Console

### Security Monitoring
- SSL certificate validity
- Security headers
- Malware scanning
- Backup procedures

## 📞 Support & Troubleshooting

### Common Issues
1. **404 Errors**: Check file paths and server configuration
2. **SSL Issues**: Verify certificate installation
3. **Analytics Not Working**: Check tracking code implementation
4. **Mobile Issues**: Test responsive design across devices

### Contact Information
- **Technical Support**: Your hosting provider
- **SEO Questions**: Google Search Console help
- **Analytics Issues**: Google Analytics support

---

**Deployment Date**: January 27, 2025
**Version**: 1.0
**Status**: Ready for Production
