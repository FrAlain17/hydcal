---
description: Deploy the Hydroponic App to Coolify
---

# Deploy to Coolify

Follow these steps to deploy your Next.js application to a Coolify instance.

## Prerequisites
- A [Coolify](https://coolify.io/) instance set up and running.
- A GitHub/GitLab repository with your code pushed.

## Step 1: Push Code to Git
Ensure your latest code is committed and pushed to your repository.
```bash
git add .
git commit -m "Ready for deployment"
git push
```

## Step 2: Create Resource in Coolify
1. Go to your Coolify Dashboard.
2. Click **+ New** -> **Project** (or select an existing one).
3. Select **Production** environment.
4. Click **+ New** -> **Application** -> **Public Repository** (or Private if applicable).
5. Enter your repository URL (e.g., `https://github.com/yourusername/hydroponic-app`).
6. Click **Check Repository**.

## Step 3: Configuration
Coolify will auto-detect Next.js. Ensure the following settings:

- **Build Pack**: `Nixpacks` (Recommended)
- **Port**: `3000`
- **Install Command**: `npm install`
- **Build Command**: `npm run build`
- **Start Command**: `npm start`

> **Note**: We have enabled `output: 'standalone'` in `next.config.ts` which optimizes the build for containers.

## Step 4: Environment Variables
If you have any secrets (not currently used in this app, but for future reference), add them in the **Environment Variables** tab.

## Step 5: Deploy
1. Click **Deploy**.
2. Watch the deployment logs.
3. Once finished, click the **Links** to view your live app.

## Troubleshooting
- If the build fails on memory, try increasing the resource limits in Coolify.
- If the app starts but is not accessible, verify the **Port** is set to `3000` in Coolify settings.
