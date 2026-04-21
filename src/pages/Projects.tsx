import { motion } from 'motion/react';
import { Layers, Search, Filter, MoreVertical, ExternalLink, Github, Cpu, Network } from 'lucide-react';

const projectNodes = [
  { id: 'NX-01', name: 'Nexus AI', category: 'NEURAL_LINK', status: 'STABLE', sync: '98%', img: 'https://picsum.photos/seed/nexus/600/400' },
  { id: 'QT-07', name: 'Quantum App', category: 'CORE_ENGINE', status: 'DEGRADED', sync: '42%', img: 'https://picsum.photos/seed/quantum/600/400' },
  { id: 'AE-09', name: 'Aether OS', category: 'KERNEL', status: 'OPTIMAL', sync: '99%', img: 'https://picsum.photos/seed/aether/600/400' },
  { id: 'SY-12', name: 'Synapse Node', category: 'ROUTING', status: 'STABLE', sync: '95%', img: 'https://picsum.photos/seed/synapse/600/400' },
  { id: 'VX-04', name: 'Vortex Protocol', category: 'ENCRYPTION', status: 'STABLE', sync: '88%', img: 'https://picsum.photos/seed/vortex/600/400' },
  { id: 'PL-11', name: 'Pulse Engine', category: 'TELEMETRY', status: 'OPTIMAL', sync: '100%', img: 'https://picsum.photos/seed/pulse/600/400' },
];

export default function Projects() {
  return (
    <div className="max-w-[1400px] mx-auto space-y-12">
      {/* Header with technical sub-nav */}
      <section className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        <div>
          <h1 className="font-headline text-5xl font-black text-white tracking-widest uppercase mb-2">Project_Nodes</h1>
          <p className="text-on-surface-variant font-sans opacity-70">Active directory of architectural nodes and system modules.</p>
        </div>
        
        <div className="flex items-center gap-4 w-full md:w-auto">
          <div className="relative flex-1 md:w-64 group">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant/30 group-focus-within:text-primary-container transition-colors" size={14} />
            <input 
              type="text" 
              placeholder="SEARCH_NODES..." 
              className="w-full bg-white/5 border border-white/5 rounded-lg py-3 pl-10 text-[10px] font-headline text-white placeholder:text-on-surface-variant/20 focus:ring-1 focus:ring-primary-container transition-all"
            />
          </div>
          <button className="p-3 bg-white/5 rounded-lg border border-white/5 text-on-surface-variant hover:text-white transition-colors">
            <Filter size={18} />
          </button>
        </div>
      </section>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projectNodes.map((node) => (
          <motion.div 
            key={node.id}
            whileHover={{ y: -8 }}
            className="glass-panel group overflow-hidden rounded-2xl flex flex-col h-full border border-white/5 hover:border-primary-container/20 transition-all duration-500"
          >
            {/* Image section with overlay info */}
            <div className="aspect-[16/10] relative overflow-hidden">
              <img 
                src={node.img} 
                className="w-full h-full object-cover brightness-[0.7] group-hover:scale-110 group-hover:rotate-1 transition-transform duration-700" 
                alt={node.name}
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-surface-lowest via-transparent to-transparent opacity-80" />
              
              {/* Floating tags */}
              <div className="absolute top-4 left-4 flex gap-2">
                <span className={`px-2 py-1 rounded text-[8px] font-headline font-bold uppercase tracking-widest border ${
                  node.status === 'OPTIMAL' ? 'bg-green-500/10 text-green-400 border-green-500/20' : 
                  node.status === 'DEGRADED' ? 'bg-error/10 text-error border-error/20' : 'bg-primary-container/10 text-primary-container border-primary-container/20'
                }`}>
                  {node.status}
                </span>
              </div>
              
              <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
                <div>
                  <p className="font-headline text-[9px] text-primary-container mb-1 tracking-widest">{node.category}</p>
                  <h3 className="font-headline text-xl text-white font-black tracking-tight">{node.name}</h3>
                </div>
                <div className="text-right">
                  <p className="font-headline text-[8px] text-on-surface-variant uppercase tracking-tighter">Sync Integrity</p>
                  <p className="font-headline text-lg text-white font-bold">{node.sync}</p>
                </div>
              </div>
            </div>

            {/* Content section */}
            <div className="p-6 space-y-6 flex-1 flex flex-col">
              <div className="flex items-center gap-6 justify-between text-on-surface-variant/40">
                <div className="flex items-center gap-2">
                  <Cpu size={14} />
                  <span className="font-headline text-[9px] uppercase tracking-widest">{node.id}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Network size={14} />
                  <span className="font-headline text-[9px] uppercase tracking-widest">Cluster-B7</span>
                </div>
              </div>

              <div className="flex gap-3 pt-4 mt-auto">
                <button className="flex-1 bg-white/5 border border-white/5 hover:bg-white/10 text-on-surface-variant hover:text-white py-2.5 rounded-lg flex items-center justify-center gap-2 transition-all font-headline text-[9px] uppercase tracking-widest">
                  <Github size={14} /> Source
                </button>
                <button className="flex-1 bg-primary-container/10 border border-primary-container/20 hover:bg-primary-container/20 text-primary-container py-2.5 rounded-lg flex items-center justify-center gap-2 transition-all font-headline text-[9px] uppercase tracking-widest">
                  <ExternalLink size={14} /> Deploy
                </button>
                <button className="p-2.5 bg-white/5 rounded-lg border border-white/5 text-on-surface-variant hover:text-white transition-colors">
                  <MoreVertical size={14} />
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Decorative Layer */}
      <div className="fixed inset-0 pointer-events-none opacity-20 z-[-1]">
        <div className="absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary-container/5 to-transparent" />
        <div className="absolute top-0 right-[20%] w-[1px] h-full bg-gradient-to-b from-transparent via-secondary-container/5 to-transparent" />
      </div>
    </div>
  );
}
