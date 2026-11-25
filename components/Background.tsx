import React from 'react';

const Background: React.FC = () => {
  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 -z-10 overflow-hidden pointer-events-none bg-[#07080a]"
    >
      {/* Subtle hairline grid masked radially */}
      <div className="absolute inset-0 raycast-grid-bg opacity-70" />

      {/* Primary Raycast Red / Coral top ambient glow */}
      <div
        className="absolute -top-48 left-1/2 -translate-x-1/2 w-[900px] h-[520px] rounded-full blur-[140px]"
        style={{
          background:
            'radial-gradient(circle, rgba(255,99,99,0.16) 0%, rgba(255,126,95,0.06) 45%, rgba(7,8,10,0) 75%)',
        }}
      />

      {/* Secondary cool accent glow */}
      <div
        className="absolute top-[42%] -right-40 w-[520px] h-[520px] rounded-full blur-[140px]"
        style={{
          background:
            'radial-gradient(circle, rgba(86,194,255,0.07) 0%, rgba(7,8,10,0) 70%)',
        }}
      />

      {/* Bottom warm edge glow */}
      <div
        className="absolute -bottom-52 -left-32 w-[560px] h-[440px] rounded-full blur-[150px]"
        style={{
          background:
            'radial-gradient(circle, rgba(255,99,99,0.08) 0%, rgba(7,8,10,0) 70%)',
        }}
      />
    </div>
  );
};

export default Background;
