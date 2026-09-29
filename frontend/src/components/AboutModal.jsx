import React from 'react';
import { IconX, IconSparkles, IconLayers, IconCheck } from './Icons';

export const AboutModal = ({ isOpen, onClose, styles = [] }) => {
  if (!isOpen) return null;

  const count = styles.length || 51;

  const categories = [
    { title: 'Material Aesthetics', desc: 'Glassmorphism, Claymorphism, Neumorphism, Skeuomorphism, Paper UI, Frosted UI' },
    { title: 'Typography & Editorial', desc: 'Luxury Typography, Editorial UI, Swiss Style, Brutalism, Neobrutalism' },
    { title: 'Layout Systems', desc: 'Bento UI, Flat Design, Material Design, Fluent Design, Apple Minimalism' },
    { title: 'Retro & Digital Nostalgia', desc: 'Retro Pixel, Y2K Cyber-Pop, Synthwave, Vaporwave, Pixel Art' },
    { title: 'Futuristic & Sci-Fi', desc: 'Cybercore, Cyberpunk UI, Futuristic HUD, Holographic UI, Terminal UI' },
    { title: 'Historical Movements', desc: 'Art Deco, Bauhaus, Victorian Design' },
    { title: 'Cultural Aesthetics', desc: 'Wabi-Sabi, Bohemian, Cottagecore, Kawaii UI, Scrapbook' },
    { title: 'Organic & Environmental', desc: 'Organic UI, Organic Minimalism, Solarpunk, Aurora UI' },
    { title: 'Experimental Interfaces', desc: 'Liquid UI, Surrealism, Maximalism, Ethereal, Conceptual Sketch, Motion UI, Gamified UI' },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div className="w-full max-w-2xl bg-[#0e121a] border border-white/20 rounded-2xl shadow-2xl p-6 md:p-8 relative overflow-y-auto max-h-[85vh]">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl text-slate-400 hover:text-white hover:bg-white/10 transition cursor-pointer"
        >
          <IconX className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-2 text-indigo-400 font-mono text-xs uppercase tracking-widest mb-3 font-semibold">
          <IconSparkles className="w-4 h-4" />
          <span>Curatorial Manifesto</span>
        </div>

        <h3 className="text-2xl md:text-3xl font-extrabold text-white tracking-tight">
          The {count} Visual Languages of Digital Interface Design
        </h3>

        <div className="mt-4 space-y-4 text-sm text-slate-300 leading-relaxed">
          <p>
            Welcome to <strong className="text-white">UI//LAB</strong>. This interactive installation functions as a design laboratory and living museum dedicated to the evolution, ergonomics, and aesthetic philosophy of human-computer interfaces.
          </p>
          <p>
            Rather than homogenizing an interface into one generic template, this showcase demonstrates how fundamental UI primitives—metric cards, navigation items, toggles, graphs, and action feeds—undergo radical psychological and aesthetic transformations when subjected to distinct design paradigms.
          </p>

          <div className="p-4 rounded-xl bg-white/3 border border-white/10 space-y-3">
            <h4 className="text-xs font-mono uppercase text-indigo-300 font-bold tracking-wider">
              {count} Movements Across 9 Design Categories
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs pt-1">
              {categories.map((c) => (
                <div key={c.title} className="p-2.5 rounded-lg bg-white/2 border border-white/5">
                  <span className="text-indigo-300 font-semibold font-mono text-[11px] block mb-0.5">{c.title}</span>
                  <span className="text-slate-400 text-[11px] leading-tight block">{c.desc}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="pt-2">
            <h4 className="text-white font-semibold text-sm mb-1">Architecture & Engineering Integrity</h4>
            <p className="text-xs text-slate-400">
              Each of the {count} design systems exists in its own isolated React component, complete with structured educational context (Formula, Visual DNA, Best For, and Distinguishing Characteristics), customized typography, bespoke shadow physics, and realistic fictional dashboard data. Built with React 19, Tailwind CSS, and Vite.
            </p>
          </div>
        </div>

        <div className="mt-6 pt-4 border-t border-white/10 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold uppercase tracking-wider transition"
          >
            Enter The Laboratory
          </button>
        </div>
      </div>
    </div>
  );
};
