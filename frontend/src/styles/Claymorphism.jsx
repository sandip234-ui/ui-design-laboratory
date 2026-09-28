import React, { useState } from 'react';
import { SectionHeader } from '../components/SectionHeader';
import { IconSparkles, IconCheck, IconActivity, IconFlame } from '../components/Icons';

export const Claymorphism = ({ styleData, prevStyle, nextStyle, onNavigate }) => {
  const [toggleActive, setToggleActive] = useState(true);
  const [hydration, setHydration] = useState(2400);
  const [selectedMood, setSelectedMood] = useState('Energetic');

  const habits = [
    { title: 'Morning Meditation', time: '15 min', done: true, color: 'bg-[#d8b4e2]' },
    { title: 'Deep Work Sprint', time: '90 min', done: true, color: 'bg-[#a7f3d0]' },
    { title: 'Creative Sketching', time: '30 min', done: false, color: 'bg-[#fed7aa]' },
  ];

  return (
    <section id="claymorphism" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#eef2f9] text-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto">
        <div className="text-slate-800">
          <SectionHeader
            styleData={styleData}
            prevStyle={prevStyle}
            nextStyle={nextStyle}
            onNavigate={onNavigate}
          />
        </div>

        {/* Clay Dashboard Shell */}
        <div 
          className="rounded-[36px] p-6 sm:p-10 bg-[#e6ecf8] transition-all"
          style={{
            boxShadow: '16px 16px 32px #c9d2e5, -16px -16px 32px #ffffff, inset 2px 2px 5px rgba(255,255,255,0.7)'
          }}
        >
          {/* Header Bar */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-slate-300/60">
            <div>
              <div className="flex items-center gap-3">
                <div 
                  className="w-10 h-10 rounded-2xl bg-[#ffd1dc] flex items-center justify-center text-xl"
                  style={{
                    boxShadow: '6px 6px 14px #c2c9d6, -4px -4px 10px #ffffff, inset 2px 2px 4px rgba(255,255,255,0.8)'
                  }}
                >
                  🌸
                </div>
                <div>
                  <h3 className="text-2xl font-black text-slate-800 tracking-tight font-sans-clean">
                    Clay Mind & Habit Studio
                  </h3>
                  <p className="text-xs text-slate-500 font-medium">Tactile inflated wellness dashboard</p>
                </div>
              </div>
            </div>

            {/* Squishy Toggle Pill */}
            <div className="flex items-center gap-3">
              <span className="text-xs font-bold text-slate-600">Focus Mode</span>
              <button
                onClick={() => setToggleActive(!toggleActive)}
                className={`w-14 h-8 rounded-full p-1 transition-all duration-300 relative cursor-pointer ${
                  toggleActive ? 'bg-[#93c5fd]' : 'bg-[#cbd5e1]'
                }`}
                style={{
                  boxShadow: 'inset 3px 3px 6px rgba(0,0,0,0.15), inset -3px -3px 6px rgba(255,255,255,0.8)'
                }}
              >
                <div
                  className={`w-6 h-6 rounded-full bg-white transition-all transform duration-300 ${
                    toggleActive ? 'translate-x-6' : 'translate-x-0'
                  }`}
                  style={{
                    boxShadow: '3px 3px 6px rgba(0,0,0,0.2), -1px -1px 3px rgba(255,255,255,0.9)'
                  }}
                />
              </button>
            </div>
          </div>

          {/* Clay Metric Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            {/* Card 1: Flow Score */}
            <div
              className="p-6 rounded-[28px] bg-[#ffd8e4] relative overflow-hidden transition-all hover:scale-[1.02]"
              style={{
                boxShadow: '10px 10px 20px #c5cedf, -10px -10px 20px #ffffff, inset 3px 3px 6px rgba(255,255,255,0.9), inset -3px -3px 6px rgba(244,114,182,0.3)'
              }}
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-pink-700">Daily Flow</span>
                <span className="text-xl">✨</span>
              </div>
              <div className="text-4xl font-black text-pink-900 mt-3 font-sans-clean">94%</div>
              <div className="mt-3 flex items-center gap-2">
                <div className="flex-1 h-3 rounded-full bg-pink-200/80 p-0.5" style={{ boxShadow: 'inset 2px 2px 4px rgba(0,0,0,0.1)' }}>
                  <div className="h-full rounded-full bg-pink-500 w-[94%]" />
                </div>
                <span className="text-xs font-bold text-pink-800">+12%</span>
              </div>
            </div>

            {/* Card 2: Pomodoros */}
            <div
              className="p-6 rounded-[28px] bg-[#cbf3f0] relative overflow-hidden transition-all hover:scale-[1.02]"
              style={{
                boxShadow: '10px 10px 20px #c5cedf, -10px -10px 20px #ffffff, inset 3px 3px 6px rgba(255,255,255,0.9), inset -3px -3px 6px rgba(45,212,191,0.3)'
              }}
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-teal-800">Sprint Blocks</span>
                <span className="text-xl">⏱️</span>
              </div>
              <div className="text-4xl font-black text-teal-950 mt-3 font-sans-clean">6 / 8</div>
              <p className="mt-3 text-xs font-semibold text-teal-800 flex items-center gap-1">
                <IconFlame className="w-3.5 h-3.5 text-teal-600" />
                <span>3.5 hours total deep focus</span>
              </p>
            </div>

            {/* Card 3: Hydration Level */}
            <div
              className="p-6 rounded-[28px] bg-[#dbeafe] relative overflow-hidden transition-all hover:scale-[1.02]"
              style={{
                boxShadow: '10px 10px 20px #c5cedf, -10px -10px 20px #ffffff, inset 3px 3px 6px rgba(255,255,255,0.9), inset -3px -3px 6px rgba(96,165,250,0.3)'
              }}
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-blue-800">Hydration</span>
                <span className="text-xl">💧</span>
              </div>
              <div className="text-4xl font-black text-blue-950 mt-3 font-sans-clean">{hydration} ml</div>
              <div className="mt-3 flex items-center justify-between">
                <span className="text-xs font-semibold text-blue-700">Target: 3,000 ml</span>
                <button
                  onClick={() => setHydration(h => h + 250)}
                  className="px-3 py-1 rounded-xl bg-blue-500 text-white font-bold text-xs shadow-md active:scale-95 transition cursor-pointer"
                  style={{
                    boxShadow: '4px 4px 8px #a8c1e4, -2px -2px 6px #ffffff, inset 1px 1px 2px rgba(255,255,255,0.6)'
                  }}
                >
                  +250ml
                </button>
              </div>
            </div>
          </div>

          {/* Habit Tracker & Mood Pill Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">
            {/* Habits Clay List */}
            <div
              className="p-6 rounded-[30px] bg-[#edf2fb]"
              style={{
                boxShadow: '8px 8px 18px #c9d2e5, -8px -8px 18px #ffffff'
              }}
            >
              <h4 className="text-sm font-black text-slate-800 uppercase tracking-wider mb-4">
                Today's Tactile Habits
              </h4>
              <div className="space-y-3">
                {habits.map((h, i) => (
                  <div
                    key={i}
                    className="p-4 rounded-2xl bg-[#f4f7fc] flex items-center justify-between transition-transform hover:scale-[1.01]"
                    style={{
                      boxShadow: '5px 5px 10px #d0d7e6, -5px -5px 10px #ffffff, inset 1px 1px 2px rgba(255,255,255,0.8)'
                    }}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-8 h-8 rounded-xl ${h.color} flex items-center justify-center font-bold text-slate-700`}>
                        {h.done ? <IconCheck className="w-4 h-4 text-slate-800" /> : '•'}
                      </div>
                      <div>
                        <div className="text-sm font-bold text-slate-800">{h.title}</div>
                        <div className="text-xs text-slate-500 font-medium">{h.time} allocated</div>
                      </div>
                    </div>
                    <span className={`text-xs font-bold px-3 py-1 rounded-full ${
                      h.done ? 'bg-emerald-100 text-emerald-800' : 'bg-amber-100 text-amber-800'
                    }`}>
                      {h.done ? 'Finished' : 'Pending'}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Mood Selector & Clay Controls */}
            <div
              className="p-6 rounded-[30px] bg-[#edf2fb] flex flex-col justify-between"
              style={{
                boxShadow: '8px 8px 18px #c9d2e5, -8px -8px 18px #ffffff'
              }}
            >
              <div>
                <h4 className="text-sm font-black text-slate-800 uppercase tracking-wider mb-3">
                  Current Energy State
                </h4>
                <div className="grid grid-cols-3 gap-3">
                  {['Calm', 'Energetic', 'Hyperfocus'].map((mood) => (
                    <button
                      key={mood}
                      onClick={() => setSelectedMood(mood)}
                      className={`p-3 rounded-2xl text-xs font-black transition-all cursor-pointer ${
                        selectedMood === mood
                          ? 'bg-[#c7d2fe] text-indigo-950 scale-105'
                          : 'bg-[#f0f4fc] text-slate-600 hover:bg-[#e4ebf7]'
                      }`}
                      style={{
                        boxShadow: selectedMood === mood
                          ? 'inset 4px 4px 8px #9fa8da, inset -4px -4px 8px #ffffff'
                          : '6px 6px 12px #c9d2e5, -6px -6px 12px #ffffff'
                      }}
                    >
                      {mood}
                    </button>
                  ))}
                </div>
              </div>

              {/* Clay Action Pill Buttons */}
              <div className="mt-6 pt-4 border-t border-slate-300/60 flex gap-3">
                <button
                  className="flex-1 py-3 rounded-2xl bg-[#ffd6a5] text-amber-950 font-black text-xs uppercase tracking-wider transition-all hover:scale-105 active:scale-95 cursor-pointer"
                  style={{
                    boxShadow: '6px 6px 14px #c2c9d6, -6px -6px 14px #ffffff, inset 2px 2px 4px rgba(255,255,255,0.8)'
                  }}
                >
                  Log Reflection
                </button>
                <button
                  className="flex-1 py-3 rounded-2xl bg-[#a0c4ff] text-blue-950 font-black text-xs uppercase tracking-wider transition-all hover:scale-105 active:scale-95 cursor-pointer"
                  style={{
                    boxShadow: '6px 6px 14px #c2c9d6, -6px -6px 14px #ffffff, inset 2px 2px 4px rgba(255,255,255,0.8)'
                  }}
                >
                  Start Session
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
