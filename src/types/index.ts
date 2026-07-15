export type Project = {
  slug: string;
  title: string;
  description: string;
  stack: string[];
  year: string;
  link?: string;
  github?: string;
  image?: string;
  video?: string;// Newly added for Porject demo video links
  bullets?: string[];
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
