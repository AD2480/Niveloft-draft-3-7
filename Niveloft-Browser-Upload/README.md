# Niveloft — browser upload edition

## GitHub: one upload, five files
1. Extract Niveloft-Browser-Upload.zip on your computer.
2. Open the extracted folder and select all FIVE files inside.
3. In your GitHub repository, click Add file → Upload files.
4. Upload those five files at the repository root and commit.

Upload source.tar.gz as a file. Do not unpack it. Do not upload the outer ZIP or its enclosing folder.
The repository root should contain README.md, package.json, vercel.json, build.mjs, and source.tar.gz.

## Vercel
Import this GitHub repository as a new Vercel project.
- Root directory: ./ (repository root)
- Framework preset: Other
- Build/install/output settings: leave automatic; vercel.json supplies them.
- No environment variables are required for demo mode.
Click Deploy, then open the generated URL.
If reusing a previous project, change its old frontend root directory to ./ first.

The supplied configuration uses these commands:
- Install: node build.mjs install
- Build: npm run build
- Output: app-source/frontend/dist

Vercel unpacks source.tar.gz, installs the locked frontend dependencies, and builds the React/Vite application. The existing route rewrites and response headers are preserved.

## Scope and editing
This is a shareable demo: data is stored in each visitor's browser. The Java backend is included in the source archive but is not deployed. Shared accounts/data require a separately hosted backend.

All 472 files from the GitHub-ready project are preserved in source.tar.gz. This compact format solves browser upload limits; source files are not individually browsable or editable on GitHub until extracted. Keep the original full-source package for development. To update this edition, replace source.tar.gz with an updated archive that keeps its app-source/ directory structure.

Vercel configuration reference: https://vercel.com/docs/project-configuration/vercel-json
