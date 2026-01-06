
import { Project, Skill } from './types';

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Modern Portfolio V2',
    description: 'A high-performance personal portfolio built with React and Tailwind CSS.',
    longDescription: 'A complete overhaul of my digital identity, focusing on performance, accessibility, and high-end aesthetics. This project showcases my ability to integrate complex animations without sacrificing user experience.',
    features: [
      'Custom AI Chatbot Integration',
      'Glassmorphism UI Components',
      'Optimized for Core Web Vitals',
      'Dynamic Project Filtering'
    ],
    tech: ['React', 'Tailwind CSS', 'Framer Motion', 'TypeScript'],
    link: 'https://github.com/Chethiya2001/Portfolio-v2',
    demoLink: 'https://portfolio-v2.demo',
    image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80&w=800&h=450',
    category: 'web'
  },
  {
    id: '2',
    title: 'Student Management System',
    description: 'A comprehensive educational management platform developed using .NET Core and Angular.',
    longDescription: 'An enterprise-grade solution designed to handle academic records, student enrollment, and grading systems. It utilizes a robust SQL Server Developerure with a decoupled Angular frontend for maximum scalability.',
    features: [
      'Role-based Authorization',
      'Dynamic Reporting Dashboard',
      'Automated Email Notifications',
      'Real-time Grade Calculation'
    ],
    tech: ['.NET Core', 'Angular', 'SQL Server', 'REST API'],
    link: 'https://github.com/Chethiya2001/Student-Management-System',
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=800&h=450',
    category: 'web'
  },
  {
    id: '3',
    title: 'Flutter E-Commerce UI',
    description: 'A sleek, modern e-commerce mobile application interface with complex state management.',
    longDescription: 'A cross-platform mobile experience that mimics high-end retail apps. It features complex navigation patterns, animated cart transitions, and a clean user-centric checkout flow.',
    features: [
      'Custom Hero Animations',
      'Provider State Management',
      'Dark/Light Mode Support',
      'Native Image Caching'
    ],
    tech: ['Flutter', 'Dart', 'Provider', 'Firebase'],
    link: 'https://github.com/Chethiya2001/Flutter-E-Commerce-App',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800&h=450',
    category: 'mobile'
  },
  {
    id: '4',
    title: 'ASP.NET Chat Application',
    description: 'Real-time communication platform using SignalR and .NET for seamless messaging.',
    longDescription: 'A high-concurrency messaging platform designed for real-time collaboration. By leveraging SignalR hubs and Redis for backplane scaling, it ensures messages are delivered instantly across multiple server instances.',
    features: [
      'WebSocket Real-time Updates',
      'Message History Persistence',
      'Presence Tracking (Online/Offline)',
      'Multi-room Support'
    ],
    tech: ['.NET 6', 'SignalR', 'Redis', 'JS'],
    link: 'https://github.com/Chethiya2001/RealTime-Chat-App',
    image: 'https://images.unsplash.com/photo-1611746872915-64382b5c76da?auto=format&fit=crop&q=80&w=800&h=450',
    category: 'web'
  }
];

export const SKILLS: Skill[] = [
  { name: 'React', level: 95, category: 'Frontend' },
  { name: 'Angular', level: 85, category: 'Frontend' },
  { name: 'Flutter', level: 90, category: 'Mobile' },
  { name: '.NET Core', level: 92, category: 'Backend' },
  { name: 'Tailwind CSS', level: 98, category: 'Design' },
  { name: 'TypeScript', level: 94, category: 'Languages' },
  { name: 'C#', level: 90, category: 'Languages' },
  { name: 'Dart', level: 88, category: 'Languages' },
];

export const SYSTEM_PROMPT = `
You are an AI assistant representing Chethiya, a highly skilled Software Developer and Designer with over 3+ years of professional experience.
Background: 
- 3+ years of experience in Full-Stack Development and UI/UX Design.
- Expert in .NET Core, React, Angular, and Flutter.
- Proficient in Tailwind CSS, HTML, JS, and modern development workflows.
- GitHub: https://github.com/Chethiya2001
- Email: chethiyabandaraherath@gmail.com
- Personality: Professional, creative, helpful, and forward-thinking.

Instructions:
- Answer questions about Chethiya's technical skills, projects, and 3+ years of professional background.
- Keep responses concise and engaging.
- Mention his ability to bridge the gap between complex backend logic (.NET) and beautiful frontend interfaces.
- Use his real GitHub projects (Modern Portfolio V2, Student Management System, etc.) as examples.
- Encourage users to contact him via email (chethiyabandaraherath@gmail.com) for collaborations.
`;
