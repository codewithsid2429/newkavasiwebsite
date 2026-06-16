'use client';

import { motion } from 'framer-motion';
import { 
  Globe, Zap, Code2, Layout, Check, ArrowRight,
  Database, Bot, Terminal, PenTool
} from 'lucide-react';
import Link from 'next/link';
import AnimatedBackground from '../../components/AnimatedBackground';

const detailedServices = [
  {
    icon: <Globe size={28} className="text-blue-400" />,
    title: "Website Development",
    subtitle: "Speed, SEO, and Premium Aesthetics",
    desc: "We build modern, blazing-fast, responsive websites designed to convert visitors into loyal customers. Using bleeding-edge stacks, we ensure search engine discoverability and top-tier responsiveness.",
    tech: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Headless CMS"],
    color: "from-blue-500/20 to-cyan-500/20",
    border: "group-hover:border-blue-500/30"
  },
  {
    icon: <Zap size={28} className="text-purple-400" />,
    title: "AI Automation",
    subtitle: "Automate Workflows and Save Hours",
    desc: "Free your team from repetitive tasks by letting intelligent AI agents do the heavy lifting. We construct tailored AI assistants, LLM wrappers, automated lead generation pipelines, and integrations.",
    tech: ["OpenAI API", "LangChain", "Make.com", "Zapier", "Vector DBs"],
    color: "from-purple-500/20 to-pink-500/20",
    border: "group-hover:border-purple-500/30"
  },
  {
    icon: <Code2 size={28} className="text-emerald-400" />,
    title: "Custom Tech Solutions",
    subtitle: "Robust Systems for Complex Problems",
    desc: "Need something tailored to your business model? We build backend architectures, bespoke databases, CRM systems, custom API endpoints, and cloud dashboards that scale with your usage.",
    tech: ["Node.js", "Python", "PostgreSQL", "AWS", "RESTful APIs"],
    color: "from-emerald-500/20 to-teal-500/20",
    border: "group-hover:border-emerald-500/30"
  },
  {
    icon: <Layout size={28} className="text-orange-400" />,
    title: "UI/UX Design",
    subtitle: "Stunning Visually, Intuitive Experientially",
    desc: "A premium product needs premium design. We model high-fidelity wireframes, interactive layouts, fluid micro-interactions, and visual systems that feel luxurious and reduce user friction.",
    tech: ["Figma", "Wireframing", "Prototyping", "Design Systems", "Motion UI"],
    color: "from-orange-500/20 to-red-500/20",
    border: "group-hover:border-orange-500/30"
  }
];



export default function Services() {
  return (
    <div className="relative min-h-screen pt-32 pb-20 px-6 md:px-10 overflow-hidden bg-black selection:bg-purple-500/30">
      <AnimatedBackground />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/10 via-black to-black z-0 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Hero */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-24"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-white/5 text-purple-400 text-xs font-semibold tracking-wider mb-6 border border-white/10 backdrop-blur-md">
            WHAT WE OFFER
          </span>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 bg-gradient-to-r from-white via-white to-white/60 bg-clip-text text-transparent">
            Our Core Services
          </h1>
          <p className="text-lg md:text-xl text-white/50 leading-relaxed font-light">
            We build state-of-the-art web applications, implement automated AI workflows, and design stunning digital experiences to expand your brand's operations.
          </p>
        </motion.div>

        {/* Detailed Service Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-32">
          {detailedServices.map((service, idx) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className={`group relative p-8 md:p-10 rounded-[2rem] bg-white/[0.02] border border-white/[0.06] hover:bg-white/[0.04] transition-all duration-500 flex flex-col justify-between ${service.border}`}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-[2rem]`} />
              <div>
                <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold mb-1 text-white">{service.title}</h3>
                <p className="text-purple-400 text-sm font-medium mb-4">{service.subtitle}</p>
                <p className="text-white/50 text-sm leading-relaxed mb-6 font-light">{service.desc}</p>
              </div>

              <div>
                <div className="flex flex-wrap gap-2 mb-6">
                  {service.tech.map(tag => (
                    <span key={tag} className="text-[10px] px-2.5 py-1 rounded-full bg-white/5 border border-white/5 text-white/60 uppercase tracking-wider font-semibold">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Pricing Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto mb-10 p-8 md:p-16 rounded-[2.5rem] bg-gradient-to-br from-white/[0.03] to-white/[0.01] border border-white/[0.08] backdrop-blur-xl relative overflow-hidden text-center"
        >
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/10 via-transparent to-transparent pointer-events-none" />
          <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">Project Pricing</h2>
          <p className="text-white/50 text-base md:text-lg max-w-2xl mx-auto mb-8 font-light leading-relaxed">
            Our custom development solutions start from <span className="text-purple-400 font-semibold text-lg md:text-xl">₹15,000</span>. 
            Final investment depends entirely on the features, integration details, and system complexity. 
            For hosting & ongoing updates, standard maintenance packages start at <span className="text-cyan-400 font-semibold">₹5,000/year</span>.
          </p>
          <Link href="/contact" className="inline-block">
            <button className="px-8 py-4 bg-white text-black hover:bg-purple-100 rounded-full font-bold flex items-center justify-center gap-2 hover:gap-3 transition-all cursor-pointer shadow-[0_0_30px_rgba(255,255,255,0.15)]">
              Request a Custom Quote <ArrowRight size={18} />
            </button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
