import React, { useState } from 'react';
import { SectionHeader } from '../components/SectionHeader';

export const PixelArt = ({ styleData, prevStyle, nextStyle, onNavigate }) => {
  const [selectedItem, setSelectedItem] = useState({ name: 'Elixir of Valor', type: 'Consumable', effect: '+120 HP Restore & Cures Poison', emoji: '🧪' });
  const [playerHp, setPlayerHp] = useState(85);
  const [playerMp, setPlayerMp] = useState(60);

  const inventory = [
    { name: 'Moonlight Falchion', type: 'Weapon', effect: '+48 Physical ATK • Critical +15%', emoji: '🗡️' },
    { name: 'Elixir of Valor', type: 'Consumable', effect: '+120 HP Restore & Cures Poison', emoji: '🧪' },
    { name: 'Aegis of the Sun', type: 'Armor', effect: '+35 DEF • Fire Resistance 50%', emoji: '🛡️' },
    { name: 'Skeleton Gate Key', type: 'Key Item', effect: 'Opens sealed crypts beneath the citadel', emoji: '🗝️' },
    { name: 'Phoenix Down Feather', type: 'Consumable', effect: 'Revives fallen ally with 50% HP', emoji: '🪶' },
    { name: 'Tome of Arcane Nova', type: 'Spellbook', effect: 'Learns Tier-4 Celestial Flare (45 MP)', emoji: '📖' },
  ];

  const drinkPotion = () => {
    setPlayerHp((prev) => Math.min(100, prev + 15));
    setPlayerMp((prev) => Math.min(100, prev + 10));
  };

  return (
    <section id="pixel-art" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#101426] text-white relative overflow-hidden font-vt323 text-lg">
      {/* 16-Bit Midnight Sky Grid */}
      <div className="absolute top-10 right-10 text-4xl opacity-20 select-none pointer-events-none">
        ⭐ 🌙 ⭐
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <SectionHeader
          styleData={styleData}
          prevStyle={prevStyle}
          nextStyle={nextStyle}
          onNavigate={onNavigate}
        />

        {/* 16-Bit RPG Adventure HUD */}
        <div className="mt-8 p-6 sm:p-10 bg-[#1c223d] border-4 border-black shadow-[6px_6px_0px_#0b0d17] rounded-none relative">
          {/* Top Status Bar: HP / MP / Gold */}
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pb-6 border-b-4 border-black">
            <div>
              <div className="text-sm font-pixel text-yellow-300 uppercase tracking-widest">
                LVL 34 KNIGHT-ERRANT // WORLD MAP
              </div>
              <h3 className="text-3xl sm:text-4xl font-pixel text-white mt-1">
                VALKYRIE GUILD HUD
              </h3>
            </div>

            <div className="flex flex-wrap items-center gap-4 text-xl">
              {/* HP Bar */}
              <div className="p-2 border-2 border-black bg-black/40">
                <span className="text-red-400 font-pixel text-xs mr-2">HP:</span>
                <span className="text-white">{playerHp}/100</span>
                <div className="w-32 h-3 bg-red-950 border border-black mt-1">
                  <div className="h-full bg-red-500 transition-all duration-300" style={{ width: `${playerHp}%` }} />
                </div>
              </div>

              {/* MP Bar */}
              <div className="p-2 border-2 border-black bg-black/40">
                <span className="text-cyan-400 font-pixel text-xs mr-2">MP:</span>
                <span className="text-white">{playerMp}/100</span>
                <div className="w-28 h-3 bg-cyan-950 border border-black mt-1">
                  <div className="h-full bg-cyan-400 transition-all duration-300" style={{ width: `${playerMp}%` }} />
                </div>
              </div>

              <div className="p-2 border-2 border-black bg-yellow-950/40 text-yellow-300 flex items-center gap-2">
                <span>🪙</span>
                <span>4,850 G</span>
              </div>
            </div>
          </div>

          {/* Main RPG Screen: 6-Slot Item Grid & Item Inspect */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mt-8 items-start">
            {/* Left 6-Slot Pixel Inventory (Span 7) */}
            <div className="md:col-span-7 p-6 border-4 border-black bg-[#151a30]">
              <div className="text-sm font-pixel text-cyan-300 mb-4 flex items-center justify-between">
                <span>INVENTORY POUCH (6 SLOTS)</span>
                <button
                  onClick={drinkPotion}
                  className="px-2 py-1 bg-emerald-600 hover:bg-emerald-500 text-white font-pixel text-[10px] uppercase border-2 border-black transition cursor-pointer"
                >
                  USE ITEM 🧪
                </button>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {inventory.map((item, idx) => {
                  const isSelected = selectedItem.name === item.name;
                  return (
                    <div
                      key={idx}
                      onClick={() => setSelectedItem(item)}
                      className={`p-3 border-4 text-center cursor-pointer transition ${
                        isSelected
                          ? 'border-yellow-400 bg-yellow-950/60 shadow-[4px_4px_0px_#000]'
                          : 'border-black bg-[#232a4a] hover:bg-[#2d365f]'
                      }`}
                    >
                      <div className="text-3xl my-1">{item.emoji}</div>
                      <div className="text-sm font-pixel text-white truncate">{item.name}</div>
                      <div className="text-xs text-slate-400 font-pixel mt-1">{item.type}</div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Right Item Detail Inspect Box (Span 5) */}
            <div className="md:col-span-5 p-6 border-4 border-black bg-[#151a30] flex flex-col justify-between min-h-64">
              <div>
                <div className="flex items-center gap-3">
                  <span className="text-4xl p-2 border-2 border-black bg-black/40">
                    {selectedItem.emoji}
                  </span>
                  <div>
                    <span className="text-[10px] font-pixel uppercase tracking-widest text-yellow-300">
                      {selectedItem.type}
                    </span>
                    <h4 className="text-base font-pixel text-white">{selectedItem.name}</h4>
                  </div>
                </div>

                <div className="mt-4 p-3 border-2 border-black bg-black/50 text-base text-cyan-200 leading-snug">
                  "{selectedItem.effect}"
                </div>
              </div>

              <div className="mt-4 pt-3 border-t-2 border-black flex items-center justify-between text-xs font-pixel text-slate-400">
                <span>PRESS [A] EQUIP</span>
                <span>PRESS [B] DROP</span>
              </div>
            </div>
          </div>

          {/* Retro Quest Dialogue Box */}
          <div className="mt-6 p-4 border-4 border-black bg-black text-emerald-400 flex items-center gap-4">
            <span className="text-3xl border-2 border-black p-1 bg-emerald-950">🧙‍♂️</span>
            <div>
              <div className="text-xs font-pixel text-yellow-300">ELDER THALOR // DIALOGUE:</div>
              <p className="text-xl sm:text-2xl mt-1 text-emerald-300 font-vt323 leading-tight">
                "Take this falchion, valiant traveler. The shadow dragon stirs atop Mount Grimrock!"
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
