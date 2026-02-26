import React from "react";
import { motion } from "framer-motion";
import { PERSONAL_INFO } from "../constants";
import StickerImage from "./ui/StickerImage";
import NeoButton from "./ui/NeoButton";
import { Download } from "lucide-react";

const Hero: React.FC = () => {
  // Corrigindo o caminho para absoluto para pegar da raiz pública
  const avatarUrl = "public/avatar.png";

  return (
    <section
      id="home"
      className="min-h-screen flex items-center pt-24 pb-12 px-4"
    >
      <div className="max-w-6xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center">
        {/* Left Column: Text */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <div className="inline-block px-4 py-2 bg-neo-yellow border-2 border-black shadow-neo-sm transform -rotate-2 rounded-lg">
            <span className="font-bold text-black">👋 Olá, mundo!</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-black text-white drop-shadow-[4px_4px_0_rgba(0,0,0,1)] leading-tight">
            Oi, eu sou <br />
            <span className="text-neo-yellow text-stroke-black">Leonardo</span>
          </h1>

          <p className="text-xl md:text-2xl text-white font-medium max-w-lg drop-shadow-md">
            {PERSONAL_INFO.bio}
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            <NeoButton
              onClick={() =>
                document.getElementById("projects")?.scrollIntoView()
              }
            >
              Ver Projetos
            </NeoButton>
            <NeoButton variant="secondary" className="flex items-center gap-2">
              <Download size={18} />
              Download CV
            </NeoButton>
          </div>
        </motion.div>

        {/* Right Column: Cartoon Avatar */}
        <div className="flex justify-center md:justify-end">
          <div className="relative">
            {/* Decorative elements behind avatar */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 bg-white/20 border-4 border-white/50 border-dashed rounded-full scale-150 -z-10"
            />

            {/* Using the local avatar.png. */}
            <StickerImage
              src={avatarUrl}
              alt="Leonardo Brahim Avatar"
              className="w-64 h-64 md:w-80 md:h-80"
            />

            {/* Floating badges */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.5, type: "spring" }}
              className="absolute -bottom-4 -left-4 bg-white border-2 border-black p-3 rounded-lg shadow-neo rotate-[-6deg]"
            >
              <span className="text-2xl">💻</span>
            </motion.div>

            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.7, type: "spring" }}
              className="absolute top-0 -right-4 bg-neo-green border-2 border-black p-3 rounded-lg shadow-neo rotate-[12deg]"
            >
              <span className="text-2xl">🚀</span>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
