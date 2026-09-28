import React, { useState, useEffect } from 'react';
import { SectionHeader } from '../components/SectionHeader';
import { IconActivity, IconTrendingUp, IconRefresh } from '../components/Icons';

export const MotionUI = ({ styleData, prevStyle, nextStyle, onNavigate }) => {
  const [ticker, setTicker] = useState(1280);
  const [speedMultiplier, setSpeedMultiplier] = useState(1);
  const [isAnimating, setIsAnimating] = useState(true);

  useEffect(() => {
    if (!isAnimating) return;
    const interval = setInterval(() => {
      setTicker(prev => prev + Math.floor(Math.random() * 5 * speedMultiplier) + 1);
    }, 1000 / speedMultiplier);
    return () => clearInterval(interval);
  }, [speedMultiplier, isAnimating]);

  return (
    <section id="motion-ui" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#0b0c16] text-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          styleData={styleData}
          prevStyle={prevStyle}
          nextStyle={nextStyle}
          onNavigate={onNavigate}
        />

        {/* Motion Kinetic Shell */}
        <div className="rounded-3xl p-6 sm:p-10 bg-[#131525] border border-amber-500/20 shadow-[0_0_50px_rgba(245,158,11,0.15)] relative">
          {/* Header Bar */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-amber-500/10">
            <div>
              <div className="flex items-center gap-3">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-amber-500" />
                </span>
                <h3 className="text-2xl font-bold tracking-tight text-white font-display">
                  Kinetic Velocity Engine
                </h3>
              </div>
              <p className="text-xs text-amber-200/70 mt-1">Realtime physics animation & dynamic micro-interactions</p>
            </div>

            {/* Kinetic Controls: Speed Multiplier */}
            <div className="flex items-center gap-3 p-1.5 rounded-xl bg-black/40 border border-amber-500/30">
              <span className="text-[11px] font-mono text-amber-300 px-2">KINETIC CLOCK:</span>
              {[1, 2, 4].map((s) => (
                <button
                  key={s}
                  onClick={() => setSpeedMultiplier(s)}
                  className={`px-3 py-1 rounded-lg text-xs font-mono font-bold transition-all cursor-pointer ${
                    speedMultiplier === s
                      ? 'bg-amber-500 text-black shadow-lg scale-105'
                      : 'text-amber-200/70 hover:text-white'
                  }`}
                >
                  {s}X
                </button>
              ))}
              <button
                onClick={() => setIsAnimating(!isAnimating)}
                className="px-2 py-1 text-xs text-slate-400 hover:text-white"
                title="Pause ticker"
              >
                {isAnimating ? '⏸' : '▶'}
              </button>
            </div>
          </div>

          {/* Animated Kinetic Metric Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            {/* Card 1: Live Ticker */}
            <div className="p-6 rounded-2xl bg-amber-950/20 border border-amber-500/30 hover:-translate-y-2 transition-transform duration-300 relative group overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-amber-500/10 rounded-full blur-xl group-hover:bg-amber-500/20 transition-all" />
              <span className="text-xs font-mono text-amber-400 uppercase">Live Quantum Operations</span>
              <div className="text-4xl font-extrabold text-amber-100 mt-2 font-mono tracking-tight flex items-baseline gap-2">
                <span>{ticker.toLocaleString()}</span>
                <span className="text-xs text-amber-400 font-sans font-normal animate-pulse">ops/sec</span>
              </div>
              <p className="text-xs text-slate-400 mt-3">Continuously oscillating throughput</p>
            </div>

            {/* Card 2: Pulse Meter */}
            <div className="p-6 rounded-2xl bg-amber-950/20 border border-amber-500/30 hover:-translate-y-2 transition-transform duration-300 relative group overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-orange-500/10 rounded-full blur-xl group-hover:bg-orange-500/20 transition-all" />
              <span className="text-xs font-mono text-orange-400 uppercase">Kinetic Momentum Factor</span>
              <div className="text-4xl font-extrabold text-orange-100 mt-2 font-mono tracking-tight">
                98.7%
              </div>
              {/* Dynamic Oscillating Progress Bar */}
              <div className="w-full bg-slate-800 h-2 rounded-full mt-4 overflow-hidden">
                <div className="h-full bg-linear-to-r from-amber-500 to-orange-500 animate-pulse w-[98.7%]" />
              </div>
            </div>

            {/* Card 3: Interactive Spring Card */}
            <div className="p-6 rounded-2xl bg-amber-950/20 border border-amber-500/30 hover:scale-105 transition-all duration-300 relative group overflow-hidden cursor-pointer">
              <div className="absolute top-0 right-0 w-24 h-24 bg-yellow-500/10 rounded-full blur-xl group-hover:bg-yellow-500/20 transition-all" />
              <span className="text-xs font-mono text-yellow-400 uppercase">Hover Spring Elasticity</span>
              <div className="text-4xl font-extrabold text-yellow-100 mt-2 font-mono tracking-tight">
                0.84 ms
              </div>
              <p className="text-xs text-slate-400 mt-3">Fluid micro-interaction response</p>
            </div>
          </div>

          {/* Kinetic Wave Monitor */}
          <div className="mt-8 p-6 rounded-2xl bg-black/40 border border-amber-500/20">
            <div className="flex justify-between items-center mb-4">
              <span className="text-sm font-semibold text-white">Continuous Frequency Oscillation</span>
              <span className="text-xs font-mono text-amber-400">HERTZ: {(speedMultiplier * 60).toFixed(0)} Hz</span>
            </div>

            <div className="h-28 flex items-center justify-between gap-1 overflow-hidden px-2">
              {[20, 35, 60, 80, 45, 90, 75, 50, 85, 30, 95, 65, 40, 70, 85, 55, 90, 35, 75, 60].map((h, i) => (
                <div
                  key={i}
                  className="flex-1 bg-amber-400/80 rounded-full transition-all duration-300 hover:bg-amber-300"
                  style={{
                    height: `${h}%`,
                    animationDelay: `${i * 100}ms`
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
