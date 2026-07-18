'use client';

import { motion } from 'framer-motion';
import { Terminal, Scale, Landmark, FileText, CheckCircle } from 'lucide-react';
import AnimatedBackground from '../../components/AnimatedBackground';
import { useTheme } from '../../components/ThemeProvider';

export default function TermsOfService() {
  const { theme } = useTheme();

  return (
    <div className="relative min-h-screen pt-32 pb-20 px-6 md:px-10 overflow-hidden selection:bg-purple-500/30">
      <AnimatedBackground />
      <div
        className={`absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] z-0 pointer-events-none ${
          theme === 'dark' ? 'from-purple-900/10 via-black to-black' : 'from-purple-200/40 via-slate-50 to-slate-50'
        }`}
      />

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className={`inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider mb-6 border backdrop-blur-md ${
            theme === 'dark' ? 'bg-white/5 text-purple-400 border-white/10' : 'bg-purple-50 text-purple-600 border-purple-200'
          }`}>
            LEGAL
          </span>
          <h1 className={`text-4xl md:text-5xl font-bold tracking-tight mb-4 ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>Terms of Service</h1>
          <p className={`text-sm font-light ${theme === 'dark' ? 'text-white/40' : 'text-slate-500'}`}>Last Updated: June 16, 2026</p>
        </motion.div>

        {/* Content Container */}
        <motion.div 
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className={`p-8 md:p-12 rounded-[2.5rem] border backdrop-blur-xl space-y-10 ${
            theme === 'dark'
              ? 'bg-white/[0.02] border-white/10 shadow-[0_0_100px_rgba(0,0,0,0.5)]'
              : 'bg-white border-slate-200 shadow-xl'
          }`}
        >
          {/* Section 1 */}
          <div className="space-y-4">
            <h2 className={`text-2xl font-bold flex items-center gap-3 ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>
              <Scale size={22} className="text-purple-500" /> 1. Agreement to Terms
            </h2>
            <p className={`text-sm leading-relaxed font-light ${theme === 'dark' ? 'text-white/60' : 'text-slate-600'}`}>
              By accessing and browsing the KAVASI website or contracting our development and automation services, you agree to comply with and be bound by these Terms of Service. If you do not agree, you must cease using our digital services immediately.
            </p>
          </div>

          {/* Section 2 */}
          <div className="space-y-4">
            <h2 className={`text-2xl font-bold flex items-center gap-3 ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>
              <Terminal size={22} className="text-cyan-500" /> 2. Scope of Services
            </h2>
            <p className={`text-sm leading-relaxed font-light ${theme === 'dark' ? 'text-white/60' : 'text-slate-600'}`}>
              KAVASI provides digital services including, but not limited to, Website Development, AI Workflows and Agents, Custom Integrations, and UI/UX Designing.
            </p>
            <ul className="space-y-3 pl-6">
              {[
                "Development projects are custom-scoped and start from a base rate of ₹15,000.",
                "Server hosting, maintenance, and backup packages are billed yearly starting at ₹5,000/year.",
                "Deliverables, exact features, and timelines are governed by individual client contracts."
              ].map((item, idx) => (
                <li key={idx} className={`flex gap-3 text-sm font-light ${theme === 'dark' ? 'text-white/50' : 'text-slate-600'}`}>
                  <CheckCircle size={14} className="text-cyan-500 shrink-0 mt-1" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Section 3 */}
          <div className="space-y-4">
            <h2 className={`text-2xl font-bold flex items-center gap-3 ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>
              <Landmark size={22} className="text-pink-500" /> 3. Intellectual Property
            </h2>
            <p className={`text-sm leading-relaxed font-light ${theme === 'dark' ? 'text-white/60' : 'text-slate-600'}`}>
              Unless otherwise specified in a specific client contract:
            </p>
            <ul className="space-y-3 pl-6">
              {[
                "KAVASI retains ownership of pre-existing templates, boilerplate code, and proprietary logic libraries.",
                "Clients receive full ownership of final website assets, customization codes, and custom database setups upon full contract settlement."
              ].map((item, idx) => (
                <li key={idx} className={`flex gap-3 text-sm font-light ${theme === 'dark' ? 'text-white/50' : 'text-slate-600'}`}>
                  <CheckCircle size={14} className="text-purple-500 shrink-0 mt-1" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Section 4 */}
          <div className="space-y-4">
            <h2 className={`text-2xl font-bold flex items-center gap-3 ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>
              <FileText size={22} className="text-emerald-500" /> 4. Disclaimer of Warranties
            </h2>
            <p className={`text-sm leading-relaxed font-light ${theme === 'dark' ? 'text-white/60' : 'text-slate-600'}`}>
              Our website and default templates are provided on an 'as-is' and 'as-available' basis. While we strive to maintain 99.9% server uptime and high security audits for clients on our hosting packages, KAVASI is not liable for service interruptions stemming from third-party hosting server providers (such as Vercel, AWS, or Netlify).
            </p>
          </div>

          {/* Contact Section */}
          <div className={`pt-6 border-t text-center ${theme === 'dark' ? 'border-white/10' : 'border-slate-200'}`}>
            <p className={`text-xs font-light ${theme === 'dark' ? 'text-white/40' : 'text-slate-500'}`}>
              For any questions regarding service terms, please contact us at{" "}
              <a href="mailto:hello@kavasi.com" className="text-purple-500 font-semibold hover:underline">
                hello@kavasi.com
              </a>.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
