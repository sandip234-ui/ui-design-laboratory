import React, { useState } from 'react';
import { SectionHeader } from '../components/SectionHeader';
import { IconFlame, IconCheck, IconArrowRight, IconSparkles } from '../components/Icons';

export const Neobrutalism = ({ styleData, prevStyle, nextStyle, onNavigate }) => {
  const [activeTab, setActiveTab] = useState('products');
  const [claimed, setClaimed] = useState(false);

  const products = [
    { title: 'Fullstack UI Mastery', sales: '1,420 copies', revenue: '$68,160', color: 'bg-[#a3e635]', tag: 'BESTSELLER' },
    { title: 'Vector Design Icon Pack', sales: '840 copies', revenue: '$16,800', color: 'bg-[#f472b6]', tag: 'HOT 🔥' },
    { title: 'Modern Shaders Guide', sales: '320 copies', revenue: '$9,600', color: 'bg-[#38bdf8]', tag: 'NEW' },
  ];

  return (
    <section id="neobrutalism" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#fdf6e2] text-black">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          styleData={styleData}
          prevStyle={prevStyle}
          nextStyle={nextStyle}
          onNavigate={onNavigate}
        />

        {/* Neobrutalist Main Canvas */}
        <div className="border-4 border-black bg-white p-6 sm:p-10 rounded-2xl shadow-[8px_8px_0px_#000]">
          {/* Header Bar with Pop Badge */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b-4 border-black">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-[#facc15] border-3 border-black shadow-[3px_3px_0px_#000] flex items-center justify-center text-2xl font-black">
                ⚡
              </div>
              <div>
                <h3 className="text-2xl sm:text-3xl font-black uppercase tracking-tight font-space">
                  CREATOR HYPER-HUB
                </h3>
                <p className="text-xs font-bold text-gray-700">High-octane digital commerce console</p>
              </div>
            </div>

            {/* Sticker Pill */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#ec4899] text-white border-3 border-black shadow-[4px_4px_0px_#000] font-black text-xs uppercase tracking-wider rotate-1 hover:rotate-0 transition-transform">
              <IconSparkles className="w-4 h-4" />
              <span>100% VERIFIED INDIE LAB</span>
            </div>
          </div>

          {/* Metric Cards Row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            {/* Metric 1 */}
            <div className="p-6 rounded-2xl bg-[#fef08a] border-3 border-black shadow-[6px_6px_0px_#000] hover:-translate-y-1 hover:shadow-[8px_8px_0px_#000] transition-all">
              <div className="flex justify-between items-center">
                <span className="text-xs font-black uppercase tracking-wider bg-black text-white px-2 py-1 rounded">
                  TOTAL REVENUE
                </span>
                <span className="text-xl">💰</span>
              </div>
              <div className="text-4xl sm:text-5xl font-black text-black mt-4 font-space">
                $94,560
              </div>
              <div className="mt-3 text-xs font-black text-emerald-800 bg-emerald-300 border-2 border-black inline-block px-2 py-0.5 rounded">
                ▲ +28.4% THIS MONTH
              </div>
            </div>

            {/* Metric 2 */}
            <div className="p-6 rounded-2xl bg-[#bae6fd] border-3 border-black shadow-[6px_6px_0px_#000] hover:-translate-y-1 hover:shadow-[8px_8px_0px_#000] transition-all">
              <div className="flex justify-between items-center">
                <span className="text-xs font-black uppercase tracking-wider bg-black text-white px-2 py-1 rounded">
                  PAID STUDENTS
                </span>
                <span className="text-xl">🎓</span>
              </div>
              <div className="text-4xl sm:text-5xl font-black text-black mt-4 font-space">
                2,580
              </div>
              <div className="mt-3 text-xs font-black text-blue-900 bg-blue-200 border-2 border-black inline-block px-2 py-0.5 rounded">
                ● 98.2% COMPLETION
              </div>
            </div>

            {/* Metric 3 */}
            <div className="p-6 rounded-2xl bg-[#fed7aa] border-3 border-black shadow-[6px_6px_0px_#000] hover:-translate-y-1 hover:shadow-[8px_8px_0px_#000] transition-all">
              <div className="flex justify-between items-center">
                <span className="text-xs font-black uppercase tracking-wider bg-black text-white px-2 py-1 rounded">
                  CONVERSION
                </span>
                <span className="text-xl">🚀</span>
              </div>
              <div className="text-4xl sm:text-5xl font-black text-black mt-4 font-space">
                11.8%
              </div>
              <div className="mt-3 text-xs font-black text-orange-900 bg-orange-200 border-2 border-black inline-block px-2 py-0.5 rounded">
                ★ 2.4X INDUSTRY PEERS
              </div>
            </div>
          </div>

          {/* Chunky Products Grid & Interactive Action Box */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-8">
            {/* Products List */}
            <div className="lg:col-span-2 border-3 border-black p-6 rounded-2xl bg-[#fafafa] shadow-[6px_6px_0px_#000]">
              <div className="flex justify-between items-center mb-4">
                <h4 className="text-lg font-black uppercase tracking-tight font-space">Active Product Deployments</h4>
                <span className="text-xs font-bold text-gray-500 font-mono">LIVE STORE SYNC</span>
              </div>

              <div className="space-y-3">
                {products.map((p, i) => (
                  <div
                    key={i}
                    className={`p-4 rounded-xl border-3 border-black shadow-[4px_4px_0px_#000] flex flex-col sm:flex-row sm:items-center justify-between gap-3 ${p.color}`}
                  >
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-black text-sm text-black">{p.title}</span>
                        <span className="text-[10px] font-black bg-black text-white px-2 py-0.5 rounded-full">
                          {p.tag}
                        </span>
                      </div>
                      <div className="text-xs font-bold text-gray-800 mt-1">{p.sales}</div>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-lg font-black font-space text-black">{p.revenue}</span>
                      <button className="px-3 py-1.5 rounded-lg bg-black text-white text-xs font-black uppercase hover:bg-gray-800 active:translate-x-0.5 active:translate-y-0.5 cursor-pointer">
                        Manage
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Interactive Promo Claim Widget */}
            <div className="border-3 border-black p-6 rounded-2xl bg-[#e9d5ff] shadow-[6px_6px_0px_#000] flex flex-col justify-between">
              <div>
                <span className="text-[11px] font-black bg-black text-white px-2 py-0.5 rounded uppercase">
                  WEEKLY ACCELERATOR
                </span>
                <h4 className="text-xl font-black uppercase tracking-tight mt-3 font-space">
                  CLAIM CREATOR BOOST
                </h4>
                <p className="text-xs font-bold text-gray-800 mt-2 leading-relaxed">
                  Supercharge traffic distribution across 40+ curated community channels.
                </p>
              </div>

              <div className="mt-6 pt-4 border-t-2 border-black">
                <button
                  onClick={() => setClaimed(true)}
                  className={`w-full py-3.5 px-4 rounded-xl border-3 border-black font-black text-sm uppercase tracking-wider transition-all cursor-pointer ${
                    claimed
                      ? 'bg-[#86efac] text-black shadow-none translate-x-1 translate-y-1'
                      : 'bg-[#f43f5e] text-white shadow-[4px_4px_0px_#000] hover:shadow-[6px_6px_0px_#000] active:translate-x-1 active:translate-y-1 active:shadow-none'
                  }`}
                >
                  {claimed ? 'BOOST ACTIVATED! ✓' : 'LAUNCH BOOST NOW 🚀'}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
