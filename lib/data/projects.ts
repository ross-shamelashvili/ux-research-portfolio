import { Project } from '../types';

export const projects: Project[] = [
  {
    id: '1',
    slug: 'healthcare-patient-portal',
    title: 'Healthcare Patient Portal Research',
    description: 'Conducted comprehensive user research for a healthcare patient portal, identifying pain points and opportunities to improve patient experience through qualitative and quantitative methods.',
    thumbnail: '/images/projects/healthcare-thumb.jpg',
    images: [
      '/images/projects/healthcare-1.jpg',
      '/images/projects/healthcare-2.jpg',
      '/images/projects/healthcare-3.jpg',
    ],
    category: 'user-research',
    methodologies: ['interviews', 'surveys', 'journey-mapping', 'usability-testing'],
    tools: ['Dovetail', 'Figma', 'Miro', 'UserTesting', 'Qualtrics'],
    duration: '3 months',
    year: 2024,
    client: 'Regional Healthcare Network',
    overview: 'Led a comprehensive research initiative to understand patient needs and pain points when interacting with their healthcare portal. The study encompassed both new and existing patients across different demographics and technical proficiency levels.',
    challenge: 'The existing patient portal had low adoption rates (23%) and high abandonment during key tasks like appointment scheduling and accessing test results. Patients frequently called the support line for tasks that should have been self-service, increasing operational costs.',
    approach: [
      {
        title: 'Discovery Research',
        content: 'Conducted 24 in-depth interviews with patients across different age groups, technical abilities, and healthcare needs. Created detailed personas representing key user segments.',
      },
      {
        title: 'Quantitative Validation',
        content: 'Deployed a survey to 500+ patients to validate qualitative findings and prioritize pain points by frequency and severity.',
      },
      {
        title: 'Journey Mapping',
        content: 'Mapped the end-to-end patient journey from registration to ongoing portal use, identifying 12 key moments that matter and 8 critical pain points.',
      },
      {
        title: 'Usability Testing',
        content: 'Conducted moderated usability tests with 15 participants on the existing portal, documenting specific issues and severity ratings.',
      },
    ],
    findings: [
      {
        title: 'Navigation Confusion',
        description: '78% of users struggled to find test results, often looking in 3+ locations before succeeding or giving up.',
      },
      {
        title: 'Medical Jargon Barrier',
        description: 'Users without medical background found terminology intimidating, with 65% reporting they felt "lost" when reading their health information.',
      },
      {
        title: 'Mobile Experience Gap',
        description: '60% of users preferred mobile access, but the responsive design failed critical tasks on smaller screens.',
      },
      {
        title: 'Trust & Security Concerns',
        description: 'Older users (55+) expressed significant concerns about data security, often avoiding the portal due to these fears.',
      },
    ],
    deliverables: [
      {
        title: 'Research Report',
        description: 'Comprehensive 45-page report with findings, recommendations, and implementation roadmap.',
      },
      {
        title: 'Persona Documentation',
        description: 'Four detailed personas representing primary user segments with needs, goals, and pain points.',
      },
      {
        title: 'Journey Maps',
        description: 'Current and future state journey maps highlighting opportunities for improvement.',
      },
      {
        title: 'Design Recommendations',
        description: 'Prioritized list of 28 specific design recommendations with wireframe concepts.',
      },
    ],
    impact: [
      {
        metric: 'Portal Adoption',
        value: '+47%',
        description: 'Increase in active portal users within 6 months of implementing recommendations.',
      },
      {
        metric: 'Task Success Rate',
        value: '89%',
        description: 'Improved from 54% baseline for appointment scheduling task.',
      },
      {
        metric: 'Support Calls',
        value: '-35%',
        description: 'Reduction in portal-related support calls.',
      },
    ],
    featured: true,
  },
  {
    id: '2',
    slug: 'ecommerce-checkout-optimization',
    title: 'E-commerce Checkout Optimization',
    description: 'Led usability testing and analytics analysis to identify friction points in checkout flow, resulting in data-driven recommendations that significantly reduced cart abandonment.',
    thumbnail: '/images/projects/ecommerce-thumb.jpg',
    images: [
      '/images/projects/ecommerce-1.jpg',
      '/images/projects/ecommerce-2.jpg',
    ],
    category: 'usability-testing',
    methodologies: ['usability-testing', 'a-b-testing', 'analytics-analysis', 'surveys'],
    tools: ['Maze', 'Hotjar', 'Google Analytics', 'Optimizely', 'Figma'],
    duration: '2 months',
    year: 2024,
    client: 'Fashion Retail Brand',
    overview: 'Partnered with a growing fashion e-commerce brand to diagnose and address high cart abandonment rates. Combined behavioral analytics with qualitative research to develop a holistic understanding of the checkout experience.',
    challenge: 'The client was experiencing a 72% cart abandonment rate, significantly higher than the industry average of 69%. Exit surveys indicated confusion and frustration, but lacked specificity about the root causes.',
    approach: [
      {
        title: 'Analytics Deep Dive',
        content: 'Analyzed 3 months of checkout funnel data to identify specific drop-off points and segment behavior by device type, user type (new vs. returning), and cart value.',
      },
      {
        title: 'Heatmap & Session Recording Analysis',
        content: 'Reviewed 200+ session recordings and heatmaps to observe actual user behavior and identify patterns of confusion or frustration.',
      },
      {
        title: 'Moderated Usability Testing',
        content: 'Conducted 12 moderated usability sessions with a mix of new and returning customers to understand the "why" behind observed behaviors.',
      },
      {
        title: 'A/B Testing',
        content: 'Designed and executed 4 A/B tests based on research findings to validate proposed solutions.',
      },
    ],
    findings: [
      {
        title: 'Shipping Cost Surprise',
        description: 'Shipping costs revealed only at final step caused 34% of abandonments. Users felt "tricked" and lost trust.',
      },
      {
        title: 'Guest Checkout Hidden',
        description: 'Guest checkout option was visually deprioritized, with 45% of new users not noticing it existed.',
      },
      {
        title: 'Form Field Overload',
        description: 'Checkout form had 18 fields visible at once, overwhelming users and increasing perceived effort.',
      },
      {
        title: 'Payment Trust Signals',
        description: 'Security badges were small and easy to miss, contributing to hesitation at payment step.',
      },
    ],
    deliverables: [
      {
        title: 'Funnel Analysis Report',
        description: 'Detailed breakdown of checkout funnel with conversion rates at each step and segment analysis.',
      },
      {
        title: 'Usability Findings Deck',
        description: 'Video clips and annotated screenshots documenting key usability issues.',
      },
      {
        title: 'Redesign Recommendations',
        description: 'Wireframes and specifications for an improved checkout flow.',
      },
      {
        title: 'A/B Test Results',
        description: 'Statistical analysis of test results with recommendations for full rollout.',
      },
    ],
    impact: [
      {
        metric: 'Cart Abandonment',
        value: '-35%',
        description: 'Reduced from 72% to 47% after implementing recommended changes.',
      },
      {
        metric: 'Conversion Rate',
        value: '+28%',
        description: 'Overall improvement in checkout completion rate.',
      },
      {
        metric: 'Revenue Impact',
        value: '+$2.3M',
        description: 'Estimated annual revenue increase from improved conversions.',
      },
    ],
    featured: true,
  },
  {
    id: '3',
    slug: 'mobile-banking-evaluation',
    title: 'Mobile Banking App Evaluation',
    description: 'Performed comprehensive heuristic evaluation and competitive analysis of a mobile banking application, benchmarking against industry leaders and identifying opportunities for differentiation.',
    thumbnail: '/images/projects/banking-thumb.jpg',
    images: [
      '/images/projects/banking-1.jpg',
      '/images/projects/banking-2.jpg',
    ],
    category: 'heuristic-evaluation',
    methodologies: ['heuristic-evaluation', 'competitive-analysis', 'usability-testing'],
    tools: ['Figma', 'Notion', 'UserTesting', 'Lookback'],
    duration: '6 weeks',
    year: 2023,
    client: 'Regional Credit Union',
    overview: 'Conducted expert evaluation of a credit union\'s mobile banking app to identify usability issues and benchmark against top competitors in the digital banking space.',
    challenge: 'The credit union was losing members to larger banks with more modern digital experiences. App store ratings had dropped to 2.8 stars, with reviews citing difficulty of use and outdated design.',
    approach: [
      {
        title: 'Heuristic Evaluation',
        content: 'Systematic evaluation against Nielsen\'s 10 usability heuristics, documenting 67 issues across severity levels.',
      },
      {
        title: 'Competitive Benchmarking',
        content: 'Analyzed 5 competitor apps (Chase, Bank of America, Chime, Ally, Capital One) across 40 feature and UX criteria.',
      },
      {
        title: 'Validation Testing',
        content: 'Conducted task-based usability tests with 8 participants to validate expert findings and prioritize issues.',
      },
    ],
    findings: [
      {
        title: 'Information Architecture Issues',
        description: 'Key features buried 3-4 levels deep while rarely-used functions occupied prime real estate.',
      },
      {
        title: 'Inconsistent Interaction Patterns',
        description: 'Similar actions required different gestures throughout the app, increasing cognitive load.',
      },
      {
        title: 'Error Recovery Gaps',
        description: 'Error messages were technical and didn\'t provide clear guidance on resolution.',
      },
      {
        title: 'Accessibility Deficiencies',
        description: '23 WCAG violations identified, primarily related to color contrast and screen reader compatibility.',
      },
    ],
    deliverables: [
      {
        title: 'Heuristic Evaluation Report',
        description: 'Detailed documentation of 67 issues with severity ratings and fix recommendations.',
      },
      {
        title: 'Competitive Analysis Matrix',
        description: 'Feature-by-feature comparison with scores and gap analysis.',
      },
      {
        title: 'Prioritized Roadmap',
        description: 'Phased improvement plan balancing effort vs. impact.',
      },
    ],
    impact: [
      {
        metric: 'App Store Rating',
        value: '4.5 stars',
        description: 'Improved from 2.8 stars after implementing Phase 1 recommendations.',
      },
      {
        metric: 'Task Completion',
        value: '+40%',
        description: 'Improvement in bill pay task success rate.',
      },
      {
        metric: 'Member Retention',
        value: '+12%',
        description: 'Reduction in members leaving for competitor banks.',
      },
    ],
    featured: true,
  },
  {
    id: '4',
    slug: 'design-system-research',
    title: 'Design System Usability Study',
    description: 'Researched designer and developer needs to inform design system component library prioritization, ensuring the system would be adopted and used effectively across product teams.',
    thumbnail: '/images/projects/design-system-thumb.jpg',
    images: [
      '/images/projects/design-system-1.jpg',
      '/images/projects/design-system-2.jpg',
    ],
    category: 'design-systems',
    methodologies: ['interviews', 'surveys', 'card-sorting'],
    tools: ['Optimal Workshop', 'Figma', 'Notion', 'Slack'],
    duration: '2 months',
    year: 2023,
    client: 'Enterprise SaaS Company',
    overview: 'Led research to understand the needs of designers and developers who would use a new design system, ensuring the system would solve real problems and gain adoption.',
    challenge: 'The company had multiple product teams creating inconsistent UI patterns. Previous attempts at standardization failed due to poor adoption. Leadership needed evidence-based prioritization for the design system roadmap.',
    approach: [
      {
        title: 'Stakeholder Interviews',
        content: 'Interviewed 18 designers and developers across 6 product teams to understand pain points with current workflows.',
      },
      {
        title: 'Component Prioritization Survey',
        content: 'Survey of 45 team members to rank component importance and frequency of use.',
      },
      {
        title: 'Card Sorting',
        content: 'Conducted card sorting exercises to understand mental models for organizing components and documentation.',
      },
    ],
    findings: [
      {
        title: 'Documentation Critical',
        description: '89% cited poor documentation as the #1 reason previous systems failed. Examples and code snippets were essential.',
      },
      {
        title: 'Form Components Most Needed',
        description: 'Input fields, selects, and form validation were the most requested components due to inconsistency across products.',
      },
      {
        title: 'Flexibility vs. Consistency',
        description: 'Teams needed components flexible enough to handle edge cases without breaking design consistency.',
      },
      {
        title: 'Contribution Model',
        description: 'Developers wanted clear process for suggesting improvements and reporting issues.',
      },
    ],
    deliverables: [
      {
        title: 'Needs Assessment Report',
        description: 'Comprehensive analysis of user needs with supporting quotes and data.',
      },
      {
        title: 'Component Priority Matrix',
        description: 'Data-driven ranking of components by impact and effort.',
      },
      {
        title: 'Information Architecture',
        description: 'Research-backed structure for design system documentation site.',
      },
      {
        title: 'Adoption Strategy',
        description: 'Recommendations for rollout, training, and ongoing feedback collection.',
      },
    ],
    impact: [
      {
        metric: 'Adoption Rate',
        value: '94%',
        description: 'Team adoption within 3 months of launch, compared to 23% for previous attempt.',
      },
      {
        metric: 'Design Time',
        value: '-40%',
        description: 'Reduction in time spent recreating common UI patterns.',
      },
      {
        metric: 'Dev Handoff',
        value: '-60%',
        description: 'Reduction in design-to-dev miscommunication issues.',
      },
    ],
    featured: false,
  },
  {
    id: '5',
    slug: 'social-feature-discovery',
    title: 'Social Media Feature Discovery',
    description: 'Exploratory research to understand user mental models and behaviors for new social features, using diary studies and contextual inquiry to capture authentic usage patterns.',
    thumbnail: '/images/projects/social-thumb.jpg',
    images: [
      '/images/projects/social-1.jpg',
      '/images/projects/social-2.jpg',
    ],
    category: 'social',
    methodologies: ['diary-studies', 'contextual-inquiry', 'interviews'],
    tools: ['dscout', 'Dovetail', 'Miro', 'Zoom'],
    duration: '6 weeks',
    year: 2024,
    client: 'Social Media Startup',
    overview: 'Led generative research to explore how users share and consume content in their daily lives, informing the development of new social features for a growing platform.',
    challenge: 'The product team had ideas for new features but lacked understanding of how users actually behave when sharing content. They needed insights into natural behaviors, not just reactions to concepts.',
    approach: [
      {
        title: 'Diary Study',
        content: '14-day diary study with 20 participants documenting their sharing behaviors, motivations, and frustrations in real-time.',
      },
      {
        title: 'Contextual Inquiry',
        content: 'In-context observations with 8 participants as they used social apps, capturing authentic behaviors and workarounds.',
      },
      {
        title: 'Follow-up Interviews',
        content: 'Deep-dive interviews exploring interesting patterns and behaviors observed during the study.',
      },
    ],
    findings: [
      {
        title: 'Context Collapse Anxiety',
        description: 'Users carefully consider audience before sharing, often self-censoring due to mixed social contexts.',
      },
      {
        title: 'Save for Later Behavior',
        description: '73% of interesting content is saved rather than shared immediately, creating private collections.',
      },
      {
        title: 'Micro-Communities',
        description: 'Users prefer sharing to small, trusted groups rather than broad audiences.',
      },
      {
        title: 'Ephemeral Preferences',
        description: 'Lower-stakes temporary sharing reduces anxiety and increases participation.',
      },
    ],
    deliverables: [
      {
        title: 'Behavioral Insights Report',
        description: 'Synthesis of diary study and contextual inquiry findings with video highlights.',
      },
      {
        title: 'User Journey Maps',
        description: 'Maps showing content discovery-to-sharing journeys with emotional annotations.',
      },
      {
        title: 'Feature Opportunity Framework',
        description: 'Research-backed opportunities mapped to user needs and business goals.',
      },
    ],
    impact: [
      {
        metric: 'Feature Direction',
        value: '3 new features',
        description: 'Research directly informed roadmap prioritization for Q3-Q4.',
      },
      {
        metric: 'Sharing Rate',
        value: '+25%',
        description: 'Increase in content sharing after implementing "Close Friends" feature.',
      },
      {
        metric: 'Engagement',
        value: '+18%',
        description: 'Improvement in daily active users metric.',
      },
    ],
    featured: true,
  },
  {
    id: '6',
    slug: 'food-delivery-research',
    title: 'Food Delivery App Research',
    description: 'End-to-end research study for food delivery mobile application redesign, from discovery through validation testing of new concepts.',
    thumbnail: '/images/projects/food-delivery-thumb.jpg',
    images: [
      '/images/projects/food-delivery-1.jpg',
      '/images/projects/food-delivery-2.jpg',
    ],
    category: 'mobile-research',
    methodologies: ['interviews', 'surveys', 'usability-testing', 'competitive-analysis'],
    tools: ['Maze', 'Figma', 'Dovetail', 'Typeform'],
    duration: '3 months',
    year: 2023,
    client: 'Food Delivery Startup',
    overview: 'Conducted comprehensive research program to inform a major app redesign, spanning discovery, concept development, and validation phases.',
    challenge: 'The app was losing market share to competitors despite having faster delivery times. User feedback indicated the ordering experience was confusing and time-consuming.',
    approach: [
      {
        title: 'Discovery Research',
        content: 'Interviewed 20 users about their food ordering habits, preferences, and frustrations across multiple platforms.',
      },
      {
        title: 'Competitive Analysis',
        content: 'Systematic comparison of ordering flows across 6 competitor apps.',
      },
      {
        title: 'Concept Testing',
        content: 'Tested 3 design directions with users using interactive prototypes.',
      },
      {
        title: 'Validation Testing',
        content: 'Usability testing of final designs with 15 participants.',
      },
    ],
    findings: [
      {
        title: 'Decision Fatigue',
        description: 'Users overwhelmed by too many options; wanted personalized recommendations based on history.',
      },
      {
        title: 'Reorder Friction',
        description: 'Repeat orders (60% of orders) required too many steps; users wanted one-tap reordering.',
      },
      {
        title: 'Delivery Time Uncertainty',
        description: 'Inaccurate ETAs eroded trust; users preferred ranges over precise times.',
      },
      {
        title: 'Group Ordering Pain',
        description: 'Ordering for groups was especially frustrating; needed better tools for collaborative ordering.',
      },
    ],
    deliverables: [
      {
        title: 'Research Synthesis',
        description: 'Comprehensive findings document with recommendations prioritized by impact.',
      },
      {
        title: 'Concept Test Results',
        description: 'Comparative analysis of design directions with user preference data.',
      },
      {
        title: 'Validated Designs',
        description: 'User-tested design specifications ready for development.',
      },
    ],
    impact: [
      {
        metric: 'Order Time',
        value: '-45%',
        description: 'Reduction in average time to complete an order.',
      },
      {
        metric: 'Reorder Rate',
        value: '+30%',
        description: 'Increase in repeat order conversion.',
      },
      {
        metric: 'App Rating',
        value: '4.7 stars',
        description: 'Improved from 3.9 stars after redesign launch.',
      },
    ],
    featured: false,
  },
  {
    id: '7',
    slug: 'saas-onboarding-study',
    title: 'SaaS Onboarding Experience Study',
    description: 'Research-driven improvements to SaaS onboarding, combining analytics analysis with qualitative research to identify and address activation barriers.',
    thumbnail: '/images/projects/saas-thumb.jpg',
    images: [
      '/images/projects/saas-1.jpg',
      '/images/projects/saas-2.jpg',
    ],
    category: 'user-research',
    methodologies: ['usability-testing', 'analytics-analysis', 'interviews', 'surveys'],
    tools: ['Amplitude', 'Hotjar', 'Calendly', 'Notion', 'Figma'],
    duration: '2 months',
    year: 2024,
    client: 'B2B SaaS Platform',
    overview: 'Led research to understand why new users were dropping off during onboarding and identify opportunities to improve activation rates.',
    challenge: 'Only 31% of new signups reached the "activated" milestone within 7 days. The product team suspected the onboarding was too complex but needed evidence to prioritize changes.',
    approach: [
      {
        title: 'Funnel Analysis',
        content: 'Deep analysis of onboarding funnel using Amplitude to identify specific drop-off points and segment by user characteristics.',
      },
      {
        title: 'Session Recording Review',
        content: 'Analyzed 150+ session recordings of new user onboarding to identify patterns of confusion.',
      },
      {
        title: 'User Interviews',
        content: 'Interviewed 15 users: 8 who activated successfully and 7 who dropped off.',
      },
      {
        title: 'Onboarding Survey',
        content: 'In-app survey capturing friction points and unmet needs from new users.',
      },
    ],
    findings: [
      {
        title: 'Value Unclear',
        description: 'Users didn\'t understand the product\'s value until completing 3+ actions, but most dropped off before then.',
      },
      {
        title: 'Integration Barrier',
        description: '40% of drop-offs occurred at the data integration step; users needed technical help they didn\'t have.',
      },
      {
        title: 'Progress Unclear',
        description: 'Users couldn\'t tell how far along they were or what was left to do in onboarding.',
      },
      {
        title: 'Use Case Mismatch',
        description: 'Generic onboarding didn\'t match specific use cases, making it feel irrelevant.',
      },
    ],
    deliverables: [
      {
        title: 'Onboarding Audit',
        description: 'Comprehensive analysis of current onboarding with annotated issues.',
      },
      {
        title: 'User Segment Profiles',
        description: 'Profiles of different user types with tailored onboarding needs.',
      },
      {
        title: 'Redesign Recommendations',
        description: 'Detailed specifications for improved onboarding flow.',
      },
      {
        title: 'Success Metrics Framework',
        description: 'Proposed metrics for measuring onboarding effectiveness.',
      },
    ],
    impact: [
      {
        metric: 'Activation Rate',
        value: '+45%',
        description: 'Improvement in 7-day activation rate after implementing changes.',
      },
      {
        metric: 'Time to Value',
        value: '-60%',
        description: 'Reduction in time to reach "aha moment".',
      },
      {
        metric: 'Support Tickets',
        value: '-50%',
        description: 'Reduction in onboarding-related support requests.',
      },
    ],
    featured: false,
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

export function getFeaturedProjects(): Project[] {
  return projects.filter((project) => project.featured);
}

export function getProjectsByCategory(category: ProjectCategory): Project[] {
  return projects.filter((project) => project.category === category);
}

export function getProjectsByMethodology(methodology: Methodology): Project[] {
  return projects.filter((project) => project.methodologies.includes(methodology));
}

export function getAllCategories(): ProjectCategory[] {
  return [...new Set(projects.map((project) => project.category))];
}

export function getAllMethodologies(): Methodology[] {
  const methodologies = projects.flatMap((project) => project.methodologies);
  return [...new Set(methodologies)];
}

import { ProjectCategory, Methodology } from '../types';
