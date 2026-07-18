/**
 * Shared data types for all portfolio content.
 *
 * Every record includes `public: boolean`. Only records with `public: true`
 * are ever rendered on the website. Use `internalNotes` for owner-only
 * context — it is never rendered.
 */

export interface EvidenceItem {
  label: string;
  /** URL or repository-relative path to the evidence. */
  href?: string;
  /** Set true to keep this evidence off the public site. */
  private?: boolean;
}

export interface ProfessionalActivity {
  id: string;
  title: string;
  provider?: string;
  organization?: string;
  /** ISO date (YYYY-MM-DD). Used for sorting. */
  startDate: string;
  endDate?: string;
  /** Human-readable date shown on the site, e.g. "April 9, 2026". */
  displayDate: string;
  type: string;
  category: string;
  format?: string;
  /** Verified duration in hours. Leave undefined until verified — undefined
   *  hours are excluded from hour totals. */
  hours?: number;
  ceus?: number;
  certificate?: boolean;
  summary: string;
  skills: string[];
  application?: string;
  impact?: string;
  evidence?: EvidenceItem[];
  cvEntry?: string;
  performanceReviewNarrative?: string;
  tags: string[];
  featured?: boolean;
  public: boolean;
  internalNotes?: string;
  evidencePrivate?: boolean;
}

export interface Course {
  id: string;
  code: string;
  title: string;
  /** Expertise group, e.g. "Linux and Systems Administration". */
  group: string;
  /** Terms taught, e.g. "Spring 2020 to Present". */
  terms: string;
  description?: string;
  tags: string[];
  public: boolean;
  internalNotes?: string;
}

export interface CurriculumItem {
  id: string;
  title: string;
  /** 'created' | 'redesigned' | 'program-redesign' */
  kind: 'created' | 'redesigned' | 'program-redesign';
  description?: string;
  details?: string[];
  tags: string[];
  public: boolean;
  internalNotes?: string;
}

export interface Contribution {
  id: string;
  title: string;
  organization: string;
  startDate: string;
  displayDate: string;
  category: string;
  summary: string;
  details: string[];
  /** Counts toward the "national curriculum initiatives" statistic. */
  national?: boolean;
  tags: string[];
  featured?: boolean;
  public: boolean;
  internalNotes?: string;
}

export interface EducationEntry {
  id: string;
  institution: string;
  degree: string;
  field?: string;
  specialization?: string;
  year?: string;
  status?: string;
  expected?: string;
  notes?: string[];
  focusAreas?: string[];
  capstone?: string;
  public: boolean;
}

export interface SkillGroup {
  id: string;
  title: string;
  skills: string[];
  public: boolean;
}

export interface Project {
  id: string;
  title: string;
  status: 'active' | 'in-development' | 'completed' | 'planned';
  description: string;
  technologies: string[];
  outcomes?: string[];
  /** Repository-relative paths or URLs to screenshots. */
  images?: string[];
  repoUrl?: string;
  demoUrl?: string;
  /** 'public' renders the repo link; 'private' shows a "private repository" note. */
  visibility: 'public' | 'private';
  tags: string[];
  featured?: boolean;
  public: boolean;
  internalNotes?: string;
}

export interface ServiceRole {
  id: string;
  role: string;
  organization?: string;
  period: string;
  /** ISO start date for sorting. */
  startDate: string;
  description?: string;
  tags: string[];
  public: boolean;
}

export interface MediaItem {
  id: string;
  title: string;
  outlet?: string;
  host?: string;
  kind: string;
  startDate: string;
  displayDate: string;
  summary: string;
  topics?: string[];
  url?: string;
  tags: string[];
  featured?: boolean;
  public: boolean;
  internalNotes?: string;
}

export interface StudentResult {
  id: string;
  title: string;
  detail: string;
  season?: string;
  /** Link to official results (e.g. Cyber Skyline) shown as evidence. */
  url?: string;
  verified: boolean;
  public: boolean;
  internalNotes?: string;
}

export interface StudentEngagement {
  id: string;
  title: string;
  description: string;
  tags: string[];
  public: boolean;
  internalNotes?: string;
}

export interface ResearchWork {
  id: string;
  kind: 'publication' | 'presentation' | 'conference-session' | 'article' | 'poster';
  title: string;
  venue?: string;
  date?: string;
  status?: string;
  url?: string;
  public: boolean;
  internalNotes?: string;
}

export interface ExperienceEntry {
  id: string;
  role: string;
  organization: string;
  location?: string;
  period: string;
  /** ISO start date for sorting. */
  startDate: string;
  summary?: string;
  details?: string[];
  public: boolean;
}

export interface VolunteerEntry {
  id: string;
  organization: string;
  period: string;
  startDate: string;
  public: boolean;
}

export interface SocialLink {
  id: string;
  label: string;
  /** Leave '' until the owner supplies the real URL — blank links are hidden. */
  url: string;
}
