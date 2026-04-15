/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { ThemeProvider } from './components/ThemeContext';
import Navbar, { PageId } from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Algorithms from './components/Algorithms';
import FPGA from './components/FPGA';
import ThreatModel from './components/ThreatModel';
import HCTF from './components/HCTF';
import Footer from './components/Footer';
import Visualization from './components/Visualization';
import Research from './components/Research';
import ResearchPaper from './components/ResearchPaper';
import Documentation from './components/Documentation';
import Team from './components/Team';
import { AnimatePresence, motion } from 'motion/react';

export default function App() {
  const [activePage, setActivePage] = useState<PageId>('home');

  const renderPage = () => {
    switch (activePage) {
      case 'home':
        return (
          <motion.div
            key="home"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <Hero />
            <Stats />
            <Visualization />
            <Algorithms />
            <FPGA />
            <ThreatModel />
            <HCTF />
          </motion.div>
        );
      case 'research':
        return <Research onOpenPaper={() => setActivePage('paper')} />;
      case 'paper':
        return <ResearchPaper onBack={() => setActivePage('research')} />;
      case 'docs':
        return <Documentation />;
      case 'team':
        return <Team />;
      default:
        return null;
    }
  };

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 selection:bg-brand-primary/30 transition-colors duration-300">
        <Navbar activePage={activePage} onPageChange={setActivePage} />
        <main>
          <AnimatePresence mode="wait">
            {renderPage()}
          </AnimatePresence>
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}
