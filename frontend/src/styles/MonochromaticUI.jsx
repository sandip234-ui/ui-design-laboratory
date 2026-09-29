import React, { useState } from 'react';
import { SectionHeader } from '../components/SectionHeader';
import { IconActivity, IconShield, IconCpu } from '../components/Icons';

export const MonochromaticUI = ({ styleData, prevStyle, nextStyle, onNavigate }) => {
  const [tonalLevel, setTonalLevel] = useState('Balanced');
  const [luminanceRatio, setLuminanceRatio] = useState(74);

  const tonalSteps = [
    { step: 'Tone 01', hex: '#030712', use: 'Deepest Void Background' },
    { step: 'Tone 02', hex: '#0b1329', use: 'Card Container Surface' },
    { step: 'Tone 03', hex: '#1e3a8a', use: 'Border & Hairlines' },
    { step: 'Tone 04', hex: '#2563eb', use: 'Primary Interactive Hue' },
    { step: 'Tone 05', hex: '#60a5fa', use: 'Secondary Telemetry Text' },
    { step: 'Tone 06', hex: '#dbeafe', use: 'Luminance Peak Headline' },
  ];

  return (
    <section id="monochromatic-ui" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#030712] text-[#dbeafe] relative overflow-hidden font-sans-clean">
      {/* Strict Ultramarine Single-Hue Ambient Veil */}
      <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-[#1d4ed8]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <SectionHeader
          styleData={styleData}
          prevStyle={prevStyle}
          nextStyle={nextStyle}
          onNavigate={onNavigate}
        />

        {/* Monochromatic Ultramarine Container */}
        <div className="mt-8 rounded-2xl p-6 sm:p-12 bg-[#091124] border border-[#1e3a8a] shadow-[0_12px_40px_rgba(2,6,23,0.8)] relative">
          {/* Header Bar */}
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pb-8 border-b border-[#1e3a8a]">
            <div>
              <div className="text-xs uppercase tracking-[0.25em] text-[#60a5fa] font-mono font-bold">
                STRICT SINGLE-HUE ARCHITECTURE // HUE: 220° ULTRAMARINE
              </div>
              <h3 className="text-3xl sm:text-4xl font-black text-white tracking-tight mt-1">
                Monochrome Telemetry Node
              </h3>
            </div>

            {/* Tonal Contrast Mode */}
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono text-[#60a5fa]">CONTRAST:</span>
              {['Subtle', 'Balanced', 'High-Luminance'].map((mode) => (
                <button
                  key={mode}
                  onClick={() => setTonalLevel(mode)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-mono transition cursor-pointer border ${
                    tonalLevel === mode
                      ? 'border-[#60a5fa] bg-[#1d4ed8] text-white shadow-sm'
                      : 'border-[#1e3a8a] bg-[#0b1736] text-[#93c5fd] hover:bg-[#13234d]'
                  }`}
                >
                  {mode}
                </button>
              ))}
            </div>
          </div>

          {/* 3 Single-Color Metric Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <div className="p-6 rounded-xl bg-[#0b1736] border border-[#1e3a8a] flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between text-xs text-[#93c5fd] font-mono">
                  <span>SPECTRAL HUE VARIATION</span>
                  <IconCpu className="w-4 h-4 text-[#60a5fa]" />
                </div>
                <div className="text-4xl font-extrabold text-white mt-2">
                  0.0° Δ
                </div>
                <p className="text-xs text-[#93c5fd]/80 mt-2">
                  Zero foreign chromatic contamination across all UI layers and surfaces.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-[#1e3a8a] flex justify-between text-xs font-mono text-[#60a5fa]">
                <span>PURITY INDEX</span>
                <span>100% UNIFORM</span>
              </div>
            </div>

            <div className="p-6 rounded-xl bg-[#0b1736] border border-[#1e3a8a] flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between text-xs text-[#93c5fd] font-mono">
                  <span>LUMINANCE DYNAMIC RANGE</span>
                  <IconShield className="w-4 h-4 text-[#60a5fa]" />
                </div>
                <div className="text-4xl font-extrabold text-white mt-2">
                  {luminanceRatio}%
                </div>
                <p className="text-xs text-[#93c5fd]/80 mt-2">
                  Precise Weber-Fechner optical contrast ratio for eye comfort and focus.
                </p>
              </div>
              <div className="mt-4">
                <input
                  type="range"
                  min="40"
                  max="100"
                  value={luminanceRatio}
                  onChange={(e) => setLuminanceRatio(parseInt(e.target.value))}
                  className="w-full accent-[#2563eb] cursor-pointer"
                />
              </div>
            </div>

            <div className="p-6 rounded-xl bg-[#0b1736] border border-[#1e3a8a] flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between text-xs text-[#93c5fd] font-mono">
                  <span>COBALT BUS TRAFFIC</span>
                  <IconActivity className="w-4 h-4 text-[#60a5fa]" />
                </div>
                <div className="text-4xl font-extrabold text-white mt-2">
                  84.2 GB/s
                </div>
                <div className="flex gap-1 mt-3 h-5 items-end">
                  {[30, 45, 60, 40, 80, 95, 70, 85, 65, 90, 75, 88].map((v, i) => (
                    <div
                      key={i}
                      className="flex-1 bg-[#2563eb]"
                      style={{ height: `${v}%`, opacity: 0.3 + (v / 100) * 0.7 }}
                    />
                  ))}
                </div>
              </div>
              <div className="mt-4 pt-3 border-t border-[#1e3a8a] text-xs font-mono text-[#60a5fa] flex justify-between">
                <span>PEAK BANDWIDTH</span>
                <span>NOMINAL</span>
              </div>
            </div>
          </div>

          {/* Single-Hue Tonal Scale Palette Inspection */}
          <div className="mt-8 p-6 rounded-xl bg-[#060c1c] border border-[#1e3a8a]">
            <div className="text-xs font-mono uppercase tracking-widest text-[#60a5fa] font-bold mb-4">
              BLUE CHROMATIC TONAL STEPS // 6 ORTHOGONAL LEVELS
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
              {tonalSteps.map((step) => (
                <div key={step.step} className="p-3 rounded-lg border border-[#1e3a8a] bg-[#0b1736]">
                  <div
                    className="w-full h-10 rounded mb-2 border border-white/10"
                    style={{ backgroundColor: step.hex }}
                  />
                  <div className="text-xs font-mono font-bold text-white">{step.step}</div>
                  <div className="text-[10px] font-mono text-[#60a5fa]">{step.hex}</div>
                  <div className="text-[10px] text-[#93c5fd]/70 mt-1 leading-tight">{step.use}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
