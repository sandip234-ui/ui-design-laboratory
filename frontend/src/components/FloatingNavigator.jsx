import React, { useState, useEffect, useRef } from 'react';
import { IconLayers, IconX } from './Icons';

export const FloatingNavigator = ({ styles, activeStyleId, onNavigate }) => {
  const [collapsed, setCollapsed] = useState(true);
  const containerRef = useRef(null);

  // Close on outside click
  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        setCollapsed(true);
      }
    };
    if (!collapsed) {
      document.addEventListener('mousedown', handleOutsideClick);
    }
    return () => document.removeEventListener('mousedown', handleOutsideClick);
  }, [collapsed]);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && !collapsed) {
        setCollapsed(true);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [collapsed]);

  return (
    <aside
      ref={containerRef}
      aria-label="Quick Style Navigation"
      className="fixed right-4 bottom-6 z-40 hidden xl:flex flex-col items-end"
    >
      {/* Expanded Dock */}
      {!collapsed ? (
        <div className="w-60 max-h-[60vh] bg-[#0c0f17]/95 backdrop-blur-md border border-white/20 rounded-2xl shadow-2xl p-2.5 flex flex-col mb-2 overflow-hidden animate-fadeIn">
          <div className="flex items-center justify-between px-2 py-1.5 border-b border-white/10 mb-1">
            <span className="text-[11px] font-mono uppercase tracking-wider text-slate-300 font-semibold flex items-center gap-1.5">
              <IconLayers className="w-3.5 h-3.5 text-indigo-400" />
              <span>Navigator ({styles.length})</span>
            </span>
            <button
              onClick={() => setCollapsed(true)}
              className="p-1 rounded-md text-slate-400 hover:text-white hover:bg-white/10"
              title="Collapse navigator"
            >
              <IconX className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="overflow-y-auto space-y-0.5 pr-1 text-xs">
            {styles.map((s) => {
              const isActive = activeStyleId === s.id;
              return (
                <button
                  key={s.id}
                  onClick={() => {
                    onNavigate(s.id);
                    setCollapsed(true); // Auto-close on jump to unblock viewport
                  }}
                  className={`w-full flex items-center justify-between px-2.5 py-1.5 rounded-lg text-left transition font-mono ${
                    isActive
                      ? 'bg-indigo-600 text-white font-bold shadow-sm'
                      : 'text-slate-300 hover:text-white hover:bg-white/10'
                  }`}
                >
                  <span className="flex items-center gap-2 truncate">
                    <span className={`text-[10px] ${isActive ? 'text-indigo-200' : 'text-slate-500'}`}>
                      {s.number}
                    </span>
                    <span className="truncate text-[11px] font-sans">
                      {s.name}
                    </span>
                  </span>
                  {isActive && (
                    <span className="w-1.5 h-1.5 rounded-full bg-white shrink-0 ml-1" />
                  )}
                </button>
              );
            })}
          </div>
        </div>
      ) : null}

      {/* Toggle Button */}
      <button
        onClick={() => setCollapsed(!collapsed)}
        className="flex items-center gap-2 px-3 py-2 rounded-full bg-[#11141d]/90 backdrop-blur-md border border-white/15 text-slate-200 hover:text-white hover:border-indigo-500/50 shadow-xl transition-all hover:scale-105 active:scale-95 cursor-pointer"
        title="Quick Style Navigator"
      >
        <div className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse" />
        <span className="text-xs font-mono font-medium">
          {collapsed ? 'Style Quick Jump' : 'Close Menu'}
        </span>
        <span className="text-[10px] font-mono bg-white/10 px-1.5 py-0.5 rounded-full text-slate-300">
          {styles.length}
        </span>
      </button>
    </aside>
  );
};
