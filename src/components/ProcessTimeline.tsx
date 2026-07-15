import { processSteps } from '../data/content';
import { useReveal } from '../hooks/useReveal';
import './ProcessTimeline.css';

export function ProcessTimeline() {
  const ref = useReveal();

  return (
    <section className="process" id="how-it-works" aria-labelledby="process-heading">
      <div className="container">
        <div className="process__header reveal" ref={ref}>
          <span className="eyebrow">The Application Process</span>
          <h2 className="section-heading" id="process-heading">
            How the application process works
          </h2>
          <p className="section-subheading process__subheading">
            A straightforward, transparent process with no guarantees of outcome.
          </p>
        </div>

        <ol className="process__steps" aria-label="Application process steps">
          {processSteps.map((step, i) => (
            <li className="process__step" key={i}>
              {/* Connector line — desktop */}
              {i < processSteps.length - 1 && (
                <div className="process__connector" aria-hidden="true" />
              )}

              <div className="process__step-inner">
                <div className="process__step-badge" aria-hidden="true">
                  <span>{step.number}</span>
                </div>
                <div className="process__step-content">
                  <h3 className="process__step-heading">{step.heading}</h3>
                  <p className="process__step-body">{step.body}</p>
                </div>
              </div>
            </li>
          ))}
        </ol>

        <div className="process__note">
          <p className="disclaimer">
            Not every profile will result in a referral or follow-up. Employer partners make their
            own independent decisions. Flexi Path is not the direct employer for referred opportunities.
          </p>
        </div>
      </div>
    </section>
  );
}
