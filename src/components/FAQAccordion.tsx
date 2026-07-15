import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { faqs } from '../data/content';
import { useReveal } from '../hooks/useReveal';
import './FAQAccordion.css';

export function FAQAccordion() {
  const [openIds, setOpenIds] = useState<string[]>([]);
  const ref = useReveal();

  const toggle = (id: string) => {
    setOpenIds((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  };

  return (
    <section className="faq" id="faq" aria-labelledby="faq-heading">
      <div className="container">
        <div className="faq__header reveal" ref={ref}>
          <span className="eyebrow">FAQ</span>
          <h2 className="section-heading" id="faq-heading">
            Frequently asked questions
          </h2>
          <p className="section-subheading faq__subheading">
            Clear answers to common questions about Flexi Path and this application process.
          </p>
        </div>

        <div className="faq__list" role="list">
          {faqs.map((faq) => {
            const isOpen = openIds.includes(faq.id);
            return (
              <div className={`faq__item${isOpen ? ' faq__item--open' : ''}`} key={faq.id} role="listitem">
                <h3 className="faq__question-wrap">
                  <button
                    className="faq__question"
                    id={`${faq.id}-btn`}
                    aria-expanded={isOpen}
                    aria-controls={`${faq.id}-panel`}
                    onClick={() => toggle(faq.id)}
                    type="button"
                  >
                    <span>{faq.question}</span>
                    <span className="faq__icon" aria-hidden="true">
                      {isOpen ? <Minus size={18} /> : <Plus size={18} />}
                    </span>
                  </button>
                </h3>

                <div
                  id={`${faq.id}-panel`}
                  role="region"
                  aria-labelledby={`${faq.id}-btn`}
                  className="faq__answer"
                  hidden={!isOpen}
                >
                  <p className="faq__answer-text">{faq.answer}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
