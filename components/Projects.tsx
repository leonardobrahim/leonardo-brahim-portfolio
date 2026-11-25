import React, { useEffect, useState } from 'react';
import {
  ArrowUpRight,
  Copy,
  Github,
  KeyRound,
  Lock,
  Sparkles,
  X,
  Info,
} from 'lucide-react';
import { LocalizedContent, Project } from '../types';
import RaycastButton from './ui/RaycastButton';
import Reveal from './ui/Reveal';

interface ProjectsProps {
  projects: Project[];
  copy: LocalizedContent['projectsSection'];
  onCopy: (value: string, label: string) => void;
}

const ProjectCard: React.FC<{
  project: Project;
  copy: LocalizedContent['projectsSection'];
  onSelect: (project: Project) => void;
  onCopy: (value: string, label: string) => void;
  delayMs?: number;
}> = ({ project, copy, onSelect, onCopy, delayMs = 0 }) => {
  return (
    <Reveal delayMs={delayMs} className="h-full">
      <article className="raycast-card raycast-card-hover rounded-xl overflow-hidden flex flex-col h-full group">
        {/* Preview Frame */}
        <button
          type="button"
          onClick={() => onSelect(project)}
          aria-label={`${copy.detailsButton}: ${project.title}`}
          className="relative aspect-[16/9] w-full overflow-hidden border-b border-white/[0.08] bg-[#0b0c0f] text-left cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ff6363]"
        >
          <div className="absolute top-3 left-3 z-10 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/75 border border-white/10">
            <span className="w-2 h-2 rounded-full bg-[#ff6363]/80" />
            <span className="w-2 h-2 rounded-full bg-amber-400/80" />
            <span className="w-2 h-2 rounded-full bg-emerald-400/80" />
          </div>

          <div className="absolute top-3 right-3 z-10 flex items-center gap-1.5">
            {project.featured && (
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-[#2a1215]/90 border border-[#ff6363]/40 text-[#ffb4b4] text-[11px] font-medium">
                <Sparkles className="w-3 h-3" />
                {copy.featuredBadge}
              </span>
            )}
            {project.status && (
              <span className="px-2.5 py-1 rounded-full bg-black/80 border border-white/15 text-[#cdcdcd] text-[11px] font-medium">
                {project.status}
              </span>
            )}
          </div>

          <img
            src={project.image}
            alt={project.title}
            width={960}
            height={458}
            loading="lazy"
            decoding="async"
            className="w-full h-full object-cover object-top transition-transform duration-500 ease-out group-hover:scale-[1.03]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#07080a]/70 via-transparent to-transparent pointer-events-none" />
        </button>

        {/* Content */}
        <div className="p-6 flex flex-col flex-1 justify-between gap-5">
          <div className="space-y-3">
            <div>
              <p className="text-xs font-mono text-[#ff6363] mb-1">
                {project.subtitle}
              </p>
              <h3 className="text-xl font-semibold text-white tracking-tight">
                {project.title}
              </h3>
            </div>

            <p className="text-sm text-[#9c9c9d] leading-relaxed">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-1.5 pt-1">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2.5 py-0.5 rounded-md text-[11px] font-mono text-[#cdcdcd] bg-white/[0.04] border border-white/[0.08]"
                >
                  {tag}
                </span>
              ))}
            </div>

            {project.demoCredentials && (
              <div className="mt-2 p-3 rounded-lg bg-white/[0.03] border border-white/[0.08] flex flex-wrap items-center justify-between gap-2 text-xs">
                <div className="flex items-center gap-2 text-[#cdcdcd] min-w-0">
                  <KeyRound className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                  <span className="font-mono truncate">
                    {project.demoCredentials.email} ·{' '}
                    {project.demoCredentials.password}
                  </span>
                </div>
                <div className="flex items-center gap-1.5">
                  <button
                    type="button"
                    onClick={() =>
                      onCopy(project.demoCredentials!.email, copy.emailCopied)
                    }
                    className="inline-flex items-center gap-1 px-2 py-1 rounded bg-white/[0.06] hover:bg-white/[0.12] text-[11px] font-mono text-[#cdcdcd] transition-colors cursor-pointer"
                  >
                    <Copy className="w-3 h-3" />
                    Email
                  </button>
                  <button
                    type="button"
                    onClick={() =>
                      onCopy(
                        project.demoCredentials!.password,
                        copy.passwordCopied
                      )
                    }
                    className="inline-flex items-center gap-1 px-2 py-1 rounded bg-white/[0.06] hover:bg-white/[0.12] text-[11px] font-mono text-[#cdcdcd] transition-colors cursor-pointer"
                  >
                    <Copy className="w-3 h-3" />
                    Pass
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Actions */}
          <div className="flex flex-wrap items-center justify-between gap-2 pt-4 border-t border-white/[0.07]">
            <div className="flex flex-wrap items-center gap-2">
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="no-underline"
                >
                  <RaycastButton variant="primary" size="sm">
                    {copy.accessButton}
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </RaycastButton>
                </a>
              )}

              {project.github ? (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="no-underline"
                >
                  <RaycastButton variant="secondary" size="sm">
                    <Github className="w-3.5 h-3.5" />
                    {copy.codeButton}
                  </RaycastButton>
                </a>
              ) : project.isPrivateRepo ? (
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs text-[#71717a] bg-white/[0.02] border border-white/[0.06]">
                  <Lock className="w-3 h-3" />
                  {copy.privateRepoLabel}
                </span>
              ) : null}
            </div>

            <RaycastButton
              variant="ghost"
              size="sm"
              onClick={() => onSelect(project)}
            >
              <Info className="w-3.5 h-3.5" />
              {copy.detailsButton}
            </RaycastButton>
          </div>
        </div>
      </article>
    </Reveal>
  );
};

