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
import { useTheme } from '../components/ThemeProvider';

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
  const { theme } = useTheme();

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      <AnimatedBackground />
      <motion.div
        style={{ y: y1, opacity }}
        className={`absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] ${
          theme === 'dark'
            ? 'from-purple-900/20 via-black to-black'
            : 'from-purple-200/40 via-slate-50 to-slate-50'
        }`}
      />
      <motion.div
        style={{ y: y1, opacity }}
        className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072')] bg-cover bg-center opacity-[0.03]"
      />

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
            className={`inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider mb-8 border backdrop-blur-md ${
              theme === 'dark'
                ? 'bg-white/5 text-white/80 border-white/10'
                : 'bg-purple-50 text-purple-900 border-purple-200 shadow-sm'
            }`}
          >
            AI-POWERED DIGITAL AGENCY
          </motion.span>
          <h1
            className={`text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter mb-6 leading-[1.1] ${
              theme === 'dark' ? 'text-white' : 'text-slate-900'
            }`}
          >
            We Build{" "}
            <span className="bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 bg-clip-text text-transparent">
              AI-Powered Websites
            </span>
            <br />
            & Automation Systems
          </h1>
          <p
            className={`text-xl md:text-2xl max-w-2xl mx-auto mb-10 font-light ${
              theme === 'dark' ? 'text-white/60' : 'text-slate-600'
            }`}
          >
            We Build Systems That Grow Your Business
          </p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link href="/contact" className="w-full sm:w-auto">
              <button
                suppressHydrationWarning
                className={`w-full px-8 py-4 rounded-full font-medium flex items-center justify-center gap-2 group transition-all cursor-pointer shadow-lg ${
                  theme === 'dark'
                    ? 'bg-white text-black hover:shadow-[0_0_40px_rgba(255,255,255,0.3)]'
                    : 'bg-slate-900 text-white hover:bg-purple-600 hover:shadow-[0_0_30px_rgba(168,85,247,0.3)]'
                }`}
              >
                Start a Project <ArrowRight size={18} className="group-hover:translate-x-1 transition" />
              </button>
            </Link>
            <Link href="/portfolio" className="w-full sm:w-auto">
              <motion.button
                suppressHydrationWarning
                className={`w-full px-8 py-4 border rounded-full font-medium transition-all cursor-pointer ${
                  theme === 'dark'
                    ? 'border-white/20 text-white hover:bg-white/10'
                    : 'border-slate-300 text-slate-800 hover:bg-slate-100'
                }`}
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
  const { theme } = useTheme();

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
          <h2
            className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight ${
              theme === 'dark' ? 'text-white' : 'text-slate-900'
            }`}
          >
            Core Services
          </h2>
          <p
            className={`text-lg max-w-2xl mx-auto ${
              theme === 'dark' ? 'text-white/50' : 'text-slate-600'
            }`}
          >
            Comprehensive digital solutions to power your business growth
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, idx) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, scale: 0.9, y: 50 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              whileHover={{ y: -15, scale: 1.03 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className={`group relative p-8 rounded-3xl transition-all duration-500 border backdrop-blur-md ${
                theme === 'dark'
                  ? 'bg-white/[0.03] border-white/[0.08] hover:border-white/20 hover:shadow-[0_20px_40px_rgba(0,0,0,0.5)]'
                  : 'bg-white border-slate-200/80 hover:border-purple-300 hover:shadow-[0_20px_40px_rgba(0,0,0,0.06)]'
              }`}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-[0.05] transition-opacity duration-500 rounded-3xl`} />
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.color} p-3 mb-6 text-white shadow-lg`}>
                {service.icon}
              </div>
              <h3
                className={`text-xl font-semibold mb-3 ${
                  theme === 'dark' ? 'text-white' : 'text-slate-900'
                }`}
              >
                {service.title}
              </h3>
              <p
                className={`text-sm leading-relaxed ${
                  theme === 'dark' ? 'text-white/50' : 'text-slate-600'
                }`}
              >
                {service.desc}
              </p>
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
  const { theme } = useTheme();

  return (
    <section
      id="work"
      className={`py-32 px-6 md:px-10 transition-colors duration-300 ${
        theme === 'dark' ? 'bg-white/[0.02]' : 'bg-slate-100/60'
      }`}
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2
            className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight ${
              theme === 'dark' ? 'text-white' : 'text-slate-900'
            }`}
          >
            Selected Work
          </h2>
          <p
            className={`text-lg ${
              theme === 'dark' ? 'text-white/50' : 'text-slate-600'
            }`}
          >
            Real solutions delivering real results
          </p>
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
              <div
                className={`relative overflow-hidden rounded-3xl aspect-[16/10] mb-6 shadow-xl flex items-center justify-center border ${
                  theme === 'dark'
                    ? 'bg-neutral-950 border-white/10'
                    : 'bg-white border-slate-200'
                }`}
              >
                <motion.div
                  className={`absolute inset-0 transition-colors duration-500 z-10 ${
                    theme === 'dark' ? 'bg-black/10 group-hover:bg-transparent' : 'bg-slate-900/5 group-hover:bg-transparent'
                  }`}
                />
                <motion.img
                  src={item.image}
                  alt={item.title}
                  className="object-contain w-full h-full transform transition-transform duration-700 ease-out group-hover:scale-105"
                />
              </div>
              <div className="px-2">
                <p className="text-purple-500 font-semibold text-sm mb-2 uppercase tracking-wider">{item.category}</p>
                <h3
                  className={`text-2xl font-bold mb-4 group-hover:text-purple-500 transition-colors ${
                    theme === 'dark' ? 'text-white' : 'text-slate-900'
                  }`}
                >
                  {item.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {item.tags.map(tag => (
                    <span
                      key={tag}
                      className={`text-[10px] px-3 py-1 rounded-full uppercase tracking-wider font-semibold border ${
                        theme === 'dark'
                          ? 'bg-white/10 text-white/80 border-white/10'
                          : 'bg-slate-200/70 text-slate-700 border-slate-300'
                      }`}
                    >
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
  const { theme } = useTheme();

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
          <h2
            className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight ${
              theme === 'dark' ? 'text-white' : 'text-slate-900'
            }`}
          >
            How We Work
          </h2>
          <p
            className={`text-lg ${
              theme === 'dark' ? 'text-white/50' : 'text-slate-600'
            }`}
          >
            A transparent, collaborative process from idea to launch
          </p>
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
              <div
                className={`text-6xl font-black text-transparent bg-clip-text transition-all duration-500 mb-6 ${
                  theme === 'dark'
                    ? 'bg-gradient-to-br from-white/30 to-white/5 group-hover:from-purple-500/50 group-hover:to-pink-500/20'
                    : 'bg-gradient-to-br from-slate-400 to-slate-200 group-hover:from-purple-600 group-hover:to-pink-600'
                }`}
              >
                {step.num}
              </div>
              <h3
                className={`text-2xl font-bold mb-3 ${
                  theme === 'dark' ? 'text-white' : 'text-slate-900'
                }`}
              >
                {step.title}
              </h3>
              <p
                className={`text-sm leading-relaxed ${
                  theme === 'dark' ? 'text-white/50' : 'text-slate-600'
                }`}
              >
                {step.desc}
              </p>
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
  const { theme } = useTheme();
  const founder = team[0];
  const members = team.slice(1);

  return (
    <section
      id="team"
      className={`py-32 px-6 md:px-10 transition-colors duration-300 ${
        theme === 'dark' ? 'bg-white/[0.02]' : 'bg-slate-100/50'
      }`}
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2
            className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight ${
              theme === 'dark' ? 'text-white' : 'text-slate-900'
            }`}
          >
            Leadership
          </h2>
          <p
            className={`text-lg ${
              theme === 'dark' ? 'text-white/50' : 'text-slate-600'
            }`}
          >
            Experts driving innovation and results
          </p>
        </motion.div>

        {/* Founder Card */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8 }}
          className={`max-w-4xl mx-auto mb-16 rounded-[2.5rem] p-8 md:p-12 flex flex-col md:flex-row items-center gap-8 md:gap-12 transition-all border ${
            theme === 'dark'
              ? 'bg-white/[0.03] border-white/10 hover:bg-white/[0.05]'
              : 'bg-white border-slate-200 shadow-xl hover:border-purple-300'
          }`}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0, rotate: -5 }}
            whileInView={{ scale: 1, opacity: 1, rotate: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="w-48 md:w-64 shrink-0 rounded-3xl overflow-hidden ring-4 ring-purple-500/20 shadow-2xl aspect-[6.5/9]"
          >
            <img src={founder.image} alt={founder.name} className="w-full h-full object-cover" />
          </motion.div>
          <motion.div
            initial={{ x: 30, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            <h3
              className={`text-3xl md:text-4xl font-bold mb-2 ${
                theme === 'dark' ? 'text-white' : 'text-slate-900'
              }`}
            >
              {founder.name}
            </h3>
            <p className="text-purple-500 text-lg font-semibold mb-6 uppercase tracking-wide">{founder.role}</p>
            <p
              className={`text-base md:text-lg leading-relaxed ${
                theme === 'dark' ? 'text-white/60' : 'text-slate-600'
              }`}
            >
              {founder.bio}
            </p>
            <div className="mt-8 h-px bg-gradient-to-r from-purple-500/50 to-transparent w-full max-w-[200px]" />
            <div className="mt-8 flex gap-4">
              <a
                href="mailto:hello@kavasi.com"
                aria-label="Email Siddhartha"
                className={`w-10 h-10 rounded-full flex items-center justify-center border transition-all ${
                  theme === 'dark'
                    ? 'bg-white/5 border-white/10 text-white/60 hover:bg-purple-500 hover:text-white'
                    : 'bg-slate-100 border-slate-300 text-slate-700 hover:bg-purple-600 hover:text-white'
                }`}
              >
                <Mail size={16} />
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
              className={`group rounded-[2rem] p-6 flex flex-col sm:flex-row items-center gap-6 transition-all border ${
                theme === 'dark'
                  ? 'bg-white/[0.02] border-white/5 hover:bg-white/[0.05] hover:border-white/10'
                  : 'bg-white border-slate-200 hover:border-purple-300 shadow-md'
              }`}
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: 0.4 + (idx * 0.1) }}
                className="w-32 shrink-0 rounded-[1.5rem] overflow-hidden ring-2 ring-purple-500/20 aspect-[6.5/9]"
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
                <h3
                  className={`text-2xl font-bold mb-1 group-hover:text-purple-500 transition-colors ${
                    theme === 'dark' ? 'text-white' : 'text-slate-900'
                  }`}
                >
                  {member.name}
                </h3>
                <p className="text-purple-500 text-sm font-semibold mb-3 uppercase tracking-wider">{member.role}</p>
                <p
                  className={`text-sm leading-relaxed mb-4 ${
                    theme === 'dark' ? 'text-white/50' : 'text-slate-600'
                  }`}
                >
                  {member.bio}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const { theme } = useTheme();

  return (
    <section id="contact" className="py-32 px-6 md:px-10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2
            className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight ${
              theme === 'dark' ? 'text-white' : 'text-slate-900'
            }`}
          >
            Let's Build Something Great
          </h2>
          <p
            className={`text-lg max-w-2xl mx-auto ${
              theme === 'dark' ? 'text-white/50' : 'text-slate-600'
            }`}
          >
            Development starts from <span className="font-semibold underline decoration-purple-500">₹15,000</span>, with an additional <span className="font-semibold underline decoration-cyan-500">₹5,000/year</span> for hosting & maintenance.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8 }}
          className={`max-w-5xl mx-auto backdrop-blur-xl rounded-[2.5rem] border p-8 md:p-16 transition-all ${
            theme === 'dark'
              ? 'bg-white/[0.03] border-white/10 shadow-[0_0_100px_rgba(0,0,0,0.5)]'
              : 'bg-white border-slate-200 shadow-[0_20px_60px_rgba(0,0,0,0.06)]'
          }`}
        >
          <div className="grid lg:grid-cols-2 gap-16">
            <div className="space-y-10">
              <div>
                <h3
                  className={`text-3xl font-bold mb-4 ${
                    theme === 'dark' ? 'text-white' : 'text-slate-900'
                  }`}
                >
                  Get in touch
                </h3>
                <p
                  className={`${
                    theme === 'dark' ? 'text-white/40' : 'text-slate-600'
                  }`}
                >
                  Ready to transform your business? Drop us a line and we'll get back to you within 24 hours.
                </p>
              </div>

              <div className="space-y-8">
                <div className="flex items-center gap-5 group">
                  <div
                    className={`w-14 h-14 rounded-2xl flex items-center justify-center border group-hover:bg-purple-500 transition-colors duration-500 ${
                      theme === 'dark'
                        ? 'bg-white/5 border-white/10 text-white/60 group-hover:text-white'
                        : 'bg-slate-100 border-slate-200 text-slate-700 group-hover:text-white'
                    }`}
                  >
                    <Phone size={24} />
                  </div>
                  <div>
                    <p
                      className={`text-xs font-medium mb-1 tracking-wide uppercase ${
                        theme === 'dark' ? 'text-white/40' : 'text-slate-500'
                      }`}
                    >
                      Call us directly
                    </p>
                    <a
                      href="tel:+916394974200"
                      className={`text-xl font-bold hover:text-purple-500 transition-colors ${
                        theme === 'dark' ? 'text-white' : 'text-slate-900'
                      }`}
                    >
                      +91 63949 74200
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-5 group">
                  <div
                    className={`w-14 h-14 rounded-2xl flex items-center justify-center border group-hover:bg-pink-500 transition-colors duration-500 ${
                      theme === 'dark'
                        ? 'bg-white/5 border-white/10 text-white/60 group-hover:text-white'
                        : 'bg-slate-100 border-slate-200 text-slate-700 group-hover:text-white'
                    }`}
                  >
                    <Mail size={24} />
                  </div>
                  <div>
                    <p
                      className={`text-xs font-medium mb-1 tracking-wide uppercase ${
                        theme === 'dark' ? 'text-white/40' : 'text-slate-500'
                      }`}
                    >
                      Email address
                    </p>
                    <a
                      href="mailto:hello@kavasi.com"
                      className={`text-xl font-bold hover:text-pink-500 transition-colors ${
                        theme === 'dark' ? 'text-white' : 'text-slate-900'
                      }`}
                    >
                      hello@kavasi.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-5 group">
                  <div
                    className={`w-14 h-14 rounded-2xl flex items-center justify-center border group-hover:bg-emerald-500 transition-colors duration-500 ${
                      theme === 'dark'
                        ? 'bg-white/5 border-white/10 text-white/60 group-hover:text-white'
                        : 'bg-slate-100 border-slate-200 text-slate-700 group-hover:text-white'
                    }`}
                  >
                    <MessageCircle size={24} />
                  </div>
                  <div>
                    <p
                      className={`text-xs font-medium mb-1 tracking-wide uppercase ${
                        theme === 'dark' ? 'text-white/40' : 'text-slate-500'
                      }`}
                    >
                      WhatsApp
                    </p>
                    <a
                      href="https://wa.me/916394974200"
                      target="_blank"
                      className={`text-xl font-bold hover:text-emerald-500 transition-colors flex items-center gap-2 ${
                        theme === 'dark' ? 'text-white' : 'text-slate-900'
                      }`}
                    >
                      Start a chat <ArrowRight size={16} />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <form className="space-y-5">
              <input
                suppressHydrationWarning
                type="text"
                placeholder="Your name"
                className={`w-full px-6 py-4 rounded-2xl border focus:outline-none focus:border-purple-500 transition-all ${
                  theme === 'dark'
                    ? 'bg-black/40 border-white/10 text-white placeholder:text-white/30'
                    : 'bg-slate-50 border-slate-300 text-slate-900 placeholder:text-slate-400'
                }`}
              />
              <input
                suppressHydrationWarning
                type="email"
                placeholder="Email address"
                className={`w-full px-6 py-4 rounded-2xl border focus:outline-none focus:border-purple-500 transition-all ${
                  theme === 'dark'
                    ? 'bg-black/40 border-white/10 text-white placeholder:text-white/30'
                    : 'bg-slate-50 border-slate-300 text-slate-900 placeholder:text-slate-400'
                }`}
              />
              <textarea
                suppressHydrationWarning
                rows={4}
                placeholder="Tell us about your project..."
                className={`w-full px-6 py-4 rounded-2xl border focus:outline-none focus:border-purple-500 transition-all resize-none ${
                  theme === 'dark'
                    ? 'bg-black/40 border-white/10 text-white placeholder:text-white/30'
                    : 'bg-slate-50 border-slate-300 text-slate-900 placeholder:text-slate-400'
                }`}
              ></textarea>
              <button
                suppressHydrationWarning
                type="button"
                className={`w-full py-4 rounded-2xl font-bold flex items-center justify-center gap-2 hover:gap-4 transition-all cursor-pointer shadow-md ${
                  theme === 'dark'
                    ? 'bg-white text-black hover:bg-purple-100'
                    : 'bg-slate-900 text-white hover:bg-purple-600'
                }`}
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
