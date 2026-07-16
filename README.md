# Professor Lily Morningstar — Professional Portfolio

[![Deploy to GitHub Pages](https://github.com/LilMnstr-XAK3P/portfolio/actions/workflows/deploy.yml/badge.svg)](https://github.com/LilMnstr-XAK3P/portfolio/actions/workflows/deploy.yml)
[![Build](https://img.shields.io/badge/build-npm%20run%20build-blue)](#production-build)
[![License: MIT](https://img.shields.io/badge/license-MIT-green.svg)](LICENSE)
[![Accessibility](https://img.shields.io/badge/accessibility-WCAG%202.2%20AA%20goal-purple)](#accessibility)

A polished, responsive professional academic portfolio for **Professor Lily Morningstar** — Lead Cybersecurity Faculty at the College of Southern Nevada — covering cybersecurity education, Linux, digital forensics, AI leadership, curriculum development, research, student success, and media outreach.

All public content lives in **version-controlled TypeScript data files** (`src/data/`). Updating the site means editing data, not rewriting components.

## Technology stack

- [React 18](https://react.dev) + [TypeScript](https://www.typescriptlang.org) (strict mode)
- [Vite](https://vitejs.dev) build tooling
- [Tailwind CSS](https://tailwindcss.com) styling
- [React Router](https://reactrouter.com) client-side routing
- [Lucide](https://lucide.dev) icons
- [Vitest](https://vitest.dev) + [React Testing Library](https://testing-library.com) tests
- GitHub Actions → GitHub Pages deployment (fully static — no server, no database, no auth)

## Local installation

Requires Node.js 20+ (22 recommended).

```bash
git clone https://github.com/LilMnstr-XAK3P/portfolio.git
cd portfolio
npm install
```

## Development commands

| Command              | Purpose                              |
| -------------------- | ------------------------------------ |
| `npm run dev`        | Start the dev server with hot reload |
| `npm run lint`       | ESLint over the whole project        |
| `npm run test`       | Run the Vitest suite once            |
| `npm run test:watch` | Run tests in watch mode              |
| `npm run format`     | Format everything with Prettier      |
| `npm run build`      | Type-check and build for production  |
| `npm run preview`    | Serve the production build locally   |

## Production build

```bash
npm install
npm run build
```

The static site is emitted to `dist/`.

## GitHub Pages deployment

Pushing to `main` triggers `.github/workflows/deploy.yml`, which lints, tests, builds, and deploys `dist/` to GitHub Pages.

One-time setup in the GitHub repository: **Settings → Pages → Build and deployment → Source: GitHub Actions.**

### Repository base-path configuration

Vite needs to know the URL path the site is served from:

| Deployment                                      | Example URL                                   | Base path     |
| ----------------------------------------------- | --------------------------------------------- | ------------- |
| **Project site** (this repo)                    | `https://lilmnstr-xak3p.github.io/portfolio/` | `/portfolio/` |
| **User site** (repo named `USERNAME.github.io`) | `https://lilmnstr-xak3p.github.io/`           | `/`           |

The base path defaults to `/portfolio/` in [vite.config.ts](vite.config.ts) and can be overridden with an environment variable:

```bash
VITE_BASE_PATH=/ npm run build
```

The deploy workflow sets `VITE_BASE_PATH` explicitly — edit `.github/workflows/deploy.yml` if the repo is renamed. If you switch to a **user site**, also set `pathSegmentsToKeep = 0` in `public/404.html` and update `siteUrl` in `src/data/siteConfig.ts`, plus `public/robots.txt` and `public/sitemap.xml`.

## Updating content

Everything editable lives in `src/data/`. See [CONTENT_GUIDE.md](CONTENT_GUIDE.md) for copy-and-paste examples of every record type.

1. **Profile information** — `src/data/profile.ts`: name, titles, biography, philosophies, emails, affiliations.
2. **Add a professional-development activity** — append a record to `src/data/professionalDevelopment.ts`. Give it a unique `id`, an ISO `startDate`, and set `public: true`. Leave `hours` undefined until verified — unverified activities are excluded from hour totals automatically.
3. **Add a course** — `src/data/courses.ts` (courses taught) or `src/data/curriculum.ts` (new courses / redesigns).
4. **Add a project** — `src/data/projects.ts`. Tag it `'ai'` to show it on the AI Leadership page.
5. **Mark an item public or private** — every record has `public: boolean`. Only `public: true` records ever render. Use `internalNotes` for owner-only context; it is never displayed.
6. **Add evidence files** — put files under `public/evidence/`, then reference them from a record's `evidence` array: `{ label: 'Certificate', href: 'evidence/my-cert.pdf' }`. Set `private: true` on an evidence item (or `evidencePrivate: true` on the record) to keep it off the site.
7. **Replace the CV** — drop `Lily-Morningstar-CV.pdf` and `Lily-Morningstar-CV.docx` into `public/documents/`. The download buttons enable themselves automatically; while the files are absent the site shows "Updated CV will be available soon."
8. **Update social links** — `src/data/profile.ts` → `socialLinks`. Leave `url: ''` for accounts you have not set up; blank entries are hidden (never guess URLs).
9. **Add a profile image** — save the headshot as `public/images/headshot.jpg`, then set `headshot: 'images/headshot.jpg'` in `src/data/profile.ts`.

## Accessibility

The site targets **WCAG 2.2 AA**:

- Semantic landmarks, skip-to-content link, and labeled navigation
- Full keyboard operability with visible focus states
- Light/dark/system themes with persistent preference and strong contrast
- `prefers-reduced-motion` support
- Print-friendly CV styling
- Responsive layout down to small phones

When adding content, keep link text descriptive and always provide `alt` text for images.

## Data safety

> **Never commit confidential student information, private personnel records, protected institutional documents, unpublished student grades, home addresses, private phone numbers, passwords, API keys, or restricted grant materials to this repository.**

The repository is public. `public: false` keeps a record off the **website**, but the data file itself is still visible in the repo — truly sensitive material must not be committed at all. Do not include student names unless explicitly approved.

## Troubleshooting GitHub Pages routing

- **Direct links / refreshes return 404**: GitHub Pages has no server-side rewrites. This site uses the [spa-github-pages](https://github.com/rafgraph/spa-github-pages) pattern — `public/404.html` redirects unknown paths back to `index.html`, which restores the URL. Make sure `404.html` is deployed and its `pathSegmentsToKeep` matches your site type (1 for project site, 0 for user site).
- **Blank page after deploy**: the base path is wrong. Confirm `VITE_BASE_PATH` matches the repository name (including both slashes: `/portfolio/`).
- **Assets 404 after renaming the repo**: update `VITE_BASE_PATH` in the workflow, `siteUrl` in `src/data/siteConfig.ts`, `public/robots.txt`, and `public/sitemap.xml`.
- **Old content after deploy**: hard-refresh; Pages CDN caching can lag a minute or two.

## Repository naming: project site vs. user site

- `professional-portfolio` (or `portfolio`) → **project site**, served at `https://USERNAME.github.io/REPO/`. Needs the repo-name base path.
- `USERNAME.github.io` → **user site**, served at `https://USERNAME.github.io/`. Use base path `/`. Each account can have only one user site.

## Future enhancement ideas

- Generate the PDF/DOCX CV automatically from the data files at build time
- Evidence gallery with lightbox for certificates and artifacts
- RSS/JSON feed of recent activity
- Automated accessibility checks (axe) in CI
- Structured-data (JSON-LD) expansion for courses and events
- Optional analytics via a privacy-friendly, cookie-free counter

## License

Source code is licensed under the [MIT License](LICENSE). Portfolio content (biography, records, images) is © Lily Morningstar; please ask before reusing it.
