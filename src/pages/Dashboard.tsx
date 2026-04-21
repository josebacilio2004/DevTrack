import { motion } from 'motion/react';
import { Bolt, Wand2, AlertCircle, Info, ChevronRight, Share2, MoreVertical } from 'lucide-react';
import { useState } from 'react';

const projects = [
  { id: 1, name: 'Nexus AI', tags: ['React', 'Python'], progress: 75, img: 'https://picsum.photos/seed/nexus/400/225', color: 'cyan' },
  { id: 2, name: 'Quantum App', tags: ['Flutter', 'Rust'], progress: 40, img: 'https://picsum.photos/seed/quantum/400/225', color: 'purple' },
  { id: 3, name: 'Aether OS', tags: ['C++', 'Assembly'], progress: 90, img: 'https://picsum.photos/seed/aether/400/225', color: 'cyan' },
];

export default function Dashboard() {
  const [showToast, setShowToast] = useState(true);
  const [isDebugging, setIsDebugging] = useState(false);

  const handleDebug = () => {
    setIsDebugging(true);
    setTimeout(() => {
      setShowToast(false);
      setIsDebugging(false);
    }, 3000);
  };

  return (
    <div className="max-w-[1200px] mx-auto space-y-12">
      {/* Header */}
      <section>
        <motion.h1 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="font-headline text-5xl font-black text-white tracking-tighter mb-4 uppercase"
        >
          DevTrack_Overview
        </motion.h1>
        <p className="text-on-surface-variant font-sans text-lg max-w-2xl leading-relaxed">
          Welcome back, Architect. System nodes are synchronized at 99.4% efficiency. Data flow is optimal.
        </p>
      </section>

      {/* ... Hero Grid ... */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Activity Pulse Chart */}
        <div className="lg:col-span-8 glass-panel p-8 rounded-xl relative overflow-hidden h-[340px] flex flex-col justify-between group">
          <div className="relative z-10 flex justify-between items-start">
            <div>
              <h3 className="font-headline text-[10px] uppercase tracking-[0.2em] text-primary-container mb-2">Activity Pulse</h3>
              <p className="text-3xl font-headline text-white tracking-tight">4,281 <span className="text-xs text-on-surface-variant font-normal">TPS</span></p>
            </div>
            <div className="flex gap-2">
              <span className="px-3 py-1 bg-primary-container/10 text-primary-container text-[10px] font-headline rounded-sm border border-primary-container/20 tracking-widest">REAL-TIME</span>
            </div>
          </div>

          {/* Animated Wave SVG */}
          <div className="absolute bottom-0 left-0 w-full h-48 pointer-events-none opacity-40">
            <svg className="w-full h-full" viewBox="0 0 1000 200" preserveAspectRatio="none">
              <defs>
                <linearGradient id="cyan-grad" x1="0%" x2="0%" y1="0%" y2="100%">
                  <stop offset="0%" style={{ stopColor: 'rgba(0, 242, 255, 0.4)' }} />
                  <stop offset="100%" style={{ stopColor: 'rgba(0, 242, 255, 0)' }} />
                </linearGradient>
              </defs>
              <motion.path 
                initial={{ d: "M0,100 C150,150 250,50 400,100 C550,150 650,50 800,100 C950,150 1000,100 L1000,200 L0,200 Z" }}
                animate={{ d: [
                  "M0,100 C150,150 250,50 400,100 C550,150 650,50 800,100 C950,150 1000,100 L1000,200 L0,200 Z",
                  "M0,120 C150,80 250,120 400,80 C550,120 650,80 800,120 C950,80 1000,120 L1000,200 L0,200 Z",
                  "M0,100 C150,150 250,50 400,100 C550,150 650,50 800,100 C950,150 1000,100 L1000,200 L0,200 Z"
                ] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                fill="url(#cyan-grad)" 
              />
              <motion.path 
                initial={{ d: "M0,100 C150,150 250,50 400,100 C550,150 650,50 800,100 C950,150 1000,100" }}
                animate={{ d: [
                  "M0,100 C150,150 250,50 400,100 C550,150 650,50 800,100 C950,150 1000,100",
                  "M0,120 C150,80 250,120 400,80 C550,120 650,80 800,120 C950,80 1000,120",
                  "M0,100 C150,150 250,50 400,100 C550,150 650,50 800,100 C950,150 1000,100"
                ] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                fill="none" 
                stroke="#00f2ff" 
                strokeWidth="2"
                className="opacity-80"
              />
            </svg>
          </div>
        </div>

        {/* Action Widgets */}
        <div className="lg:col-span-4 flex flex-col gap-6">
          <div className="flex-1 glass-panel p-6 rounded-xl border border-white/5 group hover:border-primary-container/30 transition-all duration-300">
            <div className="flex justify-between items-center mb-4">
              <Bolt className="text-primary-container" size={18} />
              <span className="font-headline text-[9px] text-on-surface-variant uppercase tracking-widest">Uptime</span>
            </div>
            <p className="font-headline text-2xl text-white">99.98%</p>
            <div className="mt-6 h-1 w-full bg-white/5 rounded-full overflow-hidden">
              <motion.div 
                initial={{ width: 0 }}
                animate={{ width: '99.9%' }}
                className="h-full bg-primary-container shadow-[0_0_10px_#00f2ff]" 
              />
            </div>
          </div>
          <div className="flex-1 glass-panel p-6 rounded-xl border border-white/5 group hover:border-secondary-container/30 transition-all duration-300">
            <div className="flex justify-between items-center mb-4">
              <Wand2 className="text-secondary-container" size={18} />
              <span className="font-headline text-[9px] text-on-surface-variant uppercase tracking-widest">Refactor_Index</span>
            </div>
            <p className="font-headline text-2xl text-white">0.82</p>
            <div className="mt-6 h-1 w-full bg-white/5 rounded-full overflow-hidden">
              <motion.div 
                initial={{ width: 0 }}
                animate={{ width: '82%' }}
                className="h-full bg-secondary-container shadow-[0_0_10px_#b600f8]" 
              />
            </div>
          </div>
        </div>
      </div>

      {/* Project Section */}
      <section>
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-4">
            <div className="w-10 h-[1px] bg-primary-container" />
            <h2 className="font-headline text-xl text-white tracking-[0.2em] uppercase">Project_Constellation</h2>
          </div>
          <button className="font-headline text-[10px] text-primary-container uppercase tracking-widest hover:underline decoration-primary-container/30">View All Nodes</button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <motion.div 
              key={project.id}
              whileHover={{ y: -5 }}
              className={`glass-panel p-6 rounded-xl group transition-all duration-300 flex flex-col gap-6 ${project.color === 'cyan' ? 'hover:border-primary-container/30' : 'hover:border-secondary-container/30'}`}
            >
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="font-headline text-lg text-white mb-2 group-hover:text-primary-container transition-colors tracking-tight">{project.name}</h4>
                  <div className="flex gap-2">
                    {project.tags.map(tag => (
                      <span key={tag} className="text-[9px] px-2 py-1 rounded bg-white/5 text-on-surface-variant font-label border border-white/10 uppercase tracking-tighter">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="relative w-12 h-12 flex items-center justify-center">
                  <svg className="w-full h-full -rotate-90">
                    <circle cx="24" cy="24" r="20" fill="transparent" stroke="rgba(255,255,255,0.05)" strokeWidth="3" />
                    <motion.circle 
                      initial={{ strokeDashoffset: 125.6 }}
                      animate={{ strokeDashoffset: 125.6 * (1 - project.progress / 100) }}
                      cx="24" cy="24" r="20" 
                      fill="transparent" 
                      stroke={project.color === 'cyan' ? '#00f2ff' : '#b600f8'} 
                      strokeWidth="3"
                      strokeDasharray="125.6"
                      strokeLinecap="round"
                    />
                  </svg>
                  <span className="absolute font-headline text-[10px] text-white font-bold">{project.progress}%</span>
                </div>
              </div>

              <div className="aspect-video rounded-lg overflow-hidden border border-white/10 relative group-hover:border-white/20 transition-all">
                <img 
                  src={project.img} 
                  alt={project.name} 
                  className="w-full h-full object-cover brightness-[0.7] group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-60" />
              </div>

              <div className="flex justify-between items-center mt-auto pt-2">
                <div className="flex -space-x-2">
                  {[1, 2].map((i) => (
                    <img 
                      key={i} 
                      src={`https://picsum.photos/seed/user${i + project.id}/32/32`} 
                      className="w-6 h-6 rounded-full border border-surface"
                      referrerPolicy="no-referrer"
                    />
                  ))}
                </div>
                <button className="text-on-surface-variant hover:text-white transition-colors">
                  <ChevronRight size={20} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Notification Toast */}
      {showToast && (
        <motion.div 
          initial={{ x: 300, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          className="fixed top-24 right-8 z-[60] w-80 glass-panel border-error-container/30 rounded-xl p-5 shadow-[0_10px_40px_rgba(0,0,0,0.5)]"
        >
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-lg bg-error-container/20 flex items-center justify-center shrink-0">
              <AlertCircle className="text-error" size={20} />
            </div>
            <div className="flex-1">
              <h5 className="font-headline text-[11px] font-black text-error mb-1 uppercase tracking-widest glitch-text">Critical Build Error</h5>
              <p className="font-sans text-[11px] text-on-surface-variant mb-4 leading-relaxed">Quantum App: Core engine failure detected in Node 7.</p>
              <div className="flex gap-2">
                <button 
                  onClick={handleDebug} 
                  disabled={isDebugging}
                  className="px-4 py-2 bg-error-container text-white text-[9px] font-headline rounded hover:bg-error transition-colors uppercase tracking-widest disabled:opacity-50 min-w-[80px]"
                >
                  {isDebugging ? 'DEBUGGING...' : 'Debug'}
                </button>
                {!isDebugging && (
                  <button onClick={() => setShowToast(false)} className="px-4 py-2 border border-white/10 text-on-surface-variant text-[9px] font-headline rounded hover:bg-white/5 transition-colors uppercase tracking-widest">Dismiss</button>
                )}
              </div>
            </div>
            <button onClick={() => setShowToast(false)} className="text-on-surface-variant/40 hover:text-white transition-colors">
              <MoreVertical size={16} />
            </button>
          </div>
        </motion.div>
      )}
    </div>
  );
}
