'use client';

import React, { HTMLAttributes, forwardRef } from 'react';
import { cn } from '@/lib/utils';
import { cva, type VariantProps } from 'class-variance-authority';

// Card variants
const cardVariants = cva(
  'rounded-lg border bg-card text-card-foreground transition-shadow duration-200',
  {
    variants: {
      variant: {
        default: 'bg-white shadow-sm hover:shadow-md',
        elevated: 'bg-white shadow-lg hover:shadow-xl',
        outlined: 'bg-white border-2 shadow-sm hover:shadow-md',
        gradient: 'bg-gradient-to-br from-white to-gray-50 shadow-sm hover:shadow-md'
      }
    },
    defaultVariants: {
      variant: 'default'
    }
  }
);

// Badge variants for card badges
const badgeVariants = cva(
  'absolute top-3 right-3 px-2 py-1 text-xs font-medium rounded-full z-10',
  {
    variants: {
      badge: {
        popular: 'bg-blue-100 text-blue-800 border border-blue-200',
        new: 'bg-green-100 text-green-800 border border-green-200',
        featured: 'bg-amber-100 text-amber-800 border border-amber-200'
      }
    }
  }
);

// Card Root Component
export interface CardProps 
  extends HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof cardVariants> {
  badge?: 'popular' | 'new' | 'featured';
  badgeText?: string;
  imageOverlay?: boolean;
}

const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ 
    className, 
    variant, 
    badge, 
    badgeText, 
    imageOverlay = false,
    children, 
    ...props 
  }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          cardVariants({ variant }),
          imageOverlay && 'relative overflow-hidden',
          className
        )}
        {...props}
      >
        {badge && (
          <div className={cn(badgeVariants({ badge }))}>
            {badgeText || (badge === 'popular' ? 'Popular' : badge === 'new' ? 'New' : 'Featured')}
          </div>
        )}
        {children}
      </div>
    );
  }
);

Card.displayName = 'Card';

// Card Header Component
export interface CardHeaderProps extends HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
}

const CardHeader = forwardRef<HTMLDivElement, CardHeaderProps>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn('flex flex-col space-y-1.5 p-6 pb-0', className)}
      {...props}
    />
  )
);

CardHeader.displayName = 'CardHeader';

// Card Title Component
export interface CardTitleProps extends HTMLAttributes<HTMLHeadingElement> {
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  children?: React.ReactNode;
}

const CardTitle = forwardRef<HTMLHeadingElement, CardTitleProps>(
  ({ className, as: Component = 'h3', ...props }, ref) => (
    <Component
      ref={ref as React.Ref<HTMLHeadingElement>}
      className={cn(
        'text-2xl font-semibold leading-none tracking-tight',
        className
      )}
      {...props}
    />
  )
);

CardTitle.displayName = 'CardTitle';

// Card Description Component
export interface CardDescriptionProps extends HTMLAttributes<HTMLParagraphElement> {
  children?: React.ReactNode;
}

const CardDescription = forwardRef<HTMLParagraphElement, CardDescriptionProps>(
  ({ className, ...props }, ref) => (
    <p
      ref={ref}
      className={cn('text-sm text-muted-foreground', className)}
      {...props}
    />
  )
);

CardDescription.displayName = 'CardDescription';

// Card Content Component
export interface CardContentProps extends HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
}

const CardContent = forwardRef<HTMLDivElement, CardContentProps>(
  ({ className, ...props }, ref) => (
    <div 
      ref={ref} 
      className={cn('p-6 pt-0', className)} 
      {...props} 
    />
  )
);

CardContent.displayName = 'CardContent';

// Card Footer Component
export interface CardFooterProps extends HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
}

const CardFooter = forwardRef<HTMLDivElement, CardFooterProps>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn('flex items-center p-6 pt-0', className)}
      {...props}
    />
  )
);

CardFooter.displayName = 'CardFooter';

// Export all components and types
export { 
  Card, 
  CardHeader, 
  CardFooter, 
  CardTitle, 
  CardDescription, 
  CardContent,
  cardVariants,
  badgeVariants
};