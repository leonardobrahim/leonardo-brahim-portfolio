import React from 'react';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  Download,
  Github,
  Linkedin,
  Mail,
  BarChart3,
  MapPin,
} from 'lucide-react';
import { LocalizedContent, PersonalShared, TechCategory } from '../types';
import RaycastButton from './ui/RaycastButton';
import curriculoPDF from '../src/assets/leonardo-brahim-curriculo.pdf';

interface HeroProps {
  personal: PersonalShared;
  copy: LocalizedContent['hero'];
  techCategories: TechCategory[];
  unitLabel: string;
  onCopyEmail: () => void;
}

const barColors: Record<TechCategory['accent'], string> = {
  red: 'from-[#ff6363] to-[#ff8a65]',
  blue: 'from-[#56c2ff] to-[#38bdf8]',
  amber: 'from-amber-400 to-orange-400',
};

const Hero: React.FC<HeroProps> = ({
  personal,
  copy,
  techCategories,
  unitLabel,
  onCopyEmail,
}) => {
  const maxItems = Math.max(...techCategories.map((c) => c.items.length), 1);

  return (
    <section
      id="home"
      className="relative pt-32 pb-20 md:pt-40 md:pb-28 px-4"
    >
      <div className="max-w-5xl mx-auto grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
        {/* Left: Core Positioning */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="lg:col-span-7 space-y-6"
        >
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-full border border-white/[0.1] bg-white/[0.04] backdrop-blur-md text-xs font-medium text-[#cdcdcd]">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#ff6363] opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#ff6363]" />
            </span>
            <span>{copy.availability}</span>
          </div>

          {/* Headline */}
          <div className="space-y-3">
            <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-semibold tracking-[-0.03em] leading-[1.08] text-white">
              {personal.name}
              <span className="block mt-1.5 bg-gradient-to-r from-[#ffffff] via-[#e4e4e7] to-[#9c9c9d] bg-clip-text text-transparent text-2xl sm:text-3xl lg:text-[2rem] font-medium tracking-[-0.02em]">
                {copy.headline}
              </span>
            </h1>
          </div>

          {/* Bio */}
          <p className="text-base sm:text-[17px] leading-relaxed text-[#9c9c9d] max-w-xl tracking-[0.005em]">
            {copy.bio}
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <RaycastButton
              variant="primary"
              onClick={() =>
                document
                  .getElementById('projects')
                  ?.scrollIntoView({ behavior: 'smooth' })
              }
            >
              {copy.ctaProjects}
              <ArrowRight className="w-4 h-4" />
            </RaycastButton>

            <a
              href={curriculoPDF}
              download="Leonardo_Brahim_Curriculo.pdf"
              className="no-underline"
            >
              <RaycastButton variant="secondary">
                <Download className="w-4 h-4" />
                {copy.ctaCv}
              </RaycastButton>
            </a>

            <div className="flex items-center gap-1.5 pl-1">
              <a
                href={personal.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="p-2.5 rounded-lg border border-white/[0.08] bg-white/[0.03] text-[#9c9c9d] hover:text-white hover:border-white/[0.18] transition-colors"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="p-2.5 rounded-lg border border-white/[0.08] bg-white/[0.03] text-[#9c9c9d] hover:text-white hover:border-white/[0.18] transition-colors"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <button
                type="button"
                onClick={onCopyEmail}
                aria-label={copy.copyEmailAria}
                title={copy.copyEmailAria}
                className="p-2.5 rounded-lg border border-white/[0.08] bg-white/[0.03] text-[#9c9c9d] hover:text-white hover:border-white/[0.18] transition-colors cursor-pointer"
              >
                <Mail className="w-4 h-4" />
              </button>
            </div>
          </div>
        </motion.div>

        {/* Right: Raycast-style Metrics & BI Widget */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.1, ease: 'easeOut' }}
          className="lg:col-span-5"
        >
          <div className="relative">
            {/* Ambient coral + blue glow behind widget */}
            <div
              aria-hidden="true"
              className="absolute -inset-4 rounded-2xl blur-2xl opacity-60 pointer-events-none"
              style={{
                background:
                  'radial-gradient(circle at 70% 20%, rgba(255,99,99,0.2), transparent 60%), radial-gradient(circle at 20% 85%, rgba(86,194,255,0.12), transparent 60%)',
              }}
            />

            <div className="relative raycast-card rounded-xl overflow-hidden">
              {/* Widget Header */}
              <div className="flex items-center justify-between gap-3 px-4 py-3 border-b border-white/[0.08] bg-white/[0.02]">
                <div className="flex items-center gap-2 min-w-0">
                  <span className="w-6 h-6 rounded-md bg-[#ff6363]/15 border border-[#ff6363]/30 flex items-center justify-center text-[#ff6363] shrink-0">
                    <BarChart3 className="w-3.5 h-3.5" />
                  </span>
                  <span className="text-xs font-medium text-[#f4f4f6] truncate">
                    {copy.widget.title}
                  </span>
                </div>
                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-white/[0.05] border border-white/[0.08] text-[11px] font-mono text-[#9c9c9d] shrink-0">
                  <MapPin className="w-3 h-3 text-[#ff6363]" />
                  {copy.widget.badge}
                </span>
              </div>

              {/* 2x2 KPI Tiles */}
              <div className="p-3.5 grid grid-cols-2 gap-2.5">
                {copy.widget.kpis.map((kpi) => (
                  <div
                    key={kpi.label}
                    className="p-3 rounded-lg bg-white/[0.03] border border-white/[0.07] hover:border-white/[0.14] transition-colors"
                  >
                    <p className="text-lg font-semibold tracking-tight text-white">
                      {kpi.value}
                    </p>
                    <p className="text-xs font-medium text-[#cdcdcd] mt-0.5">
                      {kpi.label}
                    </p>
                    <p className="text-[11px] text-[#71717a] mt-0.5 truncate">
                      {kpi.detail}
                    </p>
                  </div>
                ))}
              </div>

              {/* Stack Distribution Mini Chart */}
              <div className="px-4 pb-4 pt-1 space-y-3">
                <div className="flex items-center justify-between text-[11px]">
                  <span className="font-medium text-[#cdcdcd]">
                    {copy.widget.chartTitle}
                  </span>
                  <span className="font-mono text-[#71717a]">
                    {copy.widget.chartSubtitle}
                  </span>
                </div>

                <div className="space-y-2.5">
                  {techCategories.map((cat) => {
                    const pct = Math.round((cat.items.length / maxItems) * 100);
                    return (
                      <div key={cat.title} className="space-y-1">
                        <div className="flex items-center justify-between text-[11px]">
                          <span className="text-[#9c9c9d]">{cat.title}</span>
                          <span className="font-mono text-[#cdcdcd]">
                            {cat.items.length} {unitLabel}
                          </span>
                        </div>
                        <div className="h-1.5 w-full rounded-full bg-white/[0.06] overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: `${pct}%` }}
                            transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
                            className={`h-full rounded-full bg-gradient-to-r ${barColors[cat.accent]}`}
                          />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Widget Footer */}
              <div className="px-4 py-2.5 border-t border-white/[0.07] bg-white/[0.015] flex items-center justify-between text-[11px] text-[#71717a]">
                <span className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  {copy.widget.statusText}
                </span>
                <span className="font-mono text-[#9c9c9d]">
                  {copy.widget.focusTag}
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
