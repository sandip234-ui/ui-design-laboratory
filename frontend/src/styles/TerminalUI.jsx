import React, { useState } from 'react';
import { SectionHeader } from '../components/SectionHeader';

export const TerminalUI = ({ styleData, prevStyle, nextStyle, onNavigate }) => {
  const [inputVal, setInputVal] = useState('');
  const [history, setHistory] = useState([
    { cmd: 'uname -a', out: 'Linux kernel 6.11.0-generic x86_64 GNU/Linux' },
    { cmd: 'system.status', out: 'CPU: [███████░░░] 72% | MEM: [██████░░░░] 61% | NET: [█████████░] 91%' },
  ]);

  const handleCommand = (e) => {
    if (e.key === 'Enter') {
      const trimmed = inputVal.trim().toLowerCase();
      let response = '';
      if (trimmed === 'help') {
        response = 'Available commands: help, status, top, clear, date, whoami';
      } else if (trimmed === 'status' || trimmed === 'system.status') {
        response = 'CORE: NOMINAL | CLUSTERS: 12 ONLINE | THREAT_LEVEL: 0 (SECURE)';
      } else if (trimmed === 'top') {
        response = 'PID 1042 (systemd) 0.1% | PID 4920 (node) 18.4% | PID 8192 (nginx) 2.1%';
      } else if (trimmed === 'clear') {
        setHistory([]);
        setInputVal('');
        return;
      } else if (trimmed === 'whoami') {
        response = 'operator@antigravity-ui-lab (root permissions granted)';
      } else if (trimmed === 'date') {
        response = new Date().toUTCString();
      } else if (trimmed !== '') {
        response = `bash: command not found: ${trimmed}. Type 'help' for commands.`;
      }

      if (trimmed !== '') {
        setHistory(prev => [...prev, { cmd: inputVal, out: response }]);
      }
      setInputVal('');
    }
  };

  return (
    <section id="terminal-ui" className="py-20 px-4 sm:px-6 lg:px-8 bg-black text-green-400 font-mono">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          styleData={styleData}
          prevStyle={prevStyle}
          nextStyle={nextStyle}
          onNavigate={onNavigate}
        />

        {/* Authentic UNIX Terminal Shell Window */}
        <div className="rounded-xl border border-green-500/40 bg-black/95 p-4 sm:p-6 shadow-[0_0_40px_rgba(34,197,94,0.15)]">
          {/* Terminal Title Bar */}
          <div className="flex items-center justify-between pb-3 border-b border-green-500/30 text-xs text-green-500/80 mb-4">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-red-600 inline-block" />
              <span className="w-3 h-3 rounded-full bg-yellow-500 inline-block" />
              <span className="w-3 h-3 rounded-full bg-green-500 inline-block" />
              <span className="ml-2 font-bold text-white">root@matrix-core-01: ~ (tty1)</span>
            </div>
            <span className="text-[11px] font-mono">UTF-8 // VT100 ESCAPES ON</span>
          </div>

          {/* ASCII Banner & Static Dashboard Metrics */}
          <div className="mb-4 text-xs leading-relaxed text-green-400/90 whitespace-pre font-mono overflow-x-auto">
{`   _____     __                  _             __ 
  / ___/__  / /________  _______(_)__  _______/ /_
  \\__ \\/ / / / ___/ __ \\/ ___/ / / _ \\/ ___/ __/
 ___/ / /_/ (__  ) /_/ / /  / / /  __/ /__/ /_   
/____/\\__, /____/\\____/_/  /_/_/\\___/\\___/\\__/   
     /____/                                      `}
          </div>

          {/* System Telemetry Gauge Block */}
          <div className="p-4 rounded border border-green-500/30 bg-green-950/10 mb-6 text-xs space-y-2">
            <div className="text-green-300 font-bold mb-2">$ system.status --verbose</div>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
              <span>CPU UTILIZATION</span>
              <span className="text-green-300 font-bold">███████░░░ 72% (8 CORES ACTIVE)</span>
            </div>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
              <span>MEMORY COMMIT</span>
              <span className="text-green-300 font-bold">██████░░░░ 61% (19.4GB / 32GB)</span>
            </div>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
              <span>NETWORK PIPELINE</span>
              <span className="text-green-300 font-bold">█████████░ 91% (10 GbE DUPLEX)</span>
            </div>
            <div className="pt-2 border-t border-green-500/20 text-emerald-400 font-bold flex justify-between">
              <span>OVERALL HEALTH: ALL SERVICES OPERATIONAL</span>
              <span>UPTIME: 148 DAYS, 12:44:09</span>
            </div>
          </div>

          {/* Dynamic History Output */}
          <div className="space-y-3 mb-4 text-xs font-mono">
            {history.map((h, i) => (
              <div key={i} className="space-y-1">
                <div className="flex items-center gap-2 text-green-300">
                  <span className="text-emerald-500 font-bold">operator@matrix:~$</span>
                  <span>{h.cmd}</span>
                </div>
                {h.out && <div className="text-green-400/80 pl-4">{h.out}</div>}
              </div>
            ))}
          </div>

          {/* Interactive Command Prompt Line */}
          <div className="flex items-center gap-2 text-xs font-mono pt-2 border-t border-green-500/20">
            <span className="text-emerald-400 font-bold">operator@matrix:~$</span>
            <input
              type="text"
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              onKeyDown={handleCommand}
              placeholder="type 'help', 'status', 'top'..."
              className="flex-1 bg-transparent text-white outline-none caret-green-400 text-xs font-mono placeholder:text-green-800"
            />
            <span className="animate-pulse bg-green-400 w-2 h-4 inline-block" />
          </div>
        </div>
      </div>
    </section>
  );
};
