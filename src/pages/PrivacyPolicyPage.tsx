import './LegalPage.css';

export function PrivacyPolicyPage() {
  const effectiveDate = '1 June 2026';

  return (
    <main className="legal-page" id="main-content">
      <div className="container">
        <div className="legal-page__content">
          <nav className="legal-page__breadcrumb" aria-label="Breadcrumb">
            <a href="/">Home</a>
            <span aria-hidden="true"> / </span>
            <span aria-current="page">Privacy Policy</span>
          </nav>

          <h1 className="legal-page__heading">Privacy Policy</h1>
          <p className="legal-page__date">Effective date: {effectiveDate}</p>

          <section aria-labelledby="pp-intro">
            <h2 id="pp-intro">1. About This Policy</h2>
            <p>
              This Privacy Policy describes how <strong>SKILLS LINK LTD</strong>, a company incorporated in England and Wales, operating the Flexi Path platform (<strong>"Flexi Path"</strong>, <strong>"we"</strong>,{' '}
              <strong>"us"</strong>, <strong>"our"</strong>), collects, uses, discloses and manages
              personal data in accordance with the Singapore Personal Data Protection Act 2012
              (No. 26 of 2012) (<strong>"PDPA"</strong>) and its subsidiary legislation.
            </p>
            <p>
              This policy applies to personal data collected through the Flexi Path website and the
              employer partner role category registration form located at this website.
            </p>
            <p>
              By submitting the registration form on this website, you acknowledge that you have
              read and understood this Privacy Policy and consent to the collection, use and
              disclosure of your personal data as described herein.
            </p>
          </section>

          <section aria-labelledby="pp-data-collected">
            <h2 id="pp-data-collected">2. Personal Data We Collect</h2>
            <p>
              We collect the following categories of personal data when you submit the registration
              form on this website:
            </p>
            <ul className="legal-page__list">
              <li>Full name</li>
              <li>Email address</li>
              <li>Mobile phone number</li>
              <li>Preferred contact method</li>
              <li>Role category interests (the types of roles you indicate interest in)</li>
              <li>Work eligibility status in Singapore</li>
            </ul>
            <p>
              We do not collect NRIC numbers, passport numbers, bank account details, financial
              information, date of birth, religion, race, marital status, health information or
              other sensitive personal data through this registration process.
            </p>
            <p>
              We collect personal data only when voluntarily provided by you through the
              registration form. You are not required to provide personal data to browse this
              website, but submission of the registration form requires the personal data fields
              marked as required.
            </p>
          </section>

          <section aria-labelledby="pp-purposes">
            <h2 id="pp-purposes">3. Purposes for Collection, Use and Disclosure</h2>
            <p>
              We collect, use and may disclose your personal data for the following purposes:
            </p>
            <ul className="legal-page__list">
              <li>
                <strong>Profile review:</strong> To review your submitted profile against available
                employer partner role categories to identify possible areas of fit.
              </li>
              <li>
                <strong>Follow-up communication:</strong> To contact you regarding the outcome of
                the profile review, using the contact details and preferred contact method you
                provided.
              </li>
              <li>
                <strong>Employer partner referral:</strong> Where a possible fit between your
                profile and an available employer partner category is identified, and subject to
                the consent you have provided, to refer your personal data to the relevant employer
                partner for their independent review and consideration.
              </li>
              <li>
                <strong>Service administration:</strong> To manage and administer your registration,
                respond to your enquiries and maintain records as required.
              </li>
              <li>
                <strong>Legal and compliance:</strong> To comply with applicable laws, regulations
                and legal obligations.
              </li>
            </ul>
            <p>
              We will not use or disclose your personal data for purposes other than those described
              above, or for purposes that you have not consented to, without your prior consent or
              as permitted or required by applicable law.
            </p>
          </section>

          <section aria-labelledby="pp-disclosure">
            <h2 id="pp-disclosure">4. Disclosure to Third Parties</h2>
            <p>
              Your personal data may be disclosed to the following categories of recipients:
            </p>
            <ul className="legal-page__list">
              <li>
                <strong>Employer partners:</strong> Where a possible fit is identified and subject
                to your consent, your personal data may be shared with a relevant employer partner
                for their independent review. Employer partners are independent organisations.
                Flexi Path is not responsible for the data handling practices of employer partners
                once personal data has been shared with them pursuant to your consent. You should
                review the privacy policies of any employer partner who contacts you.
              </li>
              <li>
                <strong>Service providers:</strong> We may engage third party service providers
                (such as technology platforms, hosting providers and communication services) to
                assist us in operating this website and managing registrations. These service
                providers are contractually bound to handle personal data only in accordance with
                our instructions and applicable law.
              </li>
              <li>
                <strong>Legal authorities:</strong> We may disclose personal data to regulatory
                authorities, law enforcement or courts where required by applicable law or legal
                process.
              </li>
            </ul>
            <p>
              We do not sell, rent or trade your personal data to any third party for their own
              marketing or commercial purposes.
            </p>
          </section>

          <section aria-labelledby="pp-retention">
            <h2 id="pp-retention">5. Retention of Personal Data</h2>
            <p>
              We retain your personal data for a period of <strong>12 months</strong> from the
              date of submission, unless a longer retention period is required or permitted by
              applicable law, or unless you request deletion of your data earlier in accordance
              with Section 7 of this policy.
            </p>
            <p>
              After the retention period has elapsed, or upon a valid deletion request, we will
              take reasonable steps to destroy or anonymise your personal data in a secure manner.
            </p>
          </section>

          <section aria-labelledby="pp-security">
            <h2 id="pp-security">6. Protection of Personal Data</h2>
            <p>
              We implement reasonable and appropriate organisational and technical security
              arrangements to protect your personal data from unauthorised access, collection,
              use, disclosure, copying, modification, disposal or similar risks.
            </p>
            <p>
              However, no method of transmission over the internet or method of electronic storage
              is completely secure. While we endeavour to protect your personal data, we cannot
              guarantee its absolute security.
            </p>
          </section>

          <section aria-labelledby="pp-rights">
            <h2 id="pp-rights">7. Your Rights Under the PDPA</h2>
            <p>
              Under the PDPA, you have the right to:
            </p>
            <ul className="legal-page__list">
              <li>
                <strong>Access:</strong> Request access to personal data we hold about you.
              </li>
              <li>
                <strong>Correction:</strong> Request correction of personal data we hold about you
                that is inaccurate, incomplete or misleading.
              </li>
              <li>
                <strong>Withdrawal of consent:</strong> Withdraw your consent to the collection,
                use or disclosure of your personal data at any time by contacting us as described
                below. Withdrawal of consent will not affect the lawfulness of any use or disclosure
                based on consent before its withdrawal. Please note that withdrawing consent may
                mean we are unable to continue processing your registration.
              </li>
              <li>
                <strong>Data portability:</strong> In certain circumstances under the PDPA, request
                that your personal data be transmitted to another organisation in a commonly used
                machine-readable format.
              </li>
            </ul>
            <p>
              To exercise any of these rights, please contact us at the address provided in
              Section 9 of this policy. We will respond to your request within a reasonable
              timeframe and in accordance with the PDPA.
            </p>
          </section>

          <section aria-labelledby="pp-cookies">
            <h2 id="pp-cookies">8. Cookies and Website Analytics</h2>
            <p>
              This website may use cookies and similar tracking technologies to support website
              functionality and analytics. Cookies are small data files stored on your device.
            </p>
            <p>
              You may configure your browser to refuse all cookies or to alert you when cookies
              are being sent. Disabling cookies may affect the functionality of certain features
              of this website.
            </p>
            <p>
              We may use third party analytics services (such as Google Analytics) to collect
              anonymised information about how visitors use this website. This information is used
              to improve the website and does not identify individual users.
            </p>
          </section>

          <section aria-labelledby="pp-contact">
            <h2 id="pp-contact">9. Contact and Data Protection Enquiries</h2>
            <p>
              For any enquiries, requests or complaints regarding the handling of your personal
              data, or to exercise your rights under the PDPA, please contact our data protection
              representative:
            </p>
            <p>
              <strong>Data Protection Contact — Flexi Path</strong><br />
              Email: <a href="mailto:privacy@flexipath.com">privacy@flexipath.com</a><br />
              SKILLS LINK LTD<br />
              681 Hougang Avenue 8, Singapore 530681
            </p>
            <p>
              You also have the right to lodge a complaint with the Personal Data Protection
              Commission of Singapore (PDPC) if you believe your personal data has been handled
              in breach of the PDPA. The PDPC can be contacted at{' '}
              <a href="https://www.pdpc.gov.sg" target="_blank" rel="noopener noreferrer">
                www.pdpc.gov.sg
              </a>.
            </p>
          </section>

          <section aria-labelledby="pp-updates">
            <h2 id="pp-updates">10. Updates to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time to reflect changes in our
              practices, legal requirements or operational requirements. The updated policy will
              be posted on this page with a revised effective date. We encourage you to review
              this policy periodically.
            </p>
            <p>
              Where changes are material, we will make reasonable efforts to notify you through
              the contact details you have provided.
            </p>
          </section>

          <div className="legal-page__back">
            <a href="/" className="btn btn--secondary btn--sm">← Back to Home</a>
          </div>
        </div>
      </div>
    </main>
  );
}
