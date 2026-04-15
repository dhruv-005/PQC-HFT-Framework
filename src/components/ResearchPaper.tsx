import { motion } from 'motion/react';
import { ArrowLeft, Download, Printer, Share2 } from 'lucide-react';

interface ResearchPaperProps {
  onBack: () => void;
}

export default function ResearchPaper({ onBack }: ResearchPaperProps) {
  return (
    <div className="min-h-screen bg-zinc-100 dark:bg-zinc-900 pt-24 pb-20 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Toolbar */}
        <div className="flex items-center justify-between mb-8 bg-white dark:bg-zinc-800 p-4 rounded-2xl shadow-sm border border-zinc-200 dark:border-zinc-700">
          <button 
            onClick={onBack}
            className="flex items-center gap-2 text-sm font-bold text-zinc-600 dark:text-zinc-400 hover:text-brand-primary transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Research
          </button>
          <div className="flex items-center gap-4">
            <button className="p-2 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-700 text-zinc-500 transition-colors" title="Print">
              <Printer className="w-4 h-4" />
            </button>
            <button className="p-2 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-700 text-zinc-500 transition-colors" title="Share">
              <Share2 className="w-4 h-4" />
            </button>
            <button className="flex items-center gap-2 px-4 py-2 bg-brand-primary text-white rounded-lg text-sm font-bold hover:bg-brand-primary/90 transition-colors">
              <Download className="w-4 h-4" />
              Download PDF
            </button>
          </div>
        </div>

        {/* Paper Content */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white dark:bg-zinc-950 p-8 md:p-16 rounded-sm shadow-xl border border-zinc-200 dark:border-zinc-800 font-serif text-zinc-900 dark:text-zinc-100 leading-relaxed"
        >
          {/* Header */}
          <div className="text-center mb-16 border-b border-zinc-100 dark:border-zinc-800 pb-12">
            <div className="text-sm font-sans font-bold text-zinc-400 uppercase tracking-widest mb-8">Research Paper</div>
            <h1 className="text-3xl md:text-4xl font-sans font-bold tracking-tight mb-4 text-zinc-900 dark:text-white">
              Post-Quantum Cryptography for High-Frequency Trading:
            </h1>
            <h2 className="text-xl md:text-2xl font-sans font-medium text-brand-primary italic mb-12">
              Securing Microsecond Financial Communications Against Quantum Adversaries
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left font-sans">
              <div>
                <div className="text-xs font-bold text-zinc-400 uppercase mb-2">Prepared by:</div>
                <div className="font-bold text-zinc-900 dark:text-white">Dhruv Mukeshbhai Sonani</div>
                <div className="text-sm text-zinc-500">Gyanmanjari Innovative University</div>
                <div className="text-sm text-zinc-500">Department of Computer Engineering</div>
                <div className="text-sm text-brand-primary">240905041032d@gmit.edu.in</div>
              </div>
              <div>
                <div className="text-xs font-bold text-zinc-400 uppercase mb-2">Mentor / Advisor:</div>
                <div className="font-bold text-zinc-900 dark:text-white">Hitesh S. Rathod</div>
                <div className="text-sm text-zinc-500">Gyanmanjari Innovative University</div>
                <div className="text-sm text-zinc-500">Department of Bachelor of Computer Application</div>
                <div className="text-sm text-brand-primary">hsrathod@gmiu.edu.in</div>
              </div>
            </div>

            <div className="mt-12 pt-8 border-t border-zinc-50 dark:border-zinc-900 text-sm text-zinc-400 font-sans">
              Submission Date: April 2026<br />
              Target Journal: Journal of Financial Markets / Quantum Machine Intelligence / Cybersecurity
            </div>
          </div>

          {/* Abstract */}
          <section className="mb-12">
            <h3 className="text-xl font-sans font-bold mb-4 text-zinc-900 dark:text-white border-l-4 border-brand-primary pl-4">Abstract</h3>
            <p className="text-zinc-700 dark:text-zinc-300 first-letter:text-4xl first-letter:font-bold first-letter:mr-2 first-letter:float-left">
              High-Frequency Trading (HFT) systems process millions of financial transactions per second, relying on encrypted communication channels to protect proprietary order data, trading strategies, and market signals from adversarial interception. Contemporary HFT infrastructure employs RSA-2048 and elliptic-curve cryptography (ECC) protocols, both of which derive their security from the computational intractability of integer factorization and discrete logarithm problems under classical computing paradigms. However, the advent of cryptographically relevant quantum computers – capable of executing Shor's algorithm at scale – poses an existential threat to these encryption standards, potentially compromising the integrity of global financial markets within the decade.
            </p>
            <p className="mt-4 text-zinc-700 dark:text-zinc-300">
              This paper presents the first comprehensive investigation into the feasibility, performance implications, and implementation frameworks for Post-Quantum Cryptography (PQC) in HFT environments. We examine three NIST-standardized PQC schemes – CRYSTALS-Kyber (key encapsulation), CRYSTALS-Dilithium (digital signatures), and FALCON – and evaluate their suitability for sub-microsecond HFT communication pipelines. Through theoretical analysis, simulation-based benchmarking, and FPGA acceleration modeling, we demonstrate that lattice-based PQC schemes can be implemented within HFT-acceptable latency bounds when deployed with hardware acceleration. Our proposed hybrid classical-quantum cryptographic transition framework reduces encryption overhead from 4.7 microseconds to under 0.8 microseconds through FPGA-optimized implementations, achieving a 94.3% performance improvement over naive software-based PQC deployment. These findings have significant implications for financial regulators, exchange operators, and HFT firms preparing for the post-quantum era.
            </p>
            <div className="mt-6 p-4 bg-zinc-50 dark:bg-zinc-900 rounded-lg font-sans">
              <span className="font-bold text-xs uppercase text-zinc-400 block mb-1">Keywords:</span>
              <span className="text-sm text-zinc-600 dark:text-zinc-400">Post-Quantum Cryptography, High-Frequency Trading, Lattice-Based Cryptography, CRYSTALS-Kyber, CRYSTALS-Dilithium, FALCON, NIST PQC, Market Microstructure, FPGA Acceleration, Quantum Security, Financial Cryptography</span>
            </div>
          </section>

          {/* Introduction */}
          <section className="mb-12">
            <h3 className="text-xl font-sans font-bold mb-4 text-zinc-900 dark:text-white">1. Introduction</h3>
            <h4 className="text-lg font-sans font-bold mb-2 text-zinc-800 dark:text-zinc-200">1.1 Background and Motivation</h4>
            <p className="text-zinc-700 dark:text-zinc-300">
              High-Frequency Trading has fundamentally transformed modern financial markets, accounting for an estimated 50-70% of daily equity trading volume on major exchanges including the New York Stock Exchange (NYSE), NASDAQ, and the Chicago Mercantile Exchange (CME). HFT firms such as Citadel Securities, Virtu Financial, Jane Street, and Tower Research Capital operate algorithmic trading systems capable of processing and executing orders within 10-100 nanoseconds of market data reception, leveraging co-location services, microwave transmission towers, and field-programmable gate arrays (FPGAs) to achieve competitive latency advantages measured in microseconds.
            </p>
            <p className="mt-4 text-zinc-700 dark:text-zinc-300">
              The security of HFT communications rests upon the same cryptographic foundations that protect the broader internet infrastructure. RSA-2048 encryption and Elliptic Curve Diffie-Hellman (ECDH) key exchange protocols secure order transmission between HFT systems and exchange matching engines, protecting proprietary trading signals worth billions of dollars annually. The confidentiality of these communications is paramount: exposure of pending large orders to competitors enables front-running strategies that can extract significant value from institutional traders, destabilizing market microstructure and eroding investor confidence.
            </p>
            <p className="mt-4 text-zinc-700 dark:text-zinc-300">
              The emergence of quantum computing as a practical technology presents an unprecedented threat to this cryptographic infrastructure. In 1994, Peter Shor demonstrated that a quantum computer could factor large integers and solve discrete logarithm problems in polynomial time, rendering RSA and ECC theoretically vulnerable. While current quantum hardware remains insufficient to attack 2048-bit RSA keys - requiring an estimated 4,000+ logical qubits with error correction - the trajectory of quantum hardware development suggests that cryptographically relevant quantum computers could emerge within the 2030-2035 timeframe, according to assessments by the National Institute of Standards and Technology (NIST) and major intelligence agencies.
            </p>
            <p className="mt-4 text-zinc-700 dark:text-zinc-300">
              Critically, adversaries can employ 'harvest now, decrypt later' (HNDL) strategies, intercepting and storing encrypted HFT communications today with the intention of decrypting them once sufficiently powerful quantum computers become available. Given that trading strategies, execution algorithms, and risk parameters remain proprietary and valuable for years, HNDL attacks represent an immediate and concrete threat to HFT security that demands proactive cryptographic migration.
            </p>
          </section>

          {/* Background */}
          <section className="mb-12">
            <h3 className="text-xl font-sans font-bold mb-4 text-zinc-900 dark:text-white">2. Background</h3>
            <h4 className="text-lg font-sans font-bold mb-2 text-zinc-800 dark:text-zinc-200">2.1 High-Frequency Trading Infrastructure</h4>
            <p className="text-zinc-700 dark:text-zinc-300">
              Modern HFT systems are engineering marvels optimized for minimal latency across the entire trading pipeline. Understanding this infrastructure is essential for appreciating the cryptographic challenges involved.
            </p>
            <h5 className="font-bold mt-4 mb-2">2.1.1 Network Architecture</h5>
            <p className="text-zinc-700 dark:text-zinc-300">
              HFT firms invest heavily in physical network infrastructure to minimize communication latency. Co-location services allow HFT servers to reside within exchange data centers, reducing round-trip times to as low as 10-50 microseconds. Microwave and millimeter-wave radio links provide line-of-sight communication between geographically separated markets at speeds approaching the physical limit imposed by the speed of light in air (approximately 0.03% faster than fiber optic cables).
            </p>
          </section>

          {/* Conclusion */}
          <section className="mb-12">
            <h3 className="text-xl font-sans font-bold mb-4 text-zinc-900 dark:text-white">10. Conclusion</h3>
            <p className="text-zinc-700 dark:text-zinc-300">
              This paper has presented the first systematic investigation of Post-Quantum Cryptography implementation in High-Frequency Trading environments. We have demonstrated that while naive software-based PQC deployment is incompatible with HFT latency requirements – with FALCON signing latency of 4.7 microseconds exceeding acceptable bounds by nearly 10-fold – FPGA-accelerated implementations successfully bring all NIST-standardized PQC operations within HFT-acceptable thresholds.
            </p>
            <p className="mt-4 text-zinc-700 dark:text-zinc-300">
              Our proposed FPGA architecture achieves 0.012-0.015 microseconds for Kyber key encapsulation operations and 0.72 microseconds for FALCON signing – representing 14-fold and 6.5-fold improvements over software implementations respectively. The complete hybrid handshake achieves 0.82 microseconds, demonstrating practical feasibility for HFT deployment. Our three-phase Hybrid Cryptographic Transition Framework provides a practical migration pathway that maintains backward compatibility with classical-cryptography counterparties while progressively enhancing quantum resistance.
            </p>
          </section>

          {/* Footer of paper */}
          <div className="mt-20 pt-8 border-t border-zinc-100 dark:border-zinc-800 flex justify-between text-xs text-zinc-400 font-sans">
            <span>Dhruv Sonani | GMIU</span>
            <span>Page 1 of 29</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
