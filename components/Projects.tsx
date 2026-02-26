import React from 'react';
import { motion } from 'framer-motion';
import { PROJECTS_DATA } from '../constants';
import { Project } from '../types';
import { ArrowUpRight } from 'lucide-react';

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  // Determine span based on size
  const spanClass = 
    project.size === 'large' ? 'md:col-span-2 md:row-span-2' : 
    project.size === 'medium' ? 'md:col-span-2 md:row-span-1' : 
    'md:col-span-1 md:row-span-1';

  return (
    <motion.div
      layoutId={`project-${project.id}`}
      whileHover={{ y: -8, transition: { type: "spring", stiffness: 300 } }}
      className={`${spanClass} ${project.color} group relative rounded-xl border-4 border-black shadow-neo overflow-hidden flex flex-col justify-between p-6 transition-shadow hover:shadow-neo-lg`}
    >
      <div className="flex justify-between items-start mb-4">
        <div className="bg-white text-black border-2 border-black rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wide">
          {project.tags[0]}
        </div>
        <div className="bg-black text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
          <ArrowUpRight size={20} />
        </div>
      </div>

      <div>
        <h3 className="text-2xl font-black text-black mb-2 leading-tight">
          {project.title}
        </h3>
        <p className="text-black/80 font-medium text-sm md:text-base">
          {project.description}
        </p>
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