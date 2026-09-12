import type { TechStack } from '../types/techStack';

import {
  FaReact,
  FaNodeJs,
  FaJava,
  FaDocker,
} from 'react-icons/fa';

import {
  SiVuedotjs,
  SiSvelte,
  SiNextdotjs,
  SiPostgresql,
  SiRedis,
  SiJavascript,
  SiTypescript,
  SiTailwindcss,
} from 'react-icons/si';

export const techStackData: TechStack[] = [
  {
    id: 'react',
    name: 'React',
    category: 'Frontend',
    level: 'Beginner-Friendly',
    rating: 4.9,
    badge: 'Popular',
    badgeStyle: 'bg-sky-50 text-sky-600 border-sky-200',
    description:
      'A declarative, component-based JavaScript library for building modern user interfaces.',
    icon: <FaReact className="w-8 h-8 text-[#61DAFB]" />,
  },

  {
    id: 'vue',
    name: 'Vue.js',
    category: 'Frontend',
    level: 'Beginner-Friendly',
    rating: 4.8,
    badge: 'Versatile',
    badgeStyle: 'bg-emerald-50 text-emerald-600 border-emerald-200',
    description:
      'An approachable, performant, and versatile framework for building web user interfaces.',
    icon: <SiVuedotjs className="w-8 h-8 text-[#42B883]" />,
  },

  {
    id: 'svelte',
    name: 'Svelte',
    category: 'Frontend',
    level: 'Intermediate',
    rating: 4.8,
    badge: 'Fast',
    badgeStyle: 'bg-orange-50 text-orange-600 border-orange-200',
    description:
      'Cybernetically enhanced web apps with compile-time reactivity and zero virtual DOM overhead.',
    icon: <SiSvelte className="w-8 h-8 text-[#FF3E00]" />,
  },

  {
    id: 'nextjs',
    name: 'Next.js',
    category: 'Frontend',
    level: 'Intermediate',
    rating: 4.9,
    badge: 'SSR / Edge',
    badgeStyle: 'bg-purple-50 text-purple-600 border-purple-200',
    description:
      'The React framework for full-stack web applications with hybrid static & server rendering.',
    icon: <SiNextdotjs className="w-8 h-8 text-black" />,
  },

  {
    id: 'nodejs',
    name: 'Node.js',
    category: 'Backend',
    level: 'Intermediate',
    rating: 4.8,
    badge: 'Standard',
    badgeStyle: 'bg-emerald-50 text-emerald-600 border-emerald-200',
    description:
      "An asynchronous event-driven JavaScript runtime built on Chrome's V8 engine.",
    icon: <FaNodeJs className="w-8 h-8 text-[#83CD29]" />,
  },

  {
    id: 'postgresql',
    name: 'PostgreSQL',
    category: 'Database',
    level: 'Intermediate',
    rating: 4.9,
    badge: 'Top SQL',
    badgeStyle: 'bg-blue-50 text-blue-600 border-blue-200',
    description:
      'A powerful, open-source object-relational database system with proven reliability.',
    icon: <SiPostgresql className="w-8 h-8 text-[#336791]" />,
  },

  {
    id: 'redis',
    name: 'Redis',
    category: 'Database',
    level: 'Intermediate',
    rating: 4.8,
    badge: 'Cache',
    badgeStyle: 'bg-red-50 text-red-600 border-red-200',
    description:
      'An in-memory data structure store used as a high-speed database, cache, and message broker.',
    icon: <SiRedis className="w-8 h-8 text-[#DC382D]" />,
  },

  {
    id: 'javascript',
    name: 'JavaScript',
    category: 'Language',
    level: 'Beginner-Friendly',
    rating: 4.9,
    badge: 'Ubiquitous',
    badgeStyle: 'bg-amber-50 text-amber-600 border-amber-200',
    description:
      'The versatile, ubiquitous scripting language powering dynamic behavior across the web.',
    icon: <SiJavascript className="w-8 h-8 text-[#F7DF1E]" />,
  },

  {
    id: 'typescript',
    name: 'TypeScript',
    category: 'Language',
    level: 'Beginner-Friendly',
    rating: 4.9,
    badge: 'Essential',
    badgeStyle: 'bg-sky-50 text-sky-600 border-sky-200',
    description:
      'A strongly typed programming language that builds on JavaScript for robust tooling.',
    icon: <SiTypescript className="w-8 h-8 text-[#3178C6]" />,
  },

  {
    id: 'java',
    name: 'Java',
    category: 'Language',
    level: 'Intermediate',
    rating: 4.6,
    badge: 'Robust',
    badgeStyle: 'bg-red-50 text-red-600 border-red-200',
    description:
      'A secure, object-oriented programming language designed for portability and scale.',
    icon: <FaJava className="w-8 h-8 text-[#007396]" />,
  },

  {
    id: 'tailwind',
    name: 'Tailwind CSS',
    category: 'Styling',
    level: 'Beginner-Friendly',
    rating: 4.9,
    badge: 'Modern',
    badgeStyle: 'bg-cyan-50 text-cyan-600 border-cyan-200',
    description:
      'A utility-first CSS framework packed with classes that can be composed to build custom UI.',
    icon: <SiTailwindcss className="w-8 h-8 text-[#06B6D4]" />,
  },

  {
    id: 'docker',
    name: 'Docker',
    category: 'DevOps',
    level: 'Intermediate',
    rating: 4.9,
    badge: 'Containers',
    badgeStyle: 'bg-sky-50 text-sky-600 border-sky-200',
    description:
      'A platform designed to build, share, and run containerized applications reliably.',
    icon: <FaDocker className="w-8 h-8 text-[#2496ED]" />,
  },
];