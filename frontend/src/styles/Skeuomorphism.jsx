import React, { useState } from 'react';
import { SectionHeader } from '../components/SectionHeader';
import { IconFlame, IconCheck } from '../components/Icons';

export const Skeuomorphism = ({ styleData, prevStyle, nextStyle, onNavigate }) => {
  const [switchPower, setSwitchPower] = useState(true);
  const [knobRotation, setKnobRotation] = useState(45);
  const [tapeMemo, setTapeMemo] = useState('Inspect valve seals before 18:00');

  return (
    <section id="skeuomorphism" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#181a1d] text-slate-200">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          styleData={styleData}
          prevStyle={prevStyle}
          nextStyle={nextStyle}
          onNavigate={onNavigate}
        />

        {/* Physical Console Rack Chassis */}
        <div className="rounded-2xl p-6 sm:p-8 bg-[#25282d] border-t-2 border-t-slate-500/50 border-b-4 border-b-black shadow-[0_20px_50px_rgba(0,0,0,0.9),inset_0_1px_1px_rgba(255,255,255,0.4)] max-w-5xl mx-auto relative overflow-hidden">
          {/* Top Stitched Leather Banner Strip */}
          <div className="relative mb-6 p-3 rounded-lg bg-[#3a2016] border-y-2 border-dashed border-[#b87333]/50 shadow-inner flex items-center justify-between">
            <span className="text-xs uppercase font-serif font-bold tracking-widest text-[#dfa070] drop-shadow-[0_1px_1px_rgba(0,0,0,0.8)]">
              ★ HEAVY DYNAMICS SOUND LAB // SERIES 1978 ★
            </span>
            <span className="text-[10px] font-mono text-[#caa27e] tracking-wider">
              CHASSIS SPEC: SN-904-B
            </span>
          </div>

          {/* Main Brushed Metal Faceplate */}
          <div className="p-6 rounded-xl bg-linear-to-b from-[#484e57] via-[#3a3f47] to-[#2c3138] border border-slate-600 shadow-[inset_0_2px_4px_rgba(255,255,255,0.3),0_8px_16px_rgba(0,0,0,0.6)]">
            {/* Top Bar with Physical Screws and LED Lights */}
            <div className="flex items-center justify-between pb-6 border-b border-black/40">
              <div className="flex items-center gap-3">
                {/* Physical Screw Head */}
                <div className="w-5 h-5 rounded-full bg-linear-to-tr from-slate-600 via-slate-400 to-slate-200 border border-slate-700 shadow-sm flex items-center justify-center">
                  <div className="w-3 h-0.5 bg-slate-800 rotate-45" />
                </div>
                <h3 className="text-lg font-bold text-slate-100 uppercase tracking-widest drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]">
                  Analog Audio & Telemetry Station
                </h3>
              </div>

              {/* Physical Bulb Indicator */}
              <div className="flex items-center gap-3">
                <span className="text-[11px] font-mono text-slate-300 font-bold uppercase">Mains Feed</span>
                <div className={`w-5 h-5 rounded-full border-2 border-slate-700 transition-all ${
                  switchPower 
                    ? 'bg-red-500 shadow-[0_0_12px_#ef4444,inset_0_1px_2px_#ff9999]' 
                    : 'bg-red-950 shadow-inner'
                }`} />
              </div>
            </div>

            {/* Middle Section: Analog Meter + Physical Rotary Knobs + Sticky Note */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
              {/* Skeuomorphic Analog VU Gauge */}
              <div className="p-5 rounded-xl bg-[#e3d7bf] border-4 border-[#333] shadow-[inset_0_4px_12px_rgba(0,0,0,0.6),0_4px_8px_rgba(0,0,0,0.4)] relative">
                <div className="flex justify-between items-center text-[10px] font-mono text-[#5c4a32] font-black uppercase tracking-wider mb-2">
                  <span>-20 dB</span>
                  <span>VU METER</span>
                  <span className="text-red-700">+3 dB</span>
                </div>

                {/* Meter Dial Arc */}
                <div className="h-28 relative flex items-end justify-center overflow-hidden">
                  {/* Gauge Background Scale */}
                  <svg className="w-full h-full" viewBox="0 0 200 100">
                    <path d="M 20 90 A 80 80 0 0 1 180 90" fill="none" stroke="#6b583e" strokeWidth="3" />
                    <line x1="40" y1="70" x2="50" y2="76" stroke="#4a3e2e" strokeWidth="2" />
                    <line x1="100" y1="45" x2="100" y2="55" stroke="#4a3e2e" strokeWidth="2" />
                    <line x1="160" y1="70" x2="150" y2="76" stroke="#b91c1c" strokeWidth="3" />
                    {/* Pivot point */}
                    <circle cx="100" cy="95" r="8" fill="#2d2d2d" stroke="#555" strokeWidth="2" />
                    {/* Analog Needle that rotates with knob state */}
                    <line
                      x1="100"
                      y1="95"
                      x2={100 + 70 * Math.cos(((knobRotation - 90) * Math.PI) / 180)}
                      y2={95 + 70 * Math.sin(((knobRotation - 90) * Math.PI) / 180)}
                      stroke="#b91c1c"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      className="transition-all duration-300"
                    />
                  </svg>
                </div>

                <div className="text-center font-mono font-bold text-xs text-[#3b2f1f] mt-1">
                  PEAK SIGNAL: {((knobRotation / 180) * 100).toFixed(0)}% LOAD
                </div>
              </div>

              {/* Physical Rotary Knobs & Push Toggle */}
              <div className="p-5 rounded-xl bg-linear-to-b from-[#32363d] to-[#25282e] border border-slate-700 shadow-[inset_0_2px_4px_rgba(0,0,0,0.5)] flex flex-col justify-between items-center text-center">
                <span className="text-xs font-mono font-bold text-slate-300 uppercase tracking-wider">
                  Harmonic Output Attenuator
                </span>

                {/* Knurled Aluminum Knob */}
                <div className="my-4 relative">
                  <div
                    onClick={() => setKnobRotation(r => (r >= 160 ? 20 : r + 35))}
                    className="w-24 h-24 rounded-full bg-linear-to-tr from-slate-400 via-slate-200 to-slate-500 border-4 border-slate-700 shadow-[0_8px_16px_rgba(0,0,0,0.7),inset_0_2px_4px_#ffffff] flex items-center justify-center cursor-pointer transition-transform duration-300 active:scale-95"
                    style={{ transform: `rotate(${knobRotation}deg)` }}
                    title="Click to turn knob"
                  >
                    <div className="w-2.5 h-7 bg-slate-900 rounded-full -translate-y-6 shadow-sm" />
                  </div>
                  <span className="text-[10px] font-mono text-slate-400 mt-2 block">
                    Click knob to adjust ({knobRotation}°)
                  </span>
                </div>

                {/* Metal Toggle Switch */}
                <div className="flex items-center gap-4">
                  <span className="text-[11px] font-mono text-slate-300">ENGAGE RELAY</span>
                  <button
                    onClick={() => setSwitchPower(!switchPower)}
                    className="w-14 h-7 rounded-md bg-linear-to-b from-[#1a1c20] to-[#2e333b] border-2 border-slate-600 shadow-inner flex items-center px-1 cursor-pointer"
                  >
                    <div className={`w-5 h-5 rounded-sm bg-linear-to-b from-slate-300 to-slate-500 shadow-md transition-transform ${
                      switchPower ? 'translate-x-6' : 'translate-x-0'
                    }`} />
                  </button>
                </div>
              </div>

              {/* Sticky Post-it Note with Tape */}
              <div className="p-5 rounded-md bg-[#fff785] text-slate-900 shadow-[0_10px_20px_rgba(0,0,0,0.4)] relative rotate-1 flex flex-col justify-between">
                {/* Translucent Scotch Tape */}
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-20 h-6 bg-white/40 border border-white/60 backdrop-blur-sm -rotate-2 shadow-sm" />

                <div>
                  <div className="text-xs font-serif font-bold text-amber-900 uppercase tracking-widest border-b border-amber-800/30 pb-1 mb-2">
                    Shift Engineer Memo
                  </div>
                  <textarea
                    value={tapeMemo}
                    onChange={(e) => setTapeMemo(e.target.value)}
                    className="w-full bg-transparent font-serif italic text-xs text-slate-900 resize-none outline-none leading-relaxed"
                    rows={4}
                  />
                </div>

                <div className="text-[10px] font-mono text-amber-900/80 pt-2 border-t border-amber-900/20 flex justify-between">
                  <span>Sign: W. Miller</span>
                  <span>14:32 HRS</span>
                </div>
              </div>
            </div>

            {/* Bottom LED Segment Display Strip */}
            <div className="mt-6 p-4 rounded-lg bg-[#111317] border-2 border-slate-700 shadow-inner flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <span className="text-[10px] font-mono uppercase text-slate-400">Digital Telemetry readout:</span>
                <span className="font-mono text-xl font-black text-amber-400 tracking-widest bg-black px-3 py-1 rounded border border-amber-900/60 shadow-[0_0_10px_rgba(251,191,36,0.3)]">
                  84.920 kHz
                </span>
              </div>
              <div className="flex items-center gap-2">
                <button className="px-4 py-2 rounded-md bg-linear-to-b from-slate-300 via-slate-100 to-slate-400 text-slate-900 text-xs font-black uppercase tracking-wider border border-slate-500 shadow-[0_3px_6px_rgba(0,0,0,0.4)] active:translate-y-0.5 active:shadow-inner cursor-pointer">
                  CALIBRATE
                </button>
                <button className="px-4 py-2 rounded-md bg-linear-to-b from-red-600 to-red-800 text-white text-xs font-black uppercase tracking-wider border border-red-950 shadow-[0_3px_6px_rgba(0,0,0,0.5)] active:translate-y-0.5 cursor-pointer">
                  PURGE
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
