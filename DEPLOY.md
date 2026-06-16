# KAVASI — Deployment & Custom Domain Guide

This guide walks you through pushing your project to GitHub, hosting it on Vercel, adding your Resend API email credentials, and linking your custom domain.

---

## Part 1: Push Your Code to GitHub

If you haven't pushed your code to GitHub yet, open your terminal in the root directory (`d:\deepkavasi`) and run:

1. **Initialize Git** (if not already done):
   ```bash
   git init
   ```
2. **Add all files to staging**:
   ```bash
   git add .
   ```
3. **Commit your changes**:
   ```bash
   git commit -m "feat: setup kavasi webapp with modular routes and resend integration"
   ```
4. **Link your GitHub Repository**:
   Create a new blank repository on GitHub (do not add a README or `.gitignore` on GitHub) and run:
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
   git branch -M main
   git push -u origin main
   ```

---

## Part 2: Deploy to Vercel

1. Log into your **[Vercel Dashboard](https://vercel.com/)** (link it with your GitHub account).
2. Click **Add New** ➔ **Project**.
3. Locate your `YOUR_REPO_NAME` repository from the list and click **Import**.
4. **Configure Project Settings (Crucial Step)**:
   * **Root Directory**: Since your Next.js application resides inside the `webapp` folder, click the **Edit** button next to *Root Directory* and choose **`webapp`**.
   * **Framework Preset**: Vercel will automatically detect **Next.js**.
5. **Add Environment Variables**:
   * Expand the **Environment Variables** section.
   * Add the key for your Resend API:
     * **Key:** `RESEND_API_KEY`
     * **Value:** *[Your Resend API Key starting with `re_...`]*
   * Click **Add**.
6. Click **Deploy**. Vercel will build your site and generate a production link (e.g., `kavasi.vercel.app`).

---

## Part 3: Link Your Custom Domain (e.g., `kavasi.com`)

To make your website live on your own custom domain name:

1. Go to your Vercel Project Dashboard.
2. Navigate to **Settings** ➔ **Domains** in the left menu.
3. In the input box, type your custom domain name (e.g., `kavasi.com`) and click **Add**.
   * *Vercel will recommend adding both the redirect (`kavasi.com` ➔ `www.kavasi.com`) or hosting both. Select the recommended option.*
4. **Update your DNS Settings** at your domain registrar (GoDaddy, Namecheap, Google Domains, Hostinger, etc.):
   * **For your Apex Domain (`kavasi.com`)**:
     * Add an **`A` Record**:
       * **Name/Host:** `@` (or leave blank)
       * **Value/Points to:** `76.76.21.21`
       * **TTL:** Automatic or 3600
   * **For your Subdomain (`www.kavasi.com`)**:
     * Add a **`CNAME` Record**:
       * **Name/Host:** `www`
       * **Value/Points to:** `cname.vercel-dns.com`
       * **TTL:** Automatic or 3600
5. **Verify**:
   * Once you save the DNS records, return to Vercel. Vercel will poll the domain and show a green **"Valid Configuration"** checkmark.
   * Vercel will automatically generate a free Let's Encrypt SSL certificate for your domain. Your domain is now live!
