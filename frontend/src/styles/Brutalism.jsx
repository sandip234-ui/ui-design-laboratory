import React, { useState } from 'react';
import { SectionHeader } from '../components/SectionHeader';

export const Brutalism = ({ styleData, prevStyle, nextStyle, onNavigate }) => {
  const [activeWorker, setActiveWorker] = useState('WORKER_NODE_01');
  const [logFilter, setLogFilter] = useState('ALL');

  const workers = [
    { id: 'WORKER_NODE_01', status: 'ACTIVE', load: '94%', memory: '14.2GB', ping: '2ms' },
    { id: 'WORKER_NODE_02', status: 'ACTIVE', load: '61%', memory: '9.8GB', ping: '4ms' },
    { id: 'WORKER_NODE_03', status: 'DEGRADED', load: '99%', memory: '31.9GB', ping: '128ms' },
  ];

  return (
    <section id="brutalism" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#0d0d0d] text-white font-mono">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          styleData={styleData}
          prevStyle={prevStyle}
          nextStyle={nextStyle}
          onNavigate={onNavigate}
        />

        {/* Brutalist Raw Dashboard Grid */}
        <div className="border-4 border-yellow-400 bg-black p-4 sm:p-8 space-y-6">
          {/* Top Banner Alert */}
          <div className="border-b-4 border-yellow-400 pb-4 flex flex-col md:flex-row md:items-center justify-between gap-4 bg-yellow-400 text-black p-4 font-black">
            <div>
              <span className="text-xl sm:text-2xl uppercase tracking-tighter">
                BRUTAL COMPUTE // SYSTEM ARCHITECTURE 05
              </span>
              <p className="text-xs uppercase mt-1">NO SMOOTH EDGES. ZERO ABSTRACTION. RAW HARDWARE TELEMETRY.</p>
            </div>
            <div className="border-2 border-black px-3 py-1 bg-black text-yellow-400 text-xs font-bold">
              STATUS: HARD_REALTIME_OK
            </div>
          </div>

          {/* Asymmetric Metric Blocks */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
            {/* Massive Hero Metric */}
            <div className="md:col-span-7 border-4 border-white p-6 bg-[#111]">
              <div className="text-xs uppercase text-slate-400 tracking-widest">[METRIC_01_AGGREGATE]</div>
              <div className="text-6xl sm:text-7xl font-black text-white mt-2 tracking-tighter">
                98.42%
              </div>
              <div className="mt-4 border-t-2 border-white pt-2 text-xs text-yellow-400 flex justify-between">
                <span>TOTAL ENGINE CLUSTER OCCUPANCY</span>
                <span>RAW CYCLE: 4,921 TFLOPS</span>
              </div>
            </div>

            {/* Stacked Hard Metrics */}
            <div className="md:col-span-5 flex flex-col gap-4">
              <div className="border-4 border-yellow-400 p-4 bg-black">
                <span className="text-xs text-yellow-400 font-bold uppercase">[UNITS_IN_FLIGHT]</span>
                <div className="text-4xl font-black text-white mt-1">1,409,200</div>
                <div className="text-xs text-slate-400 mt-1">0% BUFFER SLACK ENFORCED</div>
              </div>

              <div className="border-4 border-white p-4 bg-[#1a1a1a]">
                <span className="text-xs text-slate-300 font-bold uppercase">[FAULT_TOLERANCE]</span>
                <div className="text-4xl font-black text-white mt-1">99.999%</div>
                <div className="text-xs text-red-500 font-black mt-1">ZERO RETRIES PERMITTED</div>
              </div>
            </div>
          </div>

          {/* Raw Monospace Table */}
          <div className="border-4 border-white overflow-x-auto">
            <div className="p-3 bg-white text-black font-black text-xs uppercase flex justify-between">
              <span>PHYSICAL WORKER NODES MANIFEST</span>
              <span>PARALLEL EXECUTION MATRIX</span>
            </div>
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="border-b-2 border-white bg-[#1a1a1a] text-slate-300">
                  <th className="p-3 border-r-2 border-white">NODE_ID</th>
                  <th className="p-3 border-r-2 border-white">STATE</th>
                  <th className="p-3 border-r-2 border-white">UTILIZATION</th>
                  <th className="p-3 border-r-2 border-white">RAM ALLOC</th>
                  <th className="p-3">LATENCY</th>
                </tr>
              </thead>
              <tbody className="divide-y-2 divide-white">
                {workers.map((w) => (
                  <tr
                    key={w.id}
                    onClick={() => setActiveWorker(w.id)}
                    className={`cursor-pointer hover:bg-yellow-400 hover:text-black transition-none ${
                      activeWorker === w.id ? 'bg-[#262626] text-yellow-400 font-black' : 'bg-black text-white'
                    }`}
                  >
                    <td className="p-3 border-r-2 border-white font-bold">{w.id}</td>
                    <td className="p-3 border-r-2 border-white">
                      <span className={`px-2 py-0.5 border ${w.status === 'ACTIVE' ? 'border-green-400 text-green-400' : 'border-red-400 text-red-400'}`}>
                        {w.status}
                      </span>
                    </td>
                    <td className="p-3 border-r-2 border-white">{w.load}</td>
                    <td className="p-3 border-r-2 border-white">{w.memory}</td>
                    <td className="p-3">{w.ping}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Uncompromising Brutalist Interactive Control Bar */}
          <div className="border-4 border-yellow-400 p-4 bg-black flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <span className="text-xs uppercase font-bold text-yellow-400">EXECUTE COMMAND:</span>
              <button className="px-4 py-2 border-2 border-white bg-black hover:bg-white hover:text-black text-xs font-bold uppercase transition-none cursor-pointer">
                FORCE_GARBAGE_COLLECTION
              </button>
              <button className="px-4 py-2 border-2 border-red-500 bg-red-600 hover:bg-red-700 text-black text-xs font-black uppercase transition-none cursor-pointer">
                KILL_STALLED_PROCS
              </button>
            </div>
            <span className="text-xs text-slate-400">SELECTED: {activeWorker}</span>
          </div>
        </div>
      </div>
    </section>
  );
};
