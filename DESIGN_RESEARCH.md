# Design Research — Align Nimbly Singapore Landing Page

## Overview

Research conducted to identify effective design patterns for recruitment-service, staffing-agency, and career-platform landing pages before beginning implementation. All design decisions are original; no template, layout, illustration, source code, or brand identity has been copied.

---

## 1. Reference Websites and Design Patterns Studied

### 1.1 Manpower Singapore / Robert Half Singapore
**Pattern identified:** Clean split-hero layout with a profession-forward headline and a short supporting statement. Sticky header with minimal navigation items. Trust indicators placed near the primary CTA. Strong typographic hierarchy using a single-weight sans-serif family. Subtle background colour shifts between sections to create rhythm without borders.

### 1.2 Recruit Express (Singapore)
**Pattern identified:** Category-first content structure. Role categories surfaced near the top fold so candidates immediately understand scope. Process steps presented as a horizontal icon row on desktop and collapsing to vertical on mobile. Footer with a visible compliance disclaimer.

### 1.3 Hays Asia Careers
**Pattern identified:** Alternating content blocks (text-left/image-right then image-left/text-right) to create visual rhythm without using identical card grids. Use of a dark-navy section for a trust or commitment statement — high contrast increases visual weight and seriousness. Inline accordion for FAQ without navigating away from the page.

### 1.4 Glassdoor / Indeed (product landing pages)
**Pattern identified:** Form placement after establishing credibility. Primary CTA repeated at multiple scroll depths (hero, mid-page, bottom). Progress-indicator approach to multi-step forms to reduce perceived effort. Inline validation with colour-coded field states (neutral → focus → success/error).

### 1.5 LinkedIn Talent Solutions landing pages
**Pattern identified:** Eyebrow text above section headings to provide context without lengthening the heading itself. Card grids for role categories with a clear selected/unselected toggle state. Generous padding within cards. Muted icon colour contrasting with a stronger selected-state accent.

### 1.6 Webflow recruitment agency templates (Elanzar, Staffly patterns observed)
**Pattern identified:** Editorial asymmetric hero layout using a large headline column on the left and an image or stat block on the right. Avoidance of full-width image backgrounds at the hero, which often obscure text contrast. Section eyebrow labels in small caps or light uppercase.

### 1.7 Framer "Careers" and "Agency" template category
**Pattern identified:** Micro-animation on scroll-reveal done through CSS transitions rather than large animation libraries — keeps bundle size low and respects prefers-reduced-motion. Step-indicator timelines rendered as a CSS flexbox row with connector lines rather than image assets.

### 1.8 Dribbble exploration — "Recruitment dashboard / candidate portal UI"
**Pattern identified:** Role-category chips with multi-select behaviour using toggle states. Selected categories shown with a filled background and a tick icon. Unselected categories shown with a border-only treatment. Smooth CSS transition between states.

### 1.9 Awwwards — "Human resources website" category
**Pattern identified:** Full-bleed section breaks using a single deep navy or charcoal section mid-page to anchor the trust and safety content visually. White or light-cream body, one accent colour for interactive elements, charcoal for body copy.

### 1.10 Behance — "Job portal app UI / Singapore career platform"
**Pattern identified:** Responsive category grid that transitions from a 3-column layout on desktop to 2-column on tablet and 1-column stacked on mobile. Category cards include an icon, title, short description, and a single action element. No salary, vacancy count, or "hiring now" labels on category cards.

---

## 2. Patterns That Should Not Be Used

