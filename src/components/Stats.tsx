import { motion } from 'motion/react';
import { TrendingUp, Clock, ShieldCheck, Database } from 'lucide-react';

const stats = [
  {
    label: 'Kyber-768 Encap',
    value: '0.012 µs',
    description: 'FPGA-accelerated latency',
    icon: Clock,
    color: 'text-blue-500',
  },
  {
    label: 'Speedup Factor',
    value: '15.2×',
    description: 'Vs optimized software',
    icon: TrendingUp,
    color: 'text-emerald-500',
  },
  {
    label: 'HNDL Exposure',
    value: '$44.1B',
    description: 'Potential adversarial value',
    icon: ShieldCheck,
    color: 'text-amber-500',
  },
  {
    label: 'FPGA LUT Usage',
    value: '10.9%',
    description: 'Minimal resource footprint',
    icon: Database,
    color: 'text-purple-500',
  },
];

export default function Stats() {
  return (
    <section className="py-20 bg-zinc-50 dark:bg-zinc-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card p-8 rounded-2xl border border-zinc-200 dark:border-zinc-800"
            >
              <div className={`p-3 rounded-xl bg-zinc-100 dark:bg-zinc-800 w-fit mb-6 ${stat.color}`}>
                <stat.icon className="w-6 h-6" />
              </div>
              <div className="text-3xl font-bold text-zinc-900 dark:text-white mb-2 mono-text">
                {stat.value}
              </div>
              <div className="text-sm font-bold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider mb-1">
                {stat.label}
              </div>
              <div className="text-sm text-zinc-400 dark:text-zinc-500">
                {stat.description}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
