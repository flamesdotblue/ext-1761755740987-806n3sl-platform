import React from 'react';
import Spline from '@splinetool/react-spline';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative w-full h-[88vh] min-h-[560px]">
      {/* Spline background */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/Gt5HUob8aGDxOUep/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Gradient overlay for readability (does not block interactions) */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex h-full max-w-6xl items-center px-6">
        <div className="max-w-2xl">
          <p className="text-emerald-400 text-sm uppercase tracking-[0.2em] mb-4">Graphic Designer</p>
          <h1 className="text-4xl md:text-6xl font-semibold leading-tight">
            Visual identities and systems for bold brands
          </h1>
          <p className="mt-4 text-neutral-300">
            I craft distinctive, scalable design across brand, editorial, and digital. Minimal, modern, and purposeful.
          </p>
          <div className="mt-8 flex items-center gap-3">
            <a href="#work" className="inline-flex items-center gap-2 rounded-full bg-white text-black hover:bg-neutral-100 px-5 py-3 font-medium transition-colors">
              View Work
              <ArrowRight size={18} />
            </a>
            <a href="#contact" className="inline-flex items-center rounded-full border border-white/20 hover:border-white/40 px-5 py-3 font-medium transition-colors">
              Get in touch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
