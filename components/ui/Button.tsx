// components/ui/Button.tsx
import React from 'react';
import Link from 'next/link';
import { clsx } from 'clsx';
import { LucideIcon } from 'lucide-react';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'booking' | 'contact';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  disabled?: boolean;
  loading?: boolean;
  icon?: LucideIcon;
  iconPosition?: 'left' | 'right';
  href?: string;
  external?: boolean;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
  ariaLabel?: string;
}

const buttonVariants = {
  primary: 'bg-gradient-to-r from-minova-gold to-minova-gold-dark text-minova-charcoal shadow-lg hover:shadow-xl hover:from-minova-gold-light hover:to-minova-gold transform hover:-translate-y-0.5',
  secondary: 'bg-transparent text-minova-terracotta border-2 border-minova-terracotta hover:bg-minova-terracotta hover:text-white',
  outline: 'bg-transparent text-minova-sage border-2 border-minova-sage hover:bg-minova-sage hover:text-white',
  ghost: 'bg-transparent text-minova-sage border border-transparent hover:bg-minova-cream-light hover:text-minova-charcoal hover:border-minova-cream',
  booking: 'bg-gradient-to-r from-minova-terracotta to-minova-terracotta-light text-white shadow-lg hover:shadow-xl hover:from-minova-terracotta-light hover:to-minova-terracotta transform hover:-translate-y-0.5',
  contact: 'bg-minova-gold text-minova-charcoal shadow-xl hover:shadow-2xl hover:bg-minova-gold-light transform hover:-translate-y-1',
};

const buttonSizes = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-sm',
  lg: 'px-8 py-4 text-base',
  xl: 'px-10 py-5 text-lg',
};

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  disabled = false,
  loading = false,
  icon: Icon,
  iconPosition = 'left',
  href,
  external = false,
  onClick,
  type = 'button',
  className,
  ariaLabel,
}) => {
  const baseClasses = 'inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-minova-gold focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none';
  
  const classes = clsx(
    baseClasses,
    buttonVariants[variant],
    buttonSizes[size],
    {
      'cursor-not-allowed': disabled || loading,
      'gap-2': Icon,
    },
    className
  );

  const content = (
    <>
      {loading && (
        <svg
          className="animate-spin -ml-1 mr-2 h-4 w-4"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          />
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          />
        </svg>
      )}
      {Icon && iconPosition === 'left' && !loading && <Icon className="h-4 w-4" />}
      {children}
      {Icon && iconPosition === 'right' && !loading && <Icon className="h-4 w-4" />}
    </>
  );

  if (href) {
    if (external) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={classes}
          aria-label={ariaLabel}
        >
          {content}
        </a>
      );
    }

    return (
      <Link href={href} className={classes} aria-label={ariaLabel}>
        {content}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled || loading}
      className={classes}
      aria-label={ariaLabel}
    >
      {content}
    </button>
  );
};

// components/ui/Card.tsx
import React from 'react';
import { clsx } from 'clsx';

interface CardProps {
  children: React.ReactNode;
  variant?: 'default' | 'bordered' | 'elevated' | 'interactive';
  padding?: 'none' | 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  onClick?: () => void;
  href?: string;
}

const cardVariants = {
  default: 'bg-white rounded-lg shadow-md',
  bordered: 'bg-white rounded-lg border border-minova-cream shadow-sm',
  elevated: 'bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow',
  interactive: 'bg-white rounded-xl shadow-md hover:shadow-xl transform hover:-translate-y-1 transition-all cursor-pointer',
};

const cardPadding = {
  none: '',
  sm: 'p-4',
  md: 'p-6',
  lg: 'p-8',
  xl: 'p-10',
};

export const Card: React.FC<CardProps> = ({
  children,
  variant = 'default',
  padding = 'md',
  className,
  onClick,
  href,
}) => {
  const classes = clsx(
    cardVariants[variant],
    cardPadding[padding],
    className
  );

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  if (onClick) {
    return (
      <button onClick={onClick} className={classes}>
        {children}
      </button>
    );
  }

  return <div className={classes}>{children}</div>;
};

// components/ui/Badge.tsx
interface BadgeProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'info';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const badgeVariants = {
  primary: 'bg-minova-gold text-minova-charcoal',
  secondary: 'bg-minova-terracotta text-white',
  success: 'bg-minova-sage text-white',
  warning: 'bg-orange-500 text-white',
  info: 'bg-minova-cream text-minova-charcoal',
};

