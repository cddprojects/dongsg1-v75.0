import { useState, useEffect, useCallback, useRef } from 'react';
import { Menu, X } from 'lucide-react';
import { nav } from '../data/content';
import './Header.css';

export function Header() {
  const headerRef = useRef<HTMLElement>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 40);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  // Close menu when clicking outside
  useEffect(() => {
    if (!menuOpen) return;
    const handler = (e: MouseEvent) => {
      if (!headerRef.current?.contains(e.target as Node)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener('click', handler);
    return () => document.removeEventListener('click', handler);
  }, [menuOpen]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMenuOpen(false);
    };
    document.addEventListener('keydown', handler);
    return () => document.removeEventListener('keydown', handler);
  }, []);

  useEffect(() => {
    const media = window.matchMedia('(min-width: 910px)');
    const handler = (e: MediaQueryListEvent) => {
      if (e.matches) setMenuOpen(false);
    };
    media.addEventListener('change', handler);
    return () => media.removeEventListener('change', handler);
  }, []);

  // Prevent body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    document.body.style.overflow = '';

    const id = href.replace('#', '');
    const el = document.getElementById(id);
    if (!el) return;

    // Wait until the mobile menu closes and body scrolling is restored.
    window.requestAnimationFrame(() => {
      const headerHeight = headerRef.current?.offsetHeight ?? 72;
      const top = el.getBoundingClientRect().top + window.scrollY - headerHeight - 8;
      window.history.replaceState(null, '', href);
      window.scrollTo({ top: Math.max(0, top), behavior: 'smooth' });
    });
  };

  return (
    <header ref={headerRef} className={`header${scrolled ? ' header--scrolled' : ''}`} role="banner">
      <div className="container header__inner">
        {/* Logo / Wordmark */}
        <a href="/" className="header__logo" aria-label="Role Browse home">
          <span className="header__logo-word">Role Browse</span>
          <span className="header__logo-tag">Singapore</span>
        </a>

        {/* Desktop Nav */}
        <nav className="header__nav" aria-label="Main navigation">
          <ul className="header__nav-list" role="list">
            {nav.links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="header__nav-link"
                  onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href={nav.cta.href}
            className="btn btn--primary btn--sm header__cta"
            onClick={(e) => { e.preventDefault(); handleNavClick(nav.cta.href); }}
          >
            {nav.cta.label}
          </a>
        </nav>

        {/* Mobile Controls */}
        <div className="header__nav-wrapper">
          <a
            href={nav.cta.href}
            className="btn btn--primary btn--sm header__cta-mobile"
            onClick={(e) => { e.preventDefault(); handleNavClick(nav.cta.href); }}
          >
            Apply
          </a>
          <button
            type="button"
            className="header__burger"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
          >
            {menuOpen
              ? <X size={22} aria-hidden="true" />
              : <Menu size={22} aria-hidden="true" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        id="mobile-menu"
        className={`header__mobile-menu${menuOpen ? ' header__mobile-menu--open' : ''}`}
        aria-hidden={!menuOpen}
      >
        <nav aria-label="Mobile navigation">
          <ul className="header__mobile-list" role="list">
            {nav.links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="header__mobile-link"
                  onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                  tabIndex={menuOpen ? 0 : -1}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href={nav.cta.href}
            className="btn btn--primary header__mobile-cta"
            onClick={(e) => { e.preventDefault(); handleNavClick(nav.cta.href); }}
            tabIndex={menuOpen ? 0 : -1}
          >
            {nav.cta.label}
          </a>
        </nav>
      </div>
    </header>
  );
}
