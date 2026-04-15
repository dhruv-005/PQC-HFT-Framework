import { motion } from 'motion/react';
import { RefreshCw, Shield, ArrowRight } from 'lucide-react';

const phases = [
  {
    title: 'Phase 1: Hybrid Parallel',
    period: '2026–2027',
    desc: 'Session keys derived from both ECDH and Kyber. Secure if either component is unbroken.',
    status: 'Current',
  },
  {
    title: 'Phase 2: PQC Primary',
    period: '2027–2029',
    desc: 'Kyber and Falcon become primary. Classical algorithms kept only for legacy fallback.',
    status: 'Planned',
  },
  {
    title: 'Phase 3: PQC Only',
    period: '2029+',
    desc: 'Full removal of classical primitives. Guaranteed quantum resistance across all channels.',
    status: 'Future',
  },
];

export default function HCTF() {
  return (
    <section id="hctf" className="py-24 bg-zinc-50 dark:bg-zinc-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 text-xs font-bold uppercase tracking-widest mb-6"
          >
            <RefreshCw className="w-4 h-4" />
            Migration Roadmap
          </motion.div>
          <h2 className="text-4xl font-bold tracking-tighter text-zinc-900 dark:text-white mb-4">
            Hybrid Cryptographic Transition Framework
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
            A formally proved, zero-downtime migration pathway from classical to post-quantum security.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {phases.map((phase, i) => (
            <motion.div
              key={phase.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card p-8 rounded-2xl border border-zinc-200 dark:border-zinc-800 relative group"
            >
              <div className="absolute top-0 right-0 p-4">
                <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 dark:text-zinc-500 px-2 py-1 rounded border border-zinc-200 dark:border-zinc-800">
                  {phase.status}
                </span>
              </div>
              
              <div className="text-brand-primary font-mono text-sm mb-2">{phase.period}</div>
              <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-4">{phase.title}</h3>
              <p className="text-zinc-500 dark:text-zinc-400 text-sm leading-relaxed mb-6">
                {phase.desc}
              </p>
              
              <div className="flex items-center gap-2 text-brand-primary text-xs font-bold uppercase tracking-widest group-hover:gap-3 transition-all">
                Learn More
                <ArrowRight className="w-4 h-4" />
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 p-8 rounded-2xl bg-zinc-900 text-white border border-zinc-800 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-8 opacity-10">
            <Shield className="w-32 h-32" />
          </div>
          <div className="relative z-10">
            <h4 className="text-lg font-bold mb-2 flex items-center gap-2">
              <Shield className="w-5 h-5 text-emerald-500" />
              Theorem 6.1: IND-CCA2 Security
            </h4>
            <p className="text-zinc-400 text-sm max-w-3xl font-mono">
              Adv_HCTF(A) ≤ Adv_Kyber(B_PQC) + Adv_ECDH(B_C) ≤ negl(λ)
            </p>
            <p className="mt-4 text-zinc-500 text-xs leading-relaxed">
              The HCTF security holds if either the classical or post-quantum component remains unbroken, 
              providing a safety net during the transition period.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
