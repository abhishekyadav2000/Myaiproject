"use client";

import React, { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface BadgeProps {
  children: ReactNode;
  variant?: 'default' | 'orange' | 'secondary' | 'accent';
  className?: string;
}

export function Badge({
  children,
  variant = 'default',
  className,
}: BadgeProps) {
  const variants = {
    default: 'bg-px-orange/20 text-px-orange border border-px-orange/50',
    orange: 'bg-px-orange/30 text-px-orange border border-px-orange',
    secondary: 'bg-white/10 text-white/80 border border-white/20',
    accent: 'bg-px-accent/20 text-px-accent border border-px-accent/50',
  };

  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full px-3 py-1 text-xs font-medium',
        variants[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
