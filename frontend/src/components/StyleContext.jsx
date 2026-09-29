import React from 'react';

export const StyleContext = ({ styleData, isLight = false }) => {
  // If no educational context is provided, return null
  const whatIsIt = styleData.whatIsIt || styleData.explanation || styleData.shortDescription;
  const visualDNA = styleData.visualDNA || styleData.characteristics;
  const bestFor = styleData.bestFor;
  const distinguishedBy = styleData.distinguishedBy;

  if (!whatIsIt && !visualDNA && !bestFor && !distinguishedBy) {
    return null;
  }

  // Subtle style-specific border & background accent for the educational context box
  const getContextThemeClass = () => {
    switch (styleData.id) {
      case 'cybercore':
        return 'border-emerald-500/30 bg-emerald-950/15 font-mono';
      case 'scrapbook':
        return 'border-amber-700/20 bg-[#faf6ed] shadow-sm rotate-[-0.2deg] text-amber-950';
      case 'surrealism':
        return 'border-purple-500/30 bg-purple-950/20 shadow-[0_0_20px_rgba(168,85,247,0.1)]';
      case 'synthwave':
        return 'border-pink-500/35 bg-pink-950/20 shadow-[0_0_20px_rgba(255,42,133,0.1)]';
      case 'maximalism':
        return 'border-2 border-fuchsia-500/40 bg-zinc-900/70';
      case 'luxury-typography':
        return 'border-amber-400/25 bg-stone-950/60 font-editorial';
      case 'conceptual-sketch':
        return 'border border-dashed border-blue-400/40 bg-blue-50/30 text-slate-800';
      case 'ethereal':
        return 'border-white/20 bg-white/[0.04] backdrop-blur-md shadow-[0_4px_30px_rgba(255,255,255,0.05)]';
      case 'bohemian':
        return 'border-[#c86446]/30 bg-[#fdf8f4] text-[#4a2e22]';
      case 'victorian':
        return 'border-amber-600/30 bg-[#160c14] text-amber-100/90';
      case 'wabi-sabi':
        return 'border-stone-700/40 bg-stone-900/40 text-stone-300';
      case 'pixel-art':
        return 'border-2 border-blue-500/40 bg-slate-900/80 font-mono';
      case 'art-deco':
        return 'border-yellow-500/30 bg-black/60';
      case 'bauhaus':
        return 'border-2 border-black bg-stone-100 text-stone-900';
      case 'vaporwave':
        return 'border-cyan-400/30 bg-[#160e29]/60';
      case 'solarpunk':
        return 'border-emerald-500/30 bg-emerald-950/20';
      case 'cottagecore':
        return 'border-emerald-800/20 bg-[#fcf9f2] text-[#2d3a24]';
      case 'kawaii-ui':
        return 'border-pink-300 bg-pink-50/70 text-pink-950 rounded-2xl';
      case 'holographic-ui':
        return 'border-cyan-300/30 bg-slate-900/50 backdrop-blur-md';
      case 'monochromatic-ui':
        return 'border-blue-500/30 bg-blue-950/20';
      case 'liquid-ui':
        return 'border-cyan-400/30 bg-cyan-950/20';
      case 'paper-ui':
        return 'border-stone-300 bg-[#faf8f5] shadow-sm text-stone-900';
      default:
        return isLight
          ? 'bg-black/[0.03] border-black/10 text-slate-800'
          : 'bg-white/[0.03] border-white/10 text-slate-200';
    }
  };

  const themeClass = getContextThemeClass();

  return (
    <div
      aria-label={`Educational context for ${styleData.name}`}
      className={`mt-6 p-4 sm:p-5 rounded-2xl border transition-all ${themeClass}`}
    >
      {/* 1. What is it? */}
      {whatIsIt && (
        <div className="mb-4">
          <div className="flex items-center gap-2 mb-1">
            <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: styleData.accentColor || '#6366f1' }} />
            <span
              className={`text-[11px] font-mono uppercase tracking-wider font-bold ${
                isLight ? 'text-slate-600' : 'text-slate-400'
              }`}
            >
              WHAT IS IT?
            </span>
          </div>
          <p
            className={`text-xs sm:text-sm leading-relaxed ${
              isLight ? 'text-slate-800' : 'text-slate-200'
            }`}
          >
            {whatIsIt}
          </p>
        </div>
      )}

      {/* 2. Middle Row: Visual DNA & Best For in Responsive Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-3 pt-3 border-t border-current/10">
        {/* Visual DNA */}
        {visualDNA && visualDNA.length > 0 && (
          <div>
            <div className="text-[10px] font-mono uppercase tracking-wider font-bold mb-1.5 opacity-75">
              VISUAL DNA
            </div>
            <div className="flex flex-wrap gap-1.5">
              {visualDNA.map((item, idx) => (
                <span
                  key={idx}
                  className={`text-[11px] px-2 py-0.5 rounded-md font-medium inline-flex items-center gap-1 ${
                    isLight
                      ? 'bg-black/5 border border-black/10 text-slate-800'
                      : 'bg-white/5 border border-white/10 text-slate-200'
                  }`}
                >
                  <span className="opacity-40">•</span>
                  <span>{item}</span>
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Best For */}
        {bestFor && bestFor.length > 0 && (
          <div>
            <div className="text-[10px] font-mono uppercase tracking-wider font-bold mb-1.5 opacity-75">
              BEST FOR
            </div>
            <div className="flex flex-wrap gap-1.5">
              {bestFor.map((item, idx) => (
                <span
                  key={idx}
                  className={`text-[11px] px-2 py-0.5 rounded-md font-medium inline-flex items-center gap-1 ${
                    isLight
                      ? 'bg-emerald-500/10 border border-emerald-500/20 text-emerald-800'
                      : 'bg-emerald-500/10 border border-emerald-500/20 text-emerald-300'
                  }`}
                >
                  <span className="opacity-40">✓</span>
                  <span>{item}</span>
                </span>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* 3. Distinguished By */}
      {distinguishedBy && (
        <div className="mt-3 pt-2.5 border-t border-current/10">
          <div className="text-[10px] font-mono uppercase tracking-wider font-bold mb-1 opacity-75">
            DISTINGUISHED BY
          </div>
          <p
            className={`text-xs leading-relaxed italic ${
              isLight ? 'text-slate-700' : 'text-slate-300'
            }`}
          >
            {distinguishedBy}
          </p>
        </div>
      )}
    </div>
  );
};
