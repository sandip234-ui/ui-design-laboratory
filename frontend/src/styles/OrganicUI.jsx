import React, { useState } from 'react';
import { SectionHeader } from '../components/SectionHeader';

export const OrganicUI = ({ styleData, prevStyle, nextStyle, onNavigate }) => {
  const [moisture, setMoisture] = useState(64);

  return (
    <section id="organic-ui" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#131b14] text-emerald-100">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          styleData={styleData}
          prevStyle={prevStyle}
          nextStyle={nextStyle}
          onNavigate={onNavigate}
        />

        {/* Biomorphic Organic Shell */}
        <div className="rounded-[40px_20px_45px_15px] p-6 sm:p-10 bg-[#1c291e] border border-emerald-500/30 shadow-[0_20px_60px_rgba(6,78,59,0.3)] relative overflow-hidden">
          {/* Header Bar */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-emerald-800/40">
            <div className="flex items-center gap-3">
              <span className="text-3xl">🌿</span>
              <div>
                <h3 className="text-2xl font-bold tracking-tight text-emerald-100 font-display">
                  Living Botanical Canopy
                </h3>
                <p className="text-xs text-emerald-300/70">Biomorphic telemetry & ecological microclimate balance</p>
              </div>
            </div>

            {/* Pebble Badge */}
            <div className="px-5 py-2 rounded-[25px_10px_20px_12px] bg-emerald-900/60 border border-emerald-400/30 text-xs font-semibold text-emerald-200">
              SYMBIOSIS: EQUILIBRIUM
            </div>
          </div>

          {/* Fluid Irregular Blob Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            {/* Pebble 1 */}
            <div className="p-6 rounded-[35px_15px_40px_20px] bg-[#243527] border border-emerald-500/20 hover:rounded-[20px_35px_15px_40px] transition-all duration-500">
              <div className="flex justify-between items-center text-xs font-medium text-emerald-300">
                <span>Soil Mycelium Moisture</span>
                <span>💧</span>
              </div>
              <div className="text-4xl font-extrabold text-emerald-50 mt-3 font-display">
                {moisture}%
              </div>
              <p className="text-xs text-emerald-300/80 mt-2">Optimal spore hydration cycle</p>
              <div className="mt-4 flex gap-2">
                <button
                  onClick={() => setMoisture(m => Math.min(100, m + 5))}
                  className="px-3 py-1 rounded-[15px_8px_14px_6px] bg-emerald-600/40 hover:bg-emerald-600 text-xs font-medium text-white transition cursor-pointer"
                >
                  Mist Canopy +5%
                </button>
              </div>
            </div>

            {/* Pebble 2 */}
            <div className="p-6 rounded-[20px_40px_25px_35px] bg-[#243527] border border-emerald-500/20 hover:rounded-[35px_20px_40px_15px] transition-all duration-500">
              <div className="flex justify-between items-center text-xs font-medium text-emerald-300">
                <span>Canopy Photosynthesis</span>
                <span>☀️</span>
              </div>
              <div className="text-4xl font-extrabold text-emerald-50 mt-3 font-display">
                92%
              </div>
              <p className="text-xs text-emerald-300/80 mt-2">Peak photon conversion rate</p>
              <div className="w-full h-3 rounded-[10px_4px_8px_5px] bg-emerald-950 mt-4 overflow-hidden">
                <div className="h-full bg-emerald-400 w-[92%]" />
              </div>
            </div>

            {/* Pebble 3 */}
            <div className="p-6 rounded-[30px_25px_40px_18px] bg-[#243527] border border-emerald-500/20 hover:rounded-[18px_40px_25px_30px] transition-all duration-500">
              <div className="flex justify-between items-center text-xs font-medium text-emerald-300">
                <span>Active Seedlings</span>
                <span>🌱</span>
              </div>
              <div className="text-4xl font-extrabold text-emerald-50 mt-3 font-display">
                1,420
              </div>
              <p className="text-xs text-emerald-300/80 mt-2">Native mycorrhizal shoots thriving</p>
              <span className="inline-block mt-3 text-xs px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-200">
                +140 germination rate
              </span>
            </div>
          </div>

          {/* Fluid Canopy Microclimate Stream */}
          <div className="mt-8 p-6 rounded-[25px_45px_15px_35px] bg-[#162217] border border-emerald-700/30">
            <h4 className="text-sm font-semibold text-emerald-100 mb-2">
              Forest Ecology Rhythms
            </h4>
            <p className="text-xs text-emerald-300/80 leading-relaxed max-w-2xl">
              Living systems reject harsh rectilinear grids. Nutrients diffuse through organic gradients, branch bifurcations, and curvilinear capillary action.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
