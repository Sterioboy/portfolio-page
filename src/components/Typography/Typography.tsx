import { clsx } from 'clsx';
import type { ElementType } from 'react';

const sizes = {
  base: 'text-base lg:text-desktop-base',
  md: 'text-md lg:text-desktop-md',
  lg: 'text-lg lg:text-desktop-lg',
  xl: 'text-lg lg:text-desktop-xl',
} as const;

type Size = keyof typeof sizes;

interface TypographyProps {
  children: React.ReactNode;
  className?: string;
  size?: Size;
  as?: ElementType;
}

export function Typography(props: TypographyProps) {
  const Tag = props.as || 'span';
  const classes = clsx(sizes[props.size || 'base'], props.className);

  return <Tag className={classes}>{props.children}</Tag>;
}
