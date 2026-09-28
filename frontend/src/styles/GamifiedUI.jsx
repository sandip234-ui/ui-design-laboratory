import React, { useState } from 'react';
import { SectionHeader } from '../components/SectionHeader';
import { IconFlame, IconTrophy, IconCheck, IconSparkles } from '../components/Icons';

export const GamifiedUI = ({ styleData, prevStyle, nextStyle, onNavigate }) => {
  const [xp, setXp] = useState(8450);
  const [claimedQuest, setClaimedQuest] = useState(false);

  const level = Math.floor(xp / 1000) + 18;
  const currentLevelProgress = (xp % 1000) / 10;

  const claimDailyXP = () => {
    if (!claimedQuest) {
      setXp(x => x + 350);
      setClaimedQuest(true);
    }
  };

  return (
    <section id="gamified-ui" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#0e0720] text-purple-100">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          styleData={styleData}
          prevStyle={prevStyle}
          nextStyle={nextStyle}
          onNavigate={onNavigate}
        />

        {/* Gamified RPG Main Hub Canvas */}
        <div className="rounded-3xl p-6 sm:p-10 bg-linear-to-b from-[#1a0e38] via-[#140b2b] to-[#100824] border-2 border-purple-500/40 shadow-[0_0_50px_rgba(139,92,246,0.25)] relative overflow-hidden">
          {/* Header Bar with Player Level & Streak */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-purple-500/20">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-linear-to-tr from-amber-400 via-purple-500 to-pink-500 p-0.5 shadow-lg">
                <div className="w-full h-full rounded-[14px] bg-[#1a0e38] flex items-center justify-center text-2xl">
                  🧙‍♂️
                </div>
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="px-2 py-0.5 rounded-full bg-purple-500/30 text-purple-300 text-xs font-black uppercase font-mono border border-purple-400/40">
                    LEVEL {level} ARCHMAGE
                  </span>
                  <span className="text-xs text-amber-400 font-bold">★ ELITE TIER</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-black text-white mt-1">
                  Valerius the Codebender
                </h3>
              </div>
            </div>

            {/* Streak & Achievements Counter Pills */}
            <div className="flex flex-wrap items-center gap-3">
              <div className="flex items-center gap-1.5 px-4 py-2 rounded-2xl bg-orange-950/40 border border-orange-500/40 text-orange-400 text-xs font-black shadow-md">
                <IconFlame className="w-4 h-4 text-orange-400 animate-bounce" />
                <span>14 DAY STREAK!</span>
              </div>
              <div className="flex items-center gap-1.5 px-4 py-2 rounded-2xl bg-yellow-950/40 border border-yellow-500/40 text-yellow-400 text-xs font-black shadow-md">
                <IconTrophy className="w-4 h-4 text-yellow-400" />
                <span>28 ACHIEVEMENTS</span>
              </div>
            </div>
          </div>

          {/* XP Progress Level Bar */}
          <div className="mt-8 p-6 rounded-2xl bg-black/40 border border-purple-500/30">
            <div className="flex justify-between items-baseline mb-2">
              <span className="text-xs font-bold uppercase tracking-wider text-purple-300">
                Experience Progression (Level {level} → {level + 1})
              </span>
              <span className="text-sm font-mono font-bold text-amber-400">
                {xp.toLocaleString()} / {(Math.floor(xp / 1000) * 1000 + 1000).toLocaleString()} XP ({currentLevelProgress.toFixed(0)}%)
              </span>
            </div>
            <div className="w-full h-5 rounded-full bg-slate-900 border border-purple-500/30 p-1 overflow-hidden">
              <div
                className="h-full rounded-full bg-linear-to-r from-purple-500 via-pink-500 to-amber-400 transition-all duration-500 shadow-[0_0_15px_rgba(244,114,182,0.6)]"
                style={{ width: `${currentLevelProgress}%` }}
              />
            </div>
            <div className="mt-2 flex justify-between text-xs text-purple-300/70 font-mono">
              <span>+450 XP EARNED TODAY</span>
              <span>{(1000 - (xp % 1000))} XP TO NEXT UNLOCK</span>
            </div>
          </div>

          {/* Daily Quests & Loot Trophies */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">
            {/* Daily Quests List */}
            <div className="p-6 rounded-2xl bg-black/30 border border-purple-500/20">
              <h4 className="text-sm font-black uppercase tracking-wider text-purple-200 mb-4 flex items-center justify-between">
                <span>Daily Quests Manifest</span>
                <span className="text-xs font-mono text-purple-400">RESETS IN 06:14:22</span>
              </h4>

              <div className="space-y-3">
                <div className="p-3.5 rounded-xl bg-white/3 border border-purple-500/20 flex items-center justify-between">
                  <div>
                    <div className="text-xs font-bold text-white">Complete 3 Code Reviews</div>
                    <div className="text-[11px] text-amber-400 font-mono">+150 XP • 50 Gems</div>
                  </div>
                  <span className="text-xs text-emerald-400 font-bold flex items-center gap-1">
                    <IconCheck className="w-3.5 h-3.5" /> Claimed
                  </span>
                </div>

                <div className="p-3.5 rounded-xl bg-purple-900/20 border border-purple-500/30 flex items-center justify-between">
                  <div>
                    <div className="text-xs font-bold text-white">Refactor Legacy Controller</div>
                    <div className="text-[11px] text-amber-400 font-mono">+350 XP • Rare Chest</div>
                  </div>
                  <button
                    onClick={claimDailyXP}
                    disabled={claimedQuest}
                    className={`px-3 py-1.5 rounded-lg text-xs font-black uppercase transition cursor-pointer ${
                      claimedQuest
                        ? 'bg-slate-700 text-slate-400 cursor-not-allowed'
                        : 'bg-linear-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-black shadow-md active:scale-95'
                    }`}
                  >
                    {claimedQuest ? 'CLAIMED ✓' : 'CLAIM REWARD'}
                  </button>
                </div>
              </div>
            </div>

            {/* Achievement Trophy Showcase */}
            <div className="p-6 rounded-2xl bg-black/30 border border-purple-500/20 flex flex-col justify-between">
              <div>
                <h4 className="text-sm font-black uppercase tracking-wider text-purple-200 mb-4">
                  Legendary Trophy Vault
                </h4>
                <div className="grid grid-cols-3 gap-3 text-center">
                  <div className="p-3 rounded-xl bg-purple-950/40 border border-amber-400/40 shadow-sm">
                    <div className="text-2xl mb-1">👑</div>
                    <div className="text-[11px] font-bold text-amber-300">Grand Architect</div>
                    <div className="text-[9px] text-purple-300 uppercase font-mono mt-0.5">LEGENDARY</div>
                  </div>

                  <div className="p-3 rounded-xl bg-purple-950/40 border border-purple-400/40 shadow-sm">
                    <div className="text-2xl mb-1">⚡</div>
                    <div className="text-[11px] font-bold text-purple-300">Sub-100ms Bugfix</div>
                    <div className="text-[9px] text-purple-300 uppercase font-mono mt-0.5">EPIC</div>
                  </div>

                  <div className="p-3 rounded-xl bg-purple-950/40 border border-blue-400/40 shadow-sm">
                    <div className="text-2xl mb-1">🛡️</div>
                    <div className="text-[11px] font-bold text-blue-300">Zero CVE Guardian</div>
                    <div className="text-[9px] text-blue-300 uppercase font-mono mt-0.5">RARE</div>
                  </div>
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-purple-500/20 flex justify-between text-xs text-purple-300 font-mono">
                <span>GUILD RANK: #03 GLOBAL</span>
                <span className="text-amber-400 font-bold">2,480 GUILD POINTS</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
