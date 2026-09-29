import React, { useState } from 'react';
import { SectionHeader } from '../components/SectionHeader';

export const WabiSabi = ({ styleData, prevStyle, nextStyle, onNavigate }) => {
  const [selectedVessel, setSelectedVessel] = useState('Kuro-Raku Tea Bowl (Black Raku)');
  const [kintsugiGlow, setKintsugiGlow] = useState(85);

  const vessels = [
    {
      name: 'Kuro-Raku Tea Bowl (Black Raku)',
      age: '400 Years of Patina',
      origin: 'Kyoto Imperial Clay',
      flaw: 'Deliberate asymmetrical lip and fire-pinched charcoal fissure.',
      kintsugi: 'Repaired with pure urushi lacquer and 24k powdered gold leaf.',
    },
    {
      name: 'Shigaraki Unglazed Water Jar',
      age: 'Edo Period Weathering',
      origin: 'Lake Biwa Feldspar',
      flaw: 'Natural wood-ash melt forming spontaneous green-amber drippings.',
      kintsugi: 'Hairline stress fracture sealed in golden veins.',
    },
    {
      name: 'Bizen Iron-Spotted Sake Cup',
      age: '180 Firing Hours',
      origin: 'Okayama Rice Paddy Clay',
      flaw: 'Unglazed stoneware with reddish flame marks (Hidasuki).',
      kintsugi: 'Rim chip restored with organic molten gold contour.',
    },
  ];

  const current = vessels.find((v) => v.name === selectedVessel) || vessels[0];

  return (
    <section id="wabi-sabi" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#181615] text-[#d6cec5] relative overflow-hidden font-editorial">
      {/* Raw Charcoal Stone & Ash Ambient Tone */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-[#2c2826]/30 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <SectionHeader
          styleData={styleData}
          prevStyle={prevStyle}
          nextStyle={nextStyle}
          onNavigate={onNavigate}
        />

        {/* Asymmetrical Sanctuary Container */}
        <div className="mt-8 rounded-[28px] p-6 sm:p-12 bg-[#211e1c] border border-[#3b3531] shadow-[0_12px_40px_rgba(0,0,0,0.5)] relative">
          {/* Asymmetrical Header */}
          <div className="flex flex-col md:flex-row items-start justify-between gap-6 pb-8 border-b border-[#38322e]">
            <div className="max-w-xl">
              <span className="text-[11px] font-mono uppercase tracking-[0.3em] text-[#a89886]">
                侘寂 // KANSO &amp; SHIBUMI
              </span>
              <h3 className="text-3xl sm:text-4xl font-light text-white mt-1 tracking-tight">
                Beauty in Imperfection &amp; Age
              </h3>
              <p className="text-xs text-[#a39485] mt-2 italic leading-relaxed">
                "Nothing lasts, nothing is finished, and nothing is perfect. The fissure is not a defect; it is where the golden lacquer lives."
              </p>
            </div>

            {/* Vessel Choice Pills */}
            <div className="flex flex-col gap-2 text-xs font-mono">
              {vessels.map((v) => (
                <button
                  key={v.name}
                  onClick={() => setSelectedVessel(v.name)}
                  className={`px-3 py-2 rounded-lg text-left transition-all cursor-pointer border ${
                    selectedVessel === v.name
                      ? 'border-[#d4af37]/60 bg-[#2b2622] text-[#f0e6d2] shadow-sm'
                      : 'border-transparent text-[#8a7c6f] hover:text-[#d6cec5]'
                  }`}
                >
                  {v.name.split('(')[0]}
                </button>
              ))}
            </div>
          </div>

          {/* Asymmetrical Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-10 items-center">
            {/* Left Kintsugi Fissure Visualizer (Span 6) */}
            <div className="lg:col-span-6 p-8 rounded-2xl bg-[#1a1715] border border-[#332c28] relative overflow-hidden">
              <div className="flex items-center justify-between text-xs font-mono text-[#a89886]">
                <span>VESSEL STUDY</span>
                <span>{current.age}</span>
              </div>

              {/* Fissure Graphic Simulation */}
              <div className="my-8 py-10 border border-dashed border-[#443b35] rounded-xl flex flex-col items-center justify-center relative">
                <span className="text-6xl select-none">🍵</span>
                <div
                  className="mt-4 text-xs font-mono uppercase tracking-widest text-[#d4af37] transition-opacity"
                  style={{ opacity: kintsugiGlow / 100 }}
                >
                  ✦ KINTSUGI GOLD VEIN ({(kintsugiGlow).toFixed(0)}% LUSTRE) ✦
                </div>
                <div className="text-[11px] text-[#807266] mt-1 font-serif italic text-center px-4">
                  {current.kintsugi}
                </div>
              </div>

              {/* Golden Vein Slider */}
              <div className="pt-2">
                <div className="flex items-center justify-between text-xs font-mono text-[#a89886] mb-2">
                  <span>URUSHI GOLD LUSTRE</span>
                  <span>{kintsugiGlow}%</span>
                </div>
                <input
                  type="range"
                  min="20"
                  max="100"
                  value={kintsugiGlow}
                  onChange={(e) => setKintsugiGlow(parseInt(e.target.value))}
                  className="w-full accent-[#d4af37] cursor-pointer"
                />
              </div>
            </div>

            {/* Right Contemplation & Flaw Manifesto (Span 6) */}
            <div className="lg:col-span-6 space-y-6">
              <div className="p-6 rounded-2xl bg-[#1f1b19] border border-[#38312c]">
                <div className="text-xs font-mono uppercase tracking-widest text-[#d4af37]">
                  CLAY PROVENANCE
                </div>
                <div className="text-2xl font-light text-white mt-1">
                  {current.origin}
                </div>
                <p className="text-xs text-[#b8a99a] mt-3 leading-relaxed">
                  {current.flaw}
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-[#1f1b19] border border-[#38312c]">
                <div className="text-xs font-mono uppercase tracking-widest text-[#a89886]">
                  AESTHETIC PILLARS
                </div>
                <div className="grid grid-cols-2 gap-3 mt-3 text-xs font-mono text-[#c4b6a7]">
                  <div className="p-2 rounded bg-black/30">• Fukinsei (Asymmetry)</div>
                  <div className="p-2 rounded bg-black/30">• Kanso (Simplicity)</div>
                  <div className="p-2 rounded bg-black/30">• Koko (Weathered Skin)</div>
                  <div className="p-2 rounded bg-black/30">• Shizuka (Quietude)</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
