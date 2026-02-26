import React from 'react';
import { motion } from 'framer-motion';
import { TECH_STACK } from '../constants';

const TechStack: React.FC = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1 }
  };

  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white dark:bg-gray-800 border-4 border-black shadow-neo-lg rounded-2xl p-8 md:p-12 relative overflow-hidden">
          
          {/* Header */}
          <div className="mb-10 text-center">
            <h2 className="text-4xl font-black text-black dark:text-white mb-4 uppercase">
              Tech Stack
            </h2>
            <div className="h-2 w-24 bg-neo-pink mx-auto border-2 border-black"></div>
          </div>

          {/* Grid of Pills */}
          <motion.div 
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-4"
          >
            {TECH_STACK.map((tech) => (
              <motion.div
                key={tech.name}
                variants={item}
                whileHover={{ scale: 1.1, rotate: Math.random() * 4 - 2 }}
                className={`${tech.color} px-6 py-3 rounded-full border-2 border-black shadow-neo-sm cursor-default flex items-center gap-2`}
              >
                <tech.icon size={20} className="text-black" />
                <span className="font-bold text-black">{tech.name}</span>
              </motion.div>
            ))}
          </motion.div>

          {/* Decorative Corner */}
          <div className="absolute -top-6 -right-6 w-24 h-24 bg-cartoon-blue border-4 border-black rounded-full"></div>
          <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-neo-yellow border-4 border-black rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;