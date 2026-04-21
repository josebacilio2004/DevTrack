import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ShieldAlert, Mail, Lock, Fingerprint, Eye, EyeOff } from 'lucide-react';
import { supabase } from '../api/supabase';

export default function Login({ onLogin }: { onLogin: () => void }) {
  const [operatorId, setOperatorId] = useState('');
  const [cipher, setCipher] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const { error } = await supabase.auth.signInWithPassword({
      email: operatorId,
      password: cipher,
    });

    if (error) {
      setError('ACCESS_DENIED: ' + error.message);
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-surface-lowest relative overflow-hidden font-sans">
      {/* Background Geometrics */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-5%] w-96 h-96 bg-secondary-container/5 rotate-12 blur-[100px] rounded-full" />
        <div className="absolute bottom-[10%] right-[5%] w-64 h-64 bg-primary-container/5 -rotate-45 blur-[80px] rounded-full" />
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative z-10 w-full max-w-md px-6"
      >
        <div className="mb-12 text-center">
          <div className="inline-flex items-center justify-center p-4 rounded-full bg-surface-low mb-6 border border-white/5 relative group">
            <div className="absolute inset-0 rounded-full bg-primary-container/10 blur-xl group-hover:bg-primary-container/20 transition-all duration-300" />
            <ShieldAlert className="text-primary-container glow-cyan relative" size={32} />
          </div>
          <h1 className="font-headline text-2xl font-black tracking-[0.3em] text-white uppercase mb-2">DEVTRACK_Login</h1>
          <p className="font-label text-[10px] text-on-surface-variant tracking-[0.2em] uppercase">Operator Authorization Protocol</p>
        </div>

        <div className="glass-panel p-8 md:p-10 rounded-xl relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary-container/30 to-transparent" />
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label className="font-headline text-[9px] uppercase tracking-widest text-on-surface-variant ml-1">Operator_ID</label>
              <div className="relative group">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant/40 group-focus-within:text-primary-container transition-colors" size={16} />
                <input 
                  type="text" 
                  value={operatorId}
                  onChange={(e) => setOperatorId(e.target.value)}
                  placeholder="username@neural.void"
                  className="w-full bg-surface-lowest/50 border border-outline-variant/30 rounded-lg py-4 pl-12 pr-4 text-xs font-label placeholder:text-on-surface-variant/20 focus:outline-none focus:border-primary-container focus:ring-1 focus:ring-primary-container/20 transition-all duration-300 text-white"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="font-headline text-[9px] uppercase tracking-widest text-on-surface-variant ml-1">Access_Cipher</label>
              <div className="relative group">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant/40 group-focus-within:text-primary-container transition-colors" size={16} />
                <input 
                  type="password" 
                  value={cipher}
                  onChange={(e) => setCipher(e.target.value)}
                  placeholder="••••••••••••"
                  className="w-full bg-surface-lowest/50 border border-outline-variant/30 rounded-lg py-4 pl-12 pr-12 text-xs font-label placeholder:text-on-surface-variant/20 focus:outline-none focus:border-primary-container focus:ring-1 focus:ring-primary-container/20 transition-all duration-300 text-white"
                />
                <button 
                  type="button" 
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-on-surface-variant/40 hover:text-white transition-colors"
                >
                  {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </div>
            </div>

            {error && (
              <motion.div
                initial={{ opacity: 0, y: -4 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-red-500 text-[10px] font-headline text-center py-2 px-3 bg-red-500/10 rounded-lg border border-red-500/20 uppercase tracking-widest"
              >
                {error}
              </motion.div>
            )}

            <div className="pt-4 space-y-4">
              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={loading}
                className="w-full bg-gradient-to-r from-secondary-container to-secondary-fixed-dim text-white font-headline text-[10px] font-bold uppercase tracking-[0.2em] py-4 rounded-lg glow-purple transition-all duration-300 disabled:opacity-50"
              >
                {loading ? 'Authenticating...' : 'Initiate Sequence'}
              </motion.button>

              <div className="flex items-center gap-4 py-2">
                <div className="h-[1px] flex-1 bg-outline-variant/20" />
                <span className="font-headline text-[8px] text-on-surface-variant/40 tracking-widest">OR</span>
                <div className="h-[1px] flex-1 bg-outline-variant/20" />
              </div>

              <button 
                type="button"
                className="w-full flex items-center justify-center gap-3 bg-white/5 border border-outline-variant/20 hover:bg-white/10 text-on-surface-variant font-headline text-[9px] uppercase tracking-widest py-3 rounded-lg transition-all"
              >
                <Fingerprint size={16} className="text-primary-container" />
                Biometric Login
              </button>
            </div>
          </form>

          <div className="mt-10 flex justify-between items-center text-[9px] font-label uppercase tracking-widest text-on-surface-variant/60">
            <a href="#" className="hover:text-primary-container transition-colors">Emergency Reset</a>
            <a href="#" className="hover:text-primary-container transition-colors">Request Access</a>
          </div>
        </div>

        {/* Footer Info */}
        <div className="mt-12 flex justify-center gap-12 opacity-30 text-white">
          <div className="flex flex-col items-center">
            <span className="font-headline text-[9px] mb-1">Node_ID</span>
            <span className="font-label text-[8px]">0x4A-99B</span>
          </div>
          <div className="flex flex-col items-center border-x border-white/10 px-12">
            <span className="font-headline text-[9px] mb-1">Latency</span>
            <span className="font-label text-[8px] text-primary-container">12ms</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="font-headline text-[9px] mb-1">Status</span>
            <span className="font-label text-[8px] text-primary-container">Online</span>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
