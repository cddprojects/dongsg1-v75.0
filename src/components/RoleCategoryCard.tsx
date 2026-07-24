import {
  Headphones,
  ShoppingBag,
  UtensilsCrossed,
  Package,
  FileText,
  Monitor,
  Megaphone,
  Check,
} from 'lucide-react';
import type { RoleCategory } from '../data/content';
import './RoleCategoryCard.css';

const iconMap: Record<string, React.ElementType> = {
  headphones: Headphones,
  'shopping-bag': ShoppingBag,
  utensils: UtensilsCrossed,
  package: Package,
  'file-text': FileText,
  monitor: Monitor,
  megaphone: Megaphone,
};

interface Props {
  category: RoleCategory;
  selected: boolean;
  onToggle: (id: string) => void;
}

export function RoleCategoryCard({ category, selected, onToggle }: Props) {
  const Icon = iconMap[category.icon] ?? FileText;

  return (
    <div
      className={`category-card${selected ? ' category-card--selected' : ''}`}
      role="checkbox"
      aria-checked={selected}
      tabIndex={0}
      onClick={() => onToggle(category.id)}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onToggle(category.id);
        }
      }}
      aria-label={`${selected ? 'Deselect' : 'Select'} ${category.title}`}
    >
      <div className="category-card__header">
        <div className="category-card__icon-wrap" aria-hidden="true">
          <Icon size={22} strokeWidth={1.75} />
        </div>
        <div className={`category-card__check${selected ? ' category-card__check--visible' : ''}`} aria-hidden="true">
          <Check size={14} strokeWidth={2.5} />
        </div>
      </div>

      <p className="category-card__example-label">Example role category</p>
      <h3 className="category-card__title">{category.title}</h3>
      <p className="category-card__desc">{category.description}</p>

      {/* Hourly rate */}
      <div className="category-card__rate" aria-label={`Approximate hourly rate: ${category.hourlyRange}`}>
        <span className="category-card__rate-label">~</span>
        <span className="category-card__rate-value">{category.hourlyRange}</span>
        <span className="category-card__rate-note">indicative range</span>
      </div>

      {/* Example role titles */}
      <p className="category-card__examples">
        e.g. {category.examples.join(', ')}
      </p>

      {/* Skill tags */}
      <div className="category-card__skills" aria-label="Relevant skills">
        {category.skills.map((skill) => (
          <span key={skill} className="category-card__skill-tag">{skill}</span>
        ))}
      </div>

      <div className="category-card__action">
        <span className="category-card__action-label">
          {selected ? '✓ Selected' : 'Tap to select'}
        </span>
      </div>
    </div>
  );
}