const Projects: React.FC<ProjectsProps> = ({ projects, copy, onCopy }) => {
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const selectedProject =
    selectedId !== null
      ? projects.find((p) => p.id === selectedId) ?? null
      : null;

  useEffect(() => {
    if (selectedId === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedId(null);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [selectedId]);

  return (
    <section id="projects" className="py-20 px-4">
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, idx) => (
            <ProjectCard
              key={project.id}
              project={project}
              copy={copy}
              delayMs={(idx % 2) * 60}
              onSelect={(p) => setSelectedId(p.id)}
              onCopy={onCopy}
            />
          ))}
        </div>
      </div>

      {/* Project Detail Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-[90] flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          aria-label={selectedProject.title}
        >
          <div
            onClick={() => setSelectedId(null)}
            className="fixed inset-0 bg-black/75 backdrop-blur-sm"
          />
          <div className="animate-modal relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-xl border border-white/[0.12] bg-[#101114] shadow-[0_32px_64px_rgba(0,0,0,0.85),inset_0_1px_0_rgba(255,255,255,0.1)]">
            <div className="relative aspect-[16/9] w-full overflow-hidden border-b border-white/[0.08]">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                width={960}
                height={458}
                className="w-full h-full object-cover object-top"
              />
              <button
                type="button"
                onClick={() => setSelectedId(null)}
                aria-label={copy.closeDetailsAria}
                className="absolute top-3 right-3 p-2 rounded-lg bg-black/75 border border-white/15 text-white hover:bg-black cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="p-6 space-y-5">
              <div>
                <p className="text-xs font-mono text-[#ff6363] mb-1">
                  {selectedProject.subtitle}
                </p>
                <h3 className="text-2xl font-semibold text-white">
                  {selectedProject.title}
                </h3>
              </div>

              <p className="text-sm text-[#cdcdcd] leading-relaxed">
                {selectedProject.description}
              </p>

              {selectedProject.highlights && (
                <div className="space-y-2">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-[#71717a]">
                    {copy.highlightsTitle}
                  </h4>
                  <ul className="space-y-1.5 text-sm text-[#9c9c9d]">
                    {selectedProject.highlights.map((item) => (
                      <li key={item} className="flex items-start gap-2.5">
                        <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#ff6363] shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="flex flex-wrap gap-1.5">
                {selectedProject.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 rounded-md text-xs font-mono text-[#cdcdcd] bg-white/[0.04] border border-white/[0.08]"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {selectedProject.demoCredentials && (
                <div className="p-3.5 rounded-lg bg-white/[0.03] border border-white/[0.08] flex flex-wrap items-center justify-between gap-3">
                  <div className="text-xs space-y-0.5">
                    <p className="font-medium text-amber-300 flex items-center gap-1.5">
                      <KeyRound className="w-3.5 h-3.5" />
                      {copy.demoTitle}
                    </p>
                    <p className="font-mono text-[#cdcdcd]">
                      {selectedProject.demoCredentials.email} ·{' '}
                      {selectedProject.demoCredentials.password}
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <RaycastButton
                      variant="secondary"
                      size="sm"
                      onClick={() =>
                        onCopy(
                          selectedProject.demoCredentials!.email,
                          copy.emailCopied
                        )
                      }
                    >
                      <Copy className="w-3.5 h-3.5" />
                      {copy.copyEmailBtn}
                    </RaycastButton>
                    <RaycastButton
                      variant="secondary"
                      size="sm"
                      onClick={() =>
                        onCopy(
                          selectedProject.demoCredentials!.password,
                          copy.passwordCopied
                        )
                      }
                    >
                      <Copy className="w-3.5 h-3.5" />
                      {copy.copyPasswordBtn}
                    </RaycastButton>
                  </div>
                </div>
              )}

              <div className="flex flex-wrap items-center gap-3 pt-2 border-t border-white/[0.08]">
                {selectedProject.link && (
                  <a
                    href={selectedProject.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="no-underline"
                  >
                    <RaycastButton variant="primary">
                      {copy.accessButton}
                      <ArrowUpRight className="w-4 h-4" />
                    </RaycastButton>
                  </a>
                )}
                {selectedProject.github && (
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="no-underline"
                  >
                    <RaycastButton variant="secondary">
                      <Github className="w-4 h-4" />
                      {copy.githubFullBtn}
                    </RaycastButton>
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
