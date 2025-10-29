import React from 'react';
import { Palette } from 'lucide-react';

const Logo = () => {
  return (
    <a href="#home" className="group inline-flex items-center gap-2 select-none">
      <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-emerald-500 to-emerald-700 text-black">
        <Palette size={18} />
      </span>
      <span className="font-semibold tracking-tight">Designer</span>
      <span className="text-neutral-400 group-hover:text-neutral-300 transition-colors">Portfolio</span>
    </a>
  );
};

export default Logo;
