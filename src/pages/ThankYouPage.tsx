import { useEffect, useState } from 'react';
import { CheckCircle, ArrowLeft, Search } from 'lucide-react';
import { roleCategories } from '../data/content';
import './ThankYouPage.css';

export function ThankYouPage() {
  const [selectedLabels, setSelectedLabels] = useState<string[]>([]);

  useEffect(() => {
    // Read submitted categories from sessionStorage (set by the form on submission)
    const stored = sessionStorage.getItem('rolebrowse_submitted_categories');
    if (stored) {
      const ids: string[] = JSON.parse(stored);
      const labels = ids.map(
        (id) => roleCategories.find((c) => c.id === id)?.title ?? id
      );
      setSelectedLabels(labels);
    }

    // Scroll to top
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="thankyou" id="main-content">
      <div className="container thankyou__inner">
        <div className="thankyou__card">

          {/* Icon */}
          <div className="thankyou__icon" aria-hidden="true">
            <CheckCircle size={56} strokeWidth={1.25} />
          </div>

          {/* Heading */}
          <h1 className="thankyou__heading">
            Thanks for registering your interest.
          </h1>

          {/* Body */}
          <p className="thankyou__body">
            We have received your details. If there is a possible fit with an available employer
            partner category, we may be in touch using the contact details you provided.
          </p>
          <p className="thankyou__note">
            Not every submission will result in a follow up. Timelines vary by employer partner
            availability and role requirements. Registering does not guarantee a job, interview
            or employer response.
          </p>

          {/* Selected categories summary */}
          {selectedLabels.length > 0 && (
            <div className="thankyou__categories">
              <p className="thankyou__categories-label">Role categories you indicated interest in:</p>
              <ul className="thankyou__categories-list" role="list">
                {selectedLabels.map((label) => (
                  <li key={label} className="thankyou__category-item">
                    <CheckCircle size={14} aria-hidden="true" />
                    {label}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Actions */}
          <div className="thankyou__actions">
            <a href="/" className="btn btn--primary">
              <ArrowLeft size={17} aria-hidden="true" />
              Back to Home
            </a>
            <a href="/#role-categories" className="btn btn--secondary" onClick={(e) => {
              e.preventDefault();
              window.location.href = '/';
              setTimeout(() => {
                const el = document.getElementById('role-categories');
                if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }, 300);
            }}>
              <Search size={17} aria-hidden="true" />
              View Role Categories
            </a>
          </div>

        </div>
      </div>
    </main>
  );
}
