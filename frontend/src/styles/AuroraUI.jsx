import React, { useState } from 'react';
import { SectionHeader } from '../components/SectionHeader';
import { IconSparkles, IconActivity } from '../components/Icons';

export const AuroraUI = ({ styleData, prevStyle, nextStyle, onNavigate }) => {
  const [station, setStation] = useState('TROMSO_NORWAY');

  return (
    <section id="aurora-ui" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#04060c] text-slate-100 relative overflow-hidden">
      {/* Massive Ethereal Aurora Blurred Light Waves */}
      <div className="absolute -top-32 left-1/4 w-125 h-100 bg-linear-to-r from-emerald-500/20 via-teal-500/25 to-cyan-500/20 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-150 h-100 bg-linear-to-r from-purple-600/25 via-fuchsia-500/20 to-indigo-600/20 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <SectionHeader
          styleData={styleData}
          prevStyle={prevStyle}
          nextStyle={nextStyle}
          onNavigate={onNavigate}
        />

        {/* Aurora Console Shell */}
        <div className="rounded-3xl p-6 sm:p-10 backdrop-blur-3xl bg-slate-950/40 border border-teal-400/20 shadow-[0_0_80px_rgba(20,184,166,0.15)] relative">
          {/* Header Bar */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-teal-500/15">
            <div>
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-teal-400 shadow-[0_0_15px_#2dd4bf] animate-pulse" />
                <h3 className="text-2xl font-bold tracking-tight text-white font-display">
                  Polar Atmospheric Observatory
                </h3>
              </div>
              <p className="text-xs text-teal-200/70 mt-1">High-latitude ionospheric glow & geomagnetic tracking</p>
            </div>

            {/* Observatory Selector */}
            <div className="flex items-center gap-2 p-1 rounded-xl bg-teal-950/40 border border-teal-500/30">
              <span className="text-[11px] font-mono text-teal-300 px-2">STATION:</span>
              <select
                value={station}
                onChange={(e) => setStation(e.target.value)}
                className="bg-transparent text-xs font-mono text-white outline-none cursor-pointer pr-2"
              >
                <option value="TROMSO_NORWAY" className="bg-[#0b1320]">Tromsø (69.6° N)</option>
                <option value="REYKJAVIK_ICELAND" className="bg-[#0b1320]">Reykjavík (64.1° N)</option>
                <option value="FAIRBANKS_ALASKA" className="bg-[#0b1320]">Fairbanks (64.8° N)</option>
              </select>
            </div>
          </div>

          {/* Glowing Atmospheric Metric Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <div className="p-6 rounded-2xl backdrop-blur-xl bg-linear-to-b from-teal-500/10 to-transparent border border-teal-400/25 shadow-[0_4px_24px_rgba(20,184,166,0.1)]">
              <span className="text-xs font-mono uppercase text-teal-300">Geomagnetic Kp Index</span>
              <div className="text-4xl font-extrabold text-transparent bg-clip-text bg-linear-to-r from-teal-200 via-emerald-100 to-white mt-2 font-display">
                Kp 6.8
              </div>
              <p className="text-xs text-teal-300/80 mt-2">Active G2 Geomagnetic Storm</p>
            </div>

            <div className="p-6 rounded-2xl backdrop-blur-xl bg-linear-to-b from-fuchsia-500/10 to-transparent border border-fuchsia-400/25 shadow-[0_4px_24px_rgba(217,70,239,0.1)]">
              <span className="text-xs font-mono uppercase text-fuchsia-300">Auroral Oval Extent</span>
              <div className="text-4xl font-extrabold text-transparent bg-clip-text bg-linear-to-r from-fuchsia-200 via-pink-100 to-white mt-2 font-display">
                62.4° N
              </div>
              <p className="text-xs text-fuchsia-300/80 mt-2">Visible to sub-polar latitudes</p>
            </div>

            <div className="p-6 rounded-2xl backdrop-blur-xl bg-linear-to-b from-cyan-500/10 to-transparent border border-cyan-400/25 shadow-[0_4px_24px_rgba(6,182,212,0.1)]">
              <span className="text-xs font-mono uppercase text-cyan-300">Solar Wind Velocity</span>
              <div className="text-4xl font-extrabold text-transparent bg-clip-text bg-linear-to-r from-cyan-200 via-sky-100 to-white mt-2 font-display">
                582 km/s
              </div>
              <p className="text-xs text-cyan-300/80 mt-2">Interplanetary magnetic density high</p>
            </div>
          </div>

          {/* Atmospheric Light Spectrum Wave Panel */}
          <div className="mt-8 p-6 rounded-2xl backdrop-blur-xl bg-white/2 border border-white/10">
            <div className="flex justify-between items-center mb-4">
              <span className="text-sm font-semibold text-white">Atmospheric Emission Spectrum (Oxygen / Nitrogen)</span>
              <span className="text-xs font-mono text-teal-300">557.7 nm (GREEN) & 630.0 nm (RED)</span>
            </div>

            <div className="h-32 rounded-xl bg-linear-to-r from-emerald-600/30 via-teal-500/40 to-fuchsia-600/30 border border-white/10 p-4 flex items-end justify-between relative overflow-hidden">
              <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent pointer-events-none" />
              <div className="relative z-10 w-full flex items-center justify-between text-xs font-mono text-slate-200">
                <span>Altitude: 100km (Green atomic O)</span>
                <span>Altitude: 250km (Red high-altitude O)</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
