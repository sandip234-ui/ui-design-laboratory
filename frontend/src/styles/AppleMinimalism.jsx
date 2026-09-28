import React, { useState } from 'react';
import { SectionHeader } from '../components/SectionHeader';
import { IconActivity, IconFlame } from '../components/Icons';

export const AppleMinimalism = ({ styleData, prevStyle, nextStyle, onNavigate }) => {
  const [selectedRange, setSelectedRange] = useState('D');

  return (
    <section id="apple-minimalism" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#f5f5f7] text-[#1d1d1f]">
      <div className="max-w-7xl mx-auto">
        <div className="text-slate-800">
          <SectionHeader
            styleData={styleData}
            prevStyle={prevStyle}
            nextStyle={nextStyle}
            onNavigate={onNavigate}
          />
        </div>

        {/* Cupertino Restrained Health Canvas */}
        <div className="rounded-4xl p-6 sm:p-12 bg-white apple-card-shadow border border-black/4 max-w-5xl mx-auto">
          {/* Header Bar */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 pb-8 border-b border-black/6">
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-[#86868b]">
                Health & Activity Summary
              </span>
              <h3 className="text-3xl sm:text-4xl font-semibold tracking-tight text-[#1d1d1f] mt-1">
                Trends & Wellness
              </h3>
            </div>

            {/* Apple Segmented Pill */}
            <div className="flex p-1 rounded-full bg-[#f5f5f7] border border-black/4">
              {['D', 'W', 'M', 'Y'].map((r) => (
                <button
                  key={r}
                  onClick={() => setSelectedRange(r)}
                  className={`w-9 h-8 rounded-full text-xs font-medium transition cursor-pointer ${
                    selectedRange === r
                      ? 'bg-white text-black shadow-sm font-semibold'
                      : 'text-[#86868b] hover:text-black'
                  }`}
                >
                  {r}
                </button>
              ))}
            </div>
          </div>

          {/* Metric Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            {/* Metric 1 */}
            <div className="p-8 rounded-3xl bg-[#fbfbfd] border border-black/4 transition-all hover:bg-[#f5f5f7]">
              <div className="flex items-center justify-between text-[#86868b]">
                <span className="text-xs font-medium uppercase tracking-wider">Resting Heart Rate</span>
                <span className="text-red-500 text-lg">♥</span>
              </div>
              <div className="text-5xl font-semibold text-[#1d1d1f] mt-4 tracking-tight">
                58 <span className="text-lg font-normal text-[#86868b]">BPM</span>
              </div>
              <p className="text-xs text-[#86868b] mt-4 font-normal">
                4 BPM lower than your 90-day average
              </p>
            </div>

            {/* Metric 2 */}
            <div className="p-8 rounded-3xl bg-[#fbfbfd] border border-black/4 transition-all hover:bg-[#f5f5f7]">
              <div className="flex items-center justify-between text-[#86868b]">
                <span className="text-xs font-medium uppercase tracking-wider">Active Calories</span>
                <span className="text-orange-500 text-lg">🔥</span>
              </div>
              <div className="text-5xl font-semibold text-[#1d1d1f] mt-4 tracking-tight">
                640 <span className="text-lg font-normal text-[#86868b]">/ 700 kcal</span>
              </div>
              <div className="w-full bg-[#e5e5ea] h-2 rounded-full mt-5 overflow-hidden">
                <div className="bg-[#ff3b30] h-full w-[91%]" />
              </div>
            </div>

            {/* Metric 3 */}
            <div className="p-8 rounded-3xl bg-[#fbfbfd] border border-black/4 transition-all hover:bg-[#f5f5f7]">
              <div className="flex items-center justify-between text-[#86868b]">
                <span className="text-xs font-medium uppercase tracking-wider">Sleep Duration</span>
                <span className="text-indigo-500 text-lg">🌙</span>
              </div>
              <div className="text-5xl font-semibold text-[#1d1d1f] mt-4 tracking-tight">
                8<span className="text-2xl font-light text-[#86868b]">h </span>14<span className="text-2xl font-light text-[#86868b]">m</span>
              </div>
              <p className="text-xs text-[#86868b] mt-4 font-normal">
                Consistent bedtime schedule maintained
              </p>
            </div>
          </div>

          {/* Minimal Insight Footer */}
          <div className="mt-8 pt-8 border-t border-black/6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <p className="text-xs text-[#86868b] max-w-xl leading-relaxed">
              Data encrypted with Secure Enclave on device. Health sharing active with primary physician.
            </p>
            <button className="text-xs text-[#0071e3] hover:underline font-medium cursor-pointer">
              View Complete Trend Analysis →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
