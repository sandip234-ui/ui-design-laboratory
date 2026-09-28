import React, { useState } from 'react';
import { SectionHeader } from '../components/SectionHeader';
import { IconSparkles } from '../components/Icons';

export const Y2K = ({ styleData, prevStyle, nextStyle, onNavigate }) => {
  const [playing, setPlaying] = useState(true);
  const [eqLevel, setEqLevel] = useState(74);

  const playlist = [
    { title: 'Cyber_Heaven_2001.mp3', artist: 'Neo-Genesis', time: '03:42', bitrate: '320kbps' },
    { title: 'Starlight_Transistor.wav', artist: 'Y2K Protocol', time: '04:15', bitrate: 'VBR' },
    { title: 'Liquid_Chrome_Dreams.mp3', artist: 'Aqua_Orb', time: '02:58', bitrate: '256kbps' },
  ];

  return (
    <section id="y2k" className="py-20 px-4 sm:px-6 lg:px-8 bg-linear-to-b from-[#180a29] via-[#0d162d] to-[#120722] text-slate-100 overflow-hidden">
      <div className="max-w-7xl mx-auto relative">
        <SectionHeader
          styleData={styleData}
          prevStyle={prevStyle}
          nextStyle={nextStyle}
          onNavigate={onNavigate}
        />

        {/* Y2K Millennium Console Shell */}
        <div className="rounded-[40px] p-6 sm:p-10 bg-linear-to-tr from-slate-900 via-[#1f1938] to-[#182a47] border-2 border-cyan-300/40 shadow-[0_0_40px_rgba(34,211,238,0.25),inset_0_2px_4px_rgba(255,255,255,0.6)] relative overflow-hidden">
          {/* Holographic Chrome Glow Accents */}
          <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-linear-to-r from-pink-500/20 via-cyan-400/20 to-purple-500/20 blur-2xl pointer-events-none" />
          <div className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-linear-to-r from-cyan-500/20 to-pink-500/20 blur-2xl pointer-events-none" />

          {/* Top Millennial Chrome Banner */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-cyan-400/20 relative z-10">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-linear-to-b from-white via-cyan-200 to-slate-400 p-0.5 shadow-lg flex items-center justify-center">
                <div className="w-full h-full rounded-full bg-linear-to-tr from-indigo-900 to-pink-900 flex items-center justify-center text-xl">
                  ✧
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-black italic tracking-wide text-transparent bg-clip-text bg-linear-to-r from-white via-cyan-200 to-pink-300 font-space">
                  CYBER//AUDIO 2000 DECK
                </h3>
                <p className="text-xs text-cyan-300 font-mono">✦ Holographic Millennial Audio & Media Portal ✦</p>
              </div>
            </div>

            {/* Y2K Bubble Status Tag */}
            <div className="px-4 py-1.5 rounded-full bg-linear-to-r from-pink-500/30 to-cyan-500/30 border border-cyan-300/60 shadow-[0_0_15px_rgba(34,211,238,0.3)] flex items-center gap-2 text-xs font-bold text-white">
              <span className="text-pink-300 animate-spin">✦</span>
              <span>BROADBAND DSL SYNCED</span>
            </div>
          </div>

          {/* Metallic Oval Pods / Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 relative z-10">
            {/* Pod 1 */}
            <div className="p-6 rounded-[30px] bg-linear-to-b from-white/10 via-white/5 to-white/0 border border-white/30 backdrop-blur-md shadow-[inset_0_2px_4px_rgba(255,255,255,0.5)]">
              <div className="flex justify-between items-center text-xs font-mono text-cyan-300">
                <span>BUFFER STREAM</span>
                <span>✧ 100%</span>
              </div>
              <div className="text-3xl font-black text-transparent bg-clip-text bg-linear-to-r from-white via-slate-100 to-cyan-300 mt-2 font-space">
                320 KBPS
              </div>
              <p className="text-[11px] text-slate-300 mt-2">Lossless Crystal Audio Engine</p>
            </div>

            {/* Pod 2 */}
            <div className="p-6 rounded-[30px] bg-linear-to-b from-white/10 via-white/5 to-white/0 border border-white/30 backdrop-blur-md shadow-[inset_0_2px_4px_rgba(255,255,255,0.5)]">
              <div className="flex justify-between items-center text-xs font-mono text-pink-300">
                <span>VIRTUAL CHANNELS</span>
                <span>✦ DOLBY 5.1</span>
              </div>
              <div className="text-3xl font-black text-transparent bg-clip-text bg-linear-to-r from-white via-pink-200 to-purple-300 mt-2 font-space">
                SURROUND
              </div>
              <p className="text-[11px] text-slate-300 mt-2">Matrix 3D Spatial Positioning</p>
            </div>

            {/* Pod 3 */}
            <div className="p-6 rounded-[30px] bg-linear-to-b from-white/10 via-white/5 to-white/0 border border-white/30 backdrop-blur-md shadow-[inset_0_2px_4px_rgba(255,255,255,0.5)]">
              <div className="flex justify-between items-center text-xs font-mono text-cyan-300">
                <span>GLOBAL PLAYCOUNT</span>
                <span>✧ MP3 ARCHIVE</span>
              </div>
              <div className="text-3xl font-black text-transparent bg-clip-text bg-linear-to-r from-white via-cyan-100 to-blue-300 mt-2 font-space">
                842,910
              </div>
              <p className="text-[11px] text-slate-300 mt-2">Distributed Peer-to-Peer Node</p>
            </div>
          </div>

          {/* Equalizer & Aqua Gel Controls */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-8 relative z-10">
            {/* Equalizer Panel */}
            <div className="lg:col-span-2 p-6 rounded-4xl bg-black/40 border border-cyan-400/30 backdrop-blur-lg">
              <div className="flex justify-between items-center mb-4">
                <span className="text-xs font-bold text-cyan-300 uppercase tracking-widest font-mono">
                  Realtime Spectrum Equalizer
                </span>
                <span className="text-xs font-mono text-pink-400">FPS: 60.0 // LATENCY: ZERO</span>
              </div>

              {/* Graphic Bars */}
              <div className="h-36 flex items-end gap-2 sm:gap-3 px-2 pt-4 pb-2 border-b border-cyan-400/20">
                {[55, 80, 65, 92, 45, 78, 95, 60, 85, 70, 90, 84].map((h, i) => (
                  <div key={i} className="flex-1 flex flex-col justify-end h-full">
                    <div
                      className="w-full rounded-t-full bg-linear-to-t from-cyan-500 via-pink-400 to-white shadow-[0_0_10px_rgba(244,114,182,0.6)] transition-all duration-200"
                      style={{ height: `${h}%` }}
                    />
                  </div>
                ))}
              </div>

              {/* Aqua Gel Action Buttons */}
              <div className="mt-5 flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => setPlaying(!playing)}
                    className="px-5 py-2 rounded-full bg-linear-to-b from-cyan-300 via-cyan-500 to-blue-700 text-white font-black text-xs uppercase tracking-wider shadow-[0_4px_12px_rgba(6,182,212,0.5),inset_0_2px_4px_rgba(255,255,255,0.8)] active:scale-95 transition cursor-pointer"
                  >
                    {playing ? 'PAUSE ❚❚' : 'PLAY ▶'}
                  </button>
                  <button className="px-5 py-2 rounded-full bg-linear-to-b from-pink-300 via-pink-500 to-purple-700 text-white font-black text-xs uppercase tracking-wider shadow-[0_4px_12px_rgba(236,72,153,0.5),inset_0_2px_4px_rgba(255,255,255,0.8)] active:scale-95 transition cursor-pointer">
                    REPEAT ✦
                  </button>
                </div>
                <span className="text-xs font-mono text-cyan-200">TRACK 01 OF 18</span>
              </div>
            </div>

            {/* Playlist Pod */}
            <div className="p-6 rounded-4xl bg-black/40 border border-pink-400/30 backdrop-blur-lg flex flex-col justify-between">
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-pink-300 font-mono mb-3">
                  Napster / Cyber Playlist
                </h4>
                <div className="space-y-2.5">
                  {playlist.map((track, i) => (
                    <div
                      key={i}
                      className="p-2.5 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-between transition cursor-pointer"
                    >
                      <div className="truncate pr-2">
                        <div className="text-xs font-bold text-white truncate">{track.title}</div>
                        <div className="text-[10px] text-cyan-300">{track.artist}</div>
                      </div>
                      <span className="text-[10px] font-mono text-pink-300 shrink-0">{track.time}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-white/10 flex justify-between items-center text-[10px] font-mono text-slate-400">
                <span>MEM: 128MB FLASH</span>
                <span className="text-cyan-300">USB 1.1 LINKED</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
