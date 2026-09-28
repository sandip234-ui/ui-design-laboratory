import React from 'react';
import { SectionHeader } from '../components/SectionHeader';

export const SwissStyle = ({ styleData, prevStyle, nextStyle, onNavigate }) => {
  return (
    <section id="swiss-style" className="py-20 px-4 sm:px-6 lg:px-8 bg-white text-black font-sans-clean">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          styleData={styleData}
          prevStyle={prevStyle}
          nextStyle={nextStyle}
          onNavigate={onNavigate}
        />

        {/* International Typographic Style Grid Chassis */}
        <div className="border-t-4 border-black pt-8">
          {/* Main Top Grid: Basel Header */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-10 border-b border-black">
            <div className="md:col-span-4">
              <span className="text-xs uppercase tracking-widest text-[#dc2626] font-bold block mb-2">
                01 / TYPOGRAFISCHE MONOGRAPHIE
              </span>
              <h3 className="text-4xl sm:text-5xl font-extrabold tracking-tighter leading-none text-black">
                BASEL DESIGN ARCHIVE
              </h3>
            </div>
            <div className="md:col-span-8 flex flex-col justify-end">
              <p className="text-base sm:text-lg font-normal text-black leading-relaxed max-w-2xl">
                The objective grid system eliminates subjective decorative whim in favor of universal mathematical communication. Clarity, precision, and asymmetric equilibrium.
              </p>
            </div>
          </div>

          {/* Mathematical Columns Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-black border-b border-black">
            {/* Column 1 */}
            <div className="py-8 md:pr-8">
              <div className="flex items-baseline justify-between mb-4">
                <span className="text-xs font-mono font-bold text-black uppercase">GRID RATIO</span>
                <span className="w-3 h-3 bg-[#dc2626]" />
              </div>
              <div className="text-5xl sm:text-6xl font-black tracking-tighter text-black">
                1 : 1.618
              </div>
              <p className="text-xs text-gray-700 mt-4 leading-normal">
                Strict golden proportion columns governing horizontal and vertical baselines.
              </p>
            </div>

            {/* Column 2 */}
            <div className="py-8 md:px-8">
              <div className="flex items-baseline justify-between mb-4">
                <span className="text-xs font-mono font-bold text-black uppercase">TYPE SCALE</span>
                <span className="text-xs font-mono">DIN 1451</span>
              </div>
              <div className="text-5xl sm:text-6xl font-black tracking-tighter text-black">
                72 / 12 PT
              </div>
              <p className="text-xs text-gray-700 mt-4 leading-normal">
                Mathematical typographic hierarchy with zero ad-hoc intermediate point sizes.
              </p>
            </div>

            {/* Column 3 */}
            <div className="py-8 md:pl-8">
              <div className="flex items-baseline justify-between mb-4">
                <span className="text-xs font-mono font-bold text-black uppercase">CATALOGED WORKS</span>
                <span className="text-xs font-mono text-[#dc2626]">1957 — PRESENT</span>
              </div>
              <div className="text-5xl sm:text-6xl font-black tracking-tighter text-black">
                1,957
              </div>
              <p className="text-xs text-gray-700 mt-4 leading-normal">
                Archived artifacts from Josef Müller-Brockmann and Armin Hofmann.
              </p>
            </div>
          </div>

          {/* Mathematical Alignment Table / Manifest */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pt-8">
            <div className="md:col-span-4">
              <h4 className="text-xl font-bold uppercase tracking-tight text-black">
                CORE PRINCIPLES
              </h4>
              <p className="text-xs text-gray-600 mt-2">
                Pure rationalist design methodology.
              </p>
            </div>
            <div className="md:col-span-8 space-y-4">
              <div className="flex items-baseline justify-between border-b border-black pb-2 text-xs">
                <span className="font-bold">01. OBJECTIVE LEGIBILITY</span>
                <span className="text-gray-700">Content primacy over decorative styling</span>
              </div>
              <div className="flex items-baseline justify-between border-b border-black pb-2 text-xs">
                <span className="font-bold">02. ASYMMETRIC BALANCE</span>
                <span className="text-gray-700">Dynamic tension through strict alignment</span>
              </div>
              <div className="flex items-baseline justify-between border-b border-black pb-2 text-xs">
                <span className="font-bold">03. COLOR AS ACCENT ONLY</span>
                <span className="text-[#dc2626] font-bold">Monochrome base with Swiss Red signal</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
