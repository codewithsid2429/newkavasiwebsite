'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, CheckCircle2, FileText, Briefcase, Award, MapPin } from 'lucide-react';
import AnimatedBackground from '../../components/AnimatedBackground';
import { submitApplication } from '../actions';

const openRoles = [
  {
    title: "AI Automation Engineer",
    type: "Full-time / Remote",
    location: "Global",
    desc: "Develop automated operational flows using LLM APIs, vector search configurations, custom web scraping bots, and cloud services (AWS/GCP). Node.js/Python expertise required.",
  },
  {
    title: "Frontend Developer (Next.js / React)",
    type: "Full-time / Remote",
    location: "Global",
    desc: "Craft high-performance, pixel-perfect user interfaces using Next.js App Router, Tailwind CSS, Framer Motion, and TypeScript. Detail-oriented design sensibilities are a must.",
  },
  {
    title: "UI/UX Designer",
    type: "Contract / Remote",
    location: "Global",
    desc: "Establish high-fidelity designs, interactive logic layouts, comprehensive Figma design systems, and visual guidelines for enterprise web platforms and mobile apps.",
  }
];

const perks = [
  "100% remote-first workspace environment.",
  "Competitive compensation package & equity options.",
  "Direct access to cutting-edge generative AI subscription tools.",
  "Flexible working hours and comprehensive health plans.",
  "Meticulous, design-driven, engineering-first team culture."
];

