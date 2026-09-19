# ryansmithsays.com

Source for [ryansmithsays.com](https://ryansmithsays.com), built with [Eleventy](https://www.11ty.dev/).

## How it's organized

| Path | What it is |
|---|---|
| `src/` | Pages and content (`.njk` templates, later `.md` posts) |
| `src/_includes/layouts/base.njk` | Shared page shell: `<head>`, header and nav |
| `src/_data/site.json` | Site name, URL, contact link and the nav menu |
| `css/styles.css` | All styles |
| `ryan-portrait.jpg` | Hero portrait (copied to the site as-is) |
| `eleventy.config.js` | Build settings |
| `.github/workflows/deploy.yml` | Builds and publishes the site on every push to `main` |

## Working on it locally

```
npm install
npm start        # live preview at http://localhost:8080
npm run build    # writes the finished site to _site/
```

## Publishing

Pushing to `main` builds and deploys automatically.
One-time setup: in the repo, **Settings → Pages → Source: GitHub Actions**.
