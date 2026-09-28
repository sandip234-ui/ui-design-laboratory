import React, { useState } from 'react';
import { SectionHeader } from '../components/SectionHeader';
import { IconShield, IconActivity, IconCheck, IconSearch } from '../components/Icons';

export const DarkUI = ({ styleData, prevStyle, nextStyle, onNavigate }) => {
  const [filterSeverity, setFilterSeverity] = useState('ALL');

  const alerts = [
    { id: 'SEC-4091', source: 'eu-west-cluster-04', type: 'Ingress Anomaly Suppressed', time: '2m ago', level: 'Low' },
    { id: 'SEC-4092', source: 'auth-gateway-proxy', type: 'Certificate Auto-Renewed', time: '14m ago', level: 'Info' },
    { id: 'SEC-4093', source: 'database-read-replica', type: 'Query Surge Mitigated', time: '38m ago', level: 'Medium' },
  ];

  return (
    <section id="dark-ui" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#06080d] text-slate-300">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          styleData={styleData}
          prevStyle={prevStyle}
          nextStyle={nextStyle}
          onNavigate={onNavigate}
        />

        {/* OLED Engineered Dark Operations Console */}
        <div className="rounded-2xl p-6 sm:p-8 bg-[#0b0f17] border border-white/8 shadow-[0_20px_50px_rgba(0,0,0,0.8)]">
          {/* Top Low-Light Nav Bar */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-white/6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#141b27] border border-white/8 flex items-center justify-center text-emerald-400">
                <IconShield className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-slate-100 tracking-tight">
                  OLED Threat & SecOps Sentinel
                </h3>
                <p className="text-xs text-slate-500">Ergonomic low-light environment telemetry</p>
              </div>
            </div>

            {/* Controlled Status Chip */}
            <div className="flex items-center gap-2.5 px-3.5 py-1.5 rounded-lg bg-[#111722] border border-emerald-500/20 text-emerald-400 text-xs font-mono">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              <span>DEFENSE MATRIX: OPTIMAL</span>
            </div>
          </div>

          {/* Metric Cards Row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-6">
            <div className="p-5 rounded-xl bg-[#101521] border border-white/6">
              <span className="text-xs font-medium text-slate-400">Shielded Endpoints</span>
              <div className="text-3xl font-bold text-slate-100 mt-2 font-mono">4,892 Nodes</div>
              <div className="mt-2 text-xs text-emerald-400 flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                <span>100% active integrity</span>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-[#101521] border border-white/6">
              <span className="text-xs font-medium text-slate-400">Threat Mitigation Rate</span>
              <div className="text-3xl font-bold text-slate-100 mt-2 font-mono">99.98%</div>
              <div className="mt-2 text-xs text-slate-400">0 critical bypasses</div>
            </div>

            <div className="p-5 rounded-xl bg-[#101521] border border-white/6">
              <span className="text-xs font-medium text-slate-400">P99 Latency Impact</span>
              <div className="text-3xl font-bold text-slate-100 mt-2 font-mono">1.4 ms</div>
              <div className="mt-2 text-xs text-slate-400">Sub-millisecond filtering overhead</div>
            </div>
          </div>

          {/* Incident Feed & Restrained Controls */}
          <div className="mt-6 rounded-xl bg-[#0e131d] border border-white/6 overflow-hidden">
            <div className="p-4 border-b border-white/6 flex flex-wrap items-center justify-between gap-3">
              <span className="text-xs font-semibold text-slate-300 uppercase tracking-wider">
                Real-Time Security Event Telemetry
              </span>
              <div className="flex gap-2">
                {['ALL', 'CRITICAL', 'LOW'].map((lvl) => (
                  <button
                    key={lvl}
                    onClick={() => setFilterSeverity(lvl)}
                    className={`px-2.5 py-1 rounded text-xs font-mono transition cursor-pointer ${
                      filterSeverity === lvl
                        ? 'bg-white/10 text-white'
                        : 'text-slate-500 hover:text-slate-300'
                    }`}
                  >
                    {lvl}
                  </button>
                ))}
              </div>
            </div>

            <div className="divide-y divide-white/4">
              {alerts.map((a) => (
                <div key={a.id} className="p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2 hover:bg-white/2 transition">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs text-slate-400">{a.id}</span>
                    <span className="text-xs text-slate-200 font-medium">{a.type}</span>
                  </div>
                  <div className="flex items-center gap-4 text-xs font-mono text-slate-500">
                    <span>{a.source}</span>
                    <span className="text-slate-400">{a.time}</span>
                    <span className="px-2 py-0.5 rounded bg-white/4 text-slate-300">
                      {a.level}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