const badgeSizes = {
  sm: 'px-2 py-1 text-xs',
  md: 'px-3 py-1 text-sm',
  lg: 'px-4 py-2 text-base',
};

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  className,
}) => {
  const classes = clsx(
    'inline-flex items-center font-medium rounded-full shadow-sm',
    badgeVariants[variant],
    badgeSizes[size],
    className
  );

  return <span className={classes}>{children}</span>;
};

// components/ui/Container.tsx
interface ContainerProps {
  children: React.ReactNode;
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
  className?: string;
}

const containerSizes = {
  sm: 'max-w-3xl',
  md: 'max-w-5xl',
  lg: 'max-w-6xl',
  xl: 'max-w-7xl',
  full: 'max-w-none',
};

export const Container: React.FC<ContainerProps> = ({
  children,
  size = 'lg',
  className,
}) => {
  const classes = clsx(
    'mx-auto px-4 sm:px-6 lg:px-8',
    containerSizes[size],
    className
  );

  return <div className={classes}>{children}</div>;
};

// components/ui/Section.tsx
interface SectionProps {
  children: React.ReactNode;
  id?: string;
  background?: 'white' | 'cream' | 'gradient';
  padding?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
}

const sectionBackgrounds = {
  white: 'bg-white',
  cream: 'bg-minova-cream-light',
  gradient: 'bg-gradient-to-br from-minova-cream-light to-white',
};

const sectionPadding = {
  sm: 'py-12',
  md: 'py-16',
  lg: 'py-20',
  xl: 'py-24',
};

export const Section: React.FC<SectionProps> = ({
  children,
  id,
  background = 'white',
  padding = 'lg',
  className,
}) => {
  const classes = clsx(
    sectionBackgrounds[background],
    sectionPadding[padding],
    'scroll-mt-20', // Account for fixed header
    className
  );

  return (
    <section id={id} className={classes}>
      {children}
    </section>
  );
};

// components/ui/Heading.tsx
interface HeadingProps {
  children: React.ReactNode;
  level: 1 | 2 | 3 | 4 | 5 | 6;
  size?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl';
  className?: string;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
}

const headingSizes = {
  sm: 'text-lg font-semibold',
  md: 'text-xl font-semibold',
  lg: 'text-2xl font-bold',
  xl: 'text-3xl font-bold',
  '2xl': 'text-4xl font-bold',
  '3xl': 'text-5xl font-bold',
};

export const Heading: React.FC<HeadingProps> = ({
  children,
  level,
  size,
  className,
  as,
}) => {
  const Component = as || (`h${level}` as const);
  
  // Auto-determine size based on level if not provided
  const autoSize = size || (['3xl', '2xl', 'xl', 'lg', 'md', 'sm'][level - 1] as keyof typeof headingSizes);
  
  const classes = clsx(
    'font-garamond text-minova-charcoal leading-tight',
    headingSizes[autoSize],
    className
  );

  return <Component className={classes}>{children}</Component>;
};

// components/ui/Text.tsx
interface TextProps {
  children: React.ReactNode;
  size?: 'xs' | 'sm' | 'base' | 'lg' | 'xl';
  color?: 'charcoal' | 'sage' | 'terracotta' | 'gold' | 'muted';
  weight?: 'normal' | 'medium' | 'semibold' | 'bold';
  className?: string;
  as?: 'p' | 'span' | 'div';
}

const textSizes = {
  xs: 'text-xs',
  sm: 'text-sm',
  base: 'text-base',
  lg: 'text-lg',
  xl: 'text-xl',
};

const textColors = {
  charcoal: 'text-minova-charcoal',
  sage: 'text-minova-sage',
  terracotta: 'text-minova-terracotta',
  gold: 'text-minova-gold',
  muted: 'text-gray-600',
};

const textWeights = {
  normal: 'font-normal',
  medium: 'font-medium',
  semibold: 'font-semibold',
  bold: 'font-bold',
};

export const Text: React.FC<TextProps> = ({
  children,
  size = 'base',
  color = 'charcoal',
  weight = 'normal',
  className,
  as: Component = 'p',
}) => {
  const classes = clsx(
    'font-madefor',
    textSizes[size],
    textColors[color],
    textWeights[weight],
    className
  );

  return <Component className={classes}>{children}</Component>;
};

// Export all components
export { Card, Badge, Container, Section, Heading, Text };