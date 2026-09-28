import React, { useState } from 'react';
import { SectionHeader } from '../components/SectionHeader';

export const MemphisDesign = ({ styleData, prevStyle, nextStyle, onNavigate }) => {
  const [funkyMode, setFunkyMode] = useState(true);

  return (
    <section id="memphis-design" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#fff1f2] text-slate-900 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          styleData={styleData}
          prevStyle={prevStyle}
          nextStyle={nextStyle}
          onNavigate={onNavigate}
        />

        {/* Memphis Postmodern Playground Frame */}
        <div className="rounded-3xl p-6 sm:p-10 bg-[#fdf2f8] border-4 border-black shadow-[10px_10px_0px_#000] relative overflow-hidden">
          {/* Confetti & Geometric Background Decos */}
          <div className="absolute top-4 right-10 text-4xl opacity-50 select-none">▲</div>
          <div className="absolute top-1/2 left-4 text-4xl text-teal-500 opacity-60 select-none">●</div>
          <div className="absolute bottom-6 right-24 text-3xl text-pink-500 select-none">〰️〰️</div>

          {/* Top Banner */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b-4 border-black relative z-10">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-[#fde047] border-3 border-black shadow-[3px_3px_0px_#000] flex items-center justify-center text-2xl font-black rotate-6">
                ★
              </div>
              <div>
                <h3 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-black font-space">
                  SOTTSASS // MEMPHIS STUDIO
                </h3>
                <p className="text-xs font-bold text-pink-700">1981 Milanese postmodern design rebellion</p>
              </div>
            </div>

            {/* Asymmetric Quirky Pill */}
            <div className="px-4 py-2 rounded-full bg-[#67e8f9] border-3 border-black shadow-[4px_4px_0px_#000] -rotate-2 font-black text-xs uppercase tracking-wider">
              100% ANTI-MINIMALIST
            </div>
          </div>

          {/* Quirky Geometric Metric Blocks */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 relative z-10">
            {/* Block 1: Circle Card */}
            <div className="p-6 rounded-[30px] bg-[#fbcfe8] border-3 border-black shadow-[6px_6px_0px_#000] rotate-1 hover:rotate-0 transition-transform">
              <div className="flex justify-between items-center text-xs font-black uppercase">
                <span>VIBRANT CREATIVITY</span>
                <span>▲</span>
              </div>
              <div className="text-4xl font-black text-black mt-3 font-space">
                98.9%
              </div>
              <div className="mt-3 text-xs font-bold text-pink-900 bg-pink-300 border-2 border-black inline-block px-2 py-0.5 rounded">
                PURE COLOR FRICTION
              </div>
            </div>

            {/* Block 2: Zigzag Card */}
            <div className="p-6 rounded-[20px] bg-[#a7f3d0] border-3 border-black shadow-[6px_6px_0px_#000] -rotate-1 hover:rotate-0 transition-transform">
              <div className="flex justify-between items-center text-xs font-black uppercase">
                <span>PATTERN CHAOS</span>
                <span>〰️</span>
              </div>
              <div className="text-4xl font-black text-black mt-3 font-space">
                420 UNITS
              </div>
              <div className="mt-3 text-xs font-bold text-emerald-950 bg-emerald-300 border-2 border-black inline-block px-2 py-0.5 rounded">
                ASYMMETRIC GEOMETRY
              </div>
            </div>

            {/* Block 3: Yellow Pop Card */}
            <div className="p-6 rounded-[25px] bg-[#fef08a] border-3 border-black shadow-[6px_6px_0px_#000] rotate-2 hover:rotate-0 transition-transform">
              <div className="flex justify-between items-center text-xs font-black uppercase">
                <span>POSTMODERN PULSE</span>
                <span>●</span>
              </div>
              <div className="text-4xl font-black text-black mt-3 font-space">
                1981 APEX
              </div>
              <div className="mt-3 text-xs font-bold text-yellow-950 bg-yellow-300 border-2 border-black inline-block px-2 py-0.5 rounded">
                ETTORE LEGACY
              </div>
            </div>
          </div>

          {/* Whimsical Action Bar */}
          <div className="mt-8 p-6 rounded-2xl bg-white border-3 border-black shadow-[6px_6px_0px_#000] relative z-10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <h4 className="text-base font-black uppercase text-black font-space">
                Reject Boring Rules. Embrace Wonder.
              </h4>
              <p className="text-xs text-slate-600 font-bold mt-1">
                Polkadots, squiggles, and joyful clashes liberate functional surfaces from cold corporate sterility.
              </p>
            </div>
            <button className="px-6 py-3 rounded-full bg-[#f43f5e] hover:bg-pink-600 text-white font-black text-xs uppercase tracking-wider border-3 border-black shadow-[4px_4px_0px_#000] active:translate-x-1 active:translate-y-1 active:shadow-none transition-all cursor-pointer">
              SPARK DELIGHT ★
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
