
import type { ReactNode } from 'react';

export interface Service {
  icon: ReactNode;
  title: string;
  description: string;
}

export interface Testimonial {
  quote: string;
  author: string;
  location: string;
  rating: number;
}

export interface Benefit {
  icon: ReactNode;
  title: string;
  description: string;
}
