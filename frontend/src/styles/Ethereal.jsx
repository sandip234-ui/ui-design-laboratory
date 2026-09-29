import React, { useState, useEffect } from 'react';
import { SectionHeader } from '../components/SectionHeader';
import { IconSparkles } from '../components/Icons';

export const Ethereal = ({ styleData, prevStyle, nextStyle, onNavigate }) => {
  const [breathPhase, setBreathPhase] = useState('Inhale');
  const [ambientSound, setAmbientSound] = useState('432Hz Crystal Bowls');
  const [frequency, setFrequency] = useState(432);

  // Gentle breathing cycle simulation
  useEffect(() => {
    const phases = ['Inhale', 'Hold', 'Exhale', 'Rest'];
    let idx = 0;
    const interval = setInterval(() => {
      idx = (idx + 1) % phases.length;
      setBreathPhase(phases[idx]);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const soundscapes = ['432Hz Crystal Bowls', 'Celestial Rain', 'Solar Drone', 'Lunar Mist'];

  return (
    <section id="ethereal" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#090812] text-slate-100 relative overflow-hidden font-display">
      {/* Delicate Opalescent Ambient Luminescence */}
      <div className="absolute top-10 left-1/3 w-96 h-96 rounded-full bg-linear-to-tr from-purple-500/20 via-pink-400/15 to-cyan-300/20 blur-[130px] pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-96 h-96 rounded-full bg-linear-to-tr from-cyan-400/15 via-indigo-400/15 to-purple-400/15 blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <SectionHeader
          styleData={styleData}
          prevStyle={prevStyle}
          nextStyle={nextStyle}
          onNavigate={onNavigate}
        />

        {/* Ethereal Luminescent Sanctuary */}
        <div className="mt-8 rounded-3xl p-6 sm:p-12 backdrop-blur-2xl bg-white/3 border border-white/20 shadow-[0_8px_40px_rgba(255,255,255,0.04)] relative">
          {/* Header Bar */}
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-8 border-b border-white/10">
            <div>
              <div className="flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-purple-300/80 font-light">
                <IconSparkles className="w-3.5 h-3.5 text-pink-300" />
                <span>CELESTIAL RESONANCE // MINDFUL DRIFT</span>
              </div>
              <h3 className="text-3xl sm:text-4xl font-light text-white tracking-tight mt-1">
                Luminous Sanctuary of Light
              </h3>
            </div>

            {/* Soundscape Pills */}
            <div className="flex flex-wrap gap-2 text-xs">
              {soundscapes.map((s) => (
                <button
                  key={s}
                  onClick={() => setAmbientSound(s)}
                  className={`px-3.5 py-1.5 rounded-full transition-all cursor-pointer backdrop-blur-md ${
                    ambientSound === s
                      ? 'bg-white/20 text-white border border-white/40 shadow-[0_0_15px_rgba(255,255,255,0.2)]'
                      : 'bg-white/5 text-purple-200/70 border border-white/10 hover:bg-white/10'
                  }`}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>

          {/* Central Breath & Frequency Experience */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-10 items-center">
            {/* Left Breath Guidance Orb (Span 5) */}
            <div className="lg:col-span-5 flex flex-col items-center justify-center p-8 rounded-2xl bg-white/2 border border-white/10 text-center relative overflow-hidden">
              {/* Pulsing Light Ring */}
              <div className="w-44 h-44 rounded-full bg-linear-to-tr from-pink-400/20 via-purple-400/30 to-cyan-300/30 blur-md flex items-center justify-center animate-pulse-subtle">
                <div className="w-32 h-32 rounded-full border border-white/30 backdrop-blur-xl flex flex-col items-center justify-center shadow-[0_0_30px_rgba(255,255,255,0.2)]">
                  <span className="text-xs uppercase tracking-[0.25em] text-purple-200/80 font-mono">
                    BREATHE
                  </span>
                  <span className="text-xl font-light text-white mt-1">
                    {breathPhase}
                  </span>
                </div>
              </div>
              <p className="text-xs text-purple-200/70 mt-5 font-light tracking-wide">
                Harmonize biological rhythm with the 4-4-4-4 celestial box cycle.
              </p>
            </div>

            {/* Right Metrics & Acoustic Sliders (Span 7) */}
            <div className="lg:col-span-7 space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-5 rounded-2xl bg-white/3 border border-white/15 backdrop-blur-lg">
                  <div className="text-[11px] font-mono uppercase tracking-widest text-purple-300/70">
                    HEART COHERENCE
                  </div>
                  <div className="text-3xl font-light text-white mt-2">
                    98.4%
                  </div>
                  <div className="text-xs text-purple-200/60 mt-1">Deep parasympathetic equilibrium</div>
                </div>

                <div className="p-5 rounded-2xl bg-white/3 border border-white/15 backdrop-blur-lg">
                  <div className="text-[11px] font-mono uppercase tracking-widest text-cyan-300/70">
                    AURA LUMINANCE
                  </div>
                  <div className="text-3xl font-light text-white mt-2">
                    0.86 Lux
                  </div>
                  <div className="text-xs text-cyan-200/60 mt-1">Soft diffuse ambient emission</div>
                </div>
              </div>

              {/* Tuning Frequency Slider */}
              <div className="p-6 rounded-2xl bg-white/2 border border-white/10">
                <div className="flex items-center justify-between text-xs text-purple-200 mb-2">
                  <span className="tracking-widest uppercase">Fundamental Carrier Frequency</span>
                  <span className="font-mono text-cyan-300 font-bold">{frequency} Hz</span>
                </div>
                <input
                  type="range"
                  min="396"
                  max="528"
                  value={frequency}
                  onChange={(e) => setFrequency(parseInt(e.target.value))}
                  className="w-full accent-purple-300 cursor-pointer"
                />
                <div className="flex justify-between text-[10px] font-mono text-purple-300/50 mt-2">
                  <span>396 Hz (Root)</span>
                  <span>432 Hz (Miracle Tone)</span>
                  <span>528 Hz (Transformation)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
