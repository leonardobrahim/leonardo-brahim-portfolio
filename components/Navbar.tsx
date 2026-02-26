import React, { useState } from 'react';
import { Menu, X, Moon, Sun } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import NeoButton from './ui/NeoButton';

interface NavbarProps {
  isDark: boolean;
  toggleTheme: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ isDark, toggleTheme }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'Sobre', href: '#home' },
    { name: 'Tech Stack', href: '#about' },
    { name: 'Projetos', href: '#projects' },
    { name: 'Experiência', href: '#experience' },
    { name: 'Contato', href: '#contact' },
  ];

  const handleContactClick = () => {
    document.getElementById('contact')?.scrollIntoView();
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 px-4 py-4">
      <div className="max-w-6xl mx-auto bg-white/90 dark:bg-black/90 backdrop-blur-md border-2 border-black rounded-xl shadow-neo-sm p-4 flex justify-between items-center">
        
        {/* Logo */}
        <a href="#" className="text-2xl font-black uppercase tracking-tighter dark:text-white">
          LB<span className="text-cartoon-blue">.</span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a 
              key={item.name} 
              href={item.href}
              className="font-bold hover:text-cartoon-blue dark:text-white dark:hover:text-neo-yellow transition-colors"
            >
              {item.name}
            </a>
          ))}
          <button 
            onClick={toggleTheme} 
            className="p-2 border-2 border-black rounded-full hover:bg-gray-100 dark:bg-white dark:text-black dark:hover:bg-gray-200 transition-colors"
            aria-label="Toggle Dark Mode"
          >
            {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>
          <NeoButton 
            variant="sticker" 
            className="!py-1 !px-4 !text-sm !shadow-neo-sm"
            onClick={handleContactClick}
          >
            Fale Comigo
          </NeoButton>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden flex items-center gap-4">
          <button onClick={toggleTheme} className="p-2 border-2 border-black rounded-md bg-white text-black">
             {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>
          <button onClick={() => setIsOpen(!isOpen)} className="p-2 border-2 border-black rounded-md bg-neo-yellow text-black">
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-24 left-4 right-4 bg-white border-2 border-black shadow-neo rounded-xl p-6 flex flex-col gap-4 md:hidden"
          >
            {navItems.map((item) => (
              <a 
                key={item.name} 
                href={item.href}
                className="text-lg font-bold text-center py-2 hover:bg-gray-100 rounded-lg"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <NeoButton 
              variant="sticker" 
              className="w-full justify-center"
              onClick={handleContactClick}
            >
              Fale Comigo
            </NeoButton>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;