import type { Project } from './types';

/**
 * Project cards shown on the AI Leadership page (tag 'ai') and anywhere
 * featured projects appear.
 *
 * TODO (owner): review the short descriptions below — they are written
 * from repository names and should be refined with real project details,
 * outcomes, and screenshots (add images under public/images/projects/).
 */
export const projects: Project[] = [
  {
    id: 'scorm-linux-labs',
    title: 'SCORM Linux Labs',
    status: 'active',
    description:
      'Autograded SCORM Linux practice labs for CIT 173, built to support students who lack access to dedicated computing resources and to give instructors a consistent, automated grading process.',
    technologies: ['SCORM', 'JavaScript', 'HTML', 'Instructional design'],
    outcomes: ['Reusable lab modules deployed in CSN Linux courses'],
    repoUrl: 'https://github.com/LilMnstr-XAK3P/SCORM-Linux-Labs',
    visibility: 'public',
    tags: ['ai', 'linux', 'scorm', 'simulation'],
    featured: true,
    public: true,
  },
  {
    id: 'scorm-blum-linux-plus',
    title: "SCORM Blum's Linux+ Prep Practice Labs",
    status: 'active',
    description:
      "Autograded SCORM practice labs following Blum's Linux+ preparation material, extending the CIT 173 lab series with CompTIA Linux+ certification-focused practice.",
    technologies: ['SCORM', 'JavaScript', 'Instructional design'],
    repoUrl: 'https://github.com/LilMnstr-XAK3P/SCORM-Blum-Linux-Plus',
    visibility: 'public',
    tags: ['ai', 'linux', 'scorm', 'certification'],
    public: true,
  },
  {
    id: 'scorm-linux-final-assessment',
    title: 'SCORM Linux Final Assessment Labs',
    status: 'active',
    description: 'Autograded SCORM final-assessment labs completing the CIT 173 Linux lab series.',
    technologies: ['SCORM', 'JavaScript', 'Instructional design'],
    // No public repository link on the CV — add repoUrl when available.
    visibility: 'private',
    tags: ['ai', 'linux', 'scorm'],
    public: true,
  },
  {
    id: 'cit173-linux-map',
    title: 'CIT 173 Linux Curriculum Map',
    status: 'active',
    description:
      'Course map app for CIT 173: Introduction to Linux, aligned with UNLV curriculum and focused on CompTIA Linux+ certification preparation.',
    technologies: ['TypeScript', 'Curriculum mapping'],
    repoUrl: 'https://github.com/LilMnstr-XAK3P/cit173-linux-map',
    visibility: 'public',
    tags: ['ai', 'linux', 'curriculum'],
    public: true,
  },
  {
    id: 'degree-advisor',
    title: 'Degree Advisor',
    status: 'in-development',
    description:
      'Degree Advisor web and mobile app helping students navigate cybersecurity degree pathways, course sequencing, and specialization options.',
    technologies: ['TypeScript', 'AI', 'Retrieval-Augmented Generation'],
    repoUrl: 'https://github.com/LilMnstr-XAK3P/degree-advisor',
    visibility: 'public',
    tags: ['ai', 'curriculum', 'advising'],
    featured: true,
    public: true,
  },
  {
    id: 'cybercenter',
    title: 'CyberCenter',
    status: 'in-development',
    description:
      'Development and editing of the CSN Cyber Center web page — program information and resources for cybersecurity students.',
    technologies: ['TypeScript', 'React', 'AI'],
    repoUrl: 'https://github.com/LilMnstr-XAK3P/cybercenter',
    visibility: 'public',
    tags: ['ai', 'cybersecurity', 'student-success'],
    public: true,
  },
  {
    id: 'ai-assessment-workflows',
    title: 'AI Assessment Workflows',
    status: 'planned',
    description:
      'Assessment workflows combining model-based graders with deterministic checks for reliable, transparent AI-assisted grading.',
    technologies: ['AI evaluation', 'Model-based graders', 'Deterministic checks'],
    visibility: 'private',
    tags: ['ai', 'assessment'],
    public: true,
  },
  {
    id: 'grounded-course-assistants',
    title: 'Grounded Course Assistants',
    status: 'planned',
    description:
      'Course assistants grounded in syllabus and lab content through Retrieval-Augmented Generation, designed to answer only from verified course materials.',
    technologies: ['Retrieval-Augmented Generation', 'Vector stores', 'File Search'],
    visibility: 'private',
    tags: ['ai', 'rag', 'teaching'],
    public: true,
  },
  {
    id: 'ai-fluency-assignments',
    title: 'AI Fluency Assignments',
    status: 'planned',
    description:
      'Course assignments that build student AI fluency — delegation, description, discernment, and diligence — inside cybersecurity coursework.',
    technologies: ['AI fluency', 'Instructional design'],
    visibility: 'private',
    tags: ['ai', 'teaching', 'ai-fluency'],
    public: true,
  },
];
