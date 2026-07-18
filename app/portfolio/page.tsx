'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Star } from 'lucide-react';
import Link from 'next/link';
import AnimatedBackground from '../../components/AnimatedBackground';
import { useTheme } from '../../components/ThemeProvider';

const categories = ["All", "Web Development", "AI Automation", "UI/UX Design"];

const portfolioProjects = [
  {
    title: "Shanti Dehdan Trust",
    category: "Web Development",
    desc: "A responsive, modern digital home for a prominent non-profit organization. Implemented customized donation workflows and optimized SEO structures to increase outreach.",
    image: "/images/portfolioimg/shantidendan.png",
    tags: ["Non-Profit", "Responsive", "Donation Setup"],
  },
  {
    title: "Dynamic Construction",
    category: "Web Development",
    desc: "A high-end web experience constructed for a local development firm. Features customized project showcases, content management systems, and local SEO optimizations.",
    image: "/images/portfolioimg/dyanmic.png",
    tags: ["CMS", "Project Showcase", "Lead Gen"],
  },
  {
    title: "ABC Construction",
    category: "Web Development",
    desc: "Bespoke corporate identity website for a large-scale construction contractor. Highlights service portfolio, machinery assets, and optimized lead-capture forms.",
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2070",
    tags: ["Corporate", "Asset Showcase", "SEO Optimized"],
  },
  {
    title: "Smart Retail AI",
    category: "AI Automation",
    desc: "An intelligent inventory monitoring and support tool designed for retail startups. Integrates custom vector databases and automated inventory notifications.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=2070",
    tags: ["AI Inventory", "Chat Support", "Analytics"],
  },
  {
    title: "LuxEstate Pro",
    category: "UI/UX Design",
    desc: "Luxury real estate interface wireframed and visually systemized in Figma. Crafted animations, interactive property flows, and refined dark-themed guidelines.",
    image: "https://images.unsplash.com/photo-1560185127-6a2806647f81?q=80&w=2070",
    tags: ["Wireframing", "Figma", "Design System"],
  }
];

const testimonials = [
  {
    name: "Dr. A. Sharma",
    role: "Trustee, Shanti Dehdan Trust",
    quote: "KAVASI did an outstanding job moving our NGO's presence online. The donation flow is incredibly fast, and we have seen a 40% increase in digital engagement.",
    rating: 5,
  },
  {
    name: "Vikram R.",
    role: "CEO, Dynamic Construction",
    quote: "Working with Siddhartha and Rahul was seamless. They built exactly the kind of premium, dark-mode site we wanted, and our project leads have doubled.",
    rating: 5,
  }
];

