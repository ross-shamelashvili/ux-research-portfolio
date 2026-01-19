# UX Research Portfolio - Design & Architecture Plan

## Project Overview
A professional portfolio website for **Abby Shamelashvili**, a Master's level UX Researcher. The site will showcase UX research projects, methodologies, and professional experience.

---

## Design System

### Color Palette

#### Light Mode
| Role | Color | Hex |
|------|-------|-----|
| Primary | Teal | `#0D9488` |
| Primary Dark | Dark Teal | `#0F766E` |
| Primary Light | Light Teal | `#14B8A6` |
| Background | White | `#FFFFFF` |
| Surface | Light Gray | `#F8FAFC` |
| Text Primary | Slate 900 | `#0F172A` |
| Text Secondary | Slate 600 | `#475569` |
| Border | Slate 200 | `#E2E8F0` |
| Accent | Amber | `#F59E0B` |

#### Dark Mode
| Role | Color | Hex |
|------|-------|-----|
| Primary | Teal | `#14B8A6` |
| Primary Dark | Dark Teal | `#0D9488` |
| Background | Slate 950 | `#020617` |
| Surface | Slate 900 | `#0F172A` |
| Text Primary | Slate 50 | `#F8FAFC` |
| Text Secondary | Slate 400 | `#94A3B8` |
| Border | Slate 700 | `#334155` |

### Typography

| Element | Font | Size | Weight |
|---------|------|------|--------|
| Logo/Name | Inter | 24px | 600 |
| H1 | Inter | 48px/36px mobile | 700 |
| H2 | Inter | 36px/28px mobile | 600 |
| H3 | Inter | 24px/20px mobile | 600 |
| Body | Inter | 16px | 400 |
| Caption | Inter | 14px | 400 |
| Button | Inter | 14px | 500 |

### Spacing Scale
- xs: 4px
- sm: 8px
- md: 16px
- lg: 24px
- xl: 32px
- 2xl: 48px
- 3xl: 64px
- 4xl: 96px

### Border Radius
- sm: 4px
- md: 8px
- lg: 12px
- xl: 16px
- full: 9999px

---

## Layout Structure

### Header (Sticky)
```
┌─────────────────────────────────────────────────────────────┐
│  [AS] Abby Shamelashvili    Work  About  Blog  Contact  🌙  │
│       UX Researcher                                          │
└─────────────────────────────────────────────────────────────┘
```

### Homepage
```
┌─────────────────────────────────────────────────────────────┐
│                         HEADER                               │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│     👋 Hi, I'm Abby                                         │
│     UX Researcher passionate about understanding             │
│     user behavior and creating impactful experiences.        │
│                                                              │
│     [View My Work]  [Download CV]                           │
│                                                              │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│     Featured Work                          [Filter: All ▼]   │
│                                                              │
│  ┌──────────────────┐  ┌──────────────────┐                 │
│  │                  │  │                  │                 │
│  │   Project 1      │  │   Project 2      │                 │
│  │   Thumbnail      │  │   Thumbnail      │                 │
│  │                  │  │                  │                 │
│  │  Title           │  │  Title           │                 │
│  │  Brief desc...   │  │  Brief desc...   │                 │
│  │  [Methodology]   │  │  [Methodology]   │                 │
│  └──────────────────┘  └──────────────────┘                 │
│                                                              │
│  ┌──────────────────┐  ┌──────────────────┐                 │
│  │   Project 3      │  │   Project 4      │                 │
│  └──────────────────┘  └──────────────────┘                 │
│                                                              │
├─────────────────────────────────────────────────────────────┤
│                         FOOTER                               │
└─────────────────────────────────────────────────────────────┘
```

