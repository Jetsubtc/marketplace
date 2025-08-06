# 🚀 Deployment Guide - Solana NFT Marketplace

## GitHub Pages Deployment

### Step 1: Create GitHub Repository

1. Go to [GitHub](https://github.com) and create a new repository
2. Name it: `solana-nft-marketplace` (or your preferred name)
3. Make it **Public** (required for GitHub Pages)
4. **Don't** initialize with README, .gitignore, or license

### Step 2: Update Package.json

Replace the homepage URL in `package.json`:

```json
"homepage": "https://[YOUR_USERNAME].github.io/[REPOSITORY_NAME]"
```

Example:
```json
"homepage": "https://johndoe.github.io/solana-nft-marketplace"
```

### Step 3: Initialize Git and Push

```bash
# Initialize git repository
git init

# Add all files
git add .

# Commit changes
git commit -m "Initial commit: Solana NFT Marketplace"

# Add remote origin
git remote add origin https://github.com/[YOUR_USERNAME]/[REPOSITORY_NAME].git

# Push to main branch
git branch -M main
git push -u origin main
```

### Step 4: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** tab
3. Scroll down to **Pages** section
4. Under **Source**, select **GitHub Actions**
5. The workflow will automatically deploy when you push to main

### Step 5: Manual Deployment (Optional)

If you want to deploy manually:

```bash
# Install gh-pages
npm install --save-dev gh-pages

# Deploy
npm run deploy
```

## Environment Variables

Create a `.env` file in the root directory:

```env
REACT_APP_SOLANA_NETWORK=devnet
REACT_APP_RPC_ENDPOINT=https://api.devnet.solana.com
```

## Custom Domain (Optional)

1. Go to repository **Settings** → **Pages**
2. Under **Custom domain**, enter your domain
3. Add a `CNAME` file in the `public` folder with your domain

## Troubleshooting

### Build Errors
- Ensure all dependencies are installed: `npm install`
- Check that CRACO is properly configured
- Verify TypeScript compilation: `npm run build`

### GitHub Pages Not Loading
- Check the **Actions** tab for deployment status
- Ensure repository is **Public**
- Verify homepage URL in `package.json`

### Wallet Connection Issues
- Make sure you're using HTTPS (GitHub Pages provides this)
- Check browser console for errors
- Ensure wallet extensions are installed

## Features After Deployment

✅ **Homepage**: Hero section with wallet connection  
✅ **Explore**: NFT browsing with search and filters  
✅ **Mint**: NFT creation interface  
✅ **Profile**: User profile and collection management  
✅ **Responsive Design**: Works on all devices  
✅ **Solana Integration**: Wallet connection and blockchain features  

## Support

If you encounter issues:
1. Check the **Actions** tab for build logs
2. Verify all files are committed to GitHub
3. Ensure the repository is public
4. Check browser console for JavaScript errors

---

**Your Solana NFT Marketplace will be live at:**  
`https://[YOUR_USERNAME].github.io/[REPOSITORY_NAME]` 