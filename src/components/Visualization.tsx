import { motion } from 'motion/react';
import { Database, Shield, Zap, ArrowRight, Cpu, Network, Key, Lock, Unlock, Layers } from 'lucide-react';

export default function Visualization() {
  const steps = [
    {
      title: "Order Ingress",
      icon: Database,
      desc: "Financial order data enters the HFT gateway at sub-microsecond speeds.",
      color: "text-blue-500",
      bg: "bg-blue-500/10"
    },
    {
      title: "Hybrid Encryption",
      icon: Shield,
      desc: "HCTF applies parallel ECDH and Kyber-768 key encapsulation.",
      color: "text-emerald-500",
      bg: "bg-emerald-500/10"
    },
    {
      title: "FPGA NTT Pipeline",
      icon: Cpu,
      desc: "Polynomial multiplication is accelerated via pipelined hardware NTT.",
      color: "text-purple-500",
      bg: "bg-purple-500/10"
    },
    {
      title: "Quantum-Secure Egress",
      icon: Zap,
      desc: "Encrypted packet is dispatched to the exchange matching engine.",
      color: "text-amber-500",
      bg: "bg-amber-500/10"
    }
  ];

  return (
    <section className="py-24 bg-white dark:bg-zinc-950 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tighter text-zinc-900 dark:text-white mb-4">
            The <span className="text-brand-primary">Visualization</span> Process
          </h2>
          <p className="text-zinc-500 dark:text-zinc-400 max-w-2xl mx-auto">
            A granular breakdown of how our framework secures financial orders 
            within the microsecond budget.
          </p>
        </div>

        {/* Key Generation Process - Medium Speed */}
        <div className="mb-20">
          <div className="flex items-center gap-3 mb-8 justify-center">
            <Key className="w-5 h-5 text-brand-primary" />
            <h3 className="text-xl font-bold text-zinc-900 dark:text-white uppercase tracking-widest text-sm">Session Key Generation (Medium Speed)</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            <div className="glass-card p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800 text-center relative overflow-hidden">
              <div className="absolute inset-0 tech-grid opacity-5" />
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-full bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center mx-auto mb-4">
                  <Unlock className="w-6 h-6 text-zinc-400" />
                </div>
                <h4 className="font-bold text-zinc-900 dark:text-white mb-2">Entropy Source</h4>
                <p className="text-xs text-zinc-500">Hardware TRNG providing high-quality randomness.</p>
              </div>
            </div>

            <div className="flex flex-col items-center justify-center gap-4">
              <div className="w-full h-2 bg-zinc-100 dark:bg-zinc-800 rounded-full overflow-hidden relative">
                <motion.div 
                  animate={{ x: [-200, 400] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
                  className="absolute top-0 left-0 w-1/2 h-full bg-brand-primary"
                />
              </div>
              <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest">Processing Primitives</span>
            </div>

            <div className="glass-card p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800 text-center relative overflow-hidden">
              <div className="absolute inset-0 tech-grid opacity-5" />
              <div className="relative z-10">
                <motion.div 
                  animate={{ rotate: 360 }}
                  transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                  className="w-12 h-12 rounded-full bg-brand-primary/10 flex items-center justify-center mx-auto mb-4"
                >
                  <Lock className="w-6 h-6 text-brand-primary" />
                </motion.div>
                <h4 className="font-bold text-zinc-900 dark:text-white mb-2">Derived Session Key</h4>
                <p className="text-xs text-zinc-500">256-bit symmetric key ready for HCTF.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Main Process Steps */}
        <div className="relative mb-24">
          {/* Connecting Line */}
          <div className="absolute top-1/2 left-0 w-full h-0.5 bg-zinc-100 dark:bg-zinc-800 -translate-y-1/2 hidden lg:block" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {steps.map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-card p-8 rounded-2xl border border-zinc-200 dark:border-zinc-800 text-center group hover:border-brand-primary transition-all"
              >
                <div className={`w-16 h-16 rounded-2xl ${step.bg} ${step.color} flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform`}>
                  <step.icon className="w-8 h-8" />
                </div>
                <h3 className="text-lg font-bold text-zinc-900 dark:text-white mb-3">{step.title}</h3>
                <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed">
                  {step.desc}
                </p>
                {i < steps.length - 1 && (
                  <div className="mt-6 lg:hidden flex justify-center">
                    <ArrowRight className="w-6 h-6 text-zinc-300 rotate-90" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Granular Hybrid Encryption Detail */}
        <div className="mb-24 p-8 rounded-3xl bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800">
          <div className="flex items-center gap-3 mb-10 justify-center">
            <Layers className="w-5 h-5 text-emerald-500" />
            <h3 className="text-xl font-bold text-zinc-900 dark:text-white uppercase tracking-widest text-sm">Hybrid Encryption Architecture (HCTF)</h3>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div className="p-6 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 rounded-lg bg-blue-500/10 text-blue-500 flex items-center justify-center">
                    <Shield className="w-4 h-4" />
                  </div>
                  <h4 className="font-bold text-zinc-900 dark:text-white">ECDH (Classical)</h4>
                </div>
                <p className="text-sm text-zinc-500 leading-relaxed">
                  Provides established security against classical adversaries. Used for session key exchange 
                  with sub-microsecond overhead.
                </p>
                <div className="mt-4 flex items-center gap-2">
                  <span className="px-2 py-0.5 rounded bg-blue-50 dark:bg-blue-900/20 text-[10px] font-bold text-blue-600 uppercase tracking-widest">Fast</span>
                  <span className="px-2 py-0.5 rounded bg-blue-50 dark:bg-blue-900/20 text-[10px] font-bold text-blue-600 uppercase tracking-widest">Established</span>
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 rounded-lg bg-emerald-500/10 text-emerald-500 flex items-center justify-center">
                    <Zap className="w-4 h-4" />
                  </div>
                  <h4 className="font-bold text-zinc-900 dark:text-white">Kyber-768 (Post-Quantum)</h4>
                </div>
                <p className="text-sm text-zinc-500 leading-relaxed">
                  Lattice-based KEM providing resistance against Shor's algorithm. Accelerated via FPGA 
                  to meet HFT latency requirements.
                </p>
                <div className="mt-4 flex items-center gap-2">
                  <span className="px-2 py-0.5 rounded bg-emerald-50 dark:bg-emerald-900/20 text-[10px] font-bold text-emerald-600 uppercase tracking-widest">Quantum-Safe</span>
                  <span className="px-2 py-0.5 rounded bg-emerald-50 dark:bg-emerald-900/20 text-[10px] font-bold text-emerald-600 uppercase tracking-widest">Lattice-Based</span>
                </div>
              </div>
            </div>

            <div className="relative flex items-center justify-center">
              <div className="absolute inset-0 tech-grid opacity-10" />
              <div className="relative z-10 w-full max-w-sm aspect-square border-2 border-dashed border-zinc-200 dark:border-zinc-800 rounded-full flex items-center justify-center">
                <motion.div 
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 border-2 border-emerald-500/30 rounded-full border-t-emerald-500"
                />
                <div className="text-center">
                  <div className="text-xs font-bold text-zinc-400 uppercase tracking-widest mb-2">Combined Secret</div>
                  <div className="text-3xl font-bold text-zinc-900 dark:text-white mono-text">KDF(C ‖ PQ)</div>
                  <p className="text-[10px] text-zinc-500 mt-4 max-w-[150px] mx-auto">
                    Security holds if either ECDH or Kyber remains unbroken.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Data Flow Simulation */}
        <div className="glass-card p-8 rounded-3xl border border-zinc-200 dark:border-zinc-800 relative overflow-hidden">
          <div className="absolute inset-0 tech-grid opacity-10" />
          <div className="relative z-10 flex flex-col items-center">
            <div className="flex items-center gap-4 mb-8">
              <Network className="w-6 h-6 text-brand-primary animate-pulse" />
              <span className="text-xs font-bold uppercase tracking-widest text-zinc-500">Live Pipeline Simulation</span>
            </div>
            
            <div className="w-full max-w-4xl h-32 bg-zinc-900 rounded-2xl border border-zinc-800 flex items-center px-8 gap-4 overflow-hidden">
              {[...Array(12)].map((_, i) => (
                <motion.div
                  key={i}
                  animate={{ 
                    x: [-100, 1000],
                    opacity: [0, 1, 1, 0]
                  }}
                  transition={{ 
                    duration: 8, 
                    repeat: Infinity, 
                    delay: i * 0.66,
                    ease: "linear"
                  }}
                  className="flex-shrink-0 w-24 h-12 rounded bg-brand-primary/20 border border-brand-primary/40 flex items-center justify-center absolute"
                >
                  <span className="text-[10px] font-mono text-brand-primary">PACKET_{i}</span>
                </motion.div>
              ))}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="px-4 py-2 bg-zinc-950/80 backdrop-blur-sm border border-zinc-800 rounded-lg text-xs font-mono text-zinc-400">
                  LATENCY: <span className="text-emerald-500">0.012µs</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
