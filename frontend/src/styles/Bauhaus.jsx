import React, { useState } from 'react';
import { SectionHeader } from '../components/SectionHeader';

export const Bauhaus = ({ styleData, prevStyle, nextStyle, onNavigate }) => {
  const [activeForm, setActiveForm] = useState('Circle');
  const [gridVisible, setGridVisible] = useState(true);
  const [rotationAngle, setRotationAngle] = useState(45);

  const forms = [
    { name: 'Circle', meaning: 'Fluidity & Continuous Movement', color: 'bg-red-600', text: 'text-red-600' },
    { name: 'Square', meaning: 'Stability & Structural Rigor', color: 'bg-blue-600', text: 'text-blue-600' },
    { name: 'Triangle', meaning: 'Dynamic Direction & Energy', color: 'bg-yellow-400', text: 'text-yellow-500' },
  ];

  return (
    <section id="bauhaus" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#f5f5f2] text-black relative overflow-hidden font-space">
      <div className="max-w-7xl mx-auto relative z-10">
        <SectionHeader
          styleData={styleData}
          prevStyle={prevStyle}
          nextStyle={nextStyle}
          onNavigate={onNavigate}
        />

        {/* Bauhaus Asymmetric Functional Canvas */}
        <div className="mt-8 p-6 sm:p-12 bg-white border-4 border-black shadow-[10px_10px_0px_#000] relative">
          {/* Header Bar */}
          <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6 pb-8 border-b-4 border-black">
            <div>
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-red-600">
                <span className="w-3 h-3 rounded-full bg-red-600 inline-block" />
                <span className="w-3 h-3 bg-blue-600 inline-block" />
                <span className="w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-b-12 border-b-yellow-400 inline-block" />
                <span>STAATLICHES BAUHAUS // DESSAU 1925</span>
              </div>
              <h3 className="text-4xl sm:text-6xl font-black text-black tracking-tighter uppercase mt-2">
                FORM FOLLOWS FUNCTION
              </h3>
            </div>

            {/* Grid Toggle Control */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => setGridVisible(!gridVisible)}
                className={`px-4 py-2 border-2 border-black font-black text-xs uppercase tracking-wider transition cursor-pointer ${
                  gridVisible
                    ? 'bg-black text-white shadow-[3px_3px_0px_#dc2626]'
                    : 'bg-white text-black hover:bg-stone-100'
                }`}
              >
                MODULAR GRID: {gridVisible ? 'ON' : 'OFF'}
              </button>
            </div>
          </div>

          {/* Three Primary Color Functional Pillars */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            {/* Red Circle Pillar */}
            <div className="p-6 border-3 border-black bg-stone-50 flex flex-col justify-between min-h-64 relative overflow-hidden">
              <div className="w-16 h-16 rounded-full bg-red-600 border-2 border-black mb-4" />
              <div>
                <span className="text-xs font-mono font-bold text-red-600 uppercase">ELEMENT 01 // ROT</span>
                <div className="text-2xl font-black uppercase tracking-tight mt-1">THE CIRCLE</div>
                <p className="text-xs text-stone-700 mt-2 font-medium leading-relaxed">
                  Represents continuous motion, warmth, and biological unity without sharp inflection points.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t-2 border-black flex justify-between text-xs font-mono font-bold">
                <span>ANGLE: 360°</span>
                <span>CHROMA: 100% RED</span>
              </div>
            </div>

            {/* Blue Square Pillar */}
            <div className="p-6 border-3 border-black bg-stone-50 flex flex-col justify-between min-h-64 relative overflow-hidden">
              <div className="w-16 h-16 bg-blue-600 border-2 border-black mb-4" />
              <div>
                <span className="text-xs font-mono font-bold text-blue-600 uppercase">ELEMENT 02 // BLAU</span>
                <div className="text-2xl font-black uppercase tracking-tight mt-1">THE SQUARE</div>
                <p className="text-xs text-stone-700 mt-2 font-medium leading-relaxed">
                  The bedrock of modern architecture, industrial mass production, and modular ergonomics.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t-2 border-black flex justify-between text-xs font-mono font-bold">
                <span>ORTHOGONAL: 90°</span>
                <span>CHROMA: 100% BLUE</span>
              </div>
            </div>

            {/* Yellow Triangle Pillar */}
            <div className="p-6 border-3 border-black bg-stone-50 flex flex-col justify-between min-h-64 relative overflow-hidden">
              <div className="w-0 h-0 border-l-32 border-l-transparent border-r-32 border-r-transparent border-b-56 border-b-yellow-400 mb-4 drop-shadow-[2px_2px_0px_#000]" />
              <div>
                <span className="text-xs font-mono font-bold text-yellow-600 uppercase">ELEMENT 03 // GELB</span>
                <div className="text-2xl font-black uppercase tracking-tight mt-1">THE TRIANGLE</div>
                <p className="text-xs text-stone-700 mt-2 font-medium leading-relaxed">
                  Directional thrust, dynamic equilibrium, and architectural truss distribution.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t-2 border-black flex justify-between text-xs font-mono font-bold">
                <span>TRIAD: 60°</span>
                <span>CHROMA: 100% YELLOW</span>
              </div>
            </div>
          </div>

          {/* Interactive Composition Matrix */}
          <div className="mt-8 p-8 border-4 border-black bg-stone-100 relative">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
              <div>
                <h4 className="text-lg font-black uppercase tracking-wide">
                  COMPOSITION LAB // ROTATIONAL MOMENTUM
                </h4>
                <p className="text-xs text-stone-600">Explore elementary kinetic equilibrium</p>
              </div>

              {/* Elementary Buttons */}
              <div className="flex gap-2">
                {forms.map((f) => (
                  <button
                    key={f.name}
                    onClick={() => setActiveForm(f.name)}
                    className={`px-3 py-1.5 border-2 border-black text-xs font-black uppercase cursor-pointer transition ${
                      activeForm === f.name
                        ? `${f.color} text-white shadow-[2px_2px_0px_#000]`
                        : 'bg-white text-black hover:bg-stone-200'
                    }`}
                  >
                    {f.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Interactive Geometry Stage */}
            <div className="h-44 border-2 border-black bg-white flex items-center justify-center relative overflow-hidden">
              {gridVisible && (
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#0000000d_1px,transparent_1px),linear-gradient(to_bottom,#0000000d_1px,transparent_1px)] bg-size-[24px_24px] pointer-events-none" />
              )}
              <div
                className={`transition-all duration-300 border-4 border-black shadow-[4px_4px_0px_#000] ${
                  activeForm === 'Circle'
                    ? 'w-24 h-24 rounded-full bg-red-600'
                    : activeForm === 'Square'
                    ? 'w-24 h-24 bg-blue-600'
                    : 'w-0 h-0 border-l-48 border-l-transparent border-r-48 border-r-transparent border-b-84 border-b-yellow-400 bg-transparent border-none'
                }`}
                style={{ transform: `rotate(${rotationAngle}deg)` }}
              />
            </div>

            <div className="mt-4 flex items-center gap-4">
              <span className="text-xs font-mono font-bold">ROTATION: {rotationAngle}°</span>
              <input
                type="range"
                min="0"
                max="360"
                value={rotationAngle}
                onChange={(e) => setRotationAngle(parseInt(e.target.value))}
                className="w-full accent-black cursor-pointer"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
