import React, { useState } from 'react';
import { SectionHeader } from '../components/SectionHeader';
import { IconTrendingUp, IconSparkles, IconActivity, IconCheck } from '../components/Icons';

export const BentoUI = ({ styleData, prevStyle, nextStyle, onNavigate }) => {
  const [goalProgress, setGoalProgress] = useState(78);

  return (
    <section id="bento-ui" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#0a0d14] text-slate-200">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          styleData={styleData}
          prevStyle={prevStyle}
          nextStyle={nextStyle}
          onNavigate={onNavigate}
        />

        {/* Bento Modular Grid Canvas */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
          {/* Bento Cell 1: Main Metric (Col span 8, Row span 2) */}
          <div className="md:col-span-8 p-6 sm:p-8 rounded-3xl bg-[#121622] border border-slate-800 shadow-xl flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold uppercase tracking-wider text-indigo-400">
                  Core Enterprise Engine
                </span>
                <span className="px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-mono">
                  +19.4% GROWTH
                </span>
              </div>
              <div className="text-4xl sm:text-6xl font-black text-white mt-4 tracking-tight font-display">
                $1,429,800
              </div>
              <p className="text-sm text-slate-400 mt-2">
                Annual recurring revenue across 14 enterprise global clusters.
              </p>
            </div>

            {/* Micro Sparkline Graph */}
            <div className="mt-8 pt-6 border-t border-slate-800 flex items-end justify-between gap-2 h-24">
              {[40, 52, 60, 58, 72, 85, 80, 94, 102, 115, 120, 138].map((v, i) => (
                <div key={i} className="flex-1 flex flex-col items-center gap-1 group">
                  <div
                    className="w-full rounded-t bg-indigo-500/60 group-hover:bg-indigo-400 transition-colors"
                    style={{ height: `${(v / 140) * 100}%` }}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Bento Cell 2: Quick Stats Pod (Col span 4) */}
          <div className="md:col-span-4 p-6 rounded-3xl bg-[#121622] border border-slate-800 shadow-xl flex flex-col justify-between">
            <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
              Active Compute Fleet
            </span>
            <div className="my-4">
              <div className="text-4xl font-extrabold text-white font-mono">1,842</div>
              <div className="text-xs text-emerald-400 mt-1 flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                <span>Zero degraded instances</span>
              </div>
            </div>
            <div className="p-3 rounded-2xl bg-black/30 border border-slate-800/80 text-xs text-slate-400">
              Avg utilization rate: <strong className="text-white">62.8%</strong>
            </div>
          </div>

          {/* Bento Cell 3: Live Chart Box (Col span 5) */}
          <div className="md:col-span-5 p-6 rounded-3xl bg-[#121622] border border-slate-800 shadow-xl">
            <div className="flex justify-between items-center mb-3">
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                Data Throughput
              </span>
              <span className="text-xs font-mono text-indigo-400">42.8 GB/s</span>
            </div>
            <div className="h-28 rounded-2xl bg-black/40 border border-slate-800 p-3 flex items-center justify-center">
              <span className="text-xs font-mono text-slate-500">
                [ REALTIME WEBSOCKET DATA STREAM ACTIVE ]
              </span>
            </div>
          </div>

          {/* Bento Cell 4: AI Insight Callout (Col span 7) */}
          <div className="md:col-span-7 p-6 rounded-3xl bg-linear-to-r from-indigo-950/40 via-[#141824] to-[#121622] border border-indigo-500/20 shadow-xl flex flex-col justify-between">
            <div className="flex items-center gap-2 text-indigo-400 text-xs font-semibold uppercase tracking-wider">
              <IconSparkles className="w-4 h-4" />
              <span>Autonomous AI Optimization Insight</span>
            </div>
            <p className="text-sm text-slate-200 mt-2 leading-relaxed">
              "Workload routing re-allocated 420 vCPU threads to low-cost Nordic green energy regions, reducing carbon footprint by 31% while shaving 8ms off round-trip latency."
            </p>
            <div className="mt-4 flex items-center justify-between text-xs text-slate-400 pt-3 border-t border-slate-800">
              <span>Confidence: 98.4%</span>
              <button className="text-indigo-400 font-semibold hover:underline">Apply Action →</button>
            </div>
          </div>

          {/* Bento Cell 5: Activity Log Feed (Col span 7) */}
          <div className="md:col-span-7 p-6 rounded-3xl bg-[#121622] border border-slate-800 shadow-xl">
            <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 block mb-3">
              Recent Deployment Stream
            </span>
            <div className="space-y-2">
              <div className="p-3 rounded-2xl bg-black/20 border border-slate-800/80 flex items-center justify-between text-xs">
                <span className="text-slate-200">v4.18.0 Production Canary</span>
                <span className="text-emerald-400 font-mono">100% HEALTH</span>
              </div>
              <div className="p-3 rounded-2xl bg-black/20 border border-slate-800/80 flex items-center justify-between text-xs">
                <span className="text-slate-200">Database Schema Partition Rollout</span>
                <span className="text-blue-400 font-mono">COMPLETED</span>
              </div>
            </div>
          </div>

          {/* Bento Cell 6: Goal Tracker (Col span 5) */}
          <div className="md:col-span-5 p-6 rounded-3xl bg-[#121622] border border-slate-800 shadow-xl flex flex-col justify-between">
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                Quarterly Target Goal
              </span>
              <div className="flex justify-between items-baseline mt-3">
                <span className="text-3xl font-black text-white font-display">{goalProgress}%</span>
                <span className="text-xs text-indigo-400 font-mono">$1.8M Cap</span>
              </div>
              <div className="w-full h-3 rounded-full bg-slate-800 p-0.5 mt-2">
                <div
                  className="h-full rounded-full bg-indigo-500 transition-all duration-300"
                  style={{ width: `${goalProgress}%` }}
                />
              </div>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-800 flex justify-between text-xs text-slate-400">
              <span>Days remaining: 24</span>
              <button
                onClick={() => setGoalProgress(p => (p < 100 ? p + 5 : 70))}
                className="text-indigo-400 hover:text-indigo-300 font-semibold cursor-pointer"
              >
                Simulate +5%
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
