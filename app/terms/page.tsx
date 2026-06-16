'use client';

import { motion } from 'framer-motion';
import { Terminal, Scale, Landmark, FileText, CheckCircle } from 'lucide-react';
import AnimatedBackground from '../../components/AnimatedBackground';

export default function TermsOfService() {
  return (
    <div className="relative min-h-screen pt-32 pb-20 px-6 md:px-10 overflow-hidden bg-black selection:bg-purple-500/30">
      <AnimatedBackground />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/10 via-black to-black z-0 pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-white/5 text-purple-400 text-xs font-semibold tracking-wider mb-6 border border-white/10 backdrop-blur-md">
            LEGAL
          </span>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Terms of Service</h1>
          <p className="text-white/40 text-sm font-light">Last Updated: June 16, 2026</p>
        </motion.div>

        {/* Content Container */}
        <motion.div 
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="p-8 md:p-12 rounded-[2.5rem] bg-white/[0.02] border border-white/10 backdrop-blur-xl space-y-10"
        >
          {/* Section 1 */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-white flex items-center gap-3">
              <Scale size={22} className="text-purple-400" /> 1. Agreement to Terms
            </h2>
            <p className="text-white/60 text-sm leading-relaxed font-light">
              By accessing and browsing the KAVASI website or contracting our development and automation services, you agree to comply with and be bound by these Terms of Service. If you do not agree, you must cease using our digital services immediately.
            </p>
          </div>

          {/* Section 2 */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-white flex items-center gap-3">
              <Terminal size={22} className="text-cyan-400" /> 2. Scope of Services
            </h2>
            <p className="text-white/60 text-sm leading-relaxed font-light">
              KAVASI provides digital services including, but not limited to, Website Development, AI Workflows and Agents, Custom Integrations, and UI/UX Designing.
            </p>
            <ul className="space-y-3 pl-6">
              {[
                "Development projects are custom-scoped and start from a base rate of ₹15,000.",
                "Server hosting, maintenance, and backup packages are billed yearly starting at ₹5,000/year.",
                "Deliverables, exact features, and timelines are governed by individual client contracts."
              ].map((item, idx) => (
                <li key={idx} className="flex gap-3 text-sm text-white/50 font-light">
                  <CheckCircle size={14} className="text-cyan-500 shrink-0 mt-1" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Section 3 */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-white flex items-center gap-3">
              <Landmark size={22} className="text-pink-400" /> 3. Intellectual Property
            </h2>
            <p className="text-white/60 text-sm leading-relaxed font-light">
              Unless otherwise specified in a specific client contract:
            </p>
            <ul className="space-y-3 pl-6">
              {[
                "KAVASI retains ownership of pre-existing templates, boilerplate code, and proprietary logic libraries.",
                "Clients receive full ownership of final website assets, customization codes, and custom database setups upon full contract settlement."
              ].map((item, idx) => (
                <li key={idx} className="flex gap-3 text-sm text-white/50 font-light">
                  <CheckCircle size={14} className="text-purple-500 shrink-0 mt-1" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Section 4 */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-white flex items-center gap-3">
              <FileText size={22} className="text-emerald-400" /> 4. Disclaimer of Warranties
            </h2>
            <p className="text-white/60 text-sm leading-relaxed font-light">
              Our website and default templates are provided on an 'as-is' and 'as-available' basis. While we strive to maintain 99.9% server uptime and high security audits for clients on our hosting packages, KAVASI is not liable for service interruptions stemming from third-party hosting server providers (such as Vercel, AWS, or Netlify).
            </p>
          </div>

          {/* Contact Section */}
          <div className="pt-6 border-t border-white/10 text-center">
            <p className="text-white/40 text-xs font-light">
              For any questions regarding service terms, please contact us at{" "}
              <a href="mailto:hello@kavasi.com" className="text-purple-400 font-semibold hover:underline">
                hello@kavasi.com
              </a>.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
