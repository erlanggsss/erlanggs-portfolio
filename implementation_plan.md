# Portfolio Redesign Implementation Plan

This plan outlines the end-to-end process for redesigning the portfolio to match the provided layout. The goal is to create a minimalist, premium-feeling web experience using Next.js, Tailwind CSS, and Framer Motion. 

**All content will be abstracted into a central configuration file (`app/constants.js`) so you can easily update text, projects, and experience without touching the component code.**

## User Review Required
> [!IMPORTANT]
> Please review this plan. Once approved, I will create a task list and begin executing the code changes.

## Open Questions
- What font family would you prefer to use? (I recommend `Inter` or `Geist` for this clean look).
- Do you want the "moon" icon in the navbar to actually toggle between Light and Dark mode? (Highly recommended).

## Proposed Changes

### 1. Data Abstraction (Making Content Adjustable)
- **`app/constants.js`**
  - [MODIFY] Add centralized objects/arrays for:
    - Hero Section (Headline, Subtext).
    - About Section (Description, Tech Stack array).
    - Experience Section (Timeline array with dates, roles, companies, descriptions).
    - Certificates (Array of strings).
    - Projects (Array of objects containing Title, Description, Stack, Link).

### 2. Foundation & Global Styles
- **`app/globals.css`**
  - [MODIFY] Update CSS variables to support Light and Dark mode tokens (backgrounds, text colors, borders).
  - [MODIFY] Ensure base typography and styles match the minimalist aesthetic.
- **`tailwind.config.mjs`**
  - [MODIFY] Ensure `darkMode: 'class'` is enabled.
  - [MODIFY] Add custom colors or font families if necessary.
- **`app/layout.js`**
  - [MODIFY] Wrap the app in a Theme Provider (e.g., `next-themes`).
  - [MODIFY] Load the chosen font family globally.

### 3. Main Page Structure
- **`app/page.js`**
  - [MODIFY] Restructure the main layout to include the redesigned sections sequentially (Hero, About, Experience, Projects), passing data from `constants.js` as props.

---

### 4. Components Redesign
*All components will be refactored to accept data as props from `constants.js`.*

#### Navbar & Footer
- **`app/components/Navbar.jsx`**
  - [MODIFY] Redesign to feature minimal text links (Home, About, Experience, Project).
  - [MODIFY] Add right-side icons (Theme Toggle, Open to Work badge).
- **`app/components/Footer.jsx`**
  - [MODIFY] Minimal layout with social icons on the left and copyright text on the right.

#### Sections
- **`app/components/Header.jsx` (Hero Section)**
  - [MODIFY] Large bold typography for the intro, populated from constants.
  - [MODIFY] Social link chips (LinkedIn, Email, GitHub).
  - [MODIFY] Profile image with custom rounded corners.
- **`app/components/About.jsx`**
  - [MODIFY] Add the section divider line (`--- ABOUT SECTION ---`).
  - [MODIFY] Text layout and "Tech Stack" badge list, dynamically mapped from constants.
- **`app/components/Experience.jsx`**
  - [NEW/MODIFY] Timeline UI for work/cohorts, dynamically mapped.
  - [NEW/MODIFY] Certificates bulleted list.
- **`app/components/Project.jsx`**
  - [MODIFY] Redesign the project cards to include the `01`, `02` numbering, minimalist borders, and tech stack chips mapped from constants.

---

### 5. Animations & Interactivity
- Utilize `framer-motion` across components to add:
  - Fade-in and slight vertical translation on scroll.
  - Hover effects on project links, tech stack badges, and social buttons.

## Verification Plan

### Automated/Local Tests
- Run `npm run dev` to verify the application builds without errors.

### Manual Verification
- **Content Updatability**: Change a string in `constants.js` and verify it updates in the UI seamlessly.
- **Responsiveness**: Verify that the Hero section stacks correctly on mobile and that the Experience timeline is readable on small screens.
- **Dark Mode**: Toggle the theme and verify all text, borders, and backgrounds adjust correctly.
