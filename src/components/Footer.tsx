import { Shield, Github, Mail, ExternalLink } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-zinc-950 border-t border-zinc-200 dark:border-zinc-800 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <Shield className="w-8 h-8 text-brand-primary" />
              <span className="font-bold text-2xl tracking-tighter dark:text-white">PQC-HFT</span>
            </div>
            <p className="text-zinc-500 dark:text-zinc-400 max-w-sm leading-relaxed">
              Researching the intersection of post-quantum cryptography and ultra-low-latency 
              financial systems. A framework for the next generation of secure trading.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold text-zinc-900 dark:text-white mb-6 uppercase text-xs tracking-widest">Resources</h4>
            <ul className="space-y-4 text-sm text-zinc-500 dark:text-zinc-400">
              <li><a href="#" className="hover:text-brand-primary transition-colors flex items-center gap-2">Research Paper <ExternalLink className="w-3 h-3" /></a></li>
              <li><a href="https://www.nist.gov/standards" className="hover:text-brand-primary transition-colors flex items-center gap-2">NIST Standards <ExternalLink className="w-3 h-3" /></a></li>
              <li><a href="https://github.com/lastweek/fpga_decode_bitstream" className="hover:text-brand-primary transition-colors flex items-center gap-2">FPGA Bitstreams <ExternalLink className="w-3 h-3" /></a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-zinc-900 dark:text-white mb-6 uppercase text-xs tracking-widest">Contact</h4>
            <ul className="space-y-4 text-sm text-zinc-500 dark:text-zinc-400">
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                240905041032d@gmit.edu.in
              </li>
              <li className="flex items-center gap-2">
                <Github className="w-4 h-4" />
                dhruv-005
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-zinc-200 dark:border-zinc-800 flex flex-col md:row justify-between items-center gap-4">
          <p className="text-xs text-zinc-400 dark:text-zinc-500">
            © 2026 Dhruv Sonani. | Lead Researcher.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-xs text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="text-xs text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
