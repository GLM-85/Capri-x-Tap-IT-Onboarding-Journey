'use client';

import React, { useEffect, useState } from 'react';

const Snowfall = () => {
  const [snowflakes, setSnowflakes] = useState<Array<{ id: number; left: string; animationDuration: string; opacity: number; size: string; delay: string }>>([]);

  useEffect(() => {
    // Generate a fixed number of snowflakes on mount to avoid hydration mismatch
    // and keep performance high.
    const count = 50; // Number of flakes
    const flakes = Array.from({ length: count }).map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      animationDuration: `${Math.random() * 3 + 5}s`, // Between 5s and 8s fall time
      opacity: Math.random() * 0.5 + 0.1, // Subtle opacity between 0.1 and 0.6
      size: `${Math.random() * 3 + 2}px`, // Size between 2px and 5px
      delay: `${Math.random() * 5}s`
    }));
    setSnowflakes(flakes);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-[60] overflow-hidden" aria-hidden="true">
      <style>{`
        @keyframes snowfall {
          0% {
            transform: translateY(-10vh) translateX(0);
          }
          100% {
            transform: translateY(110vh) translateX(20px);
          }
        }
      `}</style>
      {snowflakes.map((flake) => (
        <div
          key={flake.id}
          className="absolute bg-white rounded-full"
          style={{
            left: flake.left,
            top: '-10px',
            width: flake.size,
            height: flake.size,
            opacity: flake.opacity,
            animation: `snowfall ${flake.animationDuration} linear infinite`,
            animationDelay: flake.delay, // Stagger starts
          }}
        />
      ))}
    </div>
  );
};

export default Snowfall;