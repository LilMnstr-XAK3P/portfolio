/**
 * Site-wide configuration. Edit this file to change the deployed URL,
 * navigation, or global metadata.
 */
export const siteConfig = {
  /** Canonical production URL. Also update public/sitemap.xml and
   *  public/robots.txt if this changes. */
  siteUrl: 'https://lilmnstr-xak3p.github.io/portfolio',
  repoUrl: 'https://github.com/LilMnstr-XAK3P/portfolio',
  siteName: 'Professor Lily Morningstar',
  defaultDescription:
    'Professional academic portfolio of Professor Lily Morningstar — Lead Cybersecurity Faculty at the College of Southern Nevada, specializing in cybersecurity education, Linux, digital forensics, AI integration, and curriculum innovation.',
  nav: [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Curriculum & Teaching', path: '/teaching' },
    { label: 'AI Leadership', path: '/ai-leadership' },
    { label: 'Research', path: '/research' },
    { label: 'Contributions', path: '/contributions' },
    { label: 'Professional Development', path: '/professional-development' },
    { label: 'Student Success', path: '/student-success' },
    { label: 'Media & Outreach', path: '/media' },
    { label: 'CV', path: '/cv' },
    { label: 'Contact', path: '/contact' },
  ],
  cvFiles: {
    pdf: 'documents/Lily-Morningstar-CV.pdf',
    docx: 'documents/Lily-Morningstar-CV.docx',
  },
} as const;
