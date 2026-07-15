import { ArrowRight } from 'lucide-react';
import { finalCta } from '../data/content';
import { useReveal } from '../hooks/useReveal';
import './FinalCTA.css';

export function FinalCTA() {
  const ref = useReveal();

  const handleScroll = (href: string) => {
    const id = href.replace('#', '');
    const el = document.getElementById(id);
    if (el) {
      const offset = 80;
      const top = el.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <section className="final-cta" aria-labelledby="final-cta-heading">
      <div className="container">
        <div className="final-cta__inner reveal" ref={ref}>
          <div className="final-cta__content">
            <h2 className="final-cta__heading" id="final-cta-heading">
              {finalCta.heading}
            </h2>
            <p className="final-cta__body">{finalCta.body}</p>
          </div>

          <div className="final-cta__action">
            <a
              href={finalCta.cta.href}
              className="btn btn--primary btn--lg"
              onClick={(e) => { e.preventDefault(); handleScroll(finalCta.cta.href); }}
            >
              {finalCta.cta.label}
              <ArrowRight size={18} aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
