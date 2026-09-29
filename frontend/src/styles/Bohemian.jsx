import React, { useState } from 'react';
import { SectionHeader } from '../components/SectionHeader';

export const Bohemian = ({ styleData, prevStyle, nextStyle, onNavigate }) => {
  const [selectedCraft, setSelectedCraft] = useState('All');
  const [cartCount, setCartCount] = useState(2);

  const crafts = [
    { title: 'Hand-Woven Atlas Kilim', artisan: 'Fatima Zohra', origin: 'High Atlas, Morocco', price: '$420', category: 'Textiles' },
    { title: 'Terracotta Sun Vessel', artisan: 'Mateo Morales', origin: 'Oaxaca, Mexico', price: '$180', category: 'Ceramics' },
    { title: 'Hand-Hammered Brass Censer', artisan: 'Devraj Sharma', origin: 'Jaipur, India', price: '$240', category: 'Metals' },
  ];

  const filtered = selectedCraft === 'All' ? crafts : crafts.filter((c) => c.category === selectedCraft);

  return (
    <section id="bohemian" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#f9f4ed] text-[#422e23] relative overflow-hidden font-serif">
      {/* Warm Ambient Earth Glow */}
      <div className="absolute top-1/4 -right-16 w-80 h-80 rounded-full bg-[#e8a87c]/20 blur-[90px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <SectionHeader
          styleData={styleData}
          prevStyle={prevStyle}
          nextStyle={nextStyle}
          onNavigate={onNavigate}
        />

        {/* Artisanal Bazaar Board */}
        <div className="mt-8 rounded-4xl p-6 sm:p-10 bg-[#f2e7d8] border-2 border-[#decbb4] shadow-[0_12px_40px_rgba(66,46,35,0.06)] relative">
          {/* Top Woven Motif Band */}
          <div className="h-2 w-full bg-[repeating-linear-gradient(90deg,#c86446_0,#c86446_12px,#d97706_12px,#d97706_24px,#65a30d_24px,#65a30d_36px,#422e23_36px,#422e23_48px)] rounded-full mb-6" />

          {/* Header Bar */}
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pb-6 border-b border-[#ddcca6]">
            <div>
              <span className="text-xs uppercase tracking-[0.25em] text-[#b45309] font-sans font-bold">
                CRAFT COLLECTIVE // BAZAAR NOMAD
              </span>
              <h3 className="text-3xl sm:text-4xl font-normal text-[#2e1f17] mt-1 tracking-tight">
                Soulful Handcrafted Archive
              </h3>
            </div>

            {/* Filter Pills */}
            <div className="flex flex-wrap gap-2 text-xs font-sans">
              {['All', 'Textiles', 'Ceramics', 'Metals'].map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCraft(cat)}
                  className={`px-4 py-2 rounded-full transition-all cursor-pointer ${
                    selectedCraft === cat
                      ? 'bg-[#c86446] text-white font-bold shadow-md'
                      : 'bg-[#faf4ec] text-[#6b5143] border border-[#d8c5ad] hover:bg-white'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Arched Artisanal Showcase Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            {filtered.map((item, idx) => (
              <div
                key={idx}
                className="p-6 rounded-t-full rounded-b-2xl bg-[#faf4eb] border border-[#dfd0be] shadow-xs flex flex-col justify-between hover:-translate-y-1 transition-transform"
              >
                {/* Arched Top Icon Emblem */}
                <div className="pt-6 pb-2 text-center">
                  <span className="inline-block p-4 rounded-full bg-[#f0e3d2] text-2xl shadow-inner">
                    {item.category === 'Textiles' ? '🧶' : item.category === 'Ceramics' ? '🏺' : '🪔'}
                  </span>
                  <div className="mt-3 text-xs uppercase tracking-widest text-[#a16207] font-sans font-semibold">
                    {item.origin}
                  </div>
                  <h4 className="text-xl font-medium text-[#2d1f17] mt-1">
                    {item.title}
                  </h4>
                  <div className="text-xs italic text-[#786457] mt-1">
                    By {item.artisan}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-[#ebdccb] flex items-center justify-between text-xs font-sans">
                  <span className="text-lg font-bold text-[#b45309] font-serif">{item.price}</span>
                  <button
                    onClick={() => setCartCount(cartCount + 1)}
                    className="px-3 py-1.5 rounded-full bg-[#422e23] hover:bg-[#2d1e17] text-[#f9f4ed] font-semibold transition cursor-pointer"
                  >
                    Acquire Craft +
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Bohemian Manifesto Footer Box */}
          <div className="mt-8 p-6 rounded-2xl bg-[#ebe0ce] border border-[#d8c5ad] flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <h5 className="text-base italic text-[#2e1f17]">
                "Every knot in the wool carries a prayer; every curve of the clay remembers the potter's fingers."
              </h5>
              <div className="text-xs text-[#80695a] font-sans mt-1">
                Ethically traded • Zero factory duplication • Handcrafted with love
              </div>
            </div>

            <div className="px-4 py-2 rounded-full bg-[#faf4eb] border border-[#decbb4] text-xs font-sans text-[#422e23] font-bold shrink-0">
              Basket: {cartCount} Artifacts
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
