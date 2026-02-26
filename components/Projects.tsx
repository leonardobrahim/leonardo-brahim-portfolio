import React from "react";
import { motion } from "framer-motion";
import { PROJECTS_DATA } from "../constants";
import { Project } from "../types";
import { ArrowUpRight } from "lucide-react";

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  const spanClass =
    project.size === "large"
      ? "md:col-span-2 md:row-span-2"
      : project.size === "medium"
        ? "md:col-span-2 md:row-span-1"
        : "md:col-span-1 md:row-span-1";

  return (
    <motion.a
      href={project.link || "#"}
      target={project.link ? "_blank" : "_self"}
      rel={project.link ? "noopener noreferrer" : ""}
      layoutId={`project-${project.id}`}
      whileHover={{ y: -8, transition: { type: "spring", stiffness: 300 } }}
      // Adicionamos block e cursor-pointer para garantir que funciona como link
      className={`${spanClass} ${project.color} group relative rounded-xl border-4 border-black shadow-neo overflow-hidden flex flex-col cursor-pointer transition-shadow hover:shadow-neo-lg no-underline block`}
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

        {/* Ícone de seta flutuante (aparece no hover) */}
        <div className="absolute top-4 right-4 bg-black text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
          <ArrowUpRight size={20} />
        </div>
      </div>

      {/* Área de Texto */}
      <div className="p-6 flex flex-col justify-between flex-grow">
        <div>
          <h3 className="text-2xl font-black text-black mb-2 leading-tight">
            {project.title}
          </h3>
          <p className="text-black/80 font-medium text-sm md:text-base whitespace-pre-line line-clamp-3">
            {project.description}
          </p>
        </div>
      </div>
    </motion.a>
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
