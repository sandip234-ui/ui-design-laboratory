import React from 'react';
import { IconX, IconSparkles, IconLayers, IconCheck } from './Icons';

export const AboutModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div className="w-full max-w-2xl bg-[#0e121a] border border-white/20 rounded-2xl shadow-2xl p-6 md:p-8 relative overflow-y-auto max-h-[85vh]">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl text-slate-400 hover:text-white hover:bg-white/10 transition"
        >
          <IconX className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-2 text-indigo-400 font-mono text-xs uppercase tracking-widest mb-3 font-semibold">
          <IconSparkles className="w-4 h-4" />
          <span>Curatorial Manifesto</span>
        </div>

        <h3 className="text-2xl md:text-3xl font-extrabold text-white tracking-tight">
          The 29 Visual Languages of Digital Interface Design
        </h3>

        <div className="mt-4 space-y-4 text-sm text-slate-300 leading-relaxed">
          <p>
            Welcome to <strong className="text-white">UI//LAB</strong>. This interactive installation functions as a design laboratory and museum dedicated to the evolution of visual human-computer interfaces.
          </p>
          <p>
            Rather than homogenizing an interface into one generic modern template, this showcase demonstrates how fundamental UI primitives—metric cards, navigation items, toggles, graphs, and action feeds—undergo radical psychological and aesthetic transformations when subjected to distinct design paradigms.
          </p>

          <div className="p-4 rounded-xl bg-white/3 border border-white/10 space-y-2">
            <h4 className="text-xs font-mono uppercase text-indigo-300 font-bold tracking-wider">
              The 29 Curated Movements
            </h4>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-xs font-mono text-slate-400 pt-1">
              <div>• Glassmorphism</div>
              <div>• Claymorphism</div>
              <div>• Neumorphism</div>
              <div>• Skeuomorphism</div>
              <div>• Brutalism</div>
              <div>• Neobrutalism</div>
              <div>• Y2K Cyber-Pop</div>
              <div>• Retro Pixel UI</div>
              <div>• Gradient UI</div>
              <div>• Dark UI</div>
              <div>• Aurora UI</div>
              <div>• Bento UI</div>
              <div>• Frosted UI</div>
              <div>• Motion UI</div>
              <div>• Organic UI</div>
              <div>• Swiss Style</div>
              <div>• Editorial UI</div>
              <div>• Industrial UI</div>
              <div>• Terminal UI</div>
              <div>• Cyberpunk UI</div>
              <div>• Futuristic HUD</div>
              <div>• Gamified UI</div>
              <div>• Memphis Design</div>
              <div>• Frutiger Aero</div>
              <div>• Apple Minimalism</div>
              <div>• Flat Design</div>
              <div>• Material Design</div>
              <div>• Fluent Design</div>
              <div>• Organic Minimalism</div>
            </div>
          </div>

          <div className="pt-2">
            <h4 className="text-white font-semibold text-sm mb-1">Architecture & Engineering Integrity</h4>
            <p className="text-xs text-slate-400">
              Each of the 29 sections exists in its own isolated React component, utilizing customized typography, bespoke shadow physics, and realistic fictional dashboard data. Built with React 19 and Tailwind CSS.
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