| Pattern | Reason to avoid |
|---|---|
| Countdown timers | Create false urgency; not appropriate for a compliant recruitment platform |
| "Limited spots available" labels | Unverifiable; may mislead candidates |
| Fake testimonials or star ratings | Fabricated social proof creates trust and compliance risk |
| Partner/client logo rows | No verified partners to display; logos imply endorsement |
| Government emblem or "MOM-approved" badges | Unverified claim; regulatory risk in Singapore |
| Glassmorphism hero overlays | Reduces text contrast; accessibility issues |
| Parallax scrolling backgrounds | Reduces readability; can cause motion sickness |
| Large decorative gradient blobs | Distracting; associated with crypto/Web3 aesthetics |
| Salary range displays on category cards | Unconfirmed; must be confirmed by employer partner |
| "Hiring now" or "Urgent" urgency labels | Unverified; pressure tactic |
| Full-width autoplay video backgrounds | Performance and accessibility issues |
| Excessive floating card stacks | Reduces readability; creates visual noise |
| Dark-pattern pre-selected consent checkboxes | Non-compliant with PDPA and ethical standards |

---

## 3. Final Design Direction Selected for Align Nimbly

**Direction: "Editorial Clarity"**

An editorial, structured layout built on strong typographic hierarchy, purposeful white space, and a restrained colour system. The design avoids decorative excess and relies on content organisation, section rhythm, and clear visual hierarchy to guide candidates through the page.

**Key characteristics:**

- **Hero:** Asymmetric split layout — large headline and CTA column on the left, carefully selected placeholder image on the right. Trust note visible below CTA without scrolling.
- **Section rhythm:** Alternating light cream (#F9F7F4) and white (#FFFFFF) section backgrounds with one dark navy section (Trust & Safety) as the visual anchor.
- **Colour system:** Deep navy (#1B2B4B) as the primary brand colour; warm teal (#0D9488) as the interactive accent; off-white (#F9F7F4) as the background; charcoal (#374151) for body text; mid-grey (#6B7280) for secondary text.
- **Typography:** Plus Jakarta Sans as the primary font. Clean, contemporary, legible at all sizes. Responsive clamp() sizing for headings.
- **Icons:** Lucide React — lightweight, consistent stroke-weight line icons. No heavy icon fonts.
- **Cards:** Moderate border-radius (12px), minimal shadow (elevation-1), visible border in unselected state, filled accent background in selected state. No excessive drop shadows.
- **Animations:** CSS transitions only, 150–350ms. Scroll-reveal via Intersection Observer. All animations respect `prefers-reduced-motion`.
- **Form:** Clear above-the-label pattern. Required/optional clearly marked. Inline validation. Accessible error messages with role="alert".
- **Process timeline:** Horizontal numbered connector on desktop; vertical steps on mobile. Step numbers in navy circle badges.

---

## 4. Why This Direction Is Suitable for Singapore Candidates

Singapore candidates, particularly in the service, retail, hospitality, logistics, and administration sectors, interact with a wide range of digital platforms including government portals (Singpass, MyCareersFuture), international job boards (JobStreet, Indeed), and staffing-agency sites.

The editorial-clarity direction is appropriate because:

1. **Trust and transparency are primary expectations.** Singapore's workforce is familiar with the Ministry of Manpower (MOM) and PDPA frameworks. Candidates expect clear disclosure of data handling, process steps, and limitations. A clean, professional layout without hype builds credibility.
2. **Diverse digital literacy.** The candidate audience spans multiple age groups and English proficiency levels. Large, clear typography and plain language reduce comprehension barriers.
3. **Mobile-first priority.** Most Singapore candidates in service and operational roles will arrive on mobile. The layout is designed content-first on mobile with generous tap targets and a simplified navigation.
4. **Anti-scam awareness is high.** Singapore's Anti-Scam Centre campaigns have raised candidate alertness to fake job advertisements. A design that avoids urgency tactics, fake logos, unverified badges, and income promises is both legally prudent and trust-building.
5. **Professional restraint over visual excitement.** The target roles (customer support, retail, logistics, hospitality, admin) are practical and professional. Candidates respond to a straightforward, efficient experience rather than an overly stylised or promotional aesthetic.

---

## 5. Originality Confirmation

This design is original. No Envato template, ThemeForest theme, Framer template, Webflow template, or existing recruitment website layout has been copied. Design patterns have been studied for inspiration only. All component architecture, colour system, typography choices, layout proportions, spacing, and visual treatments have been designed from first principles for Align Nimbly's specific use case, market, and compliance requirements.
