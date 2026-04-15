import { motion } from 'motion/react';
import { Cpu, Layers, Zap, Activity } from 'lucide-react';

export default function FPGA() {
  return (
    <section id="fpga" className="py-24 bg-zinc-950 text-white overflow-hidden relative">
      <div className="absolute inset-0 tech-grid opacity-20" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-widest mb-8"
            >
              <Cpu className="w-4 h-4" />
              Hardware Acceleration
            </motion.div>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl font-bold tracking-tighter mb-6"
            >
              FPGA NTT Pipeline Architecture
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-zinc-400 text-lg mb-8 leading-relaxed"
            >
              Our novel architecture targets the Xilinx Alveo U55C, achieving sub-microsecond 
              latencies through a fully pipelined Number Theoretic Transform (NTT) engine.
            </motion.p>
            
            <div className="space-y-6">
              {[
                { icon: Layers, title: 'One Butterfly per Clock', desc: 'Fully pipelined NTT eliminates sequential dependency bottlenecks.' },
                { icon: Zap, title: '300 MHz Core Clock', desc: 'Optimized for the high-frequency demands of modern trading floors.' },
                { icon: Activity, title: '10.9% LUT Utilization', desc: 'Minimal footprint allows co-deployment with existing HFT logic.' },
              ].map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.1 }}
                  className="flex gap-4"
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center text-blue-400">
                    <item.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-white">{item.title}</h3>
                    <p className="text-zinc-500 text-sm">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-square bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-3xl border border-white/10 p-8 flex items-center justify-center">
              <div className="w-full space-y-4">
                {/* Visual representation of a pipeline */}
                <div className="h-12 w-full bg-zinc-900 rounded border border-zinc-800 flex items-center px-4 justify-between">
                  <span className="text-xs font-mono text-zinc-500">PCIe DMA</span>
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <div key={i} className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" style={{ animationDelay: `${i * 0.2}s` }} />
                    ))}
                  </div>
                </div>
                <div className="flex justify-center">
                  <div className="w-1 h-8 bg-gradient-to-b from-blue-500 to-transparent" />
                </div>
                <div className="h-24 w-full bg-blue-600/10 rounded border border-blue-500/30 flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 tech-grid opacity-30" />
                  <span className="font-bold text-blue-400 tracking-widest uppercase">NTT Engine</span>
                </div>
                <div className="flex justify-center">
                  <div className="w-1 h-8 bg-gradient-to-b from-blue-500 to-transparent" />
                </div>
                <div className="h-12 w-full bg-zinc-900 rounded border border-zinc-800 flex items-center px-4 justify-between">
                  <span className="text-xs font-mono text-zinc-500">Output Buffer</span>
                  <div className="w-24 h-2 bg-zinc-800 rounded-full overflow-hidden">
                    <motion.div 
                      animate={{ x: [-100, 100] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                      className="w-1/2 h-full bg-blue-500" 
                    />
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating Badge */}
            <div className="absolute -bottom-6 -right-6 glass-card p-6 rounded-2xl border border-white/10 shadow-2xl">
              <div className="text-4xl font-bold text-white mono-text">0.012<span className="text-blue-400">µs</span></div>
              <div className="text-xs font-bold text-zinc-500 uppercase tracking-widest mt-1">Kyber-768 Latency</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
