import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import { 
  Scale, 
  Code2, 
  PenTool, 
  BrainCircuit, 
  Globe2, 
  MessageSquareQuote, 
  BookOpen, 
  Cpu, 
  Bitcoin,
  Flame,
  Github,
  ExternalLink
} from 'lucide-react';

function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });
  
  const yText = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacityText = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <section ref={ref} className="relative h-screen flex flex-col items-center justify-center overflow-hidden border-b border-white/10">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,#1f1f1f_0%,transparent_60%)] opacity-50"></div>
      
      <motion.div 
        style={{ y: yText, opacity: opacityText }}
        className="z-10 text-center px-6"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-mono text-xs md:text-sm tracking-[0.2em] uppercase text-white/60 mb-6"
        >
          Adegboye Habeeb Temitope
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="font-serif text-7xl md:text-[12vw] leading-[0.8] mb-8 tracking-tighter"
        >
          Habibi.
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="flex flex-wrap justify-center gap-4 text-xs md:text-sm uppercase tracking-widest font-medium text-white/80"
        >
          <span className="px-3 py-1 border border-white/20 rounded-full bg-white/5">Creator of Community</span>
          <span className="px-3 py-1 border border-white/20 rounded-full bg-white/5">Student Leader</span>
          <span className="px-3 py-1 border border-white/20 rounded-full bg-white/5 inline-flex items-center gap-2">
            Vibe Coder <Flame size={14} className="text-orange-500" />
          </span>
        </motion.div>
      </motion.div>

      {/* Decorative lines */}
      <div className="absolute left-12 top-0 bottom-0 w-px bg-white/10 hidden md:block" />
      <div className="absolute right-12 top-0 bottom-0 w-px bg-white/10 hidden md:block" />
    </section>
  );
}

function Marquee() {
  const roles = [
    "Law Student", "Developer", "Poet", "AI Enthusiast", "Student Leader", "Writer", "Nerd"
  ];
  const duplicatedRoles = [...roles, ...roles, ...roles];

  return (
    <div className="py-8 bg-white text-black overflow-hidden flex flex-col justify-center">
      <motion.div 
        animate={{ x: ["0%", "-33.33%"] }}
        transition={{ ease: "linear", duration: 15, repeat: Infinity }}
        className="flex whitespace-nowrap"
      >
        {duplicatedRoles.map((role, i) => (
          <div key={i} className="flex items-center">
            <span className="text-4xl md:text-6xl font-black uppercase tracking-tighter mx-8 font-sans">
              {role}
            </span>
            <span className="text-2xl text-black/20 text-serif italic">✧</span>
          </div>
        ))}
      </motion.div>
    </div>
  );
}

function About() {
  return (
    <section className="py-32 px-6 md:px-12 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-8 items-center border-b border-white/10">
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="font-serif text-5xl md:text-7xl leading-none mb-8">
          The <span className="italic text-white/50">Duality</span> <br/> of a Nerd.
        </h2>
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="space-y-6 text-lg md:text-xl text-white/70 font-light leading-relaxed"
      >
        <p>
          I exist at the intersection of rigid systems and boundless creativity. 
          As a <strong className="text-white font-medium">Law student</strong>, I dissect rules. 
          As a <strong className="text-white font-medium">Developer</strong> and <strong className="text-white font-medium">AI enthusiast</strong>, I build systems. 
          As a <strong className="text-white font-medium">Poet</strong> and <strong className="text-white font-medium">Writer</strong>, I bend language to its breaking point.
        </p>
        <p className="font-mono text-sm border-l-2 border-white/30 pl-4 text-white/50">
          // Occasionally vibe coding at 3am when inspiration strikes.
        </p>
        <p>
          I'm driven by an insatiable curiosity—reading, researching, and endlessly arguing about the fabrics that make up our world. A proud nerd, and a creator of community.
        </p>
      </motion.div>
    </section>
  );
}

const topics = [
  { name: "Geopolitics", icon: <Globe2 size={32} strokeWidth={1.5} />, desc: "Analyzing power, geography, and the intricate chess game of nations.", colSpan: "md:col-span-2" },
  { name: "Philosophy", icon: <BrainCircuit size={32} strokeWidth={1.5} />, desc: "Questioning existence, ethics, and the fundamental nature of truth." },
  { name: "Technology & AI", icon: <Cpu size={32} strokeWidth={1.5} />, desc: "Exploring the bleeding edge of AI and how it reshapes humanity.", colSpan: "md:col-span-2" },
  { name: "Linguistics", icon: <MessageSquareQuote size={32} strokeWidth={1.5} />, desc: "Studying the structure, evolution, and power of human language." },
  { name: "Web3", icon: <Bitcoin size={32} strokeWidth={1.5} />, desc: "Decentralized systems, smart contracts, and the future of trust." },
  { name: "Religions", icon: <BookOpen size={32} strokeWidth={1.5} />, desc: "Understanding the belief systems that govern human morality and culture.", colSpan: "md:col-span-2" }
];

