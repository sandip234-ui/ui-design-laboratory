import React, { useState, useEffect } from 'react';
import { IconChevronUp } from './Icons';

export const BackToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (!visible) return null;

  return (
    <button
      onClick={scrollToTop}
      className="fixed left-4 bottom-4 sm:left-6 sm:bottom-6 z-40 p-2.5 sm:p-3 rounded-full bg-[#121620]/90 backdrop-blur-md border border-white/20 text-slate-300 hover:text-white hover:border-indigo-500 shadow-xl transition-all duration-200 hover:scale-110 active:scale-95 cursor-pointer"
      title="Back to Top"
      aria-label="Back to Top"
    >
      <IconChevronUp className="w-4 h-4 sm:w-5 sm:h-5 text-indigo-400" />
    </button>
  );
};
