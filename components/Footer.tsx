import React from 'react';
import {
  Mail,
  Phone,
  Github,
  Linkedin,
  MapPin,
  Copy,
  ArrowUpRight,
  Download,
} from 'lucide-react';
import { LocalizedContent, PersonalShared } from '../types';
import RaycastButton from './ui/RaycastButton';
import curriculoPDF from '../src/assets/leonardo-brahim-curriculo.pdf';

interface FooterProps {
  personal: PersonalShared;
  copy: LocalizedContent['footer'];
  onCopy: (value: string, label: string) => void;
}

const Footer: React.FC<FooterProps> = ({ personal, copy, onCopy }) => {
  return (
    <footer id="contact" className="pt-16 pb-12 px-4">
      <div className="max-w-5xl mx-auto space-y-8">
        <div className="relative raycast-card rounded-2xl p-8 md:p-12 overflow-hidden">
          <div
            aria-hidden="true"
            className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-px"
            style={{
              background:
                'linear-gradient(90deg, transparent, rgba(255,99,99,0.7), transparent)',
            }}
          />

          <div className="grid md:grid-cols-12 gap-8 items-start">
            <div className="md:col-span-6 space-y-4">
              <p className="text-xs font-mono uppercase tracking-widest text-[#ff6363]">
                {copy.eyebrow}
              </p>
              <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white">
                {copy.title}
              </h2>
              <p className="text-sm text-[#9c9c9d] leading-relaxed max-w-md">
                {copy.description}
              </p>

              <div className="flex flex-wrap items-center gap-3 pt-2">
                <a href={`mailto:${personal.email}`} className="no-underline">
                  <RaycastButton variant="primary">
                    <Mail className="w-4 h-4" />
                    {copy.sendEmail}
                  </RaycastButton>
                </a>
                <a
                  href={curriculoPDF}
                  download="Leonardo_Brahim_Curriculo.pdf"
                  className="no-underline"
                >
                  <RaycastButton variant="secondary">
                    <Download className="w-4 h-4" />
                    {copy.downloadCv}
                  </RaycastButton>
                </a>
              </div>
            </div>

            <div className="md:col-span-6 grid sm:grid-cols-2 gap-3">
              {/* Email */}
              <div className="p-4 rounded-xl bg-white/[0.03] border border-white/[0.08] flex flex-col justify-between gap-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono text-[#71717a] uppercase flex items-center gap-1.5">
                    <Mail className="w-3.5 h-3.5 text-[#ff6363]" />
                    {copy.emailLabel}
                  </span>
                  <button
                    type="button"
                    onClick={() => onCopy(personal.email, copy.emailCopied)}
                    aria-label={copy.copyEmailAria}
                    className="p-1.5 rounded-md hover:bg-white/[0.08] text-[#9c9c9d] hover:text-white transition-colors cursor-pointer"
                  >
                    <Copy className="w-3.5 h-3.5" />
                  </button>
                </div>
                <a
                  href={`mailto:${personal.email}`}
                  className="text-sm font-medium text-[#f4f4f6] hover:text-[#ff6363] transition-colors break-all"
                >
                  {personal.email}
                </a>
              </div>

              {/* Telefone */}
              <div className="p-4 rounded-xl bg-white/[0.03] border border-white/[0.08] flex flex-col justify-between gap-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono text-[#71717a] uppercase flex items-center gap-1.5">
                    <Phone className="w-3.5 h-3.5 text-emerald-400" />
                    {copy.phoneLabel}
                  </span>
                  <button
                    type="button"
                    onClick={() => onCopy(personal.phone, copy.phoneCopied)}
                    aria-label={copy.copyPhoneAria}
                    className="p-1.5 rounded-md hover:bg-white/[0.08] text-[#9c9c9d] hover:text-white transition-colors cursor-pointer"
                  >
                    <Copy className="w-3.5 h-3.5" />
                  </button>
                </div>
                <a
                  href={personal.phoneHref}
                  className="text-sm font-medium text-[#f4f4f6] hover:text-[#ff6363] transition-colors"
                >
                  {personal.phone}
                </a>
              </div>

              {/* LinkedIn */}
              <a
                href={personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-xl bg-white/[0.03] border border-white/[0.08] hover:border-white/[0.18] hover:bg-white/[0.05] transition-colors flex flex-col justify-between gap-3 group"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono text-[#71717a] uppercase flex items-center gap-1.5">
                    <Linkedin className="w-3.5 h-3.5 text-[#56c2ff]" />
                    LinkedIn
                  </span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#71717a] group-hover:text-white transition-colors" />
                </div>
                <span className="text-sm font-medium text-[#f4f4f6]">
                  /in/leonardobrahim
                </span>
              </a>

              {/* GitHub */}
              <a
                href={personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-xl bg-white/[0.03] border border-white/[0.08] hover:border-white/[0.18] hover:bg-white/[0.05] transition-colors flex flex-col justify-between gap-3 group"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono text-[#71717a] uppercase flex items-center gap-1.5">
                    <Github className="w-3.5 h-3.5 text-[#cdcdcd]" />
                    GitHub
                  </span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#71717a] group-hover:text-white transition-colors" />
                </div>
                <span className="text-sm font-medium text-[#f4f4f6]">
                  @leonardobrahim
                </span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 px-2 text-xs text-[#71717a]">
          <span className="flex items-center gap-1.5">
            <MapPin className="w-3.5 h-3.5 text-[#ff6363]" />
            {copy.location}
          </span>
          <span>{copy.rights}</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
