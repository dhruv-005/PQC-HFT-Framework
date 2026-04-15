import { motion } from 'motion/react';
import { Terminal, Book, Cpu, Shield, ArrowRight, CheckCircle2 } from 'lucide-react';
import fpgaImg from '../fpga.png';

export default function Documentation() {
  const sections = [
    {
      title: "Getting Started",
      icon: Book,
      items: ["Installation", "Quick Start", "Environment Setup", "Project Structure"]
    },
    {
      title: "Core API",
      icon: Terminal,
      items: ["Key Generation", "Encapsulation", "Decapsulation", "Signing", "Verification"]
    },
    {
      title: "Hardware Specs",
      icon: Cpu,
      items: ["FPGA Bitstreams", "NTT Pipeline", "DMA Config", "Memory Mapping"]
    },
    {
      title: "Security",
      icon: Shield,
      items: ["Threat Model", "HCTF Proof", "Side-channel Analysis", "Fault Resistance"]
    },
    {
      title: "Benchmarks",
      icon: CheckCircle2,
      items: ["Latency Analysis", "Throughput", "Resource Usage"]
    }
  ];

  return (
    <div className="pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          {/* Sidebar */}
          <aside className="hidden lg:block space-y-8">
            {sections.map(section => (
              <div key={section.title}>
                <h3 className="text-xs font-bold uppercase tracking-widest text-zinc-400 dark:text-zinc-500 mb-4 flex items-center gap-2">
                  <section.icon className="w-4 h-4" />
                  {section.title}
                </h3>
                <ul className="space-y-2">
                  {section.items.map(item => (
                    <li key={item}>
                      <a href="#" className="text-sm text-zinc-600 dark:text-zinc-400 hover:text-brand-primary transition-colors">
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </aside>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="prose dark:prose-invert max-w-none"
            >
              <h1 className="text-4xl md:text-6xl font-bold tracking-tighter text-zinc-900 dark:text-white mb-6">
                Technical <span className="text-brand-primary">Documentation</span>
              </h1>
              
              <div className="p-6 rounded-2xl bg-zinc-900 border border-zinc-800 mb-12">
                <div className="flex items-center gap-2 text-emerald-500 mb-4">
                  <Terminal className="w-5 h-5" />
                  <span className="text-xs font-bold uppercase tracking-widest">Installation</span>
                </div>
                <code className="text-sm font-mono text-zinc-300 block bg-zinc-950 p-4 rounded-lg border border-zinc-800">
                  git clone https://github.com/dhruv-005/PQC-HFT-Framework.git<br/>
                  cd PQC-HFT-Framework<br/>
                  pip install -r requirements.txt
                </code>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                <div className="glass-card p-8 rounded-2xl border border-zinc-200 dark:border-zinc-800">
                  <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-4">Kyber-768 Implementation</h3>
                  <p className="text-zinc-500 dark:text-zinc-400 text-sm leading-relaxed mb-6">
                    Our implementation follows FIPS 203 standards with additional optimizations for 
                    AVX-512 instruction sets.
                  </p>
                  <ul className="space-y-2">
                    {['IND-CCA2 Secure', 'Constant-time', 'NIST Level 3'].map(feat => (
                      <li key={feat} className="flex items-center gap-2 text-xs font-bold text-zinc-600 dark:text-zinc-300">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                        {feat}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="glass-card p-8 rounded-2xl border border-zinc-200 dark:border-zinc-800">
                  <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-4">Hardware Acceleration</h3>
                  <p className="text-zinc-500 dark:text-zinc-400 text-sm leading-relaxed mb-6">
                    Detailed RTL specifications for the NTT pipeline and Keccak hash cores.
                  </p>
                  <button className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-brand-primary">
                    View RTL Source
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              <div className="relative rounded-2xl overflow-hidden border border-zinc-200 dark:border-zinc-800 h-64 mb-16">
                <img 
                  src={fpgaImg} 
                  alt="Hardware Documentation" 
                  className="w-full h-full object-cover grayscale opacity-50"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 to-transparent flex items-end p-8">
                  <p className="text-white font-bold tracking-tight">FPGA Resource Utilization Analysis</p>
                </div>
              </div>

              <section className="mb-16">
                <h2 className="text-2xl font-bold text-zinc-900 dark:text-white mb-6">Core API Reference</h2>
                <div className="space-y-8">
                  <div>
                    <h3 className="text-lg font-bold text-zinc-800 dark:text-zinc-200 mb-3">Key Generation (Kyber-768)</h3>
                    <p className="text-sm text-zinc-500 mb-4">Generates a public/private key pair using the ML-KEM standard.</p>
                    <div className="bg-zinc-900 rounded-xl p-4 font-mono text-xs text-zinc-300 border border-zinc-800">
                      <span className="text-purple-400">from</span> pqc_hft <span className="text-purple-400">import</span> kyber<br/><br/>
                      <span className="text-zinc-500"># Generate key pair</span><br/>
                      pk, sk = kyber.generate_keypair()<br/>
                      <span className="text-purple-400">print</span>(<span className="text-emerald-400">f"Public Key Size: {'{'}len(pk){'}'} bytes"</span>)
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-zinc-800 dark:text-zinc-200 mb-3">Encapsulation</h3>
                    <p className="text-sm text-zinc-500 mb-4">Creates a ciphertext and a shared secret for a given public key.</p>
                    <div className="bg-zinc-900 rounded-xl p-4 font-mono text-xs text-zinc-300 border border-zinc-800">
                      <span className="text-zinc-500"># Encapsulate shared secret</span><br/>
                      ct, ss = kyber.encapsulate(pk)<br/>
                      <span className="text-purple-400">print</span>(<span className="text-emerald-400">f"Ciphertext Size: {'{'}len(ct){'}'} bytes"</span>)
                    </div>
                  </div>
                </div>
              </section>

              <section className="mb-16">
                <h2 className="text-2xl font-bold text-zinc-900 dark:text-white mb-6">Hardware-Software Interface</h2>
                <p className="text-sm text-zinc-500 mb-6 leading-relaxed">
                  The framework utilizes a high-performance DMA engine to transfer polynomial data between host memory 
                  and the FPGA NTT cores. Memory mapping is handled via the <code className="text-brand-primary">/dev/pqc_hft</code> driver.
                </p>
                <div className="overflow-x-auto rounded-xl border border-zinc-200 dark:border-zinc-800">
                  <table className="w-full text-left text-sm">
                    <thead className="bg-zinc-50 dark:bg-zinc-900/50 border-b border-zinc-200 dark:border-zinc-800">
                      <tr>
                        <th className="px-6 py-3 font-bold text-zinc-500 uppercase tracking-wider">Register</th>
                        <th className="px-6 py-3 font-bold text-zinc-500 uppercase tracking-wider">Address</th>
                        <th className="px-6 py-3 font-bold text-zinc-500 uppercase tracking-wider">Description</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-zinc-200 dark:divide-zinc-800">
                      <tr>
                        <td className="px-6 py-4 font-mono text-brand-primary">NTT_CTRL</td>
                        <td className="px-6 py-4 font-mono">0x0000</td>
                        <td className="px-6 py-4 text-zinc-500">Control register for NTT pipeline start/reset.</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 font-mono text-brand-primary">DMA_SRC_ADDR</td>
                        <td className="px-6 py-4 font-mono">0x0010</td>
                        <td className="px-6 py-4 text-zinc-500">Source address for polynomial data in host RAM.</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 font-mono text-brand-primary">DMA_LEN</td>
                        <td className="px-6 py-4 font-mono">0x0020</td>
                        <td className="px-6 py-4 text-zinc-500">Length of the data transfer in bytes.</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              <section className="mb-16">
                <h2 className="text-2xl font-bold text-zinc-900 dark:text-white mb-6">Integration with FIX Protocol</h2>
                <p className="text-sm text-zinc-500 mb-6 leading-relaxed">
                  To integrate PQC into existing FIX (Financial Information eXchange) workflows, we recommend 
                  using the <code className="text-brand-primary">SecureFIX</code> wrapper which handles 
                  transparent session key negotiation.
                </p>
                <div className="p-6 rounded-2xl bg-brand-primary/5 border border-brand-primary/10">
                  <h4 className="text-sm font-bold text-brand-primary uppercase tracking-widest mb-4">Integration Steps</h4>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3 text-xs text-zinc-600 dark:text-zinc-400">
                      <span className="w-5 h-5 rounded-full bg-brand-primary/20 text-brand-primary flex items-center justify-center flex-shrink-0 mt-0.5">1</span>
                      <span>Initialize the PQC-HFT hardware driver on the trading gateway.</span>
                    </li>
                    <li className="flex items-start gap-3 text-xs text-zinc-600 dark:text-zinc-400">
                      <span className="w-5 h-5 rounded-full bg-brand-primary/20 text-brand-primary flex items-center justify-center flex-shrink-0 mt-0.5">2</span>
                      <span>Configure the FIX engine to use the hybrid key exchange provider.</span>
                    </li>
                    <li className="flex items-start gap-3 text-xs text-zinc-600 dark:text-zinc-400">
                      <span className="w-5 h-5 rounded-full bg-brand-primary/20 text-brand-primary flex items-center justify-center flex-shrink-0 mt-0.5">3</span>
                      <span>Perform a handshake with the exchange to verify quantum-safe connectivity.</span>
                    </li>
                  </ul>
                </div>
              </section>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
