import type { ReactNode } from 'react';
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

export interface RawTechStack {
  id: string;
  name: string;
  category: string;
  level: 'Beginner-Friendly' | 'Intermediate' | 'Advanced';
  rating: number;
  badge: string;
  badgeStyle: string;
  description: string;
  icon?: string;
}

export const iconMap: Record<string, ReactNode> = {
  react: <FaReact className="w-8 h-8 text-[#61DAFB]" />,
  vue: <SiVuedotjs className="w-8 h-8 text-[#42B883]" />,
  svelte: <SiSvelte className="w-8 h-8 text-[#FF3E00]" />,
  nextjs: <SiNextdotjs className="w-8 h-8 text-black" />,
  nodejs: <FaNodeJs className="w-8 h-8 text-[#83CD29]" />,
  postgresql: <SiPostgresql className="w-8 h-8 text-[#336791]" />,
  redis: <SiRedis className="w-8 h-8 text-[#DC382D]" />,
  javascript: <SiJavascript className="w-8 h-8 text-[#F7DF1E]" />,
  typescript: <SiTypescript className="w-8 h-8 text-[#3178C6]" />,
  java: <FaJava className="w-8 h-8 text-[#007396]" />,
  tailwind: <SiTailwindcss className="w-8 h-8 text-[#06B6D4]" />,
  docker: <FaDocker className="w-8 h-8 text-[#2496ED]" />,
  FaReact: <FaReact className="w-8 h-8 text-[#61DAFB]" />,
  SiVuedotjs: <SiVuedotjs className="w-8 h-8 text-[#42B883]" />,
  SiSvelte: <SiSvelte className="w-8 h-8 text-[#FF3E00]" />,
  SiNextdotjs: <SiNextdotjs className="w-8 h-8 text-black" />,
  FaNodeJs: <FaNodeJs className="w-8 h-8 text-[#83CD29]" />,
  SiPostgresql: <SiPostgresql className="w-8 h-8 text-[#336791]" />,
  SiRedis: <SiRedis className="w-8 h-8 text-[#DC382D]" />,
  SiJavascript: <SiJavascript className="w-8 h-8 text-[#F7DF1E]" />,
  SiTypescript: <SiTypescript className="w-8 h-8 text-[#3178C6]" />,
  FaJava: <FaJava className="w-8 h-8 text-[#007396]" />,
  SiTailwindcss: <SiTailwindcss className="w-8 h-8 text-[#06B6D4]" />,
  FaDocker: <FaDocker className="w-8 h-8 text-[#2496ED]" />,
};

// async fetch method to fetch tech stack data
export const fetchTechStackData = async (): Promise<TechStack[]> => {
  let response = await fetch('/techStackData.json');
  if (!response.ok) {
    throw new Error(`Failed to load tech stack data: ${response.statusText}`);
  }
  const data: RawTechStack[] = await response.json();
  return data.map((item) => ({
    ...item,
    icon: (item.icon && iconMap[item.icon]) || iconMap[item.id] || null,
  }));
};

let cachedPromise: Promise<TechStack[]> | null = null;

export const getTechStackPromise = (): Promise<TechStack[]> => {
  if (!cachedPromise) {
    cachedPromise = fetchTechStackData();
  }
  return cachedPromise;
};

