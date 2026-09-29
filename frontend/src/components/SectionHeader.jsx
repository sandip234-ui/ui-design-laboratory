import React, { useState } from 'react';
import { IconArrowLeft, IconArrowRight, IconCheck, IconSparkles } from './Icons';
import { StyleContext } from './StyleContext';
import { STYLES } from '../data/stylesData';

export const SectionHeader = ({ styleData, prevStyle, nextStyle, onNavigate, totalStyles }) => {
  const [copied, setCopied] = useState(false);
  const isLight = Boolean(styleData.isLight);
  const totalCount = totalStyles || STYLES.length;

  const handleCopyTokens = () => {
    const text = `Style: ${styleData.name} (${styleData.number}/${totalCount})\nFormula: ${styleData.formula}\nExplanation: ${styleData.explanation || styleData.shortDescription}\nCharacteristics: ${(styleData.characteristics || []).join(', ')}\nEra: ${styleData.era}\nCategory: ${styleData.category}`;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Subtle style-specific touches for the header
  const getStyleSpecificHeaderClass = () => {
    switch (styleData.id) {
      case 'brutalism':
        return 'font-mono border-b-4 border-yellow-400 pb-5';
      case 'terminal-ui':
        return 'font-mono text-green-400 border-b border-green-500/40 pb-5';
      case 'cyberpunk-ui':
        return 'font-hud border-b border-[#f43f5e]/40 pb-5';
      case 'futuristic-hud':
        return 'font-hud border-b border-cyan-500/40 pb-5';
      case 'retro-pixel':
        return 'font-vt323 border-b-2 border-dashed border-[#22c55e]/50 pb-4';
      case 'swiss-style':
        return 'font-sans-clean border-b-2 border-black pb-6';
      case 'editorial-ui':
        return 'font-editorial border-b border-white/20 pb-5';
      case 'y2k':
        return 'font-space border-b border-cyan-400/30 pb-5';
      case 'neobrutalism':
        return 'font-space border-b-3 border-black pb-5';
      default:
        return isLight ? 'border-b border-black/10 pb-6' : 'border-b border-white/10 pb-6';
    }
  };

  return (
    <header className={`mb-8 sm:mb-10 ${getStyleSpecificHeaderClass()}`}>
      {/* Top Utility Row: Number Badge, Meta & Navigation */}
      <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
        <div className="flex items-center gap-2.5">
          {/* Main 01 / 51 Number Badge */}
          <span
            className={`font-mono text-xs sm:text-sm uppercase tracking-widest font-black px-3 py-1 rounded-lg ${
              isLight
                ? 'bg-black/10 text-black border border-black/20'
                : 'bg-white/10 text-white border border-white/20'
            }`}
          >
            {styleData.number} / {totalCount}
          </span>

          {/* Category Tag */}
          <span
            className={`text-xs uppercase tracking-wider font-semibold ${
              isLight ? 'text-slate-600' : 'text-slate-400'
            }`}
          >
            {styleData.category}
          </span>

          <span
            className={`hidden sm:inline-block w-1.5 h-1.5 rounded-full ${
              isLight ? 'bg-slate-400' : 'bg-slate-600'
            }`}
          />

          <span
            className={`hidden sm:inline-block text-xs font-mono ${
              isLight ? 'text-slate-600' : 'text-slate-400'
            }`}
          >
            {styleData.era}
          </span>
        </div>

        {/* Right Controls: Token Copier & Prev/Next */}
        <div className="flex items-center gap-2">
          <button
            onClick={handleCopyTokens}
            className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg transition-all hover:scale-105 active:scale-95 cursor-pointer ${
              isLight
                ? 'bg-black/5 hover:bg-black/10 text-slate-800 border border-black/15'
                : 'bg-white/5 hover:bg-white/10 text-slate-200 border border-white/10'
            }`}
            title="Copy style tokens to clipboard"
          >
            {copied ? (
              <>
                <IconCheck className="w-3.5 h-3.5 text-emerald-600" />
                <span className="text-emerald-700 font-bold">Tokens Copied</span>
              </>
            ) : (
              <>
                <IconSparkles className="w-3.5 h-3.5 opacity-70" />
                <span>Tokens</span>
              </>
            )}
          </button>

          {prevStyle && (
            <button
              onClick={() => onNavigate(prevStyle.id)}
              className={`p-1.5 text-xs rounded-lg transition flex items-center gap-1 px-2.5 cursor-pointer ${
                isLight
                  ? 'bg-black/5 hover:bg-black/10 text-slate-800 border border-black/15'
                  : 'bg-white/5 hover:bg-white/10 text-slate-200 border border-white/10'
              }`}
              title={`Previous: ${prevStyle.name}`}
            >
              <IconArrowLeft className="w-3.5 h-3.5" />
              <span className="hidden md:inline font-mono">{prevStyle.number}</span>
            </button>
          )}

          {nextStyle && (
            <button
              onClick={() => onNavigate(nextStyle.id)}
              className={`p-1.5 text-xs rounded-lg transition flex items-center gap-1 px-2.5 cursor-pointer ${
                isLight
                  ? 'bg-black/5 hover:bg-black/10 text-slate-800 border border-black/15'
                  : 'bg-white/5 hover:bg-white/10 text-slate-200 border border-white/10'
              }`}
              title={`Next: ${nextStyle.name}`}
            >
              <span className="hidden md:inline font-mono">{nextStyle.number}</span>
              <IconArrowRight className="w-3.5 h-3.5" />
            </button>
          )}
        </div>
      </div>

      {/* Main Prominent Style Title & Explanation Block */}
      <div className="mt-2">
        <h2
          className={`text-3xl sm:text-4xl md:text-5xl font-black tracking-tight flex items-center gap-3 uppercase ${
            styleData.headerFont || 'font-display'
          } ${
            isLight ? 'text-slate-900' : 'text-white'
          }`}
        >
          <span className="text-2xl sm:text-3xl md:text-4xl">{styleData.iconEmoji}</span>
          <span>{styleData.name}</span>
        </h2>

        {/* "How This Style Is Formed" Explanation Block */}
        <div className="mt-3.5 space-y-1">
          {/* Formula Line (Visually prominent, smaller than heading) */}
          <div
            className={`text-base sm:text-lg md:text-xl font-bold tracking-tight ${
              styleData.headerFont || 'font-display'
            } ${
              isLight ? 'text-slate-950 font-black' : 'text-indigo-200 font-bold'
            }`}
          >
            {styleData.formula}
          </div>

          {/* Characteristics Line */}
          <p
            className={`text-sm sm:text-base max-w-3xl leading-relaxed ${
              isLight ? 'text-slate-700 font-medium' : 'text-slate-300 font-normal'
            }`}
          >
            {styleData.explanation || styleData.shortDescription}
          </p>
        </div>
      </div>

      {/* Characteristic Badges */}
      <div className="mt-4 flex flex-wrap gap-2">
        {styleData.characteristics && styleData.characteristics.map((char, index) => (
          <span
            key={index}
            className={`inline-flex items-center text-xs px-2.5 py-1 rounded-md font-semibold ${
              isLight
                ? 'bg-black/5 border border-black/10 text-slate-800'
                : 'bg-white/5 border border-white/10 text-slate-200'
            }`}
          >
            <span
              className="w-2 h-2 rounded-full mr-2"
              style={{ backgroundColor: styleData.accentColor }}
            />
            {char}
          </span>
        ))}
      </div>

      {/* Rich Educational Style Context */}
      <StyleContext styleData={styleData} isLight={isLight} />
    </header>
  );
};
