import { HTMLMotionProps, Variant } from 'framer-motion';
import { ReactHTML } from 'react';

interface TransitionOptions {
  delay?: number;
  once?: boolean;
  type?: string;
}

export function getTransition(
  from: 'left' | 'right' | 'bottom',
  options?: TransitionOptions
) {
  const initial: Variant = { opacity: 0 };
  if (from === 'bottom') {
    initial.y = '100%';
  } else {
    initial.x = from === 'left' ? '-100%' : '100%';
  }
  return {
    variants: {
      initial,
      view: {
        opacity: 1,
        x: 0,
        y: 0,
        transition: {
          delay: options?.delay ?? 0.2,
          type: options?.type ?? 'spring',
          duration: 1.5,
        },
      },
    },
    initial: 'initial',
    whileInView: 'view',
    viewport: { once: options?.once ?? true },
  };
}