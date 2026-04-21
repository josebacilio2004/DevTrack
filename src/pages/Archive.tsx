import { motion } from 'motion/react';
import { History, FileText, Database, Shield, Lock, Search, Filter, ChevronDown, Download } from 'lucide-react';

const archivalData = [
  { date: '2194.04.18', time: '14:22:01', label: 'SHARD_BETA_DEPLOY', status: 'SUCCESS', details: 'Successful encryption of the neural core protocol v7.4. All nodes verified.', user: 'OPERATOR_01' },
  { date: '2194.04.15', time: '09:12:45', label: 'INTRUSION_BLOCK', status: 'CRITICAL', details: 'Detected and neutralized unauthorized uplink attempt from unknown node 0x7E.', user: 'SYS_GUARDIAN' },
  { date: '2194.04.12', time: '23:55:12', label: 'DATA_MIGRATION', status: 'WARNING', details: 'Migration of historical telemetry data for sector 7 completed with 2% packet loss.', user: 'AUTO_DAEMON' },
  { date: '2194.04.10', time: '11:04:33', label: 'KERNEL_UPDATE', status: 'SUCCESS', details: 'Hotfix applied to Aether OS kernel. Low-level assembly optimizations active.', user: 'ENGINEER_04' },
  { date: '2194.04.08', time: '18:42:09', label: 'USER_REGISTRATION', status: 'INFO', details: 'Authorized new operator node. Identity verified via biometric hash.', user: 'AUTH_SERVICE' },
];

export default function Archive() {
  return (
    <div className="max-w-[1200px] mx-auto space-y-12 pb-20">
      <header className="flex flex-col gap-4">
        <div className="flex items-center gap-4">
          <History className="text-secondary-container" size={32} />
          <h1 className="font-headline text-5xl font-black text-white tracking-widest uppercase">System_Archive</h1>
        </div>
        <p className="text-on-surface-variant font-sans text-lg max-w-2xl opacity-70">
          Historical record of all system events, shard deployments, and security incidents. Encrypted and immutable.
        </p>
      </header>

      {/* Archive Toolbar */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 p-4 glass-panel rounded-xl border border-white/5">
        <div className="flex items-center gap-4 w-full md:w-auto">
          <div className="relative flex-1 md:w-80">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant/30" size={14} />
            <input 
              type="text" 
              placeholder="SEARCH_HISTORICAL_LOGS..." 
              className="w-full bg-black/40 border border-white/5 rounded-lg py-3 pl-10 text-[9px] font-headline text-white placeholder:text-on-surface-variant/20 focus:ring-1 focus:ring-secondary-container transition-all"
            />
          </div>
          <button className="px-6 py-3 bg-white/5 rounded-lg border border-white/5 text-[10px] font-headline text-on-surface-variant hover:text-white transition-all uppercase tracking-widest flex items-center gap-2">
            <Filter size={14} /> Filter
          </button>
        </div>
        
        <button className="flex items-center gap-2 text-[10px] font-headline text-secondary-container uppercase tracking-widest hover:underline decoration-secondary-container/30">
          <Download size={14} /> Export Integrity Report
        </button>
      </div>

      {/* Timeline List */}
      <div className="space-y-4">
        {archivalData.map((shard, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: idx * 0.1 }}
            className="group relative flex flex-col md:flex-row gap-6 p-8 glass-panel rounded-2xl border border-white/5 hover:border-secondary-container/20 transition-all duration-300"
          >
            {/* Date/Time Column */}
            <div className="md:w-32 flex flex-col shrink-0">
              <span className="font-headline text-lg font-black text-white">{shard.date}</span>
              <span className="font-headline text-[10px] text-on-surface-variant tracking-widest opacity-60">{shard.time}</span>
            </div>

            {/* Content Column */}
            <div className="flex-1 space-y-4">
              <div className="flex flex-wrap items-center gap-4">
                <span className="font-headline text-xs font-bold text-white tracking-widest uppercase">{shard.label}</span>
                <span className={`px-2 py-0.5 rounded-[4px] text-[8px] font-headline font-bold uppercase tracking-tighter border ${
                  shard.status === 'SUCCESS' ? 'bg-green-500/10 text-green-400 border-green-500/20' : 
                  shard.status === 'CRITICAL' ? 'bg-error/10 text-error border-error/20' : 
                  shard.status === 'WARNING' ? 'bg-yellow-500/10 text-yellow-400 border-yellow-500/20' : 'bg-primary-container/10 text-primary-container border-primary-container/20'
                }`}>
                  {shard.status}
                </span>
                <div className="h-px flex-1 bg-white/5" />
                <span className="font-headline text-[9px] text-on-surface-variant uppercase tracking-tighter">Auth: {shard.user}</span>
              </div>
              
              <p className="font-sans text-xs text-on-surface-variant leading-relaxed max-w-3xl">
                {shard.details}
              </p>
            </div>

            {/* Action Icon */}
            <div className="md:w-10 flex md:items-center justify-end shrink-0">
              <button className="p-2 text-on-surface-variant/40 hover:text-white transition-colors">
                <FileText size={18} />
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Decorative Dots */}
      <div className="flex justify-center py-8">
        <motion.div 
          animate={{ opacity: [0.2, 0.5, 0.2] }}
          transition={{ duration: 3, repeat: Infinity }}
          className="flex gap-2"
        >
          <div className="w-1 h-1 rounded-full bg-secondary-container" />
          <div className="w-1 h-1 rounded-full bg-secondary-container" />
          <div className="w-1 h-1 rounded-full bg-secondary-container" />
        </motion.div>
      </div>
    </div>
  );
}