export default function Careers() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    role: 'AI Automation Engineer',
    portfolio: '',
    experience: '',
    coverLetter: ''
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validate = () => {
    const tempErrors: Record<string, string> = {};
    if (!formData.name.trim()) tempErrors.name = "Name is required.";
    if (!formData.email.trim()) {
      tempErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = "Email is invalid.";
    }
    if (!formData.experience.trim()) tempErrors.experience = "Experience summary is required.";
    
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setIsSubmitting(true);
      setSubmitError('');
      const res = await submitApplication(formData);
      setIsSubmitting(false);
      if (res.success) {
        setSubmitted(true);
      } else {
        setSubmitError(res.error || 'Failed to submit application. Please try again.');
      }
    }
  };

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
          className="text-center max-w-3xl mx-auto mb-24"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-white/5 text-purple-400 text-xs font-semibold tracking-wider mb-6 border border-white/10 backdrop-blur-md">
            JOIN KAVASI
          </span>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 bg-gradient-to-r from-white via-white to-white/60 bg-clip-text text-transparent">
            Build the Future of Automation
          </h1>
          <p className="text-lg md:text-xl text-white/50 leading-relaxed font-light">
            We are looking for creative, engineering-first builders who want to shape how enterprises operate using AI systems and elite web technology.
          </p>
        </motion.div>

        {/* Roles & Perks Grid */}
        <div className="grid lg:grid-cols-12 gap-16 items-start mb-32">
          {/* Roles List */}
          <div className="lg:col-span-7 space-y-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 flex items-center gap-3">
              <Briefcase size={24} className="text-purple-400" /> Open Positions
            </h2>
            {openRoles.map((role, idx) => (
              <motion.div
                key={role.title}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="p-8 rounded-3xl bg-white/[0.02] border border-white/[0.06] hover:border-white/20 transition-all duration-300 group"
              >
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-4">
                  <h3 className="text-2xl font-bold group-hover:text-purple-400 transition-colors">{role.title}</h3>
                  <span className="text-xs font-semibold tracking-wider bg-white/5 border border-white/10 text-white/60 px-3 py-1.5 rounded-full uppercase flex items-center gap-1.5">
                    <MapPin size={12} className="text-purple-400" /> {role.type}
                  </span>
                </div>
                <p className="text-white/50 text-sm leading-relaxed font-light">{role.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* Perks */}
          <div className="lg:col-span-5 p-8 md:p-10 rounded-[2rem] bg-gradient-to-br from-white/[0.03] to-white/[0.01] border border-white/[0.08] backdrop-blur-xl">
            <h2 className="text-2xl font-bold mb-8 flex items-center gap-3">
              <Award size={24} className="text-cyan-400" /> Why Work With Us?
            </h2>
            <ul className="space-y-6">
              {perks.map((perk, idx) => (
                <li key={idx} className="flex gap-4 text-sm text-white/70">
                  <span className="w-6 h-6 rounded-full bg-cyan-500/10 flex items-center justify-center text-cyan-400 text-xs shrink-0 font-bold">
                    ✓
                  </span>
                  <span className="font-light leading-relaxed">{perk}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Application Form */}
        <div className="max-w-4xl mx-auto border-t border-white/10 pt-32">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Apply Now</h2>
            <p className="text-white/40 text-lg mt-2">Ready to make an impact? Share your details below</p>
          </div>

          <div className="bg-white/[0.02] border border-white/10 rounded-[2.5rem] p-8 md:p-12 shadow-[0_0_100px_rgba(0,0,0,0.5)] backdrop-blur-xl relative overflow-hidden">
            <AnimatePresence mode="wait">
              {!submitted ? (
                <motion.form 
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit}
                  className="space-y-6"
                >
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-white/70">Your Name *</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        className={`w-full px-5 py-4 bg-black/40 border rounded-2xl focus:outline-none focus:border-purple-500 focus:bg-white/5 transition-all text-white placeholder:text-white/20 ${errors.name ? 'border-red-500/50' : 'border-white/10'}`}
                      />
                      {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name}</p>}
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-white/70">Email Address *</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        className={`w-full px-5 py-4 bg-black/40 border rounded-2xl focus:outline-none focus:border-purple-500 focus:bg-white/5 transition-all text-white placeholder:text-white/20 ${errors.email ? 'border-red-500/50' : 'border-white/10'}`}
                      />
                      {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email}</p>}
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-white/70">Role you are applying for *</label>
                      <select
                        name="role"
                        value={formData.role}
                        onChange={handleChange}
                        className="w-full px-5 py-4 bg-black/45 border border-white/10 rounded-2xl focus:outline-none focus:border-purple-500 focus:bg-white/5 transition-all text-white/80"
                      >
                        <option value="AI Automation Engineer">AI Automation Engineer</option>
                        <option value="Frontend Developer (Next.js / React)">Frontend Developer (Next.js / React)</option>
                        <option value="UI/UX Designer">UI/UX Designer</option>
                      </select>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-white/70">Portfolio / Github URL</label>
                      <input
                        type="url"
                        name="portfolio"
                        value={formData.portfolio}
                        onChange={handleChange}
                        placeholder="https://github.com/johndoe"
                        className="w-full px-5 py-4 bg-black/40 border border-white/10 rounded-2xl focus:outline-none focus:border-purple-500 focus:bg-white/5 transition-all text-white placeholder:text-white/20"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-white/70">Experience & Skills Summary *</label>
                    <textarea
                      name="experience"
                      rows={3}
                      value={formData.experience}
                      onChange={handleChange}
                      placeholder="Briefly state your years of experience, relevant tech stacks, and previous accomplishments..."
                      className={`w-full px-5 py-4 bg-black/40 border rounded-2xl focus:outline-none focus:border-purple-500 focus:bg-white/5 transition-all text-white placeholder:text-white/20 resize-none ${errors.experience ? 'border-red-500/50' : 'border-white/10'}`}
                    ></textarea>
                    {errors.experience && <p className="text-red-400 text-xs mt-1">{errors.experience}</p>}
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-white/70">Cover Letter (Optional)</label>
                    <textarea
                      name="coverLetter"
                      rows={4}
                      value={formData.coverLetter}
                      onChange={handleChange}
                      placeholder="Tell us why you want to build automated digital systems at KAVASI..."
                      className="w-full px-5 py-4 bg-black/40 border border-white/10 rounded-2xl focus:outline-none focus:border-purple-500 focus:bg-white/5 transition-all text-white placeholder:text-white/20 resize-none"
                    ></textarea>
                  </div>

                  {submitError && <p className="text-red-400 text-sm text-center">{submitError}</p>}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full py-4 bg-white text-black rounded-2xl font-bold flex items-center justify-center gap-2 hover:gap-4 transition-all hover:bg-purple-100 cursor-pointer shadow-[0_0_30px_rgba(255,255,255,0.15)] ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
                  >
                    {isSubmitting ? 'Submitting...' : 'Submit Application'} <ArrowRight size={20} />
                  </button>
                </motion.form>
              ) : (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12 space-y-6"
                >
                  <div className="w-20 h-20 bg-green-500/10 border border-green-500/30 rounded-full flex items-center justify-center mx-auto text-green-400">
                    <CheckCircle2 size={40} />
                  </div>
                  <h3 className="text-3xl font-bold">Application Received!</h3>
                  <p className="text-white/50 text-base max-w-md mx-auto font-light leading-relaxed">
                    Thank you for applying to KAVASI, <span className="text-white font-semibold">{formData.name}</span>. Our engineering team will review your credentials and reach out within 3-5 business days.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: '', email: '', role: 'AI Automation Engineer', portfolio: '', experience: '', coverLetter: '' });
                    }}
                    className="px-6 py-2.5 bg-white/5 border border-white/10 hover:border-white/30 text-white rounded-full text-sm font-medium transition-colors cursor-pointer"
                  >
                    Submit another response
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}
