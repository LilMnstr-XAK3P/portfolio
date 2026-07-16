# Contributing

This repository powers a personal professional portfolio. Content changes are made by the site owner; code improvements are welcome by discussion first.

## Workflow

1. Create a branch from `main`.
2. Make your change. Content edits belong in `src/data/` — see [CONTENT_GUIDE.md](CONTENT_GUIDE.md).
3. Verify locally:

   ```bash
   npm run lint
   npm run test
   npm run build
   ```

4. Open a pull request with a clear description. Meaningful, scoped commits are appreciated.

## Ground rules

- **No fabricated content.** Every fact on the site must be verified by the owner. Mark uncertain values with a `TODO` comment in the data file instead of guessing.
- **Respect the privacy model.** Every record has `public: boolean`; only `public: true` renders. Never commit confidential student information, private personnel records, protected institutional documents, unpublished student grades, home addresses, private phone numbers, passwords, API keys, or restricted grant materials — a public repo means `public: false` hides content from the site, not from the repository.
- **Keep it static.** No servers, databases, authentication, paid APIs, or external CMS dependencies.
- **Preserve accessibility.** Keyboard operability, visible focus, contrast, and reduced-motion support are requirements, not nice-to-haves.
- **Avoid new dependencies** unless they clearly pay for themselves.

## Code style

- TypeScript strict mode; typed data records (`src/data/types.ts`).
- Prettier formats everything (`npm run format`).
- Reusable UI belongs in `src/components/`; pages compose components and data.
