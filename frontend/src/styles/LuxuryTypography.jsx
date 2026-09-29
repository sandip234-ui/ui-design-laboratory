import React, { useState } from 'react';
import { SectionHeader } from '../components/SectionHeader';

export const LuxuryTypography = ({ styleData, prevStyle, nextStyle, onNavigate }) => {
  const [selectedSuite, setSelectedSuite] = useState('The Grand Penthouse');
  const [butlerService, setButlerService] = useState(true);
  const [reserved, setReserved] = useState(false);

  const residences = [
    {
      name: 'The Grand Penthouse',
      location: 'Geneva / Lakefront 1888',
      rate: '€ 14,500',
      specs: '680 m² • Private Helipad • Sommelier Vault',
      description: 'An architectural symphony of French limestone, hand-carved walnut panelling, and uninterrupted Alpine vistas.',
    },
    {
      name: 'The Royal Belvedere',
      location: 'Cote d\'Azur / Cap Ferrat',
      rate: '€ 19,200',
      specs: '820 m² • Cliffside Infinity Basin • Yacht Berth',
      description: 'Perched upon private cliffs, offering Mediterranean breezes, antique crystal chandeliers, and discreet butlerage.',
    },
    {
      name: 'The Kyoto Sukiya Pavilion',
      location: 'Kyoto / Higashiyama Sanctuary',
      rate: '€ 12,800',
      specs: '540 m² • Hinoki Onsen • 300-Yr Moss Garden',
      description: 'Traditional joinery crafted without a single nail, featuring private tea ceremony chambers and ancient cedar aromas.',
    },
  ];

  const current = residences.find((r) => r.name === selectedSuite) || residences[0];

  return (
    <section id="luxury-typography" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#09090b] text-[#eae5dc] relative overflow-hidden font-editorial">
      {/* Subtle Gold Ambient Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-96 h-96 bg-amber-400/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <SectionHeader
          styleData={styleData}
          prevStyle={prevStyle}
          nextStyle={nextStyle}
          onNavigate={onNavigate}
        />

        {/* Haute Concierge Typography Pavilion */}
        <div className="mt-10 rounded-2xl p-8 sm:p-14 bg-[#111115] border border-amber-400/20 shadow-[0_20px_50px_rgba(0,0,0,0.8)]">
          {/* Top Editorial Monogram */}
          <div className="flex flex-col md:flex-row md:items-end justify-between pb-8 border-b border-white/10 gap-6">
            <div>
              <div className="text-[10px] font-sans uppercase tracking-[0.35em] text-amber-300/80 font-semibold mb-2">
                HAUTE HÔTELLERIE // PRIVATE SANCTUARY
              </div>
              <h3 className="text-3xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-white leading-tight">
                Maison de l'Élégance
              </h3>
            </div>

            {/* Suite Tabs */}
            <div className="flex flex-wrap gap-2 text-xs font-sans tracking-widest uppercase">
              {residences.map((r) => (
                <button
                  key={r.name}
                  onClick={() => {
                    setSelectedSuite(r.name);
                    setReserved(false);
                  }}
                  className={`px-4 py-2 rounded-full transition-all cursor-pointer ${
                    selectedSuite === r.name
                      ? 'bg-amber-100 text-stone-900 font-semibold shadow-md'
                      : 'border border-white/15 text-stone-400 hover:text-white hover:border-amber-300/40'
                  }`}
                >
                  {r.name}
                </button>
              ))}
            </div>
          </div>

          {/* Editorial Residence Profile */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mt-12 items-center">
            {/* Left Typography Column (Span 7) */}
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-sans tracking-[0.25em] text-amber-400 uppercase">
                {current.location}
              </span>

              <h4 className="text-3xl sm:text-4xl text-white font-normal leading-snug">
                "{current.description}"
              </h4>

              <div className="pt-4 border-t border-white/10 text-xs font-sans text-stone-400 tracking-wider">
                {current.specs}
              </div>

              {/* Concierge Amenity Toggle */}
              <div className="pt-2 flex items-center gap-3">
                <button
                  onClick={() => setButlerService(!butlerService)}
                  className="flex items-center gap-2 text-xs font-sans tracking-widest uppercase text-amber-200/90 cursor-pointer"
                >
                  <span className={`w-4 h-4 rounded-full border border-amber-400/50 flex items-center justify-center ${butlerService ? 'bg-amber-400 text-black' : ''}`}>
                    {butlerService && '✓'}
                  </span>
                  <span>Dedicated 24h White-Glove Valet &amp; Butler</span>
                </button>
              </div>
            </div>

            {/* Right Financial & Reservation Card (Span 5) */}
            <div className="lg:col-span-5 p-8 rounded-xl bg-white/2 border border-amber-400/25 flex flex-col justify-between min-h-72">
              <div>
                <span className="text-[11px] font-sans uppercase tracking-[0.3em] text-stone-400">
                  Nightly Residence Tariff
                </span>
                <div className="text-4xl sm:text-5xl font-light text-amber-100 mt-2 tracking-tight">
                  {current.rate}
                </div>
                <div className="text-xs font-sans text-stone-500 mt-1">
                  Inclusive of private aviation reception and cellar tasting
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-white/10">
                <button
                  onClick={() => setReserved(true)}
                  disabled={reserved}
                  className={`w-full py-3.5 text-xs font-sans uppercase tracking-[0.3em] font-bold rounded-lg transition cursor-pointer ${
                    reserved
                      ? 'bg-emerald-900/60 border border-emerald-500 text-emerald-200'
                      : 'bg-amber-400 hover:bg-amber-300 text-stone-950 shadow-lg shadow-amber-500/10'
                  }`}
                >
                  {reserved ? 'VIP INQUIRY DISPATCHED ✓' : 'REQUEST PRIVATE APPOINTMENT'}
                </button>
                <div className="text-center text-[10px] font-sans tracking-widest text-stone-500 uppercase mt-3">
                  STRICT CONFIDENTIALITY &amp; SECURITY PROTOCOLS ENFORCED
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
