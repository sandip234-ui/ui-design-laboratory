import React, { useState } from 'react';
import { SectionHeader } from '../components/SectionHeader';

export const FuturisticHUD = ({ styleData, prevStyle, nextStyle, onNavigate }) => {
  const [targetLock, setTargetLock] = useState(true);

  return (
    <section id="futuristic-hud" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#020912] text-cyan-400 font-hud">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          styleData={styleData}
          prevStyle={prevStyle}
          nextStyle={nextStyle}
          onNavigate={onNavigate}
        />

        {/* Starship Tactical Flight Telemetry HUD Shell */}
        <div className="rounded-2xl p-6 sm:p-8 bg-[#041220]/80 border border-cyan-500/40 shadow-[0_0_50px_rgba(6,182,212,0.2)] relative overflow-hidden backdrop-blur-md">
          {/* Top Avionics Crosshairs & Status */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-cyan-500/20">
            <div className="flex items-center gap-3">
              <span className="w-3 h-3 border-2 border-cyan-400 rounded-full animate-ping" />
              <div>
                <h3 className="text-xl sm:text-2xl font-bold tracking-widest text-white uppercase">
                  ORBITAL TACTICAL AVIONICS // HUD-99
                </h3>
                <p className="text-xs text-cyan-300 font-mono">STELLAR VELOCITY: 0.14c // TRAJECTORY NOMINAL</p>
              </div>
            </div>

            {/* Target Acquisition Mode Toggle */}
            <button
              onClick={() => setTargetLock(!targetLock)}
              className={`px-4 py-2 text-xs font-bold uppercase tracking-wider border rounded-lg transition active:scale-95 cursor-pointer font-mono ${
                targetLock
                  ? 'bg-cyan-500/20 border-cyan-400 text-white shadow-[0_0_15px_#22d3ee]'
                  : 'bg-black/50 border-slate-700 text-slate-400'
              }`}
            >
              {targetLock ? 'TARGET ACQUIRED [LOCK ON]' : 'TARGET SCANNING...'}
            </button>
          </div>

          {/* Central Avionics Grid: Radar Sweep + Flight Data Telemetry */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mt-8">
            {/* Animated Rotating Radar Sweep Reticle */}
            <div className="lg:col-span-4 p-6 rounded-2xl bg-black/60 border border-cyan-500/30 flex flex-col items-center justify-center relative min-h-70">
              <div className="w-52 h-52 rounded-full border-2 border-cyan-500/40 relative flex items-center justify-center">
                {/* Inner Concentric Rings */}
                <div className="w-36 h-36 rounded-full border border-cyan-500/30" />
                <div className="w-20 h-20 rounded-full border border-cyan-500/20" />
                {/* Crosshairs */}
                <div className="absolute w-full h-px bg-cyan-500/30" />
                <div className="absolute h-full w-px bg-cyan-500/30" />
                {/* Rotating Radar Sweep Cone */}
                <div
                  className="absolute inset-0 rounded-full animate-radar origin-center pointer-events-none"
                  style={{
                    background: 'conic-gradient(from 0deg, rgba(6,182,212,0.4) 0deg, transparent 60deg, transparent 360deg)'
                  }}
                />
                {/* Target Blip */}
                {targetLock && (
                  <div className="absolute top-12 right-14 w-2 h-2 rounded-full bg-red-500 shadow-[0_0_8px_#ef4444] animate-ping" />
                )}
              </div>
              <span className="text-[11px] font-mono text-cyan-300 mt-4 tracking-widest">
                360° SENSOR SWEEP ACTIVE
              </span>
            </div>

            {/* Flight Metrics & Telemetry Readouts */}
            <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-black/40 border border-cyan-500/20">
                <span className="text-xs font-mono text-cyan-400">PITCH / YAW / ROLL</span>
                <div className="text-2xl font-bold text-white mt-1 font-mono">
                  +12.4° / -04.1° / 0.0°
                </div>
                <div className="text-[11px] text-slate-400 mt-1">Gyroscopic stabilization locked</div>
              </div>

              <div className="p-4 rounded-xl bg-black/40 border border-cyan-500/20">
                <span className="text-xs font-mono text-cyan-400">VECTOR DISPLACEMENT</span>
                <div className="text-2xl font-bold text-white mt-1 font-mono">
                  X: 492.1 | Y: 840.9 | Z: 104.2
                </div>
                <div className="text-[11px] text-slate-400 mt-1">Geocentric coordinate reference</div>
              </div>

              <div className="p-4 rounded-xl bg-black/40 border border-cyan-500/20">
                <span className="text-xs font-mono text-cyan-400">PROPULSION CORE TEMP</span>
                <div className="text-2xl font-bold text-white mt-1 font-mono">
                  4,210 K <span className="text-xs text-emerald-400">NOMINAL</span>
                </div>
                <div className="w-full bg-slate-900 h-2 mt-2 rounded">
                  <div className="bg-cyan-400 h-full w-[65%]" />
                </div>
              </div>

              <div className="p-4 rounded-xl bg-black/40 border border-cyan-500/20">
                <span className="text-xs font-mono text-cyan-400">DEFLECTOR SHIELD SHOCK</span>
                <div className="text-2xl font-bold text-white mt-1 font-mono">
                  98.4% INTEGRITY
                </div>
                <div className="w-full bg-slate-900 h-2 mt-2 rounded">
                  <div className="bg-emerald-400 h-full w-[98.4%]" />
                </div>
              </div>

              {/* Data Density Telemetry Strip */}
              <div className="sm:col-span-2 p-3 rounded-lg bg-cyan-950/20 border border-cyan-500/30 text-xs font-mono text-cyan-300 flex justify-between">
                <span>WARP COIL CHARGE: 100%</span>
                <span>COMMS: ENCRYPTED SUB-ETHER LINK</span>
                <span>IFF: FRIENDLY</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