### Project Detail Page
```
┌─────────────────────────────────────────────────────────────┐
│                         HEADER                               │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│  ← Back to Work                                             │
│                                                              │
│  ┌───────────────────────────────────────────────────────┐  │
│  │                                                        │  │
│  │              HERO IMAGE / PROJECT VISUAL              │  │
│  │                                                        │  │
│  └───────────────────────────────────────────────────────┘  │
│                                                              │
│  Project Title                                              │
│  [User Research]  [Healthcare]  [2024]                     │
│                                                              │
│  ─────────────────────────────────────────────────────────  │
│                                                              │
│  Overview                                                   │
│  Lorem ipsum dolor sit amet...                              │
│                                                              │
│  ─────────────────────────────────────────────────────────  │
│                                                              │
│  Research Methodology                                       │
│  • Method 1: Description                                    │
│  • Method 2: Description                                    │
│                                                              │
│  ─────────────────────────────────────────────────────────  │
│                                                              │
│  Key Findings                                               │
│  ┌─────────┐ ┌─────────┐ ┌─────────┐                       │
│  │ Finding │ │ Finding │ │ Finding │                       │
│  │    1    │ │    2    │ │    3    │                       │
│  └─────────┘ └─────────┘ └─────────┘                       │
│                                                              │
│  ─────────────────────────────────────────────────────────  │
│                                                              │
│  Deliverables                                               │
│  [Image Gallery / Artifacts]                                │
│                                                              │
│  ─────────────────────────────────────────────────────────  │
│                                                              │
│  Impact & Outcomes                                          │
│  • 40% increase in user satisfaction                        │
│  • Reduced task completion time by 25%                      │
│                                                              │
│  ─────────────────────────────────────────────────────────  │
│                                                              │
│  ← Previous Project          Next Project →                 │
│                                                              │
├─────────────────────────────────────────────────────────────┤
│                         FOOTER                               │
└─────────────────────────────────────────────────────────────┘
```

---

## Technical Architecture

### Tech Stack
| Layer | Technology |
|-------|------------|
| Framework | Next.js 14 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS |
| Animations | Framer Motion |
| Icons | Lucide React |
| Forms | React Hook Form + Zod |
| Email | EmailJS |
| Deployment | Vercel |
| Analytics | Vercel Analytics |

### File Structure
```
ux-research-portfolio/
├── app/
│   ├── layout.tsx              # Root layout with providers
│   ├── page.tsx                # Homepage
│   ├── globals.css             # Global styles
│   ├── projects/
│   │   ├── page.tsx            # All projects listing
│   │   └── [slug]/
│   │       └── page.tsx        # Individual project page
│   ├── about/
│   │   └── page.tsx            # About page
│   ├── blog/
│   │   ├── page.tsx            # Blog listing
│   │   └── [slug]/
│   │       └── page.tsx        # Individual blog post
│   └── contact/
│       └── page.tsx            # Contact page
├── components/
│   ├── layout/
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   ├── Navigation.tsx
│   │   └── MobileMenu.tsx
│   ├── ui/
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   ├── Badge.tsx
│   │   ├── Input.tsx
│   │   └── ThemeToggle.tsx
│   ├── sections/
│   │   ├── Hero.tsx
│   │   ├── ProjectGrid.tsx
│   │   ├── ProjectFilter.tsx
│   │   └── ContactForm.tsx
│   └── project/
│       ├── ProjectCard.tsx
│       ├── ProjectHero.tsx
│       ├── ProjectSection.tsx
│       └── ProjectNavigation.tsx
├── lib/
│   ├── data/
│   │   ├── projects.ts         # Project data
│   │   ├── blog.ts             # Blog post data
│   │   └── skills.ts           # Skills and tools
│   ├── utils.ts                # Utility functions
│   └── types.ts                # TypeScript types
├── public/
│   ├── images/
│   │   ├── projects/           # Project thumbnails and images
│   │   ├── blog/               # Blog post images
│   │   └── about/              # Profile photo
│   ├── cv.pdf                  # Downloadable CV
│   └── favicon.ico
├── hooks/
│   ├── useTheme.ts
│   └── useMediaQuery.ts
├── context/
│   └── ThemeContext.tsx
├── .env.local                  # Environment variables
├── next.config.js
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

### Data Models

#### Project
```typescript
interface Project {
  id: string;
  slug: string;
  title: string;
  description: string;
  thumbnail: string;
  images: string[];
  category: ProjectCategory;
  methodologies: Methodology[];
  tools: string[];
  duration: string;
  year: number;
  client?: string;
  team?: string[];
  overview: string;
  challenge: string;
  approach: Section[];
  findings: Finding[];
  deliverables: Deliverable[];
  impact: Impact[];
  featured: boolean;
}

type ProjectCategory =
  | 'user-research'
  | 'usability-testing'
  | 'heuristic-evaluation'
  | 'design-systems'
  | 'mobile-research'
  | 'ecommerce'
  | 'social';

type Methodology =
  | 'interviews'
  | 'surveys'
  | 'usability-testing'
  | 'a-b-testing'
  | 'heuristic-evaluation'
  | 'card-sorting'
  | 'tree-testing'
  | 'diary-studies'
  | 'contextual-inquiry'
  | 'competitive-analysis';
