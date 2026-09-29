import React from "react";
import { motion } from "framer-motion";
import { PROJECTS_DATA } from "../constants";
import { Project } from "../types";
import { ArrowUpRight, Github } from "lucide-react";
import NeoButton from "./ui/NeoButton";

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  const spanClass =
    project.size === "large"
      ? "md:col-span-2 md:row-span-2"
      : project.size === "medium"
        ? "md:col-span-2 md:row-span-1"
        : "md:col-span-1 md:row-span-1";

  return (
    <motion.div
      layoutId={`project-${project.id}`}
      whileHover={{ y: -8, transition: { type: "spring", stiffness: 300 } }}
      className={`${spanClass} ${project.color} group relative rounded-xl border-4 border-black shadow-neo overflow-hidden flex flex-col transition-shadow hover:shadow-neo-lg`}
    >
      {/* Área da Imagem */}
      <div className="w-full h-32 md:h-1/2 min-h-[140px] border-b-4 border-black overflow-hidden relative bg-white">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500 ease-in-out"
        />

        {/* Tag flutuante sobre a imagem */}
        <div className="absolute top-4 left-4 bg-white text-black border-2 border-black rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wide z-10">
          {project.tags[0]}
        </div>
      </div>

      {/* Área de Texto */}
      <div className="p-6 flex flex-col justify-between flex-grow">
        <div>
          <h3 className="text-2xl font-black text-black mb-2 leading-tight">
            {project.title}
          </h3>
          <p className="text-black/80 font-medium text-sm md:text-base whitespace-pre-line line-clamp-3 mb-4">
            {project.description}
          </p>
        </div>
        
        {/* Botões */}
        <div className="flex flex-wrap gap-3 mt-auto pt-4">
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="no-underline"
            >
              <NeoButton variant="primary" className="flex items-center gap-2 text-sm px-4 py-2">
                <ArrowUpRight size={18} />
                Acessar Projeto
              </NeoButton>
            </a>
          )}
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="no-underline"
            >
              <NeoButton variant="secondary" className="flex items-center gap-2 text-sm px-4 py-2">
                <Github size={18} />
                GitHub
              </NeoButton>
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 flex items-end gap-4"
        >
          <h2 className="text-5xl font-black text-white drop-shadow-[4px_4px_0_#000]">
            Projetos
          </h2>
          <div className="mb-2 bg-neo-yellow px-3 py-1 border-2 border-black text-sm font-bold rotate-6 shadow-neo-sm text-black">
            Selection
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-4 auto-rows-[200px] gap-6">
          {PROJECTS_DATA.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
