import React from 'react';
import { IconSparkles, IconLayers, IconActivity, IconArrowRight } from './Icons';

export const Hero = ({ onExploreClick, stylesCount = 51 }) => {
  return (
    <section className="relative overflow-hidden pt-12 pb-20 md:pt-20 md:pb-28 border-b border-white/10">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-87.5 bg-linear-to-tr from-indigo-600/20 via-purple-600/20 to-pink-600/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        {/* Curated Tag */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-indigo-300 tracking-wide uppercase mb-6 backdrop-blur-sm">
          <IconSparkles className="w-3.5 h-3.5 text-indigo-400" />
          <span>Interactive Visual Design Architecture</span>
        </div>

        {/* Main Title */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight text-white uppercase font-display">
          THE UI STYLE LAB
        </h1>

        {/* Subtitle */}
        <p className="mt-4 text-xl sm:text-2xl md:text-3xl font-medium text-transparent bg-clip-text bg-linear-to-r from-slate-100 via-indigo-200 to-purple-300 max-w-3xl mx-auto leading-tight">
          {stylesCount} visual languages. <br className="hidden sm:inline" />
          One interactive design laboratory.
        </p>

        {/* Supporting Text */}
        <p className="mt-5 text-sm sm:text-base md:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
          Explore how typography, depth, motion, color, materials and interaction change the personality of a digital interface.
        </p>

        {/* CTA Buttons */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <button
            onClick={onExploreClick}
            className="px-6 py-3.5 rounded-xl bg-linear-to-r from-indigo-500 via-purple-500 to-pink-500 text-white font-semibold text-sm sm:text-base shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 hover:scale-105 active:scale-95 transition-all duration-200 flex items-center gap-2 cursor-pointer"
          >
            <span>EXPLORE STYLES ↓</span>
          </button>
          
          <button
            onClick={() => {
              const el = document.getElementById('style-index');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
            className="px-5 py-3.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-slate-200 font-medium text-sm sm:text-base hover:text-white transition flex items-center gap-2 cursor-pointer"
          >
            <IconLayers className="w-4 h-4 text-slate-400" />
            <span>Browse Full Index ({stylesCount})</span>
          </button>
        </div>

        {/* Key Comparative Pillars */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto pt-8 border-t border-white/10 text-left">
          <div className="p-4 rounded-xl bg-white/2 border border-white/5">
            <div className="text-2xl font-bold text-white font-mono">{stylesCount}</div>
            <div className="text-xs text-slate-400 mt-1 uppercase tracking-wider font-semibold">Visual Systems</div>
            <div className="text-[11px] text-slate-400 mt-1">From Glassmorphism to Paper UI</div>
          </div>
          <div className="p-4 rounded-xl bg-white/2 border border-white/5">
            <div className="text-2xl font-bold text-indigo-400 font-mono">100%</div>
            <div className="text-xs text-slate-400 mt-1 uppercase tracking-wider font-semibold">Bespoke Dashboards</div>
            <div className="text-[11px] text-slate-400 mt-1">Zero generic recolors or templates</div>
          </div>
          <div className="p-4 rounded-xl bg-white/2 border border-white/5">
            <div className="text-2xl font-bold text-purple-400 font-mono">100+</div>
            <div className="text-xs text-slate-400 mt-1 uppercase tracking-wider font-semibold">Tactile Widgets</div>
            <div className="text-[11px] text-slate-400 mt-1">Sliders, toggles, gauges & graphs</div>
          </div>
          <div className="p-4 rounded-xl bg-white/2 border border-white/5">
            <div className="text-2xl font-bold text-pink-400 font-mono">01</div>
            <div className="text-xs text-slate-400 mt-1 uppercase tracking-wider font-semibold">Unified Lab</div>
            <div className="text-[11px] text-slate-400 mt-1">One seamless scrollable canvas</div>
          </div>
        </div>
      </div>
    </section>
  );
};
