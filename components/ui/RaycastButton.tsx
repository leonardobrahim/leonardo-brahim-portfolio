import React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';

interface RaycastButtonProps extends HTMLMotionProps<'button'> {
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md';
  children: React.ReactNode;
}

const RaycastButton: React.FC<RaycastButtonProps> = ({
  variant = 'primary',
  size = 'md',
  children,
  className = '',
  type = 'button',
  ...props
}) => {
  const base =
    'inline-flex items-center justify-center gap-2 font-medium rounded-lg transition-all duration-150 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ff6363]/70 focus-visible:ring-offset-2 focus-visible:ring-offset-[#07080a] disabled:opacity-45 disabled:cursor-not-allowed';

  const sizes = {
    sm: 'text-xs px-3 py-1.5',
    md: 'text-sm px-4 py-2.5',
  };

  const variants = {
    primary:
      'bg-[#ff6363] text-white hover:bg-[#ff7373] shadow-[0_1px_16px_rgba(255,99,99,0.32),inset_0_1px_0_rgba(255,255,255,0.28)] active:scale-[0.98]',
    secondary:
      'bg-white/[0.06] text-[#f4f4f6] border border-white/[0.12] hover:bg-white/[0.1] hover:border-white/[0.2] shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] active:scale-[0.98]',
    ghost:
      'bg-transparent text-[#9c9c9d] hover:text-white hover:bg-white/[0.06] active:scale-[0.98]',
  };

  return (
    <motion.button
      type={type}
      whileTap={{ scale: 0.98 }}
      className={`${base} ${sizes[size]} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </motion.button>
  );
};

export default RaycastButton;
