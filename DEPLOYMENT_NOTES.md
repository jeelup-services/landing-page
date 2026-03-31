# Deployment Notes

## GitHub Pages (production — main branch)
next.config.ts needs these settings restored before merging back:
- output: "export"
- basePath: "/website"

These were removed on the feat/landing-page-v2 branch to allow normal
local development on localhost:3000.

## How to deploy this branch when ready
Option A — add back to next.config.ts before merging to main:
  const nextConfig = {
    output: "export",
    basePath: "/website",
    images: { unoptimized: true },
  }

Option B — handle via CI/CD environment variable so dev and prod
configs stay separate automatically.

## Current branch
feat/landing-page-v2
localhost:3000 → works normally (no basePath)
