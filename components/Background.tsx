import React from 'react';

const Background: React.FC = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none transition-colors duration-500 bg-cartoon-blue dark:bg-cartoon-dark">
      {/* Large light circles to match the reference image */}
      <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
      <div className="absolute top-[20%] right-[-5%] w-72 h-72 bg-white/10 rounded-full blur-2xl"></div>
      <div className="absolute bottom-[-10%] left-[20%] w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>
      
      {/* Sharper circles for "cartoon" bubbles */}
      <div className="absolute top-[15%] left-[10%] w-24 h-24 bg-white/20 rounded-full"></div>
      <div className="absolute top-[40%] right-[20%] w-16 h-16 bg-white/20 rounded-full"></div>
      <div className="absolute bottom-[20%] left-[5%] w-32 h-32 bg-white/20 rounded-full"></div>
      <div className="absolute bottom-[40%] right-[10%] w-12 h-12 bg-white/20 rounded-full"></div>
    </div>
  );
};

export default Background;