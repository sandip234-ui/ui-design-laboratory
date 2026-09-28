import React, { useState } from 'react';
import { SectionHeader } from '../components/SectionHeader';
import { IconTrendingUp, IconUsers, IconDollarSign, IconActivity, IconArrowRight, IconSparkles } from '../components/Icons';

export const Glassmorphism = ({ styleData, prevStyle, nextStyle, onNavigate }) => {
  const [timeframe, setTimeframe] = useState('30d');
  const [activeTab, setActiveTab] = useState('overview');

  const chartData = [45, 62, 58, 78, 92, 85, 96, 88, 105, 118, 110, 128];

  const transactions = [
    { id: 1, name: 'Apex Digital Inc.', time: '12 mins ago', amount: '+$3,450.00', status: 'Completed', type: 'incoming' },
    { id: 2, name: 'Cloud Infrastructure Node', time: '1 hour ago', amount: '-$620.00', status: 'Processed', type: 'outgoing' },
    { id: 3, name: 'Starlight Global Ltd', time: '3 hours ago', amount: '+$8,900.00', status: 'Completed', type: 'incoming' },
  ];

  return (
    <section id="glassmorphism" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-[#0a0d18]">
      {/* Dynamic Background Glowing Blobs for Refraction */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-purple-600/30 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-600/25 rounded-full blur-[110px] pointer-events-none" />
      <div className="absolute top-1/2 right-1/3 w-80 h-80 bg-pink-500/20 rounded-full blur-[90px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <SectionHeader
          styleData={styleData}
          prevStyle={prevStyle}
          nextStyle={nextStyle}
          onNavigate={onNavigate}
        />

        {/* Glass Dashboard Container */}
        <div className="relative rounded-3xl p-6 md:p-8 backdrop-blur-2xl bg-white/4 border border-white/20 shadow-[0_8px_32px_0_rgba(0,0,0,0.37)]">
          {/* Dashboard Header Bar */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-white/10">
            <div>
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 shadow-[0_0_12px_#22d3ee] animate-pulse" />
                <h3 className="text-xl font-bold text-white tracking-wide">
                  Glass Analytics Dashboard
                </h3>
              </div>
              <p className="text-xs text-blue-200/70 mt-1">Real-time refractive telemetrics & liquidity stream</p>
            </div>

            {/* Glass Timeframe Switcher */}
            <div className="flex items-center p-1 rounded-xl backdrop-blur-md bg-white/6 border border-white/15">
              {['24h', '7d', '30d', '1y'].map((t) => (
                <button
                  key={t}
                  onClick={() => setTimeframe(t)}
                  className={`px-3 py-1 text-xs font-medium rounded-lg transition-all cursor-pointer ${
                    timeframe === t
                      ? 'bg-white/25 text-white shadow-md backdrop-blur-sm'
                      : 'text-slate-300 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {t}
                </button>
              ))}
            </div>
          </div>

          {/* Metric Cards Row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-6">
            {/* Metric 1 */}
            <div className="p-5 rounded-2xl backdrop-blur-xl bg-white/5 border border-white/20 shadow-[inset_0_1px_1px_rgba(255,255,255,0.4)] hover:bg-white/8 transition duration-300">
              <div className="flex items-center justify-between">
                <span className="text-xs font-medium text-slate-300">Gross Revenue</span>
                <span className="p-2 rounded-xl bg-blue-500/20 text-blue-300 border border-blue-400/30">
                  <IconDollarSign className="w-4 h-4" />
                </span>
              </div>
              <div className="mt-3">
                <div className="text-3xl font-extrabold text-white tracking-tight">$84,920</div>
                <div className="flex items-center gap-1.5 mt-2 text-xs text-emerald-400">
                  <IconTrendingUp className="w-3.5 h-3.5" />
                  <span>+14.2% vs last month</span>
                </div>
              </div>
            </div>

            {/* Metric 2 */}
            <div className="p-5 rounded-2xl backdrop-blur-xl bg-white/5 border border-white/20 shadow-[inset_0_1px_1px_rgba(255,255,255,0.4)] hover:bg-white/8 transition duration-300">
              <div className="flex items-center justify-between">
                <span className="text-xs font-medium text-slate-300">Active Users</span>
                <span className="p-2 rounded-xl bg-purple-500/20 text-purple-300 border border-purple-400/30">
                  <IconUsers className="w-4 h-4" />
                </span>
              </div>
              <div className="mt-3">
                <div className="text-3xl font-extrabold text-white tracking-tight">24,892</div>
                <div className="flex items-center gap-1.5 mt-2 text-xs text-indigo-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
                  <span>82.4% 30-day retention</span>
                </div>
              </div>
            </div>

            {/* Metric 3 */}
            <div className="p-5 rounded-2xl backdrop-blur-xl bg-white/5 border border-white/20 shadow-[inset_0_1px_1px_rgba(255,255,255,0.4)] hover:bg-white/8 transition duration-300">
              <div className="flex items-center justify-between">
                <span className="text-xs font-medium text-slate-300">Conversion Rate</span>
                <span className="p-2 rounded-xl bg-pink-500/20 text-pink-300 border border-pink-400/30">
                  <IconActivity className="w-4 h-4" />
                </span>
              </div>
              <div className="mt-3">
                <div className="text-3xl font-extrabold text-white tracking-tight">8.42%</div>
                <div className="flex items-center gap-1.5 mt-2 text-xs text-pink-300">
                  <span>+0.8% industry benchmark</span>
                </div>
              </div>
            </div>
          </div>

          {/* Lower Section: Activity Chart & Recent Transactions */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
            {/* Glass Bar Chart */}
            <div className="lg:col-span-2 p-5 rounded-2xl backdrop-blur-xl bg-white/3 border border-white/15">
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm font-semibold text-white">Revenue Activity Velocity</span>
                <span className="text-xs text-slate-400 font-mono">12-Week Trajectory</span>
              </div>

              {/* Chart Visualizer */}
              <div className="h-44 flex items-end gap-2 sm:gap-3 pt-6 pb-2 px-2">
                {chartData.map((val, idx) => (
                  <div key={idx} className="flex-1 flex flex-col items-center gap-2 group">
                    <div
                      className="w-full rounded-t-lg bg-linear-to-t from-indigo-500/30 via-purple-400/40 to-cyan-300/80 border-t border-x border-white/30 backdrop-blur-md transition-all duration-300 group-hover:brightness-125"
                      style={{ height: `${(val / 130) * 100}%` }}
                    />
                    <span className="text-[10px] text-slate-400 font-mono">W{idx + 1}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Recent Transactions List */}
            <div className="p-5 rounded-2xl backdrop-blur-xl bg-white/3 border border-white/15 flex flex-col justify-between">
              <div>
                <h4 className="text-sm font-semibold text-white mb-3">Recent Transactions</h4>
                <div className="space-y-3">
                  {transactions.map((tx) => (
                    <div
                      key={tx.id}
                      className="p-3 rounded-xl backdrop-blur-md bg-white/4 border border-white/10 hover:bg-white/8 transition flex items-center justify-between"
                    >
                      <div>
                        <div className="text-xs font-semibold text-white">{tx.name}</div>
                        <div className="text-[10px] text-slate-400 mt-0.5">{tx.time}</div>
                      </div>
                      <div className="text-right">
                        <div className={`text-xs font-mono font-bold ${tx.type === 'incoming' ? 'text-emerald-400' : 'text-slate-300'}`}>
                          {tx.amount}
                        </div>
                        <span className="text-[10px] px-2 py-0.5 rounded-full bg-white/10 text-slate-300">
                          {tx.status}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick Actions */}
              <div className="mt-4 pt-3 border-t border-white/10 flex gap-2">
                <button className="flex-1 py-2 rounded-xl backdrop-blur-md bg-white/10 hover:bg-white/20 border border-white/20 text-xs font-semibold text-white transition active:scale-95 cursor-pointer">
                  Export CSV
                </button>
                <button className="flex-1 py-2 rounded-xl bg-linear-to-r from-blue-500/80 to-indigo-600/80 hover:from-blue-500 hover:to-indigo-600 border border-white/30 text-xs font-semibold text-white shadow-lg transition active:scale-95 cursor-pointer">
                  New Transfer
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
