import React, { useState } from 'react';
import { SectionHeader } from '../components/SectionHeader';

export const OrganicMinimalism = ({ styleData, prevStyle, nextStyle, onNavigate }) => {
  const [activeBlend, setActiveBlend] = useState('Terracotta Raw');

  return (
    <section id="organic-minimalism" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#f5f2eb] text-[#332f2b]">
      <div className="max-w-7xl mx-auto">
        <div className="text-[#332f2b]">
          <SectionHeader
            styleData={styleData}
            prevStyle={prevStyle}
            nextStyle={nextStyle}
            onNavigate={onNavigate}
          />
        </div>

        {/* Japandi / Wabi-Sabi Oatmeal & Travertine Sanctuary */}
        <div className="rounded-[36px] p-6 sm:p-12 bg-[#ebe6dd] border border-[#d6cfc4] shadow-[0_12px_40px_rgba(0,0,0,0.04)] max-w-5xl mx-auto">
          {/* Header Bar */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 pb-8 border-b border-[#ded7cb]">
            <div>
              <span className="text-xs uppercase tracking-[0.25em] text-[#8c8275] font-medium">
                ATELIER CERAMICS // WABI-SABI
              </span>
              <h3 className="text-3xl sm:text-4xl font-light text-[#292522] tracking-tight font-serif mt-1">
                Kanso Pottery Archive
              </h3>
            </div>

            {/* Earth Pigment Chip */}
            <div className="px-4 py-2 rounded-full bg-[#f2eee6] border border-[#d6cfc4] text-xs font-serif italic text-[#635c52]">
              Batch No. 09 — Autumn Firing
            </div>
          </div>

          {/* Travertine Curved Metric Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            {/* Card 1 */}
            <div className="p-8 rounded-[28px] bg-[#f5f2eb] border border-[#ded7cb] flex flex-col justify-between">
              <div>
                <span className="text-xs uppercase tracking-widest text-[#8c8275]">Wood Kiln Heat</span>
                <div className="text-4xl font-light text-[#292522] mt-3 font-serif">1,240°C</div>
              </div>
              <p className="text-xs text-[#8c8275] mt-6 font-serif italic">
                Stoneware vitrification peak
              </p>
            </div>

            {/* Card 2 */}
            <div className="p-8 rounded-[28px] bg-[#f5f2eb] border border-[#ded7cb] flex flex-col justify-between">
              <div>
                <span className="text-xs uppercase tracking-widest text-[#8c8275]">Handthrown Vessels</span>
                <div className="text-4xl font-light text-[#292522] mt-3 font-serif">48 / 50</div>
              </div>
              <p className="text-xs text-[#8c8275] mt-6 font-serif italic">
                Small-batch mindful production
              </p>
            </div>

            {/* Card 3 */}
            <div className="p-8 rounded-[28px] bg-[#f5f2eb] border border-[#ded7cb] flex flex-col justify-between">
              <div>
                <span className="text-xs uppercase tracking-widest text-[#8c8275]">Natural Ash Glaze</span>
                <div className="text-4xl font-light text-[#292522] mt-3 font-serif">100%</div>
              </div>
              <p className="text-xs text-[#8c8275] mt-6 font-serif italic">
                Sourced pine and oak firewood
              </p>
            </div>
          </div>

          {/* Tactile Material Blends & Contemplation Section */}
          <div className="mt-8 p-8 rounded-[28px] bg-[#f2eee6] border border-[#ded7cb] flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <h4 className="text-base font-serif italic text-[#292522]">
                "Nothing lasts, nothing is finished, and nothing is perfect."
              </h4>
              <p className="text-xs text-[#8c8275] mt-2 max-w-xl leading-relaxed">
                Celebrating the deliberate irregularities of clay, unbleached linen textures, and the quiet beauty of natural asymmetry.
              </p>
            </div>

            {/* Earth Blend Selector */}
            <div className="flex gap-2">
              {['Terracotta Raw', 'Oatmeal Stoneware'].map((blend) => (
                <button
                  key={blend}
                  onClick={() => setActiveBlend(blend)}
                  className={`px-4 py-2 rounded-full text-xs font-serif transition cursor-pointer ${
                    activeBlend === blend
                      ? 'bg-[#332f2b] text-[#f5f2eb]'
                      : 'bg-[#ebe6dd] text-[#635c52] hover:bg-[#ded7cb]'
                  }`}
                >
                  {blend}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
