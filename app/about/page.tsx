'use client';

import { motion } from 'framer-motion';
import { Mail, Shield, Zap, Sparkles, Eye } from 'lucide-react';
import AnimatedBackground from '../../components/AnimatedBackground';
import { useTheme } from '../../components/ThemeProvider';

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
    icon: <Zap className="text-purple-500" size={24} />,
    title: "AI-First Automation",
    desc: "We integrate intelligence into every project to cut down operational overhead and build workflows that run themselves.",
  },
  {
    icon: <Sparkles className="text-cyan-500" size={24} />,
    title: "Design Excellence",
    desc: "We focus on premium, immersive visual details that capture customer attention immediately and build deep digital trust.",
  },
  {
    icon: <Shield className="text-emerald-500" size={24} />,
    title: "Robust Scalability",
    desc: "Every system is custom engineered to grow alongside your customer base, maintaining speed and performance.",
  },
  {
    icon: <Eye className="text-pink-500" size={24} />,
    title: "Client Transparency",
    desc: "A process built entirely on collaboration, frequent updates, and clear timelines. You own your data and code completely.",
  },
];

export default function About() {
  const { theme } = useTheme();
  const founder = team[0];
  const members = team.slice(1);

  return (
    <div className="relative min-h-screen pt-32 pb-20 px-6 md:px-10 overflow-hidden selection:bg-purple-500/30">
      <AnimatedBackground />
      <div
        className={`absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] z-0 pointer-events-none ${
          theme === 'dark' ? 'from-purple-900/10 via-black to-black' : 'from-purple-200/40 via-slate-50 to-slate-50'
        }`}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Hero Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-24"
        >
          <span className={`inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider mb-6 border backdrop-blur-md ${
            theme === 'dark' ? 'bg-white/5 text-purple-400 border-white/10' : 'bg-purple-50 text-purple-600 border-purple-200'
          }`}>
            ABOUT KAVASI
          </span>
          <h1 className={`text-4xl md:text-6xl font-bold tracking-tight mb-6 ${
            theme === 'dark' ? 'text-white' : 'text-slate-900'
          }`}>
            We Build Systems That Grow Your Business
          </h1>
          <p className={`text-lg md:text-xl leading-relaxed font-light ${
            theme === 'dark' ? 'text-white/50' : 'text-slate-600'
          }`}>
            KAVASI is a modern digital agency designed with a focus on AI automation and full-stack development, delivering complete digital ecosystems engineered for scalable growth.
          </p>
        </motion.div>

        {/* Mission Statement */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className={`mb-32 p-8 md:p-16 rounded-[2.5rem] border backdrop-blur-xl relative overflow-hidden ${
            theme === 'dark'
              ? 'bg-gradient-to-br from-white/[0.03] to-white/[0.01] border-white/[0.08]'
              : 'bg-white border-slate-200 shadow-xl'
          }`}
        >
          <div className="grid md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-4">
              <h2 className={`text-3xl md:text-4xl font-bold tracking-tight ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>Our Core Mission</h2>
            </div>
            <div className="md:col-span-8">
              <p className={`text-lg leading-relaxed font-light ${theme === 'dark' ? 'text-white/60' : 'text-slate-600'}`}>
                We believe websites shouldn't just be static digital brochures. They should be active, automated systems that capture leads, process client operations, integrate seamlessly with AI, and systematically scale a company's bottom-line. KAVASI combines modern UI/UX design, custom full-stack software development, and AI logic under one roof.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Core Values */}
        <div className="mb-32">
          <div className="text-center mb-16">
            <h2 className={`text-3xl md:text-5xl font-bold mb-4 tracking-tight ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>Our Core Pillars</h2>
            <p className={`text-lg ${theme === 'dark' ? 'text-white/40' : 'text-slate-600'}`}>The values that direct every system we engineer</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {values.map((val, idx) => (
              <motion.div 
                key={val.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className={`p-8 rounded-3xl border transition-all duration-300 flex gap-6 ${
                  theme === 'dark'
                    ? 'bg-white/[0.02] border-white/[0.05] hover:bg-white/[0.04]'
                    : 'bg-white border-slate-200 hover:border-purple-300 shadow-md'
                }`}
              >
                <div className={`w-12 h-12 rounded-2xl border flex items-center justify-center shrink-0 ${
                  theme === 'dark' ? 'bg-white/5 border-white/10' : 'bg-slate-100 border-slate-200'
                }`}>
                  {val.icon}
                </div>
                <div>
                  <h3 className={`text-xl font-bold mb-3 ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>{val.title}</h3>
                  <p className={`text-sm leading-relaxed ${theme === 'dark' ? 'text-white/50' : 'text-slate-600'}`}>{val.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Leadership Section */}
        <div>
          <div className="text-center mb-20">
            <h2 className={`text-3xl md:text-5xl font-bold mb-4 tracking-tight ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>Our Team</h2>
            <p className={`text-lg ${theme === 'dark' ? 'text-white/40' : 'text-slate-600'}`}>Meet the minds behind KAVASI's digital solutions</p>
          </div>

          {/* Founder */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className={`max-w-4xl mx-auto mb-16 rounded-[2.5rem] p-8 md:p-12 flex flex-col md:flex-row items-center gap-8 md:gap-12 transition-all border ${
              theme === 'dark'
                ? 'bg-white/[0.02] border-white/5 hover:border-white/10'
                : 'bg-white border-slate-200 shadow-xl'
            }`}
          >
            <div className="w-48 md:w-64 shrink-0 rounded-3xl overflow-hidden ring-4 ring-purple-500/20 aspect-[6.5/9]">
              <img src={founder.image} alt={founder.name} className="w-full h-full object-cover" />
            </div>
            <div>
              <h3 className={`text-3xl md:text-4xl font-bold mb-2 ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>{founder.name}</h3>
              <p className="text-purple-500 text-lg font-semibold mb-6 uppercase tracking-wider">{founder.role}</p>
              <p className={`text-base md:text-lg leading-relaxed font-light ${theme === 'dark' ? 'text-white/60' : 'text-slate-600'}`}>{founder.bio}</p>
              <div className="mt-8 flex gap-4">
                <a href="mailto:hello@kavasi.com" className={`w-10 h-10 rounded-full border flex items-center justify-center transition-all ${
                  theme === 'dark' ? 'bg-white/5 border-white/10 text-white/60 hover:bg-purple-500 hover:text-white' : 'bg-slate-100 border-slate-300 text-slate-700 hover:bg-purple-600 hover:text-white'
                }`}>
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
                className={`rounded-[2rem] p-6 flex flex-col sm:flex-row items-center gap-6 transition-all border ${
                  theme === 'dark'
                    ? 'bg-white/[0.01] border-white/5 hover:bg-white/[0.03]'
                    : 'bg-white border-slate-200 shadow-md hover:border-purple-300'
                }`}
              >
                <div className="w-32 shrink-0 rounded-[1.5rem] overflow-hidden ring-2 ring-purple-500/20 aspect-[6.5/9]">
                  <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                </div>
                <div className="text-center sm:text-left">
                  <h3 className={`text-2xl font-bold mb-1 ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>{member.name}</h3>
                  <p className="text-purple-500 text-sm font-semibold mb-3 uppercase tracking-wider">{member.role}</p>
                  <p className={`text-sm leading-relaxed ${theme === 'dark' ? 'text-white/50' : 'text-slate-600'}`}>{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
