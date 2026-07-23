import { footer, siteConfig } from '../data/content';
import './Footer.css';

export function Footer() {
  const year = new Date().getFullYear();

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      const id = href.replace('#', '');
      const el = document.getElementById(id);
      if (el) {
        const offset = 80;
        const top = el.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    }
  };

  return (
    <footer className="footer" role="contentinfo">
      <div className="container">
        {/* Main footer content */}
        <div className="footer__main">
          {/* Brand column */}
          <div className="footer__brand">
            <a href="/" className="footer__logo" aria-label="Role Browse home">
              <span className="footer__logo-word">Role Browse</span>
              <span className="footer__logo-tag">Singapore</span>
            </a>
            <p className="footer__description">{footer.description}</p>
            <p className="footer__contact">
              For enquiries:{' '}
              <a href={`mailto:${siteConfig.contactEmail}`} className="footer__contact-link">
                {siteConfig.contactEmail}
              </a>
            </p>
          </div>

          {/* Navigation */}
          <nav className="footer__nav" aria-label="Footer navigation">
            <div className="footer__nav-col">
              <p className="footer__nav-heading">Navigation</p>
              <ul role="list">
                {footer.links.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="footer__nav-link"
                      onClick={(e) => handleNavClick(e, link.href)}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </nav>
        </div>

        {/* Disclaimer box */}
        <div className="footer__disclaimer">
          <p className="disclaimer">{footer.disclaimer}</p>
        </div>

        {/* Bottom bar */}
        <div className="footer__bottom">
          <p className="footer__copyright">
            © {year} Role Browse. Operated by SKILLS LINK LTD.
          </p>
          <div className="footer__legal-row">
            {footer.legalLinks.map((link, i) => (
              <span key={link.href}>
                {i > 0 && <span className="footer__sep" aria-hidden="true">·</span>}
                <a href={link.href} className="footer__legal-link">
                  {link.label}
                </a>
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
