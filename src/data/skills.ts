import type { SkillGroup } from './types';

export const skillGroups: SkillGroup[] = [
  {
    id: 'ai',
    title: 'Artificial Intelligence',
    skills: [
      'Artificial intelligence integration in higher education',
      'AI fluency',
      'Responsible AI',
      'Human-AI collaboration',
      'AI-assisted curriculum development',
      'AI-assisted assessment design',
      'Prompt and context engineering',
      'Retrieval-Augmented Generation',
      'AI evaluation workflows',
      'AI governance and ethics',
      'AI literacy and faculty development',
    ],
    public: true,
  },
  {
    id: 'cybersecurity',
    title: 'Cybersecurity',
    skills: [
      'Linux systems administration',
      'Security+',
      'Network security',
      'Ethical hacking',
      'Digital forensics',
      'Network forensics',
      'Security operations',
      'Incident response',
      'Compliance',
      'Capture-the-Flag instruction and coaching',
    ],
    public: true,
  },
  {
    id: 'curriculum',
    title: 'Curriculum and Instruction',
    skills: [
      'Curriculum design',
      'Program redesign',
      'Learning-outcome development',
      "Bloom's taxonomy for computing disciplines",
      'Experiential learning',
      'Gamification',
      'Online and hybrid learning',
      'SCORM lab development',
      'Learning analytics',
      'Educational assessment',
    ],
    public: true,
  },
  {
    id: 'research-leadership',
    title: 'Research and Leadership',
    skills: [
      'Quantitative research',
      'Qualitative research',
      'Mixed-methods research',
      'Academic writing',
      'Grant development',
      'Faculty leadership',
      'Industry-academic partnerships',
      'National curriculum development',
    ],
    public: true,
  },
];

/** Expertise areas featured on the home page. */
export const expertiseAreas = [
  {
    id: 'linux',
    title: 'Linux Systems Administration',
    description:
      'Red Hat Academy instruction, SCORM-based Linux simulations, and hands-on systems administration courses.',
    icon: 'Terminal',
  },
  {
    id: 'cyber-ed',
    title: 'Cybersecurity Education',
    description:
      'Certification-aligned instruction across Security+, Network+, ethical hacking, and security operations.',
    icon: 'ShieldCheck',
  },
  {
    id: 'forensics',
    title: 'Digital Forensics',
    description:
      'Digital and network forensics courses, CHFI-aligned pathways, and applied investigation labs.',
    icon: 'Search',
  },
  {
    id: 'ai-highered',
    title: 'AI in Higher Education',
    description:
      'AI fluency, responsible AI, curriculum evaluation, and institutional AI policy leadership.',
    icon: 'Sparkles',
  },
  {
    id: 'curriculum-dev',
    title: 'Curriculum & Program Development',
    description:
      'Degree redesigns, new course creation, and Bloom’s-aligned learning-outcome development.',
    icon: 'BookOpen',
  },
  {
    id: 'experiential',
    title: 'Experiential & Gamified Learning',
    description:
      'Capture-the-Flag learning, simulations, and gamified labs that build real confidence and skill.',
    icon: 'Gamepad2',
  },
  {
    id: 'workforce',
    title: 'Workforce Development',
    description:
      'Industry advisory collaboration, CTE pathway alignment, and certification-aligned degree design.',
    icon: 'Briefcase',
  },
  {
    id: 'assessment',
    title: 'Assessment & Learning Analytics',
    description:
      'Evidence-driven assessment design, learning analytics, and metacognitive student reflection.',
    icon: 'BarChart3',
  },
] as const;
