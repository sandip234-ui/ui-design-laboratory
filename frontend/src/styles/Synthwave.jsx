import React, { useState } from 'react';
import { SectionHeader } from '../components/SectionHeader';
import { IconSliders, IconActivity, IconFlame } from '../components/Icons';

export const Synthwave = ({ styleData, prevStyle, nextStyle, onNavigate }) => {
  const [bpm, setBpm] = useState(128);
  const [activeTrack, setActiveTrack] = useState('Midnight Highway (1984)');
  const [bassBoost, setBassBoost] = useState(true);
  const [reverbDepth, setReverbDepth] = useState(72);

  const tracks = [
    { title: 'Midnight Highway (1984)', artist: 'KAVINSKY WAVE', time: '4:21', key: 'D Minor' },
    { title: 'Neon Sunset Boulevard', artist: 'LASERGRID 86', time: '3:45', key: 'A Minor' },
    { title: 'Outrun Horizon Zero', artist: 'SYNTH RUNNER', time: '5:12', key: 'F# Minor' },
  ];

  return (
    <section id="synthwave" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#0e031a] text-cyan-200 relative overflow-hidden font-hud">
      {/* 80s Neon Sunset Sun Glow */}
      <div className="absolute top-12 left-1/2 -translate-x-1/2 w-80 h-80 rounded-full bg-linear-to-b from-yellow-300 via-pink-500 to-purple-800 opacity-30 blur-[90px] pointer-events-none" />

      {/* Perspective Wireframe Ground Grid */}
      <div className="absolute bottom-0 inset-x-0 h-64 synthwave-grid opacity-35 transform-[perspective(500px)_rotateX(60deg)] origin-bottom pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <SectionHeader
          styleData={styleData}
          prevStyle={prevStyle}
          nextStyle={nextStyle}
          onNavigate={onNavigate}
        />

        {/* 80s Outrun Synth Studio Deck */}
        <div className="mt-8 rounded-3xl p-6 sm:p-10 bg-[#16062b]/90 border-2 border-pink-500/40 shadow-[0_0_40px_rgba(255,0,127,0.2)] relative">
          {/* Header Bar */}
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between pb-6 border-b border-pink-500/25 gap-4">
            <div className="flex items-center gap-3">
              <span className="p-3 rounded-2xl bg-linear-to-br from-pink-500/30 to-cyan-500/30 border border-pink-400 text-pink-300 text-xl shadow-[0_0_15px_#ff007f]">
                ⚡
              </span>
              <div>
                <div className="text-xs uppercase tracking-[0.25em] text-pink-400 font-bold">
                  ANALOG FM SYNTHESIS // RETRO-FUTURISM
                </div>
                <h3 className="text-2xl sm:text-3xl font-black text-transparent bg-clip-text bg-linear-to-r from-yellow-300 via-pink-400 to-cyan-400 tracking-wider">
                  OUTRUN // 1984 STUDIO DECK
                </h3>
              </div>
            </div>

            {/* Neon Status Badge */}
            <div className="flex items-center gap-2">
              <span className="px-3 py-1.5 rounded-lg border border-pink-500/40 bg-pink-950/40 text-pink-300 text-xs font-mono shadow-[0_0_10px_rgba(255,0,127,0.3)]">
                MASTER CLOCK: {bpm} BPM
              </span>
              <button
                onClick={() => setBassBoost(!bassBoost)}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono transition cursor-pointer border ${
                  bassBoost
                    ? 'border-cyan-400 bg-cyan-950/60 text-cyan-300 shadow-[0_0_15px_#05d9e8]'
                    : 'border-white/10 bg-black/40 text-slate-400 hover:text-white'
                }`}
              >
                BASS BOOST: {bassBoost ? 'ON' : 'OFF'}
              </button>
            </div>
          </div>

          {/* Graphic Equalizer & Synth Controllers */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            {/* Equalizer Visualizer */}
            <div className="p-6 rounded-2xl bg-black/50 border border-pink-500/30 relative">
              <div className="flex items-center justify-between text-xs text-pink-400 mb-3">
                <span className="tracking-wider">SPECTRAL FREQ</span>
                <span className="text-[10px] font-mono text-cyan-400">CH-1 STEREO</span>
              </div>
              <div className="flex items-end gap-1.5 h-28 pt-2">
                {[55, 78, 92, 64, 85, 98, 72, 88, 62, 94, 76, 82].map((height, i) => (
                  <div key={i} className="flex-1 flex flex-col justify-end h-full">
                    <div
                      className="w-full bg-linear-to-t from-pink-500 via-purple-500 to-cyan-400 rounded-t-xs shadow-[0_0_8px_#ff007f]"
                      style={{ height: `${height}%` }}
                    />
                  </div>
                ))}
              </div>
              <div className="mt-3 flex justify-between text-[10px] font-mono text-slate-400">
                <span>32Hz</span>
                <span>1kHz</span>
                <span>16kHz</span>
              </div>
            </div>

            {/* BPM & Reverb Sliders */}
            <div className="p-6 rounded-2xl bg-black/50 border border-cyan-500/30">
              <div className="flex items-center justify-between text-xs text-cyan-400 mb-3">
                <span className="tracking-wider">MASTER TEMPO</span>
                <span className="text-xl font-black text-white">{bpm}</span>
              </div>
              <input
                type="range"
                min="90"
                max="160"
                value={bpm}
                onChange={(e) => setBpm(parseInt(e.target.value))}
                className="w-full accent-pink-500 cursor-pointer"
              />

              <div className="mt-6 flex items-center justify-between text-xs text-pink-400 mb-3">
                <span className="tracking-wider">ANALOG REVERB</span>
                <span className="text-xl font-black text-white">{reverbDepth}%</span>
              </div>
              <input
                type="range"
                min="0"
                max="100"
                value={reverbDepth}
                onChange={(e) => setReverbDepth(parseInt(e.target.value))}
                className="w-full accent-cyan-400 cursor-pointer"
              />
            </div>

            {/* Tape Deck Stats */}
            <div className="p-6 rounded-2xl bg-black/50 border border-yellow-400/30 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between text-xs text-yellow-400">
                  <span className="tracking-wider">MAGNETIC TAPE BIAS</span>
                  <span className="text-xs">TYPE-IV METAL</span>
                </div>
                <div className="mt-4 text-3xl font-black text-white tracking-wide">
                  +3.2 dB
                </div>
                <p className="text-xs text-slate-300 mt-2 font-mono">
                  Warm analog tape saturation with vintage harmonic compression.
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-white/10 flex items-center gap-2 text-xs text-cyan-300 font-mono">
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
                <span>ANALOG SYNTH CARTRIDGE INSERTED</span>
              </div>
            </div>
          </div>

          {/* Cassette Tape Selection Tracklist */}
          <div className="mt-8 border border-pink-500/30 rounded-2xl p-5 bg-black/60">
            <div className="text-xs font-bold uppercase tracking-widest text-pink-400 mb-4 flex items-center gap-2">
              <span>📼</span>
              <span>SYNTHWAVE CASSETTE QUEUE</span>
            </div>

            <div className="space-y-2">
              {tracks.map((track) => {
                const isSelected = activeTrack === track.title;
                return (
                  <div
                    key={track.title}
                    onClick={() => setActiveTrack(track.title)}
                    className={`flex items-center justify-between p-3.5 rounded-xl border transition cursor-pointer ${
                      isSelected
                        ? 'border-pink-400 bg-pink-950/40 text-white shadow-[0_0_15px_rgba(255,0,127,0.3)]'
                        : 'border-white/10 bg-black/40 text-slate-300 hover:border-pink-500/40'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-lg">{isSelected ? '▶' : '■'}</span>
                      <div>
                        <div className="text-sm font-bold tracking-wide">{track.title}</div>
                        <div className="text-[11px] font-mono text-cyan-400/80">{track.artist}</div>
                      </div>
                    </div>

                    <div className="flex items-center gap-4 text-xs font-mono">
                      <span className="hidden sm:inline text-yellow-300">{track.key}</span>
                      <span className="text-slate-400">{track.time}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
