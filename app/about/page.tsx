'use client';

import { motion } from 'framer-motion';
import { Mail, Shield, Zap, Sparkles, Eye } from 'lucide-react';
import AnimatedBackground from '../../components/AnimatedBackground';

const team = [
  { 
    name: "Siddhartha", 
    role: "Founder & CEO", 
    image: "/images/sid.jpg", 
    bio: "Visionary behind KAVASI's AI-first approach. With a relentless focus on innovation, Siddhartha leads the agency to push the boundaries of digital automation." 
  },
  { 
    name: "Rahul", 
    role: "Technical Lead", 
    image: "/images/rahul.png", 
    bio: "Architect of scalable tech solutions. Rahul specializes in system-level architecture, ensuring every project is flawlessly engineered for maximum performance." 
  },
  { 
    name: "Kashish", 
    role: "UI/UX Designer", 
    image: "/images/kashish.jpeg", 
    bio: "Crafting intuitive user experiences. Her aesthetic eye ensures every interaction feels luxurious, premium, and inherently easy to use across products." 
  },
  { 
    name: "Shivam", 
    role: "Finance & Operations", 
    image: "/images/shivam.jpeg", 
    bio: "Managing agency growth and finances. Shivam keeps operations running like a well-oiled machine, optimizing processes to accelerate everyday efficiency." 
  },
  { 
    name: "Sankalp", 
    role: "Marketing Associate", 
    image: "/images/sankalp.jpeg", 
    bio: "Growth strategies & brand outreach. Sankalp designs data-backed campaigns that significantly amplify our presence across all digital platforms." 
  },
];

const values = [
  {
    icon: <Zap className="text-purple-400" size={24} />,
    title: "AI-First Automation",
    desc: "We integrate intelligence into every project to cut down operational overhead and build workflows that run themselves.",
  },
  {
    icon: <Sparkles className="text-cyan-400" size={24} />,
    title: "Design Excellence",
    desc: "We focus on premium, immersive visual details that capture customer attention immediately and build deep digital trust.",
  },
  {
    icon: <Shield className="text-emerald-400" size={24} />,
    title: "Robust Scalability",
    desc: "Every system is custom engineered to grow alongside your customer base, maintaining speed and performance.",
  },
  {
    icon: <Eye className="text-pink-400" size={24} />,
    title: "Client Transparency",
    desc: "A process built entirely on collaboration, frequent updates, and clear timelines. You own your data and code completely.",
  },
];

export default function About() {
  const founder = team[0];
  const members = team.slice(1);

  return (
    <div className="relative min-h-screen pt-32 pb-20 px-6 md:px-10 overflow-hidden bg-black selection:bg-purple-500/30">
      <AnimatedBackground />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/10 via-black to-black z-0 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Hero Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-24"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-white/5 text-purple-400 text-xs font-semibold tracking-wider mb-6 border border-white/10 backdrop-blur-md">
            ABOUT KAVASI
          </span>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 bg-gradient-to-r from-white via-white to-white/60 bg-clip-text text-transparent">
            We Build Systems That Grow Your Business
          </h1>
          <p className="text-lg md:text-xl text-white/50 leading-relaxed font-light">
            KAVASI is a modern digital agency designed with a focus on AI automation and full-stack development, delivering complete digital ecosystems engineered for scalable growth.
          </p>
        </motion.div>

        {/* Mission Statement */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-32 p-8 md:p-16 rounded-[2.5rem] bg-gradient-to-br from-white/[0.03] to-white/[0.01] border border-white/[0.08] backdrop-blur-xl relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-[120px] pointer-events-none" />
          <div className="grid md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-4">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Our Core Mission</h2>
            </div>
            <div className="md:col-span-8">
              <p className="text-white/60 text-lg leading-relaxed font-light">
                We believe websites shouldn't just be static digital brochures. They should be active, automated systems that capture leads, process client operations, integrate seamlessly with AI, and systematically scale a company's bottom-line. KAVASI combines modern UI/UX design, custom full-stack software development, and AI logic under one roof.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Core Values */}
        <div className="mb-32">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">Our Core Pillars</h2>
            <p className="text-white/40 text-lg">The values that direct every system we engineer</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {values.map((val, idx) => (
              <motion.div 
                key={val.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="p-8 rounded-3xl bg-white/[0.02] border border-white/[0.05] hover:border-white/10 hover:bg-white/[0.04] transition-all duration-300 flex gap-6"
              >
                <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                  {val.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3 text-white">{val.title}</h3>
                  <p className="text-white/50 text-sm leading-relaxed">{val.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Leadership Section */}
        <div>
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">Our Team</h2>
            <p className="text-white/40 text-lg">Meet the minds behind KAVASI's digital solutions</p>
          </div>

          {/* Founder */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto mb-16 bg-white/[0.02] border border-white/5 hover:border-white/10 rounded-[2.5rem] p-8 md:p-12 flex flex-col md:flex-row items-center gap-8 md:gap-12 transition-all"
          >
            <div className="w-48 md:w-64 shrink-0 rounded-3xl overflow-hidden ring-4 ring-white/10 shadow-2xl aspect-[6.5/9]">
              <img src={founder.image} alt={founder.name} className="w-full h-full object-cover" />
            </div>
            <div>
              <h3 className="text-3xl md:text-4xl font-bold mb-2">{founder.name}</h3>
              <p className="text-purple-400 text-lg font-semibold mb-6 uppercase tracking-wider">{founder.role}</p>
              <p className="text-white/60 text-base md:text-lg leading-relaxed font-light">{founder.bio}</p>
              <div className="mt-8 flex gap-4">
                <a href="mailto:hello@kavasi.com" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/60 hover:bg-purple-500 hover:text-white hover:border-transparent transition-all">
                  <Mail size={16} />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Rest of Team Grid */}
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8 md:gap-12">
            {members.map((member, idx) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="bg-white/[0.01] border border-white/5 rounded-[2rem] p-6 flex flex-col sm:flex-row items-center gap-6 hover:bg-white/[0.03] hover:border-white/10 transition-all shadow-xl"
              >
                <div className="w-32 shrink-0 rounded-[1.5rem] overflow-hidden ring-2 ring-white/10 aspect-[6.5/9]">
                  <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                </div>
                <div className="text-center sm:text-left">
                  <h3 className="text-2xl font-bold mb-1 text-white">{member.name}</h3>
                  <p className="text-purple-400 text-sm font-semibold mb-3 uppercase tracking-wider">{member.role}</p>
                  <p className="text-white/50 text-sm leading-relaxed">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
