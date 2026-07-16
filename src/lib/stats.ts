import { contributions } from '../data/contributions';
import { newCourses, courseRedesigns } from '../data/curriculum';
import { mediaItems } from '../data/media';
import { professionalDevelopment } from '../data/professionalDevelopment';
import { profile } from '../data/profile';
import { competitionResults } from '../data/studentSuccess';
import { publicOnly, totalVerifiedHours, totalCeus, filterByCategory } from './dataUtils';

/**
 * Site statistics, calculated only from verified public data.
 * Nothing here is hard-coded — edit the data files to change the numbers.
 */
export function getSiteStats() {
  const activities = publicOnly(professionalDevelopment);
  const publicContributions = publicOnly(contributions);

  const currentYear = new Date().getFullYear();

  return {
    yearsTeaching: Math.max(0, currentYear - profile.teachingSince),
    coursesDeveloped: publicOnly(newCourses).length,
    coursesRedesigned: publicOnly(courseRedesigns).length,
    nationalInitiatives: publicContributions.filter((c) => c.national).length,
    pdHours: totalVerifiedHours(activities),
    aiPdActivities: activities.filter(
      (a) => a.category === 'Artificial Intelligence' || a.tags.includes('ai'),
    ).length,
    aiPdHours: totalVerifiedHours(filterByCategory(activities, 'Artificial Intelligence')),
    ceus: totalCeus(activities),
    certificates: activities.filter((a) => a.certificate).length,
    conferences: activities.filter((a) => a.type === 'Conference').length,
    competitionPlacements: publicOnly(competitionResults).filter((r) => r.verified).length,
    mediaAppearances: publicOnly(mediaItems).filter((m) => m.kind.includes('Interview')).length,
  };
}
