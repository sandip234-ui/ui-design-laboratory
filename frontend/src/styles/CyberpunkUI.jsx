import React, { useState } from 'react';
import { SectionHeader } from '../components/SectionHeader';

export const CyberpunkUI = ({ styleData, prevStyle, nextStyle, onNavigate }) => {
  const [overclock, setOverclock] = useState(true);

  return (
    <section id="cyberpunk-ui" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#090310] text-[#f43f5e] font-mono relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <SectionHeader
          styleData={styleData}
          prevStyle={prevStyle}
          nextStyle={nextStyle}
          onNavigate={onNavigate}
        />

        {/* Neo-Tokyo Cyberware Deck Shell */}
        <div className="bg-[#120624] border-2 border-[#f43f5e] p-6 sm:p-10 shadow-[0_0_40px_rgba(244,63,94,0.3)] cyber-cut relative">
          {/* Top Neon Bar */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-[#f43f5e]/40">
            <div>
              <div className="flex items-center gap-3">
                <span className="text-2xl text-[#06b6d4] animate-pulse">⚡</span>
                <h3 className="text-2xl sm:text-3xl font-black uppercase tracking-wider text-transparent bg-clip-text bg-linear-to-r from-[#f43f5e] via-[#facc15] to-[#06b6d4] font-hud">
                  NEURAL LINK // CHROME DECK
                </h3>
              </div>
              <p className="text-xs text-[#06b6d4] mt-1">
                KABUKI DISTRICT // NEURAL SYNC // PROTOCOL 2077
              </p>
            </div>

            {/* Cyber Overclock Button */}
            <button
              onClick={() => setOverclock(!overclock)}
              className={`px-4 py-2 text-xs font-black uppercase tracking-widest border-2 transition active:scale-95 cyber-cut-sm cursor-pointer ${
                overclock
                  ? 'bg-[#f43f5e] text-black border-[#facc15] shadow-[0_0_20px_#f43f5e]'
                  : 'bg-black text-[#f43f5e] border-[#f43f5e]'
              }`}
            >
              {overclock ? 'OVERCLOCK ACTIVE [4.8 GHz]' : 'SAFETY REGULATOR ON'}
            </button>
          </div>

          {/* Cyberware Implant Status Telemetry */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            {/* Card 1 */}
            <div className="p-5 bg-[#1b0a33] border border-[#06b6d4] cyber-cut-sm shadow-[0_0_15px_rgba(6,182,212,0.2)]">
              <div className="flex justify-between items-center text-xs text-[#06b6d4]">
                <span>SYNAPTIC BANDWIDTH</span>
                <span>脳波同期</span>
              </div>
              <div className="text-4xl font-black text-white mt-2 font-hud">
                984 <span className="text-sm text-[#06b6d4]">TB/S</span>
              </div>
              <div className="mt-3 text-xs text-[#facc15] flex justify-between">
                <span>Direct Cortex Feed</span>
                <span>LATENCY: 0.1ms</span>
              </div>
            </div>

            {/* Card 2 */}
            <div className="p-5 bg-[#1b0a33] border border-[#f43f5e] cyber-cut-sm shadow-[0_0_15px_rgba(244,63,94,0.2)]">
              <div className="flex justify-between items-center text-xs text-[#f43f5e]">
                <span>CYBERNETIC CHROME LOAD</span>
                <span>過熱状態</span>
              </div>
              <div className="text-4xl font-black text-white mt-2 font-hud">
                87.4%
              </div>
              <div className="mt-3 w-full bg-black h-2 border border-[#f43f5e]">
                <div className="bg-[#f43f5e] h-full w-[87.4%]" />
              </div>
            </div>

            {/* Card 3 */}
            <div className="p-5 bg-[#1b0a33] border border-[#facc15] cyber-cut-sm shadow-[0_0_15px_rgba(250,204,21,0.2)]">
              <div className="flex justify-between items-center text-xs text-[#facc15]">
                <span>SUB-DERMAL ICE SHIELD</span>
                <span>防壁防御</span>
              </div>
              <div className="text-4xl font-black text-white mt-2 font-hud">
                MIL-SPEC
              </div>
              <div className="mt-3 text-xs text-[#06b6d4]">
                Black ICE Intrusion Suppressor: 100%
              </div>
            </div>
          </div>

          {/* Glitch Aesthetic Cyber Feed */}
          <div className="mt-8 p-6 bg-black/60 border border-[#06b6d4]/40 cyber-cut-sm">
            <div className="flex justify-between items-center mb-3 text-xs text-[#06b6d4]">
              <span className="font-bold">TACTICAL NETWORK MONITOR // SECTOR 04</span>
              <span>GRID IDENT: SHIBUYA_NET_ROOT</span>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed font-mono">
              [WARNING] Unauthorized deck intercept detected on encrypted relay 0x9F41. Sub-neural firewall active. Counter-intrusion daemons dispatched to trace intrusion origin.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
