import { motion, Reorder } from 'motion/react';
import { Columns, Terminal, Bolt, Info, Timer, Play, HelpCircle, CheckCircle2, Paperclip, MessageSquare, Filter, MoreHorizontal, ChevronLeft, ChevronRight, GripVertical } from 'lucide-react';
import { useState } from 'react';

const columns = [
  { id: 'todo', label: '01 // TO_DO', color: 'text-on-surface-variant' },
  { id: 'progress', label: '02 // IN_PROGRESS', color: 'text-primary-container' },
  { id: 'review', label: '03 // REVIEW', color: 'text-secondary-container' },
  { id: 'done', label: '04 // DONE', color: 'text-green-400' },
];

const initialTasks = [
  { 
    id: 1, 
    col: 'todo', 
    title: '#INIT_DB_SHARDING', 
    desc: 'Execute database sharding for the main telemetry cluster to support 1M+ RPS.', 
    author: 'OP', 
    type: 'tech' 
  },
  { 
    id: 2, 
    col: 'todo', 
    title: '#UI_REFACTOR_V2', 
    desc: 'Port standard components to the Neural Interface design system tokens.', 
    tag: 'LOW_PRIORITY', 
    type: 'ui' 
  },
  { 
    id: 3, 
    col: 'progress', 
    title: '#GLITCH_ANIM_SYS', 
    desc: 'Implementing CSS hardware-accelerated glitch shaders for error states.', 
    progress: 65, 
    status: 'ACTIVE', 
    active: true 
  },
  { 
    id: 4, 
    col: 'review', 
    title: '#API_LOAD_TEST', 
    desc: 'Verify node clusters remain stable during 150% peak simulation.', 
    img: 'https://picsum.photos/seed/chart/300/100', 
    meta: '3 CO-SIGNS' 
  },
  { 
    id: 5, 
    col: 'done', 
    title: '#AUTH_LAYER_V1', 
    desc: 'OAuth2 Integration complete with biometric fallbacks.', 
    done: true 
  },
];

