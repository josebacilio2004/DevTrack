import { LayoutDashboard, Terminal, Layers, LayoutGrid, BarChart3, History, FileText, HelpCircle, User } from 'lucide-react';
import { NavLink } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';

const navItems = [
  { icon: Terminal, label: 'Terminal', path: '/' },
  { icon: Layers, label: 'Projects', path: '/projects' },
  { icon: LayoutGrid, label: 'Kanban', path: '/kanban' },
  { icon: User, label: 'Profile', path: '/profile' },
  { icon: History, label: 'Archive', path: '/archive' },
];

export default function Sidebar({ onNewProject }: { onNewProject: () => void }) {
  const [showSupport, setShowSupport] = useState(false);

  return (
    <>
      <aside className="fixed left-0 top-0 h-screen w-64 border-r border-white/5 bg-surface-lowest/80 backdrop-blur-2xl z-40 hidden lg:flex flex-col pt-20 pb-6">
        <div className="px-6 mb-8">
          <NavLink to="/profile" className="flex items-center gap-3 p-3 bg-surface-low rounded-xl border border-white/5 group hover:border-primary-container/30 transition-all">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary-container to-secondary-container p-[1px]">
              <div className="w-full h-full bg-surface-lowest rounded-lg flex items-center justify-center">
                <Terminal size={20} className="text-primary-container" />
              </div>
            </div>
            <div>
              <div className="font-headline text-[10px] font-bold text-white uppercase tracking-widest group-hover:text-primary-container transition-colors">Operator_01</div>
              <div className="font-headline text-[8px] text-on-surface-variant uppercase tracking-tighter">Level 42 Architect</div>
            </div>
          </NavLink>
        </div>

        <nav className="flex-1 space-y-1">
          {navItems.map((item) => (
            <NavLink
              key={item.label}
              to={item.path}
              className={({ isActive }) => `
                flex items-center gap-3 px-6 py-3 font-headline font-medium text-[10px] tracking-wider transition-all duration-200
                ${isActive 
                  ? 'text-primary-container bg-primary-container/10 border-r-2 border-primary-container drop-shadow-[0_0_10px_rgba(0,242,255,0.2)]' 
                  : 'text-on-surface-variant hover:text-white hover:bg-white/5 hover:translate-x-1'}
              `}
            >
              <item.icon size={16} />
              <span className="uppercase">{item.label}</span>
            </NavLink>
          ))}
        </nav>

        <div className="px-4 py-4 mt-auto">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={onNewProject}
            id="new-proj-btn"
            className="w-full py-4 bg-gradient-to-r from-primary-container to-primary-fixed-dim text-surface-lowest font-headline text-[10px] font-black tracking-[0.2em] rounded-lg shadow-[0_0_20px_rgba(0,242,255,0.25)] uppercase transition-all duration-500"
          >
            New_Project
          </motion.button>
        </div>

        <div className="border-t border-white/5 pt-4">
          <a 
            href="https://github.com/DevTrack/docs" 
            target="_blank" 
            rel="noreferrer"
            className="flex items-center gap-3 px-6 py-2 text-on-surface-variant hover:text-white font-headline text-[10px] transition-colors"
          >
            <FileText size={14} /> <span className="uppercase tracking-widest">Documentation</span>
          </a>
          <button 
            onClick={() => setShowSupport(true)}
            className="w-full flex items-center gap-3 px-6 py-2 text-on-surface-variant hover:text-white font-headline text-[10px] transition-colors"
          >
            <HelpCircle size={14} /> <span className="uppercase tracking-widest">Support</span>
          </button>
        </div>
      </aside>

      <AnimatePresence>
        {showSupport && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowSupport(false)}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            />
            <motion.div 
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="relative w-full max-w-md glass-panel p-8 rounded-xl border border-white/10"
            >
              <h3 className="font-headline text-lg text-white uppercase tracking-[0.2em] mb-4">Support_Nexus</h3>
              <p className="text-[11px] text-on-surface-variant mb-6 leading-relaxed">System connection failed? Node corruption suspected? Open a transmission with our core architects.</p>
              <div className="space-y-4">
                <button className="w-full py-3 bg-white/5 border border-white/10 rounded-lg text-white font-headline text-[10px] tracking-widest uppercase hover:bg-white/10 transition-all">Submit_Ticket</button>
                <button onClick={() => setShowSupport(false)} className="w-full py-3 text-on-surface-variant font-headline text-[10px] tracking-widest uppercase hover:text-white transition-all">Close</button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
