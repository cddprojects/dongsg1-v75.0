import { intro } from '../data/content';
import { useReveal } from '../hooks/useReveal';
import './IntroSection.css';

export function IntroSection() {
  const ref = useReveal();

  return (
    <section className="intro" id="about" aria-labelledby="intro-heading">
      <div className="container">
        <div className="intro__grid reveal" ref={ref}>
          {/* Left: Heading + lead */}
          <div className="intro__left">
            <span className="eyebrow">{intro.eyebrow}</span>
            <h2 className="section-heading intro__heading" id="intro-heading">
              {intro.heading}
            </h2>
            <p className="intro__lead">{intro.lead}</p>
          </div>

          {/* Right: Key points */}
          <div className="intro__right">
            {intro.points.map((point, i) => (
              <div className="intro__point" key={i}>
                <div className="intro__point-number" aria-hidden="true">
                  {String(i + 1).padStart(2, '0')}
                </div>
                <div className="intro__point-body">
                  <h3 className="intro__point-heading">{point.heading}</h3>
                  <p className="intro__point-text">{point.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
