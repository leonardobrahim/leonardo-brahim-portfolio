import React from 'react';
import { motion } from 'framer-motion';

interface StickerImageProps {
  src: string;
  alt: string;
  className?: string;
}

const StickerImage: React.FC<StickerImageProps> = ({ src, alt, className = "" }) => {
  return (
    <motion.div
      initial={{ scale: 0.8, rotate: -5, opacity: 0 }}
      animate={{ scale: 1, rotate: 0, opacity: 1 }}
      transition={{ type: "spring", bounce: 0.5, duration: 0.8 }}
      className={`relative inline-block ${className}`}
    >
      {/* Sombra removida, adicionada borda preta simples */}
      <div className="relative z-10 p-2 bg-white rounded-full overflow-hidden border-4 border-black">
        {/* White outline simulation inside the wrapper */}
        <img 
          src={src} 
          alt={alt} 
          className="w-full h-full object-cover rounded-full border-4 border-white"
        />
      </div>
    </motion.div>
  );
};

export default StickerImage;