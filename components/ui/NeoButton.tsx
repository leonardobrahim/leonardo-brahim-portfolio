import React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';

interface NeoButtonProps extends HTMLMotionProps<"button"> {
  variant?: 'primary' | 'secondary' | 'sticker';
  children: React.ReactNode;
}

const NeoButton: React.FC<NeoButtonProps> = ({ variant = 'primary', children, className, ...props }) => {
  const baseStyle = "font-bold border-2 border-black transition-all outline-none";
  
  const variants = {
    primary: "bg-neo-yellow hover:bg-yellow-300 text-black px-6 py-2 rounded-lg shadow-neo active:shadow-none active:translate-x-[5px] active:translate-y-[5px]",
    secondary: "bg-white hover:bg-gray-100 text-black px-6 py-2 rounded-lg shadow-neo-sm active:shadow-none active:translate-x-[3px] active:translate-y-[3px]",
    sticker: "bg-neo-pink text-white rotate-[-3deg] hover:rotate-[0deg] px-8 py-3 rounded-full border-4 border-white shadow-neo-lg text-lg uppercase tracking-wider"
  };

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`${baseStyle} ${variants[variant]} ${className || ''}`}
      {...props}
    >
      {children}
    </motion.button>
  );
};

export default NeoButton;