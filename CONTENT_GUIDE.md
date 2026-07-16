# Content Guide

Every piece of public content on the site is a typed record in `src/data/`. This guide gives copy-and-paste templates for each data type. After editing, run `npm run dev` to preview and `npm run build` before publishing.

**Golden rules**

- Give every record a **unique, stable `id`** (kebab-case). Never reuse or rename ids.
- Only records with **`public: true`** appear on the website.
- Leave numeric fields like `hours` **undefined until verified** — unverified activities are excluded from totals automatically.
- Use `internalNotes` for owner-only context; it is never rendered.
- Never commit confidential or personally identifying information (see the data-safety warning in the README).

---

## Professional-development activity

File: `src/data/professionalDevelopment.ts`

```ts
{
  id: 'sans-webinar-2026',
  title: 'SANS Webinar: Detecting Lateral Movement',
  provider: 'SANS Institute',
  startDate: '2026-08-14',            // ISO date, used for sorting/filtering
  displayDate: 'August 14, 2026',     // what visitors see
  type: 'Webinar',                    // Conference | Course | Workshop | Webinar | Meeting | Focus Group | Interview…
  category: 'Cybersecurity Education',// Artificial Intelligence | Curriculum Development | Media and Outreach…
  format: 'Webinar',
  hours: 1,                           // omit entirely until verified
  ceus: 0.1,                          // optional
  certificate: true,                  // optional
  summary: 'One-sentence description of what the activity covered.',
  skills: ['Threat hunting', 'Log analysis'],
  application: 'How this applies to teaching or program work.',   // optional
  impact: 'What changed because of it.',                          // optional
  evidence: [{ label: 'Certificate', href: 'evidence/sans-2026.pdf' }], // optional
  cvEntry: 'Custom one-line CV wording.',                         // optional
  performanceReviewNarrative: 'Narrative for annual review.',     // optional
  tags: ['cybersecurity', 'webinar'],
  featured: false,                    // true = eligible for home-page highlights
  public: true,
}
```

## Course taught

File: `src/data/courses.ts`

```ts
{
  id: 'csec999',
  code: 'CSEC 999',
  title: 'Advanced Example Course',
  group: 'Cybersecurity', // must match a group in courseGroupOrder
  terms: 'Fall 2026 to Present',
  description: 'Optional one-line description.',
  tags: ['cybersecurity'],
  public: true,
}
```

## New course created / course redesign

File: `src/data/curriculum.ts` — add to `newCourses` or `courseRedesigns`:

```ts
{
  id: 'csec999-created',
  title: 'CSEC 999: Advanced Example Course',
  kind: 'created', // or 'redesigned'
  description: 'Optional context shown under the title.',
  tags: ['cybersecurity'],
  public: true,
}
```

## Project

File: `src/data/projects.ts`

```ts
{
  id: 'my-new-tool',
  title: 'My New Tool',
  status: 'active', // 'active' | 'in-development' | 'completed' | 'planned'
  description: 'What it is and who it helps.',
  technologies: ['TypeScript', 'React'],
  outcomes: ['Deployed in two course sections'],   // optional
  images: ['images/projects/my-new-tool.png'],     // optional, files under public/images/projects/
  repoUrl: 'https://github.com/LilMnstr-XAK3P/my-new-tool', // omit for private repos
  demoUrl: 'https://example.com',                  // optional
  visibility: 'public',                            // 'private' shows a "private repository" note
  tags: ['ai'],                                    // include 'ai' to show on the AI Leadership page
  featured: true,
  public: true,
}
```

## Contribution

File: `src/data/contributions.ts`

```ts
{
  id: 'example-panel-2027',
  title: 'Example National Curriculum Panel',
  organization: 'Organization Full Name',
  startDate: '2027-02-01',
  displayDate: 'February 1, 2027',
  category: 'National Curriculum Contribution',
  summary: 'One-sentence overview.',
  details: ['Bullet one', 'Bullet two'],
  national: true, // counts toward the national-initiatives statistic
  tags: ['curriculum'],
  featured: false,
  public: true,
}
```

## Publication / presentation / poster

File: `src/data/research.ts` → `researchWorks`

```ts
{
  id: 'morningstar-2027-ctf',
  kind: 'publication', // 'presentation' | 'conference-session' | 'article' | 'poster'
  title: 'Title of the Work',
  venue: 'Journal or Conference Name',
  date: '2027-06-01',
  status: 'Published', // or 'In review', 'Accepted'…
  url: 'https://doi.org/…', // optional
  public: true,
}
```

## Media / outreach item

File: `src/data/media.ts`

```ts
{
  id: 'podcast-example-2026',
  title: 'Example Podcast Appearance',
  outlet: 'Podcast Name',
  host: 'Host Name',            // optional
  kind: 'Podcast',              // pick from outreachKinds for correct grouping
  startDate: '2026-09-01',
  displayDate: 'September 1, 2026',
  summary: 'What was discussed.',
  topics: ['Topic one', 'Topic two'], // optional
  url: 'https://…',                    // optional
  tags: ['podcast', 'outreach'],
  featured: false,
  public: true,
}
```

## Student result / engagement

File: `src/data/studentSuccess.ts`

```ts
// Competition result — must be verified before it can be public
{
  id: 'ncl-2027-team-12',
  title: 'National Cyber League — Team Placement',
  detail: '12th nationally out of approximately 4,200 teams',
  season: 'Spring 2027',
  verified: true,
  public: true,
}

// Engagement card
{
  id: 'aws-jam',
  title: 'AWS Jam',
  description: 'What students did and learned.',
  tags: ['cloud'],
  public: true, // flip from false once details are filled in
}
```

## Service role

File: `src/data/service.ts`

```ts
{
  id: 'example-committee',
  role: 'Example Committee Member',
  organization: 'College of Southern Nevada',
  period: '2026 to Present',
  startDate: '2026-08-01',
  description: 'Optional context.',
  tags: ['service'],
  public: true,
}
```

## Education entry

File: `src/data/education.ts`

```ts
{
  id: 'example-cert',
  institution: 'Institution Name',
  degree: 'Credential Name',
  year: '2027',
  focusAreas: ['Area one'],   // optional
  capstone: 'Capstone title', // optional
  public: true,
}
```

## Social links, biography, headshot

File: `src/data/profile.ts` — edit in place. Leave social `url: ''` until the account exists (blank entries are hidden; never guess URLs). For the headshot, add `public/images/headshot.jpg` and set `headshot: 'images/headshot.jpg'`.

## CV downloads

Drop `Lily-Morningstar-CV.pdf` and `Lily-Morningstar-CV.docx` into `public/documents/`. The buttons detect the files automatically.
