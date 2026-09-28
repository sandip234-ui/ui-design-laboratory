import React, { useState } from 'react';
import { SectionHeader } from '../components/SectionHeader';
import { IconSliders, IconActivity, IconCheck } from '../components/Icons';

export const Neumorphism = ({ styleData, prevStyle, nextStyle, onNavigate }) => {
  const [power, setPower] = useState(true);
  const [level, setLevel] = useState(68);
  const [activePreset, setActivePreset] = useState('Acoustic');
  const [switchState, setSwitchState] = useState(true);

  // Classic Neumorphic shadow tokens
  const neuRaised = {
    boxShadow: '8px 8px 16px #cbced1, -8px -8px 16px #ffffff'
  };
  const neuInset = {
    boxShadow: 'inset 5px 5px 10px #cbced1, inset -5px -5px 10px #ffffff'
  };
  const neuButton = {
    boxShadow: '6px 6px 12px #cbced1, -6px -6px 12px #ffffff'
  };

  return (
    <section id="neumorphism" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#e0e5ec] text-[#4d5b6e]">
      <div className="max-w-7xl mx-auto">
        <div className="text-[#3b4756]">
          <SectionHeader
            styleData={styleData}
            prevStyle={prevStyle}
            nextStyle={nextStyle}
            onNavigate={onNavigate}
          />
        </div>

        {/* Neumorphic Control Surface */}
        <div
          className="rounded-[36px] p-6 sm:p-10 bg-[#e0e5ec] max-w-5xl mx-auto transition-all"
          style={neuRaised}
        >
          {/* Top Panel Bar */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-8 border-b border-[#d1d9e6]">
            <div className="flex items-center gap-4">
              {/* Power Button */}
              <button
                onClick={() => setPower(!power)}
                className={`w-12 h-12 rounded-full flex items-center justify-center transition-all cursor-pointer ${
                  power ? 'text-indigo-600' : 'text-slate-400'
                }`}
                style={power ? neuInset : neuButton}
                title="Toggle Master Power"
              >
                <div className={`w-3.5 h-3.5 rounded-full ${power ? 'bg-indigo-500 shadow-[0_0_8px_#6366f1]' : 'bg-slate-400'}`} />
              </button>
              <div>
                <h3 className="text-xl font-bold text-[#334155] tracking-tight">
                  Acoustic Node // MK-IV
                </h3>
                <p className="text-xs text-[#738297]">Bespoke dual-shadow extruded hardware console</p>
              </div>
            </div>

            {/* Recessed Status Indicator */}
            <div className="flex items-center gap-3 px-4 py-2 rounded-2xl bg-[#e0e5ec]" style={neuInset}>
              <span className={`w-2.5 h-2.5 rounded-full ${power ? 'bg-emerald-500 shadow-[0_0_6px_#10b981]' : 'bg-slate-400'}`} />
              <span className="text-xs font-mono font-medium text-[#505e71]">
                {power ? 'SYSTEM: ACTIVE' : 'SYSTEM: STANDBY'}
              </span>
            </div>
          </div>

          {/* Metric Displays Row */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-8">
            <div className="p-6 rounded-2xl bg-[#e0e5ec]" style={neuRaised}>
              <span className="text-xs font-semibold uppercase tracking-wider text-[#738297]">Output Level</span>
              <div className="text-3xl font-bold text-[#334155] mt-2 font-mono">{level} dB</div>
              <div className="text-xs text-[#8492a6] mt-1">Nominal impedance 8Ω</div>
            </div>

            <div className="p-6 rounded-2xl bg-[#e0e5ec]" style={neuRaised}>
              <span className="text-xs font-semibold uppercase tracking-wider text-[#738297]">Harmonic THD</span>
              <div className="text-3xl font-bold text-[#334155] mt-2 font-mono">0.004%</div>
              <div className="text-xs text-[#8492a6] mt-1">Ultra-low distortion floor</div>
            </div>

            <div className="p-6 rounded-2xl bg-[#e0e5ec]" style={neuRaised}>
              <span className="text-xs font-semibold uppercase tracking-wider text-[#738297]">Thermal Load</span>
              <div className="text-3xl font-bold text-[#334155] mt-2 font-mono">38.4°C</div>
              <div className="text-xs text-[#8492a6] mt-1">Convection passive cooling</div>
            </div>
          </div>

          {/* Interactive Controls & Recessed Sliders */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
            {/* Recessed Slider & Presets */}
            <div className="p-6 rounded-2xl bg-[#e0e5ec]" style={neuRaised}>
              <div className="flex justify-between items-center mb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-[#505e71]">
                  Frequency Bias Gain ({level}%)
                </span>
                <span className="text-xs font-mono font-bold text-indigo-600">+{((level - 50) * 0.24).toFixed(1)} dB</span>
              </div>

              {/* Inset Slider Track */}
              <div className="relative py-4">
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={level}
                  onChange={(e) => setLevel(Number(e.target.value))}
                  className="w-full h-3 rounded-full appearance-none cursor-pointer outline-none bg-[#e0e5ec]"
                  style={neuInset}
                />
              </div>

              {/* Mode Buttons */}
              <div className="mt-4 pt-4 border-t border-[#d1d9e6]/60">
                <span className="text-xs font-semibold text-[#738297] block mb-3">Soundstage Presets</span>
                <div className="grid grid-cols-3 gap-3">
                  {['Acoustic', 'Direct', 'Spatial'].map((p) => (
                    <button
                      key={p}
                      onClick={() => setActivePreset(p)}
                      className={`py-2 px-3 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                        activePreset === p ? 'text-indigo-600' : 'text-[#627184]'
                      }`}
                      style={activePreset === p ? neuInset : neuButton}
                    >
                      {p}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Recessed Form Inputs & Tactile Switches */}
            <div className="p-6 rounded-2xl bg-[#e0e5ec] flex flex-col justify-between" style={neuRaised}>
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#505e71] block mb-3">
                  Calibration Matrix
                </span>
                
                {/* Recessed Text Input */}
                <div className="mb-4">
                  <label className="text-[11px] font-semibold text-[#738297] block mb-1.5">Stream Channel Label</label>
                  <input
                    type="text"
                    defaultValue="Studio Main Control A"
                    className="w-full px-4 py-2.5 rounded-xl text-xs font-mono text-[#334155] outline-none bg-[#e0e5ec]"
                    style={neuInset}
                  />
                </div>

                {/* Tactile Toggle Switch */}
                <div className="flex items-center justify-between p-3 rounded-xl bg-[#e0e5ec]" style={neuRaised}>
                  <div>
                    <div className="text-xs font-semibold text-[#334155]">Bypass Analog Equalizer</div>
                    <div className="text-[10px] text-[#8492a6]">Route direct to class-A pre-amp</div>
                  </div>
                  <button
                    onClick={() => setSwitchState(!switchState)}
                    className="w-12 h-6 rounded-full p-0.5 transition-all cursor-pointer bg-[#e0e5ec]"
                    style={switchState ? neuInset : neuButton}
                  >
                    <div
                      className={`w-5 h-5 rounded-full transition-transform ${
                        switchState ? 'translate-x-6 bg-indigo-500' : 'translate-x-0 bg-slate-400'
                      }`}
                      style={neuRaised}
                    />
                  </button>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-6 pt-4 border-t border-[#d1d9e6]/60 flex gap-4">
                <button
                  className="flex-1 py-2.5 rounded-xl text-xs font-bold text-[#505e71] active:translate-y-0.5 transition-all cursor-pointer"
                  style={neuButton}
                >
                  Reset Defaults
                </button>
                <button
                  className="flex-1 py-2.5 rounded-xl text-xs font-bold text-indigo-700 active:translate-y-0.5 transition-all cursor-pointer"
                  style={neuButton}
                >
                  Commit Preset
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
