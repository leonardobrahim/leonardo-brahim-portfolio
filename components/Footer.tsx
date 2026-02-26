import React from "react";
import { PERSONAL_INFO } from "../constants";
import { Github, Mail, Phone, MapPin } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="pt-20 pb-10 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <div className="bg-black/90 text-white rounded-2xl p-10 md:p-16 border-4 border-white shadow-neo-lg transform rotate-1">
          <h2 className="text-4xl md:text-6xl font-black mb-8">
            Vamos trabalhar juntos?
          </h2>

          <div className="grid md:grid-cols-3 gap-8 text-center md:text-left mb-12">
            <div className="flex flex-col items-center md:items-start min-w-0">
              <div className="bg-neo-blue p-2 rounded-full mb-3">
                <Mail size={32} className="text-neo-pink" />
              </div>
              <p className="text-gray-400 text-sm font-bold uppercase">Email</p>
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="text-lg font-bold hover:underline break-all"
              >
                {PERSONAL_INFO.email}
              </a>
            </div>

            <div className="flex flex-col items-center md:items-start">
              <div className="bg-neo-blue p-2 rounded-full mb-3">
                <Phone size={32} className="text-neo-green" />
              </div>
              <p className="text-gray-400 text-sm font-bold uppercase">
                Telefone
              </p>
              <p className="text-lg font-bold">{PERSONAL_INFO.phone}</p>
            </div>

            <div className="flex flex-col items-center md:items-start">
              <div className="bg-neo-blue p-2 rounded-full mb-3">
                <Github size={32} className="text-neo-yellow" />
              </div>
              <p className="text-gray-400 text-sm font-bold uppercase">
                Github
              </p>
              <a
                href={`https://${PERSONAL_INFO.github}`}
                target="_blank"
                rel="noreferrer"
                className="text-lg font-bold hover:underline"
              >
                {PERSONAL_INFO.github}
              </a>
            </div>
          </div>

          <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="flex items-center gap-2">
              <MapPin size={16} /> {PERSONAL_INFO.location}
            </p>
            <p className="text-gray-500 text-sm">© 2026 Leonardo Brahim.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
