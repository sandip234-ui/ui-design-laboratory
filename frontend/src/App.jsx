import React, { useState, useEffect } from 'react';
import { STYLES } from './data/stylesData';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { StyleIndex } from './components/StyleIndex';
import { FloatingNavigator } from './components/FloatingNavigator';
import { AboutModal } from './components/AboutModal';
import { BackToTop } from './components/BackToTop';

// All 51 Style Components
import { Glassmorphism } from './styles/Glassmorphism';
import { Claymorphism } from './styles/Claymorphism';
import { Neumorphism } from './styles/Neumorphism';
import { Skeuomorphism } from './styles/Skeuomorphism';
import { Brutalism } from './styles/Brutalism';
import { Neobrutalism } from './styles/Neobrutalism';
import { Y2K } from './styles/Y2K';
import { RetroPixel } from './styles/RetroPixel';
import { GradientUI } from './styles/GradientUI';
import { DarkUI } from './styles/DarkUI';
import { AuroraUI } from './styles/AuroraUI';
import { BentoUI } from './styles/BentoUI';
import { FrostedUI } from './styles/FrostedUI';
import { MotionUI } from './styles/MotionUI';
import { OrganicUI } from './styles/OrganicUI';
import { SwissStyle } from './styles/SwissStyle';
import { EditorialUI } from './styles/EditorialUI';
import { IndustrialUI } from './styles/IndustrialUI';
import { TerminalUI } from './styles/TerminalUI';
import { CyberpunkUI } from './styles/CyberpunkUI';
import { FuturisticHUD } from './styles/FuturisticHUD';
import { GamifiedUI } from './styles/GamifiedUI';
import { MemphisDesign } from './styles/MemphisDesign';
import { FrutigerAero } from './styles/FrutigerAero';
import { AppleMinimalism } from './styles/AppleMinimalism';
import { FlatDesign } from './styles/FlatDesign';
import { MaterialDesign } from './styles/MaterialDesign';
import { FluentDesign } from './styles/FluentDesign';
import { OrganicMinimalism } from './styles/OrganicMinimalism';
import { Cybercore } from './styles/Cybercore';
import { Scrapbook } from './styles/Scrapbook';
import { Surrealism } from './styles/Surrealism';
import { Synthwave } from './styles/Synthwave';
import { Maximalism } from './styles/Maximalism';
import { LuxuryTypography } from './styles/LuxuryTypography';
import { ConceptualSketch } from './styles/ConceptualSketch';
import { Ethereal } from './styles/Ethereal';
import { Bohemian } from './styles/Bohemian';
import { Victorian } from './styles/Victorian';
import { WabiSabi } from './styles/WabiSabi';
import { PixelArt } from './styles/PixelArt';
import { ArtDeco } from './styles/ArtDeco';
import { Bauhaus } from './styles/Bauhaus';
import { Vaporwave } from './styles/Vaporwave';
import { Solarpunk } from './styles/Solarpunk';
import { Cottagecore } from './styles/Cottagecore';
import { KawaiiUI } from './styles/KawaiiUI';
import { HolographicUI } from './styles/HolographicUI';
import { MonochromaticUI } from './styles/MonochromaticUI';
import { LiquidUI } from './styles/LiquidUI';
import { PaperUI } from './styles/PaperUI';

const COMPONENT_MAP = {
  'glassmorphism': Glassmorphism,
  'claymorphism': Claymorphism,
  'neumorphism': Neumorphism,
  'skeuomorphism': Skeuomorphism,
  'brutalism': Brutalism,
  'neobrutalism': Neobrutalism,
  'y2k': Y2K,
  'retro-pixel': RetroPixel,
  'gradient-ui': GradientUI,
  'dark-ui': DarkUI,
  'aurora-ui': AuroraUI,
  'bento-ui': BentoUI,
  'frosted-ui': FrostedUI,
  'motion-ui': MotionUI,
  'organic-ui': OrganicUI,
  'swiss-style': SwissStyle,
  'editorial-ui': EditorialUI,
  'industrial-ui': IndustrialUI,
  'terminal-ui': TerminalUI,
  'cyberpunk-ui': CyberpunkUI,
  'futuristic-hud': FuturisticHUD,
  'gamified-ui': GamifiedUI,
  'memphis-design': MemphisDesign,
  'frutiger-aero': FrutigerAero,
  'apple-minimalism': AppleMinimalism,
  'flat-design': FlatDesign,
  'material-design': MaterialDesign,
  'fluent-design': FluentDesign,
  'organic-minimalism': OrganicMinimalism,
  'cybercore': Cybercore,
  'scrapbook': Scrapbook,
  'surrealism': Surrealism,
  'synthwave': Synthwave,
  'maximalism': Maximalism,
  'luxury-typography': LuxuryTypography,
  'conceptual-sketch': ConceptualSketch,
  'ethereal': Ethereal,
  'bohemian': Bohemian,
  'victorian': Victorian,
  'wabi-sabi': WabiSabi,
  'pixel-art': PixelArt,
  'art-deco': ArtDeco,
  'bauhaus': Bauhaus,
  'vaporwave': Vaporwave,
  'solarpunk': Solarpunk,
  'cottagecore': Cottagecore,
  'kawaii-ui': KawaiiUI,
  'holographic-ui': HolographicUI,
  'monochromatic-ui': MonochromaticUI,
  'liquid-ui': LiquidUI,
  'paper-ui': PaperUI,
};

