import { useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Breadcrumbs } from './components/Breadcrumbs';
import { BackToTop } from './components/BackToTop';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { TeachingPage } from './pages/TeachingPage';
import { AILeadershipPage } from './pages/AILeadershipPage';
import { ResearchPage } from './pages/ResearchPage';
import { ContributionsPage } from './pages/ContributionsPage';
import { ProfessionalDevelopmentPage } from './pages/ProfessionalDevelopmentPage';
import { StudentSuccessPage } from './pages/StudentSuccessPage';
import { MediaPage } from './pages/MediaPage';
import { CVPage } from './pages/CVPage';
import { ContactPage } from './pages/ContactPage';
import { NotFoundPage } from './pages/NotFoundPage';

/** Scroll to the top on route change (browser back/forward keeps position). */
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <div className="flex min-h-screen flex-col">
      <ScrollToTop />
      <Header />
      <Breadcrumbs />
      <main id="main-content" className="flex-1">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/teaching" element={<TeachingPage />} />
          <Route path="/ai-leadership" element={<AILeadershipPage />} />
          <Route path="/research" element={<ResearchPage />} />
          <Route path="/contributions" element={<ContributionsPage />} />
          <Route path="/professional-development" element={<ProfessionalDevelopmentPage />} />
          <Route path="/student-success" element={<StudentSuccessPage />} />
          <Route path="/media" element={<MediaPage />} />
          <Route path="/cv" element={<CVPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}
