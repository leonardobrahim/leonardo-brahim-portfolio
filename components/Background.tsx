import React from 'react';

const Background: React.FC = () => {
  return (
    <div
      aria-hidden="true"
      className="absolute inset-0 -z-10 overflow-hidden pointer-events-none bg-[#07080a]"
      style={{
        backgroundImage: [
          'radial-gradient(ellipse 80% 520px at 50% 0%, rgba(255, 99, 99, 0.16) 0%, rgba(255, 126, 95, 0.05) 45%, transparent 75%)',
          'radial-gradient(circle 420px at 88% 35%, rgba(86, 194, 255, 0.08) 0%, transparent 70%)',
          'radial-gradient(circle 420px at 12% 80%, rgba(255, 99, 99, 0.08) 0%, transparent 70%)',
        ].join(', '),
      }}
    >
      {/* Subtle hairline grid confined to the top hero area without heavy CSS mask */}
      <div
        className="absolute inset-x-0 top-0 h-[760px] opacity-55"
        style={{
          backgroundImage:
            'linear-gradient(to right, rgba(255, 255, 255, 0.035) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.035) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
      />
      <div
        className="absolute inset-x-0 top-0 h-[760px]"
        style={{
          background:
            'radial-gradient(ellipse 75% 85% at 50% 25%, transparent 35%, #07080a 100%)',
        }}
      />
    </div>
  );
};

export default Background;
