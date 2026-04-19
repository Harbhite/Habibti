import { AnimatePresence, motion, useScroll, useTransform } from 'motion/react';
import { useEffect, useRef, useState } from 'react';
import { 
  BrainCircuit, 
  Globe2, 
  MessageSquareQuote, 
  BookOpen, 
  Cpu, 
  Bitcoin,
  Flame,
  Github,
  ExternalLink,
  X,
  Terminal,
  Layout,
  Database,
  Users,
  Quote,
  ChevronLeft,
  ChevronRight
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

const skillCategories = [
  {
    title: "Programming",
    icon: <Terminal size={24} />,
    skills: ["TypeScript", "JavaScript", "Python", "Solidity", "C++"]
  },
  {
    title: "Frameworks",
    icon: <Layout size={24} />,
    skills: ["React", "Next.js", "Node.js", "FastAPI", "Tailwind CSS"]
  },
  {
    title: "Technologies",
    icon: <Database size={24} />,
    skills: ["Git", "PostgreSQL", "MongoDB", "Hardhat", "Docker"]
  },
  {
    title: "Soft Skills",
    icon: <Users size={24} />,
    skills: ["Leadership", "Public Speaking", "Creative Writing", "Research", "Teamwork"]
  }
];

function Skills() {
  return (
    <section className="py-32 px-6 md:px-12 max-w-7xl mx-auto border-t border-white/10 overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-20 text-center"
      >
        <h3 className="font-mono text-sm tracking-widest uppercase text-white/50 mb-4 drop-shadow-sm">Expertise</h3>
        <h2 className="font-serif text-4xl md:text-6xl">Proficiencies & <span className="italic text-white/50">Powers.</span></h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {skillCategories.map((category, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className="group"
          >
            <div className="flex items-center gap-3 mb-6 text-white/40 group-hover:text-white transition-colors">
              <div className="p-2 border border-white/10 rounded-lg bg-white/5 group-hover:bg-white group-hover:text-black transition-all">
                {category.icon}
              </div>
              <h4 className="font-mono text-xs uppercase tracking-[0.2em]">{category.title}</h4>
            </div>
            
            <ul className="space-y-4">
              {category.skills.map((skill, j) => (
                <motion.li 
                  key={j}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: (i * 0.1) + (j * 0.05) }}
                  className="flex items-center gap-3 text-white/60 font-light hover:text-white transition-colors decoration-white/20 hover:decoration-white underline underline-offset-4 decoration-1"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-white/20"></span>
                  {skill}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

const fragments = [
  "Logic is the scaffold; language is the breath.",
  "In the quiet of the compiler, I find the rhythm of a stanza.",
  "The law is a code we inherit; the future is the one we write.",
  "Between 0 and 1, there is infinitely more than just void."
];

function Fragments() {
  return (
    <section className="py-32 bg-zinc-900/30 border-y border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="md:w-1/3">
            <h3 className="font-mono text-sm tracking-widest uppercase text-white/30 mb-4">Fragments</h3>
            <h2 className="font-serif text-4xl md:text-5xl italic leading-tight">Poetry in <br/> the Machine.</h2>
          </div>
          <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-8">
            {fragments.map((fragment, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="relative p-6 border-l border-white/10"
              >
                <Quote size={16} className="text-white/20 mb-4" />
                <p className="font-serif text-lg md:text-xl text-white/60 leading-relaxed italic">
                  {fragment}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

const projects = [
  {
    title: "LexAI",
    description: "An AI-powered legal research assistant designed to help law students navigate complex case files using RAG and LLMs.",
    detailedDescription: "LexAI is a comprehensive suite aiming to decentralize legal knowledge. By utilizing Retrieval-Augmented Generation (RAG) atop massive corpuses of case law, it allows law students and practitioners to conversationalize with historic judgements. Built with Next.js, Python FastAPI, and LangChain, it solves the immediate pain-point of endless manual cross-referencing.",
    images: [
      "https://picsum.photos/seed/lawlibrary/800/500?blur=1",
      "https://picsum.photos/seed/courtroom/800/500?blur=1",
      "https://picsum.photos/seed/statute/800/500?blur=1"
    ],
    tags: ["Next.js", "Python", "OpenAI", "LangChain"],
    github: "https://github.com/harbhite",
    live: "#"
  },
  {
    title: "VerseDrop",
    description: "A decentralized platform for poets to publish, share, and tokenize their literary works as NFTs.",
    detailedDescription: "In an era of fleeting attention, VerseDrop provides digital permanence to poetry. Writers can mint their stanzas as distinct non-fungible tokens, creating a verified provenance of creative thought. The platform integrates seamlessly with IPFS for storage and uses optimized Solidity contracts to keep minting gas costs incredibly low for emerging artists.",
    images: [
      "https://picsum.photos/seed/poetrybook/800/500?blur=1",
      "https://picsum.photos/seed/scroll/800/500?blur=1",
      "https://picsum.photos/seed/quill/800/500?blur=1"
    ],
    tags: ["React", "Solidity", "Web3", "Tailwind"],
    github: "https://github.com/harbhite",
    live: "#"
  },
  {
    title: "Community DAO Builder",
    description: "An open-source toolkit for community leaders to seamlessly spin up governance structures and voting mechanisms.",
    detailedDescription: "A fully open-source TypeScript and Node.js toolkit designed to make Decentralized Autonomous Organizations accessible to non-technical community leaders. It abstracts the complexity of deploying governor contracts and provides a plug-and-play frontend for proposing, debating, and executing on-chain proposals transparently.",
    images: [
      "https://picsum.photos/seed/dao/800/500?blur=1",
      "https://picsum.photos/seed/blockchain/800/500?blur=1",
      "https://picsum.photos/seed/network/800/500?blur=1"
    ],
    tags: ["TypeScript", "Node.js", "Smart Contracts"],
    github: "https://github.com/harbhite",
    live: "#"
  }
];

function Projects() {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
      setCurrentImageIndex(0);
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [selectedProject]);

  const nextImage = () => {
    if (selectedProject) {
      setCurrentImageIndex((prev) => (prev + 1) % selectedProject.images.length);
    }
  };

  const prevImage = () => {
    if (selectedProject) {
      setCurrentImageIndex((prev) => (prev - 1 + selectedProject.images.length) % selectedProject.images.length);
    }
  };

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
            onClick={() => setSelectedProject(project)}
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="group relative bg-[#0a0a0a] border border-white/10 p-8 rounded-3xl overflow-hidden hover:bg-[#111] cursor-pointer transition-colors flex flex-col justify-between min-h-[320px]"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="relative z-10 flex flex-col h-full pointer-events-none">
              <div>
                <h4 className="font-serif text-2xl mb-4 text-white group-hover:text-white/90">{project.title}</h4>
                <p className="text-white/60 font-light leading-relaxed text-sm md:text-base mb-6">
                  {project.description}
                </p>
              </div>
              
              <div className="mt-auto space-y-6">
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, j) => (
                    <span key={j} className="font-mono text-[10px] uppercase tracking-wider px-3 py-1.5 border border-white/20 rounded-full text-white/50 bg-white/5">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center gap-4 pt-6 border-t border-white/10 pointer-events-auto" onClick={(e) => e.stopPropagation()}>
                  <a href={project.github} className="text-white/40 hover:text-white transition-colors p-2 -ml-2" target="_blank" rel="noreferrer" aria-label="GitHub Repository">
                    <Github size={20} strokeWidth={1.5} />
                  </a>
                  <a href={project.live} className="text-white/40 hover:text-white transition-colors p-2" target="_blank" rel="noreferrer" aria-label="Live Demo">
                    <ExternalLink size={20} strokeWidth={1.5} />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6 bg-black/80 backdrop-blur-sm"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-[#0a0a0a] border border-white/10 rounded-3xl shadow-2xl"
            >
              <button 
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 p-2 bg-black/50 hover:bg-white/10 backdrop-blur-md border border-white/10 rounded-full transition-colors z-20 text-white/70 hover:text-white cursor-pointer"
              >
                <X size={20} />
              </button>
              
              <div className="relative h-64 sm:h-96 w-full overflow-hidden border-b border-white/10 group/slider">
                <AnimatePresence mode="wait">
                  <motion.img 
                    key={currentImageIndex}
                    src={selectedProject.images[currentImageIndex]} 
                    alt={`${selectedProject.title} screenshot ${currentImageIndex + 1}`} 
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </AnimatePresence>
                
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/20 to-transparent"></div>
                
                {selectedProject.images.length > 1 && (
                  <>
                    <button 
                      onClick={prevImage}
                      className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-black/50 hover:bg-black/80 text-white rounded-full backdrop-blur-md border border-white/10 opacity-0 group-hover/slider:opacity-100 transition-opacity"
                    >
                      <ChevronLeft size={20} />
                    </button>
                    <button 
                      onClick={nextImage}
                      className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-black/50 hover:bg-black/80 text-white rounded-full backdrop-blur-md border border-white/10 opacity-0 group-hover/slider:opacity-100 transition-opacity"
                    >
                      <ChevronRight size={20} />
                    </button>
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                      {selectedProject.images.map((_, i) => (
                        <div 
                          key={i} 
                          className={`w-1.5 h-1.5 rounded-full transition-all ${i === currentImageIndex ? 'bg-white w-4' : 'bg-white/30'}`}
                        />
                      ))}
                    </div>
                  </>
                )}
                
                <div className="absolute top-6 left-6 pr-12">
                  <h3 className="font-serif text-4xl sm:text-5xl mb-2 drop-shadow-lg">{selectedProject.title}</h3>
                </div>
              </div>
              
              <div className="p-6 md:p-10">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                  <div className="lg:col-span-2">
                    <h4 className="font-mono text-xs tracking-widest uppercase text-white/30 mb-6 border-b border-white/5 pb-4">
                      Context
                    </h4>
                    <p className="text-white/80 font-light leading-relaxed text-lg sm:text-xl">
                      {selectedProject.detailedDescription}
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-mono text-xs tracking-widest uppercase text-white/30 mb-6 border-b border-white/5 pb-4">
                      Technologies
                    </h4>
                    <div className="flex flex-wrap gap-2 mb-10">
                      {selectedProject.tags.map((tag, j) => (
                        <span key={j} className="font-mono text-[10px] uppercase tracking-wider px-3 py-1.5 border border-white/20 rounded-full text-white/80 bg-white/5">
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    <h4 className="font-mono text-xs tracking-widest uppercase text-white/30 mb-6 border-b border-white/5 pb-4">
                      Links
                    </h4>
                    <div className="flex flex-col gap-3">
                      <a href={selectedProject.live} className="flex items-center justify-between px-6 py-3 bg-white text-black hover:bg-white/90 rounded-xl transition-colors font-medium text-sm" target="_blank" rel="noreferrer">
                        View Live Demo <ExternalLink size={16} />
                      </a>
                      <a href={selectedProject.github} className="flex items-center justify-between px-6 py-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl text-white transition-colors font-medium text-sm" target="_blank" rel="noreferrer">
                        Source Code <Github size={16} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
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
          <a href="https://github.com/harbhite" target="_blank" rel="noreferrer" className="hover:text-black/50 transition-colors border-b border-black pb-1">GitHub</a>
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
      <Skills />
      <Fragments />
      <Projects />
      <Footer />
    </div>
  );
}
