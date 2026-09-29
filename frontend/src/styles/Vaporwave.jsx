import React, { useState } from 'react';
import { SectionHeader } from '../components/SectionHeader';

export const Vaporwave = ({ styleData, prevStyle, nextStyle, onNavigate }) => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [activeWindow, setActiveWindow] = useState('PLAYER.EXE');
  const [virtualVolume, setVirtualVolume] = useState(88);

  const tracks = [
    { title: 'リサフランク420 / 現代のコンピュー', artist: 'MACINTOSH PLUS', time: '7:20', album: 'FLORAL SHOPPE' },
    { title: 'Enjoy Yourself // Sunset', artist: 'SAINT PEPSI', time: '3:15', album: 'HIT VIBES' },
    { title: 'Atmosphere No. 4 (Breeze)', artist: 'ECO VIRTUAL', time: '4:02', album: 'ATMOSPHERES' },
  ];

  const [currentTrack, setCurrentTrack] = useState(tracks[0]);

  return (
    <section id="vaporwave" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#140b24] text-[#ff71ce] relative overflow-hidden font-space">
      {/* Pastel Sunset Gradient Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-linear-to-b from-[#ff71ce]/20 via-[#01cdfe]/20 to-purple-800/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Retro 90s Grid Floor */}
      <div className="absolute bottom-0 inset-x-0 h-48 bg-[linear-gradient(to_right,#01cdfe22_1px,transparent_1px),linear-gradient(to_bottom,#ff71ce22_1px,transparent_1px)] bg-size-[30px_30px] opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <SectionHeader
          styleData={styleData}
          prevStyle={prevStyle}
          nextStyle={nextStyle}
          onNavigate={onNavigate}
        />

        {/* Windows 95 Style Vaporwave Window */}
        <div className="mt-8 rounded-none border-2 border-t-white border-l-white border-b-[#404040] border-r-[#404040] bg-[#c0c0c0] p-1 shadow-[8px_8px_0px_rgba(0,0,0,0.5)]">
          {/* Windows Title Bar */}
          <div className="bg-linear-to-r from-[#000080] via-[#1084d0] to-[#ff71ce] text-white px-3 py-1.5 flex items-center justify-between font-bold text-xs select-none">
            <div className="flex items-center gap-2">
              <span>🏛️</span>
              <span className="tracking-wider">VAPOR_SYSTEM_95 — [美学 AESTHETIC PLAYER]</span>
            </div>
            <div className="flex gap-1">
              <button className="w-4 h-4 bg-[#c0c0c0] text-black border border-t-white border-l-white border-b-black border-r-black flex items-center justify-center text-[10px] font-bold">_</button>
              <button className="w-4 h-4 bg-[#c0c0c0] text-black border border-t-white border-l-white border-b-black border-r-black flex items-center justify-center text-[10px] font-bold">□</button>
              <button className="w-4 h-4 bg-[#c0c0c0] text-black border border-t-white border-l-white border-b-black border-r-black flex items-center justify-center text-[10px] font-bold">×</button>
            </div>
          </div>

          {/* Window Body */}
          <div className="p-5 sm:p-8 bg-[#1a0e2e] text-[#01cdfe] border border-[#808080] m-1">
            {/* Japanese Aesthetic Sub-header */}
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pb-6 border-b border-[#ff71ce]/30">
              <div>
                <div className="text-xs font-mono text-[#ff71ce] tracking-widest uppercase">
                  FLORAL SHOPPE // 90s CONSUMER SURREALISM
                </div>
                <h3 className="text-2xl sm:text-4xl font-black text-transparent bg-clip-text bg-linear-to-r from-[#ff71ce] via-[#b967ff] to-[#01cdfe] mt-1">
                  リサフランク420 // VIRTUAL PLAZA
                </h3>
              </div>

              <div className="flex items-center gap-3">
                <span className="text-3xl">🗿</span>
                <div className="text-right text-xs font-mono text-pink-300">
                  <div>OS: WINDOWS 95 REV B</div>
                  <div>CHROMA: 256 COLORS</div>
                </div>
              </div>
            </div>

            {/* Media Player Console */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mt-6 items-center">
              {/* Left Cassette / Marble Column (Span 5) */}
              <div className="lg:col-span-5 p-6 bg-[#0e071c] border-2 border-t-white/30 border-l-white/30 border-b-black border-r-black text-center relative overflow-hidden">
                <div className="w-28 h-28 mx-auto rounded-full bg-linear-to-tr from-[#ff71ce] to-[#01cdfe] flex items-center justify-center text-5xl shadow-[0_0_30px_#ff71ce]">
                  🏛️
                </div>
                <div className="mt-4 font-bold text-lg text-white">
                  {currentTrack.title}
                </div>
                <div className="text-xs text-[#ff71ce] font-mono mt-1">
                  {currentTrack.artist} • {currentTrack.album}
                </div>

                {/* Player Controls */}
                <div className="mt-6 flex items-center justify-center gap-3">
                  <button
                    onClick={() => setIsPlaying(!isPlaying)}
                    className="px-5 py-2 bg-[#c0c0c0] text-black font-bold text-xs uppercase border-2 border-t-white border-l-white border-b-black border-r-black active:border-t-black active:border-l-black transition cursor-pointer"
                  >
                    {isPlaying ? 'PAUSE ⏸' : 'PLAY ▶'}
                  </button>
                </div>
              </div>

              {/* Right Playlist & Audio Dial (Span 7) */}
              <div className="lg:col-span-7 space-y-4">
                <div className="text-xs font-mono uppercase tracking-widest text-[#ff71ce] flex items-center gap-2">
                  <span>💿</span>
                  <span>SELECT VIRTUAL TAPE CARTRIDGE</span>
                </div>

                <div className="space-y-2">
                  {tracks.map((t, idx) => (
                    <div
                      key={idx}
                      onClick={() => setCurrentTrack(t)}
                      className={`p-3 border-2 transition cursor-pointer flex items-center justify-between text-xs font-mono ${
                        currentTrack.title === t.title
                          ? 'border-[#ff71ce] bg-[#2e1347] text-white shadow-[0_0_15px_rgba(255,113,206,0.3)]'
                          : 'border-white/10 bg-black/40 text-slate-300 hover:border-[#01cdfe]'
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <span className="text-[#01cdfe]">0{idx + 1}</span>
                        <span className="font-bold">{t.title}</span>
                      </div>
                      <span className="text-pink-300">{t.time}</span>
                    </div>
                  ))}
                </div>

                {/* Lo-Fi Resonance Slider */}
                <div className="p-4 bg-black/40 border border-white/10 mt-4">
                  <div className="flex items-center justify-between text-xs font-mono text-cyan-300 mb-2">
                    <span>90s CASSETTE WOW &amp; FLUTTER</span>
                    <span>{virtualVolume}%</span>
                  </div>
                  <input
                    type="range"
                    min="20"
                    max="100"
                    value={virtualVolume}
                    onChange={(e) => setVirtualVolume(parseInt(e.target.value))}
                    className="w-full accent-[#ff71ce] cursor-pointer"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
