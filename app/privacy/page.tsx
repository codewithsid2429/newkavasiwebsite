'use client';

import { motion } from 'framer-motion';
import { Shield, Lock, Eye, CheckCircle } from 'lucide-react';
import AnimatedBackground from '../../components/AnimatedBackground';
import { useTheme } from '../../components/ThemeProvider';

export default function PrivacyPolicy() {
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
          <h1 className={`text-4xl md:text-5xl font-bold tracking-tight mb-4 ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>Privacy Policy</h1>
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
              <Shield size={22} className="text-purple-500" /> 1. Introduction
            </h2>
            <p className={`text-sm leading-relaxed font-light ${theme === 'dark' ? 'text-white/60' : 'text-slate-600'}`}>
              At KAVASI, we prioritize the confidentiality of our clients, startup partners, and site visitors. This Privacy Policy describes how we collect, store, and utilize data when you visit our website, apply for career openings, or submit inquiry forms.
            </p>
          </div>

          {/* Section 2 */}
          <div className="space-y-4">
            <h2 className={`text-2xl font-bold flex items-center gap-3 ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>
              <Lock size={22} className="text-cyan-500" /> 2. Data We Collect
            </h2>
            <p className={`text-sm leading-relaxed font-light ${theme === 'dark' ? 'text-white/60' : 'text-slate-600'}`}>
              We collect information that you explicitly submit to us, which includes:
            </p>
            <ul className="space-y-3 pl-6">
              {[
                "Personal details (Name, email address, phone number, and company name) supplied via project inquiry forms.",
                "Professional background details, resume summaries, and portfolio URLs submitted through recruitment forms.",
                "Anonymized analytics data (device types, page load statistics) to evaluate site stability."
              ].map((item, idx) => (
                <li key={idx} className={`flex gap-3 text-sm font-light ${theme === 'dark' ? 'text-white/50' : 'text-slate-600'}`}>
                  <CheckCircle size={14} className="text-purple-500 shrink-0 mt-1" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Section 3 */}
          <div className="space-y-4">
            <h2 className={`text-2xl font-bold flex items-center gap-3 ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>
              <Eye size={22} className="text-pink-500" /> 3. How We Use Information
            </h2>
            <p className={`text-sm leading-relaxed font-light ${theme === 'dark' ? 'text-white/60' : 'text-slate-600'}`}>
              Your submitted data is strictly used to:
            </p>
            <ul className="space-y-3 pl-6">
              {[
                "Evaluate custom pricing budgets and establish follow-up communication.",
                "Review qualifications for open roles at our agency.",
                "Verify and optimize the performance of our web applications."
              ].map((item, idx) => (
                <li key={idx} className={`flex gap-3 text-sm font-light ${theme === 'dark' ? 'text-white/50' : 'text-slate-600'}`}>
                  <CheckCircle size={14} className="text-cyan-500 shrink-0 mt-1" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Section 4 */}
          <div className="space-y-4">
            <h2 className={`text-2xl font-bold flex items-center gap-3 ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>
              <Shield size={22} className="text-emerald-500" /> 4. Data Sharing & Security
            </h2>
            <p className={`text-sm leading-relaxed font-light ${theme === 'dark' ? 'text-white/60' : 'text-slate-600'}`}>
              KAVASI does not sell, lease, or distribute your information to advertising networks or third parties. We store data within encrypted cloud databases hosted on highly secure servers (such as Vercel & AWS), protected by strict SSL infrastructure.
            </p>
          </div>

          {/* Contact Section */}
          <div className={`pt-6 border-t text-center ${theme === 'dark' ? 'border-white/10' : 'border-slate-200'}`}>
            <p className={`text-xs font-light ${theme === 'dark' ? 'text-white/40' : 'text-slate-500'}`}>
              If you have any questions regarding data operations, please email us at{" "}
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