function Interests() {
  return (
    <section className="py-32 px-6 md:px-12 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-20 text-center"
      >
        <h3 className="font-mono text-sm tracking-widest uppercase text-white/50 mb-4 drop-shadow-sm">Obsessions</h3>
        <h2 className="font-serif text-4xl md:text-6xl">Reading, Researching, Arguing.</h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {topics.map((topic, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className={`group relative bg-[#0a0a0a] border border-white/10 p-8 rounded-3xl overflow-hidden hover:bg-[#111] transition-colors ${topic.colSpan || ''}`}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="relative z-10 flex flex-col h-full justify-between">
              <div className="text-white/40 group-hover:text-white transition-colors mb-8">
                {topic.icon}
              </div>
              <div>
                <h4 className="font-serif text-2xl md:text-3xl mb-2">{topic.name}</h4>
                <p className="text-white/50 font-light leading-relaxed group-hover:text-white/70 transition-colors text-sm md:text-base">
                  {topic.desc}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

const projects = [
  {
    title: "LexAI",
    description: "An AI-powered legal research assistant designed to help law students navigate complex case files using RAG and LLMs.",
    tags: ["Next.js", "Python", "OpenAI", "LangChain"],
    github: "#",
    live: "#"
  },
  {
    title: "VerseDrop",
    description: "A decentralized platform for poets to publish, share, and tokenize their literary works as NFTs.",
    tags: ["React", "Solidity", "Web3", "Tailwind"],
    github: "#",
    live: "#"
  },
  {
    title: "Community DAO Builder",
    description: "An open-source toolkit for community leaders to seamlessly spin up governance structures and voting mechanisms.",
    tags: ["TypeScript", "Node.js", "Smart Contracts"],
    github: "#",
    live: "#"
  }
];

function Projects() {
  return (
    <section className="py-32 px-6 md:px-12 max-w-7xl mx-auto border-t border-white/10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-20 text-center"
      >
        <h3 className="font-mono text-sm tracking-widest uppercase text-white/50 mb-4 drop-shadow-sm">Portfolio</h3>
        <h2 className="font-serif text-4xl md:text-6xl">Selected <span className="italic text-white/50">Works.</span></h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="group relative bg-[#0a0a0a] border border-white/10 p-8 rounded-3xl overflow-hidden hover:bg-[#111] transition-colors flex flex-col justify-between min-h-[320px]"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="relative z-10 flex flex-col h-full">
              <div>
                <h4 className="font-serif text-2xl mb-4">{project.title}</h4>
                <p className="text-white/60 font-light leading-relaxed text-sm md:text-base mb-6">
                  {project.description}
                </p>
              </div>
              
              <div className="mt-auto space-y-6">
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, j) => (
                    <span key={j} className="font-mono text-[10px] uppercase tracking-wider px-3 py-1.5 border border-white/20 rounded-full text-white/50 bg-white/5 disabled:opacity-50">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center gap-4 pt-6 border-t border-white/10">
                  <a href={project.github} className="text-white/40 hover:text-white transition-colors" target="_blank" rel="noreferrer" aria-label="GitHub Repository">
                    <Github size={20} strokeWidth={1.5} />
                  </a>
                  <a href={project.live} className="text-white/40 hover:text-white transition-colors" target="_blank" rel="noreferrer" aria-label="Live Demo">
                    <ExternalLink size={20} strokeWidth={1.5} />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="py-20 md:py-32 bg-white text-black text-center relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,#dcdcdc_0%,transparent_70%)] opacity-50"></div>
      
      <div className="relative z-10 max-w-4xl mx-auto px-6">
        <h2 className="font-serif text-5xl md:text-[8vw] leading-[0.8] tracking-tighter mb-8">
          Let's Argue.
        </h2>
        <p className="font-mono text-sm md:text-base uppercase tracking-widest text-black/50 mb-12">
          Or build something. Or write a poem.
        </p>
        
        <div className="flex justify-center gap-6 text-sm font-medium tracking-wide uppercase">
          <a href="#" className="hover:text-black/50 transition-colors border-b border-black pb-1">Twitter</a>
          <a href="#" className="hover:text-black/50 transition-colors border-b border-black pb-1">GitHub</a>
          <a href="#" className="hover:text-black/50 transition-colors border-b border-black pb-1">LinkedIn</a>
          <a href="#" className="hover:text-black/50 transition-colors border-b border-black pb-1">Email</a>
        </div>

        <div className="mt-32 font-mono text-xs text-black/30">
          © {new Date().getFullYear()} Habibi (Adegboye Habeeb Temitope). Vibe coded occasionally.
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-white selection:text-black">
      <Hero />
      <Marquee />
      <About />
      <Interests />
      <Projects />
      <Footer />
    </div>
  );
}
