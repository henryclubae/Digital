'use client';

import React, { ButtonHTMLAttributes, forwardRef } from 'react';
import { Loader2 } from 'lucide-react';
import { cn } from '@/lib/utils';
import { cva, type VariantProps } from 'class-variance-authority';

const buttonVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        default: 'bg-primary-600 text-primary-foreground hover:bg-primary-700 active:bg-primary-800',
        destructive: 'bg-red-600 text-white hover:bg-red-700 active:bg-red-800',
        outline: 'border border-input bg-transparent hover:bg-accent hover:text-accent-foreground active:bg-accent/80',
        secondary: 'bg-gray-200 text-gray-900 hover:bg-gray-300 active:bg-gray-400',
        ghost: 'bg-transparent hover:bg-accent hover:text-accent-foreground active:bg-accent/80',
        link: 'text-blue-600 underline-offset-4 hover:underline active:text-blue-700',
        whatsapp: 'bg-green-600 text-white hover:bg-green-700 active:bg-green-800',
        phone: 'bg-blue-600 text-white hover:bg-blue-700 active:bg-blue-800',
        'dubai-gold': 'bg-[#D4AF37] text-gray-900 hover:bg-[#C19B26] active:bg-[#B8921F]'
      },
      size: {
        default: 'h-10 px-4 py-2',
        sm: 'h-9 rounded-md px-3',
        lg: 'h-11 rounded-md px-8',
        icon: 'h-10 w-10'
      }
    },
    defaultVariants: {
      variant: 'default',
      size: 'default'
    }
  }
);

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  loading?: boolean;
  icon?: 'left' | 'right';
  children?: React.ReactNode;
}

// Loading icon component defined outside render
const LoadingSpinner = () => (
  <Loader2 className="h-4 w-4 animate-spin" />
);

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ 
    className, 
    variant, 
    size, 
    loading = false,
    icon,
    disabled,
    children,
    ...props 
  }, ref) => {
    // Determine if button should be disabled (loading or explicitly disabled)
    const isDisabled = loading || disabled;

    // Content with proper spacing for icons
    const buttonContent = (
      <>
        {/* Left icon or loading spinner */}
        {(icon === 'left' || (loading && !icon)) && (
          <span className={cn('inline-flex', children && 'mr-2')}>
            <LoadingSpinner />
          </span>
        )}
        
        {/* Button text content */}
        {children && (
          <span className={cn(
            loading && !icon && 'ml-2',
            loading && icon === 'right' && 'mr-2'
          )}>
            {children}
          </span>
        )}
        
        {/* Right icon or loading spinner */}
        {icon === 'right' && loading && (
          <span className={cn('inline-flex', children && 'ml-2')}>
            <LoadingSpinner />
          </span>
        )}
      </>
    );

    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        disabled={isDisabled}
        {...(isDisabled && { 'aria-disabled': true })}
        {...(loading && { 'aria-busy': true })}
        {...props}
      >
        {buttonContent}
      </button>
    );
  }
);

Button.displayName = 'Button';

export { Button, buttonVariants };