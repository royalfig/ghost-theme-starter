# Ghost Starter Theme

- To get started, click `Use this template` and clone the repo
- CD into the directory

```bash
npm install
```

- Make a symlink from the theme directory to your local install of Ghost's themes folder 

``` bash
# /content/themes
ln -s ~/your-theme-folder .
```
- Restart ghost (`ghost restart`)

## Dev Script

```bash
# Start the live reload server and compile your JS/CSS assets, and watch for changes
npm run dev
```
## Production Scripts
```bash
# Fix any CSS issues, compile your JS/CSS assets for production, and create a ZIP file
npm run zip

# Scan your theme for potential incompatibilties with gscan
npm run check
```
