import { ArrowRight, ChevronDown, AlertTriangle } from 'lucide-react';
import { hero } from '../data/content';
import './Hero.css';

export function Hero() {
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
    <section className="hero" aria-label="Introduction">
      <div className="container hero__inner">
        {/* Content Column */}
        <div className="hero__content">
          <div className="hero__eyebrow-wrap">
            <span className="eyebrow hero__eyebrow">{hero.eyebrow}</span>
          </div>

          <h1 className="hero__heading">{hero.heading}</h1>

          <p className="hero__subheading">{hero.subheading}</p>

          <div className="hero__actions">
            <a
              href={hero.primaryCta.href}
              className="btn btn--primary btn--lg hero__primary-cta"
              onClick={(e) => { e.preventDefault(); handleScroll(hero.primaryCta.href); }}
            >
              {hero.primaryCta.label}
              <ArrowRight size={18} aria-hidden="true" />
            </a>
            <a
              href={hero.secondaryCta.href}
              className="btn btn--secondary hero__secondary-cta"
              onClick={(e) => { e.preventDefault(); handleScroll(hero.secondaryCta.href); }}
            >
              {hero.secondaryCta.label}
              <ChevronDown size={18} aria-hidden="true" />
            </a>
          </div>

          <div className="hero__trust-note" role="note">
            <AlertTriangle size={15} aria-hidden="true" className="hero__trust-icon" />
            <p className="disclaimer">{hero.trustNote}</p>
          </div>
        </div>

        {/* Image Column */}
        <div className="hero__image-col">
          <div className="hero__image-frame">
            <img
              src="/hero-workplace.png"
              alt="Working professionals collaborating in a modern Singapore office environment"
              width="900"
              height="675"
              className="hero__image"
              loading="eager"
              fetchPriority="high"
            />

            {/* Floating stat card */}
            <div className="hero__stat-card" aria-hidden="true">
              <div className="hero__stat-row">
                <div className="hero__stat-dot"></div>
                <span className="hero__stat-label">Employer-partner opportunity registration</span>
              </div>
              <p className="hero__stat-desc">7 role categories available to indicate interest</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="hero__scroll-indicator" aria-hidden="true">
        <div className="hero__scroll-line"></div>
      </div>
    </section>
  );
}
