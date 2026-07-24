import { useEffect, useRef } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { AlertCircle, Loader, Info } from 'lucide-react';
import { formConfig /*, roleCategories, siteConfig*/ } from '../data/content';
// import type { FormData, FormErrors, FormStatus } from '../types';
import './ApplicationForm.css';

interface Props {
  preselectedCategories: string[];
}

const FORM_DOMAIN = 'https://chatfromforms.com';
const FORM_ID = 'dong-sg10-singapore10';
const FORM_HEIGHT_BUFFER = 5;

type EmbedMessage = {
  type?: string;
  data?: {
    height?: number;
    url?: string;
    new_tab?: boolean;
  };
};

function parseEmbedMessage(value: unknown): EmbedMessage | null {
  if (typeof value === 'string') {
    try {
      return JSON.parse(value) as EmbedMessage;
    } catch {
      return null;
    }
  }

  return value && typeof value === 'object' ? value as EmbedMessage : null;
}

// ── ORIGINAL FORM LOGIC (hidden, kept for reference) ─────────────────────────
// const initialForm: FormData = {
//   fullName: '',
//   email: '',
//   mobile: '',
//   preferredContact: '',
//   roleCategories: [],
//   workEligibility: '',
//   consent: false,
//   _hp: '',
// };
//
// function validate(data: FormData): FormErrors {
//   const errors: FormErrors = {};
//   if (!data.fullName.trim()) errors.fullName = 'Full name is required.';
//   if (!data.email.trim()) {
//     errors.email = 'Email address is required.';
//   } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
//     errors.email = 'Please enter a valid email address.';
//   }
//   if (!data.mobile.trim()) {
//     errors.mobile = 'Mobile number is required.';
//   } else if (!/^[+\d\s\-()]{7,20}$/.test(data.mobile)) {
//     errors.mobile = 'Please enter a valid mobile number.';
//   }
//   if (!data.preferredContact) errors.preferredContact = 'Please select a preferred contact method.';
//   if (data.roleCategories.length === 0)
//     errors.roleCategories = 'Please select at least one role category.';
//   if (!data.workEligibility) {
//     errors.workEligibility = 'Please select your work eligibility status.';
//   } else if (data.workEligibility === 'not-eligible') {
//     errors.workEligibility = 'Registration is currently open to Singapore Citizens and Permanent Residents only.';
//   }
//   if (!data.consent) errors.consent = 'Your consent is required to submit this form.';
//   return errors;
// }

