// app/page.tsx
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';
import {
  ArrowRight, Code2, Layout, Zap, Phone, Mail, 
  MessageCircle, Menu, X, Globe, ChevronRight
} from 'lucide-react';
import AnimatedBackground from '../components/AnimatedBackground';

export default function Home() {
  return (
    <div className="selection:bg-purple-500/30 overflow-x-hidden font-sans">
      <Hero />
      <Services />
      <Portfolio />
      <Process />
      <Team />
      <Contact />
    </div>
  );
}



function Hero() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 1000], [0, 200]);
  const opacity = useTransform(scrollY, [0, 500], [1, 0]);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      <AnimatedBackground />
      <motion.div style={{ y: y1, opacity }} className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/20 via-black to-black" />
      <motion.div style={{ y: y1, opacity }} className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072')] bg-cover bg-center opacity-[0.03]" />
      
      {/* Decorative Blobs */}
      <motion.div 
        animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute top-1/4 -left-32 w-96 h-96 bg-purple-600/20 rounded-full blur-[100px]"
      />
      <motion.div 
        animate={{ scale: [1, 1.3, 1], rotate: [0, -90, 0] }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-1/4 -right-32 w-96 h-96 bg-cyan-600/20 rounded-full blur-[100px]"
      />

      <div className="max-w-7xl mx-auto px-6 md:px-10 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.span 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="inline-block px-4 py-1.5 rounded-full bg-white/5 text-white/80 text-xs font-semibold tracking-wider mb-8 border border-white/10 backdrop-blur-md"
          >
            AI-POWERED DIGITAL AGENCY
          </motion.span>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter mb-6 leading-[1.1]">
            We Build{" "}
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
              AI-Powered Websites
            </span>
            <br />
            & Automation Systems
          </h1>
          <p className="text-xl md:text-2xl text-white/60 max-w-2xl mx-auto mb-10 font-light">
            We Build Systems That Grow Your Business
          </p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link href="/contact" className="w-full sm:w-auto">
              <button suppressHydrationWarning className="w-full px-8 py-4 bg-white text-black rounded-full font-medium flex items-center justify-center gap-2 group hover:shadow-[0_0_40px_rgba(255,255,255,0.3)] transition-all cursor-pointer">
                Start a Project <ArrowRight size={18} className="group-hover:translate-x-1 transition" />
              </button>
            </Link>
            <Link href="/portfolio" className="w-full sm:w-auto">
              <motion.button 
                suppressHydrationWarning 
                className="w-full px-8 py-4 border border-white/20 rounded-full font-medium hover:bg-white/10 transition-all cursor-pointer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Our Work
              </motion.button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

const services = [
  { icon: <Globe size={32} />, title: "Website Development", desc: "Modern, fast, and scalable websites that convert visitors into customers.", color: "from-blue-500 to-cyan-500" },
  { icon: <Zap size={32} />, title: "AI Automation", desc: "Intelligent workflows and AI agents that streamline your operations.", color: "from-purple-500 to-pink-500" },
  { icon: <Code2 size={32} />, title: "Custom Tech Solutions", desc: "Tailored software and integrations built for your unique needs.", color: "from-emerald-500 to-teal-500" },
  { icon: <Layout size={32} />, title: "UI/UX Design", desc: "Beautiful, user-first interfaces that delight and engage.", color: "from-orange-500 to-red-500" },
];

function Services() {
  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.15 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section id="services" className="py-32 px-6 md:px-10 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">Core Services</h2>
          <p className="text-white/50 text-lg max-w-2xl mx-auto">Comprehensive digital solutions to power your business growth</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, idx) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, scale: 0.9, y: 50 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              whileHover={{ y: -15, scale: 1.05, filter: "brightness(1.2)" }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="group relative p-8 rounded-3xl bg-white/[0.03] backdrop-blur-md border border-white/[0.08] hover:border-white/20 transition-all duration-500 hover:shadow-[0_20px_40px_rgba(0,0,0,0.5)]"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-[0.03] transition-opacity duration-500 rounded-3xl`} />
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.color} p-3 mb-6 text-white shadow-lg`}>
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-white/50 text-sm leading-relaxed">{service.desc}</p>
              <div className="mt-6 flex justify-end opacity-0 group-hover:opacity-100 transition-all duration-500 -translate-x-4 group-hover:translate-x-0">
                <div className={`w-8 h-8 rounded-full bg-gradient-to-br ${service.color} flex items-center justify-center`}>
                  <ChevronRight size={16} className="text-white" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

const portfolioItems = [
  { title: "Shanti Dehdan Trust", category: "NGO Website", image: "/images/portfolioimg/shantidendan.png", tags: ["Non-Profit", "Responsive", "Donation Setup"] },
  { title: "Dynamic Construction", category: "Construction Business", image: "/images/portfolioimg/dyanmic.png", tags: ["CMS", "Project Showcase", "Lead Gen"] },
  { title: "ABC Construction", category: "Construction Business", image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2070", tags: ["Corporate", "Service Showcase", "SEO Optimized"] },
];

function Portfolio() {
  return (
    <section id="work" className="py-32 px-6 md:px-10 bg-white/[0.02]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">Selected Work</h2>
          <p className="text-white/50 text-lg">Real solutions delivering real results</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {portfolioItems.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="group cursor-pointer flex flex-col"
            >
              <div className="relative overflow-hidden rounded-3xl aspect-[16/10] mb-6 shadow-2xl bg-neutral-950 border border-white/5 flex items-center justify-center">
                <motion.div 
                  className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500 z-10"
                />
                <motion.img 
                  src={item.image} 
                  alt={item.title} 
                  className="object-contain w-full h-full transform transition-transform duration-700 ease-out group-hover:scale-102" 
                />
              </div>
              <div className="px-2">
                <p className="text-purple-400 font-semibold text-sm mb-2 uppercase tracking-wider">{item.category}</p>
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-purple-400 transition-colors">{item.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {item.tags.map(tag => (
                    <span key={tag} className="text-[10px] px-3 py-1 rounded-full bg-white/10 backdrop-blur-md text-white/80 border border-white/10 uppercase tracking-wider font-semibold">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

const steps = [
  { num: "01", title: "Discovery", desc: "We dive deep into your goals and challenges." },
  { num: "02", title: "Strategy", desc: "A custom roadmap designed for your success." },
  { num: "03", title: "Build", desc: "Agile development with regular updates." },
  { num: "04", title: "Launch & Scale", desc: "Deploy, monitor, and optimize continuously." },
];

function Process() {
  return (
    <section id="process" className="py-32 px-6 md:px-10">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">How We Work</h2>
          <p className="text-white/50 text-lg">A transparent, collaborative process from idea to launch</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, idx) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, x: -20, filter: "blur(10px)" }}
              whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="relative group"
            >
              <div className="text-6xl font-black text-transparent bg-clip-text bg-gradient-to-br from-white/20 to-white/5 group-hover:from-purple-500/40 group-hover:to-pink-500/10 transition-all duration-500 mb-6">
                {step.num}
              </div>
              <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
              <p className="text-white/50 text-sm leading-relaxed">{step.desc}</p>
              {idx < steps.length - 1 && (
                <div className="hidden lg:block absolute top-10 -right-4 w-8 h-px bg-white/20 group-hover:bg-purple-500/50 transition-colors duration-500 relative overflow-hidden">
                  <motion.div 
                    initial={{ x: "-100%" }}
                    whileInView={{ x: "100%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, repeat: Infinity, delay: idx * 0.15 }}
                    className="absolute inset-0 bg-white/80"
                  />
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

const team = [
  { name: "Siddhartha", role: "Founder & CEO", image: "/images/sid.jpg", bio: "Visionary behind KAVASI's AI-first approach. With a relentless focus on innovation, Siddhartha leads the agency to push the boundaries of digital automation." },
  { name: "Rahul", role: "Technical Lead", image: "/images/rahul.png", bio: "Architect of scalable tech solutions. Rahul specializes in system-level architecture, ensuring every project is flawlessly engineered for maximum performance." },
  { name: "Kashish", role: "UI/UX Designer", image: "/images/kashish.jpeg", bio: "Crafting intuitive user experiences. Her aesthetic eye ensures every interaction feels luxurious, premium, and inherently easy to use across products." },
  { name: "Shivam", role: "Finance & Operations", image: "/images/shivam.jpeg", bio: "Managing agency growth and finances. Shivam keeps operations running like a well-oiled machine, optimizing processes to accelerate everyday efficiency." },
  { name: "Sankalp", role: "Marketing Associate", image: "/images/sankalp.jpeg", bio: "Growth strategies & brand outreach. Sankalp designs data-backed campaigns that significantly amplify our presence across all digital platforms." },
];

function Team() {
  const founder = team[0];
  const members = team.slice(1);

  return (
    <section id="team" className="py-32 px-6 md:px-10 bg-white/[0.02]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">Leadership</h2>
          <p className="text-white/50 text-lg">Experts driving innovation and results</p>
        </motion.div>

        {/* Founder Card */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto mb-16 bg-white/[0.03] border border-white/10 rounded-[2.5rem] p-8 md:p-12 flex flex-col md:flex-row items-center gap-8 md:gap-12 hover:bg-white/[0.05] transition-colors"
        >
          <motion.div 
             initial={{ scale: 0.8, opacity: 0, rotate: -5 }}
             whileInView={{ scale: 1, opacity: 1, rotate: 0 }}
             viewport={{ once: true, margin: "-50px" }}
             transition={{ duration: 0.7, delay: 0.2 }}
             className="w-48 md:w-64 shrink-0 rounded-3xl overflow-hidden ring-4 ring-white/10 shadow-2xl aspect-[6.5/9]"
          >
            <img src={founder.image} alt={founder.name} className="w-full h-full object-cover" />
          </motion.div>
          <motion.div 
            initial={{ x: 30, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            <h3 className="text-3xl md:text-4xl font-bold mb-2">{founder.name}</h3>
            <p className="text-purple-400 text-lg font-semibold mb-6 uppercase tracking-wide">{founder.role}</p>
            <p className="text-white/60 text-base md:text-lg leading-relaxed">{founder.bio}</p>
            <div className="mt-8 h-px bg-gradient-to-r from-purple-500/50 to-transparent w-full max-w-[200px]" />
            <div className="mt-8 flex gap-4">
              <a href="mailto:hello@kavasi.com" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/60 hover:bg-purple-500 hover:text-white hover:border-transparent transition-all group">
                <Mail size={16} className="group-hover:scale-110 transition-transform" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/60 hover:bg-pink-500 hover:text-white hover:border-transparent transition-all group">
                <svg fill="currentColor" viewBox="0 0 24 24" width={16} height={16} className="group-hover:scale-110 transition-transform"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.258.058 1.936.262 2.39.438.563.22.964.483 1.393.91.428.428.69.829.911 1.393.176.452.38 1.13.438 2.388.058 1.265.07 1.645.07 4.848s-.012 3.583-.07 4.848c-.058 1.258-.262 1.936-.438 2.388-.22.563-.483.964-.91 1.393-.429.428-.829.69-1.394.91-.453.176-1.125.38-2.388.438-1.265.059-1.645.07-4.85.07s-3.584-.011-4.85-.07c-1.258-.058-1.936-.262-2.388-.438-.565-.22-.966-.483-1.393-.91-.428-.429-.69-.829-.91-1.393-.176-.453-.38-1.125-.438-2.388-.059-1.265-.07-1.645-.07-4.848s.011-3.583.07-4.848c.058-1.258.262-1.936.438-2.388.22-.563.483-.966.91-1.393.429-.428.829-.69 1.393-.91.453-.176 1.13-.38 2.388-.438 1.266-.058 1.646-.07 4.85-.07zm0-2.163C8.756 0 8.35.013 7.054.072 5.76.13 4.877.334 4.148.618c-.76.297-1.405.688-2.05 1.332C1.455 2.595 1.064 3.24.767 4.001.483 4.73.28 5.612.22 6.906.16 8.204.147 8.61.147 11.838c0 3.23.013 3.635.072 4.933.059 1.294.263 2.176.547 2.905.297.76.688 1.405 1.332 2.05.644.646 1.29.037 2.05 1.334.73.284 1.611.487 2.906.546 1.297.059 1.703.072 4.933.072s3.636-.013 4.934-.072c1.295-.059 2.176-.262 2.905-.546.76-.297 1.405-.688 2.05-1.334.644-.645 1.037-1.29 1.334-2.05.284-.73.487-1.611.545-2.905.059-1.298.072-1.703.072-4.933s-.013-3.634-.072-4.932c-.058-1.295-.261-2.176-.545-2.905-.297-.761-.69-1.406-1.334-2.051-.645-.644-1.29-.037-2.05-1.334C18.172.334 17.29.13 16.03.072 14.734.013 14.328 0 11.097 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zm0 10.162a4 4 0 110-8 4 4 0 010 8zm3.98-9.022a1.44 1.44 0 100-2.88 1.44 1.44 0 000 2.88z"/></svg>
              </a>
            </div>
          </motion.div>
        </motion.div>

        {/* Rest of Team Grid */}
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8 md:gap-12">
          {members.map((member, idx) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.2 + (idx * 0.1) }}
              className="group bg-white/[0.02] border border-white/5 rounded-[2rem] p-6 flex flex-col sm:flex-row items-center gap-6 hover:bg-white/[0.05] hover:border-white/10 transition-all shadow-xl"
            >
              <motion.div 
                 initial={{ scale: 0.8, opacity: 0 }}
                 whileInView={{ scale: 1, opacity: 1 }}
                 viewport={{ once: true, margin: "-50px" }}
                 transition={{ duration: 0.6, delay: 0.4 + (idx * 0.1) }}
                 className="w-32 shrink-0 rounded-[1.5rem] overflow-hidden ring-2 ring-white/10 group-hover:ring-purple-500/50 transition-colors aspect-[6.5/9]"
              >
                <img src={member.image} alt={member.name} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" />
              </motion.div>
              <motion.div
                 initial={{ x: 20, opacity: 0 }}
                 whileInView={{ x: 0, opacity: 1 }}
                 viewport={{ once: true, margin: "-50px" }}
                 transition={{ duration: 0.6, delay: 0.5 + (idx * 0.1) }}
                 className="text-center sm:text-left"
              >
                <h3 className="text-2xl font-bold mb-1 group-hover:text-purple-400 transition-colors">{member.name}</h3>
                <p className="text-purple-400 text-sm font-semibold mb-3 uppercase tracking-wider">{member.role}</p>
                <p className="text-white/50 text-sm leading-relaxed mb-4">{member.bio}</p>
                <div className="flex gap-3 justify-center sm:justify-start">
                  <a href="mailto:hello@kavasi.com" className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/50 hover:bg-purple-500 hover:text-white transition-all">
                    <Mail size={14} />
                  </a>
                  <a href="#" className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/50 hover:bg-pink-500 hover:text-white transition-all">
                    <svg fill="currentColor" viewBox="0 0 24 24" width={14} height={14}><path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.258.058 1.936.262 2.39.438.563.22.964.483 1.393.91.428.428.69.829.911 1.393.176.452.38 1.13.438 2.388.058 1.265.07 1.645.07 4.848s-.012 3.583-.07 4.848c-.058 1.258-.262 1.936-.438 2.388-.22.563-.483.964-.91 1.393-.429.428-.829.69-1.394.91-.453.176-1.125.38-2.388.438-1.265.059-1.645.07-4.85.07s-3.584-.011-4.85-.07c-1.258-.058-1.936-.262-2.388-.438-.565-.22-.966-.483-1.393-.91-.428-.429-.69-.829-.91-1.393-.176-.453-.38-1.125-.438-2.388-.059-1.265-.07-1.645-.07-4.848s.011-3.583.07-4.848c.058-1.258.262-1.936.438-2.388.22-.563.483-.966.91-1.393.429-.428.829-.69 1.393-.91.453-.176 1.13-.38 2.388-.438 1.266-.058 1.646-.07 4.85-.07zm0-2.163C8.756 0 8.35.013 7.054.072 5.76.13 4.877.334 4.148.618c-.76.297-1.405.688-2.05 1.332C1.455 2.595 1.064 3.24.767 4.001.483 4.73.28 5.612.22 6.906.16 8.204.147 8.61.147 11.838c0 3.23.013 3.635.072 4.933.059 1.294.263 2.176.547 2.905.297.76.688 1.405 1.332 2.05.644.646 1.29.037 2.05 1.334.73.284 1.611.487 2.906.546 1.297.059 1.703.072 4.933.072s3.636-.013 4.934-.072c1.295-.059 2.176-.262 2.905-.546.76-.297 1.405-.688 2.05-1.334.644-.645 1.037-1.29 1.334-2.05.284-.73.487-1.611.545-2.905.059-1.298.072-1.703.072-4.933s-.013-3.634-.072-4.932c-.058-1.295-.261-2.176-.545-2.905-.297-.761-.69-1.406-1.334-2.051-.645-.644-1.29-.037-2.05-1.334C18.172.334 17.29.13 16.03.072 14.734.013 14.328 0 11.097 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zm0 10.162a4 4 0 110-8 4 4 0 010 8zm3.98-9.022a1.44 1.44 0 100-2.88 1.44 1.44 0 000 2.88z"/></svg>
                  </a>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="py-32 px-6 md:px-10 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-900/10 to-black z-0 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">Let's Build Something Great</h2>
          <p className="text-white/50 text-lg max-w-2xl mx-auto">
            Development starts from <span className="text-white font-semibold">₹15,000</span>, with an additional <span className="text-white font-semibold">₹5,000/year</span> for hosting & maintenance. Final pricing depends on features and complexity.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto bg-white/[0.03] backdrop-blur-xl rounded-[2.5rem] border border-white/10 p-8 md:p-16 shadow-[0_0_100px_rgba(0,0,0,0.5)]"
        >
          <div className="grid lg:grid-cols-2 gap-16">
            <div className="space-y-10">
              <div>
                <h3 className="text-3xl font-bold mb-4">Get in touch</h3>
                <p className="text-white/40">Ready to transform your business? Drop us a line and we'll get back to you within 24 hours.</p>
              </div>

              <div className="space-y-8">
                <div className="flex items-center gap-5 group">
                  <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center group-hover:bg-purple-500 transition-colors duration-500 border border-white/10">
                    <Phone size={24} className="text-white/60 group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <p className="text-white/40 text-sm font-medium mb-1 tracking-wide uppercase">Call us directly</p>
                    <a href="tel:+916394974200" className="text-xl font-bold hover:text-purple-400 transition-colors">+91 63949 74200</a>
                  </div>
                </div>
                
                <div className="flex items-center gap-5 group">
                  <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center group-hover:bg-pink-500 transition-colors duration-500 border border-white/10">
                    <Mail size={24} className="text-white/60 group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <p className="text-white/40 text-sm font-medium mb-1 tracking-wide uppercase">Email address</p>
                    <a href="mailto:hello@kavasi.com" className="text-xl font-bold hover:text-pink-400 transition-colors">hello@kavasi.com</a>
                  </div>
                </div>
                
                <div className="flex items-center gap-5 group">
                  <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center group-hover:bg-green-500 transition-colors duration-500 border border-white/10">
                    <MessageCircle size={24} className="text-white/60 group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <p className="text-white/40 text-sm font-medium mb-1 tracking-wide uppercase">WhatsApp</p>
                    <a href="https://wa.me/916394974200" target="_blank" className="text-xl font-bold hover:text-green-400 transition-colors flex items-center gap-2">
                      Start a chat <ArrowRight size={16} />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <form className="space-y-5">
              <input suppressHydrationWarning
                type="text" 
                placeholder="Your name" 
                className="w-full px-6 py-4 bg-black/40 border border-white/10 rounded-2xl focus:outline-none focus:border-purple-500 focus:bg-white/5 transition-all text-white placeholder:text-white/30" 
              />
              <input suppressHydrationWarning
                type="email" 
                placeholder="Email address" 
                className="w-full px-6 py-4 bg-black/40 border border-white/10 rounded-2xl focus:outline-none focus:border-purple-500 focus:bg-white/5 transition-all text-white placeholder:text-white/30" 
              />
              <textarea suppressHydrationWarning
                rows={4} 
                placeholder="Tell us about your project..." 
                className="w-full px-6 py-4 bg-black/40 border border-white/10 rounded-2xl focus:outline-none focus:border-purple-500 focus:bg-white/5 transition-all text-white placeholder:text-white/30 resize-none"
              ></textarea>
              <button suppressHydrationWarning
                type="button"
                className="w-full py-4 bg-white text-black rounded-2xl font-bold flex items-center justify-center gap-2 hover:gap-4 transition-all hover:bg-purple-100 hover:shadow-[0_0_30px_rgba(255,255,255,0.2)]"
              >
                Send Message <ArrowRight size={20} />
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
