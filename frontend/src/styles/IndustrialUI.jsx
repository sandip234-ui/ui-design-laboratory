import React, { useState } from 'react';
import { SectionHeader } from '../components/SectionHeader';

export const IndustrialUI = ({ styleData, prevStyle, nextStyle, onNavigate }) => {
  const [safetyLock, setSafetyLock] = useState(false);
  const [pressure, setPressure] = useState(482);
  const [temp, setTemp] = useState(84.2);

  return (
    <section id="industrial-ui" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#18191c] text-slate-100 font-mono">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          styleData={styleData}
          prevStyle={prevStyle}
          nextStyle={nextStyle}
          onNavigate={onNavigate}
        />

        {/* Industrial Control Rack with Hazard Accents */}
        <div className="rounded-xl border-4 border-[#30333a] bg-[#22252a] p-4 sm:p-8 shadow-[0_20px_50px_rgba(0,0,0,0.8)] relative overflow-hidden">
          {/* Top Yellow & Black Caution Hazard Stripe */}
          <div className="h-4 w-full hazard-stripes mb-6 rounded border border-black" />

          {/* Panel Header */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b-2 border-[#383c44]">
            <div className="flex items-center gap-3">
              <div className="w-4 h-4 rounded-full bg-emerald-500 shadow-[0_0_10px_#10b981] animate-pulse" />
              <div>
                <h3 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-white">
                  SCADA TURBINE CONTROL // UNIT-04
                </h3>
                <p className="text-xs text-orange-400 font-bold">SAFETY COMPLIANCE: ISO 13849-1 PL-e VERIFIED</p>
              </div>
            </div>

            {/* Industrial Tag Stamp */}
            <div className="border-2 border-orange-500/60 bg-black/60 px-3 py-1 text-xs text-orange-400 font-bold uppercase">
              PLANT SECTOR: 7-NORTH
            </div>
          </div>

          {/* Mechanical Measurement Gauges */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
            {/* Pressure Gauge */}
            <div className="p-5 rounded-lg bg-[#1a1c20] border-2 border-[#33373f] shadow-inner">
              <div className="flex justify-between items-center text-xs font-bold text-slate-400 uppercase">
                <span>HYDRAULIC PRESSURE</span>
                <span className="text-emerald-400">NORMAL</span>
              </div>
              <div className="text-4xl font-black text-white mt-2">
                {pressure} <span className="text-sm text-slate-400 font-normal">PSI</span>
              </div>
              <div className="w-full bg-[#111] h-3 mt-3 border border-slate-700">
                <div
                  className="bg-emerald-500 h-full transition-all duration-300"
                  style={{ width: `${(pressure / 600) * 100}%` }}
                />
              </div>
              <div className="flex justify-between text-[10px] text-slate-500 mt-1">
                <span>0 PSI</span>
                <span>MAX 600 PSI</span>
              </div>
            </div>

            {/* Temperature Gauge */}
            <div className="p-5 rounded-lg bg-[#1a1c20] border-2 border-[#33373f] shadow-inner">
              <div className="flex justify-between items-center text-xs font-bold text-slate-400 uppercase">
                <span>COOLANT TEMPERATURE</span>
                <span className="text-amber-400">MONITORED</span>
              </div>
              <div className="text-4xl font-black text-white mt-2">
                {temp} <span className="text-sm text-slate-400 font-normal">°C</span>
              </div>
              <div className="w-full bg-[#111] h-3 mt-3 border border-slate-700">
                <div
                  className="bg-amber-500 h-full transition-all duration-300"
                  style={{ width: `${(temp / 120) * 100}%` }}
                />
              </div>
              <div className="flex justify-between text-[10px] text-slate-500 mt-1">
                <span>0°C</span>
                <span>WARN 105°C</span>
              </div>
            </div>

            {/* Generator RPM */}
            <div className="p-5 rounded-lg bg-[#1a1c20] border-2 border-[#33373f] shadow-inner">
              <div className="flex justify-between items-center text-xs font-bold text-slate-400 uppercase">
                <span>CORE SHAFT SPEED</span>
                <span className="text-emerald-400">STABLE</span>
              </div>
              <div className="text-4xl font-black text-white mt-2">
                3,600 <span className="text-sm text-slate-400 font-normal">RPM</span>
              </div>
              <div className="text-xs text-slate-400 mt-3 flex justify-between">
                <span>Phase Lock: 60.0 Hz</span>
                <span className="text-emerald-400 font-bold">GRID SYNC</span>
              </div>
            </div>
          </div>

          {/* Heavy Machine Controls & Safety Interlock */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            <div className="p-5 rounded-lg bg-[#1c1f24] border-2 border-[#33373f]">
              <span className="text-xs font-bold uppercase text-orange-400 block mb-3">
                MANUAL OPERATOR ACTUATORS
              </span>
              <div className="flex flex-wrap gap-3">
                <button
                  onClick={() => setPressure(p => Math.min(580, p + 20))}
                  className="px-4 py-2.5 bg-[#2d323a] hover:bg-[#383d47] border border-slate-600 text-xs font-bold uppercase transition active:translate-y-0.5 cursor-pointer"
                >
                  PRESSURE BOOST (+20 PSI)
                </button>
                <button
                  onClick={() => setPressure(p => Math.max(300, p - 20))}
                  className="px-4 py-2.5 bg-[#2d323a] hover:bg-[#383d47] border border-slate-600 text-xs font-bold uppercase transition active:translate-y-0.5 cursor-pointer"
                >
                  RELIEF VALVE (-20 PSI)
                </button>
              </div>
            </div>

            {/* Emergency Interlock Toggle */}
            <div className="p-5 rounded-lg bg-[#1c1f24] border-2 border-red-900/60 flex items-center justify-between">
              <div>
                <span className="text-xs font-bold uppercase text-red-400 block">
                  SAFETY EMERGENCY LOCKOUT
                </span>
                <p className="text-[11px] text-slate-400 mt-1">Interlock halts high-pressure turbine feed</p>
              </div>
              <button
                onClick={() => setSafetyLock(!safetyLock)}
                className={`px-5 py-3 rounded border-2 font-black text-xs uppercase tracking-wider transition active:scale-95 cursor-pointer ${
                  safetyLock
                    ? 'bg-red-600 border-red-400 text-white shadow-[0_0_15px_#dc2626]'
                    : 'bg-black border-slate-700 text-slate-400 hover:text-white'
                }`}
              >
                {safetyLock ? 'LOCKOUT ENGAGED' : 'ARM SYSTEM'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
