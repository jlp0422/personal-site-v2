# Deployment Guide

## Vercel Deployment

This site is optimized for deployment on Vercel.

### Initial Setup

1. **Connect Repository to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "Add New Project"
   - Import your GitHub repository
   - Vercel will auto-detect Next.js

2. **Configure Project Settings**
   - Framework Preset: **Next.js**
   - Build Command: `npm run build`
   - Output Directory: `.next`
   - Install Command: `npm install`
   - Node Version: `20.x` or `22.x`

3. **Environment Variables**
   - No environment variables required for this project
   - All configuration is in the code

4. **Deploy**
   - Click "Deploy"
   - Vercel will build and deploy your site
   - You'll get a URL like `your-site.vercel.app`

### Custom Domain Setup

1. **Add Domain**
   - Go to Project Settings → Domains
   - Add `jeremyphilipson.com`
   - Add `www.jeremyphilipson.com`

2. **Configure DNS**
   - Point your domain's A record to Vercel's IP: `76.76.21.21`
   - Or use CNAME pointing to `cname.vercel-dns.com`
   - Vercel will automatically provision SSL certificate

3. **Verify**
   - Wait for DNS propagation (up to 48 hours)
   - Vercel will show "Valid Configuration" when ready

### Automatic Deployments

- **Production**: Pushes to `master` branch automatically deploy to production
- **Preview**: Pull requests get preview URLs for testing
- **Branch**: Pushes to other branches get unique preview URLs

### Post-Deployment Checklist

- [ ] Verify all pages load correctly
- [ ] Test navigation between pages
- [ ] Check flip card animations work
- [ ] Verify responsive design on mobile
- [ ] Test accessibility (keyboard navigation)
- [ ] Run Lighthouse audit (target: 95+)
- [ ] Check sitemap.xml is accessible
- [ ] Verify robots.txt is correct
- [ ] Test social media sharing (Open Graph)
- [ ] Check custom domain resolves correctly

### Performance Monitoring

Vercel automatically provides:
- **Analytics**: Page views, visitor data
- **Web Vitals**: LCP, FID, CLS, INP, TTFB
- **Insights**: Performance suggestions

Access via Project → Analytics

### Rollback

If issues occur:
1. Go to Deployments tab
2. Find previous working deployment
3. Click "..." → "Promote to Production"

## Alternative: Self-Hosted

### Docker

```dockerfile
FROM node:20-alpine AS base

WORKDIR /app
COPY package*.json ./
RUN npm ci

COPY . .
RUN npm run build

EXPOSE 3000
CMD ["npm", "start"]
```

### Build and Run

```bash
docker build -t personal-site .
docker run -p 3000:3000 personal-site
```

### Environment Variables

None required - all configuration is in the code.

## Monitoring

### Recommended Tools

- **Vercel Analytics**: Built-in performance monitoring
- **Google Search Console**: SEO monitoring
- **Sentry** (optional): Error tracking

### Health Checks

- Site: `https://www.jeremyphilipson.com/about`
- Sitemap: `https://www.jeremyphilipson.com/sitemap.xml`
- Robots: `https://www.jeremyphilipson.com/robots.txt`
- Manifest: `https://www.jeremyphilipson.com/manifest.webmanifest`

## Troubleshooting

### Build Fails

- Check Node version (must be 20.x or 22.x)
- Run `npm run type-check` locally
- Run `npm run lint` locally
- Clear Vercel cache and redeploy

### Pages Not Loading

- Check browser console for errors
- Verify all imports are correct
- Check Network tab for failed requests
- Ensure all environment variables are set (if any added)

### Slow Performance

- Run Lighthouse audit
- Check bundle size: `npm run build`
- Verify images are optimized
- Check for unused dependencies

### DNS Issues

- Verify DNS records with `dig jeremyphilipson.com`
- Wait up to 48 hours for propagation
- Check Vercel domain settings
- Ensure SSL certificate is provisioned

## Support

For Vercel-specific issues, see [Vercel Documentation](https://vercel.com/docs) or contact Vercel support.
