import React, { useState } from 'react';
import { SectionHeader } from '../components/SectionHeader';
import { IconCpu, IconActivity, IconTerminal, IconShield, IconRefresh } from '../components/Icons';

export const Cybercore = ({ styleData, prevStyle, nextStyle, onNavigate }) => {
  const [activeUnit, setActiveUnit] = useState('Unit-01: Cybernetic Motor Axis');
  const [clockSpeed, setClockSpeed] = useState(4.82);
  const [diagnosticsRunning, setDiagnosticsRunning] = useState(false);
  const [busHealth, setBusHealth] = useState(99.4);

  const units = [
    { id: 'u1', name: 'Unit-01: Cybernetic Motor Axis', temp: '42.1°C', voltage: '24.2V', load: '64%' },
    { id: 'u2', name: 'Unit-02: Bionic Neural Co-Processor', temp: '38.4°C', voltage: '1.18V', load: '88%' },
    { id: 'u3', name: 'Unit-03: Optic Sensor Telemetry Bus', temp: '29.7°C', voltage: '5.02V', load: '32%' },
  ];

  const runDiagnosticSweep = () => {
    setDiagnosticsRunning(true);
    setTimeout(() => {
      setDiagnosticsRunning(false);
      setBusHealth(Number((98.5 + Math.random() * 1.4).toFixed(1)));
    }, 1200);
  };

  return (
    <section id="cybercore" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#070a0f] text-emerald-400 relative overflow-hidden font-mono">
      {/* Background Circuit Grid & Technical Telemetry Watermark */}
      <div className="absolute inset-0 circuit-grid opacity-30 pointer-events-none" />
      <div className="absolute top-10 right-10 text-[90px] font-black text-emerald-500/5 select-none pointer-events-none">
        CYBER_CORE // SYS-90
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <SectionHeader
          styleData={styleData}
          prevStyle={prevStyle}
          nextStyle={nextStyle}
          onNavigate={onNavigate}
        />

        {/* Machine Terminal Container */}
        <div className="mt-8 rounded-2xl border border-emerald-500/30 bg-[#0a0f17]/90 backdrop-blur-md p-5 sm:p-8 shadow-[0_0_40px_rgba(16,185,129,0.08)]">
          {/* Top Machine Status Bar */}
          <div className="flex flex-col md:flex-row md:items-center justify-between pb-6 border-b border-emerald-500/20 gap-4">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_10px_#10b981]" />
              <div>
                <div className="text-xs uppercase tracking-widest text-emerald-500/80 font-bold">
                  CYBERNETIC HARNESS // TELEMETRY LINK ACTIVE
                </div>
                <h3 className="text-xl sm:text-2xl font-black text-white tracking-wide">
                  SYSTEM CORE // MK-IV INFRASTRUCTURE
                </h3>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-2 text-xs">
              <span className="px-2.5 py-1 rounded border border-emerald-500/30 bg-emerald-950/30 text-emerald-300">
                HOST: CYBER-NODE-08
              </span>
              <span className="px-2.5 py-1 rounded border border-cyan-500/30 bg-cyan-950/30 text-cyan-300">
                FW: v4.89.2-RT
              </span>
              <button
                onClick={runDiagnosticSweep}
                disabled={diagnosticsRunning}
                className="flex items-center gap-1.5 px-3 py-1 rounded bg-emerald-500/20 hover:bg-emerald-500/30 border border-emerald-500/40 text-emerald-300 transition cursor-pointer"
              >
                <IconRefresh className={`w-3.5 h-3.5 ${diagnosticsRunning ? 'animate-spin' : ''}`} />
                <span>{diagnosticsRunning ? 'SWEEPING...' : 'RUN SWEEP'}</span>
              </button>
            </div>
          </div>

          {/* 3 Telemetry Diagnostic Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-6">
            <div className="p-5 rounded-xl border border-emerald-500/20 bg-emerald-950/10">
              <div className="flex items-center justify-between text-xs text-emerald-500/80">
                <span>SYSTEM BUS INTEGRITY</span>
                <IconShield className="w-4 h-4 text-emerald-400" />
              </div>
              <div className="mt-3 flex items-baseline gap-2">
                <span className="text-3xl font-black text-white">{busHealth}%</span>
                <span className="text-xs text-emerald-400">NOMINAL</span>
              </div>
              <div className="w-full h-1.5 bg-emerald-950 rounded-full mt-3 overflow-hidden border border-emerald-500/30">
                <div className="h-full bg-emerald-400" style={{ width: `${busHealth}%` }} />
              </div>
            </div>

            <div className="p-5 rounded-xl border border-emerald-500/20 bg-emerald-950/10">
              <div className="flex items-center justify-between text-xs text-emerald-500/80">
                <span>NEURAL CLOCK SPEED</span>
                <IconCpu className="w-4 h-4 text-emerald-400" />
              </div>
              <div className="mt-3 flex items-baseline gap-2">
                <span className="text-3xl font-black text-white">{clockSpeed}</span>
                <span className="text-xs text-cyan-400">GHz DUAL-CORE</span>
              </div>
              <div className="mt-3 flex items-center gap-2">
                <input
                  type="range"
                  min="2.4"
                  max="5.6"
                  step="0.05"
                  value={clockSpeed}
                  onChange={(e) => setClockSpeed(parseFloat(e.target.value))}
                  className="w-full accent-emerald-400 cursor-pointer"
                />
              </div>
            </div>

            <div className="p-5 rounded-xl border border-emerald-500/20 bg-emerald-950/10">
              <div className="flex items-center justify-between text-xs text-emerald-500/80">
                <span>MACHINE IO DATA PACKETS</span>
                <IconActivity className="w-4 h-4 text-emerald-400" />
              </div>
              <div className="mt-3 flex items-baseline gap-2">
                <span className="text-3xl font-black text-white">41.8</span>
                <span className="text-xs text-emerald-400">MB/s REALTIME</span>
              </div>
              <div className="flex gap-1 mt-3 h-5 items-end">
                {[45, 60, 75, 40, 85, 90, 70, 95, 65, 80, 88, 92].map((val, idx) => (
                  <div
                    key={idx}
                    className="flex-1 bg-emerald-500/40 hover:bg-emerald-400 transition-colors"
                    style={{ height: `${val}%` }}
                    title={`${val}% traffic`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Subsystem Machine Units Matrix */}
          <div className="mt-6 border border-emerald-500/20 rounded-xl p-5 bg-black/40">
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-400 flex items-center gap-2">
                <IconTerminal className="w-4 h-4" />
                <span>CONNECTED CYBERNETIC SUBSYSTEMS</span>
              </span>
              <span className="text-[11px] text-emerald-500/70">3 / 3 ENERGIZED</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              {units.map((unit) => {
                const isSelected = activeUnit === unit.name;
                return (
                  <button
                    key={unit.id}
                    onClick={() => setActiveUnit(unit.name)}
                    className={`text-left p-3.5 rounded-lg border transition cursor-pointer ${
                      isSelected
                        ? 'border-emerald-400 bg-emerald-950/40 text-white shadow-[0_0_15px_rgba(16,185,129,0.2)]'
                        : 'border-emerald-500/20 bg-black/30 text-emerald-300/80 hover:border-emerald-500/40'
                    }`}
                  >
                    <div className="text-xs font-bold truncate">{unit.name}</div>
                    <div className="mt-2.5 flex items-center justify-between text-[11px] text-emerald-500/70 font-mono">
                      <span>LOAD: {unit.load}</span>
                      <span>{unit.temp}</span>
                      <span>{unit.voltage}</span>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Subsystem Telemetry Log */}
            <div className="mt-4 p-3 rounded bg-black/70 border border-emerald-500/20 text-[11px] text-emerald-400/90 font-mono leading-relaxed overflow-x-auto">
              <div>[00:14:02.192] &gt; TELEMETRY_PING: {activeUnit} status = OPTIMAL (0x00 OK)</div>
              <div>[00:14:02.241] &gt; SERVO_BUS: Joint feedback jitter &lt; 0.04ms | PWM frequency synchronized</div>
              <div>[00:14:02.288] &gt; SYS_DIAGNOSTIC: Error register clear. Machine safety interlock engaged.</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
