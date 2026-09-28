import React, { useState } from 'react';
import { SectionHeader } from '../components/SectionHeader';
import { IconShield, IconUsers, IconActivity } from '../components/Icons';

export const FluentDesign = ({ styleData, prevStyle, nextStyle, onNavigate }) => {
  const [activeTab, setActiveTab] = useState('Overview');

  return (
    <section id="fluent-design" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#181a1f] text-slate-100">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          styleData={styleData}
          prevStyle={prevStyle}
          nextStyle={nextStyle}
          onNavigate={onNavigate}
        />

        {/* Windows 11 Acrylic & Mica Container */}
        <div className="rounded-2xl p-6 sm:p-10 backdrop-blur-2xl bg-[#20232a]/80 border border-white/10 shadow-[0_16px_40px_rgba(0,0,0,0.5)] relative overflow-hidden">
          {/* Header Bar with Fluent Tabs */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-white/10">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-linear-to-br from-[#0078d4] to-[#005a9e] flex items-center justify-center text-white font-bold text-lg shadow-md">
                田
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-semibold tracking-tight text-white">
                  Fluent Cloud Control Hub
                </h3>
                <p className="text-xs text-slate-400">Acrylic depth, layered Mica surfaces, and Reveal lighting</p>
              </div>
            </div>

            {/* Fluent Pill Tabs */}
            <div className="flex p-1 rounded-lg bg-black/30 border border-white/5">
              {['Overview', 'Compute', 'Identity'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-3 py-1.5 rounded-md text-xs font-medium transition cursor-pointer ${
                    activeTab === tab
                      ? 'bg-white/10 text-white shadow-sm'
                      : 'text-slate-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          {/* Acrylic Layered Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            {/* Card 1 */}
            <div className="p-6 rounded-xl bg-white/4 hover:bg-white/[0.07] border border-white/10 shadow-sm transition-all duration-200">
              <div className="flex items-center justify-between">
                <span className="text-xs font-medium text-slate-400">Active Directory Users</span>
                <span className="p-1.5 rounded bg-[#0078d4]/20 text-[#60a5fa]">
                  <IconUsers className="w-4 h-4" />
                </span>
              </div>
              <div className="text-3xl font-bold text-white mt-3 font-display">14,290</div>
              <div className="mt-3 flex items-center gap-1.5 text-xs text-emerald-400">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                <span>Zero identity compromises</span>
              </div>
            </div>

            {/* Card 2 */}
            <div className="p-6 rounded-xl bg-white/4 hover:bg-white/[0.07] border border-white/10 shadow-sm transition-all duration-200">
              <div className="flex items-center justify-between">
                <span className="text-xs font-medium text-slate-400">Global Cluster Health</span>
                <span className="p-1.5 rounded bg-emerald-500/20 text-emerald-400">
                  <IconShield className="w-4 h-4" />
                </span>
              </div>
              <div className="text-3xl font-bold text-white mt-3 font-display">99.995%</div>
              <p className="mt-3 text-xs text-slate-400">12 geographical regions synced</p>
            </div>

            {/* Card 3 */}
            <div className="p-6 rounded-xl bg-white/4 hover:bg-white/[0.07] border border-white/10 shadow-sm transition-all duration-200">
              <div className="flex items-center justify-between">
                <span className="text-xs font-medium text-slate-400">Compute Cost Efficiency</span>
                <span className="p-1.5 rounded bg-purple-500/20 text-purple-300">
                  <IconActivity className="w-4 h-4" />
                </span>
              </div>
              <div className="text-3xl font-bold text-white mt-3 font-display">$0.042 / hr</div>
              <p className="mt-3 text-xs text-slate-400">Spot instance autoscale savings</p>
            </div>
          </div>

          {/* Fluent Action Strip */}
          <div className="mt-8 p-5 rounded-xl bg-black/20 border border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="text-xs text-slate-400">
              Microsoft 365 Enterprise Security Center connected via Graph API.
            </span>
            <div className="flex gap-3">
              <button className="px-4 py-2 rounded-lg bg-white/10 hover:bg-white/15 text-xs font-medium text-white transition active:scale-95 cursor-pointer">
                Audit Trail
              </button>
              <button className="px-4 py-2 rounded-lg bg-[#0078d4] hover:bg-[#006cbd] text-xs font-semibold text-white shadow-md active:scale-95 transition cursor-pointer">
                Manage Tenant
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
