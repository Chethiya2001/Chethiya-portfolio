
export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  features?: string[];
  tech: string[];
  link: string;
  demoLink?: string;
  image: string;
  category: 'web' | 'mobile' | 'backend';
}

export interface Skill {
  name: string;
  level: number; // 0 to 100
  category: string;
}

export interface ChatMessage {
  role: 'user' | 'ai';
  content: string;
}
