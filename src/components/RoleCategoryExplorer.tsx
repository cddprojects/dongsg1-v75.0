import { Info } from 'lucide-react';
import { roleCategories, categoryNote, categoriesSection } from '../data/content';
import { RoleCategoryCard } from './RoleCategoryCard';
import { useReveal } from '../hooks/useReveal';
import './RoleCategoryExplorer.css';

interface Props {
  selected: string[];
  onToggle: (id: string) => void;
}

export function RoleCategoryExplorer({ selected, onToggle }: Props) {
  const ref = useReveal();

  const handleApplyClick = () => {
    const el = document.getElementById('application');
    if (el) {
      const offset = 80;
      const top = el.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <section className="categories" id="role-categories" aria-labelledby="categories-heading">
      <div className="container">
        <div className="categories__header reveal" ref={ref}>
          <span className="eyebrow">{categoriesSection.eyebrow}</span>
          <h2 className="section-heading" id="categories-heading">
            {categoriesSection.heading}
          </h2>
          <p className="section-subheading categories__subheading">
            {categoriesSection.subheading}
          </p>
        </div>

        {/* Selected count indicator */}
        {selected.length > 0 && (
          <div className="categories__selection-bar" role="status" aria-live="polite">
            <span className="categories__selection-count">
              {selected.length} {selected.length === 1 ? 'category' : 'categories'} selected
            </span>
            <button
              className="btn btn--ghost btn--sm"
              onClick={handleApplyClick}
              type="button"
            >
              Continue to application →
            </button>
          </div>
        )}

        {/* Category grid */}
        <p className="categories__example-label eyebrow">Example role categories</p>
        <div
          className="categories__grid"
          role="group"
          aria-label="Role categories, select to indicate interest"
        >
          {roleCategories.map((cat) => (
            <RoleCategoryCard
              key={cat.id}
              category={cat}
              selected={selected.includes(cat.id)}
              onToggle={onToggle}
            />
          ))}
        </div>

        {/* Disclaimer note */}
        <div className="categories__note">
          <Info size={16} aria-hidden="true" className="categories__note-icon" />
          <p className="disclaimer">{categoryNote}</p>
        </div>
      </div>
    </section>
  );
}
