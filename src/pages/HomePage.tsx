import { useState, useEffect } from 'react';
import { Hero } from '../components/Hero';
import { IntroSection } from '../components/IntroSection';
import { RoleCategoryExplorer } from '../components/RoleCategoryExplorer';
import { ProcessTimeline } from '../components/ProcessTimeline';
import { TrustSafetySection } from '../components/TrustSafetySection';
import { ApplicationForm } from '../components/ApplicationForm';
import { FAQAccordion } from '../components/FAQAccordion';
import { FinalCTA } from '../components/FinalCTA';

export function HomePage() {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  const handleCategoryToggle = (id: string) => {
    setSelectedCategories((prev) =>
      prev.includes(id) ? prev.filter((c) => c !== id) : [...prev, id]
    );
  };

  // Sync scroll position restoration
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main id="main-content">
      <Hero />
      <IntroSection />
      <RoleCategoryExplorer
        selected={selectedCategories}
        onToggle={handleCategoryToggle}
      />
      <ProcessTimeline />
      <TrustSafetySection />
      <ApplicationForm preselectedCategories={selectedCategories} />
      <FAQAccordion />
      <FinalCTA />
    </main>
  );
}
