import React, { useState } from 'react';
import { SectionHeader } from '../components/SectionHeader';

export const ConceptualSketch = ({ styleData, prevStyle, nextStyle, onNavigate }) => {
  const [wireframeActive, setWireframeActive] = useState('Blueprint A: Spatial Canvas');
  const [toleranceLevel, setToleranceLevel] = useState(0.85);
  const [markedReady, setMarkedReady] = useState(false);

  const modules = [
    { name: 'Blueprint A: Spatial Canvas', notes: 'Rough 2D drafting coordinates; snap to nearest 8px grid.', scale: '1:50' },
    { name: 'Blueprint B: Vector Node Graph', notes: 'Bezier control points sketched in freehand pencil.', scale: '1:25' },
    { name: 'Blueprint C: Elevation Cross-Section', notes: 'Structural truss loads calculated with hand annotations.', scale: '1:100' },
  ];

  return (
    <section id="conceptual-sketch" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#f6f8fb] text-slate-800 relative overflow-hidden font-mono">
      {/* Drafting Graph Paper Background Grid */}
      <div className="absolute inset-0 graph-paper pointer-events-none opacity-80" />

      {/* Pencil margin scribble note */}
      <div className="hidden lg:block absolute top-24 right-16 rotate-6 font-handwriting text-2xl text-blue-600/70 pointer-events-none">
        ~ check load tolerance before finalizing draft! ↗
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <SectionHeader
          styleData={styleData}
          prevStyle={prevStyle}
          nextStyle={nextStyle}
          onNavigate={onNavigate}
        />

        {/* Draftsman Sketchbook Pad */}
        <div className="mt-8 rounded-2xl p-6 sm:p-10 bg-white/90 border-2 border-dashed border-blue-500/50 shadow-[6px_6px_0px_rgba(37,99,235,0.15)] relative">
          {/* Header Bar */}
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pb-6 border-b-2 border-dashed border-slate-300">
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xl">📐</span>
                <span className="text-xs uppercase tracking-widest text-blue-600 font-bold">
                  PROJECT SPEC // CONCEPTUAL DRAFT v0.4b
                </span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight mt-1">
                Architectural Ideation Canvas
              </h3>
            </div>

            {/* Blueprint Switcher */}
            <div className="flex flex-wrap gap-2 text-xs">
              {modules.map((m) => (
                <button
                  key={m.name}
                  onClick={() => setWireframeActive(m.name)}
                  className={`px-3 py-1.5 rounded border transition cursor-pointer font-bold ${
                    wireframeActive === m.name
                      ? 'bg-blue-600 text-white border-blue-700 shadow-sm'
                      : 'bg-white text-slate-700 border-slate-300 hover:border-blue-400'
                  }`}
                >
                  {m.name.split(':')[0]}
                </button>
              ))}
            </div>
          </div>

          {/* Hand-Drawn Spec Widgets */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            {/* Widget 1: Rough Dimensions */}
            <div className="p-5 rounded-xl border border-dashed border-slate-400 bg-blue-50/30 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between text-xs text-blue-700 font-bold">
                  <span>SCALE FACTOR</span>
                  <span className="font-handwriting text-lg text-slate-600">±0.02mm error</span>
                </div>
                <div className="text-3xl font-bold text-slate-900 mt-2 font-mono">1:50 METRIC</div>
                <p className="font-handwriting text-xl text-slate-600 mt-3 leading-snug">
                  "Ensure timber joins have enough clearance for seasonal humidity expansion."
                </p>
              </div>

              <div className="mt-4 pt-2 border-t border-dashed border-slate-300 text-xs text-slate-500 flex justify-between">
                <span>DRAFT: ARCH-08</span>
                <span>STATUS: IN PROGRESS</span>
              </div>
            </div>

            {/* Widget 2: Pencil Tolerance Slider */}
            <div className="p-5 rounded-xl border border-dashed border-slate-400 bg-blue-50/30 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between text-xs text-blue-700 font-bold">
                  <span>PENCIL TOLERANCE</span>
                  <span className="text-base text-slate-900 font-bold">{toleranceLevel}</span>
                </div>
                <p className="text-xs text-slate-500 mt-1">Adjust stroke jitter &amp; curvature rounding</p>
                <div className="mt-4">
                  <input
                    type="range"
                    min="0.1"
                    max="1.0"
                    step="0.05"
                    value={toleranceLevel}
                    onChange={(e) => setToleranceLevel(parseFloat(e.target.value))}
                    className="w-full accent-blue-600 cursor-pointer"
                  />
                </div>
              </div>

              <div className="mt-4 font-handwriting text-lg text-blue-600">
                &gt; Current line dampening: {(toleranceLevel * 100).toFixed(0)}%
              </div>
            </div>

            {/* Widget 3: Hand Approval Stamp */}
            <div className="p-5 rounded-xl border border-dashed border-slate-400 bg-blue-50/30 flex flex-col justify-between">
              <div>
                <div className="text-xs text-blue-700 font-bold uppercase tracking-wider">
                  DESIGN LEAD REVIEW
                </div>
                <div className="mt-3 p-3 border-2 border-dashed border-blue-400 rounded-lg bg-white text-center">
                  <span className="font-handwriting text-2xl text-blue-700 font-bold">
                    {markedReady ? 'APPROVED FOR CAD MODELING ✓' : 'NEEDS SECONDARY AUDIT ?'}
                  </span>
                </div>
              </div>

              <button
                onClick={() => setMarkedReady(!markedReady)}
                className="mt-4 py-2 px-3 bg-blue-600 hover:bg-blue-700 text-white rounded text-xs font-bold uppercase tracking-wider transition cursor-pointer shadow-xs"
              >
                {markedReady ? 'RESET ANNOTATION' : 'STAMP APPROVAL ✏️'}
              </button>
            </div>
          </div>

          {/* Active Blueprint Diagram Box */}
          <div className="mt-8 border-2 border-dashed border-blue-400 rounded-xl p-6 bg-white relative">
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-bold uppercase tracking-wider text-blue-600">
                FIGURE 1.0 — {wireframeActive}
              </span>
              <span className="font-handwriting text-lg text-slate-500">
                Pencil draft rendered on 80g grid vellum
              </span>
            </div>

            {/* Hand-Drawn Mock Wireframe Boxes */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              <div className="p-4 border-2 border-dashed border-slate-400 rounded bg-slate-50/60 text-center">
                <div className="font-handwriting text-xl text-slate-700">[ Navigation Strip ]</div>
                <div className="text-[11px] text-slate-500 mt-1 font-mono">h: 64px • fixed top</div>
              </div>
              <div className="p-4 border-2 border-dashed border-blue-400 rounded bg-blue-50/40 text-center">
                <div className="font-handwriting text-xl text-blue-700">[ Hero Wireframe ]</div>
                <div className="text-[11px] text-blue-600 mt-1 font-mono">2-col layout • CTA button</div>
              </div>
              <div className="p-4 border-2 border-dashed border-slate-400 rounded bg-slate-50/60 text-center">
                <div className="font-handwriting text-xl text-slate-700">[ Interactive Canvas ]</div>
                <div className="text-[11px] text-slate-500 mt-1 font-mono">SVG vector renderer</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
