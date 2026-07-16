import type { Contribution } from './types';

/**
 * National, industry, and institutional contributions.
 * Records with `national: true` count toward the national-initiatives statistic.
 */
export const contributions: Contribution[] = [
  {
    id: 'cs-transfer2026-ai-data',
    title: 'CS-Transfer2026: Artificial Intelligence and Data Management',
    organization:
      'Association for Computing Machinery Committee for Computing Education in Community Colleges (ACM CCECC)',
    startDate: '2026-04-10',
    displayDate: 'April 10, 2026',
    category: 'National Curriculum Contribution',
    summary:
      'Participated in the development of national curricular guidance for artificial intelligence and data management in community college computing programs.',
    details: [
      'Participated in development of national curricular guidance',
      'Contributed to learning outcomes in artificial intelligence and data management',
      'Addressed machine learning, database systems, modeling, SQL, privacy, security, and ethics',
    ],
    national: true,
    tags: ['acm', 'ai', 'data-management', 'curriculum'],
    featured: true,
    public: true,
  },
  {
    id: 'cs-transfer2026-cyber-society',
    title: 'CS-Transfer2026: Cybersecurity and Society, Ethics, and the Profession',
    organization:
      'Association for Computing Machinery Committee for Computing Education in Community Colleges (ACM CCECC)',
    startDate: '2026-04-17',
    displayDate: 'April 17, 2026',
    category: 'National Curriculum Contribution',
    summary:
      "Active contributor to national cybersecurity curricular guidance, proposing Bloom's taxonomy-aligned revisions that increased rigor and assessment alignment.",
    details: [
      'Served as an active contributor',
      "Proposed Bloom's taxonomy-aligned revisions",
      'Increased rigor and assessment alignment',
      'Contributed to security engineering, digital forensics, cryptography, ethics, societal impact, and AI-related cybersecurity topics',
    ],
    national: true,
    tags: ['acm', 'cybersecurity', 'ethics', 'curriculum'],
    featured: true,
    public: true,
  },
  {
    id: 'ap-cybersecurity-evaluation',
    title: 'AP Cybersecurity Curriculum Evaluation',
    // Verified role: AP Reader program participant and curriculum evaluator.
    // Do not add College Board titles beyond this verified role.
    organization: 'AP Reader Program',
    startDate: '2026-01-01',
    displayDate: '2026',
    category: 'National Curriculum Contribution',
    summary:
      'Participated in the AP Reader program and evaluated AP Cybersecurity curriculum for alignment with AP expectations.',
    details: [
      'Reviewed learning outcomes',
      'Reviewed curriculum and syllabi',
      'Evaluated alignment with AP expectations',
      'Provided student-achievement information',
      'Compared final-exam performance with final course grades',
      'Explained relationships between examination outcomes and overall course performance',
    ],
    national: true,
    tags: ['ap', 'cybersecurity', 'curriculum', 'assessment'],
    featured: true,
    public: true,
  },
  {
    id: 'cte-pathway-alignment',
    title: 'Cybersecurity Program Curriculum Update and CTE Pathway Alignment',
    organization: 'College of Southern Nevada',
    startDate: '2026-04-09',
    displayDate: 'April 9, 2026',
    category: 'Curriculum Development',
    summary:
      'Curriculum-update and CTE pathway-alignment work connecting high school programs to CSN cybersecurity degrees.',
    details: [
      'Fall 2026 degree updates',
      'High-school-to-college articulation',
      'Course sequencing',
      'Academic maps',
      'Dual-credit pathways',
    ],
    tags: ['cte', 'articulation', 'curriculum'],
    public: true,
  },
  {
    id: 'industry-advisory-2026',
    title: 'CSN Computing and Information Technology Advisory Committee',
    organization: 'College of Southern Nevada',
    startDate: '2026-05-08',
    displayDate: 'May 8, 2026',
    category: 'Industry Collaboration',
    summary:
      'Participated in the industry advisory committee meeting connecting CSN computing programs with regional workforce needs.',
    details: [
      'Workforce trends',
      'AI impact on entry-level roles',
      'AI governance',
      'Cybersecurity hiring',
      'Prompt engineering',
      'Agentic AI',
      'SIEM exposure',
      'Communication and teamwork',
      'Internship pathways',
      'Student competition results',
    ],
    tags: ['industry', 'advisory', 'ai', 'workforce'],
    public: true,
  },
];
