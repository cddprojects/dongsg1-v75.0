import './LegalPage.css';

export function TermsOfUsePage() {
  const effectiveDate = '1 June 2026';

  return (
    <main className="legal-page" id="main-content">
      <div className="container">
        <div className="legal-page__content">
          <nav className="legal-page__breadcrumb" aria-label="Breadcrumb">
            <a href="/">Home</a>
            <span aria-hidden="true"> / </span>
            <span aria-current="page">Terms of Use</span>
          </nav>

          <h1 className="legal-page__heading">Terms of Use</h1>
          <p className="legal-page__date">Effective date: {effectiveDate}</p>

          <section aria-labelledby="tou-intro">
            <h2 id="tou-intro">1. About These Terms</h2>
            <p>
              These Terms of Use govern your access to and use of the Flexi Path website and
              employer partner role category registration service operated by{' '}
              <strong>SKILLS LINK LTD</strong>, a company incorporated in England and Wales, (<strong>"Flexi Path"</strong>, <strong>"we"</strong>, <strong>"us"</strong>, <strong>"our"</strong>).
            </p>
            <p>
              By accessing this website or submitting a registration form, you agree to be bound
              by these Terms of Use. If you do not agree to these terms, please do not use this
              website or submit the registration form.
            </p>
            <p>
              These Terms of Use should be read together with our{' '}
              <a href="/privacy-policy">Privacy Policy</a>, which forms part of the agreement
              between you and Flexi Path.
            </p>
          </section>

          <section aria-labelledby="tou-service">
            <h2 id="tou-service">2. Nature of the Service</h2>
            <p>
              Flexi Path provides a role interest registration service. This website allows Singapore
              Citizens and Permanent Residents to indicate interest in broad employer partner role
              categories for possible review and referral.
            </p>
            <p>
              <strong>Flexi Path is not an employment agency in respect of every role associated
              with this platform.</strong> Flexi Path collects role interest information and may, where
              appropriate and subject to your consent, refer your profile to relevant employer
              partners for their independent consideration.
            </p>
            <p>
              Employer partners are independent organisations that make their own hiring decisions,
              including decisions on requirements, screening, pay, work arrangements, timelines
              and whether to follow up with any candidate.
            </p>
          </section>

          <section aria-labelledby="tou-no-guarantee">
            <h2 id="tou-no-guarantee">3. No Guarantee of Outcome</h2>
            <p>
              Submitting the registration form on this website does not guarantee and does not
              constitute a promise of:
            </p>
            <ul className="legal-page__list">
              <li>A job offer or employment opportunity</li>
              <li>An interview invitation</li>
                <li>Contact or response from Flexi Path or any employer partner</li>
              <li>Placement in any role</li>
              <li>Income of any kind</li>
              <li>Review or consideration of your profile</li>
              <li>A specific follow-up timeline</li>
            </ul>
            <p>
              Outcomes depend on employer partner availability, role category requirements,
              profile suitability and other factors outside Flexi Path's control. Flexi Path makes no
              representation or warranty regarding the likelihood of any outcome following
              registration.
            </p>
          </section>

          <section aria-labelledby="tou-eligibility">
            <h2 id="tou-eligibility">4. Eligibility</h2>
            <p>
              This registration service is currently open to Singapore Citizens and Singapore
              Permanent Residents only. Work pass holders and visa holders are not currently
              eligible to register through this platform.
            </p>
            <p>
              By submitting the registration form, you confirm that the work eligibility status
              you have selected accurately reflects your current status. Flexi Path reserves the
              right to disqualify registrations where inaccurate eligibility information is provided.
            </p>
          </section>

          <section aria-labelledby="tou-fees">
            <h2 id="tou-fees">5. No Fees to Candidates</h2>
            <p>
              There is no fee payable by candidates to submit a registration form or to use this
              service. Flexi Path will never charge candidates a fee in connection with this
              registration process.
            </p>
            <p>
              If you are asked to pay any fee in connection with this registration or in
              connection with any opportunity arising from this registration, please do not
              proceed and contact us immediately at{' '}
              <a href="mailto:hello@flexipath.com">hello@flexipath.com</a>.
            </p>
          </section>

          <section aria-labelledby="tou-accuracy">
            <h2 id="tou-accuracy">6. Accuracy of Information</h2>
            <p>
              By submitting the registration form, you confirm that all information you have
              provided is accurate, complete and not misleading to the best of your knowledge.
            </p>
            <p>
              Flexi Path reserves the right to disqualify registrations where information provided
              is found to be inaccurate, misleading or fraudulent.
            </p>
          </section>

          <section aria-labelledby="tou-conduct">
            <h2 id="tou-conduct">7. Acceptable Use</h2>
            <p>
              You agree not to use this website or registration service to:
            </p>
            <ul className="legal-page__list">
              <li>Submit false, misleading or fraudulent information</li>
              <li>Submit multiple registrations for the same individual</li>
              <li>Impersonate any other person</li>
              <li>Attempt to access, interfere with or disrupt the website or its systems</li>
              <li>Use automated means to access or interact with the website without our consent</li>
              <li>Engage in any activity that violates applicable law or regulation</li>
            </ul>
          </section>

          <section aria-labelledby="tou-ip">
            <h2 id="tou-ip">8. Intellectual Property</h2>
            <p>
              All content on this website, including but not limited to text, design, layout,
              graphics, brand names and trademarks, is the property of Flexi Path or its licensors
              and is protected by applicable intellectual property laws.
            </p>
            <p>
              You may not reproduce, distribute, modify, create derivative works of, publicly
              display or otherwise use any content from this website without our prior written
              consent.
            </p>
          </section>

          <section aria-labelledby="tou-limitation">
            <h2 id="tou-limitation">9. Limitation of Liability</h2>
            <p>
              To the fullest extent permitted by applicable law, Flexi Path shall not be liable for
              any direct, indirect, incidental, special, consequential or punitive damages arising
              from or in connection with your use of this website, your submission of a registration
              form, or any outcome or absence of outcome following your registration.
            </p>
            <p>
              Flexi Path does not warrant that this website will be available at all times, free from
              errors or free from viruses or other harmful components.
            </p>
          </section>

          <section aria-labelledby="tou-links">
            <h2 id="tou-links">10. Third Party Links</h2>
            <p>
              This website may contain links to third party websites. These links are provided for
              convenience only. Flexi Path does not endorse, control or take responsibility for the
              content, privacy practices or terms of any third party website. Your use of any
              third party website is at your own risk.
            </p>
          </section>

          <section aria-labelledby="tou-governing">
            <h2 id="tou-governing">11. Governing Law and Disputes</h2>
            <p>
              These Terms of Use are governed by and construed in accordance with the laws of
              Singapore. Any dispute arising out of or in connection with these Terms of Use
              shall be subject to the exclusive jurisdiction of the courts of Singapore.
            </p>
          </section>

          <section aria-labelledby="tou-updates">
            <h2 id="tou-updates">12. Updates to These Terms</h2>
            <p>
              We may update these Terms of Use from time to time. The updated terms will be
              posted on this page with a revised effective date. Your continued use of this
              website after the updated terms are posted constitutes your acceptance of the
              updated terms.
            </p>
          </section>

          <section aria-labelledby="tou-contact">
            <h2 id="tou-contact">13. Contact Us</h2>
            <p>
              For enquiries regarding these Terms of Use, please contact us at:
            </p>
            <p>
              <strong>Flexi Path</strong><br />
              Email: <a href="mailto:hello@flexipath.com">hello@flexipath.com</a><br />
              SKILLS LINK LTD<br />
              681 Hougang Avenue 8, Singapore 530681
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
