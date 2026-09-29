import React, { useState, useEffect } from 'react';
import { IconSearch, IconLayers, IconSparkles, IconX } from './Icons';

export const Navigation = ({ styles, activeStyleId, onNavigate, onOpenAbout }) => {
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const winScroll = document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolledRatio = height > 0 ? (winScroll / height) * 100 : 0;
      setScrollProgress(scrolledRatio);
      setScrolled(winScroll > 40);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const q = searchQuery.toLowerCase().trim();
  const filteredStyles = styles.filter(s => {
    if (!q) return true;
    return (
      s.name.toLowerCase().includes(q) ||
      (s.formula && s.formula.toLowerCase().includes(q)) ||
      (s.shortDescription && s.shortDescription.toLowerCase().includes(q)) ||
      (s.explanation && s.explanation.toLowerCase().includes(q)) ||
      (s.whatIsIt && s.whatIsIt.toLowerCase().includes(q)) ||
      (s.distinguishedBy && s.distinguishedBy.toLowerCase().includes(q)) ||
      (s.category && s.category.toLowerCase().includes(q)) ||
      (s.era && s.era.toLowerCase().includes(q)) ||
      (s.characteristics && s.characteristics.some(c => c.toLowerCase().includes(q))) ||
      (s.visualDNA && s.visualDNA.some(v => v.toLowerCase().includes(q))) ||
      (s.bestFor && s.bestFor.some(b => b.toLowerCase().includes(q))) ||
      s.number.includes(q)
    );
  });

  return (
    <>
      <header
        className={`sticky top-0 z-50 w-full transition-all duration-300 ${
          scrolled 
            ? 'bg-[#090b10]/85 backdrop-blur-md border-b border-white/10 shadow-lg shadow-black/20' 
            : 'bg-transparent border-b border-white/5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
          {/* Logo */}
          <div className="flex items-center gap-6">
            <button
              onClick={() => {
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="flex items-center gap-2 group text-left cursor-pointer"
            >
              <div className="w-8 h-8 rounded-lg bg-linear-to-tr from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center font-black text-white text-xs tracking-tighter shadow-md shadow-indigo-500/20 group-hover:scale-105 transition-transform">
                //
              </div>
              <div>
                <span className="font-extrabold tracking-tight text-white text-base">UI//LAB</span>
                <span className="hidden sm:inline-block ml-2 text-[10px] font-mono tracking-widest uppercase text-indigo-400 bg-indigo-500/10 px-2 py-0.5 rounded border border-indigo-500/20">
                  DESIGN SYSTEMS
                </span>
              </div>
            </button>

            {/* Desktop Navigation Links */}
            <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-300">
              <button
                onClick={() => onNavigate('style-index')}
                className="hover:text-white transition cursor-pointer"
              >
                Design Gallery
              </button>
              <button
                onClick={() => setSearchOpen(true)}
                className="hover:text-white transition flex items-center gap-1.5 cursor-pointer"
              >
                <span>Styles</span>
                <span className="text-[11px] font-mono bg-white/10 text-slate-300 px-1.5 py-0.5 rounded-full">
                  {styles.length}
                </span>
              </button>
              <button
                onClick={onOpenAbout}
                className="hover:text-white transition cursor-pointer"
              >
                About Lab
              </button>
            </nav>
          </div>

          {/* Right Action Bar */}
          <div className="flex items-center gap-3">
            {/* Quick Search Button */}
            <button
              onClick={() => setSearchOpen(true)}
              className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-xs text-slate-300 hover:text-white transition cursor-pointer"
            >
              <IconSearch className="w-3.5 h-3.5 text-slate-400" />
              <span className="hidden sm:inline">Jump to style...</span>
              <kbd className="hidden sm:inline-block font-mono text-[10px] px-1.5 py-0.5 rounded bg-black/40 border border-white/10 text-slate-400">
                ⌘K
              </kbd>
            </button>

            {/* Total Styles Badge */}
            <div className="hidden lg:flex items-center gap-2 px-3 py-1.5 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono font-medium">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>{styles.length} DESIGN SYSTEMS</span>
            </div>

            {/* Mobile Menu Trigger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg bg-white/5 text-slate-300 hover:text-white border border-white/10"
              aria-label="Toggle navigation menu"
            >
              <IconLayers className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Scroll Progress Bar */}
        <div className="w-full h-0.5 bg-white/5">
          <div
            className="h-full bg-linear-to-r from-indigo-500 via-purple-500 to-pink-500 transition-all duration-100 ease-out"
            style={{ width: `${scrollProgress}%` }}
          />
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#090b10] border-b border-white/10 px-4 py-4 space-y-3">
            <button
              onClick={() => {
                onNavigate('style-index');
                setMobileMenuOpen(false);
              }}
              className="block w-full text-left py-2 text-sm font-medium text-slate-200 hover:text-white"
            >
              Design Gallery
            </button>
            <button
              onClick={() => {
                setSearchOpen(true);
                setMobileMenuOpen(false);
              }}
              className="block w-full text-left py-2 text-sm font-medium text-slate-200 hover:text-white"
            >
              Browse {styles.length} Styles
            </button>
            <button
              onClick={() => {
                onOpenAbout();
                setMobileMenuOpen(false);
              }}
              className="block w-full text-left py-2 text-sm font-medium text-slate-200 hover:text-white"
            >
              About The Laboratory
            </button>
          </div>
        )}
      </header>

      {/* Quick Jump Search Modal */}
      {searchOpen && (
        <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 bg-black/70 backdrop-blur-sm animate-fadeIn">
          <div className="w-full max-w-2xl bg-[#11141d] border border-white/15 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[75vh]">
            <div className="p-4 border-b border-white/10 flex items-center gap-3">
              <IconSearch className="w-5 h-5 text-indigo-400" />
              <input
                type="text"
                autoFocus
                placeholder={`Search ${styles.length} styles by name, visual DNA, formula, or era...`}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-transparent text-white placeholder-slate-400 text-sm focus:outline-none"
              />
              <button
                onClick={() => setSearchOpen(false)}
                className="p-1 rounded-md text-slate-400 hover:text-white hover:bg-white/10"
              >
                <IconX className="w-5 h-5" />
              </button>
            </div>

            <div className="overflow-y-auto p-3 space-y-1 divide-y divide-white/5">
              {filteredStyles.length > 0 ? (
                filteredStyles.map((s) => (
                  <button
                    key={s.id}
                    onClick={() => {
                      onNavigate(s.id);
                      setSearchOpen(false);
                    }}
                    className="w-full flex items-center justify-between p-3 rounded-xl hover:bg-white/5 text-left transition group"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-xl p-2 rounded-lg bg-white/5">{s.iconEmoji}</span>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="font-mono text-xs text-indigo-400">{s.number}</span>
                          <span className="text-white font-semibold text-sm group-hover:text-indigo-400 transition-colors">
                            {s.name}
                          </span>
                          <span className="text-[10px] font-mono uppercase bg-white/10 px-1.5 py-0.5 rounded text-slate-300">
                            {s.category}
                          </span>
                        </div>
                        <p className="text-xs text-slate-400 line-clamp-1 mt-0.5">
                          {s.formula ? `${s.formula} — ` : ''}{s.shortDescription}
                        </p>
                      </div>
                    </div>
                    <span className="text-xs text-slate-500 font-mono group-hover:text-white transition">
                      Jump →
                    </span>
                  </button>
                ))
              ) : (
                <div className="p-8 text-center text-sm text-slate-400">
                  No styles matched "{searchQuery}"
                </div>
              )}
            </div>

            <div className="p-3 bg-black/40 border-t border-white/5 flex items-center justify-between text-xs text-slate-500 font-mono">
              <span>Showing {filteredStyles.length} of {styles.length} visual languages</span>
              <span>ESC to close</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
