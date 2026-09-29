import React, { useState } from 'react';
import { IconArrowRight, IconLayers, IconSparkles } from './Icons';

export const StyleIndex = ({ styles, onSelectStyle }) => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', ...new Set(styles.map(s => s.category))];

  const filteredStyles = selectedCategory === 'All'
    ? styles
    : styles.filter(s => s.category === selectedCategory);

  // Helper to give each preview card a micro taste of its own design style
  const getMicroStyleClasses = (id) => {
    switch (id) {
      case 'glassmorphism':
        return 'backdrop-blur-md bg-white/[0.08] border border-white/20 shadow-lg';
      case 'claymorphism':
        return 'bg-gradient-to-br from-pink-900/30 to-purple-900/40 border-2 border-pink-400/30 rounded-2xl shadow-[4px_4px_16px_rgba(236,72,153,0.15)]';
      case 'neumorphism':
        return 'bg-[#1e232d] shadow-[5px_5px_12px_#11141a,-5px_-5px_12px_#2b3240] border-none';
      case 'skeuomorphism':
        return 'bg-gradient-to-b from-[#2a2d32] to-[#1c1d20] border-t border-slate-400/30 border-b border-black shadow-[inset_0_1px_0_rgba(255,255,255,0.2),0_4px_12px_rgba(0,0,0,0.5)]';
      case 'brutalism':
        return 'bg-yellow-400/10 border-2 border-yellow-400 rounded-none shadow-none font-mono';
      case 'neobrutalism':
        return 'bg-white text-black border-2 border-black shadow-[4px_4px_0px_#000]';
      case 'y2k':
        return 'bg-gradient-to-r from-pink-500/20 via-purple-500/20 to-cyan-500/20 border border-cyan-400/40 rounded-3xl';
      case 'retro-pixel':
        return 'bg-black border-2 border-green-500/60 font-mono crt-overlay';
      case 'gradient-ui':
        return 'bg-gradient-to-br from-indigo-600/30 via-purple-600/30 to-pink-600/30 border border-purple-500/40';
      case 'dark-ui':
        return 'bg-[#0a0d14] border border-white/10 shadow-2xl';
      case 'aurora-ui':
        return 'bg-gradient-to-r from-teal-900/30 via-indigo-900/30 to-fuchsia-900/30 border border-teal-400/30';
      case 'bento-ui':
        return 'bg-slate-900/80 border border-slate-700/60 rounded-2xl';
      case 'frosted-ui':
        return 'backdrop-blur-xl bg-slate-200/10 border border-white/15';
      case 'motion-ui':
        return 'bg-amber-950/20 border border-amber-500/30 hover:-translate-y-1 transition-transform';
      case 'organic-ui':
        return 'bg-emerald-950/20 border border-emerald-500/30 rounded-3xl';
      case 'swiss-style':
        return 'bg-white text-black border-l-4 border-red-600';
      case 'editorial-ui':
        return 'bg-[#18191d] border-t border-b border-white/20 font-editorial';
      case 'industrial-ui':
        return 'bg-zinc-900 border-2 border-orange-500/50';
      case 'terminal-ui':
        return 'bg-black border border-green-500/40 font-mono text-green-400';
      case 'cyberpunk-ui':
        return 'bg-[#0f051d] border border-fuchsia-500/50 cyber-cut-sm';
      case 'futuristic-hud':
        return 'bg-[#04121d] border border-cyan-500/40';
      case 'gamified-ui':
        return 'bg-violet-950/30 border-2 border-violet-500/40 shadow-[0_0_15px_rgba(139,92,246,0.2)]';
      case 'memphis-design':
        return 'bg-[#1e1b4b] border-2 border-pink-400';
      case 'frutiger-aero':
        return 'bg-gradient-to-b from-sky-400/20 to-emerald-400/20 border border-sky-300/40 rounded-2xl';
      case 'apple-minimalism':
        return 'bg-zinc-900/60 border border-white/5 rounded-2xl shadow-sm';
      case 'flat-design':
        return 'bg-[#16a085] text-white border-none rounded-none';
      case 'material-design':
        return 'bg-indigo-950/40 border border-indigo-500/20 rounded-[20px] shadow-md';
      case 'fluent-design':
        return 'bg-slate-900/60 backdrop-blur-md border border-slate-700/50 rounded-xl';
      case 'organic-minimalism':
        return 'bg-[#211f1d] border border-stone-700/40 rounded-3xl';
      case 'cybercore':
        return 'bg-[#020b14] border border-cyan-500/50 text-cyan-400 font-mono shadow-[0_0_12px_rgba(6,182,212,0.15)]';
      case 'scrapbook':
        return 'bg-[#f7f3e8] text-stone-800 border-2 border-stone-300 rounded-lg shadow-md -rotate-1';
      case 'surrealism':
        return 'bg-gradient-to-br from-[#12072b] via-[#2a0845] to-[#0b192c] border border-fuchsia-500/40 rounded-3xl';
      case 'synthwave':
        return 'bg-[#120024] border-2 border-pink-500/60 shadow-[0_0_15px_rgba(236,72,153,0.3)]';
      case 'maximalism':
        return 'bg-[#ffe600] text-black border-4 border-black font-extrabold shadow-[4px_4px_0px_#ff0055]';
      case 'luxury-typography':
        return 'bg-[#080808] border border-amber-400/40 text-stone-200 font-serif';
      case 'conceptual-sketch':
        return 'bg-[#fcfaf2] text-stone-800 border-2 border-dashed border-stone-500 rounded font-mono';
      case 'ethereal':
        return 'bg-gradient-to-tr from-indigo-900/30 via-purple-800/20 to-pink-500/20 backdrop-blur-xl border border-white/30 rounded-3xl';
      case 'bohemian':
        return 'bg-[#2b1e16] border border-amber-700/50 rounded-2xl text-amber-200';
      case 'victorian':
        return 'bg-[#100707] border-2 border-amber-600/60 text-amber-100 rounded-none shadow-xl';
      case 'wabi-sabi':
        return 'bg-[#211f1c] border border-stone-700/30 text-stone-300 rounded-xl';
      case 'pixel-art':
        return 'bg-[#0e1626] border-4 border-indigo-400/80 font-mono';
      case 'art-deco':
        return 'bg-[#05070c] border-2 border-amber-400/70 text-amber-100 shadow-[0_0_15px_rgba(251,191,36,0.15)]';
      case 'bauhaus':
        return 'bg-white text-black border-4 border-red-600 rounded-none';
      case 'vaporwave':
        return 'bg-gradient-to-br from-[#1a0033] via-[#ff71ce]/20 to-[#01cdfe]/20 border border-[#01cdfe]/50';
      case 'solarpunk':
        return 'bg-[#081f14] border-2 border-emerald-500/50 text-emerald-200 rounded-2xl';
      case 'cottagecore':
        return 'bg-[#faf5ee] text-amber-950 border-2 border-emerald-800/20 rounded-2xl';
      case 'kawaii-ui':
        return 'bg-pink-900/30 border-2 border-pink-300/60 rounded-3xl shadow-[0_4px_16px_rgba(244,114,182,0.25)]';
      case 'holographic-ui':
        return 'bg-[#0c0d18] border border-cyan-400/60 shadow-[0_0_20px_rgba(56,189,248,0.25)]';
      case 'monochromatic-ui':
        return 'bg-blue-950/60 border border-blue-500/40 text-blue-200';
      case 'liquid-ui':
        return 'bg-gradient-to-tr from-indigo-900/50 via-purple-900/40 to-pink-900/40 border border-pink-500/30 rounded-[28px]';
      case 'paper-ui':
        return 'bg-[#f8f9fa] text-slate-800 border border-slate-300 shadow-md';
      default:
        return 'bg-white/[0.03] border border-white/10';
    }
  };

  return (
    <section id="style-index" className="py-16 md:py-24 border-b border-white/10 bg-[#07090e]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <div className="flex items-center gap-2 text-indigo-400 font-mono text-xs uppercase tracking-widest mb-2 font-semibold">
              <IconLayers className="w-4 h-4" />
              <span>Visual Gallery Index</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Directory of {styles.length} Design Systems
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-400 max-w-2xl">
              Preview the aesthetics below. Click any card to jump immediately into its interactive laboratory dashboard.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap gap-1.5 p-1 rounded-xl bg-white/3 border border-white/10">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-indigo-600 text-white shadow-sm'
                    : 'text-slate-400 hover:text-white hover:bg-white/5'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* 51 Style Preview Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {filteredStyles.map((s) => {
            const isNeobrutalist = s.id === 'neobrutalism';
            const isSwiss = s.id === 'swiss-style';
            const isFlat = s.id === 'flat-design';
            const isLightBg = isNeobrutalist || isSwiss || s.id === 'scrapbook' || s.id === 'conceptual-sketch' || s.id === 'bauhaus' || s.id === 'cottagecore' || s.id === 'paper-ui' || s.id === 'maximalism';

            return (
              <div
                key={s.id}
                onClick={() => onSelectStyle(s.id)}
                className={`group relative p-5 flex flex-col justify-between transition-all duration-300 cursor-pointer overflow-hidden rounded-xl ${getMicroStyleClasses(s.id)} hover:scale-[1.02] hover:shadow-xl`}
              >
                <div>
                  {/* Top Bar: Emoji & Number */}
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-2xl">{s.iconEmoji}</span>
                    <span className={`font-mono text-xs font-bold ${isLightBg ? 'text-black/60' : 'text-slate-400'}`}>
                      {s.number}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className={`text-base font-extrabold tracking-tight uppercase ${isLightBg ? 'text-black' : isFlat ? 'text-white' : 'text-white group-hover:text-indigo-400'} transition-colors`}>
                    {s.name}
                  </h3>

                  {/* Short Description */}
                  <p className={`mt-1.5 text-xs line-clamp-2 leading-relaxed ${isLightBg ? 'text-gray-700' : isFlat ? 'text-white/80' : 'text-slate-300'}`}>
                    {s.shortDescription}
                  </p>
                </div>

                {/* Bottom Action Footer */}
                <div className="mt-5 pt-3 border-t border-current/10 flex items-center justify-between text-xs font-semibold">
                  <span className={`text-[11px] font-mono uppercase ${isLightBg ? 'text-black/60' : isFlat ? 'text-white/70' : 'text-slate-400'}`}>
                    {s.badge}
                  </span>
                  <span className={`flex items-center gap-1 group-hover:translate-x-1 transition-transform ${isLightBg ? 'text-black' : isFlat ? 'text-white' : 'text-indigo-400'}`}>
                    EXPLORE →
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
