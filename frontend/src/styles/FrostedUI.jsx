import React, { useState } from 'react';
import { SectionHeader } from '../components/SectionHeader';
import { IconCheck } from '../components/Icons';

export const FrostedUI = ({ styleData, prevStyle, nextStyle, onNavigate }) => {
  const [tasks, setTasks] = useState([
    { id: 1, title: 'Draft Architectural Whitepaper', done: true, tag: 'Writing' },
    { id: 2, title: 'Calibrate Typography Optical Kernings', done: true, tag: 'Design' },
    { id: 3, title: 'Review Sandblasted Glass Spec', done: false, tag: 'Research' },
  ]);

  const toggleTask = (id) => {
    setTasks(tasks.map(t => t.id === id ? { ...t, done: !t.done } : t));
  };

  return (
    <section id="frosted-ui" className="py-20 px-4 sm:px-6 lg:px-8 bg-linear-to-b from-[#161a22] to-[#12151c] text-slate-200">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          styleData={styleData}
          prevStyle={prevStyle}
          nextStyle={nextStyle}
          onNavigate={onNavigate}
        />

        {/* Sandblasted Frosted Acrylic Chamber */}
        <div className="rounded-3xl p-6 sm:p-10 backdrop-blur-2xl bg-white/4 border border-white/10 shadow-[0_12px_40px_rgba(0,0,0,0.3)]">
          {/* Header */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-white/5">
            <div>
              <h3 className="text-xl font-medium text-slate-100 tracking-tight">
                Nordic Frosted Sanctuary
              </h3>
              <p className="text-xs text-slate-400 mt-1">
                Sandblasted matte translucency with diffused light transmission
              </p>
            </div>
            <div className="text-xs font-mono text-slate-400 px-3 py-1.5 rounded-full bg-white/3 border border-white/5">
              DIFFUSION COEFFICIENT: 0.94
            </div>
          </div>

          {/* Calmer Muted Metric Panels */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <div className="p-6 rounded-2xl backdrop-blur-md bg-white/3 border border-white/10">
              <span className="text-xs text-slate-400 font-medium">Ambient Noise Index</span>
              <div className="text-3xl font-light text-slate-100 mt-2 font-display">24.2 dBA</div>
              <p className="text-xs text-slate-400 mt-2">Quiet acoustic threshold</p>
            </div>

            <div className="p-6 rounded-2xl backdrop-blur-md bg-white/3 border border-white/10">
              <span className="text-xs text-slate-400 font-medium">Daylight Illumination</span>
              <div className="text-3xl font-light text-slate-100 mt-2 font-display">480 Lux</div>
              <p className="text-xs text-slate-400 mt-2">Diffused northern morning sun</p>
            </div>

            <div className="p-6 rounded-2xl backdrop-blur-md bg-white/3 border border-white/10">
              <span className="text-xs text-slate-400 font-medium">Deep Thought Velocity</span>
              <div className="text-3xl font-light text-slate-100 mt-2 font-display">4.2 hrs</div>
              <p className="text-xs text-slate-400 mt-2">Zero intrusive notifications</p>
            </div>
          </div>

          {/* Serene Task Checklist & Reflection Box */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">
            <div className="p-6 rounded-2xl backdrop-blur-md bg-white/3 border border-white/10">
              <h4 className="text-xs font-medium uppercase tracking-wider text-slate-400 mb-4">
                Intentional Focus Intentions
              </h4>
              <div className="space-y-3">
                {tasks.map((t) => (
                  <div
                    key={t.id}
                    onClick={() => toggleTask(t.id)}
                    className="p-3.5 rounded-xl bg-white/2 hover:bg-white/5 border border-white/5 flex items-center justify-between transition cursor-pointer"
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-5 h-5 rounded-md border flex items-center justify-center transition ${
                        t.done ? 'bg-slate-300 border-slate-300 text-slate-900' : 'border-white/20'
                      }`}>
                        {t.done && <IconCheck className="w-3.5 h-3.5" />}
                      </div>
                      <span className={`text-xs ${t.done ? 'line-through text-slate-400' : 'text-slate-200'}`}>
                        {t.title}
                      </span>
                    </div>
                    <span className="text-[10px] px-2 py-0.5 rounded-full bg-white/5 text-slate-400 font-mono">
                      {t.tag}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Diffused Thought Journal */}
            <div className="p-6 rounded-2xl backdrop-blur-md bg-white/3 border border-white/10 flex flex-col justify-between">
              <div>
                <h4 className="text-xs font-medium uppercase tracking-wider text-slate-400 mb-2">
                  Atmospheric Reflection
                </h4>
                <p className="text-xs text-slate-300 leading-relaxed font-light mt-3">
                  "Form follows serenity. By softening hard edges and filtering high-saturation chromatic bursts through frosted layers, attention settles into steady contemplative rhythm."
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/5 flex justify-between items-center text-xs text-slate-400">
                <span>Studio Oslo // Morning Session</span>
                <button className="text-slate-200 hover:text-white font-medium">Record Note</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
