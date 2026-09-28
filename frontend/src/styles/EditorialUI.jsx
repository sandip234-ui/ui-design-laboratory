import React from 'react';
import { SectionHeader } from '../components/SectionHeader';

export const EditorialUI = ({ styleData, prevStyle, nextStyle, onNavigate }) => {
  return (
    <section id="editorial-ui" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#17181c] text-[#e8e6e3]">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          styleData={styleData}
          prevStyle={prevStyle}
          nextStyle={nextStyle}
          onNavigate={onNavigate}
        />

        {/* Broadsheet Newspaper / Literary Magazine Shell */}
        <div className="border-t-2 border-b-2 border-white/20 py-8 max-w-6xl mx-auto">
          {/* Masthead Folio */}
          <div className="flex flex-col sm:flex-row items-center justify-between border-b border-white/10 pb-4 text-xs font-serif tracking-widest uppercase text-slate-400">
            <span>VOL. XXIV — NO. 04</span>
            <span className="text-sm font-sans tracking-[0.3em] font-semibold text-white">THE DESIGN CHRONICLE</span>
            <span>SEPTEMBER DISPATCH</span>
          </div>

          {/* Headline Banner */}
          <div className="text-center py-10 border-b border-white/10">
            <h3 className="text-4xl sm:text-6xl md:text-7xl font-editorial italic font-normal text-white tracking-tight">
              The Architecture of the Digital Broadsheet
            </h3>
            <p className="mt-3 text-sm sm:text-base font-serif text-slate-300 max-w-2xl mx-auto italic">
              "How classical typography, generous column gutters, and literary pull quotes restore dignity to information density."
            </p>
          </div>

          {/* Three Column Editorial Layout with Pull Quote */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pt-8">
            {/* Column 1: Editorial Stats */}
            <div className="md:col-span-3 border-r border-white/10 pr-6">
              <span className="text-[11px] font-sans font-bold uppercase tracking-wider text-slate-400">
                CIRCULATION INDEX
              </span>
              <div className="text-4xl font-editorial italic text-white mt-2">142,800</div>
              <p className="text-xs font-serif text-slate-400 mt-2 leading-relaxed">
                Global paid print & digital subscribers across 68 countries.
              </p>

              <div className="mt-8 pt-6 border-t border-white/10">
                <span className="text-[11px] font-sans font-bold uppercase tracking-wider text-slate-400">
                  ENGAGEMENT SPAN
                </span>
                <div className="text-4xl font-editorial italic text-white mt-2">18.4 min</div>
                <p className="text-xs font-serif text-slate-400 mt-2 leading-relaxed">
                  Average uninterrupted deep-reading dwell time.
                </p>
              </div>
            </div>

            {/* Column 2: Main Narrative & Column Text */}
            <div className="md:col-span-5 space-y-4 text-sm font-serif text-slate-300 leading-relaxed text-justify">
              <p className="first-letter:text-5xl first-letter:font-editorial first-letter:float-left first-letter:mr-3 first-letter:text-white">
                When interface designers surrendered typography to the lowest common denominator of generic software cards, digital media lost its emotional resonance. The printed broadsheet was never just ink on cellulose; it was a calibrated hierarchy designed to guide human contemplation through complex civic affairs.
              </p>
              <p>
                By restoring classical serifs, measured column widths, and deliberate asymmetry, digital dashboards reclaim an intellectual presence that no generic SaaS card can match.
              </p>
            </div>

            {/* Column 3: Pull Quote & Critic Dispatch */}
            <div className="md:col-span-4 pl-0 md:pl-4 flex flex-col justify-between">
              <div className="p-6 rounded-none bg-white/3 border-l-2 border-white/40">
                <span className="text-3xl font-editorial text-slate-400">“</span>
                <p className="font-editorial italic text-lg sm:text-xl text-white leading-snug -mt-3">
                  Beauty in design is not the absence of complexity, but the absolute triumph of typographic proportion over chaos.
                </p>
                <div className="mt-4 text-xs font-sans uppercase tracking-widest text-slate-400">
                  — The Chief Typographer
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-white/10 flex justify-between text-xs font-serif italic text-slate-400">
                <span>Section B: Arts & Letters</span>
                <span>Page 04</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
