import { Search, Bell, Settings, X, Info } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';

export default function Header() {
  const [showNotifications, setShowNotifications] = useState(false);
  const [showSettings, setShowSettings] = useState(false);

  return (
    <header className="fixed top-0 w-full flex justify-between items-center px-6 h-16 bg-surface-lowest/50 backdrop-blur-xl border-b border-white/10 z-50">
      <div className="flex items-center gap-4">
        <Link to="/" className="font-headline text-sm font-black tracking-[0.2em] text-primary-container drop-shadow-[0_0_8px_rgba(0,242,255,0.5)] uppercase hover:opacity-80 transition-opacity">
          DEVTRACK_SYSTEM
        </Link>
      </div>

      <div className="flex-1 max-w-xl px-12 hidden md:block">
        <div className="relative group">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant/50" size={14} />
          <input 
            type="text" 
            placeholder="QUERY_REGISTRY..." 
            className="w-full bg-white/5 border-none focus:ring-1 focus:ring-primary-container rounded-lg py-2 pl-10 text-[10px] font-headline placeholder:text-on-surface-variant/30 transition-all text-white tracking-widest"
          />
        </div>
      </div>

      <div className="flex items-center gap-6">
        <div className="flex items-center gap-4 relative">
          {/* Notifications */}
          <button 
            onClick={() => { setShowNotifications(!showNotifications); setShowSettings(false); }}
            className={`text-on-surface-variant hover:text-primary-container transition-colors relative ${showNotifications ? 'text-primary-container' : ''}`}
          >
            <Bell size={20} />
            <span className="absolute top-0 right-0 w-2 h-2 bg-primary-container rounded-full shadow-[0_0_8px_#00f2ff]"></span>
          </button>

          <AnimatePresence>
            {showNotifications && (
              <motion.div 
                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 10, scale: 0.95 }}
                className="absolute top-12 right-0 w-80 glass-panel rounded-xl p-4 border border-white/10 shadow-2xl z-[60]"
              >
                <div className="flex justify-between items-center mb-4 pb-2 border-b border-white/5">
                  <h4 className="font-headline text-[10px] font-bold text-white uppercase tracking-widest">Active_Alerts</h4>
                  <button onClick={() => setShowNotifications(false)}><X size={14} className="text-on-surface-variant" /></button>
                </div>
                <div className="space-y-3">
                  <div className="flex gap-3 p-2 bg-white/5 rounded-lg border border-white/5">
                    <div className="w-8 h-8 rounded bg-primary-container/20 flex items-center justify-center shrink-0">
                      <Info size={14} className="text-primary-container" />
                    </div>
                    <div>
                      <p className="text-[10px] text-white font-headline leading-tight">SYSTEM_SYNC_SUCCESSFUL</p>
                      <p className="text-[9px] text-on-surface-variant mt-1">Node 7 recovery initiated by Auto-Fix.</p>
                    </div>
                  </div>
                  <div className="flex gap-3 p-2 bg-white/5 rounded-lg border border-white/5">
                    <div className="w-8 h-8 rounded bg-secondary-container/20 flex items-center justify-center shrink-0">
                      <Info size={14} className="text-secondary-container" />
                    </div>
                    <div>
                      <p className="text-[10px] text-white font-headline leading-tight">NEW_COLLABORATOR_JOINED</p>
                      <p className="text-[9px] text-on-surface-variant mt-1">Operator_027 linked to Nexus AI.</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Settings Toggle */}
          <button 
            onClick={() => { setShowSettings(!showSettings); setShowNotifications(false); }}
            className={`text-on-surface-variant hover:text-primary-container transition-colors ${showSettings ? 'text-primary-container' : ''}`}
          >
            <Settings size={20} />
          </button>

          <AnimatePresence>
            {showSettings && (
              <motion.div 
                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 10, scale: 0.95 }}
                className="absolute top-12 right-0 w-64 glass-panel rounded-xl p-4 border border-white/10 shadow-2xl z-[60]"
              >
                <div className="flex justify-between items-center mb-4 pb-2 border-b border-white/5">
                  <h4 className="font-headline text-[10px] font-bold text-white uppercase tracking-widest">Configuration</h4>
                </div>
                <div className="space-y-1">
                  <label className="flex items-center justify-between p-2 hover:bg-white/5 rounded transition-colors cursor-pointer group">
                    <span className="text-[9px] font-headline text-on-surface-variant group-hover:text-white uppercase tracking-tighter">LIGHT_THEME</span>
                    <button 
                      onClick={() => {
                        const isLight = document.documentElement.classList.toggle('light-theme');
                        localStorage.setItem('theme', isLight ? 'light' : 'dark');
                      }}
                      className="w-8 h-4 bg-black/50 rounded-full relative p-0.5 border border-white/10"
                    >
                      <motion.div 
                        initial={false}
                        animate={{ x: document.documentElement.classList.contains('light-theme') ? 0 : 16 }}
                        className="w-3 h-3 bg-primary-container rounded-full shadow-[0_0_5px_#00f2ff]"
                      />
                    </button>
                  </label>
                  {['DEBUG_MODE', 'TERMINAL_SOUNDS'].map((opt) => (
                    <label key={opt} className="flex items-center justify-between p-2 hover:bg-white/5 rounded transition-colors cursor-pointer group">
                      <span className="text-[9px] font-headline text-on-surface-variant group-hover:text-white uppercase tracking-tighter">{opt}</span>
                      <div className="w-8 h-4 bg-black/50 rounded-full relative p-0.5 border border-white/10">
                        <div className="w-3 h-3 bg-primary-container rounded-full shadow-[0_0_5px_#00f2ff] ml-auto"></div>
                      </div>
                    </label>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <Link 
          to="/profile"
          className="w-10 h-10 rounded-lg overflow-hidden border border-white/10 p-[1px] bg-gradient-to-br from-white/10 to-transparent hover:border-primary-container transition-all active:scale-95"
        >
          <img 
            src="https://picsum.photos/seed/operator/64/64" 
            alt="Operator" 
            className="w-full h-full object-cover rounded-[7px]"
            referrerPolicy="no-referrer"
          />
        </Link>
      </div>
    </header>
  );
}
