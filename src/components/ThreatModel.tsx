import { motion } from 'motion/react';
import { AlertTriangle, ShieldX, DollarSign, Lock } from 'lucide-react';

export default function ThreatModel() {
  return (
    <section id="threat-model" className="py-24 bg-white dark:bg-zinc-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <div className="relative">
              <div className="absolute -inset-4 bg-rose-500/10 blur-2xl rounded-full opacity-50" />
              <div className="relative glass-card p-8 rounded-2xl border border-zinc-200 dark:border-zinc-800">
                <div className="flex items-center gap-3 mb-6 text-rose-500">
                  <AlertTriangle className="w-6 h-6" />
                  <h3 className="font-bold text-lg uppercase tracking-tight">HNDL Exposure Model</h3>
                </div>
                
                <div className="space-y-6">
                  <div className="p-4 rounded-lg bg-zinc-50 dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm text-zinc-500">Daily Order Volume</span>
                      <span className="font-mono font-bold dark:text-white">10M</span>
                    </div>
                    <div className="w-full h-1 bg-zinc-200 dark:bg-zinc-800 rounded-full overflow-hidden">
                      <div className="w-3/4 h-full bg-rose-500" />
                    </div>
                  </div>
                  
                  <div className="p-4 rounded-lg bg-zinc-50 dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm text-zinc-500">Avg. Position Value</span>
                      <span className="font-mono font-bold dark:text-white">$250K</span>
                    </div>
                    <div className="w-full h-1 bg-zinc-200 dark:bg-zinc-800 rounded-full overflow-hidden">
                      <div className="w-1/2 h-full bg-rose-500" />
                    </div>
                  </div>

                  <div className="pt-4 border-t border-zinc-200 dark:border-zinc-800">
                    <div className="text-sm text-zinc-500 mb-1 uppercase font-bold tracking-widest">Estimated Adversarial Value</div>
                    <div className="text-5xl font-bold text-zinc-900 dark:text-white mono-text">$44.1<span className="text-rose-500">B</span></div>
                    <p className="text-xs text-zinc-400 mt-2 italic">
                      *Calculated over 7 years of "Harvest Now, Decrypt Later" (HNDL) data collection.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-500/10 border border-rose-500/20 text-rose-500 text-xs font-bold uppercase tracking-widest mb-8"
            >
              <ShieldX className="w-4 h-4" />
              Quantum Threat Analysis
            </motion.div>
            
            <h2 className="text-4xl font-bold tracking-tighter text-zinc-900 dark:text-white mb-6">
              The "Harvest Now, Decrypt Later" Risk
            </h2>
            
            <p className="text-zinc-600 dark:text-zinc-400 text-lg mb-8 leading-relaxed">
              Adversaries are currently recording encrypted financial traffic to decrypt it once 
              cryptographically relevant quantum computers emerge. For HFT, this represents 
              a massive financial liability.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-rose-50 dark:bg-rose-900/20 flex items-center justify-center text-rose-500">
                  <Lock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-zinc-900 dark:text-white">Data Archival</h4>
                  <p className="text-sm text-zinc-500">Nation-states are storing PII and order flow today.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-rose-50 dark:bg-rose-900/20 flex items-center justify-center text-rose-500">
                  <DollarSign className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-zinc-900 dark:text-white">Economic Impact</h4>
                  <p className="text-sm text-zinc-500">Decryption of historical trades reveals proprietary strategies.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
