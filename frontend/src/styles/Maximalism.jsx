import React, { useState } from 'react';
import { SectionHeader } from '../components/SectionHeader';
import { IconFlame, IconSparkles, IconTrendingUp } from '../components/Icons';

export const Maximalism = ({ styleData, prevStyle, nextStyle, onNavigate }) => {
  const [density, setDensity] = useState('Hyper');
  const [glitchActive, setGlitchActive] = useState(false);
  const [likes, setLikes] = useState(8492);

  const drops = [
    { title: 'HYPER-CHROMA BOMBER', badge: 'SOLD OUT IN 4S', tag: 'LIMITED 50', color: 'bg-yellow-400 text-black' },
    { title: 'NEO-RAVE GLITCH HOODIE', badge: 'RESTOCKED', tag: 'HEAVYWEIGHT', color: 'bg-emerald-400 text-black' },
    { title: 'MAXIMALIST CARGO VEST', badge: 'STAFF PICK', tag: '18 POCKETS', color: 'bg-fuchsia-500 text-white' },
  ];

  return (
    <section id="maximalism" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#0d0714] text-white relative overflow-hidden font-syne">
      {/* Visual Abundance Background Confetti Blobs */}
      <div className="absolute top-10 left-10 w-72 h-72 rounded-full bg-pink-600/30 blur-[90px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-80 h-80 rounded-full bg-yellow-400/20 blur-[100px] pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 w-60 h-60 rounded-full bg-cyan-500/20 blur-[80px] pointer-events-none" />

      {/* Repeating Diagonal Decorative Pattern Ribbons */}
      <div className="hidden lg:block absolute top-16 -right-24 rotate-12 bg-yellow-400 text-black font-black text-xs px-24 py-1 uppercase tracking-widest shadow-lg pointer-events-none">
        MORE IS MORE // MORE IS MORE // MORE IS MORE // MORE IS MORE
      </div>
      <div className="hidden lg:block absolute bottom-20 -left-20 -rotate-6 bg-pink-500 text-white font-black text-xs px-24 py-1 uppercase tracking-widest shadow-lg pointer-events-none">
        VISUAL ABUNDANCE // HIGH DENSITY // ZERO COMPROMISE
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <SectionHeader
          styleData={styleData}
          prevStyle={prevStyle}
          nextStyle={nextStyle}
          onNavigate={onNavigate}
        />

        {/* Hyper-Dense Maximalist Canvas */}
        <div className="mt-8 rounded-3xl p-6 sm:p-10 bg-[#160d24] border-4 border-fuchsia-500 shadow-[8px_8px_0px_#f43f5e] relative">
          {/* Saturated Banner */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 border-b-2 border-fuchsia-500/40">
            <div>
              <div className="flex flex-wrap items-center gap-2 mb-1">
                <span className="bg-yellow-400 text-black text-xs font-black px-2 py-0.5 uppercase tracking-wider rounded">
                  MAXIMALIST HUB
                </span>
                <span className="bg-cyan-400 text-black text-xs font-black px-2 py-0.5 uppercase tracking-wider rounded">
                  INTENTIONAL ABUNDANCE
                </span>
                <span className="bg-pink-500 text-white text-xs font-black px-2 py-0.5 uppercase tracking-wider rounded">
                  EXTRA CHROMA
                </span>
              </div>
              <h3 className="text-3xl sm:text-5xl font-black text-white uppercase tracking-tight">
                MORE IS RADICAL // LUXE EXCESS
              </h3>
            </div>

            {/* Density Mode Switcher */}
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono text-pink-300">DENSITY:</span>
              {['Loud', 'Hyper', 'Overdrive'].map((d) => (
                <button
                  key={d}
                  onClick={() => setDensity(d)}
                  className={`px-3 py-1.5 text-xs font-black uppercase rounded transition cursor-pointer border-2 ${
                    density === d
                      ? 'bg-yellow-400 text-black border-white shadow-[2px_2px_0px_#fff]'
                      : 'bg-black/40 text-white border-white/20 hover:bg-white/10'
                  }`}
                >
                  {d}
                </button>
              ))}
            </div>
          </div>

          {/* Saturated High-Impact Overlapping Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            {/* Card 1: Electric Lime Energy */}
            <div className="p-6 rounded-2xl bg-[#1d2d14] border-3 border-lime-400 shadow-[6px_6px_0px_#a3e635] flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold text-lime-400 uppercase tracking-widest">
                    VIBE INDEX
                  </span>
                  <span className="text-2xl">⚡</span>
                </div>
                <div className="text-4xl sm:text-5xl font-black text-lime-300 mt-2">
                  999.8%
                </div>
                <p className="text-xs text-lime-200 mt-2 font-medium">
                  Saturated audio-visual overload calibrated for maximum sensory engagement.
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-lime-500/30 flex items-center justify-between text-xs font-black text-lime-300">
                <span>PEAK RESONANCE</span>
                <span>MAXIMUM VOLTAGE</span>
              </div>
            </div>

            {/* Card 2: Hot Pink Overdrive */}
            <div className="p-6 rounded-2xl bg-[#360921] border-3 border-pink-500 shadow-[6px_6px_0px_#ec4899] flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold text-pink-400 uppercase tracking-widest">
                    STICKER IMPACT
                  </span>
                  <span className="text-2xl">🔥</span>
                </div>
                <div className="text-4xl sm:text-5xl font-black text-pink-300 mt-2">
                  {likes.toLocaleString()}
                </div>
                <p className="text-xs text-pink-200 mt-2 font-medium">
                  Audience adoration reactions across underground Tokyo, Berlin &amp; NYC parties.
                </p>
              </div>

              <button
                onClick={() => setLikes(likes + 1)}
                className="mt-4 py-2 bg-pink-500 hover:bg-pink-400 text-white font-black text-xs uppercase tracking-wider rounded-xl transition cursor-pointer shadow-[2px_2px_0px_#000]"
              >
                + BOOST ENERGY BOOST
              </button>
            </div>

            {/* Card 3: Cobalt Electric */}
            <div className="p-6 rounded-2xl bg-[#091b3b] border-3 border-cyan-400 shadow-[6px_6px_0px_#22d3ee] flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-widest">
                    PATTERN DENSITY
                  </span>
                  <span className="text-2xl">🌐</span>
                </div>
                <div className="text-4xl sm:text-5xl font-black text-cyan-300 mt-2">
                  54 LAYERS
                </div>
                <p className="text-xs text-cyan-200 mt-2 font-medium">
                  Dynamic pattern clashes, zebra stripes, polka dots, and chromatic typography.
                </p>
              </div>

              <div className="mt-4 flex gap-1.5 flex-wrap">
                {['#LOUD', '#EXTRA', '#MORE', '#NEVER_BORING'].map((tag) => (
                  <span key={tag} className="text-[10px] bg-cyan-400 text-black font-black px-2 py-0.5 rounded">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Limited Maximalist Release Lineup */}
          <div className="mt-8 border-2 border-fuchsia-500/40 rounded-2xl p-6 bg-black/50">
            <div className="flex items-center justify-between mb-4">
              <h4 className="text-sm font-black uppercase tracking-wider text-yellow-300 flex items-center gap-2">
                <IconFlame className="w-4 h-4 text-pink-500" />
                <span>HOT MERCH COLLABORATIVE CAPSULES</span>
              </h4>
              <span className="text-xs font-mono text-pink-400">STATUS: LIVE RUSH</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {drops.map((item, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl border-2 border-white/20 bg-white/5 hover:border-yellow-400 transition"
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className={`text-[10px] font-black px-2 py-0.5 rounded ${item.color}`}>
                      {item.badge}
                    </span>
                    <span className="text-xs font-mono text-slate-400">{item.tag}</span>
                  </div>
                  <div className="text-base font-black text-white mt-1 uppercase">{item.title}</div>
                  <div className="mt-3 flex items-center justify-between text-xs font-bold pt-2 border-t border-white/10">
                    <span className="text-yellow-400">$380.00</span>
                    <span className="text-cyan-400">CLAIM DROP →</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
