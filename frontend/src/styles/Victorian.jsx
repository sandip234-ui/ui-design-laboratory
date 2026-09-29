import React, { useState } from 'react';
import { SectionHeader } from '../components/SectionHeader';

export const Victorian = ({ styleData, prevStyle, nextStyle, onNavigate }) => {
  const [activeFolio, setActiveFolio] = useState('Folio I: Royal Herbarium');
  const [magnification, setMagnification] = useState(12);

  const folios = [
    { title: 'Folio I: Royal Herbarium', specimen: 'Atropa Belladonna L.', date: 'Anno Domini 1874', plate: 'Plate XLVIII' },
    { title: 'Folio II: Lunar Astrometry', specimen: 'Mare Tranquillitatis Crater', date: 'Anno Domini 1882', plate: 'Plate IX' },
    { title: 'Folio III: Pneumatic Apparatus', specimen: 'High-Pressure Steam Valve', date: 'Anno Domini 1891', plate: 'Plate CXII' },
  ];

  const current = folios.find((f) => f.title === activeFolio) || folios[0];

  return (
    <section id="victorian" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#140a10] text-[#eedcc5] relative overflow-hidden font-editorial">
      {/* Deep Antique Velvet Ambient Vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(5,2,4,0.7)_100%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <SectionHeader
          styleData={styleData}
          prevStyle={prevStyle}
          nextStyle={nextStyle}
          onNavigate={onNavigate}
        />

        {/* Ornate Engraved Victorian Cabinet */}
        <div className="mt-8 rounded-2xl p-6 sm:p-12 bg-[#1b0d16] border-2 border-[#b89344]/40 shadow-[0_15px_60px_rgba(0,0,0,0.9)] relative">
          {/* Filigree Corner Flourishes */}
          <div className="absolute top-2 left-2 text-[#b89344] text-xs font-cinzel select-none">❧ ❖ ☙</div>
          <div className="absolute top-2 right-2 text-[#b89344] text-xs font-cinzel select-none">❧ ❖ ☙</div>
          <div className="absolute bottom-2 left-2 text-[#b89344] text-xs font-cinzel select-none">❧ ❖ ☙</div>
          <div className="absolute bottom-2 right-2 text-[#b89344] text-xs font-cinzel select-none">❧ ❖ ☙</div>

          {/* Symmetrical Heraldic Header */}
          <div className="text-center pb-8 border-b-2 border-double border-[#b89344]/30">
            <div className="font-cinzel text-xs uppercase tracking-[0.35em] text-[#d4af37]">
              VICTORIA REGINA ET IMPERATRIX // REGISTRY NO. 1874
            </div>
            <h3 className="text-3xl sm:text-5xl font-cinzel font-bold text-white mt-2 tracking-wide">
              The Royal Philosophical Society
            </h3>
            <p className="text-xs sm:text-sm text-[#c9b398] mt-2 italic max-w-xl mx-auto">
              Curated annals of natural history, microscopic specimens, and mechanical wonders.
            </p>
          </div>

          {/* Folio Registry Selector */}
          <div className="flex justify-center flex-wrap gap-3 mt-6">
            {folios.map((f) => (
              <button
                key={f.title}
                onClick={() => setActiveFolio(f.title)}
                className={`px-4 py-2 rounded-sm text-xs font-cinzel tracking-wider uppercase transition cursor-pointer border ${
                  activeFolio === f.title
                    ? 'border-[#d4af37] bg-[#b89344]/20 text-[#ffe29c] shadow-[0_0_15px_rgba(212,175,55,0.2)]'
                    : 'border-[#b89344]/25 bg-black/30 text-[#ad9982] hover:text-white'
                }`}
              >
                {f.title.split(':')[0]}
              </button>
            ))}
          </div>

          {/* Engraved Specimen Plate Showcase */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mt-10 items-center">
            {/* Left Engraved Plate Frame (Span 5) */}
            <div className="md:col-span-5 p-6 rounded-lg bg-[#140910] border-2 border-[#b89344]/40 text-center relative shadow-inner">
              <div className="text-[10px] font-cinzel text-[#d4af37] uppercase tracking-[0.3em]">
                {current.plate}
              </div>
              <div className="my-6 p-8 border border-dashed border-[#b89344]/30 rounded flex flex-col items-center justify-center">
                <span className="text-5xl">🌿</span>
                <span className="font-editorial italic text-xl text-[#f3e3ce] mt-3">
                  {current.specimen}
                </span>
                <span className="text-[11px] font-cinzel text-[#a89078] mt-1">
                  PRESERVED IN DRY CELLULOSE
                </span>
              </div>
              <div className="text-[10px] font-cinzel text-[#8f7964] tracking-widest">
                ARCHIVED: {current.date}
              </div>
            </div>

            {/* Right Curatorial Ledger Data (Span 7) */}
            <div className="md:col-span-7 space-y-6">
              <div className="p-6 rounded-lg bg-black/40 border border-[#b89344]/20">
                <div className="flex items-center justify-between text-xs font-cinzel text-[#d4af37]">
                  <span>BRASS MICROSCOPE MAGNIFICATION</span>
                  <span>{magnification}00×</span>
                </div>
                <div className="mt-3">
                  <input
                    type="range"
                    min="4"
                    max="24"
                    value={magnification}
                    onChange={(e) => setMagnification(parseInt(e.target.value))}
                    className="w-full accent-[#d4af37] cursor-pointer"
                  />
                </div>
                <div className="flex justify-between text-[10px] font-cinzel text-[#8f7964] mt-2">
                  <span>ACHROMATIC OBJECTIVE LENS</span>
                  <span>FINE REVOLVING FOCUS</span>
                </div>
              </div>

              {/* Archival Note */}
              <div className="p-6 rounded-lg bg-[#24131e]/60 border border-[#b89344]/30">
                <h4 className="font-cinzel text-sm text-[#ffe29c] font-bold tracking-wider">
                  DISCOURSE ON NATURAL OBSERVATION
                </h4>
                <p className="text-xs text-[#d1bea9] mt-2 leading-relaxed italic">
                  "Upon careful examination under polarised illumination, the cellular capillaries exhibit unmistakable radial symmetry, adhering to the harmonic laws established by Mr. Darwin."
                </p>
                <div className="mt-4 pt-3 border-t border-[#b89344]/20 flex items-center justify-between text-[11px] font-cinzel text-[#a89078]">
                  <span>RECORDED BY ORDER OF COUNCIL</span>
                  <span className="text-[#d4af37]">SEALED IN APOTHECARY</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
