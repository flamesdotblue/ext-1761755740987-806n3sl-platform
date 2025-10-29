import React, { useState } from 'react';
import Logo from './Logo';
import NavLinks from './NavLinks';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mt-4 rounded-full border border-white/10 bg-black/60 backdrop-blur supports-[backdrop-filter]:bg-black/40">
          <div className="flex items-center justify-between px-4 py-3">
            <Logo />

            {/* Desktop nav */}
            <nav className="hidden md:flex items-center gap-8">
              <NavLinks orientation="horizontal" />
              <a href="#contact" className="inline-flex items-center rounded-full bg-emerald-500 hover:bg-emerald-400 text-black px-4 py-2 text-sm font-medium transition-colors">Hire Me</a>
            </nav>

            {/* Mobile button */}
            <button aria-label={open ? 'Close menu' : 'Open menu'} onClick={() => setOpen(!open)} className="md:hidden inline-flex items-center justify-center rounded-full p-2.5 hover:bg-white/10 transition-colors">
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>

          {/* Mobile panel */}
          {open && (
            <div className="md:hidden border-t border-white/10 px-4 py-3">
              <NavLinks orientation="vertical" onNavigate={() => setOpen(false)} />
              <a href="#contact" onClick={() => setOpen(false)} className="mt-3 inline-flex w-full items-center justify-center rounded-full bg-emerald-500 hover:bg-emerald-400 text-black px-4 py-2 text-sm font-medium transition-colors">Hire Me</a>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
