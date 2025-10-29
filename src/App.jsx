import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <main>
        <Hero />
        {/* Anchor targets for nav links */}
        <section id="work" className="mx-auto max-w-6xl px-6 py-24">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-6">Selected Work</h2>
          <p className="text-neutral-300 max-w-2xl">This section is a placeholder for portfolio projects. Replace with your grid/cards of case studies, each highlighting the brief, process, and outcomes with visuals and metrics.</p>
        </section>
        <section id="about" className="mx-auto max-w-6xl px-6 py-24">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-6">About</h2>
          <p className="text-neutral-300 max-w-2xl">I’m a multidisciplinary graphic designer focused on bold, clear visual systems. My work spans brand identities, editorial, and digital campaigns. I balance craft and concept to create memorable experiences.</p>
        </section>
        <section id="contact" className="mx-auto max-w-6xl px-6 py-24">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-6">Contact</h2>
          <p className="text-neutral-300 max-w-2xl mb-6">Ready to collaborate? I’m available for select freelance projects and partnerships.</p>
          <a href="mailto:hello@designer.com" className="inline-flex items-center gap-2 rounded-full bg-emerald-500 hover:bg-emerald-400 text-black px-6 py-3 font-medium transition-colors">Email me</a>
        </section>
      </main>
      <footer className="border-t border-white/10">
        <div className="mx-auto max-w-6xl px-6 py-10 flex items-center justify-between text-sm text-neutral-400">
          <span>© {new Date().getFullYear()} Your Name</span>
          <span>Built with React + Tailwind</span>
        </div>
      </footer>
    </div>
  );
}

export default App;
