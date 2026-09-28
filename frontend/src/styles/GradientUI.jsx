import React, { useState } from 'react';
import { SectionHeader } from '../components/SectionHeader';
import { IconTrendingUp, IconDollarSign, IconActivity } from '../components/Icons';

export const GradientUI = ({ styleData, prevStyle, nextStyle, onNavigate }) => {
  const [gradientPreset, setGradientPreset] = useState('sunset');

  const presets = {
    sunset: 'from-pink-500 via-purple-600 to-indigo-700',
    electric: 'from-cyan-400 via-indigo-500 to-fuchsia-600',
    auric: 'from-amber-400 via-rose-500 to-purple-600',
  };

  return (
    <section id="gradient-ui" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#090714] text-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          styleData={styleData}
          prevStyle={prevStyle}
          nextStyle={nextStyle}
          onNavigate={onNavigate}
        />

        {/* Gradient Dashboard Container */}
        <div className="rounded-3xl p-6 sm:p-10 bg-[#120d24] border border-purple-500/30 shadow-[0_0_50px_rgba(168,85,247,0.25)] relative overflow-hidden">
          {/* Header Bar */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-purple-500/20">
            <div>
              <h3 className="text-2xl sm:text-3xl font-black text-transparent bg-clip-text bg-linear-to-r from-pink-400 via-purple-300 to-indigo-300 tracking-tight font-display">
                Chromatic Mesh Capital
              </h3>
              <p className="text-xs text-purple-200/70">Full-spectrum generative gradient financial flow</p>
            </div>

            {/* Gradient Preset Selector */}
            <div className="flex items-center gap-2 p-1.5 rounded-xl bg-purple-950/40 border border-purple-500/30">
              <span className="text-[11px] font-mono text-purple-300 px-2">Palette:</span>
              {['sunset', 'electric', 'auric'].map((p) => (
                <button
                  key={p}
                  onClick={() => setGradientPreset(p)}
                  className={`px-3 py-1 rounded-lg text-xs font-semibold capitalize transition cursor-pointer ${
                    gradientPreset === p
                      ? 'bg-linear-to-r ' + presets[p] + ' text-white shadow-md'
                      : 'text-purple-300 hover:text-white'
                  }`}
                >
                  {p}
                </button>
              ))}
            </div>
          </div>

          {/* Gradient Metric Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            {/* Card 1 */}
            <div className="p-0.5 rounded-2xl bg-linear-to-tr from-pink-500 via-purple-500 to-indigo-500 shadow-lg">
              <div className="h-full p-6 rounded-[14px] bg-[#17102e] flex flex-col justify-between">
                <div>
                  <span className="text-xs font-medium text-pink-300">Portfolio Net Worth</span>
                  <div className="text-4xl font-extrabold text-transparent bg-clip-text bg-linear-to-r from-pink-300 via-purple-200 to-white mt-2 font-display">
                    $384,920
                  </div>
                </div>
                <div className="mt-4 pt-3 border-t border-purple-500/20 flex items-center justify-between text-xs text-emerald-400">
                  <span className="flex items-center gap-1">
                    <IconTrendingUp className="w-4 h-4" />
                    +24.8% Year-to-Date
                  </span>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="p-0.5 rounded-2xl bg-linear-to-tr from-cyan-400 via-indigo-500 to-fuchsia-500 shadow-lg">
              <div className="h-full p-6 rounded-[14px] bg-[#17102e] flex flex-col justify-between">
                <div>
                  <span className="text-xs font-medium text-cyan-300">Staked Yield Stream</span>
                  <div className="text-4xl font-extrabold text-transparent bg-clip-text bg-linear-to-r from-cyan-200 via-indigo-200 to-white mt-2 font-display">
                    18.4% APY
                  </div>
                </div>
                <div className="mt-4 pt-3 border-t border-purple-500/20 flex items-center justify-between text-xs text-cyan-300">
                  <span>Auto-compounding daily</span>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="p-0.5 rounded-2xl bg-linear-to-tr from-amber-400 via-rose-500 to-purple-600 shadow-lg">
              <div className="h-full p-6 rounded-[14px] bg-[#17102e] flex flex-col justify-between">
                <div>
                  <span className="text-xs font-medium text-amber-300">Liquid Treasury</span>
                  <div className="text-4xl font-extrabold text-transparent bg-clip-text bg-linear-to-r from-amber-200 via-rose-200 to-white mt-2 font-display">
                    $142,650
                  </div>
                </div>
                <div className="mt-4 pt-3 border-t border-purple-500/20 flex items-center justify-between text-xs text-amber-300">
                  <span>Instant liquidity available</span>
                </div>
              </div>
            </div>
          </div>

          {/* Gradient Chart Area & Action Card */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-8">
            <div className="lg:col-span-2 p-6 rounded-2xl bg-linear-to-b from-purple-900/30 to-indigo-950/50 border border-purple-500/30">
              <div className="flex justify-between items-center mb-6">
                <span className="text-sm font-bold text-white">Chromatic Yield Trajectory</span>
                <span className="text-xs font-mono text-purple-300">MOMENTUM INDEX</span>
              </div>

              {/* Gradient Filled Bars */}
              <div className="h-40 flex items-end gap-3 px-2">
                {[35, 50, 45, 68, 75, 65, 82, 90, 85, 96, 110, 125].map((val, i) => (
                  <div key={i} className="flex-1 flex flex-col items-center gap-1 group">
                    <div
                      className="w-full rounded-t-lg bg-linear-to-t from-indigo-600 via-purple-500 to-pink-400 shadow-[0_0_15px_rgba(236,72,153,0.4)] group-hover:brightness-125 transition-all"
                      style={{ height: `${(val / 130) * 100}%` }}
                    />
                    <span className="text-[10px] text-purple-300/70 font-mono">M{i+1}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Gradient Action Button CTA */}
            <div className="p-6 rounded-2xl bg-linear-to-br from-pink-600/20 via-purple-600/30 to-indigo-600/30 border border-purple-400/40 flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-pink-300">
                  AUTOMATED REBALANCING
                </span>
                <h4 className="text-xl font-bold text-white mt-2">Optimize Vector Allocation</h4>
                <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                  Apply continuous multi-asset gradient rebalancing across high-yield liquidity pools.
                </p>
              </div>

              <div className="mt-6">
                <button className="w-full py-3 rounded-xl bg-linear-to-r from-pink-500 via-purple-500 to-indigo-500 hover:from-pink-600 hover:to-indigo-600 font-bold text-xs uppercase tracking-wider text-white shadow-[0_0_25px_rgba(217,70,239,0.5)] active:scale-95 transition cursor-pointer">
                  Deploy Gradient Strategy
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