export default function App() {
  const [activeStyleId, setActiveStyleId] = useState(STYLES[0].id);
  const [aboutModalOpen, setAboutModalOpen] = useState(false);

  // Smooth Navigation Handler
  const handleNavigate = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const navOffset = 64;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  // Observe which section is currently active in viewport
  useEffect(() => {
    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveStyleId(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      root: null,
      rootMargin: '-30% 0px -60% 0px',
      threshold: 0
    });

    STYLES.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  // Keyboard shortcut: Cmd/Ctrl + K opens search
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        // Trigger search modal via navigation
        const searchBtn = document.querySelector('button[title="Jump to style..."]') || document.querySelector('button kbd');
        if (searchBtn) searchBtn.parentElement.click();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="min-h-screen bg-[#090b10] text-slate-100 flex flex-col selection:bg-indigo-500 selection:text-white">
      {/* 1. Sticky Global Navigation */}
      <Navigation
        styles={STYLES}
        activeStyleId={activeStyleId}
        onNavigate={handleNavigate}
        onOpenAbout={() => setAboutModalOpen(true)}
      />

      {/* 2. Hero Section */}
      <Hero
        onExploreClick={() => handleNavigate(STYLES[0].id)}
        stylesCount={STYLES.length}
      />

      {/* 3. Style Index Gallery (Preview Cards) */}
      <StyleIndex
        styles={STYLES}
        onSelectStyle={handleNavigate}
      />

      {/* 4. Sequential 51 Bespoke UI Style Dashboards */}
      <main className="flex-1">
        {STYLES.map((style, index) => {
          const Component = COMPONENT_MAP[style.id];
          const prevStyle = index > 0 ? STYLES[index - 1] : null;
          const nextStyle = index < STYLES.length - 1 ? STYLES[index + 1] : null;

          if (!Component) {
            console.error(`Missing component for style: ${style.id}`);
            return null;
          }

          return (
            <Component
              key={style.id}
              styleData={style}
              prevStyle={prevStyle}
              nextStyle={nextStyle}
              onNavigate={handleNavigate}
            />
          );
        })}
      </main>

      {/* 5. Laboratory Footer */}
      <footer className="border-t border-white/10 bg-[#06080c] py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-linear-to-tr from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center font-black text-white text-xs">
                //
              </div>
              <span className="font-extrabold tracking-tight text-white text-lg">UI//LAB</span>
            </div>
            <p className="text-xs text-slate-400 mt-2 max-w-md leading-relaxed">
              An interactive visual laboratory exploring {STYLES.length} distinct interface design movements. Dedicated to the craft of digital human-computer typography, depth, and spatial ergonomics.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 text-xs text-slate-400">
            <button
              onClick={() => setAboutModalOpen(true)}
              className="hover:text-white transition cursor-pointer"
            >
              Curatorial Statement
            </button>
            <button
              onClick={() => handleNavigate('style-index')}
              className="hover:text-white transition cursor-pointer"
            >
              All {STYLES.length} Systems Index
            </button>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="text-indigo-400 hover:text-indigo-300 transition font-semibold cursor-pointer"
            >
              Top of Gallery ↑
            </button>
          </div>
        </div>

        <div className="max-w-7xl mx-auto mt-10 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500 font-mono">
          <span>{STYLES.length} BESPOKE JSX DASHBOARDS • 100% TAILWIND CSS • REACT 19</span>
          <span>THE UI STYLE LAB © 2026</span>
        </div>
      </footer>

      {/* 6. Floating Desktop Quick Navigator */}
      <FloatingNavigator
        styles={STYLES}
        activeStyleId={activeStyleId}
        onNavigate={handleNavigate}
      />

      {/* 7. Back To Top Button */}
      <BackToTop />

      {/* 8. About Lab Modal */}
      <AboutModal
        isOpen={aboutModalOpen}
        onClose={() => setAboutModalOpen(false)}
        styles={STYLES}
      />
    </div>
  );
}