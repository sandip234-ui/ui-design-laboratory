import React, { useState } from 'react';
import { SectionHeader } from '../components/SectionHeader';

export const KawaiiUI = ({ styleData, prevStyle, nextStyle, onNavigate }) => {
  const [mochiMood, setMochiMood] = useState('✨ Super Happy!');
  const [habits, setHabits] = useState([
    { id: 1, text: 'Drink Strawberry Boba 🍓', done: true },
    { id: 2, text: 'Pet Fluffy Bunny 3 Times 🐰', done: true },
    { id: 3, text: 'Water Marshmallow Succulents 🪴', done: false },
  ]);
  const [bobaCount, setBobaCount] = useState(3);

  const moods = ['✨ Super Happy!', '🌸 Dreamy Sweet', '💖 Extra Sparkly', '💤 Sleepy Snuggle'];

  const toggleHabit = (id) => {
    setHabits(habits.map((h) => (h.id === id ? { ...h, done: !h.done } : h)));
  };

  return (
    <section id="kawaii-ui" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#fff0f5] text-[#4a2e35] relative overflow-hidden font-display">
      {/* Pastel Confectionary Cloud Glows */}
      <div className="absolute top-10 left-10 w-72 h-72 rounded-full bg-pink-300/30 blur-[80px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-80 h-80 rounded-full bg-purple-300/30 blur-[90px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <SectionHeader
          styleData={styleData}
          prevStyle={prevStyle}
          nextStyle={nextStyle}
          onNavigate={onNavigate}
        />

        {/* Ultra-Rounded Bubbly Kawaii Board */}
        <div className="mt-8 rounded-[40px] p-6 sm:p-12 bg-white/90 border-4 border-pink-200 shadow-[0_12px_36px_rgba(244,114,182,0.15)] relative">
          {/* Header Bar */}
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pb-6 border-b-2 border-pink-100">
            <div className="flex items-center gap-3">
              <span className="text-4xl p-3 bg-pink-100 rounded-3xl animate-bounce">🐰</span>
              <div>
                <span className="text-xs uppercase tracking-widest text-pink-500 font-bold">
                  MOCHI &amp; FRIENDS // CUTE HABIT PAL
                </span>
                <h3 className="text-3xl sm:text-4xl font-black text-[#582937] tracking-tight">
                  Pastel Wonderland Diary
                </h3>
              </div>
            </div>

            {/* Mood Selector Buttons */}
            <div className="flex flex-wrap gap-1.5">
              {moods.map((m) => (
                <button
                  key={m}
                  onClick={() => setMochiMood(m)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-transform cursor-pointer shadow-xs ${
                    mochiMood === m
                      ? 'bg-pink-400 text-white scale-105 shadow-pink-300'
                      : 'bg-pink-50 text-pink-700 hover:bg-pink-100'
                  }`}
                >
                  {m}
                </button>
              ))}
            </div>
          </div>

          {/* 3 Cute Bubble Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            {/* Card 1: Mascot Status */}
            <div className="p-6 rounded-4xl bg-pink-50/70 border-2 border-pink-200 flex flex-col justify-between hover:scale-102 transition-transform">
              <div>
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-pink-600 uppercase tracking-wider">
                    MOCHI'S MOOD
                  </span>
                  <span className="text-2xl">🎀</span>
                </div>
                <div className="text-2xl font-black text-[#5c2b3a] mt-2">
                  {mochiMood}
                </div>
                <p className="text-xs text-pink-600/80 mt-2 font-medium">
                  Mochi ate sweet mochi balls and is ready to shower you with sparkles!
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-pink-200 flex items-center justify-between text-xs font-bold text-pink-500">
                <span>HAPPINESS LVL</span>
                <span>100 / 100 💖</span>
              </div>
            </div>

            {/* Card 2: Boba Reward Counter */}
            <div className="p-6 rounded-4xl bg-purple-50/70 border-2 border-purple-200 flex flex-col justify-between hover:scale-102 transition-transform">
              <div>
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-purple-600 uppercase tracking-wider">
                    SWEET BOBA JARS
                  </span>
                  <span className="text-2xl">🧋</span>
                </div>
                <div className="text-4xl font-black text-[#452857] mt-2">
                  {bobaCount} Cups
                </div>
                <p className="text-xs text-purple-600/80 mt-2 font-medium">
                  Earn sweet boba points by being kind to yourself and drinking water.
                </p>
              </div>

              <button
                onClick={() => setBobaCount(bobaCount + 1)}
                className="mt-4 py-2 px-4 rounded-full bg-purple-400 hover:bg-purple-300 text-white font-bold text-xs uppercase tracking-wider transition-all active:scale-95 shadow-xs cursor-pointer"
              >
                + Sip More Boba! 🌸
              </button>
            </div>

            {/* Card 3: Cloud Dream Tracker */}
            <div className="p-6 rounded-4xl bg-sky-50/70 border-2 border-sky-200 flex flex-col justify-between hover:scale-102 transition-transform">
              <div>
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-sky-600 uppercase tracking-wider">
                    CLOUD SLEEP STATS
                  </span>
                  <span className="text-2xl">☁️</span>
                </div>
                <div className="text-4xl font-black text-[#22485e] mt-2">
                  8.5 Hrs
                </div>
                <p className="text-xs text-sky-600/80 mt-2 font-medium">
                  Drifted into marshmallow clouds with gentle lullaby chimes.
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-sky-200 flex items-center justify-between text-xs font-bold text-sky-500">
                <span>SLEEP QUALITY</span>
                <span>RESTED &amp; FLUFFY ⭐</span>
              </div>
            </div>
          </div>

          {/* Interactive Daily Cute Habit Checklist */}
          <div className="mt-8 p-6 rounded-4xl bg-[#fff5f8] border-2 border-pink-200">
            <h4 className="text-sm font-black uppercase tracking-wider text-pink-700 mb-4 flex items-center gap-2">
              <span>💖</span>
              <span>DAILY KINDNESS &amp; SMILE CHECKLIST</span>
            </h4>

            <div className="space-y-2.5">
              {habits.map((habit) => (
                <div
                  key={habit.id}
                  onClick={() => toggleHabit(habit.id)}
                  className={`flex items-center justify-between p-3.5 rounded-2xl border-2 transition-all cursor-pointer ${
                    habit.done
                      ? 'border-pink-300 bg-pink-100/70 text-pink-900 font-bold'
                      : 'border-white bg-white text-slate-700 hover:border-pink-200'
                  }`}
                >
                  <span className="text-sm">{habit.text}</span>
                  <span className="w-6 h-6 rounded-full bg-pink-400 text-white flex items-center justify-center text-xs font-black shadow-xs">
                    {habit.done ? '✓' : '○'}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
