import React, { useState } from 'react';
import { Menu, X, Download } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import { Locale, LocalizedContent } from '../types';
import RaycastButton from './ui/RaycastButton';
import curriculoPDF from '../src/assets/leonardo-brahim-curriculo.pdf';

interface NavbarProps {
  locale: Locale;
  onChangeLocale: (locale: Locale) => void;
  copy: LocalizedContent['nav'];
}

const Navbar: React.FC<NavbarProps> = ({ locale, onChangeLocale, copy }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: copy.about, href: '#home' },
    { name: copy.projects, href: '#projects' },
    { name: copy.experience, href: '#experience' },
    { name: copy.stack, href: '#stack' },
    { name: copy.contact, href: '#contact' },
  ];

  const LanguageSwitch = () => (
    <div
      role="group"
      aria-label="Selecionar idioma / Select language"
      className="inline-flex items-center p-0.5 rounded-lg bg-white/[0.04] border border-white/[0.08]"
    >
      {(['pt', 'en'] as Locale[]).map((lang) => {
        const active = locale === lang;
        return (
          <button
            key={lang}
            type="button"
            onClick={() => onChangeLocale(lang)}
            aria-pressed={active}
            className={`px-2 py-1 rounded-md text-[11px] font-mono uppercase transition-colors cursor-pointer ${
              active
                ? 'bg-white/[0.12] text-white font-semibold shadow-[inset_0_1px_0_rgba(255,255,255,0.14)]'
                : 'text-[#9c9c9d] hover:text-white'
            }`}
          >
            {lang}
          </button>
        );
      })}
    </div>
  );

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 pt-4">
      <nav
        aria-label="Main navigation"
        className="max-w-5xl mx-auto rounded-xl border border-white/[0.09] bg-[#0d0e11]/80 backdrop-blur-xl shadow-[0_12px_32px_-8px_rgba(0,0,0,0.7),inset_0_1px_0_rgba(255,255,255,0.08)] px-4 py-2.5 flex items-center justify-between gap-4"
      >
        {/* Brand */}
        <a
          href="#home"
          className="text-sm font-semibold tracking-tight text-[#f4f4f6] hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ff6363]/70 rounded-md px-1 py-0.5"
        >
          Leonardo Brahim
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-[13px] font-medium text-[#9c9c9d] hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ff6363]/70 rounded px-1 py-0.5"
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center gap-3">
          <LanguageSwitch />

          <a
            href={curriculoPDF}
            download="Leonardo_Brahim_Curriculo.pdf"
            className="no-underline"
          >
            <RaycastButton variant="primary" size="sm">
              <Download className="w-3.5 h-3.5" />
              {copy.cvButton}
            </RaycastButton>
          </a>
        </div>

        {/* Mobile Controls */}
        <div className="flex md:hidden items-center gap-2">
          <LanguageSwitch />
          <button
            type="button"
            onClick={() => setIsOpen((prev) => !prev)}
            aria-label={isOpen ? copy.closeMenu : copy.openMenu}
            aria-expanded={isOpen}
            className="p-2 rounded-lg bg-white/[0.05] border border-white/[0.1] text-[#f4f4f6] hover:bg-white/[0.1] cursor-pointer"
          >
            {isOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.15 }}
            className="md:hidden max-w-5xl mx-auto mt-2 rounded-xl border border-white/[0.1] bg-[#101114]/95 backdrop-blur-2xl p-4 shadow-[0_24px_48px_rgba(0,0,0,0.8)] flex flex-col gap-1"
          >
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="px-3 py-2.5 rounded-lg text-sm font-medium text-[#cdcdcd] hover:text-white hover:bg-white/[0.06] transition-colors"
              >
                {item.name}
              </a>
            ))}
            <div className="pt-2 mt-2 border-t border-white/[0.08]">
              <a
                href={curriculoPDF}
                download="Leonardo_Brahim_Curriculo.pdf"
                onClick={() => setIsOpen(false)}
                className="no-underline block"
              >
                <RaycastButton variant="primary" className="w-full justify-center">
                  <Download className="w-4 h-4" />
                  {copy.cvDownloadLabel}
                </RaycastButton>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
