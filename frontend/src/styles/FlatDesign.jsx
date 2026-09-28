import React, { useState } from 'react';
import { SectionHeader } from '../components/SectionHeader';
import { IconCheck, IconActivity } from '../components/Icons';

export const FlatDesign = ({ styleData, prevStyle, nextStyle, onNavigate }) => {
  const [selectedService, setSelectedService] = useState('Compute');

  return (
    <section id="flat-design" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#ecf0f1] text-[#2c3e50]">
      <div className="max-w-7xl mx-auto">
        <div className="text-[#2c3e50]">
          <SectionHeader
            styleData={styleData}
            prevStyle={prevStyle}
            nextStyle={nextStyle}
            onNavigate={onNavigate}
          />
        </div>

        {/* Pure Flat UI Chromatic Tile Canvas */}
        <div className="bg-[#34495e] p-6 sm:p-10 text-white rounded-none">
          {/* Header Bar */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b-2 border-[#2c3e50]">
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
                FLAT CLOUD SERVICES // 2013 DIGITAL MATRIX
              </h3>
              <p className="text-xs text-[#bdc3c7] mt-1">Zero drop shadows • Zero gradients • Zero skeuomorphism</p>
            </div>

            {/* Flat Service Tabs */}
            <div className="flex bg-[#2c3e50]">
              {['Compute', 'Storage', 'Network'].map((s) => (
                <button
                  key={s}
                  onClick={() => setSelectedService(s)}
                  className={`px-4 py-2 text-xs font-bold uppercase transition cursor-pointer ${
                    selectedService === s
                      ? 'bg-[#1abc9c] text-white'
                      : 'text-[#bdc3c7] hover:text-white hover:bg-[#34495e]'
                  }`}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>

          {/* Solid Chromatic Flat Tiles */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
            {/* Tile 1: Turquoise */}
            <div className="p-6 bg-[#1abc9c] text-white">
              <span className="text-xs font-bold uppercase tracking-wider block opacity-90">
                ACTIVE VMS
              </span>
              <div className="text-4xl font-extrabold mt-3">248</div>
              <div className="mt-4 pt-2 border-t border-white/20 text-xs font-semibold">
                ● 100% OPERATIONAL
              </div>
            </div>

            {/* Tile 2: Peter River Blue */}
            <div className="p-6 bg-[#3498db] text-white">
              <span className="text-xs font-bold uppercase tracking-wider block opacity-90">
                DATA EGRESS
              </span>
              <div className="text-4xl font-extrabold mt-3">8.4 TB</div>
              <div className="mt-4 pt-2 border-t border-white/20 text-xs font-semibold">
                BANDWIDTH CAP 50 TB
              </div>
            </div>

            {/* Tile 3: Amethyst Purple */}
            <div className="p-6 bg-[#9b59b6] text-white">
              <span className="text-xs font-bold uppercase tracking-wider block opacity-90">
                CONTAINERS
              </span>
              <div className="text-4xl font-extrabold mt-3">1,420</div>
              <div className="mt-4 pt-2 border-t border-white/20 text-xs font-semibold">
                KUBERNETES FLEET
              </div>
            </div>

            {/* Tile 4: Alizarin Red */}
            <div className="p-6 bg-[#e74c3c] text-white">
              <span className="text-xs font-bold uppercase tracking-wider block opacity-90">
                FAILED PACKETS
              </span>
              <div className="text-4xl font-extrabold mt-3">0.00%</div>
              <div className="mt-4 pt-2 border-t border-white/20 text-xs font-semibold">
                ZERO DROPPED FRAMES
              </div>
            </div>
          </div>

          {/* Flat Action Bar */}
          <div className="mt-8 p-6 bg-[#2c3e50] flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="text-xs font-bold text-[#ecf0f1] uppercase tracking-wider">
              Flat Design Principle: Content is UI. Clarity through pure color blocks.
            </span>
            <div className="flex gap-2">
              <button className="px-5 py-2.5 bg-[#f1c40f] text-[#2c3e50] font-black text-xs uppercase cursor-pointer hover:bg-[#f39c12]">
                RELOAD DATA
              </button>
              <button className="px-5 py-2.5 bg-[#2ecc71] text-white font-black text-xs uppercase cursor-pointer hover:bg-[#27ae60]">
                DEPLOY NEW NODE
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
