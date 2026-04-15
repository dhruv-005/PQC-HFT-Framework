import { motion } from 'motion/react';
import { Cpu, ShieldAlert, Zap, ShieldCheck, Clock, Layers, Lock, RefreshCw, Activity } from 'lucide-react';

const features = [
  { icon: ShieldAlert, label: 'NIST FIPS 203/204', desc: 'Standardized Compliance' },
  { icon: Clock, label: 'Sub-microsecond', desc: 'Ultra-low Latency' },
  { icon: Cpu, label: 'FPGA Accelerated', desc: 'Hardware Optimization' },
  { icon: Layers, label: 'Hybrid Framework', desc: 'Dual-Layer Security' },
  { icon: ShieldCheck, label: 'IND-CCA2 Proof', desc: 'Formal Verification' },
  { icon: Lock, label: 'Quantum Resistant', desc: 'Future-Proof Security' },
  { icon: Activity, label: 'HFT Optimized', desc: 'Market-Ready Performance' },
  { icon: RefreshCw, label: 'Zero-Downtime', desc: 'Seamless Migration' },
];

export default function Hero() {
  return (
    <section id="overview" className="relative pt-32 pb-20 overflow-hidden tech-grid">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-primary/10 border border-brand-primary/20 text-brand-primary text-xs font-bold uppercase tracking-widest mb-8"
          >
            <ShieldAlert className="w-4 h-4" />
            NIST FIPS 203/204 Compliance
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tighter text-zinc-900 dark:text-white mb-6 leading-[1.1]"
          >
            Post-Quantum Cryptography <br className="hidden sm:block" />
            <span className="text-brand-primary">for High-Frequency Trading</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="max-w-3xl mx-auto text-xl text-zinc-600 dark:text-zinc-400 mb-10 leading-relaxed"
          >
            Securing microsecond financial communications against quantum adversaries through 
            FPGA-accelerated cryptographic primitives.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <a
              href="#fpga"
              className="px-8 py-4 bg-brand-primary text-white font-bold rounded-lg hover:bg-blue-600 transition-all shadow-lg shadow-brand-primary/20 flex items-center gap-2"
            >
              <Cpu className="w-5 h-5" />
              View FPGA Results
            </a>
            <a
              href="#algorithms"
              className="px-8 py-4 bg-white dark:bg-zinc-900 text-zinc-900 dark:text-white font-bold rounded-lg border border-zinc-200 dark:border-zinc-800 hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-all flex items-center gap-2"
            >
              <Zap className="w-5 h-5" />
              Benchmark Data
            </a>
          </motion.div>
        </div>

        {/* Features Grid */}
        <div className="mt-20 relative">
          <div className="absolute inset-0 bg-gradient-to-t from-white dark:from-zinc-950 to-transparent z-10 h-32 bottom-0 pointer-events-none" />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {features.map((feature, i) => (
              <motion.div
                key={feature.label}
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className="h-32 p-4 border border-zinc-200 dark:border-zinc-800 rounded-xl glass-card flex flex-col justify-center items-center text-center group cursor-default"
              >
                <div className="p-2 rounded-lg bg-zinc-100 dark:bg-zinc-800 text-brand-primary mb-3 group-hover:scale-110 transition-transform">
                  <feature.icon className="w-5 h-5" />
                </div>
                <div className="text-[10px] font-bold uppercase tracking-widest text-zinc-900 dark:text-white mb-1">
                  {feature.label}
                </div>
                <div className="text-[9px] text-zinc-500 dark:text-zinc-500 uppercase tracking-tighter">
                  {feature.desc}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
