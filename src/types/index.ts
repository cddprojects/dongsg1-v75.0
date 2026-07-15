export interface FormData {
  // Contact
  fullName: string;
  email: string;
  mobile: string;
  preferredContact: string;

  // Role Preferences
  roleCategories: string[];

  // Eligibility
  workEligibility: string;

  // Consent
  consent: boolean;

  // Honeypot (anti-spam — must remain empty)
  _hp: string;
}

export type FormErrors = Partial<Record<keyof FormData, string>>;

export type FormStatus = 'idle' | 'submitting' | 'success' | 'error';
