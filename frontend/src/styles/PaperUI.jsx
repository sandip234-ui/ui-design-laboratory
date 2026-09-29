import React, { useState } from 'react';
import { SectionHeader } from '../components/SectionHeader';

export const PaperUI = ({ styleData, prevStyle, nextStyle, onNavigate }) => {
  const [dogEarFolded, setDogEarFolded] = useState(true);
  const [paperStock, setPaperStock] = useState('120g Vellum Smooth');
  const [docContent, setDocContent] = useState('Manuscript Note № 51: All 51 design systems have achieved cohesive manifestation across typography, depth, and spatial ergonomics.');

  const stocks = ['80g Cotton Laid', '120g Vellum Smooth', '300g Heavy Cardstock'];

  return (
    <section id="paper-ui" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#f5f2eb] text-[#2c2824] relative overflow-hidden font-editorial">
      {/* Subtle Warm Paper Glow */}
      <div className="absolute top-10 left-1/3 w-80 h-80 bg-amber-200/20 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <SectionHeader
          styleData={styleData}
          prevStyle={prevStyle}
          nextStyle={nextStyle}
          onNavigate={onNavigate}
        />

        {/* Tactile Layered Paper Stack */}
        <div className="mt-8 max-w-5xl mx-auto relative">
          {/* Underneath Ghost Sheets Creating Physical Paper Depth */}
          <div className="absolute inset-0 bg-[#ebe5da] rounded-2xl rotate-[1.5deg] shadow-md -z-10 translate-y-2 translate-x-1 pointer-events-none border border-[#d9d0c1]" />
          <div className="absolute inset-0 bg-[#e3dcce] rounded-2xl -rotate-1 shadow-sm -z-20 translate-y-4 -translate-x-1 pointer-events-none border border-[#d1c7b5]" />

          {/* Primary Paper Document Sheet */}
          <div className={`rounded-2xl p-6 sm:p-12 bg-[#faf8f4] border border-[#dcd4c6] shadow-[0_12px_40px_rgba(0,0,0,0.06)] relative transition-all ${dogEarFolded ? 'paper-corner' : ''}`}>
            {/* Brass Binder Clip Top Anchor */}
            <div className="absolute -top-3 left-12 px-4 py-1 rounded bg-[#b8974a] text-black font-sans text-[10px] font-bold tracking-widest uppercase shadow-sm border border-[#a18137] flex items-center gap-1.5 select-none">
              <span>📎</span>
              <span>STATIONERY SPEC NO. 51</span>
            </div>

            {/* Header Bar */}
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pb-6 border-b border-[#ded5c6]">
              <div>
                <span className="text-xs uppercase tracking-[0.25em] text-[#8c7456] font-sans font-semibold">
                  MATERIAL SKEUOMORPHISM // STACKED SHEET METAPHOR
                </span>
                <h3 className="text-3xl sm:text-4xl font-normal text-[#241f1b] mt-1">
                  Tactile Stationery Archive
                </h3>
              </div>

              {/* Dog-Ear Corner Toggle */}
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setDogEarFolded(!dogEarFolded)}
                  className="px-3.5 py-1.5 rounded-full border border-[#c9bead] bg-white text-xs font-sans font-medium text-[#4a3e31] hover:bg-[#f4efe4] transition cursor-pointer shadow-xs"
                >
                  {dogEarFolded ? 'UNFOLD CORNER ↗' : 'DOG-EAR FOLD ↘'}
                </button>
              </div>
            </div>

            {/* Paper Stock Weight Selector */}
            <div className="mt-6 flex flex-wrap items-center gap-2 text-xs font-sans">
              <span className="text-[#8c7456] font-semibold">PAPER STOCK:</span>
              {stocks.map((stock) => (
                <button
                  key={stock}
                  onClick={() => setPaperStock(stock)}
                  className={`px-3 py-1 rounded-full transition cursor-pointer ${
                    paperStock === stock
                      ? 'bg-[#2c2824] text-[#faf8f4] font-bold shadow-xs'
                      : 'bg-white border border-[#ded5c6] text-[#635749] hover:bg-[#f4eee2]'
                  }`}
                >
                  {stock}
                </button>
              ))}
            </div>

            {/* Ruled Legal Notepad Memorandum Area */}
            <div className="mt-8 p-6 rounded-xl bg-white border border-[#e3dacf] shadow-xs relative">
              <div className="text-[11px] font-mono text-[#8c7456] uppercase tracking-widest mb-3 flex items-center justify-between">
                <span>MEMO SHEET (LINE RULE: 24pt)</span>
                <span>STOCK: {paperStock}</span>
              </div>

              {/* Lined paper visual simulation */}
              <textarea
                value={docContent}
                onChange={(e) => setDocContent(e.target.value)}
                rows={4}
                className="w-full bg-transparent font-serif text-lg text-[#26211d] leading-relaxed resize-none focus:outline-none border-b border-dashed border-[#e0d6c8]"
              />

              <div className="mt-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs font-sans text-[#786957]">
                <span>Drafted with sepia iron gall ink &amp; brass nib</span>
                <span className="font-mono text-[10px]">WEIGHT: {paperStock.split(' ')[0]} • 100% ACID FREE</span>
              </div>
            </div>

            {/* Document Index Cards Row */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-8">
              <div className="p-5 rounded-xl bg-[#f5f0e6] border border-[#dcd3c3] flex flex-col justify-between">
                <div>
                  <div className="text-xs font-sans font-bold text-[#8c7456] uppercase">SHEET CALIPER</div>
                  <div className="text-2xl font-normal text-[#241f1b] mt-1">160 Microns</div>
                </div>
                <p className="text-xs text-[#736453] mt-3 italic">
                  High opacity with smooth fountain pen glide and zero ink bleed-through.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-[#f5f0e6] border border-[#dcd3c3] flex flex-col justify-between">
                <div>
                  <div className="text-xs font-sans font-bold text-[#8c7456] uppercase">FOLD MEMORY</div>
                  <div className="text-2xl font-normal text-[#241f1b] mt-1">Fiber Grain Long</div>
                </div>
                <p className="text-xs text-[#736453] mt-3 italic">
                  Resists cracking along structural spine hinges and corner creases.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-[#f5f0e6] border border-[#dcd3c3] flex flex-col justify-between">
                <div>
                  <div className="text-xs font-sans font-bold text-[#8c7456] uppercase">ARCHIVAL RATING</div>
                  <div className="text-2xl font-normal text-[#241f1b] mt-1">ISO 9706 (200 Yrs)</div>
                </div>
                <p className="text-xs text-[#736453] mt-3 italic">
                  Buffered with calcium carbonate to counteract atmospheric acidity.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
