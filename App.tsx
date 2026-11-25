import React, { useCallback, useEffect, useState } from 'react';
import { Check } from 'lucide-react';
import Background from './components/Background';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Experience from './components/Experience';
import TechStack from './components/TechStack';
import Footer from './components/Footer';
import { PERSONAL_SHARED, PORTFOLIO_CONTENT } from './constants';
import { Locale } from './types';

const LOCALE_STORAGE_KEY = 'portfolio-locale';

const getInitialLocale = (): Locale => {
  try {
    const saved = localStorage.getItem(LOCALE_STORAGE_KEY);
    if (saved === 'pt' || saved === 'en') return saved;
  } catch {
    // Ignore storage access failures
  }
  return 'pt';
};

const App: React.FC = () => {
  const [locale, setLocale] = useState<Locale>(getInitialLocale);
  const [toast, setToast] = useState<string | null>(null);

  const content = PORTFOLIO_CONTENT[locale];

  useEffect(() => {
    document.documentElement.lang = locale === 'pt' ? 'pt-BR' : 'en';
    document.title = content.metaTitle;
    try {
      localStorage.setItem(LOCALE_STORAGE_KEY, locale);
    } catch {
      // Ignore storage access failures
    }
  }, [locale, content.metaTitle]);

  const handleCopy = useCallback(async (value: string, label: string) => {
    try {
      await navigator.clipboard.writeText(value);
      setToast(label);
    } catch {
      setToast(value);
    }
  }, []);

  useEffect(() => {
    if (!toast) return;
    const timer = setTimeout(() => setToast(null), 2400);
    return () => clearTimeout(timer);
  }, [toast]);

  return (
    <div className="min-h-screen relative isolate overflow-x-clip bg-[#07080a] text-[#f4f4f6] font-sans">
      <Background />

      <Navbar
        locale={locale}
        onChangeLocale={setLocale}
        copy={content.nav}
      />

      <main className="relative z-10">
        <Hero
          personal={PERSONAL_SHARED}
          copy={content.hero}
          techCategories={content.techCategories}
          unitLabel={content.stackSection.unitLabel}
          onCopyEmail={() =>
            handleCopy(PERSONAL_SHARED.email, content.hero.emailCopiedToast)
          }
        />
        <Projects
          projects={content.projects}
          copy={content.projectsSection}
          onCopy={handleCopy}
        />
        <Experience
          experience={content.experience}
          education={content.education}
          languages={content.languages}
          copy={content.experienceSection}
        />
        <TechStack
          categories={content.techCategories}
          copy={content.stackSection}
        />
      </main>

      <Footer
        personal={PERSONAL_SHARED}
        copy={content.footer}
        onCopy={handleCopy}
      />

      {/* Toast notification */}
      {toast && (
        <div className="animate-toast fixed bottom-6 left-1/2 -translate-x-1/2 z-[110] flex items-center gap-2 px-4 py-2.5 rounded-full border border-white/[0.14] bg-[#141519]/95 shadow-[0_16px_40px_rgba(0,0,0,0.8)] text-xs font-medium text-white">
          <span className="w-4 h-4 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
            <Check className="w-3 h-3" />
          </span>
          <span>{toast}</span>
        </div>
      )}
    </div>
  );
};

export default App;
