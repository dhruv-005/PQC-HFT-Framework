import { motion } from 'motion/react';
import { Github, Linkedin, Mail, GraduationCap, MapPin, ShieldCheck } from 'lucide-react';
import hiteshImg from '../hitesh.png';
import dhruvImg from '../Dhruv.png';

const team = [
  {
    name: "Dhruv Mukeshbhai",
    surname: "Sonani",
    role: "Lead Researcher",
    title: "Computer Engineering Student",
    bio: "Specializing in hardware-accelerated cryptography and low-latency systems. Focused on securing the future of financial markets against the quantum threat.",
    email: "240905041032d@gmit.edu.in",
    github: "https://github.com/dhruv-005/",
    linkedin: "#",
    image: dhruvImg,
    icon: GraduationCap
  },
  {
    name: "Hitesh",
    surname: "Rathod",
    role: "Advisor & Mentor",
    title: "Assistant Professor",
    bio: "Providing expert guidance on cryptographic frameworks and academic rigor. Supporting the development of post-quantum security standards in high-frequency environments.",
    email: "hsrathod@gmiu.edu.in",
    github: "#",
    linkedin: "#",
    image: hiteshImg,
    icon: ShieldCheck
  }
];

export default function Team() {
  return (
    <div className="pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <h1 className="text-4xl md:text-6xl font-bold tracking-tighter text-zinc-900 dark:text-white mb-6">
            Our <span className="text-brand-primary">Team</span>
          </h1>
          <p className="text-xl text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
            The researchers and mentors behind the PQC-HFT Framework.
          </p>
        </motion.div>

        <div className="space-y-32">
          {team.map((member, i) => (
            <div key={member.email} className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${i % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
              <motion.div
                initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className={i % 2 === 1 ? 'lg:order-2' : ''}
              >
                <div className="relative group">
                  <div className="absolute -inset-4 bg-brand-primary/20 blur-3xl rounded-full opacity-50 group-hover:opacity-100 transition-opacity" />
                  <div className="relative rounded-3xl overflow-hidden border-4 border-white dark:border-zinc-900 shadow-2xl aspect-square w-full max-w-[320px] sm:max-w-md mx-auto lg:mx-0">
                    <img 
                      src={member.image} 
                      alt={`${member.name} ${member.surname}`} 
                      className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: i % 2 === 0 ? 20 : -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className={i % 2 === 1 ? 'lg:order-1' : ''}
              >
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-primary/10 border border-brand-primary/20 text-brand-primary text-xs font-bold uppercase tracking-widest mb-8">
                  <member.icon className="w-4 h-4" />
                  {member.role}
                </div>
                
                <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-zinc-900 dark:text-white mb-6">
                  {member.name} <span className="text-brand-primary">{member.surname}</span>
                </h2>
                
                <div className="flex items-center gap-4 text-zinc-500 dark:text-zinc-400 mb-8">
                  <div className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    Gujarat, India
                  </div>
                  <div className="w-1 h-1 bg-zinc-300 dark:bg-zinc-700 rounded-full" />
                  <div>{member.title}</div>
                </div>

                <p className="text-xl text-zinc-600 dark:text-zinc-400 leading-relaxed mb-10">
                  {member.bio}
                </p>

                <div className="flex flex-wrap gap-4">
                  <a 
                    href={member.github} 
                    className="flex items-center gap-2 px-6 py-3 rounded-xl bg-zinc-900 dark:bg-zinc-800 text-white font-bold hover:bg-brand-primary transition-colors"
                  >
                    <Github className="w-5 h-5" />
                    GitHub
                  </a>
                  <a 
                    href={member.linkedin} 
                    className="flex items-center gap-2 px-6 py-3 rounded-xl border border-zinc-200 dark:border-zinc-800 text-zinc-900 dark:text-white font-bold hover:border-brand-primary transition-colors"
                  >
                    <Linkedin className="w-5 h-5" />
                    LinkedIn
                  </a>
                  <a 
                    href={`mailto:${member.email}`} 
                    className="flex items-center gap-2 px-6 py-3 rounded-xl border border-zinc-200 dark:border-zinc-800 text-zinc-900 dark:text-white font-bold hover:border-brand-primary transition-colors"
                  >
                    <Mail className="w-5 h-5" />
                    Email
                  </a>
                </div>
              </motion.div>
            </div>
          ))}
        </div>

        <div className="mt-32 grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="p-8 rounded-2xl bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800">
            <h3 className="text-xs font-bold uppercase tracking-widest text-zinc-400 dark:text-zinc-500 mb-4">Project Context</h3>
            <p className="text-zinc-900 dark:text-white font-bold">Post-Quantum Cryptography</p>
            <p className="text-sm text-zinc-500">High-Frequency Trading Security</p>
          </div>
          <div className="p-8 rounded-2xl bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800">
            <h3 className="text-xs font-bold uppercase tracking-widest text-zinc-400 dark:text-zinc-500 mb-4">Focus Areas</h3>
            <div className="flex flex-wrap gap-2">
              {['PQC', 'HFT', 'FPGA', 'Verilog', 'C++', 'Python'].map(skill => (
                <span key={skill} className="px-2 py-1 rounded bg-white dark:bg-zinc-800 text-xs font-mono dark:text-zinc-300 border border-zinc-200 dark:border-zinc-700">
                  {skill}
                </span>
              ))}
            </div>
          </div>
          <div className="p-8 rounded-2xl bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800">
            <h3 className="text-xs font-bold uppercase tracking-widest text-zinc-400 dark:text-zinc-500 mb-4">Institution</h3>
            <p className="text-zinc-900 dark:text-white font-bold">Gyanmanjari Innovative University</p>
            <p className="text-sm text-zinc-500">Department of Computer Engineering</p>
          </div>
        </div>
      </div>
    </div>
  );
}
