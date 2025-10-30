# Deployment Guide for Henry Club Digital

## Step 1: Create GitHub Repository

1. **Go to GitHub.com** and sign in to your account
2. **Click "New repository"** or visit https://github.com/new
3. **Repository settings:**
   - Owner: `henryclubae`
   - Repository name: `Digital`
   - Description: "Henry Club Digital - UAE Digital Marketing Agency Website"
   - Visibility: Public (or Private if preferred)
   - **DO NOT** check "Add a README file" (we already have one)
   - **DO NOT** check "Add .gitignore" (we already have one)
   - **DO NOT** check "Choose a license"
4. **Click "Create repository"**

## Step 2: Push Code to GitHub

After creating the repository, run these commands in your terminal:

```bash
# Navigate to project directory
cd D:\Websites\digital.henryclub.ae\henry-club-digital

# Add the new remote (replace with your actual repository URL)
git remote remove origin
git remote add origin https://github.com/henryclubae/Digital.git

# Push the code
git push -u origin main
```

## Step 3: Deploy to Vercel (Recommended)

### Option A: Deploy via Vercel Dashboard
1. Go to [vercel.com](https://vercel.com) and sign up/sign in
2. Click "Import Project"
3. Connect your GitHub account
4. Select the `henryclubae/Digital` repository
5. Configure project:
   - Framework Preset: Next.js
   - Root Directory: ./
   - Build Command: `npm run build`
   - Output Directory: Leave empty (default)
6. Click "Deploy"

### Option B: Deploy via Vercel CLI
```bash
# Install Vercel CLI
npm install -g vercel

# Login to Vercel
vercel login

# Deploy from project directory
cd D:\Websites\digital.henryclub.ae\henry-club-digital
vercel

# Follow the prompts:
# - Link to existing project? No
# - What's your project's name? henry-club-digital
# - In which directory is your code located? ./
# - Want to override the settings? No
```

## Step 4: Configure Custom Domain (Optional)

1. In Vercel dashboard, go to your project
2. Click "Domains" tab
3. Add your custom domain: `digital.henryclub.ae`
4. Configure DNS records as shown by Vercel

## Step 5: Environment Variables (If Needed)

If you have any API keys or sensitive data:

1. In Vercel dashboard, go to "Settings" → "Environment Variables"
2. Add any required variables:
   - `NEXT_PUBLIC_SITE_URL=https://digital.henryclub.ae`
   - Any other API keys you might need

## Alternative Deployment Options

### Deploy to Netlify
1. Go to [netlify.com](https://netlify.com)
2. Connect GitHub repository
3. Build settings:
   - Build command: `npm run build`
   - Publish directory: `out` (if using static export)

### Deploy to GitHub Pages
1. Install `gh-pages` package:
   ```bash
   npm install --save-dev gh-pages
   ```

2. Add to package.json:
   ```json
   {
     "scripts": {
       "deploy": "next build && next export && gh-pages -d out"
     }
   }
   ```

3. Configure `next.config.js` for static export:
   ```javascript
   /** @type {import('next').NextConfig} */
   const nextConfig = {
     output: 'export',
     trailingSlash: true,
     images: {
       unoptimized: true
     }
   }

   module.exports = nextConfig
   ```

4. Deploy:
   ```bash
   npm run deploy
   ```

## Build Verification

Before deploying, verify your build works locally:

```bash
# Build the project
npm run build

# Test the production build
npm start

# Check for any errors
npm run lint
```

## Post-Deployment Checklist

- [ ] Website loads correctly on desktop and mobile
- [ ] All service pages are accessible
- [ ] Forms are working (contact, quote)
- [ ] SEO meta tags are correct
- [ ] Google Analytics/tracking is set up (if needed)
- [ ] Performance scores are good (90+ on PageSpeed Insights)
- [ ] All images are loading properly
- [ ] Custom domain is configured (if applicable)

## Troubleshooting

### Common Issues:

1. **Build fails**: Check for TypeScript errors with `npx tsc --noEmit`
2. **Images not loading**: Ensure image paths are correct and images exist
3. **404 errors**: Check file names and routing structure
4. **Environment variables**: Ensure they're prefixed with `NEXT_PUBLIC_` for client-side use

### Getting Help:

- Check Vercel/Netlify build logs for specific errors
- Verify all dependencies are installed: `npm install`
- Test locally first: `npm run build && npm start`

---

🚀 **Ready to deploy!** Your Henry Club Digital website is now ready for production deployment.