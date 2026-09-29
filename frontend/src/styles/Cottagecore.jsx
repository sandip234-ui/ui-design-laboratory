import React, { useState } from 'react';
import { SectionHeader } from '../components/SectionHeader';

export const Cottagecore = ({ styleData, prevStyle, nextStyle, onNavigate }) => {
  const [activeSeason, setActiveSeason] = useState('Autumn Harvest');
  const [steepSeconds, setSteepSeconds] = useState(180);
  const [steeping, setSteeping] = useState(false);

  const herbs = [
    { name: 'Wild Chamomile & Lavender', notes: 'Hand-picked at dawn along the meadow fence.', benefits: 'Calming sleep & dream recall', emoji: '🌼' },
    { name: 'Elderberry & Thyme Cordial', notes: 'Simmered in copper cauldron with raw clover honey.', benefits: 'Autumn immune resilience', emoji: '🫐' },
    { name: 'Heirloom Rosehip Confiture', notes: 'Gathered after the first crisp morning frost.', benefits: 'Vitamin C & radiant vitality', emoji: '🌹' },
  ];

  const toggleSteep = () => {
    if (steeping) {
      setSteeping(false);
    } else {
      setSteeping(true);
      const timer = setInterval(() => {
        setSteepSeconds((prev) => {
          if (prev <= 1) {
            clearInterval(timer);
            setSteeping(false);
            return 180;
          }
          return prev - 1;
        });
      }, 1000);
    }
  };

  return (
    <section id="cottagecore" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#faf6ee] text-[#362f26] relative overflow-hidden font-editorial">
      {/* Warm Meadow Sage & Lavender Ambient Glow */}
      <div className="absolute top-10 right-10 w-80 h-80 bg-emerald-500/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <SectionHeader
          styleData={styleData}
          prevStyle={prevStyle}
          nextStyle={nextStyle}
          onNavigate={onNavigate}
        />

        {/* Cozy Countryside Herbarium Board */}
        <div className="mt-8 rounded-4xl p-6 sm:p-12 bg-[#f4ece0] border-2 border-[#d9ccb8] shadow-[0_12px_36px_rgba(54,47,38,0.06)] relative">
          {/* Top Gingham Check Border Trim */}
          <div className="h-3 w-full gingham-pattern rounded-full mb-6 border border-[#d1bfab]" />

          {/* Header Bar */}
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pb-6 border-b border-[#ddcca6]">
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xl">🧺</span>
                <span className="text-xs uppercase tracking-[0.25em] text-[#2d5a27] font-sans font-bold">
                  COUNTRYSIDE APOTHECARY // HOMESPUN CRAFT
                </span>
              </div>
              <h3 className="text-3xl sm:text-4xl font-normal text-[#2b241c] mt-1">
                The Briarwood Cottage Garden
              </h3>
            </div>

            {/* Season Switcher */}
            <div className="flex flex-wrap gap-2 text-xs font-sans">
              {['Spring Seedlings', 'Summer Bloom', 'Autumn Harvest'].map((season) => (
                <button
                  key={season}
                  onClick={() => setActiveSeason(season)}
                  className={`px-4 py-2 rounded-full transition-all cursor-pointer ${
                    activeSeason === season
                      ? 'bg-[#2d5a27] text-[#faf6ee] font-bold shadow-sm'
                      : 'bg-white border border-[#d9ccb8] text-[#544739] hover:bg-[#faf6ee]'
                  }`}
                >
                  {season}
                </button>
              ))}
            </div>
          </div>

          {/* Pressed Botanical Specimen Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            {herbs.map((herb, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-white/80 border border-[#dfd2bf] shadow-xs flex flex-col justify-between hover:-translate-y-0.5 transition-transform"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="text-3xl">{herb.emoji}</span>
                    <span className="text-[11px] font-sans uppercase tracking-widest text-[#2d5a27] font-bold">
                      HERBARIUM № 0{idx + 1}
                    </span>
                  </div>
                  <h4 className="text-xl font-medium text-[#2b241c] mt-3">
                    {herb.name}
                  </h4>
                  <p className="font-handwriting text-xl text-[#5a4837] mt-2 leading-tight">
                    "{herb.notes}"
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-[#eedfcb] text-xs font-sans text-[#2d5a27] font-bold">
                  ✦ {herb.benefits}
                </div>
              </div>
            ))}
          </div>

          {/* Cozy Tea Kettle Steeper Widget */}
          <div className="mt-8 p-6 rounded-2xl bg-[#ebe0ce] border border-[#d5c4ad] flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <span className="text-4xl p-3 bg-white/60 rounded-full shadow-xs">🫖</span>
              <div>
                <h4 className="text-base font-medium text-[#2b241c]">
                  Wild Thyme &amp; Honey Infusion Kettle
                </h4>
                <p className="text-xs text-[#6e5a48] font-sans mt-0.5">
                  Steeping gentle countryside herbs at 85°C spring water
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="font-mono text-xl text-[#2d5a27] font-bold">
                {Math.floor(steepSeconds / 60)}:{(steepSeconds % 60).toString().padStart(2, '0')}
              </div>
              <button
                onClick={toggleSteep}
                className="px-4 py-2 bg-[#2d5a27] hover:bg-[#20421c] text-[#faf6ee] rounded-full text-xs font-sans font-bold uppercase tracking-wider transition cursor-pointer"
              >
                {steeping ? 'PAUSE STEEP ⏸' : 'BEGIN STEEP ⏳'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
