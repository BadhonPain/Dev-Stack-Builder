import type { ReactNode } from 'react';

export interface TechStack {
  id: string;
  name: string;
  category: string;
  level: 'Beginner-Friendly' | 'Intermediate' | 'Advanced';
  rating: number;
  badge: string;
  badgeStyle: string;
  description: string;
  icon: ReactNode;
}