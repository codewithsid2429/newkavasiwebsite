'use client';

import { motion } from 'framer-motion';
import { Shield, Lock, Eye, CheckCircle } from 'lucide-react';
import AnimatedBackground from '../../components/AnimatedBackground';

export default function PrivacyPolicy() {
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
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Privacy Policy</h1>
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
              <Shield size={22} className="text-purple-400" /> 1. Introduction
            </h2>
            <p className="text-white/60 text-sm leading-relaxed font-light">
              At KAVASI, we prioritize the confidentiality of our clients, startup partners, and site visitors. This Privacy Policy describes how we collect, store, and utilize data when you visit our website, apply for career openings, or submit inquiry forms.
            </p>
          </div>

          {/* Section 2 */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-white flex items-center gap-3">
              <Lock size={22} className="text-cyan-400" /> 2. Data We Collect
            </h2>
            <p className="text-white/60 text-sm leading-relaxed font-light">
              We collect information that you explicitly submit to us, which includes:
            </p>
            <ul className="space-y-3 pl-6">
              {[
                "Personal details (Name, email address, phone number, and company name) supplied via project inquiry forms.",
                "Professional background details, resume summaries, and portfolio URLs submitted through recruitment forms.",
                "Anonymized analytics data (device types, page load statistics) to evaluate site stability."
              ].map((item, idx) => (
                <li key={idx} className="flex gap-3 text-sm text-white/50 font-light">
                  <CheckCircle size={14} className="text-purple-500 shrink-0 mt-1" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Section 3 */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-white flex items-center gap-3">
              <Eye size={22} className="text-pink-400" /> 3. How We Use Information
            </h2>
            <p className="text-white/60 text-sm leading-relaxed font-light">
              Your submitted data is strictly used to:
            </p>
            <ul className="space-y-3 pl-6">
              {[
                "Evaluate custom pricing budgets and establish follow-up communication.",
                "Review qualifications for open roles at our agency.",
                "Verify and optimize the performance of our web applications."
              ].map((item, idx) => (
                <li key={idx} className="flex gap-3 text-sm text-white/50 font-light">
                  <CheckCircle size={14} className="text-cyan-500 shrink-0 mt-1" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Section 4 */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-white flex items-center gap-3">
              <Shield size={22} className="text-emerald-400" /> 4. Data Sharing & Security
            </h2>
            <p className="text-white/60 text-sm leading-relaxed font-light">
              KAVASI does not sell, lease, or distribute your information to advertising networks or third parties. We store data within encrypted cloud databases hosted on highly secure servers (such as Vercel & AWS), protected by strict SSL infrastructure.
            </p>
          </div>

          {/* Contact Section */}
          <div className="pt-6 border-t border-white/10 text-center">
            <p className="text-white/40 text-xs font-light">
              If you have any questions regarding data operations, please email us at{" "}
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
