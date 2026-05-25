'use client';

import { useEffect, useState } from 'react';

export default function MouseGlow() {
  const [pos, setPos] = useState({ x: -999, y: -999 });

  useEffect(() => {
    const move = (e: MouseEvent) => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener('mousemove', move, { passive: true });
    return () => window.removeEventListener('mousemove', move);
  }, []);

  return (
    <div
      className="pointer-events-none fixed inset-0 z-30 hidden md:block transition-all duration-100"
      style={{
        background: `radial-gradient(700px at ${pos.x}px ${pos.y}px, rgba(124,58,237,0.07), transparent 70%)`,
      }}
    />
  );
}