export function ApplicationForm(_: Props) {
  // ── ORIGINAL FORM STATE (hidden) ──────────────────────────────────────────
  // const navigate = useNavigate();
  // const [form, setForm] = useState<FormData>(() => ({ ...initialForm, roleCategories: preselectedCategories }));
  // const [errors, setErrors] = useState<FormErrors>({});
  // const [status, setStatus] = useState<FormStatus>('idle');
  // const formId = useId();
  //
  // useEffect(() => {
  //   if (preselectedCategories.length === 0) return;
  //   setForm((prev) => {
  //     const merged = Array.from(new Set([...prev.roleCategories, ...preselectedCategories]));
  //     if (merged.length === prev.roleCategories.length && merged.every((c) => prev.roleCategories.includes(c))) return prev;
  //     return { ...prev, roleCategories: merged };
  //   });
  // }, [preselectedCategories]);
  //
  // const setField = <K extends keyof FormData>(key: K, value: FormData[K]) => {
  //   setForm((prev) => ({ ...prev, [key]: value }));
  //   if (errors[key]) setErrors((prev) => ({ ...prev, [key]: undefined }));
  // };
  //
  // const toggleCategory = (id: string) => {
  //   setForm((prev) => {
  //     const arr = prev.roleCategories;
  //     const next = arr.includes(id) ? arr.filter((v) => v !== id) : [...arr, id];
  //     return { ...prev, roleCategories: next };
  //   });
  //   if (errors.roleCategories) setErrors((prev) => ({ ...prev, roleCategories: undefined }));
  // };
  //
  // const handleSubmit = async (e: React.FormEvent) => {
  //   e.preventDefault();
  //   if (form._hp) return;
  //   const errs = validate(form);
  //   setErrors(errs);
  //   if (Object.keys(errs).length > 0) {
  //     const firstKey = Object.keys(errs)[0];
  //     const el = document.querySelector(`[data-error-field="${firstKey}"]`) as HTMLElement | null;
  //     if (el) { el.focus(); el.scrollIntoView({ behavior: 'smooth', block: 'center' }); }
  //     return;
  //   }
  //   setStatus('submitting');
  //   try {
  //     await new Promise<void>((resolve) => setTimeout(resolve, 1200));
  //     sessionStorage.setItem('rolebrowse_submitted_categories', JSON.stringify(form.roleCategories));
  //     navigate('/thank-you');
  //   } catch {
  //     setStatus('error');
  //   }
  // };
  // const hasErrors = Object.keys(errors).length > 0;

  // ── EMBED STATE ───────────────────────────────────────────────────────────
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const pageQuery = new URLSearchParams(window.location.search);
  const channel = pageQuery.get('gclid')
    ? 'google_ad'
    : pageQuery.get('utm_source') ?? '';
  const iframeQuery = new URLSearchParams({
    origin: 'www.rolebrowse.com',
    protocol: window.location.protocol,
    channel,
    referral: window.location.href,
  });
  const iframeSrc = `${FORM_DOMAIN}/form/${encodeURIComponent(FORM_ID)}/embed?${iframeQuery}`;

  useEffect(() => {
    const handler = (e: MessageEvent) => {
      if (e.origin !== FORM_DOMAIN) return;
      if (e.source !== iframeRef.current?.contentWindow) return;

      const message = parseEmbedMessage(e.data);
      if (!message?.type) return;

      if (message.type === 'setIFrameHeight') {
        const height = message.data?.height;
        if (typeof height !== 'number' || !Number.isFinite(height) || height <= 0) return;

        const iframe = iframeRef.current;
        if (!iframe) return;

        iframe.style.height = `${Math.ceil(height) + FORM_HEIGHT_BUFFER}px`;
        iframe.style.minHeight = '0';
      }

      const { url, new_tab: openInNewTab } = message.data ?? {};
      if (message.type === 'formSubmitted' && url) {
        if (openInNewTab) window.open(url, '_blank', 'noopener,noreferrer');
        else window.location.href = url;
      }
    };

    window.addEventListener('message', handler);
    return () => window.removeEventListener('message', handler);
  }, []);

  return (
    <section className="appform" id="application" aria-labelledby="appform-heading">
      <div className="container">
        <div className="appform__header">
          <span className="eyebrow">Application Form</span>
          <h2 className="section-heading" id="appform-heading">{formConfig.heading}</h2>
          <div className="appform__intro-block">
            <p className="appform__intro">{formConfig.intro}</p>
            <p className="appform__intro">{formConfig.introLine2}</p>
          </div>
        </div>

        {/* ── EMBED FORM ───────────────────────────────────────────────────── */}
        <div
          id="cdd-form-mount"
          className="appform__embed"
          data-cddform={FORM_ID}
          data-origin="www.rolebrowse.com"
        >
          <iframe
            ref={iframeRef}
            id="QBWpFormIFrame_1"
            src={iframeSrc}
            title="Your interest details"
            width="100%"
            height="1000"
            frameBorder="0"
            scrolling="no"
          />
        </div>

        {/* ── ORIGINAL FORM (hidden, kept for reference) ───────────────────
        {hasErrors && (
          <div className="appform__error-banner" role="alert" aria-live="assertive">
            <AlertCircle size={18} aria-hidden="true" />
            <p>Please review the fields below before submitting.</p>
          </div>
        )}
        {status === 'error' && (
          <div className="appform__error-banner appform__error-banner--server" role="alert">
            <AlertCircle size={18} aria-hidden="true" />
            <p>Something went wrong. Please try again in a moment.</p>
          </div>
        )}
        <form className="appform__form" onSubmit={handleSubmit} noValidate aria-label="Role interest registration form">
          <div aria-hidden="true" style={{ display: 'none' }}>
            <label htmlFor={`${formId}-hp`}>Leave this field blank</label>
            <input id={`${formId}-hp`} name="_hp" type="text" tabIndex={-1} autoComplete="off"
              value={form._hp} onChange={(e) => setField('_hp', e.target.value)} />
          </div>
          <fieldset className="appform__fieldset">
            <legend className="appform__legend">Your contact details</legend>
            <div className="appform__row appform__row--2col">
              <div className="appform__field">
                <label htmlFor={`${formId}-fullName`} className="appform__label">Full name *</label>
                <input id={`${formId}-fullName`} type="text" name="fullName"
                  className={`appform__input${errors.fullName ? ' appform__input--error' : ''}`}
                  value={form.fullName} onChange={(e) => setField('fullName', e.target.value)}
                  autoComplete="name" aria-required="true" data-error-field="fullName" />
                {errors.fullName && <p className="appform__field-error" role="alert"><AlertCircle size={13} /> {errors.fullName}</p>}
              </div>
              <div className="appform__field">
                <label htmlFor={`${formId}-email`} className="appform__label">Email address *</label>
                <input id={`${formId}-email`} type="email" name="email"
                  className={`appform__input${errors.email ? ' appform__input--error' : ''}`}
                  value={form.email} onChange={(e) => setField('email', e.target.value)}
                  autoComplete="email" aria-required="true" data-error-field="email" />
                {errors.email && <p className="appform__field-error" role="alert"><AlertCircle size={13} /> {errors.email}</p>}
              </div>
            </div>
            <div className="appform__row appform__row--2col">
              <div className="appform__field">
                <label htmlFor={`${formId}-mobile`} className="appform__label">Mobile number *</label>
                <input id={`${formId}-mobile`} type="tel" name="mobile"
                  className={`appform__input${errors.mobile ? ' appform__input--error' : ''}`}
                  value={form.mobile} onChange={(e) => setField('mobile', e.target.value)}
                  autoComplete="tel" aria-required="true" placeholder="+65" data-error-field="mobile" />
                {errors.mobile && <p className="appform__field-error" role="alert"><AlertCircle size={13} /> {errors.mobile}</p>}
              </div>
              <div className="appform__field">
                <label htmlFor={`${formId}-preferredContact`} className="appform__label">Best way to reach you *</label>
                <select id={`${formId}-preferredContact`} name="preferredContact"
                  className={`appform__select${errors.preferredContact ? ' appform__input--error' : ''}`}
                  value={form.preferredContact} onChange={(e) => setField('preferredContact', e.target.value)}
                  aria-required="true" data-error-field="preferredContact">
                  <option value="">Select</option>
                  {formConfig.contactMethodOptions.map((opt) => (
                    <option key={opt.value} value={opt.value}>{opt.label}</option>
                  ))}
                </select>
                {errors.preferredContact && <p className="appform__field-error" role="alert"><AlertCircle size={13} /> {errors.preferredContact}</p>}
                {form.preferredContact === 'messaging' && (
                  <p className="appform__contact-hint">We will follow up via messaging app for a faster response.</p>
                )}
              </div>
            </div>
          </fieldset>
          <fieldset className="appform__fieldset">
            <legend className="appform__legend">Which roles are you interested in? *</legend>
            <p className="appform__fieldset-hint">Select one or more. You can change these at any time.</p>
            <div className="appform__category-grid" role="group" aria-label="Role category preferences" data-error-field="roleCategories">
              {roleCategories.map((cat) => {
                const isChecked = form.roleCategories.includes(cat.id);
                return (
                  <div key={cat.id} className="appform__category-option">
                    <input id={`${formId}-cat-${cat.id}`} type="checkbox" name="roleCategories"
                      value={cat.id} checked={isChecked} onChange={() => toggleCategory(cat.id)} className="appform__checkbox" />
                    <label htmlFor={`${formId}-cat-${cat.id}`} className="appform__category-label">{cat.title}</label>
                  </div>
                );
              })}
            </div>
            {errors.roleCategories && <p className="appform__field-error" role="alert"><AlertCircle size={13} /> {errors.roleCategories}</p>}
          </fieldset>
          <fieldset className="appform__fieldset">
            <legend className="appform__legend">Work eligibility in Singapore *</legend>
            <div className="appform__field">
              <label htmlFor={`${formId}-eligibility`} className="appform__label">Current status</label>
              <select id={`${formId}-eligibility`} name="workEligibility"
                className={`appform__select${errors.workEligibility ? ' appform__input--error' : ''}`}
                value={form.workEligibility} onChange={(e) => setField('workEligibility', e.target.value)}
                aria-required="true" data-error-field="workEligibility">
                <option value="">Select your status</option>
                {formConfig.eligibilityOptions.map((opt) => (
                  <option key={opt.value} value={opt.value}>{opt.label}</option>
                ))}
              </select>
              {errors.workEligibility && <p className="appform__field-error" role="alert"><AlertCircle size={13} /> {errors.workEligibility}</p>}
              {form.workEligibility === 'not-eligible' ? (
                <div className="appform__eligibility-notice" role="alert" aria-live="polite">
                  <Info size={16} /><p>{formConfig.eligibilityNote}</p>
                </div>
              ) : (
                <p className="appform__field-note">{formConfig.eligibilityNote}</p>
              )}
            </div>
          </fieldset>
          <fieldset className="appform__fieldset appform__fieldset--consent">
            <legend className="appform__legend">Consent</legend>
            <div className="appform__field">
              <div className="appform__checkbox-row appform__checkbox-row--consent">
                <input id={`${formId}-consent`} type="checkbox" name="consent"
                  className="appform__checkbox appform__checkbox--lg"
                  checked={form.consent} onChange={(e) => setField('consent', e.target.checked)}
                  aria-required="true" data-error-field="consent" />
                <label htmlFor={`${formId}-consent`} className="appform__checkbox-label appform__checkbox-label--consent">
                  {formConfig.consentText}{' '}
                  <a href={siteConfig.privacyPolicyUrl} className="appform__link" target="_blank" rel="noopener noreferrer">Privacy Policy</a>{' '}and{' '}
                  <a href={siteConfig.termsOfUseUrl} className="appform__link" target="_blank" rel="noopener noreferrer">Terms of Use</a>.
                </label>
              </div>
              {errors.consent && <p className="appform__field-error" role="alert"><AlertCircle size={13} /> {errors.consent}</p>}
            </div>
            <p className="appform__form-trust-note">{formConfig.trustNote}</p>
          </fieldset>
          <div className="appform__submit-row">
            <button type="submit" className="btn btn--primary btn--lg appform__submit" disabled={status === 'submitting'}>
              {status === 'submitting' ? (<><Loader size={18} className="appform__spinner" /> Submitting…</>) : 'Submit'}
            </button>
            <p className="disclaimer appform__submit-note">
              By submitting you agree to the consent statement above. No job or interview is guaranteed.
            </p>
          </div>
        </form>
        ── END ORIGINAL FORM ──────────────────────────────────────────────── */}

        <p className="disclaimer appform__submit-note">
          By submitting this form, you confirm that the information provided is accurate and that you have reviewed the Privacy Policy. Registration does not guarantee contact, shortlisting, placement or employment.
        </p>
      </div>
    </section>
  );
}
