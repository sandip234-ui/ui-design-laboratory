import React, { useState } from 'react';
import { SectionHeader } from '../components/SectionHeader';
import { IconSliders, IconActivity } from '../components/Icons';

export const LiquidUI = ({ styleData, prevStyle, nextStyle, onNavigate }) => {
  const [viscosity, setViscosity] = useState(1.42);
  const [fluidType, setFluidType] = useState('Bioluminescent Cyan');
  const [surfaceTension, setSurfaceTension] = useState(72.8);

  const fluids = [
    { name: 'Bioluminescent Cyan', density: '1.08 g/cm³', color: 'from-cyan-400 via-teal-500 to-blue-600' },
    { name: 'Liquid Mercury Metallic', density: '13.53 g/cm³', color: 'from-slate-200 via-slate-400 to-zinc-600' },
    { name: 'Molten Obsidian Nectar', density: '2.40 g/cm³', color: 'from-purple-500 via-indigo-600 to-rose-500' },
  ];

  const current = fluids.find((f) => f.name === fluidType) || fluids[0];

  return (
    <section id="liquid-ui" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#040e17] text-cyan-100 relative overflow-hidden font-display">
      {/* Morphing Liquid Ambient Pools */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-cyan-500/15 rounded-full blur-[130px] animate-liquid pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-teal-500/15 rounded-full blur-[140px] animate-liquid pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <SectionHeader
          styleData={styleData}
          prevStyle={prevStyle}
          nextStyle={nextStyle}
          onNavigate={onNavigate}
        />

        {/* Viscous Liquid Fluid Container */}
        <div className="mt-8 rounded-[40px] p-6 sm:p-12 bg-[#091b29]/80 border-2 border-cyan-400/30 backdrop-blur-2xl shadow-[0_12px_50px_rgba(6,182,212,0.15)] relative">
          {/* Header Bar */}
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pb-8 border-b border-cyan-400/20">
            <div>
              <div className="text-xs uppercase tracking-[0.25em] text-cyan-400 font-mono font-bold">
                HYDRODYNAMIC INTERACTION // CONTINUOUS VISCOSITY
              </div>
              <h3 className="text-3xl sm:text-4xl font-black text-white tracking-tight mt-1">
                Fluid Morphology Lab
              </h3>
            </div>

            {/* Fluid Type Tabs */}
            <div className="flex flex-wrap gap-2 text-xs font-mono">
              {fluids.map((fl) => (
                <button
                  key={fl.name}
                  onClick={() => setFluidType(fl.name)}
                  className={`px-3.5 py-1.5 rounded-full transition-all cursor-pointer border ${
                    fluidType === fl.name
                      ? 'border-cyan-300 bg-cyan-400/25 text-white shadow-[0_0_15px_rgba(6,182,212,0.3)]'
                      : 'border-white/10 bg-black/40 text-slate-400 hover:text-white'
                  }`}
                >
                  {fl.name}
                </button>
              ))}
            </div>
          </div>

          {/* Morphing Liquid Fluid Core */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-8 items-center">
            {/* Left Morphing Blob Canvas (Span 5) */}
            <div className="lg:col-span-5 flex flex-col items-center justify-center p-8 rounded-3xl bg-black/40 border border-cyan-400/25 text-center relative overflow-hidden min-h-72">
              {/* Morphing Fluid Blob Element */}
              <div
                className={`w-48 h-48 bg-linear-to-tr ${current.color} shadow-[0_0_40px_rgba(6,182,212,0.4)] animate-liquid flex items-center justify-center`}
              >
                <div className="w-28 h-28 rounded-full bg-white/20 backdrop-blur-md flex flex-col items-center justify-center text-white font-mono text-xs">
                  <span className="text-2xl">💧</span>
                  <span className="font-bold mt-1">{viscosity} cP</span>
                </div>
              </div>
              <div className="mt-6 text-xs font-mono text-cyan-300">
                ACTIVE FLUID: {fluidType}
              </div>
            </div>

            {/* Right Hydrodynamic Sliders (Span 7) */}
            <div className="lg:col-span-7 space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-5 rounded-2xl bg-cyan-950/20 border border-cyan-400/20">
                  <div className="text-xs text-cyan-400 uppercase tracking-widest font-mono">
                    DYNAMIC VISCOSITY
                  </div>
                  <div className="text-3xl font-black text-white mt-2">
                    {viscosity} cP
                  </div>
                  <div className="text-xs text-slate-400 mt-1 font-mono">
                    Centipoise Fluid Shear Rate
                  </div>
                </div>

                <div className="p-5 rounded-2xl bg-cyan-950/20 border border-cyan-400/20">
                  <div className="text-xs text-teal-400 uppercase tracking-widest font-mono">
                    SURFACE TENSION
                  </div>
                  <div className="text-3xl font-black text-white mt-2">
                    {surfaceTension} mN/m
                  </div>
                  <div className="text-xs text-slate-400 mt-1 font-mono">
                    Laplace Capillary Pressure
                  </div>
                </div>
              </div>

              {/* Viscosity Slider */}
              <div className="p-5 rounded-2xl bg-black/50 border border-white/10">
                <div className="flex items-center justify-between text-xs font-mono text-cyan-300 mb-2">
                  <span>FLUID VISCOSITY DILUTION</span>
                  <span className="font-bold text-white">{viscosity} cP</span>
                </div>
                <input
                  type="range"
                  min="0.5"
                  max="3.0"
                  step="0.05"
                  value={viscosity}
                  onChange={(e) => setViscosity(parseFloat(e.target.value))}
                  className="w-full accent-cyan-400 cursor-pointer"
                />
                <div className="flex justify-between text-[10px] font-mono text-slate-400 mt-2">
                  <span>0.5 cP (Aqueous Ether)</span>
                  <span>1.0 cP (Pure Water)</span>
                  <span>3.0 cP (Glycerin Honey)</span>
                </div>
              </div>

              {/* Wave Stream Telemetry */}
              <div className="p-4 rounded-xl bg-cyan-950/30 border border-cyan-400/20 flex items-center justify-between text-xs font-mono">
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
                  <span>LAMINAR STREAM: ZERO TURBULENCE</span>
                </span>
                <span className="text-cyan-300 font-bold">REYNOLDS: &lt; 2,300</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
