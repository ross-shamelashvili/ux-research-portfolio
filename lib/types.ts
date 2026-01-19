export type ProjectCategory =
  | 'user-research'
  | 'usability-testing'
  | 'heuristic-evaluation'
  | 'design-systems'
  | 'mobile-research'
  | 'ecommerce'
  | 'social';

export type Methodology =
  | 'interviews'
  | 'surveys'
  | 'usability-testing'
  | 'a-b-testing'
  | 'heuristic-evaluation'
  | 'card-sorting'
  | 'tree-testing'
  | 'diary-studies'
  | 'contextual-inquiry'
  | 'competitive-analysis'
  | 'analytics-analysis'
  | 'journey-mapping';

export interface Finding {
  title: string;
  description: string;
  icon?: string;
}

export interface Deliverable {
  title: string;
  description: string;
  image?: string;
}

export interface Impact {
  metric: string;
  value: string;
  description: string;
}

export interface Section {
  title: string;
  content: string;
}

export interface Project {
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

export interface BlogPost {
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

export interface Skill {
  name: string;
  category: 'research' | 'tools' | 'soft-skills';
}

export const categoryLabels: Record<ProjectCategory, string> = {
  'user-research': 'User Research',
  'usability-testing': 'Usability Testing',
  'heuristic-evaluation': 'Heuristic Evaluation',
  'design-systems': 'Design Systems',
  'mobile-research': 'Mobile Research',
  'ecommerce': 'E-commerce',
  'social': 'Social',
};

export const methodologyLabels: Record<Methodology, string> = {
  'interviews': 'Interviews',
  'surveys': 'Surveys',
  'usability-testing': 'Usability Testing',
  'a-b-testing': 'A/B Testing',
  'heuristic-evaluation': 'Heuristic Evaluation',
  'card-sorting': 'Card Sorting',
  'tree-testing': 'Tree Testing',
  'diary-studies': 'Diary Studies',
  'contextual-inquiry': 'Contextual Inquiry',
  'competitive-analysis': 'Competitive Analysis',
  'analytics-analysis': 'Analytics Analysis',
  'journey-mapping': 'Journey Mapping',
};
