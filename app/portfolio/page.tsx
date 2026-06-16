'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Star } from 'lucide-react';
import Link from 'next/link';
import AnimatedBackground from '../../components/AnimatedBackground';

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
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects = portfolioProjects.filter(project => {
    if (activeFilter === "All") return true;
    return project.category === activeFilter;
  });

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
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-white/5 text-purple-400 text-xs font-semibold tracking-wider mb-6 border border-white/10 backdrop-blur-md">
            OUR WORKS
          </span>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 bg-gradient-to-r from-white via-white to-white/60 bg-clip-text text-transparent">
            Selected Case Studies
          </h1>
          <p className="text-lg md:text-xl text-white/50 leading-relaxed font-light">
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
                    ? 'bg-white text-black border-white shadow-lg'
                    : 'bg-white/5 text-white/70 border-white/10 hover:border-white/30 hover:text-white'
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
            {filteredProjects.map((project, idx) => (
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
                  <div className="relative overflow-hidden rounded-3xl aspect-[16/10] mb-6 shadow-2xl bg-neutral-950 border border-white/5 flex items-center justify-center">
                    <motion.div 
                      className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500 z-10"
                    />
                    <motion.img 
                      src={project.image} 
                      alt={project.title} 
                      className="object-contain w-full h-full transform transition-transform duration-700 ease-out group-hover:scale-102" 
                    />
                  </div>
                  <div className="px-2">
                    <p className="text-purple-400 font-semibold text-xs mb-2 uppercase tracking-wider">{project.category}</p>
                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors">{project.title}</h3>
                    <p className="text-white/50 text-sm leading-relaxed mb-6 font-light">{project.desc}</p>
                  </div>
                </div>

                <div className="px-2">
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map(tag => (
                      <span key={tag} className="text-[10px] px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/60 uppercase tracking-wider font-semibold">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="h-px bg-white/10 w-full group-hover:bg-purple-500/30 transition-colors duration-300" />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Testimonials */}
        <div className="border-t border-white/10 pt-32">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Client Testimonials</h2>
            <p className="text-white/40 text-lg mt-2">What they say about KAVASI engineering</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {testimonials.map((test, idx) => (
              <motion.div
                key={test.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                className="p-8 md:p-10 rounded-3xl bg-white/[0.02] border border-white/[0.06] flex flex-col justify-between"
              >
                <div>
                  <div className="flex gap-1 mb-6">
                    {[...Array(test.rating)].map((_, i) => (
                      <Star key={i} size={16} className="fill-purple-400 text-purple-400" />
                    ))}
                  </div>
                  <p className="text-white/70 text-base italic leading-relaxed font-light mb-8">
                    "{test.quote}"
                  </p>
                </div>
                <div>
                  <h4 className="font-bold text-white text-lg">{test.name}</h4>
                  <p className="text-purple-400 text-sm font-medium">{test.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
