import React, { useState } from 'react';
import { SectionHeader } from '../components/SectionHeader';

export const FrutigerAero = ({ styleData, prevStyle, nextStyle, onNavigate }) => {
  const [bubbleCount, setBubbleCount] = useState(14);

  return (
    <section id="frutiger-aero" className="py-20 px-4 sm:px-6 lg:px-8 bg-linear-to-b from-[#1b82cf] via-[#2bb8a0] to-[#55c942] text-white relative overflow-hidden">
      {/* Floating 3D Water Bubbles with Specular Highlights */}
      <div className="absolute top-10 left-12 w-28 h-28 rounded-full bg-white/20 border border-white/50 backdrop-blur-sm shadow-[inset_0_4px_12px_rgba(255,255,255,0.8),0_8px_20px_rgba(0,0,0,0.15)] animate-float pointer-events-none">
        <div className="w-8 h-4 rounded-full bg-white/70 mx-auto mt-2 blur-[1px]" />
      </div>
      <div className="absolute bottom-20 right-16 w-36 h-36 rounded-full bg-white/20 border border-white/50 backdrop-blur-sm shadow-[inset_0_4px_12px_rgba(255,255,255,0.8),0_8px_20px_rgba(0,0,0,0.15)] animate-float pointer-events-none" style={{ animationDelay: '2s' }}>
        <div className="w-10 h-5 rounded-full bg-white/70 mx-auto mt-3 blur-[1px]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <SectionHeader
          styleData={styleData}
          prevStyle={prevStyle}
          nextStyle={nextStyle}
          onNavigate={onNavigate}
        />

        {/* Glossy Vista Aero Glass Window */}
        <div className="rounded-3xl p-6 sm:p-10 backdrop-blur-2xl bg-white/25 border-2 border-white/60 shadow-[0_20px_50px_rgba(0,0,0,0.25),inset_0_2px_4px_rgba(255,255,255,0.9)] relative overflow-hidden text-slate-900">
          {/* Header Bar with Glossy Specular Sheen */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-white/40">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-linear-to-b from-sky-200 via-sky-400 to-blue-600 border border-white shadow-md flex items-center justify-center text-2xl relative overflow-hidden">
                <div className="absolute inset-x-0 top-0 h-1/2 bg-white/60 rounded-t-2xl" />
                💧
              </div>
              <div>
                <h3 className="text-2xl sm:text-3xl font-black text-sky-950 tracking-tight font-display">
                  AquaPure Ecological Network
                </h3>
                <p className="text-xs font-semibold text-sky-900/80">Optimistic cyber-nature & clean atmospheric telemetry</p>
              </div>
            </div>

            {/* Glossy Green Aqua Pill */}
            <div className="relative px-5 py-2 rounded-full bg-linear-to-b from-emerald-300 via-emerald-500 to-green-700 text-white font-black text-xs uppercase tracking-wider border border-white/80 shadow-[0_4px_12px_rgba(16,185,129,0.4)] overflow-hidden">
              <div className="absolute inset-x-0 top-0 h-1/2 bg-white/50 rounded-full" />
              <span className="relative z-10">ECO-OPTIMISM 2006</span>
            </div>
          </div>

          {/* Metric Cards with High-Gloss Top Highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            {/* Glossy Card 1: Water Purity */}
            <div className="p-6 rounded-2xl bg-linear-to-b from-white/70 to-white/40 border border-white shadow-lg relative overflow-hidden transition-all hover:scale-105">
              <div className="absolute inset-x-0 top-0 h-1/2 bg-white/40 rounded-t-2xl pointer-events-none" />
              <div className="flex justify-between items-center text-xs font-bold text-sky-800 uppercase">
                <span>Aquifer Water Purity</span>
                <span>🌊</span>
              </div>
              <div className="text-4xl font-black text-sky-950 mt-2 font-display">
                99.8%
              </div>
              <p className="text-xs font-semibold text-sky-800 mt-2">Glacial runoff filtration pure</p>
            </div>

            {/* Glossy Card 2: Alpine Air Quality */}
            <div className="p-6 rounded-2xl bg-linear-to-b from-white/70 to-white/40 border border-white shadow-lg relative overflow-hidden transition-all hover:scale-105">
              <div className="absolute inset-x-0 top-0 h-1/2 bg-white/40 rounded-t-2xl pointer-events-none" />
              <div className="flex justify-between items-center text-xs font-bold text-emerald-800 uppercase">
                <span>Clean Air Index</span>
                <span>🍃</span>
              </div>
              <div className="text-4xl font-black text-emerald-950 mt-2 font-display">
                12 AQI
              </div>
              <p className="text-xs font-semibold text-emerald-800 mt-2">Pristine alpine oxygen saturation</p>
            </div>

            {/* Glossy Card 3: Solar Generation */}
            <div className="p-6 rounded-2xl bg-linear-to-b from-white/70 to-white/40 border border-white shadow-lg relative overflow-hidden transition-all hover:scale-105">
              <div className="absolute inset-x-0 top-0 h-1/2 bg-white/40 rounded-t-2xl pointer-events-none" />
              <div className="flex justify-between items-center text-xs font-bold text-blue-800 uppercase">
                <span>Solar Photovoltaic</span>
                <span>☀️</span>
              </div>
              <div className="text-4xl font-black text-blue-950 mt-2 font-display">
                4.8 kW
              </div>
              <p className="text-xs font-semibold text-blue-800 mt-2">Zero-emission clean grid feed</p>
            </div>
          </div>

          {/* Interactive Crystal Glass Action Bar */}
          <div className="mt-8 p-6 rounded-2xl bg-white/30 border border-white/60 shadow-inner flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <h4 className="text-sm font-black text-sky-950 uppercase tracking-wider">
                Optimistic Technological Harmony
              </h4>
              <p className="text-xs font-medium text-sky-900 mt-1 max-w-xl">
                A digital future where lush green hills, azure clear skies, and glossy crystal computers coexisted with unapologetic techno-optimism.
              </p>
            </div>
            <button
              onClick={() => setBubbleCount(b => b + 1)}
              className="relative px-6 py-3 rounded-full bg-linear-to-b from-sky-300 via-sky-500 to-blue-700 text-white font-black text-xs uppercase tracking-wider border border-white/80 shadow-[0_6px_16px_rgba(2,132,199,0.4)] active:scale-95 transition-all overflow-hidden cursor-pointer"
            >
              <div className="absolute inset-x-0 top-0 h-1/2 bg-white/50 rounded-full" />
              <span className="relative z-10">RELEASE BUBBLE ({bubbleCount})</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
