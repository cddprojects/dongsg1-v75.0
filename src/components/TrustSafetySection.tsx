import {
  ShieldOff,
  CreditCard,
  Lock,
  FileCheck,
  ClipboardList,
  Eye,
} from 'lucide-react';
import { trustPoints } from '../data/content';
import { useReveal } from '../hooks/useReveal';
import './TrustSafetySection.css';

const iconMap: Record<string, React.ElementType> = {
  'shield-off': ShieldOff,
  'credit-card': CreditCard,
  lock: Lock,
  'file-check': FileCheck,
  'clipboard-list': ClipboardList,
  eye: Eye,
};

export function TrustSafetySection() {
  const ref = useReveal();

  return (
    <section className="trust" id="trust-safety" aria-labelledby="trust-heading">
      <div className="container">
        <div className="trust__header reveal" ref={ref}>
          <span className="eyebrow eyebrow--light">What to Know</span>
          <h2 className="section-heading section-heading--light" id="trust-heading">
            A few things worth knowing
          </h2>
          <p className="section-subheading section-subheading--light trust__subheading">
            Honest about what this registration is and what it is not.
          </p>
        </div>

        <div className="trust__grid">
          {trustPoints.map((point, i) => {
            const Icon = iconMap[point.icon] ?? ShieldOff;
            return (
              <div className="trust__item" key={i}>
                <div className="trust__item-icon" aria-hidden="true">
                  <Icon size={20} strokeWidth={1.75} />
                </div>
                <div className="trust__item-content">
                  <h3 className="trust__item-heading">{point.heading}</h3>
                  <p className="trust__item-body">{point.body}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
