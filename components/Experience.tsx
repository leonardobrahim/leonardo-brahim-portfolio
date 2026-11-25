import React from 'react';
import { Briefcase, GraduationCap, Globe } from 'lucide-react';
import {
  Education,
  Experience as ExperienceType,
  Language,
  LocalizedContent,
} from '../types';
import Reveal from './ui/Reveal';

interface ExperienceProps {
  experience: ExperienceType[];
  education: Education[];
  languages: Language[];
  copy: LocalizedContent['experienceSection'];
}

const Experience: React.FC<ExperienceProps> = ({
  experience,
  education,
  languages,
  copy,
}) => {
  return (
    <section id="experience" className="py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="mb-10">
          <p className="text-xs font-mono uppercase tracking-widest text-[#ff6363] mb-2">
            {copy.eyebrow}
          </p>
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white">
            {copy.title}
          </h2>
        </div>

        <div className="grid lg:grid-cols-12 gap-8">
          {/* Experiência Profissional */}
          <div className="lg:col-span-7 space-y-5">
            <div className="flex items-center gap-2.5 text-sm font-medium text-[#f4f4f6]">
              <span className="w-7 h-7 rounded-lg bg-[#ff6363]/15 border border-[#ff6363]/30 flex items-center justify-center text-[#ff6363]">
                <Briefcase className="w-3.5 h-3.5" />
              </span>
              <span>{copy.experienceHeading}</span>
            </div>

            <div className="space-y-4">
              {experience.map((job, idx) => (
                <Reveal key={`${job.company}-${job.period}`} delayMs={idx * 60}>
                  <div className="raycast-card raycast-card-hover rounded-xl p-6 space-y-4">
                    <div className="flex flex-wrap items-start justify-between gap-2">
                      <div>
                        <h3 className="text-lg font-semibold text-white">
                          {job.role}
                        </h3>
                        <p className="text-sm text-[#cdcdcd] mt-0.5">
                          {job.company}
                        </p>
                      </div>
                      <span className="px-2.5 py-1 rounded-md text-xs font-mono text-[#ff6363] bg-[#ff6363]/10 border border-[#ff6363]/25 shrink-0">
                        {job.period}
                      </span>
                    </div>

                    <ul className="space-y-2 text-sm text-[#9c9c9d] leading-relaxed">
                      {job.highlights.map((bullet) => (
                        <li key={bullet} className="flex items-start gap-2.5">
                          <span className="mt-2 w-1.5 h-1.5 rounded-full bg-white/30 shrink-0" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          {/* Formação & Idiomas */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-4">
              <div className="flex items-center gap-2.5 text-sm font-medium text-[#f4f4f6]">
                <span className="w-7 h-7 rounded-lg bg-[#56c2ff]/15 border border-[#56c2ff]/30 flex items-center justify-center text-[#56c2ff]">
                  <GraduationCap className="w-3.5 h-3.5" />
                </span>
                <span>{copy.educationHeading}</span>
              </div>

              <div className="space-y-3">
                {education.map((edu, idx) => (
                  <Reveal key={edu.degree} delayMs={idx * 60}>
                    <div className="raycast-card raycast-card-hover rounded-xl p-5 space-y-2">
                      <span className="inline-block px-2 py-0.5 rounded text-[11px] font-mono text-[#56c2ff] bg-[#56c2ff]/10 border border-[#56c2ff]/25">
                        {edu.period}
                      </span>
                      <h3 className="text-base font-semibold text-white">
                        {edu.degree}
                      </h3>
                      <p className="text-sm text-[#cdcdcd]">{edu.school}</p>
                      {edu.details && (
                        <p className="text-xs text-[#71717a]">{edu.details}</p>
                      )}
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-2.5 text-sm font-medium text-[#f4f4f6]">
                <span className="w-7 h-7 rounded-lg bg-emerald-400/15 border border-emerald-400/30 flex items-center justify-center text-emerald-400">
                  <Globe className="w-3.5 h-3.5" />
                </span>
                <span>{copy.languagesHeading}</span>
              </div>

              <div className="raycast-card rounded-xl divide-y divide-white/[0.07]">
                {languages.map((lang) => (
                  <div
                    key={lang.language}
                    className="px-5 py-3.5 flex items-center justify-between"
                  >
                    <span className="text-sm font-medium text-[#f4f4f6]">
                      {lang.language}
                    </span>
                    <span className="px-2.5 py-0.5 rounded-md text-xs font-mono text-[#cdcdcd] bg-white/[0.05] border border-white/[0.08]">
                      {lang.level}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
