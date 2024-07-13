// src/components/ui/Button.tsx
import React from 'react';

interface ButtonProps {
    variant?: 'outline' | 'solid';
    size?: 'small' | 'medium' | 'large';
    className?: string;
    children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
                                                  variant = 'solid',
                                                  size = 'medium',
                                                  className = '',
                                                  children,
                                                  ...props
                                              }) => {
    const baseStyle =
        'inline-flex items-center justify-center rounded-md font-medium shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50';
    const variantStyle =
        variant === 'outline'
            ? 'border border-input bg-background'
            : 'bg-primary text-primary-foreground';
    const sizeStyle =
        size === 'small'
            ? 'h-8 px-4 text-sm'
            : size === 'large'
                ? 'h-12 px-8 text-lg'
                : 'h-10 px-6 text-sm';

    return (
        <button
            className={`${baseStyle} ${variantStyle} ${sizeStyle} ${className}`}
            {...props}
        >
            {children}
        </button>
    );
};
