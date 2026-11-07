# Publish Nihil on GitHub Pages

This project is static: **no build step, npm, or server is required**. All assets use relative paths so the site works from a GitHub Pages project subdirectory.

## 1. Create the repository

Go to https://github.com/new and create a repository with:

- **Owner:** `ttraykov`
- **Repository name:** `NihilGuild`
- **Visibility:** **Public** (required for GitHub Pages with GitHub Free)
- **Initialize:** leave **Add a README**, `.gitignore`, and license **unchecked**; these files are already in the project.

**Do not enter an entire URL in the repository name field.**

## 2. Push from your Mac

Open Terminal and run these commands from the project folder:

```bash
cd ~/PersonalCode/NihilGuild

git init -b main
git add .
git commit -m "Initial Nihil guild website"
git remote add origin https://github.com/ttraykov/NihilGuild.git
git push -u origin main
```

If Git says `remote origin already exists`, use:

```bash
git remote set-url origin https://github.com/ttraykov/NihilGuild.git
git push -u origin main
```

Check your configuration with `git remote -v` and your sync with `git status`.

## 3. Turn on GitHub Pages

Open https://github.com/ttraykov/NihilGuild/settings/pages and select:

- **Source:** Deploy from a branch
- **Branch:** `main`
- **Folder:** `/(root)`

Click **Save**. Look for the workflow at https://github.com/ttraykov/NihilGuild/actions if the site is not immediately available.

The expected public URL is:

**https://ttraykov.github.io/NihilGuild/**

It does not exist until you create the repository, push the files and GitHub finishes deployment. No custom domain is needed.

## 4. Update the website later

After editing the site locally:

```bash
cd ~/PersonalCode/NihilGuild
git add .
git commit -m "Update Nihil guild website"
git push origin main
```

Your GitHub Pages site redeploys automatically from `main`.

## Important

- The login is a **disabled visual preview**, not an account system. There are no secrets or member records.
- The news and events are clearly marked examples and should be replaced with guild updates when available.
- Everything in a public repository can be read and downloaded by anyone. Never commit passwords, tokens or private member details.
- This is an independent unofficial fan site and is not affiliated with Ankama.
