import { Outlet, NavLink } from 'react-router-dom';
import Sidebar from './Sidebar';
import Header from './Header';
import { Terminal, Layers, LayoutGrid, User, X, Cpu, Globe, Rocket } from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export default function Layout() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
      document.documentElement.classList.add('light-theme');
    }
  }, []);

  return (
    <div className="min-h-screen bg-surface-lowest text-on-surface-variant flex flex-col font-sans">
      <Header />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar onNewProject={() => setIsModalOpen(true)} />
        <main className="flex-1 lg:pl-64 pt-16 min-h-screen overflow-y-auto pb-20 md:pb-8">
          <div className="p-4 md:p-8">
            <Outlet />
          </div>
        </main>
      </div>

      {/* New Project Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsModalOpen(false)}
              className="absolute inset-0 bg-black/80 backdrop-blur-sm" 
            />
            <motion.div 
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="relative w-full max-w-lg glass-panel rounded-2xl border border-white/10 p-8 shadow-[0_0_50px_rgba(0,242,255,0.1)]"
            >
              <div className="flex justify-between items-start mb-8">
                <div>
                  <h2 className="font-headline text-2xl font-black text-white tracking-widest uppercase mb-2">Initialize_Project</h2>
                  <p className="text-[10px] font-headline text-primary-container tracking-widest uppercase">Sequence: 07-ALPHA-PROT</p>
                </div>
                <button onClick={() => setIsModalOpen(false)} className="text-on-surface-variant hover:text-white transition-colors">
                  <X size={20} />
                </button>
              </div>

              <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); setIsModalOpen(false); }}>
                <div className="space-y-2">
                  <label className="font-headline text-[9px] text-on-surface-variant uppercase tracking-widest">Project_Signature</label>
                  <input 
                    type="text" 
                    placeholder="ENTER_NAME..." 
                    className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-xs font-headline text-white focus:ring-1 focus:ring-primary-container transition-all"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="font-headline text-[9px] text-on-surface-variant uppercase tracking-widest">Node_Cluster</label>
                    <select className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-xs font-headline text-white appearance-none">
                      <option>EU-NORTH-1</option>
                      <option>US-EAST-2</option>
                      <option>ASIA-SE-1</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="font-headline text-[9px] text-on-surface-variant uppercase tracking-widest">Protocol</label>
                    <div className="flex gap-2">
                      <button type="button" className="flex-1 bg-primary-container/10 border border-primary-container/20 py-3 rounded-lg text-primary-container flex justify-center"><Globe size={16} /></button>
                      <button type="button" className="flex-1 bg-white/5 border border-white/10 py-3 rounded-lg text-on-surface-variant flex justify-center"><Rocket size={16} /></button>
                    </div>
                  </div>
                </div>

                <div className="pt-6">
                  <button 
                    type="submit"
                    className="w-full py-4 bg-gradient-to-r from-primary-container to-primary-fixed-dim text-surface-lowest font-headline text-xs font-black tracking-[0.3em] rounded-lg shadow-[0_0_30px_rgba(0,242,255,0.3)] uppercase hover:brightness-110 active:scale-95 transition-all"
                  >
                    Deploy_Project
                  </button>
                </div>
              </form>

              <div className="mt-8 pt-6 border-t border-white/5 flex gap-4 opacity-30">
                <div className="flex items-center gap-2">
                  <Cpu size={12} />
                  <span className="text-[8px] font-headline uppercase">Auto_Scale_ON</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
                  <span className="text-[8px] font-headline uppercase">Network_OPTIMAL</span>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Bottom NavBar (Mobile Only) */}
      <nav className="md:hidden fixed bottom-0 left-0 w-full bg-surface-lowest/90 backdrop-blur-xl flex justify-around items-center h-16 z-50 border-t border-white/5">
        <NavLink to="/" className={({ isActive }) => `flex flex-col items-center gap-1 ${isActive ? 'text-primary-container' : 'text-on-surface-variant'}`}>
          <Terminal size={18} />
          <span className="text-[8px] font-headline">TERM</span>
        </NavLink>
        <NavLink to="/projects" className={({ isActive }) => `flex flex-col items-center gap-1 ${isActive ? 'text-primary-container' : 'text-on-surface-variant'}`}>
          <Layers size={18} />
          <span className="text-[8px] font-headline">PROJ</span>
        </NavLink>
        <NavLink to="/kanban" className={({ isActive }) => `flex flex-col items-center gap-1 ${isActive ? 'text-primary-container' : 'text-on-surface-variant'}`}>
          <LayoutGrid size={18} />
          <span className="text-[8px] font-headline">KANBAN</span>
        </NavLink>
        <NavLink to="/profile" className={({ isActive }) => `flex flex-col items-center gap-1 ${isActive ? 'text-primary-container' : 'text-on-surface-variant'}`}>
          <User size={18} />
          <span className="text-[8px] font-headline">USER</span>
        </NavLink>
      </nav>
    </div>
  );
}
