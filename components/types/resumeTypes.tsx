// src/types/resumeTypes.ts

export interface TypingEffectProps {
  text: string;
  onComplete?: () => void;
}

export interface ReviewCardProps {
  img: string;
  name: string;
  username: string;
  body: string;
}

export interface ExperienceItem {
  id: string;
  title: string;
  subtitle: string;
  period: string;
  responsibilities: string[];
  achievements: string[];
  standards?: string;
  icon: React.ReactNode;
  category: string;
}

export interface ExperienceCategory {
  id: string;
  title: string;
  icon: React.ReactNode;
  description: string;
}

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  period: string;
  description: string;
}
