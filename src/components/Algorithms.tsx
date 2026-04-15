import { motion } from 'motion/react';
import { CheckCircle2, XCircle } from 'lucide-react';

const data = [
  { alg: 'RSA-2048', op: 'Sign', mean: '0.042', hft: true },
  { alg: 'ECDSA P-256', op: 'Sign', mean: '0.051', hft: true },
  { alg: 'Kyber-768', op: 'Encap', mean: '0.213', hft: true },
  { alg: 'Dilithium3', op: 'Sign', mean: '2.105', hft: false },
  { alg: 'FALCON-1024', op: 'Sign', mean: '4.703', hft: false },
];

export default function Algorithms() {
  return (
    <section id="algorithms" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-white mb-4">
            Software Latency Benchmarks
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400 max-w-2xl">
            Evaluation of NIST-standardized PQC algorithms under sub-microsecond HFT constraints. 
            Threshold for HFT acceptance is <span className="text-brand-primary font-bold">0.500 µs</span>.
          </p>
        </div>

        <div className="overflow-x-auto rounded-xl border border-zinc-200 dark:border-zinc-800">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-zinc-50 dark:bg-zinc-900/50 border-b border-zinc-200 dark:border-zinc-800">
                <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">Algorithm</th>
                <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">Operation</th>
                <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">Mean (µs)</th>
                <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">HFT Acceptable</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-200 dark:divide-zinc-800">
              {data.map((row, i) => (
                <motion.tr
                  key={row.alg}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="hover:bg-zinc-50 dark:hover:bg-zinc-900/30 transition-colors"
                >
                  <td className="px-6 py-4 font-bold text-zinc-900 dark:text-white">{row.alg}</td>
                  <td className="px-6 py-4 text-zinc-600 dark:text-zinc-400 mono-text">{row.op}</td>
                  <td className="px-6 py-4 font-mono text-zinc-900 dark:text-white">{row.mean}</td>
                  <td className="px-6 py-4">
                    {row.hft ? (
                      <div className="flex items-center gap-2 text-emerald-500 text-sm font-bold">
                        <CheckCircle2 className="w-4 h-4" />
                        YES
                      </div>
                    ) : (
                      <div className="flex items-center gap-2 text-rose-500 text-sm font-bold">
                        <XCircle className="w-4 h-4" />
                        NO
                      </div>
                    )}
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
        
        <div className="mt-8 p-4 rounded-lg bg-blue-50 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-800/30 text-sm text-blue-700 dark:text-blue-300">
          <strong>Note:</strong> While software implementations of signing algorithms (Dilithium, Falcon) 
          exceed the HFT threshold, FPGA acceleration brings them within acceptable bounds.
        </div>
      </div>
    </section>
  );
}