export default function Kanban() {
  const [tasks, setTasks] = useState(initialTasks);
  const [draggedId, setDraggedId] = useState<number | null>(null);

  const handleDragEnd = (taskId: number, info: any) => {
    setDraggedId(null);
    const dropX = info.point.x;
    const dropY = info.point.y;
    
    // Simple heuristic to detect which column the task was dropped in
    // This assumes 4 columns in a grid layout. In a real app we'd use refs and getBoundingClientRect.
    const container = document.getElementById('kanban-container');
    if (!container) return;
    
    const rect = container.getBoundingClientRect();
    const colWidth = rect.width / columns.length;
    const relativeX = dropX - rect.left;
    
    const targetColIndex = Math.floor(relativeX / colWidth);
    if (targetColIndex >= 0 && targetColIndex < columns.length) {
      const targetColId = columns[targetColIndex].id;
      setTasks(prev => prev.map(task => {
        if (task.id === taskId) {
          return { ...task, col: targetColId, done: targetColId === 'done' };
        }
        return task;
      }));
    }
  };

  const moveTask = (taskId: number, direction: 'left' | 'right') => {
    setTasks(prev => prev.map(task => {
      if (task.id === taskId) {
        const currentIndex = columns.findIndex(c => c.id === task.col);
        const nextIndex = direction === 'right' ? currentIndex + 1 : currentIndex - 1;
        if (nextIndex >= 0 && nextIndex < columns.length) {
          return { ...task, col: columns[nextIndex].id, done: columns[nextIndex].id === 'done' };
        }
      }
      return task;
    }));
  };

  return (
    <div className="max-w-[1400px] mx-auto space-y-12">
      {/* Page Header */}
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8">
        <div>
          <h1 className="font-headline text-4xl font-black text-white tracking-tight mb-2 uppercase">DevTrack_Mission_Control_09</h1>
          <p className="text-on-surface-variant font-sans tracking-wide">Optimization & Infrastructure Lifecycle</p>
        </div>
        
        <div className="flex gap-6 items-center">
          <div className="glass-panel px-6 py-4 rounded-xl flex items-center gap-4 relative overflow-hidden group border-l-4 border-green-500/50">
            <div className="relative">
              <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse shadow-[0_0_15px_#4ade80]" />
            </div>
            <div>
              <p className="font-headline text-[9px] uppercase text-on-surface-variant tracking-widest">System Health</p>
              <p className="font-headline text-md font-bold text-green-400 tracking-tight">PROJECT HEALTHY</p>
            </div>
          </div>

          <div className="glass-panel p-2 pl-6 pr-4 rounded-xl flex items-center gap-8 border-l-4 border-secondary-container">
            <div className="relative w-14 h-14 flex items-center justify-center">
              <svg className="w-full h-full -rotate-90">
                <circle cx="28" cy="28" r="24" fill="transparent" stroke="rgba(255,255,255,0.05)" strokeWidth="3" />
                <circle cx="28" cy="28" r="24" fill="transparent" stroke="#b600f8" strokeWidth="3" strokeDasharray="150" strokeDashoffset="37.5" strokeLinecap="round" className="drop-shadow-[0_0_5px_#b600f8]" />
              </svg>
              <span className="absolute font-headline text-[10px] font-bold text-white tracking-tighter">45:00</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="font-headline text-[9px] uppercase text-on-surface-variant tracking-widest">Current Focus</span>
              <button className="bg-secondary-container text-white px-4 py-1.5 rounded-sm font-headline text-[9px] font-bold uppercase tracking-widest hover:brightness-110 active:scale-95 transition-all glow-purple">
                Start Session
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Task System */}
      <section>
        <div className="flex justify-between items-center mb-8">
          <h3 className="font-headline text-lg text-primary-container font-black flex items-center gap-3 uppercase tracking-widest">
            <Columns size={20} />
            Task_Flow_System
          </h3>
          <div className="flex gap-4">
            <button className="text-on-surface-variant hover:text-white transition-colors"><Filter size={18} /></button>
            <button className="text-on-surface-variant hover:text-white transition-colors"><MoreHorizontal size={18} /></button>
          </div>
        </div>

        <div id="kanban-container" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {columns.map((col) => (
            <div key={col.id} className="flex flex-col gap-6 ">
              <div className="flex items-center justify-between px-2">
                <span className={`font-headline text-[10px] font-bold tracking-[0.2em] ${col.color} uppercase`}>{col.label}</span>
                <span className="bg-surface-low text-white px-2 py-0.5 rounded text-[10px] font-bold">
                  {tasks.filter(t => t.col === col.id).length}
                </span>
              </div>
              
              <div className="space-y-4 min-h-[500px] rounded-xl bg-white/[0.02] p-2 border border-white/[0.02]">
                {tasks.filter(t => t.col === col.id).map((task) => (
                  <motion.div 
                    layout
                    key={task.id}
                    drag
                    dragSnapToOrigin
                    onDragStart={() => setDraggedId(task.id)}
                    onDragEnd={(_, info) => handleDragEnd(task.id, info)}
                    whileHover={{ y: -2 }}
                    whileDrag={{ scale: 1.05, rotate: 2, zIndex: 50 }}
                    className={`glass-panel p-5 rounded-xl border-l-[3px] transition-all relative group cursor-grab active:cursor-grabbing ${
                      draggedId === task.id ? 'opacity-50 ring-2 ring-primary-container/50' : ''
                    } ${
                      task.col === 'progress' ? 'border-primary-container shadow-[inset_0_0_20px_rgba(0,242,255,0.05)]' : 
                      task.col === 'review' ? 'border-secondary-container' : 
                      task.col === 'done' ? 'border-green-500/30 opacity-60' : 'border-outline-variant'
                    }`}
                  >
                    <div className="flex justify-between items-start mb-3">
                      <p className={`font-headline text-[11px] font-bold tracking-tight ${task.done ? 'text-neutral-500' : 'text-white'}`}>{task.title}</p>
                      <div className="flex gap-2">
                        {task.active && <Bolt size={14} className="text-primary-container fill-primary-container" />}
                        <GripVertical size={14} className="text-on-surface-variant/20 group-hover:text-on-surface-variant/50 transition-colors" />
                      </div>
                    </div>
                    
                    {task.img && (
                      <div className="aspect-[3/1] mb-4 rounded overflow-hidden brightness-75 grayscale hover:grayscale-0 transition-all duration-500">
                        <img src={task.img} alt="task preview" className="w-full h-full object-cover" />
                      </div>
                    )}

                    <p className={`text-[11px] font-sans leading-relaxed mb-4 ${task.done ? 'text-neutral-600 line-through' : 'text-on-surface-variant'}`}>
                      {task.desc}
                    </p>

                    {task.progress !== undefined && (
                      <div className="w-full bg-white/5 h-1 rounded-full overflow-hidden mb-4">
                        <div className="bg-primary-container h-full" style={{ width: `${task.progress}%` }} />
                      </div>
                    )}

                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-2">
                        {task.tag && (
                          <span className="bg-surface-low text-secondary-container px-2 py-0.5 rounded text-[8px] font-headline uppercase">{task.tag}</span>
                        )}
                        {task.author && (
                          <div className="w-6 h-6 rounded-full bg-primary-container/20 border border-primary-container/30 flex items-center justify-center text-[8px] font-headline text-primary-container font-black">{task.author}</div>
                        )}
                        {task.status && (
                          <span className="text-[9px] font-headline text-primary-container tracking-widest">{task.status}</span>
                        )}
                        {task.meta && (
                          <div className="flex items-center gap-1 text-on-surface-variant/50 text-[9px]">
                            <HelpCircle size={12} />
                            <span className="font-headline">{task.meta}</span>
                          </div>
                        )}
                      </div>
                      
                      <div className="flex items-center gap-3">
                        <div className="flex gap-2">
                          <button 
                            onClick={(e) => { e.stopPropagation(); moveTask(task.id, 'left'); }} 
                            className="w-7 h-7 flex items-center justify-center bg-white/5 border border-white/10 rounded-md hover:bg-primary-container/20 hover:text-primary-container hover:border-primary-container/30 disabled:opacity-0 transition-all active:scale-90"
                            disabled={task.col === 'todo'}
                            title="Move Left"
                          >
                            <ChevronLeft size={16} />
                          </button>
                          <button 
                            onClick={(e) => { e.stopPropagation(); moveTask(task.id, 'right'); }} 
                            className="w-7 h-7 flex items-center justify-center bg-white/5 border border-white/10 rounded-md hover:bg-primary-container/20 hover:text-primary-container hover:border-primary-container/30 disabled:opacity-0 transition-all active:scale-90"
                            disabled={task.col === 'done'}
                            title="Move Right"
                          >
                            <ChevronRight size={16} />
                          </button>
                        </div>
                        {task.col === 'todo' && <Paperclip size={14} className="text-on-surface-variant/30" />}
                        {task.tag === 'LOW_PRIORITY' && <MessageSquare size={14} className="text-on-surface-variant/30" />}
                        {task.done && <CheckCircle2 size={16} className="text-green-500" />}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
      
      {/* Footer Visuals remain same */}
      <div className="grid grid-cols-1 xl:grid-cols-12 gap-8 pb-12">
        <div className="xl:col-span-8">
          <div className="glass-panel p-8 rounded-xl h-[340px] relative overflow-hidden flex flex-col justify-between group">
            <div className="relative z-10">
              <h4 className="font-headline text-[10px] uppercase tracking-[0.2em] text-primary-container mb-2">Real-Time_Traffic</h4>
              <p className="text-4xl font-black font-headline text-white tracking-tight">48,291 <span className="text-xs font-normal text-on-surface-variant tracking-normal">REQ/SEC</span></p>
            </div>
            
            <div className="flex items-end gap-1 h-32 relative z-10">
              {[0.4, 0.6, 0.8, 1, 0.9, 0.5, 0.7, 0.3, 0.5, 0.4, 0.6, 0.8, 1, 0.9, 0.5, 0.7, 0.3, 0.5].map((h, i) => (
                <motion.div 
                  key={i}
                  initial={{ height: 0 }}
                  animate={{ height: `${h * 100}%` }}
                  transition={{ delay: i * 0.05 }}
                  className={`flex-1 rounded-t-sm transition-all duration-300 ${h === 1 ? 'bg-primary-container shadow-[0_0_15px_rgba(0,242,255,0.5)]' : 'bg-primary-container/20 hover:bg-primary-container/40'}`}
                />
              ))}
            </div>

            <div className="absolute inset-0 pointer-events-none opacity-[0.03]">
              <svg className="w-full h-full" viewBox="0 0 200 200">
                <path d="M 0 100 Q 50 20 100 100 T 200 100" fill="none" stroke="currentColor" strokeWidth="0.5" />
                <path d="M 0 110 Q 50 30 100 110 T 200 110" fill="none" stroke="currentColor" strokeWidth="0.5" />
              </svg>
            </div>
          </div>
        </div>

        <div className="xl:col-span-4">
          <div className="glass-panel p-6 rounded-xl h-[340px] flex flex-col font-headline border-t-2 border-primary-container/50">
            <div className="flex items-center justify-between mb-6">
              <span className="text-[10px] text-primary-container font-black tracking-[0.2em] uppercase">Console_Output</span>
              <div className="flex gap-1.5">
                <div className="w-2 h-2 rounded-full bg-red-500/30" />
                <div className="w-2 h-2 rounded-full bg-yellow-500/30" />
                <div className="w-2 h-2 rounded-full bg-green-500/30" />
              </div>
            </div>
            
            <div className="flex-1 space-y-3 font-mono text-[9px] overflow-hidden">
              <p className="text-green-500/80"><span className="opacity-50">[09:42:01]</span> Connection verified: Cluster-A... OK</p>
              <p className="text-on-surface-variant"><span className="opacity-50">[09:42:04]</span> Fetching pending shards...</p>
              <p className="text-on-surface-variant"><span className="opacity-50">[09:42:08]</span> Processing data integrity check [########--]</p>
              <p className="text-secondary-fixed-dim/80"><span className="opacity-50">[09:42:15]</span> LOG: User_042 initiated focused session (45min)</p>
              <p className="text-error/70"><span className="opacity-50">[09:42:22]</span> Warning: High latency on edge node HK-02</p>
              <motion.p 
                animate={{ opacity: [0.3, 1, 0.3] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="text-primary-container"
              ><span className="opacity-50">[09:42:30]</span> &gt; System status: OPTIMAL</motion.p>
              <p className="text-neutral-600">_</p>
            </div>

            <div className="mt-4 pt-4 border-t border-white/5">
              <div className="bg-black/40 p-2.5 rounded border border-white/5 flex items-center gap-3">
                <span className="text-primary-container font-black select-none">&gt;</span>
                <motion.span 
                  animate={{ opacity: [0, 1, 0] }}
                  transition={{ duration: 0.8, repeat: Infinity }}
                  className="w-1 h-3 bg-primary-container/50" 
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
