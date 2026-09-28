import React, { useState } from 'react';
import { SectionHeader } from '../components/SectionHeader';
import { IconCheck, IconSparkles } from '../components/Icons';

export const MaterialDesign = ({ styleData, prevStyle, nextStyle, onNavigate }) => {
  const [selectedChip, setSelectedChip] = useState('All');
  const [tasks, setTasks] = useState([
    { id: 1, title: 'Refactor Surface Container Tokens', priority: 'Design', done: true },
    { id: 2, title: 'Implement Dynamic Tonal Palette', priority: 'Frontend', done: false },
    { id: 3, title: 'Audit State Layer Ripple Physics', priority: 'Design', done: false },
  ]);

  const chips = ['All', 'Design', 'Frontend', 'Urgent'];

  return (
    <section id="material-design" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#1f1a24] text-[#e6e1e5]">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          styleData={styleData}
          prevStyle={prevStyle}
          nextStyle={nextStyle}
          onNavigate={onNavigate}
        />

        {/* Material 3 / You Surface Shell */}
        <div className="rounded-[28px] p-6 sm:p-10 bg-[#2b2432] border border-[#49454f]/40 shadow-2xl relative">
          {/* Header Bar */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-[#49454f]/30">
            <div>
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-[#d0bcff]" />
                <h3 className="text-2xl font-bold tracking-tight text-[#e6e1e5]">
                  Material You Workspace
                </h3>
              </div>
              <p className="text-xs text-[#cac4d0] mt-1">
                Tonal elevation surfaces, state layers, and expressive rounded geometry
              </p>
            </div>

            {/* Filter Chips Bar */}
            <div className="flex flex-wrap gap-2">
              {chips.map((c) => (
                <button
                  key={c}
                  onClick={() => setSelectedChip(c)}
                  className={`px-4 py-1.5 rounded-full text-xs font-medium transition cursor-pointer flex items-center gap-1.5 ${
                    selectedChip === c
                      ? 'bg-[#d0bcff] text-[#381e72] font-semibold shadow-md'
                      : 'bg-[#362e3d] text-[#e6e1e5] border border-[#79747e]/40 hover:bg-[#403749]'
                  }`}
                >
                  {selectedChip === c && <IconCheck className="w-3.5 h-3.5" />}
                  <span>{c}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Elevated Surface Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            {/* Card 1: Primary Container */}
            <div className="p-6 rounded-3xl bg-[#4f378b] text-[#eaddff] shadow-md flex flex-col justify-between">
              <div>
                <span className="text-xs font-medium uppercase tracking-wider text-[#d0bcff]">
                  Primary Sprints
                </span>
                <div className="text-4xl font-extrabold text-white mt-2">18 / 22</div>
              </div>
              <p className="text-xs text-[#d0bcff] mt-4">82% milestone sprint velocity</p>
            </div>

            {/* Card 2: Secondary Container */}
            <div className="p-6 rounded-3xl bg-[#4a4458] text-[#e8def8] shadow-md flex flex-col justify-between">
              <div>
                <span className="text-xs font-medium uppercase tracking-wider text-[#ccc2dc]">
                  Team Bandwidth
                </span>
                <div className="text-4xl font-extrabold text-white mt-2">94.2%</div>
              </div>
              <p className="text-xs text-[#ccc2dc] mt-4">Optimal cognitive load allocation</p>
            </div>

            {/* Card 3: Tertiary Container */}
            <div className="p-6 rounded-3xl bg-[#633b48] text-[#ffd8e4] shadow-md flex flex-col justify-between">
              <div>
                <span className="text-xs font-medium uppercase tracking-wider text-[#efb8c8]">
                  Design Specs
                </span>
                <div className="text-4xl font-extrabold text-white mt-2">100% M3</div>
              </div>
              <p className="text-xs text-[#efb8c8] mt-4">Full token conformance verified</p>
            </div>
          </div>

          {/* Task Board and Floating Action Button (FAB) */}
          <div className="mt-8 p-6 rounded-3xl bg-[#362e3d] border border-[#49454f]/30 relative">
            <h4 className="text-sm font-semibold text-[#e6e1e5] uppercase tracking-wider mb-4">
              Material Surface Tasks
            </h4>
            <div className="space-y-3">
              {tasks.map((t) => (
                <div
                  key={t.id}
                  onClick={() => setTasks(tasks.map(item => item.id === t.id ? { ...item, done: !item.done } : item))}
                  className="p-4 rounded-2xl bg-[#2b2432] hover:bg-[#322a3a] border border-[#49454f]/20 flex items-center justify-between transition cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-5 h-5 rounded-md border flex items-center justify-center ${
                      t.done ? 'bg-[#d0bcff] border-[#d0bcff] text-[#381e72]' : 'border-[#79747e]'
                    }`}>
                      {t.done && <IconCheck className="w-3.5 h-3.5" />}
                    </div>
                    <span className={`text-xs ${t.done ? 'line-through text-[#938f99]' : 'text-[#e6e1e5]'}`}>
                      {t.title}
                    </span>
                  </div>
                  <span className="text-[10px] font-medium px-2.5 py-0.5 rounded-full bg-[#49454f] text-[#cac4d0]">
                    {t.priority}
                  </span>
                </div>
              ))}
            </div>

            {/* Floating Action Button (FAB) */}
            <div className="mt-6 flex justify-end">
              <button className="flex items-center gap-2 px-5 py-3.5 rounded-2xl bg-[#d0bcff] hover:bg-[#e8def8] text-[#381e72] font-semibold text-xs uppercase tracking-wider shadow-lg shadow-black/40 hover:shadow-xl active:scale-95 transition cursor-pointer">
                <span className="text-lg leading-none">+</span>
                <span>New Surface Action</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
