import React from 'react';
import { motion } from 'framer-motion';
import { Layout, Database, BarChart3 } from 'lucide-react';
import { LocalizedContent, TechCategory } from '../types';

interface TechStackProps {
  categories: TechCategory[];
  copy: LocalizedContent['stackSection'];
}

const accentConfig = {
  red: {
    icon: <Layout className="w-4 h-4 text-[#ff6363]" />,
    badge: 'bg-[#ff6363]/10 border-[#ff6363]/25',
    dot: 'bg-[#ff6363]',
  },
  blue: {
    icon: <Database className="w-4 h-4 text-[#56c2ff]" />,
    badge: 'bg-[#56c2ff]/10 border-[#56c2ff]/25',
    dot: 'bg-[#56c2ff]',
  },
  amber: {
    icon: <BarChart3 className="w-4 h-4 text-amber-400" />,
    badge: 'bg-amber-400/10 border-amber-400/25',
    dot: 'bg-amber-400',
  },
};

const TechStack: React.FC<TechStackProps> = ({ categories, copy }) => {
  return (
    <section id="stack" className="py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <div>
            <p className="text-xs font-mono uppercase tracking-widest text-[#ff6363] mb-2">
              {copy.eyebrow}
            </p>
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white">
              {copy.title}
            </h2>
          </div>
          <p className="text-sm text-[#9c9c9d] max-w-md">{copy.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {categories.map((category, idx) => {
            const style = accentConfig[category.accent];
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: idx * 0.06 }}
                className="raycast-card raycast-card-hover rounded-xl p-6 flex flex-col justify-between gap-5"
              >
                <div className="space-y-2">
                  <div
                    className={`w-9 h-9 rounded-lg border flex items-center justify-center ${style.badge}`}
                  >
                    {style.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-white pt-1">
                    {category.title}
                  </h3>
                  <p className="text-xs text-[#9c9c9d] leading-relaxed">
                    {category.subtitle}
                  </p>
                </div>

                <div className="flex flex-wrap gap-1.5">
                  {category.items.map((tech) => (
                    <span
                      key={tech}
                      className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-medium text-[#cdcdcd] bg-white/[0.04] border border-white/[0.08] hover:border-white/[0.2] hover:text-white transition-colors"
                    >
                      <span
                        className={`w-1 h-1 rounded-full ${style.dot} opacity-80`}
                      />
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