export default function Portfolio() {
  const { theme } = useTheme();
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects = portfolioProjects.filter(project => {
    if (activeFilter === "All") return true;
    return project.category === activeFilter;
  });

  return (
    <div className="relative min-h-screen pt-32 pb-20 px-6 md:px-10 overflow-hidden selection:bg-purple-500/30">
      <AnimatedBackground />
      <div
        className={`absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] z-0 pointer-events-none ${
          theme === 'dark' ? 'from-purple-900/10 via-black to-black' : 'from-purple-200/40 via-slate-50 to-slate-50'
        }`}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Hero */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <span className={`inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider mb-6 border backdrop-blur-md ${
            theme === 'dark' ? 'bg-white/5 text-purple-400 border-white/10' : 'bg-purple-50 text-purple-600 border-purple-200'
          }`}>
            OUR WORKS
          </span>
          <h1 className={`text-4xl md:text-6xl font-bold tracking-tight mb-6 ${
            theme === 'dark' ? 'text-white' : 'text-slate-900'
          }`}>
            Selected Case Studies
          </h1>
          <p className={`text-lg md:text-xl leading-relaxed font-light ${
            theme === 'dark' ? 'text-white/50' : 'text-slate-600'
          }`}>
            Browse our catalog of custom full-stack websites, automation engines, and design prototypes built with meticulous care.
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {categories.map((cat) => {
            const isActive = activeFilter === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 border cursor-pointer ${
                  isActive
                    ? theme === 'dark' ? 'bg-white text-black border-white shadow-lg' : 'bg-slate-900 text-white border-slate-900 shadow-lg'
                    : theme === 'dark' ? 'bg-white/5 text-white/70 border-white/10 hover:border-white/30 hover:text-white' : 'bg-slate-100 text-slate-700 border-slate-200 hover:bg-slate-200'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Project Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto mb-32"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="group cursor-pointer flex flex-col justify-between"
              >
                <div>
                  <div className={`relative overflow-hidden rounded-3xl aspect-[16/10] mb-6 shadow-xl flex items-center justify-center border ${
                    theme === 'dark' ? 'bg-neutral-950 border-white/10' : 'bg-white border-slate-200'
                  }`}>
                    <motion.div 
                      className={`absolute inset-0 transition-colors duration-500 z-10 ${
                        theme === 'dark' ? 'bg-black/10 group-hover:bg-transparent' : 'bg-slate-900/5 group-hover:bg-transparent'
                      }`}
                    />
                    <motion.img 
                      src={project.image} 
                      alt={project.title} 
                      className="object-contain w-full h-full transform transition-transform duration-700 ease-out group-hover:scale-105" 
                    />
                  </div>
                  <div className="px-2">
                    <p className="text-purple-500 font-semibold text-xs mb-2 uppercase tracking-wider">{project.category}</p>
                    <h3 className={`text-2xl font-bold mb-3 group-hover:text-purple-500 transition-colors ${
                      theme === 'dark' ? 'text-white' : 'text-slate-900'
                    }`}>{project.title}</h3>
                    <p className={`text-sm leading-relaxed mb-6 font-light ${
                      theme === 'dark' ? 'text-white/50' : 'text-slate-600'
                    }`}>{project.desc}</p>
                  </div>
                </div>

                <div className="px-2">
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map(tag => (
                      <span key={tag} className={`text-[10px] px-3 py-1 rounded-full uppercase tracking-wider font-semibold border ${
                        theme === 'dark' ? 'bg-white/5 border-white/10 text-white/60' : 'bg-slate-100 border-slate-200 text-slate-700'
                      }`}>
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className={`h-px w-full transition-colors duration-300 ${
                    theme === 'dark' ? 'bg-white/10 group-hover:bg-purple-500/30' : 'bg-slate-200 group-hover:bg-purple-500/40'
                  }`} />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Testimonials */}
        <div className={`border-t pt-32 ${theme === 'dark' ? 'border-white/10' : 'border-slate-200'}`}>
          <div className="text-center mb-16">
            <h2 className={`text-3xl md:text-5xl font-bold tracking-tight ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>Client Testimonials</h2>
            <p className={`text-lg mt-2 ${theme === 'dark' ? 'text-white/40' : 'text-slate-600'}`}>What they say about KAVASI engineering</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {testimonials.map((test, idx) => (
              <motion.div
                key={test.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                className={`p-8 md:p-10 rounded-3xl border flex flex-col justify-between ${
                  theme === 'dark' ? 'bg-white/[0.02] border-white/[0.06]' : 'bg-white border-slate-200 shadow-md'
                }`}
              >
                <div>
                  <div className="flex gap-1 mb-6">
                    {[...Array(test.rating)].map((_, i) => (
                      <Star key={i} size={16} className="fill-purple-500 text-purple-500" />
                    ))}
                  </div>
                  <p className={`text-base italic leading-relaxed font-light mb-8 ${
                    theme === 'dark' ? 'text-white/70' : 'text-slate-700'
                  }`}>
                    "{test.quote}"
                  </p>
                </div>
                <div>
                  <h4 className={`font-bold text-lg ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>{test.name}</h4>
                  <p className="text-purple-500 text-sm font-medium">{test.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
