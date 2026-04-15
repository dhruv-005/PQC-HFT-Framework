import { motion, AnimatePresence } from 'motion/react';
import { FileText, Download, ExternalLink, BookOpen, Code, ShieldCheck, Microscope, Lightbulb, GitBranch, CheckCircle2, Search, PenTool, ShieldAlert, Zap, AlertTriangle, TrendingUp, Activity, Lock, ArrowRight, Cpu, Server, Cable, Database, Shield, Key, RefreshCw } from 'lucide-react';
import { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ReferenceLine, Cell } from 'recharts';
import pqcImg from '../pqchft.png';

export default function Research({ onOpenPaper }: { onOpenPaper: () => void }) {
  const [activePhase, setActivePhase] = useState(1);

  const speedData = [
    { name: 'RSA-2048 (SW)', latency: 0.042, type: 'classic' },
    { name: 'ECDSA (SW)', latency: 0.051, type: 'classic' },
    { name: 'Kyber-768 (SW)', latency: 0.813, type: 'pqc-sw' },
    { name: 'Dilithium3 (SW)', latency: 2.105, type: 'pqc-sw' },
    { name: 'Falcon-1024 (SW)', latency: 4.703, type: 'pqc-sw' },
    { name: 'Kyber-768 (FPGA)', latency: 0.012, type: 'pqc-fpga' },
    { name: 'Dilithium3 (FPGA)', latency: 0.085, type: 'pqc-fpga' },
  ];

  const migrationPhases = [
    {
      id: 1,
      title: 'Phase 1: Hybrid Parallel',
      period: '2026–2027',
      formula: 'KDF(C ‖ PQ)',
      security: 85,
      overhead: '+15%',
      components: ['ECDH (P-256)', 'Kyber-768', 'FPGA NTT Core'],
      desc: 'Session keys derived from both ECDH and Kyber. Secure if either component is unbroken.'
    },
    {
      id: 2,
      title: 'Phase 2: PQC Primary',
      period: '2027–2029',
      formula: 'ML-KEM-768',
      security: 95,
      overhead: '+5%',
      components: ['Kyber-768', 'Dilithium-3', 'Optimized Bitstreams'],
      desc: 'Kyber and Falcon become primary. Classical algorithms kept only for legacy fallback.'
    },
    {
      id: 3,
      title: 'Phase 3: PQC Only',
      period: '2029+',
      formula: 'FIPS 203/204',
      security: 100,
      overhead: '0%',
      components: ['Full PQC Stack', 'Quantum-Safe TLS', 'Zero-Trust HFT'],
      desc: 'Full removal of classical primitives. Guaranteed quantum resistance across all channels.'
    }
  ];

  const publications = [
    {
      title: "Post-Quantum Cryptography for High-Frequency Trading",
      journal: "Digital Finance (Springer)",
      status: "Under Review",
      year: "2026",
      tags: ["NIST", "HFT", "FPGA"],
      abstract: "This paper proposes a hybrid cryptographic framework (HCTF) that integrates NIST-standardized Kyber-768 with classical ECDH to secure sub-microsecond financial transactions.",
      pdfUrl: "#",
      abstractUrl: "#"
    },
    {
      title: "Sub-microsecond Kyber Acceleration on Xilinx Alveo",
      journal: "Journal of Financial Markets",
      status: "Published",
      year: "2025",
      tags: ["Hardware", "Latency"],
      abstract: "A detailed study on hardware-level optimizations for polynomial multiplication in Kyber, achieving record-breaking latency on FPGA platforms.",
      pdfUrl: "#",
      abstractUrl: "#"
    },
    {
      title: "Hardware-Software Co-design for Lattice-Based KEMs",
      journal: "Journal of Cryptographic Engineering",
      status: "Published",
      year: "2024",
      tags: ["Co-design", "KEM"],
      abstract: "Exploring the optimal partitioning of cryptographic tasks between general-purpose CPUs and specialized hardware accelerators.",
      pdfUrl: "#",
      abstractUrl: "#"
    },
    {
      title: "Quantum-Resistant FIX Protocol: A Performance Evaluation",
      journal: "Int. Conf. on Financial Cryptography",
      status: "Published",
      year: "2024",
      tags: ["FIX Protocol", "Performance"],
      abstract: "Evaluating the impact of PQC integration on the standard Financial Information eXchange (FIX) protocol used in global markets.",
      pdfUrl: "#",
      abstractUrl: "#"
    },
    {
      title: "FPGA-Based NTT Architectures for NIST PQC Standards",
      journal: "IEEE Transactions on Computers",
      status: "Published",
      year: "2023",
      tags: ["NTT", "IEEE"],
      abstract: "A comprehensive review of Number Theoretic Transform (NTT) architectures optimized for the latest NIST post-quantum standards.",
      pdfUrl: "#",
      abstractUrl: "#"
    },
    {
      title: "Side-Channel Analysis of Kyber on Embedded FPGAs",
      journal: "CHES 2023",
      status: "Published",
      year: "2023",
      tags: ["Security", "Side-Channel"],
      abstract: "Investigating the vulnerability of Kyber implementations to power analysis and electromagnetic attacks in constrained environments.",
      pdfUrl: "#",
      abstractUrl: "#"
    }
  ];

  const topics = [
    {
      title: "Lattice-Based Cryptography",
      desc: "Exploring Learning With Errors (LWE) problems as the foundation for quantum resistance.",
      icon: Search
    },
    {
      title: "Side-Channel Resistance",
      desc: "Mitigating power analysis and timing attacks in hardware-level PQC implementations.",
      icon: ShieldCheck
    },
    {
      title: "Hybrid Key Exchange",
      desc: "Combining classical and post-quantum primitives for defense-in-depth security.",
      icon: GitBranch
    },
    {
      title: "FPGA NTT Optimization",
      desc: "Pipelined Number Theoretic Transform (NTT) architectures for low-latency multiplication.",
      icon: Code
    }
  ];

  const processSteps = [
    { title: "Literature Review", icon: Search, color: "text-blue-500" },
    { title: "Hypothesis", icon: Lightbulb, color: "text-amber-500" },
    { title: "Implementation", icon: Code, color: "text-purple-500" },
    { title: "Benchmarking", icon: Microscope, color: "text-emerald-500" },
    { title: "Peer Review", icon: PenTool, color: "text-pink-500" },
    { title: "Publication", icon: CheckCircle2, color: "text-brand-primary" }
  ];

  return (
    <div className="pt-32 pb-20 bg-white dark:bg-zinc-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold tracking-tighter text-zinc-900 dark:text-white mb-6">
            Scientific <span className="text-brand-primary">Research</span>
          </h1>
          <p className="text-xl text-zinc-600 dark:text-zinc-400 max-w-3xl leading-relaxed">
            Our work bridges the gap between theoretical post-quantum security and the 
            extreme performance requirements of global financial markets.
          </p>
        </motion.div>

        {/* Mission & Impact: Why & Where */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-8 rounded-3xl bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-brand-primary/10 text-brand-primary flex items-center justify-center">
                <ShieldAlert className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-zinc-900 dark:text-white">Why it was Developed</h3>
            </div>
            <ul className="space-y-4">
              {[
                {
                  title: "Quantum Threat Mitigation",
                  desc: "Addressing the existential risk posed by Cryptographically Relevant Quantum Computers (CRQC) to current RSA/ECC standards."
                },
                {
                  title: "Prevention of HNDL Attacks",
                  desc: "Protecting sensitive financial data from 'Harvest Now, Decrypt Later' strategies employed by sophisticated adversaries."
                },
                {
                  title: "Latency-Security Equilibrium",
                  desc: "Bridging the gap between high-security post-quantum primitives and the microsecond latency requirements of HFT."
                },
                {
                  title: "Regulatory Compliance",
                  desc: "Proactively aligning financial infrastructure with upcoming NIST FIPS 203/204 standards for quantum-safe communication."
                }
              ].map((item, idx) => (
                <li key={idx} className="flex gap-3">
                  <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-brand-primary flex-shrink-0" />
                  <div>
                    <span className="block text-xs font-bold text-zinc-900 dark:text-white uppercase tracking-wider mb-1">{item.title}</span>
                    <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-8 rounded-3xl bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-500 flex items-center justify-center">
                <Zap className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-zinc-900 dark:text-white">Where it is Used</h3>
            </div>
            <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed mb-4">
              The PQC-HFT framework is designed for mission-critical financial ecosystems where 
              security and speed are non-negotiable:
            </p>
            <ul className="space-y-2">
              {[
                "Proprietary HFT Firms & Market Makers",
                "Global Stock & Derivative Exchanges",
                "Dark Pools & Alternative Trading Systems",
                "Institutional Inter-bank Communication"
              ].map(item => (
                <li key={item} className="flex items-center gap-2 text-xs font-bold text-zinc-700 dark:text-zinc-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Research Visualizations Section */}
        <div className="mb-32">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tighter text-zinc-900 dark:text-white mb-4">
              Research <span className="text-brand-primary">Visualizations</span>
            </h2>
            <p className="text-zinc-500 dark:text-zinc-400 max-w-2xl mx-auto">
              Four focused visualizations that together tell the complete story of our research paper.
            </p>
          </div>

          <div className="space-y-32">
            {/* Visualization 1: The Threat Flow */}
            <section className="relative">
              <div className="flex flex-col lg:flex-row items-center gap-12">
                <div className="lg:w-1/2">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-500/10 border border-rose-500/20 text-rose-500 text-xs font-bold uppercase tracking-widest mb-6">
                    <ShieldAlert className="w-4 h-4" />
                    Visualization 1: The Core Problem
                  </div>
                  <h3 className="text-3xl font-bold text-zinc-900 dark:text-white mb-6 tracking-tight">
                    Why HFT needs quantum-proof security right now.
                  </h3>
                  <p className="text-zinc-600 dark:text-zinc-400 mb-8 leading-relaxed">
                    The "harvest now, decrypt later" path shows why the danger starts now, not in 2030. 
                    Adversaries are currently recording encrypted financial traffic to decrypt it once 
                    quantum computers emerge.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {[
                      { title: "Harvest Now", desc: "Adversaries tap and save encrypted traffic today." },
                      { title: "Decrypt Later", desc: "Quantum computers decrypt data in 2030+." },
                      { title: "Strategy Leak", desc: "Proprietary HFT strategies fully exposed." },
                      { title: "Financial Loss", desc: "Historical trade data used for market manipulation." }
                    ].map((item, i) => (
                      <div key={i} className="p-4 rounded-xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800">
                        <h4 className="font-bold text-zinc-900 dark:text-white text-sm mb-1">{item.title}</h4>
                        <p className="text-xs text-zinc-500">{item.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="lg:w-1/2 w-full">
                  <div className="glass-card p-6 sm:p-8 rounded-3xl border border-zinc-200 dark:border-zinc-800 relative overflow-hidden">
                    <div className="absolute inset-0 tech-grid opacity-5" />
                    <div className="relative z-10 flex flex-col gap-4 sm:gap-6">
                      {[
                        { icon: Server, label: "HFT Firm", desc: "Order leaves firm", color: "text-blue-500" },
                        { icon: Cable, label: "Network Cable", desc: "Travels encrypted", color: "text-zinc-400" },
                        { icon: ShieldAlert, label: "Adversary Tap", desc: "Data is recorded", color: "text-rose-500", highlight: true },
                        { icon: Cpu, label: "Quantum Computer", desc: "Decrypts in 2030", color: "text-purple-500" },
                        { icon: Lock, label: "Exposed Data", desc: "Strategies leaked", color: "text-amber-500" }
                      ].map((step, i) => (
                        <div key={i} className="relative">
                          <motion.div 
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: i * 0.1 }}
                            className={`flex items-center gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl border transition-all cursor-pointer relative z-10 ${step.highlight ? 'bg-rose-500/10 border-rose-500/30' : 'bg-white dark:bg-zinc-800 border-zinc-200 dark:border-zinc-700 hover:border-brand-primary'}`}
                          >
                            <div className={`w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-zinc-100 dark:bg-zinc-900 flex items-center justify-center ${step.color}`}>
                              <step.icon className="w-4 h-4 sm:w-5 sm:h-5" />
                            </div>
                            <div className="flex-grow">
                              <div className="text-xs sm:text-sm font-bold text-zinc-900 dark:text-white">{step.label}</div>
                              <div className="text-[10px] sm:text-xs text-zinc-500">{step.desc}</div>
                            </div>
                            {i < 4 && (
                              <div className="flex-shrink-0 lg:hidden">
                                <ArrowRight className="w-4 h-4 text-zinc-300 rotate-90" />
                              </div>
                            )}
                            {i < 4 && (
                              <div className="hidden lg:block ml-auto">
                                <ArrowRight className="w-4 h-4 text-zinc-300" />
                              </div>
                            )}
                          </motion.div>
                          
                          {/* Mobile Connector Line */}
                          {i < 4 && (
                            <div className="absolute left-7 sm:left-9 top-full h-4 w-px bg-zinc-200 dark:bg-zinc-700 lg:hidden" />
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Visualization 2: The Speed Problem */}
            <section className="relative">
              <div className="flex flex-col lg:flex-row-reverse items-center gap-12">
                <div className="lg:w-1/2">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-primary/10 border border-brand-primary/20 text-brand-primary text-xs font-bold uppercase tracking-widest mb-6">
                    <Zap className="w-4 h-4" />
                    Visualization 2: The Speed Problem
                  </div>
                  <h3 className="text-3xl font-bold text-zinc-900 dark:text-white mb-6 tracking-tight">
                    Comparing old and new encryption under HFT's strict time limit.
                  </h3>
                  <p className="text-zinc-600 dark:text-zinc-400 mb-8 leading-relaxed">
                    The dashed red line is the 0.5 µs wall that separates "usable" from "too slow." 
                    Software PQC implementations (red) are dangerously over the line, while our 
                    FPGA-accelerated versions (blue) sit safely below it.
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 rounded-full bg-rose-500" />
                      <span className="text-sm text-zinc-600 dark:text-zinc-400">Software PQC (Too Slow)</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 rounded-full bg-blue-500" />
                      <span className="text-sm text-zinc-600 dark:text-zinc-400">FPGA Accelerated (HFT Ready)</span>
                    </div>
                  </div>
                </div>
                <div className="lg:w-1/2 w-full h-[400px]">
                  <div className="glass-card p-6 rounded-3xl border border-zinc-200 dark:border-zinc-800 h-full">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={speedData} margin={{ top: 20, right: 30, left: 0, bottom: 0 }}>
                        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#3f3f46" opacity={0.2} />
                        <XAxis 
                          dataKey="name" 
                          axisLine={false} 
                          tickLine={false} 
                          tick={{ fontSize: 8, fill: '#71717a' }}
                          interval={0}
                          angle={-25}
                          textAnchor="end"
                          height={60}
                        />
                        <YAxis 
                          axisLine={false} 
                          tickLine={false} 
                          tick={{ fontSize: 8, fill: '#71717a' }}
                          label={{ value: 'Latency (µs)', angle: -90, position: 'insideLeft', style: { fill: '#71717a', fontSize: 8 } }}
                        />
                        <Tooltip 
                          cursor={{ fill: 'rgba(59, 130, 246, 0.05)' }}
                          contentStyle={{ backgroundColor: '#18181b', border: '1px solid #27272a', borderRadius: '8px', fontSize: '12px' }}
                          itemStyle={{ color: '#fff' }}
                        />
                        <ReferenceLine y={0.5} stroke="#ef4444" strokeDasharray="5 5" label={{ value: 'HFT LIMIT (0.5µs)', position: 'top', fill: '#ef4444', fontSize: 10 }} />
                        <Bar dataKey="latency" radius={[4, 4, 0, 0]}>
                          {speedData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.type === 'pqc-sw' ? '#ef4444' : entry.type === 'pqc-fpga' ? '#3b82f6' : '#71717a'} />
                          ))}
                        </Bar>
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </div>
              </div>
            </section>

            {/* Visualization 3: The FPGA Architecture */}
            <section className="relative">
              <div className="flex flex-col lg:flex-row items-center gap-12">
                <div className="lg:w-1/2">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-500 text-xs font-bold uppercase tracking-widest mb-6">
                    <Cpu className="w-4 h-4" />
                    Visualization 3: FPGA Architecture
                  </div>
                  <h3 className="text-3xl font-bold text-zinc-900 dark:text-white mb-6 tracking-tight">
                    Inside the FPGA chip: what makes it 15× faster.
                  </h3>
                  <p className="text-zinc-600 dark:text-zinc-400 mb-8 leading-relaxed">
                    Our structural diagram shows the pipeline stages inside the chip. By processing 
                    mathematical operations in parallel hardware stages, we eliminate the sequential 
                    bottlenecks of traditional CPUs.
                  </p>
                  <div className="p-6 rounded-2xl bg-emerald-500/5 border border-emerald-500/10">
                    <div className="text-3xl font-bold text-emerald-500 mb-1 mono-text">0.012 µs</div>
                    <div className="text-xs font-bold text-emerald-600 uppercase tracking-widest">Record-Breaking Result</div>
                  </div>
                </div>
                <div className="lg:w-1/2 w-full">
                  <div className="glass-card p-6 sm:p-8 rounded-3xl border border-zinc-200 dark:border-zinc-800 relative overflow-hidden">
                    <div className="absolute inset-0 tech-grid opacity-5" />
                    <div className="relative z-10 space-y-3 sm:space-y-4">
                      {[
                        { label: "PCIe Input", desc: "DMA Transfer from Host", color: "bg-blue-500/20 text-blue-500" },
                        { label: "NTT Engine", desc: "Mathematical Core (NTT)", color: "bg-purple-500/20 text-purple-500", active: true },
                        { label: "Pointwise Multiply", desc: "Parallel Polynomial Ops", color: "bg-purple-500/20 text-purple-500" },
                        { label: "Inverse NTT", desc: "Result Reconstruction", color: "bg-purple-500/20 text-purple-500" },
                        { label: "Output Buffer", desc: "Ready for Dispatch", color: "bg-emerald-500/20 text-emerald-500" }
                      ].map((stage, i) => (
                        <div key={i} className="flex flex-col items-center">
                          <motion.div 
                            whileHover={{ scale: 1.02 }}
                            className={`w-full p-3 sm:p-4 rounded-xl border flex items-center justify-between cursor-pointer transition-all ${stage.active ? 'border-purple-500/50 shadow-lg shadow-purple-500/10' : 'border-zinc-200 dark:border-zinc-700'}`}
                          >
                            <div className="flex items-center gap-3">
                              <div className={`w-7 h-7 sm:w-8 sm:h-8 rounded-lg flex items-center justify-center font-bold text-[10px] sm:text-xs ${stage.color}`}>
                                {i + 1}
                              </div>
                              <div>
                                <div className="text-xs sm:text-sm font-bold text-zinc-900 dark:text-white">{stage.label}</div>
                                <div className="text-[9px] sm:text-[10px] text-zinc-500 uppercase tracking-wider">{stage.desc}</div>
                              </div>
                            </div>
                            {stage.active && (
                              <div className="flex gap-1">
                                {[...Array(3)].map((_, j) => (
                                  <motion.div 
                                    key={j}
                                    animate={{ opacity: [0.2, 1, 0.2] }}
                                    transition={{ duration: 1, repeat: Infinity, delay: j * 0.2 }}
                                    className="w-1 sm:w-1.5 h-1 sm:h-1.5 rounded-full bg-purple-500"
                                  />
                                ))}
                              </div>
                            )}
                          </motion.div>
                          {i < 4 ? (
                            <div className="h-3 sm:h-4 w-px bg-zinc-200 dark:bg-zinc-700 relative">
                              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2">
                                <ArrowRight className="w-3 h-3 text-zinc-300 rotate-90" />
                              </div>
                            </div>
                          ) : (
                            <motion.div 
                              initial={{ opacity: 0, scale: 0.9 }}
                              whileInView={{ opacity: 1, scale: 1 }}
                              className="mt-4 p-3 rounded-lg bg-emerald-500/20 border border-emerald-500/30 text-emerald-500 text-center w-full"
                            >
                              <div className="text-[10px] font-bold uppercase tracking-widest mb-1">Final Latency</div>
                              <div className="text-base sm:text-lg font-bold">0.012 µs</div>
                            </motion.div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Visualization 4: The Migration Plan */}
            <section className="relative">
              <div className="flex flex-col lg:flex-row-reverse items-center gap-12">
                <div className="lg:w-1/2">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 text-xs font-bold uppercase tracking-widest mb-6">
                    <RefreshCw className="w-4 h-4" />
                    Visualization 4: Migration Plan
                  </div>
                  <h3 className="text-3xl font-bold text-zinc-900 dark:text-white mb-6 tracking-tight">
                    The 3-phase migration plan: switch without going offline.
                  </h3>
                  <p className="text-zinc-600 dark:text-zinc-400 mb-8 leading-relaxed">
                    Explore how any HFT firm can switch from RSA to quantum-proof encryption 
                    using our interactive slider. Each phase ensures zero-downtime and 
                    increasing levels of security.
                  </p>
                  <div className="flex gap-2 p-1 bg-zinc-100 dark:bg-zinc-900 rounded-xl border border-zinc-200 dark:border-zinc-800 mb-8">
                    {[1, 2, 3].map((phase) => (
                      <button
                        key={phase}
                        onClick={() => setActivePhase(phase)}
                        className={`flex-1 py-2 text-xs font-bold uppercase tracking-widest rounded-lg transition-all ${activePhase === phase ? 'bg-brand-primary text-white shadow-lg' : 'text-zinc-500 hover:text-zinc-900 dark:hover:text-white'}`}
                      >
                        Phase {phase}
                      </button>
                    ))}
                  </div>
                  <div className="grid grid-cols-3 gap-4">
                    {[
                      { label: "NIST FIPS 203", date: "2024", status: "Released" },
                      { label: "CNSA 2.0", date: "2025", status: "Compliance" },
                      { label: "Quantum Day", date: "2030", status: "Deadline" }
                    ].map((card, i) => (
                      <div key={i} className="p-3 rounded-xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-center">
                        <div className="text-[10px] font-bold text-zinc-400 uppercase mb-1">{card.label}</div>
                        <div className="text-sm font-bold text-zinc-900 dark:text-white">{card.date}</div>
                        <div className="text-[8px] font-bold text-brand-primary uppercase mt-1">{card.status}</div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="lg:w-1/2 w-full">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activePhase}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      className="glass-card p-8 rounded-3xl border border-zinc-200 dark:border-zinc-800 min-h-[400px] flex flex-col"
                    >
                      <div className="flex justify-between items-start mb-8">
                        <div>
                          <div className="text-brand-primary font-mono text-sm mb-1">{migrationPhases[activePhase-1].period}</div>
                          <h4 className="text-2xl font-bold text-zinc-900 dark:text-white">{migrationPhases[activePhase-1].title}</h4>
                        </div>
                        <div className="text-right">
                          <div className="text-xs font-bold text-zinc-500 uppercase tracking-widest mb-1">Key Formula</div>
                          <div className="text-lg font-mono font-bold text-zinc-900 dark:text-white">{migrationPhases[activePhase-1].formula}</div>
                        </div>
                      </div>

                      <div className="space-y-6 flex-grow">
                        <div>
                          <div className="flex justify-between text-xs font-bold uppercase tracking-widest mb-2">
                            <span className="text-zinc-500">Security Level</span>
                            <span className="text-brand-primary">{migrationPhases[activePhase-1].security}%</span>
                          </div>
                          <div className="w-full h-2 bg-zinc-100 dark:bg-zinc-800 rounded-full overflow-hidden">
                            <motion.div 
                              initial={{ width: 0 }}
                              animate={{ width: `${migrationPhases[activePhase-1].security}%` }}
                              className="h-full bg-brand-primary"
                            />
                          </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                          <div className="p-4 rounded-xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800">
                            <div className="text-[10px] font-bold text-zinc-400 uppercase mb-1">Latency Overhead</div>
                            <div className="text-xl font-bold text-zinc-900 dark:text-white">{migrationPhases[activePhase-1].overhead}</div>
                          </div>
                          <div className="p-4 rounded-xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800">
                            <div className="text-[10px] font-bold text-zinc-400 uppercase mb-1">Active Components</div>
                            <div className="text-sm font-bold text-zinc-900 dark:text-white">{migrationPhases[activePhase-1].components.length} Cores</div>
                          </div>
                        </div>

                        <div className="p-4 rounded-xl bg-brand-primary/5 border border-brand-primary/10">
                          <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed italic">
                            "{migrationPhases[activePhase-1].desc}"
                          </p>
                        </div>
                      </div>

                      <div className="mt-8 pt-6 border-t border-zinc-200 dark:border-zinc-800">
                        <div className="flex flex-wrap gap-2">
                          {migrationPhases[activePhase-1].components.map((comp, i) => (
                            <span key={i} className="px-2 py-1 rounded bg-zinc-100 dark:bg-zinc-800 text-[10px] font-mono text-zinc-500 border border-zinc-200 dark:border-zinc-700">
                              {comp}
                            </span>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>
            </section>
          </div>
        </div>

        {/* Framework Architecture Diagram */}
        <div className="mb-24">
          <div className="flex items-center gap-3 mb-10">
            <GitBranch className="w-6 h-6 text-brand-primary" />
            <h2 className="text-2xl font-bold text-zinc-900 dark:text-white">PQC-HFT Framework Architecture</h2>
          </div>
          
          <div className="p-8 md:p-12 rounded-3xl bg-zinc-900 border border-zinc-800 relative overflow-hidden">
            <div className="absolute inset-0 tech-grid opacity-10" />
            
            {/* Moving Data Packet Visual Flow */}
            <div className="absolute top-1/2 left-0 w-full h-1 -translate-y-1/2 hidden lg:block pointer-events-none">
              <motion.div 
                animate={{ 
                  x: ["0%", "100%"],
                  opacity: [0, 1, 1, 0]
                }}
                transition={{ 
                  duration: 6, 
                  repeat: Infinity, 
                  ease: "linear" 
                }}
                className="w-4 h-4 bg-brand-primary rounded-full blur-sm shadow-[0_0_15px_rgba(59,130,246,0.8)]"
              />
            </div>

            <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-4">
              {/* Layer 1: Ingress */}
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="flex flex-col items-center text-center w-full lg:w-48 p-4 rounded-2xl bg-zinc-800/30 border border-zinc-700/50 relative"
              >
                <div className="w-16 h-16 rounded-2xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mb-4">
                  <Activity className="w-8 h-8 text-blue-500" />
                </div>
                <h4 className="text-xs font-bold text-white uppercase tracking-widest mb-2">Order Ingress</h4>
                <p className="text-[10px] text-zinc-500">Raw FIX/FAST Protocol Data</p>
                
                {/* Visual Flow Indicator */}
                <motion.div 
                  animate={{ opacity: [0.2, 1, 0.2] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="absolute -bottom-8 lg:bottom-auto lg:-right-4 top-auto lg:top-1/2 translate-y-0 lg:-translate-y-1/2"
                >
                  <ArrowRight className="w-4 h-4 text-brand-primary rotate-90 lg:rotate-0" />
                </motion.div>
              </motion.div>

              {/* Layer 2: Hybrid Core */}
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="flex flex-col items-center p-6 rounded-2xl bg-zinc-800/50 border border-zinc-700 w-full lg:w-auto relative"
              >
                <div className="flex gap-8 mb-4">
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mb-2">
                      <ShieldCheck className="w-6 h-6 text-emerald-500" />
                    </div>
                    <span className="text-[9px] font-mono text-emerald-500 uppercase">Kyber-768</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mb-2">
                      <Lock className="w-6 h-6 text-blue-500" />
                    </div>
                    <span className="text-[9px] font-mono text-blue-500 uppercase">ECDH</span>
                  </div>
                </div>
                <h4 className="text-xs font-bold text-white uppercase tracking-widest mb-2">HCTF Hybrid Core</h4>
                <p className="text-[10px] text-zinc-500">Parallel Key Encapsulation</p>

                {/* Visual Flow Indicator */}
                <motion.div 
                  animate={{ opacity: [0.2, 1, 0.2] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                  className="absolute -bottom-8 lg:bottom-auto lg:-right-4 top-auto lg:top-1/2 translate-y-0 lg:-translate-y-1/2"
                >
                  <ArrowRight className="w-4 h-4 text-brand-primary rotate-90 lg:rotate-0" />
                </motion.div>
              </motion.div>

              {/* Layer 3: FPGA NTT */}
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="flex flex-col items-center text-center w-full lg:w-48 p-4 rounded-2xl bg-zinc-800/30 border border-zinc-700/50 relative"
              >
                <div className="w-16 h-16 rounded-2xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center mb-4">
                  <Cpu className="w-8 h-8 text-purple-500" />
                </div>
                <h4 className="text-xs font-bold text-white uppercase tracking-widest mb-2">FPGA NTT</h4>
                <p className="text-[10px] text-zinc-500">Hardware Acceleration</p>

                {/* Visual Flow Indicator */}
                <motion.div 
                  animate={{ opacity: [0.2, 1, 0.2] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                  className="absolute -bottom-8 lg:bottom-auto lg:-right-4 top-auto lg:top-1/2 translate-y-0 lg:-translate-y-1/2"
                >
                  <ArrowRight className="w-4 h-4 text-brand-primary rotate-90 lg:rotate-0" />
                </motion.div>
              </motion.div>

              {/* Layer 4: Egress */}
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="flex flex-col items-center text-center w-full lg:w-48 p-4 rounded-2xl bg-zinc-800/30 border border-zinc-700/50"
              >
                <div className="w-16 h-16 rounded-2xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center mb-4">
                  <Zap className="w-8 h-8 text-amber-500" />
                </div>
                <h4 className="text-xs font-bold text-white uppercase tracking-widest mb-2">Secure Egress</h4>
                <p className="text-[10px] text-zinc-500">Quantum-Safe Packet</p>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Research Paper Working Process Visualization */}
        <div className="mb-24">
          <div className="flex items-center gap-3 mb-10">
            <Microscope className="w-6 h-6 text-brand-primary" />
            <h2 className="text-2xl font-bold text-zinc-900 dark:text-white">Research Workflow Visualization</h2>
          </div>
          
          <div className="relative p-8 rounded-3xl bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800 overflow-hidden">
            <div className="absolute inset-0 tech-grid opacity-5" />
            
            <div className="relative z-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8 sm:gap-4">
              {processSteps.map((step, i) => (
                <div key={step.title} className="relative flex flex-col items-center">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.2, duration: 0.5 }}
                    viewport={{ once: true }}
                    className={`w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 flex items-center justify-center mb-4 shadow-sm group hover:border-brand-primary transition-all relative`}
                  >
                    <step.icon className={`w-8 h-8 ${step.color}`} />
                    
                    {/* Moderate Speed Pulse Effect */}
                    <motion.div 
                      animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.5, 0.2] }}
                      transition={{ duration: 3, repeat: Infinity, delay: i * 0.5 }}
                      className={`absolute inset-0 rounded-2xl ${step.color.replace('text', 'bg')}/20`}
                    />
                  </motion.div>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-500 text-center">{step.title}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-12">
            <section>
              <h2 className="text-2xl font-bold text-zinc-900 dark:text-white flex items-center gap-2 mb-8">
                <BookOpen className="w-6 h-6 text-brand-primary" />
                Key Publications
              </h2>
              
              <div className="space-y-6">
                {publications.map((pub, i) => (
                  <motion.div
                    key={pub.title}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="glass-card p-8 rounded-2xl border border-zinc-200 dark:border-zinc-800 group hover:border-brand-primary/50 transition-all"
                  >
                    <div className="flex flex-wrap gap-2 mb-4">
                      {pub.tags.map(tag => (
                        <span key={tag} className="px-2 py-0.5 rounded-md bg-zinc-100 dark:bg-zinc-800 text-[10px] font-bold text-zinc-500 uppercase tracking-widest">
                          {tag}
                        </span>
                      ))}
                      <span className="ml-auto text-xs font-bold text-brand-primary uppercase tracking-widest">
                        {pub.status}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-2 group-hover:text-brand-primary transition-colors">
                      {pub.title}
                    </h3>
                    <p className="text-zinc-500 dark:text-zinc-400 text-sm mb-4">
                      {pub.journal} • {pub.year}
                    </p>
                    <p className="text-sm text-zinc-600 dark:text-zinc-500 mb-6 leading-relaxed italic">
                      "{pub.abstract}"
                    </p>
                    <div className="flex gap-4">
                      <a 
                        href={pub.abstractUrl}
                        className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-zinc-900 dark:text-white hover:text-brand-primary transition-colors"
                      >
                        <FileText className="w-4 h-4" />
                        Read Abstract
                      </a>
                      {pub.title === "Post-Quantum Cryptography for High-Frequency Trading" ? (
                        <button 
                          onClick={onOpenPaper}
                          className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-zinc-900 dark:text-white hover:text-brand-primary transition-colors"
                        >
                          <Download className="w-4 h-4" />
                          Download PDF
                        </button>
                      ) : (
                        <a 
                          href={pub.pdfUrl}
                          className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-zinc-900 dark:text-white hover:text-brand-primary transition-colors"
                        >
                          <Download className="w-4 h-4" />
                          Download PDF
                        </a>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-zinc-900 dark:text-white flex items-center gap-2 mb-8">
                <TrendingUp className="w-6 h-6 text-brand-primary" />
                Strategic Analysis
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="p-6 rounded-2xl bg-emerald-500/5 border border-emerald-500/10">
                  <h4 className="text-emerald-600 dark:text-emerald-400 font-bold mb-4 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4" />
                    Advantages (Pros)
                  </h4>
                  <ul className="space-y-3">
                    {[
                      "Quantum-resistance against Shor's algorithm",
                      "Sub-microsecond latency via FPGA acceleration",
                      "Hybrid security (ECDH + Kyber) for defense-in-depth",
                      "NIST FIPS 203/204 compliant architecture"
                    ].map(item => (
                      <li key={item} className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed flex gap-2">
                        <span className="text-emerald-500">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-6 rounded-2xl bg-amber-500/5 border border-amber-500/10">
                  <h4 className="text-amber-600 dark:text-amber-400 font-bold mb-4 flex items-center gap-2">
                    <AlertTriangle className="w-4 h-4" />
                    Limitations (Cons)
                  </h4>
                  <ul className="space-y-3">
                    {[
                      "Increased hardware complexity (FPGA required)",
                      "Larger key/ciphertext sizes compared to ECC",
                      "Higher power consumption in hardware pipelines",
                      "Requires specialized cryptographic engineering"
                    ].map(item => (
                      <li key={item} className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed flex gap-2">
                        <span className="text-amber-500">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-zinc-900 dark:text-white flex items-center gap-2 mb-8">
                <Search className="w-6 h-6 text-brand-primary" />
                Research Domains
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {topics.map((topic, i) => (
                  <motion.div
                    key={topic.title}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="p-6 rounded-2xl bg-zinc-50 dark:bg-zinc-900/30 border border-zinc-100 dark:border-zinc-800/50"
                  >
                    <topic.icon className="w-6 h-6 text-brand-primary mb-4" />
                    <h4 className="font-bold text-zinc-900 dark:text-white mb-2">{topic.title}</h4>
                    <p className="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed">{topic.desc}</p>
                  </motion.div>
                ))}
              </div>
            </section>
          </div>

          <div className="space-y-8">
            <h2 className="text-2xl font-bold text-zinc-900 dark:text-white flex items-center gap-2">
              <ShieldCheck className="w-6 h-6 text-brand-primary" />
              Methodology
            </h2>
            <div className="glass-card p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800">
              <img 
                src= {pqcImg} 
                alt="HFT Communication Architecture Diagram" 
                className="rounded-xl mb-6 grayscale hover:grayscale-0 transition-all duration-500"
                referrerPolicy="no-referrer"
              />
              <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed">
                The HFT Communication Architecture illustrates the critical data flow between the 
                 Trading Server (Strategy Engine, Signal Gen, Order Router) and the **Exchange Co-location**. 
                Our research specifically addresses the **Network Layer** vulnerability where current 
                RSA-2048/ECC encryption is susceptible to **Shor's Algorithm** attacks.
              </p>
              <ul className="mt-6 space-y-3">
                <li className="flex items-center gap-2 text-xs font-bold text-zinc-600 dark:text-zinc-300">
                  <ShieldAlert className="w-4 h-4 text-brand-primary" />
                  Quantum Threat (Shor's Algorithm)
                </li>
                <li className="flex items-center gap-2 text-xs font-bold text-zinc-600 dark:text-zinc-300">
                  <Lock className="w-4 h-4 text-brand-primary" />
                  Secure Microwave/Fiber TLS
                </li>
              </ul>
            </div>

            <div className="p-6 rounded-2xl bg-brand-primary/5 border border-brand-primary/10">
              <h3 className="text-sm font-bold text-brand-primary uppercase tracking-widest mb-4">Future Work</h3>
              <ul className="space-y-4">
                <li className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  • Integration of Dilithium-3 for digital signatures in HFT order authentication.
                </li>
                <li className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  • Real-world pilot testing on high-frequency matching engines.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
