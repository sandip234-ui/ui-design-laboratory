import React, { useState } from 'react';
import { SectionHeader } from '../components/SectionHeader';
import { IconCpu, IconActivity, IconSparkles } from '../components/Icons';

export const HolographicUI = ({ styleData, prevStyle, nextStyle, onNavigate }) => {
  const [wavelength, setWavelength] = useState(520);
  const [beamFocus, setBeamFocus] = useState('Prismatic Field');
  const [projectionActive, setProjectionActive] = useState(true);

  const lenses = ['Prismatic Field', 'Spectral Diffraction', 'Quantum Coherence', 'Polarized Ring'];

  return (
    <section id="holographic-ui" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#050711] text-cyan-100 relative overflow-hidden font-hud">
      {/* Spectral Rainbow Mesh Glows */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-linear-to-tr from-[#ff71ce]/15 via-[#01cdfe]/20 to-[#05ffa1]/15 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-linear-to-tr from-[#b967ff]/20 via-[#ff71ce]/15 to-[#01cdfe]/20 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <SectionHeader
          styleData={styleData}
          prevStyle={prevStyle}
          nextStyle={nextStyle}
          onNavigate={onNavigate}
        />

        {/* Iridescent Holographic Projector Container */}
        <div className="mt-8 rounded-3xl p-6 sm:p-12 holo-foil border border-cyan-400/40 shadow-[0_0_50px_rgba(1,205,254,0.15)] relative backdrop-blur-2xl">
          {/* Internal Darkened Projection Mat */}
          <div className="rounded-2xl p-6 sm:p-8 bg-[#0a0e1c]/80 border border-white/20">
            {/* Header Bar */}
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pb-6 border-b border-cyan-400/20">
              <div className="flex items-center gap-3">
                <span className="p-3 rounded-2xl bg-cyan-500/20 border border-cyan-400/40 text-cyan-300 shadow-[0_0_15px_#01cdfe]">
                  💿
                </span>
                <div>
                  <div className="text-xs uppercase tracking-[0.25em] text-cyan-400 font-bold">
                    QUANTUM OPTICS // SPECTRAL DISPERSION
                  </div>
                  <h3 className="text-2xl sm:text-4xl font-black text-transparent bg-clip-text bg-linear-to-r from-pink-400 via-cyan-300 to-emerald-300 tracking-wide">
                    Hologram Field Engine
                  </h3>
                </div>
              </div>

              {/* Lens Mode Pills */}
              <div className="flex flex-wrap gap-2 text-xs font-mono">
                {lenses.map((lens) => (
                  <button
                    key={lens}
                    onClick={() => setBeamFocus(lens)}
                    className={`px-3 py-1.5 rounded-lg border transition cursor-pointer ${
                      beamFocus === lens
                        ? 'border-cyan-300 bg-cyan-400/20 text-white shadow-[0_0_15px_rgba(1,205,254,0.4)]'
                        : 'border-white/10 bg-black/40 text-slate-400 hover:text-white'
                    }`}
                  >
                    {lens}
                  </button>
                ))}
              </div>
            </div>

            {/* Central Holographic Projection Stage & Diagnostics */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-8 items-center">
              {/* Left Floating Holographic Ring (Span 5) */}
              <div className="lg:col-span-5 p-8 rounded-2xl bg-black/50 border border-cyan-400/30 flex flex-col items-center justify-center text-center relative overflow-hidden">
                {/* 3D Circular HUD Ring */}
                <div className="w-48 h-48 rounded-full border-2 border-dashed border-cyan-400/40 flex items-center justify-center animate-spin [animation-duration:20s] relative">
                  <div className="w-36 h-36 rounded-full border border-pink-400/50 flex items-center justify-center animate-spin [animation-duration:12s] [animation-direction:reverse]">
                    <div className="w-24 h-24 rounded-full bg-linear-to-tr from-pink-500/20 via-cyan-400/30 to-emerald-400/20 blur-sm flex items-center justify-center shadow-[0_0_25px_#01cdfe]">
                      <span className="text-3xl animate-pulse">💠</span>
                    </div>
                  </div>
                </div>

                <div className="mt-6 text-sm font-bold text-white tracking-wider">
                  SPECTRAL INTERFERENCE: ACTIVE
                </div>
                <div className="text-xs text-cyan-300 font-mono mt-1">
                  Beam Coherence Angle: 42.8° • Refractive Index: 1.49
                </div>
              </div>

              {/* Right Telemetry Cards (Span 7) */}
              <div className="lg:col-span-7 space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-5 rounded-2xl bg-white/3 border border-cyan-400/25">
                    <div className="text-xs text-cyan-400 uppercase tracking-widest font-mono">
                      OPTICAL WAVELENGTH
                    </div>
                    <div className="text-3xl font-black text-white mt-2">
                      {wavelength} nm
                    </div>
                    <div className="text-xs text-slate-400 mt-1 font-mono">
                      Emerald-Cyan Spectral Band
                    </div>
                  </div>

                  <div className="p-5 rounded-2xl bg-white/3 border border-pink-400/25">
                    <div className="text-xs text-pink-400 uppercase tracking-widest font-mono">
                      DIFFRACTION EFFICIENCY
                    </div>
                    <div className="text-3xl font-black text-white mt-2">
                      94.8%
                    </div>
                    <div className="text-xs text-slate-400 mt-1 font-mono">
                      Zero Chromatic Distortion
                    </div>
                  </div>
                </div>

                {/* Tunable Spectral Wavelength Slider */}
                <div className="p-5 rounded-2xl bg-black/40 border border-white/10">
                  <div className="flex items-center justify-between text-xs font-mono text-cyan-300 mb-2">
                    <span>LASER TUNING SPECTRUM (400nm - 700nm)</span>
                    <span className="font-bold text-white">{wavelength} nm</span>
                  </div>
                  <input
                    type="range"
                    min="400"
                    max="700"
                    value={wavelength}
                    onChange={(e) => setWavelength(parseInt(e.target.value))}
                    className="w-full accent-cyan-400 cursor-pointer"
                  />
                  <div className="flex justify-between text-[10px] font-mono text-slate-500 mt-2">
                    <span className="text-purple-400">400nm (Violet)</span>
                    <span className="text-cyan-400">520nm (Cyan)</span>
                    <span className="text-yellow-400">580nm (Yellow)</span>
                    <span className="text-red-400">700nm (Red)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
