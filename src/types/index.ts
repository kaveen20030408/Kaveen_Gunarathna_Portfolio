export type Project = {
  slug: string;
  title: string;
  description: string;
  stack: string[];
  year: string;
  link?: string;
};

export type SkillGroup = {
  category: string;
  items: string[];
};

export type ExperienceItem = {
  role: string;
  company: string;
  period: string;
  summary: string;
};
