/**
 * Content for the AI Leadership page.
 * Project cards live in projects.ts (tagged 'ai').
 */

export const aiCurriculumEvaluation = {
  title: 'AI Curriculum and Evaluation',
  description:
    'Trained on and evaluated industry AI curricula for workforce alignment, responsible AI, AI security, offensive AI, and governance and ethics.',
  programs: [
    'EC-Council Artificial Intelligence Essentials',
    'Certified AI Program Manager',
    'Certified Offensive AI Security Professional',
    'Certified Responsible AI Governance and Ethics',
  ],
  focusAreas: [
    'AI curriculum evaluation',
    'Workforce alignment',
    'Responsible AI',
    'AI security',
    'Offensive AI',
    'Governance and ethics',
  ],
} as const;

export const aiFacultyDevelopment = {
  title: 'AI Faculty Development',
  description:
    'Sustained, current professional development across the major AI providers and the cybersecurity education community.',
  activities: [
    'Anthropic Teaching AI Fluency',
    'OpenAI Codex for Everyday Use',
    'OpenAI Builder Bootcamp: Evals',
    'OpenAI Builder Bootcamp: Retrieval-Augmented Generation',
    'BHIS Prompt Engineering 201: The Context Stack',
    'CAE AI Horizon and NAIRR session',
    'Microsoft Minecraft Education: Cyber Foundations for Educators',
  ],
} as const;

export const aiCompetencies = {
  title: 'AI Competencies',
  groups: [
    {
      title: 'AI Fluency',
      items: ['Delegation', 'Description', 'Discernment', 'Diligence'],
    },
    {
      title: 'Engineering & Evaluation',
      items: [
        'Context engineering',
        'AI evaluation',
        'Retrieval-Augmented Generation',
        'Vector stores',
        'File Search',
        'Grounded responses',
        'Model-based graders',
        'Deterministic checks',
      ],
    },
    {
      title: 'Governance',
      items: ['AI governance', 'Responsible AI'],
    },
  ],
} as const;

export const aiInstitutionalLeadership = {
  title: 'AI Institutional Leadership',
  items: [
    'AI Force Initiative committee participation',
    'AI policy development',
    'AI curriculum integration',
    'Faculty development',
    'Student AI literacy',
    'AI integration into cybersecurity courses',
  ],
} as const;
