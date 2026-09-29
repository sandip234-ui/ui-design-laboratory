import React, { useState } from 'react';
import { SectionHeader } from '../components/SectionHeader';
import { IconActivity, IconSparkles } from '../components/Icons';

export const Solarpunk = ({ styleData, prevStyle, nextStyle, onNavigate }) => {
  const [gridMode, setGridMode] = useState('100% Solar Islanding');
  const [solarYield, setSolarYield] = useState(18.4);
  const [aeroponicWatering, setAeroponicWatering] = useState(false);

  const triggerWateringCycle = () => {
    setAeroponicWatering(true);
    setTimeout(() => setAeroponicWatering(false), 2000);
  };

  return (
    <section id="solarpunk" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#06140c] text-emerald-100 relative overflow-hidden font-display">
      {/* Sunlit Golden & Emerald Radiant Glow */}
      <div className="absolute top-10 left-1/4 w-96 h-96 bg-amber-400/15 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-emerald-500/20 rounded-full blur-[140px] pointer-events-none" />

      {/* Decorative Curvilinear Vine flourishes */}
      <div className="absolute top-12 right-12 text-6xl opacity-15 select-none pointer-events-none">
        🌿 ☀️ 🍃
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <SectionHeader
          styleData={styleData}
          prevStyle={prevStyle}
          nextStyle={nextStyle}
          onNavigate={onNavigate}
        />

        {/* Solarpunk Regenerative Eco-Grid */}
        <div className="mt-8 rounded-[36px] p-6 sm:p-12 bg-[#0c2215]/80 border-2 border-emerald-500/40 backdrop-blur-xl shadow-[0_12px_50px_rgba(16,185,129,0.15)] relative">
          {/* Header Bar */}
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pb-8 border-b border-emerald-500/20">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-[0.25em] text-amber-400 font-bold">
                <span>☀️ REGENERATIVE INFRASTRUCTURE // MICROGRID 04</span>
              </div>
              <h3 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mt-1">
                Biophilic Solar Commons
              </h3>
            </div>

            {/* Grid Islanding Toggle */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => setGridMode(gridMode === '100% Solar Islanding' ? 'Grid-Tied Shared Loop' : '100% Solar Islanding')}
                className="px-4 py-2 rounded-full border border-emerald-400/50 bg-emerald-950/60 text-xs font-mono text-emerald-300 hover:bg-emerald-900/60 transition cursor-pointer flex items-center gap-2 shadow-sm"
              >
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>MODE: {gridMode}</span>
              </button>
            </div>
          </div>

          {/* 3 Eco-Telemetry Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            {/* Card 1: Photovoltaic Generation */}
            <div className="p-6 rounded-3xl bg-emerald-950/30 border border-emerald-500/30 relative">
              <div className="flex items-center justify-between text-xs text-amber-300 font-mono">
                <span>PHOTOVOLTAIC GENERATION</span>
                <span>☀️ PEAK NOON</span>
              </div>
              <div className="mt-3 flex items-baseline gap-2">
                <span className="text-4xl font-black text-white">{solarYield}</span>
                <span className="text-xs text-amber-300 font-mono">kWh DIRECT</span>
              </div>
              <p className="text-xs text-emerald-300/80 mt-2">
                Organic perovskite glass panels embedded into greenhouse canopies.
              </p>
              <div className="mt-4 pt-3 border-t border-emerald-500/20 flex justify-between text-xs font-mono text-emerald-400">
                <span>SURPLUS STORED</span>
                <span className="font-bold">+4.2 kWh</span>
              </div>
            </div>

            {/* Card 2: Algae Bioreactor Carbon Capture */}
            <div className="p-6 rounded-3xl bg-emerald-950/30 border border-emerald-500/30 relative">
              <div className="flex items-center justify-between text-xs text-emerald-300 font-mono">
                <span>ALGAE BIOREACTOR FLUID</span>
                <span>🧪 SPIRULINA</span>
              </div>
              <div className="mt-3 flex items-baseline gap-2">
                <span className="text-4xl font-black text-white">99.2%</span>
                <span className="text-xs text-emerald-300 font-mono">CARBON NEGATIVE</span>
              </div>
              <p className="text-xs text-emerald-300/80 mt-2">
                Vertical facade photobioreactors producing oxygen and biofuel biomass.
              </p>
              <div className="mt-4 pt-3 border-t border-emerald-500/20 flex justify-between text-xs font-mono text-emerald-400">
                <span>BIOMASS HARVEST</span>
                <span className="font-bold">14 kg READY</span>
              </div>
            </div>

            {/* Card 3: Community Aeroponics */}
            <div className="p-6 rounded-3xl bg-emerald-950/30 border border-emerald-500/30 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between text-xs text-cyan-300 font-mono">
                  <span>AEROPONIC ROOFTOP FARM</span>
                  <span>🌱 CROP CYCLE</span>
                </div>
                <div className="mt-3 flex items-baseline gap-2">
                  <span className="text-4xl font-black text-white">840</span>
                  <span className="text-xs text-cyan-300 font-mono">HEADS OF GREENS</span>
                </div>
                <p className="text-xs text-emerald-300/80 mt-2">
                  Mist-fed heirlooms with 95% less water consumption than conventional soil.
                </p>
              </div>

              <button
                onClick={triggerWateringCycle}
                disabled={aeroponicWatering}
                className="mt-4 py-2.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider transition cursor-pointer flex items-center justify-center gap-2"
              >
                <span>{aeroponicWatering ? 'MISTING NUTRIENTS...' : 'TRIGGER NUTRIENT MIST 💧'}</span>
              </button>
            </div>
          </div>

          {/* Solarpunk Vision Statement */}
          <div className="mt-8 p-6 rounded-3xl bg-black/40 border border-emerald-500/20 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <h4 className="text-base font-bold text-white">
                "Technology is not the master of nature, but its humble collaborator."
              </h4>
              <p className="text-xs text-emerald-300/70 mt-1 font-mono">
                Decentralized solar communes • Circular metabolism • Living architecture
              </p>
            </div>

            <div className="px-4 py-2 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 text-xs font-mono font-bold shrink-0">
              COMMUNITY NET ENERGY: +128%
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