```

#### Blog Post
```typescript
interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  thumbnail: string;
  publishedAt: string;
  readingTime: number;
  tags: string[];
  featured: boolean;
}
```

---

## Component Specifications

### Header Component
- Fixed/sticky positioning
- Logo with initials "AS" + full name
- Navigation links: Work, About, Blog, Contact
- Dark mode toggle button
- Mobile hamburger menu (below 768px)
- Background blur on scroll

### Project Card Component
- Aspect ratio: 4:3
- Hover effects:
  - Subtle scale (1.02)
  - Shadow elevation
  - Title color change to primary
- Displays: thumbnail, title, brief description, methodology badges
- Click navigates to project detail page

### Contact Form Component
- Fields: Name, Email, Subject, Message
- Validation with Zod
- Success/error toast notifications
- Loading state during submission
- Honeypot field for spam prevention

---

## Animations & Interactions

### Page Transitions
- Fade in/out between pages
- Staggered content reveal on scroll

### Micro-interactions
- Button hover: subtle scale + shadow
- Card hover: lift + shadow
- Link hover: underline animation
- Form focus: border color change

### Scroll Animations
- Fade up on scroll for sections
- Parallax effect on hero images (subtle)

---

## SEO & Performance

### Meta Tags
- Dynamic page titles
- Open Graph tags for social sharing
- Twitter card meta tags
- Canonical URLs
- JSON-LD structured data

### Performance Optimizations
- Next.js Image optimization
- Lazy loading for images
- Code splitting per page
- Preload critical fonts
- Minimize JavaScript bundle

### Accessibility
- Semantic HTML structure
- ARIA labels where needed
- Keyboard navigation support
- Focus visible states
- Color contrast compliance (WCAG AA)
- Skip to main content link
- Alt text for all images

---

## Sample Projects Content

### 1. Healthcare Patient Portal Research
- **Category:** User Research
- **Methods:** Interviews, Surveys, Journey Mapping
- **Description:** Conducted comprehensive user research for a healthcare patient portal, identifying pain points and opportunities to improve patient experience.

### 2. E-commerce Checkout Optimization
- **Category:** Usability Testing
- **Methods:** Usability Testing, A/B Testing, Heatmaps
- **Description:** Led usability testing to identify friction points in checkout flow, resulting in 35% reduction in cart abandonment.

### 3. Mobile Banking App Evaluation
- **Category:** Heuristic Evaluation
- **Methods:** Heuristic Evaluation, Competitive Analysis
- **Description:** Performed heuristic evaluation of mobile banking application against Nielsen's 10 usability heuristics.

### 4. Design System Usability Study
- **Category:** Design Systems
- **Methods:** Interviews, Card Sorting, Surveys
- **Description:** Researched designer and developer needs to inform design system component library prioritization.

### 5. Social Media Feature Discovery
- **Category:** User Research
- **Methods:** Diary Studies, Contextual Inquiry, Interviews
- **Description:** Exploratory research to understand user mental models and behaviors for new social features.

### 6. Food Delivery App Research
- **Category:** Mobile Research
- **Methods:** Usability Testing, Interviews, Surveys
- **Description:** End-to-end research study for food delivery mobile application redesign.

### 7. SaaS Onboarding Experience Study
- **Category:** User Research
- **Methods:** Usability Testing, Analytics Analysis, Interviews
- **Description:** Research-driven improvements to SaaS onboarding, increasing activation rate by 45%.

---

## Development Phases

### Phase 1: Foundation (Issues #1-5)
- Project setup and configuration
- Design system implementation
- Layout components (Header, Footer)
- Basic routing structure

### Phase 2: Core Pages (Issues #6-10)
- Homepage with hero section
- Project listing page
- Individual project pages
- About page
- Contact page

### Phase 3: Features (Issues #11-15)
- Dark mode implementation
- Project filtering system
- Blog section
- Contact form with email
- Animations and transitions

### Phase 4: Polish (Issues #16-20)
- SEO optimization
- Performance optimization
- Accessibility audit
- Testing and bug fixes
- Deployment setup

---

## Deployment Checklist

- [ ] Environment variables configured
- [ ] Custom domain setup
- [ ] SSL certificate active
- [ ] Analytics connected
- [ ] Contact form tested
- [ ] SEO meta tags verified
- [ ] Performance audit passed
- [ ] Accessibility audit passed
- [ ] Cross-browser testing complete
- [ ] Mobile responsiveness verified
