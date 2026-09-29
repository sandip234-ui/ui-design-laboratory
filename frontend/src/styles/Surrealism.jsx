import React, { useState } from 'react';
import { SectionHeader } from '../components/SectionHeader';
import { IconSparkles, IconEye, IconRefresh } from '../components/Icons';

export const Surrealism = ({ styleData, prevStyle, nextStyle, onNavigate }) => {
  const [gravityDefied, setGravityDefied] = useState(true);
  const [dreamDimension, setDreamDimension] = useState('Lucid Corridor');
  const [astralTension, setAstralTension] = useState(78);

  const dreamVisions = [
    { title: 'The Cloud That Clocked In', archetype: 'Floating Hourglass', paradox: 'Time moves backwards when observed' },
    { title: 'The Mirror With No Surface', archetype: 'Gilded Frame', paradox: 'Reflects the observer\'s future thought' },
    { title: 'The Stairway That Ends In Sky', archetype: 'Infinite Steps', paradox: 'Each descent increases elevation' },
  ];

  return (
    <section id="surrealism" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#090514] text-purple-200 relative overflow-hidden">
      {/* Dreamlike Cosmic Nebula Blurs & Floating Orbs */}
      <div className="absolute top-10 left-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-indigo-500/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 w-64 h-64 bg-pink-500/15 rounded-full blur-[100px] pointer-events-none" />

      {/* Surrealist Floating Background Geometry */}
      <div className="absolute top-20 right-20 w-24 h-24 border border-purple-400/20 rounded-full animate-float pointer-events-none" />
      <div className="absolute bottom-32 left-12 w-16 h-16 border-2 border-indigo-400/20 rotate-45 animate-pulse-subtle pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <SectionHeader
          styleData={styleData}
          prevStyle={prevStyle}
          nextStyle={nextStyle}
          onNavigate={onNavigate}
        />

        {/* Surrealist Hall of Curiosities */}
        <div className="mt-8 rounded-3xl p-6 sm:p-10 bg-[#130b26]/80 border border-purple-500/30 backdrop-blur-xl shadow-[0_0_50px_rgba(168,85,247,0.15)] relative">
          {/* Metaphysical Header Bar */}
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pb-6 border-b border-purple-500/20">
            <div className="flex items-center gap-3">
              <span className="p-2.5 rounded-2xl bg-purple-500/20 border border-purple-400/30 text-purple-300">
                <IconEye className="w-5 h-5 animate-pulse" />
              </span>
              <div>
                <span className="text-[11px] font-mono uppercase tracking-[0.25em] text-purple-400/80">
                  DREAM ARCHITECTURE // LOGIC REVERSAL
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                  Atelier of Impossible Scales
                </h3>
              </div>
            </div>

            {/* Paradox Control Switches */}
            <div className="flex items-center gap-3">
              <button
                onClick={() => setGravityDefied(!gravityDefied)}
                className={`px-4 py-2 rounded-xl text-xs font-mono transition-all cursor-pointer flex items-center gap-2 ${
                  gravityDefied
                    ? 'bg-purple-600 text-white shadow-[0_0_20px_rgba(168,85,247,0.4)]'
                    : 'bg-white/5 text-purple-300 border border-purple-500/30 hover:bg-white/10'
                }`}
              >
                <span>{gravityDefied ? 'GRAVITY: SUSPENDED' : 'GRAVITY: RESTORED'}</span>
                <span className="text-sm">🪐</span>
              </button>
            </div>
          </div>

          {/* Impossible Metrics Row (With subtle floating offsets) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <div
              className={`p-6 rounded-2xl bg-white/4 border border-purple-400/25 transition-transform duration-700 ${
                gravityDefied ? '-translate-y-2 shadow-[0_15px_30px_rgba(147,51,234,0.15)]' : ''
              }`}
            >
              <div className="flex items-center justify-between text-xs text-purple-300/70 font-mono">
                <span>SUBCONSCIOUS DEPTH</span>
                <span>∞ METERS</span>
              </div>
              <div className="text-3xl font-black text-white mt-3 font-serif">1,420 Fathoms</div>
              <p className="text-xs text-purple-300/75 mt-2 italic">
                Beyond the threshold of waking comprehension
              </p>
            </div>

            <div
              className={`p-6 rounded-2xl bg-white/4 border border-purple-400/25 transition-transform duration-700 delay-100 ${
                gravityDefied ? 'translate-y-2 shadow-[0_15px_30px_rgba(147,51,234,0.15)]' : ''
              }`}
            >
              <div className="flex items-center justify-between text-xs text-purple-300/70 font-mono">
                <span>TEMPORAL DRIFT</span>
                <span>MELTED</span>
              </div>
              <div className="text-3xl font-black text-white mt-3 font-serif">-4:18 Hours</div>
              <p className="text-xs text-purple-300/75 mt-2 italic">
                Clocks sag upon the branches of sleeping trees
              </p>
            </div>

            <div
              className={`p-6 rounded-2xl bg-white/4 border border-purple-400/25 transition-transform duration-700 delay-200 ${
                gravityDefied ? '-translate-y-1 shadow-[0_15px_30px_rgba(147,51,234,0.15)]' : ''
              }`}
            >
              <div className="flex items-center justify-between text-xs text-purple-300/70 font-mono">
                <span>ASTRAL EQUILIBRIUM</span>
                <span>{astralTension}%</span>
              </div>
              <div className="text-3xl font-black text-white mt-3 font-serif">94.6% Synced</div>
              <div className="mt-3">
                <input
                  type="range"
                  min="20"
                  max="100"
                  value={astralTension}
                  onChange={(e) => setAstralTension(parseInt(e.target.value))}
                  className="w-full accent-purple-400 cursor-pointer"
                />
              </div>
            </div>
          </div>

          {/* Dream Relic Visual Showcase */}
          <div className="mt-8 p-6 rounded-2xl bg-black/40 border border-purple-500/20">
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-mono uppercase tracking-widest text-purple-400 font-bold flex items-center gap-2">
                <IconSparkles className="w-4 h-4" />
                <span>OBSERVED DREAM OBJECTS &amp; PARADOXES</span>
              </span>
              <span className="text-xs font-mono text-purple-300/60">
                ACTIVE DIMENSION: {dreamDimension}
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {dreamVisions.map((vision, idx) => (
                <div
                  key={idx}
                  onClick={() => setDreamDimension(vision.title)}
                  className="p-4 rounded-xl border border-purple-500/20 bg-purple-950/20 hover:border-purple-400/50 hover:bg-purple-900/30 transition cursor-pointer"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono text-purple-400">0{idx + 1} // RELIC</span>
                    <span className="text-sm">👁️</span>
                  </div>
                  <h4 className="font-bold text-white text-sm mt-2">{vision.title}</h4>
                  <div className="text-xs text-purple-300/80 mt-1 font-serif italic">
                    {vision.archetype}
                  </div>
                  <p className="text-[11px] text-purple-400/90 mt-3 pt-2 border-t border-purple-500/20">
                    "{vision.paradox}"
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
