import React from 'react';
import { EDUCATION_DATA, EXPERIENCE_DATA, LANGUAGES_DATA } from '../constants';
import { Briefcase, GraduationCap, Globe } from 'lucide-react';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 px-4">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12">
        
        {/* Experience Column */}
        <div className="space-y-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-neo-pink p-3 border-2 border-black rounded-lg shadow-neo-sm">
              <Briefcase className="text-white" size={24} />
            </div>
            <h3 className="text-3xl font-black text-white drop-shadow-[2px_2px_0_#000]">Experiência</h3>
          </div>

          <div className="space-y-6">
            {EXPERIENCE_DATA.map((job, idx) => (
              <div key={idx} className="bg-white dark:bg-gray-800 p-6 rounded-xl border-4 border-black shadow-neo transition-transform hover:-translate-y-1">
                <span className="inline-block bg-cartoon-blue text-white px-3 py-1 text-xs font-bold rounded-full border-2 border-black mb-3">
                  {job.period}
                </span>
                <h4 className="text-xl font-bold dark:text-white">{job.role}</h4>
                <p className="text-sm font-bold text-gray-500 mb-2 uppercase tracking-wide">{job.company}</p>
                <p className="text-gray-700 dark:text-gray-300">{job.description}</p>
              </div>
            ))}
          </div>

          {/* Languages Section - Added below Experience to balance columns */}
          <div className="pt-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-cartoon-blue p-3 border-2 border-black rounded-lg shadow-neo-sm">
                <Globe className="text-white" size={24} />
              </div>
              <h3 className="text-3xl font-black text-white drop-shadow-[2px_2px_0_#000]">Idiomas</h3>
            </div>
            <div className="space-y-4">
              {LANGUAGES_DATA.map((lang, idx) => (
                <div key={idx} className="bg-white dark:bg-gray-800 p-4 rounded-xl border-4 border-black shadow-neo flex justify-between items-center">
                  <span className="font-bold text-lg dark:text-white">{lang.language}</span>
                  <span className="bg-neo-yellow text-black text-xs font-bold px-3 py-1 border-2 border-black rounded-full uppercase">
                    {lang.level}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Education Column */}
        <div className="space-y-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-neo-green p-3 border-2 border-black rounded-lg shadow-neo-sm">
              <GraduationCap className="text-black" size={24} />
            </div>
            <h3 className="text-3xl font-black text-white drop-shadow-[2px_2px_0_#000]">Educação</h3>
          </div>

          <div className="space-y-6">
            {EDUCATION_DATA.map((edu, idx) => (
              <div key={idx} className="bg-white dark:bg-gray-800 p-6 rounded-xl border-4 border-black shadow-neo transition-transform hover:-translate-y-1">
                 <span className="inline-block bg-neo-yellow text-black px-3 py-1 text-xs font-bold rounded-full border-2 border-black mb-3">
                  {edu.period}
                </span>
                <h4 className="text-xl font-bold dark:text-white">{edu.degree}</h4>
                <p className="text-gray-600 dark:text-gray-300 font-medium">{edu.school}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Experience;