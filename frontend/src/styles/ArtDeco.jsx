import React, { useState } from 'react';
import { SectionHeader } from '../components/SectionHeader';

export const ArtDeco = ({ styleData, prevStyle, nextStyle, onNavigate }) => {
  const [activeTier, setActiveTier] = useState('Imperial Ballroom');
  const [reserved, setReserved] = useState(false);

  const tiers = [
    { name: 'Imperial Ballroom', access: 'Tier I Admission', cocktail: 'French 75 & Dom Pérignon 1928', tariff: '$650' },
    { name: 'Gilded Sunburst Lounge', access: 'Tier II VIP', cocktail: 'Smoked Sazerac & Beluga Caviar', tariff: '$1,200' },
    { name: 'Penthouse Observatory', access: 'Tier III Sovereign', cocktail: 'Vintage Cognac & Private Orchestra', tariff: '$2,800' },
  ];

  const current = tiers.find((t) => t.name === activeTier) || tiers[0];

  return (
    <section id="art-deco" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#09090b] text-[#fef3c7] relative overflow-hidden font-cinzel">
      {/* Symmetrical Sunburst Background Fan Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-72 bg-[radial-gradient(ellipse_at_top,var(--tw-gradient-stops))] from-yellow-500/15 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <SectionHeader
          styleData={styleData}
          prevStyle={prevStyle}
          nextStyle={nextStyle}
          onNavigate={onNavigate}
        />

        {/* Art Deco Lacquered Ziggurat Container */}
        <div className="mt-8 p-6 sm:p-12 bg-[#0e0e12] border-2 border-yellow-500/50 shadow-[0_0_50px_rgba(234,179,8,0.15)] relative">
          {/* Top Geometric Chevron Symmetrical Trim */}
          <div className="text-center text-yellow-400 text-xs tracking-[0.5em] uppercase pb-2 select-none">
            ✦ ── ❖ ── ✦ ── ❖ ── ✦
          </div>

          {/* Symmetrical Header */}
          <div className="text-center pb-8 border-b-2 border-yellow-500/30">
            <span className="text-xs uppercase tracking-[0.4em] text-yellow-400 font-bold">
              EST. 1925 // GATSBY ARCHITECTURE
            </span>
            <h3 className="text-3xl sm:text-5xl font-black text-transparent bg-clip-text bg-linear-to-r from-yellow-200 via-yellow-400 to-amber-500 mt-2 tracking-wider">
              The Grand Metropolis Gala
            </h3>
            <div className="flex items-center justify-center gap-4 mt-3 text-xs text-yellow-200/80 tracking-widest uppercase">
              <span>Geometric Symmetry</span>
              <span>•</span>
              <span>Obsidian Lacquer</span>
              <span>•</span>
              <span>Golden Ziggurats</span>
            </div>
          </div>

          {/* Stepped Tier Selection */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
            {tiers.map((tier) => {
              const isSelected = activeTier === tier.name;
              return (
                <div
                  key={tier.name}
                  onClick={() => {
                    setActiveTier(tier.name);
                    setReserved(false);
                  }}
                  className={`p-6 border-2 transition-all cursor-pointer text-center relative flex flex-col justify-between min-h-64 ${
                    isSelected
                      ? 'border-yellow-400 bg-yellow-950/30 shadow-[0_0_25px_rgba(234,179,8,0.25)] scale-[1.02]'
                      : 'border-yellow-600/30 bg-black/40 hover:border-yellow-500/60'
                  }`}
                >
                  {/* Stepped Corner Accent */}
                  <div className="text-[10px] text-yellow-500 uppercase tracking-widest">
                    {tier.access}
                  </div>

                  <div className="my-4">
                    <span className="text-3xl">🍸</span>
                    <h4 className="text-lg font-bold text-white mt-2 uppercase tracking-wide">
                      {tier.name}
                    </h4>
                    <p className="text-xs text-yellow-200/70 mt-2 font-sans italic">
                      "{tier.cocktail}"
                    </p>
                  </div>

                  <div className="pt-3 border-t border-yellow-500/30 text-xl font-bold text-yellow-400">
                    {tier.tariff}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Symmetrical Booking Feature */}
          <div className="mt-10 p-8 border-2 border-yellow-500/40 bg-black/60 text-center max-w-2xl mx-auto">
            <span className="text-xs uppercase tracking-[0.3em] text-yellow-400 font-bold">
              CONFIDENTIAL INVITATION
            </span>
            <div className="text-2xl sm:text-3xl font-bold text-white mt-2 uppercase tracking-wide">
              {current.name}
            </div>
            <p className="text-xs font-sans text-yellow-100/70 mt-2 max-w-md mx-auto leading-relaxed">
              Black tie formal wear mandatory. Valet reception commencing promptly at eight in the evening.
            </p>

            <button
              onClick={() => setReserved(true)}
              disabled={reserved}
              className={`mt-6 px-8 py-3 text-xs tracking-[0.3em] uppercase font-black transition cursor-pointer border-2 ${
                reserved
                  ? 'border-emerald-400 bg-emerald-950/60 text-emerald-300'
                  : 'border-yellow-400 bg-yellow-400 hover:bg-yellow-300 text-black shadow-[0_0_20px_rgba(234,179,8,0.3)]'
              }`}
            >
              {reserved ? 'GALA PASS ISSUED ✓' : 'REQUEST SOVEREIGN GALA PASS'}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
