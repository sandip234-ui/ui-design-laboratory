import React, { useState } from 'react';
import { SectionHeader } from '../components/SectionHeader';

export const Scrapbook = ({ styleData, prevStyle, nextStyle, onNavigate }) => {
  const [activeMemory, setActiveMemory] = useState('Kyoto Autumn, 2024');
  const [selectedSticker, setSelectedSticker] = useState('🌸 Cherry Blossom');
  const [pinnedNotes, setPinnedNotes] = useState([
    { id: 1, text: 'Morning matcha at Uji canal with old film camera.', date: 'Oct 14', color: 'bg-amber-100' },
    { id: 2, text: 'Found rare woodblock print in antique bookstore alley.', date: 'Oct 16', color: 'bg-emerald-50' },
  ]);
  const [newNote, setNewNote] = useState('');

  const stickers = ['🌸 Cherry Blossom', '☕ Drip Coffee', '🏮 Lantern', '🌿 Pressed Fern', '🚂 Night Train'];

  const memories = [
    {
      title: 'Kyoto Autumn, 2024',
      tag: 'Film Roll #04',
      caption: 'Golden ginkgo leaves on the stone steps of Nanzen-ji.',
      coords: '35.0116° N, 135.7925° E',
      tapeColor: 'bg-amber-300/80',
    },
    {
      title: 'Amalfi Coast Drive',
      tag: 'Journal Entry #19',
      caption: 'Sea breeze, fresh lemons, cliffside espresso overlooking azure waters.',
      coords: '40.6340° N, 14.6027° E',
      tapeColor: 'bg-sky-300/80',
    },
    {
      title: 'Edinburgh Rainy Zine Fair',
      tag: 'Collectibles',
      caption: 'Drafting risograph prints in the cozy stone cellar studio.',
      coords: '55.9533° N, 3.1883° W',
      tapeColor: 'bg-rose-300/80',
    },
  ];

  const handleAddNote = (e) => {
    e.preventDefault();
    if (!newNote.trim()) return;
    setPinnedNotes([
      ...pinnedNotes,
      { id: Date.now(), text: newNote.trim(), date: 'Just now', color: 'bg-yellow-50' },
    ]);
    setNewNote('');
  };

  const current = memories.find((m) => m.title === activeMemory) || memories[0];

  return (
    <section id="scrapbook" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#f5ede2] text-[#3d3228] relative overflow-hidden">
      {/* Background craft paper texture & subtle stamp marks */}
      <div className="absolute top-8 right-12 w-32 h-32 rounded-full border-4 border-dashed border-[#b89f82]/30 flex items-center justify-center font-serif text-[11px] uppercase tracking-widest text-[#a88f72]/40 rotate-12 pointer-events-none">
        POSTAGE // AIR MAIL
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <SectionHeader
          styleData={styleData}
          prevStyle={prevStyle}
          nextStyle={nextStyle}
          onNavigate={onNavigate}
        />

        {/* Handcrafted Collage Board */}
        <div className="mt-8 rounded-3xl p-6 sm:p-10 bg-[#ebe1d1] border-2 border-[#d9ccb8] shadow-[0_12px_36px_rgba(78,54,34,0.08)] relative">
          {/* Top Washi Tape Strips holding the board */}
          <div className="absolute -top-3 left-16 w-24 h-7 bg-amber-200/80 -rotate-3 shadow-xs backdrop-blur-xs border-x border-amber-300/60 pointer-events-none" />
          <div className="absolute -top-3 right-16 w-24 h-7 bg-rose-200/80 rotate-2 shadow-xs backdrop-blur-xs border-x border-rose-300/60 pointer-events-none" />

          {/* Collage Header */}
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pb-6 border-b border-[#d4c3ab]">
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xl">📎</span>
                <span className="font-handwriting text-2xl text-[#825c38] font-bold">
                  Memory Keepsake &amp; Visual Journal
                </span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#2d2218] mt-1">
                Traveler's Collage Atelier
              </h3>
            </div>

            {/* Memory Collection Tabs */}
            <div className="flex flex-wrap gap-2">
              {memories.map((m) => (
                <button
                  key={m.title}
                  onClick={() => setActiveMemory(m.title)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-serif transition-transform cursor-pointer shadow-xs ${
                    activeMemory === m.title
                      ? 'bg-[#3d3228] text-[#f5ede2] -rotate-1 scale-105'
                      : 'bg-[#faf4ec] text-[#635343] hover:bg-white'
                  }`}
                >
                  {m.title}
                </button>
              ))}
            </div>
          </div>

          {/* Collage Elements Canvas */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mt-8 items-start">
            {/* Left Polaroid Frame (Span 5) */}
            <div className="lg:col-span-5 bg-white p-4 pb-6 rounded shadow-md border border-[#dfd5c4] rotate-[-1.5deg] relative">
              {/* Tape holding polaroid */}
              <div className={`absolute -top-3 left-1/3 w-20 h-6 ${current.tapeColor} rotate-2 shadow-xs border-x border-black/10`} />

              {/* Photo Area */}
              <div className="w-full h-64 bg-linear-to-tr from-stone-800 via-stone-700 to-amber-900 rounded-xs flex flex-col justify-end p-4 text-white relative overflow-hidden">
                <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,var(--tw-gradient-stops))] from-yellow-200 via-transparent to-black pointer-events-none" />
                <div className="relative z-10">
                  <span className="text-[10px] font-mono tracking-widest uppercase bg-black/60 px-2 py-0.5 rounded">
                    {current.tag}
                  </span>
                  <div className="font-serif text-lg font-bold mt-1 text-amber-100">
                    {current.title}
                  </div>
                  <div className="text-[11px] font-mono text-amber-200/80">
                    {current.coords}
                  </div>
                </div>
              </div>

              {/* Handwriting caption beneath polaroid */}
              <div className="mt-3.5 px-2">
                <p className="font-handwriting text-xl text-[#3b2e23] leading-snug">
                  "{current.caption}"
                </p>
                <div className="mt-2 flex items-center justify-between text-[11px] font-serif italic text-[#8a7663]">
                  <span>Shot on 35mm Portra 400</span>
                  <span>Hand-stamped in journal</span>
                </div>
              </div>
            </div>

            {/* Right Interactive Scrapbook Sticky Notes & Sticker Board (Span 7) */}
            <div className="lg:col-span-7 space-y-6">
              {/* Layered Sticky Notes */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {pinnedNotes.map((note) => (
                  <div
                    key={note.id}
                    className={`p-4 rounded shadow-sm border border-[#ded3bf] ${note.color} rotate-[0.8deg] relative flex flex-col justify-between min-h-32`}
                  >
                    {/* Metal pin simulation */}
                    <div className="w-3 h-3 rounded-full bg-red-600/80 shadow-xs border border-white mx-auto -mt-2 mb-1" />
                    <p className="font-handwriting text-lg text-[#2e241c] leading-tight">
                      {note.text}
                    </p>
                    <div className="mt-3 text-[10px] font-serif text-[#857361] flex justify-between">
                      <span>{note.date}</span>
                      <span>Keepsake #0{note.id % 9 + 1}</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Add a Handwritten Field Note Form */}
              <form onSubmit={handleAddNote} className="bg-[#faf5ed] p-4 rounded-xl border border-[#d8c9b3] shadow-xs flex flex-col sm:flex-row gap-2">
                <input
                  type="text"
                  placeholder="Jot down a quick travel memory..."
                  value={newNote}
                  onChange={(e) => setNewNote(e.target.value)}
                  className="flex-1 px-3 py-2 bg-white border border-[#d8c9b3] rounded font-handwriting text-lg text-[#33261a] focus:outline-none"
                />
                <button
                  type="submit"
                  className="px-4 py-2 bg-[#4a3b2c] hover:bg-[#382b1e] text-[#f5ede2] font-serif text-xs uppercase tracking-wider rounded transition cursor-pointer"
                >
                  Pin to Board
                </button>
              </form>

              {/* Decorative Sticker Picker */}
              <div className="bg-[#faf5ed] p-4 rounded-xl border border-[#d8c9b3]">
                <div className="text-xs font-serif font-bold uppercase tracking-wider text-[#735e4a] mb-2.5">
                  Handmade Stamp &amp; Sticker Tray
                </div>
                <div className="flex flex-wrap gap-2">
                  {stickers.map((s) => (
                    <button
                      key={s}
                      onClick={() => setSelectedSticker(s)}
                      className={`px-3 py-1.5 rounded-full text-xs font-serif transition-transform cursor-pointer ${
                        selectedSticker === s
                          ? 'bg-amber-700 text-white scale-105 shadow-sm'
                          : 'bg-white border border-[#d8c9b3] text-[#544434] hover:bg-amber-50'
                      }`}
                    >
                      {s}
                    </button>
                  ))}
                </div>
                <div className="mt-3 text-xs text-[#806c57] font-serif italic">
                  Active adhesive stamp: <strong className="text-[#3b2e23]">{selectedSticker}</strong>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
