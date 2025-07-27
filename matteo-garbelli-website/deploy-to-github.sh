#!/bin/bash

# Deploy script for GitHub Pages
echo "🚀 Deploying Next.js website to GitHub Pages..."

# Build the site
echo "📦 Building the website..."
npm run build

# Check if build was successful
if [ $? -ne 0 ]; then
    echo "❌ Build failed! Please fix the errors and try again."
    exit 1
fi

echo "✅ Build successful!"

# Copy built files to parent directory (main repo)
echo "📁 Copying files to main repository..."

# Go to the parent directory (main repo)
cd ..

# Backup important files that should be kept
echo "💾 Backing up important files..."
mkdir -p .backup
cp -r _publications .backup/ 2>/dev/null || true
cp -r _teaching .backup/ 2>/dev/null || true
cp -r files .backup/ 2>/dev/null || true
cp -r images .backup/ 2>/dev/null || true
cp README.md .backup/ 2>/dev/null || true
cp CNAME .backup/ 2>/dev/null || true

# Remove old Jekyll files (but keep .git)
echo "🧹 Cleaning old files..."
find . -maxdepth 1 -not -name '.git' -not -name '.backup' -not -name 'matteo-garbelli-website' -delete

# Copy new Next.js files
echo "📋 Copying new website files..."
cp -r matteo-garbelli-website/out/* .
cp -r matteo-garbelli-website/.github .
cp matteo-garbelli-website/package.json .

# Restore backed up files if they exist
echo "🔄 Restoring backed up files..."
if [ -d ".backup/files" ]; then
    cp -r .backup/files .
fi
if [ -d ".backup/images" ]; then
    cp -r .backup/images .
fi

# Clean up backup
rm -rf .backup

echo "✅ Files copied successfully!"
echo ""
echo "📋 Next steps:"
echo "1. Review the changes with: git status"
echo "2. Add files with: git add ."
echo "3. Commit with: git commit -m 'Deploy new Next.js website'"
echo "4. Push with: git push origin main"
echo ""
echo "🌐 Your website will be live at: https://matteogarbelli.github.io"