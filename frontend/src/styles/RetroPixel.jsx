import React, { useState } from 'react';
import { SectionHeader } from '../components/SectionHeader';

export const RetroPixel = ({ styleData, prevStyle, nextStyle, onNavigate }) => {
  const [crtEnabled, setCrtEnabled] = useState(true);
  const [activeQuest, setActiveQuest] = useState(1);

  const quests = [
    { id: 1, title: 'SLAY THE MEGABYTE DRAGON', reward: '500 XP / 120 G', status: 'IN PROGRESS' },
    { id: 2, title: 'RESTORE CRT MONITOR POWER', reward: '350 XP / 80 G', status: 'COMPLETED' },
    { id: 3, title: 'DECODE 8-BIT CIPHER MATRIX', reward: '750 XP / 300 G', status: 'LOCKED' },
  ];

  return (
    <section id="retro-pixel" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#070b0a] text-[#4ade80] font-vt323">
      <div className="max-w-7xl mx-auto">
        <div className="text-green-400">
          <SectionHeader
            styleData={styleData}
            prevStyle={prevStyle}
            nextStyle={nextStyle}
            onNavigate={onNavigate}
          />
        </div>

        {/* Arcade Cabinet Frame */}
        <div className="relative rounded-2xl p-4 sm:p-8 bg-[#031408] border-4 border-[#22c55e] shadow-[0_0_25px_rgba(34,197,94,0.3)]">
          {/* Optional CRT Scanlines Layer */}
          {crtEnabled && <div className="absolute inset-0 crt-overlay rounded-xl pointer-events-none z-20" />}

          {/* Header Bar */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-4 border-b-2 border-dashed border-[#22c55e]/50 relative z-10">
            <div className="flex items-center gap-3">
              <span className="text-3xl animate-bounce">👾</span>
              <div>
                <h3 className="text-2xl sm:text-3xl font-normal tracking-wider text-[#4ade80]">
                  ARCADE HERO STATION // 8-BIT
                </h3>
                <p className="text-base text-emerald-400/80">ROM V2.44 LOADED IN 64KB BASE RAM</p>
              </div>
            </div>

            {/* CRT Scanline Toggle */}
            <div className="flex items-center gap-2">
              <span className="text-base text-emerald-400">CRT SHADER:</span>
              <button
                onClick={() => setCrtEnabled(!crtEnabled)}
                className={`px-3 py-1 text-base border-2 transition cursor-pointer ${
                  crtEnabled ? 'bg-[#22c55e] text-black border-white' : 'bg-transparent text-emerald-400 border-[#22c55e]'
                }`}
              >
                {crtEnabled ? '[ ON ]' : '[ OFF ]'}
              </button>
            </div>
          </div>

          {/* Stats Bar (HP, MP, GOLD) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6 relative z-10">
            {/* HP Card */}
            <div className="p-4 bg-black border-2 border-[#22c55e] shadow-[4px_4px_0_#15803d]">
              <div className="flex justify-between text-base">
                <span>HEALTH (HP)</span>
                <span className="text-red-400">♥♥♥♥♡</span>
              </div>
              <div className="text-3xl text-white mt-1">180 / 200</div>
              <div className="w-full bg-[#1e3a24] h-3 mt-2 border border-[#22c55e]">
                <div className="bg-red-500 h-full w-[90%]" />
              </div>
            </div>

            {/* MP Card */}
            <div className="p-4 bg-black border-2 border-[#22c55e] shadow-[4px_4px_0_#15803d]">
              <div className="flex justify-between text-base">
                <span>MANA (MP)</span>
                <span className="text-blue-400">◆◆◆◇◇</span>
              </div>
              <div className="text-3xl text-white mt-1">85 / 100</div>
              <div className="w-full bg-[#1e3a24] h-3 mt-2 border border-[#22c55e]">
                <div className="bg-blue-400 h-full w-[85%]" />
              </div>
            </div>

            {/* Gold / Coins */}
            <div className="p-4 bg-black border-2 border-[#22c55e] shadow-[4px_4px_0_#15803d]">
              <div className="flex justify-between text-base">
                <span>TREASURE VAULT</span>
                <span className="text-yellow-400">🪙</span>
              </div>
              <div className="text-3xl text-yellow-300 mt-1">4,920 GOLD</div>
              <div className="text-base text-emerald-500 mt-1">LEVEL 24 KNIGHT</div>
            </div>
          </div>

          {/* Quest Log & 8-Bit Command Actions */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6 relative z-10">
            {/* Quests */}
            <div className="lg:col-span-2 p-4 bg-black border-2 border-[#22c55e]">
              <div className="text-lg text-emerald-300 mb-3 border-b border-[#22c55e]/40 pb-1">
                ACTIVE QUEST MANIFEST (QUEST_LOG.DAT)
              </div>
              <div className="space-y-3">
                {quests.map((q) => (
                  <div
                    key={q.id}
                    onClick={() => setActiveQuest(q.id)}
                    className={`p-3 border transition cursor-pointer flex flex-col sm:flex-row sm:items-center justify-between gap-2 ${
                      activeQuest === q.id
                        ? 'border-yellow-400 bg-[#0f2e17] text-white'
                        : 'border-[#22c55e]/40 bg-black/60 text-emerald-400 hover:border-[#22c55e]'
                    }`}
                  >
                    <div>
                      <div className="text-lg">{activeQuest === q.id ? '▶ ' : '  '}{q.title}</div>
                      <div className="text-base text-yellow-400/90">{q.reward}</div>
                    </div>
                    <span className="text-base px-2 py-0.5 border border-current self-start sm:self-auto">
                      {q.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Retro Action Dial */}
            <div className="p-4 bg-black border-2 border-[#22c55e] flex flex-col justify-between">
              <div>
                <div className="text-lg text-emerald-300 mb-2 border-b border-[#22c55e]/40 pb-1">
                  ACTIONS // COMMANDS
                </div>
                <div className="grid grid-cols-2 gap-2 mt-4">
                  <button className="p-3 bg-[#112a17] hover:bg-[#22c55e] hover:text-black border border-[#22c55e] text-base font-bold transition active:translate-y-1 cursor-pointer">
                    [ATTACK]
                  </button>
                  <button className="p-3 bg-[#112a17] hover:bg-[#22c55e] hover:text-black border border-[#22c55e] text-base font-bold transition active:translate-y-1 cursor-pointer">
                    [DEFEND]
                  </button>
                  <button className="p-3 bg-[#112a17] hover:bg-[#22c55e] hover:text-black border border-[#22c55e] text-base font-bold transition active:translate-y-1 cursor-pointer">
                    [POTION]
                  </button>
                  <button className="p-3 bg-[#112a17] hover:bg-[#22c55e] hover:text-black border border-[#22c55e] text-base font-bold transition active:translate-y-1 cursor-pointer">
                    [FLEE]
                  </button>
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-[#22c55e]/40 text-sm text-emerald-500">
                CREDITS: 04 // PRESS 1P TO START
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
