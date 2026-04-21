import { motion } from 'motion/react';
import { Shield, Rocket, Zap, Cloud, Trash, Lock, TrendingUp, CheckCircle2, MoreVertical, Terminal } from 'lucide-react';

const achievements = [
  { icon: Cloud, label: 'Cloud Master', desc: 'Deploy 100 clusters', color: 'text-primary-container', bg: 'bg-primary-container/10' },
  { icon: Trash, label: 'Clean Coder', desc: '0 lint errors for 30 days', color: 'text-secondary-container', bg: 'bg-secondary-container/10' },
  { icon: Zap, label: 'Speed Demon', desc: 'Sub-100ms API response', color: 'text-yellow-400', bg: 'bg-yellow-400/10' },
  { icon: Shield, label: 'Security Titan', desc: 'Block 1M intrusion attempts', color: 'text-primary-container', bg: 'bg-primary-container/10' },
  { icon: Lock, label: 'Neural Link', desc: 'Reach Level 50', locked: true },
];

export default function Profile() {
  return (
    <div className="max-w-[1200px] mx-auto space-y-12">
      <header className="mb-12">
        <h1 className="font-headline text-4xl font-black text-white tracking-tighter mb-4 uppercase">DEVTRACK_Operator_Stats</h1>
        <p className="text-on-surface-variant font-sans max-w-2xl text-lg opacity-80">
          Visualizing performance metrics and mission progress for Operator 01. Telemetry synchronization active.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
        {/* Large Level Card */}
        <section className="md:col-span-8 glass-panel rounded-2xl p-10 relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none group-hover:opacity-10 transition-opacity">
            <Shield size={200} className="fill-current" />
          </div>
          
          <div className="relative z-10 flex flex-col h-full justify-between space-y-12">
            <div>
              <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-primary-container/10 border border-primary-container/20 mb-8 backdrop-blur-md">
                <span className="w-2 h-2 rounded-full bg-primary-container animate-pulse shadow-[0_0_8px_#00f2ff]" />
                <span className="font-headline text-[10px] font-bold text-primary-container tracking-[0.2em] uppercase">Rank: Apex Specialist</span>
              </div>
              
              <h2 className="font-headline text-5xl md:text-6xl font-black text-white mb-4 tracking-tighter">Level: Senior Architect</h2>
              <p className="font-headline text-primary-container/70 text-sm tracking-[0.3em] uppercase">XP Progress: 88,420 / 100,000</p>
            </div>

            <div className="space-y-6">
              <div className="flex justify-between font-headline text-[10px] tracking-[0.2em] text-on-surface-variant uppercase">
                <span>Integration Stability</span>
                <span className="text-primary-container">88%</span>
              </div>
              <div className="w-full h-4 bg-surface-lowest rounded-full p-1 shadow-inner border border-white/5 overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: '88%' }}
                  className="h-full bg-gradient-to-r from-primary-fixed-dim via-primary-container to-primary-fixed-dim rounded-full shadow-[0_0_15px_rgba(0,242,255,0.4)]" 
                />
              </div>
            </div>
          </div>
        </section>

        {/* Small Stat Column */}
        <div className="md:col-span-4 flex flex-col gap-8">
          <div className="glass-panel rounded-2xl p-8 border-l-4 border-primary-container relative group">
            <div className="flex items-center justify-between mb-6">
              <span className="font-headline text-[10px] text-on-surface-variant uppercase tracking-[0.2em]">Total Commits</span>
              <Terminal className="text-primary-container/50 group-hover:text-primary-container transition-colors" size={20} />
            </div>
            <div className="font-headline text-5xl font-black text-white mb-4">1.2k</div>
            <div className="flex items-center gap-2 text-[10px] text-primary-container font-headline uppercase tracking-widest">
              <TrendingUp size={14} />
              <span>+14% from last cycle</span>
            </div>
          </div>

          <div className="glass-panel rounded-2xl p-8 border-l-4 border-secondary-container relative group">
            <div className="flex items-center justify-between mb-6">
              <span className="font-headline text-[10px] text-on-surface-variant uppercase tracking-[0.2em]">Projects Completed</span>
              <Rocket className="text-secondary-container/50 group-hover:text-secondary-container transition-colors" size={20} />
            </div>
            <div className="font-headline text-5xl font-black text-white mb-4">18</div>
            <div className="flex items-center gap-2 text-[10px] text-secondary-container font-headline uppercase tracking-widest">
              <CheckCircle2 size={14} />
              <span>100% success rate</span>
            </div>
          </div>
        </div>

        {/* Heatmap Section */}
        <section className="md:col-span-12 glass-panel rounded-2xl p-10">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-10 gap-6">
            <div>
              <h3 className="font-headline text-xl font-black text-white uppercase tracking-[0.2em] mb-2">Neural Activity Pattern</h3>
              <p className="text-on-surface-variant text-xs font-sans opacity-70 italic tracking-wide">Sub-routine execution frequency over the last 12 operational months</p>
            </div>
            <div className="flex gap-6 items-center font-headline text-[10px] text-on-surface-variant tracking-widest">
              <span>LESS</span>
              <div className="flex gap-1.5">
                <div className="w-3.5 h-3.5 bg-surface-low/50 rounded-sm" />
                <div className="w-3.5 h-3.5 bg-secondary-container/20 rounded-sm" />
                <div className="w-3.5 h-3.5 bg-secondary-container/40 rounded-sm" />
                <div className="w-3.5 h-3.5 bg-secondary-container/70 rounded-sm" />
                <div className="w-3.5 h-3.5 bg-secondary-container rounded-sm shadow-[0_0_10px_rgba(182,0,248,0.5)]" />
              </div>
              <span>MORE</span>
            </div>
          </div>

          <div className="w-full overflow-x-auto custom-scrollbar pb-2">
            <div className="grid grid-flow-col grid-rows-7 gap-2 min-w-[900px]">
              {Array.from({ length: 52 * 7 }).map((_, i) => {
                const intensity = Math.random();
                return (
                  <motion.div 
                    key={i}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: i * 0.002 }}
                    className={`w-3.5 h-3.5 rounded-sm transition-all duration-300 ${
                      intensity > 0.8 ? 'bg-secondary-container shadow-[0_0_5px_rgba(182,0,248,0.3)]' :
                      intensity > 0.5 ? 'bg-secondary-container/60' :
                      intensity > 0.2 ? 'bg-secondary-container/20' : 'bg-surface-low/30'
                    }`}
                  />
                );
              })}
            </div>
          </div>
        </section>

        {/* Achievements Section */}
        <section className="md:col-span-12">
          <div className="flex items-center gap-6 mb-10">
            <h3 className="font-headline text-xl font-black text-white uppercase tracking-[0.2em] shrink-0">Unlocked Achievements</h3>
            <div className="h-[1px] w-full bg-gradient-to-r from-white/10 to-transparent" />
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {achievements.map((item, idx) => (
              <motion.div 
                key={idx}
                whileHover={!item.locked ? { y: -8, scale: 1.02 } : {}}
                className={`glass-panel p-8 rounded-2xl flex flex-col items-center text-center group transition-all duration-300 border-b-2 border-transparent ${!item.locked && 'hover:border-primary-container/20'} ${item.locked && 'opacity-40 grayscale pointer-events-none'}`}
              >
                <div className={`w-16 h-16 mb-6 flex items-center justify-center relative ${item.locked ? 'text-neutral-600' : ''}`}>
                  {!item.locked && <div className={`absolute inset-0 ${item.bg} blur-2xl rounded-full group-hover:blur-3xl transition-all`} />}
                  <item.icon size={40} className={`relative z-10 ${item.color || 'text-neutral-500'} ${!item.locked && 'drop-shadow-[0_0_8px_currentColor]'}`} />
                </div>
                <div className="font-headline text-[10px] font-black text-white mb-2 uppercase tracking-widest">{item.label}</div>
                <div className="text-[9px] text-on-surface-variant font-headline uppercase leading-relaxed tracking-wider">{item.desc}</div>
              </motion.div>
            ))}
          </div>
        </section>
      </div>

      {/* Decorative Layer Shards */}
      <div className="fixed inset-0 pointer-events-none z-[-1] overflow-hidden opacity-30">
        <div className="absolute top-1/3 right-[-5%] w-96 h-96 bg-secondary-container/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/3 left-[-5%] w-[500px] h-[500px] bg-primary-container/5 rounded-full blur-[150px]" />
      </div>
    </div>
  );
}
