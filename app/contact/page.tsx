'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, Mail, MessageCircle, ArrowRight, CheckCircle2, DollarSign } from 'lucide-react';
import AnimatedBackground from '../../components/AnimatedBackground';
import { submitInquiry } from '../actions';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: 'Website Development',
    budget: 15000,
    details: ''
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ 
      ...prev, 
      [name]: name === 'budget' ? Number(value) : value 
    }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({ ...prev, budget: Number(e.target.value) }));
  };

  const validate = () => {
    const tempErrors: Record<string, string> = {};
    if (!formData.name.trim()) tempErrors.name = "Name is required.";
    if (!formData.email.trim()) {
      tempErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = "Email is invalid.";
    }
    if (!formData.details.trim()) tempErrors.details = "Project details are required.";

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setIsSubmitting(true);
      setSubmitError('');
      const res = await submitInquiry(formData);
      setIsSubmitting(false);
      if (res.success) {
        setSubmitted(true);
      } else {
        setSubmitError(res.error || 'Failed to send inquiry. Please try again.');
      }
    }
  };

  const formatBudget = (value: number) => {
    if (value >= 250000) return "₹2,50,000+";
    return `₹${value.toLocaleString('en-IN')}`;
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
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-white/5 text-purple-400 text-xs font-semibold tracking-wider mb-6 border border-white/10 backdrop-blur-md">
            GET IN TOUCH
          </span>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 bg-gradient-to-r from-white via-white to-white/60 bg-clip-text text-transparent">
            Let's Build Something Great
          </h1>
          <p className="text-lg md:text-xl text-white/50 leading-relaxed font-light">
            Have a project in mind or want to automate your team's workflow? Drop us a line and let's craft an intelligent solution.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-16 items-start max-w-6xl mx-auto">
          {/* Info Blocks */}
          <div className="lg:col-span-5 space-y-10">
            <div>
              <h2 className="text-3xl font-bold mb-4">Contact Info</h2>
              <p className="text-white/40 font-light leading-relaxed">
                Whether you have complete specifications or just an initial idea, reach out to schedule an automation briefing.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center gap-5 group">
                <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center group-hover:bg-purple-500 transition-colors duration-500 border border-white/10 shrink-0">
                  <Phone size={24} className="text-white/60 group-hover:text-white transition-colors" />
                </div>
                <div>
                  <p className="text-white/40 text-xs font-medium mb-1 tracking-wide uppercase">Call us directly</p>
                  <a href="tel:+916394974200" className="text-xl font-bold hover:text-purple-400 transition-colors">+91 63949 74200</a>
                </div>
              </div>
              
              <div className="flex items-center gap-5 group">
                <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center group-hover:bg-pink-500 transition-colors duration-500 border border-white/10 shrink-0">
                  <Mail size={24} className="text-white/60 group-hover:text-white transition-colors" />
                </div>
                <div>
                  <p className="text-white/40 text-xs font-medium mb-1 tracking-wide uppercase">Email address</p>
                  <a href="mailto:hello@kavasi.com" className="text-xl font-bold hover:text-pink-400 transition-colors">hello@kavasi.com</a>
                </div>
              </div>
              
              <div className="flex items-center gap-5 group">
                <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center group-hover:bg-green-500 transition-colors duration-500 border border-white/10 shrink-0">
                  <MessageCircle size={24} className="text-white/60 group-hover:text-white transition-colors" />
                </div>
                <div>
                  <p className="text-white/40 text-xs font-medium mb-1 tracking-wide uppercase">WhatsApp</p>
                  <a href="https://wa.me/916394974200" target="_blank" className="text-xl font-bold hover:text-green-400 transition-colors flex items-center gap-2">
                    Start a chat <ArrowRight size={16} />
                  </a>
                </div>
              </div>
            </div>

            <div className="p-8 rounded-3xl bg-white/[0.01] border border-white/5">
              <h4 className="font-bold text-white mb-2">Base Pricing Reminder</h4>
              <p className="text-white/40 text-sm leading-relaxed font-light">
                Development projects start from <span className="text-white font-semibold">₹15,000</span>, with continuous cloud maintenance and server administration available at <span className="text-white font-semibold">₹5,000/year</span>.
              </p>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-7 bg-white/[0.02] border border-white/10 rounded-[2.5rem] p-8 md:p-12 shadow-[0_0_100px_rgba(0,0,0,0.5)] backdrop-blur-xl">
            <AnimatePresence mode="wait">
              {!submitted ? (
                <motion.form 
                  key="contact-form"
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
                      <label className="text-sm font-semibold text-white/70">Organization / Company</label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="Acme Corp"
                        className="w-full px-5 py-4 bg-black/40 border border-white/10 rounded-2xl focus:outline-none focus:border-purple-500 focus:bg-white/5 transition-all text-white placeholder:text-white/20"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-white/70">Service Required *</label>
                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full px-5 py-4 bg-black/45 border border-white/10 rounded-2xl focus:outline-none focus:border-purple-500 focus:bg-white/5 transition-all text-white/80"
                      >
                        <option value="Website Development">Website Development</option>
                        <option value="AI Automation">AI Automation</option>
                        <option value="Custom Tech Solutions">Custom Tech Solutions</option>
                        <option value="UI/UX Design">UI/UX Design</option>
                      </select>
                    </div>
                  </div>

                  {/* Budget Slider */}
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <label className="text-sm font-semibold text-white/70">Estimated Project Budget</label>
                      <span className="text-lg font-bold text-purple-400 flex items-center gap-1">
                        {formatBudget(formData.budget)}
                      </span>
                    </div>
                    <input
                      type="range"
                      min="15000"
                      max="250000"
                      step="5000"
                      value={formData.budget}
                      onChange={handleSliderChange}
                      className="w-full h-1.5 bg-white/10 rounded-lg appearance-none cursor-pointer accent-purple-500 focus:outline-none"
                    />
                    <div className="flex justify-between text-[10px] text-white/30 font-semibold tracking-wider">
                      <span>₹15,000 (Min)</span>
                      <span>₹2,50,000+ (Max)</span>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-white/70">Project Details *</label>
                    <textarea
                      name="details"
                      rows={4}
                      value={formData.details}
                      onChange={handleChange}
                      placeholder="Describe the scope of your project, key features required, and integration requests..."
                      className={`w-full px-5 py-4 bg-black/40 border rounded-2xl focus:outline-none focus:border-purple-500 focus:bg-white/5 transition-all text-white placeholder:text-white/20 resize-none ${errors.details ? 'border-red-500/50' : 'border-white/10'}`}
                    ></textarea>
                    {errors.details && <p className="text-red-400 text-xs mt-1">{errors.details}</p>}
                  </div>

                  {submitError && <p className="text-red-400 text-sm text-center">{submitError}</p>}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full py-4 bg-white text-black rounded-2xl font-bold flex items-center justify-center gap-2 hover:gap-4 transition-all hover:bg-purple-100 cursor-pointer shadow-[0_0_30px_rgba(255,255,255,0.15)] ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
                  >
                    {isSubmitting ? 'Sending...' : 'Send Project Inquiry'} <ArrowRight size={20} />
                  </button>
                </motion.form>
              ) : (
                <motion.div
                  key="contact-success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12 space-y-6"
                >
                  <div className="w-20 h-20 bg-green-500/10 border border-green-500/30 rounded-full flex items-center justify-center mx-auto text-green-400">
                    <CheckCircle2 size={40} />
                  </div>
                  <h3 className="text-3xl font-bold">Inquiry Sent!</h3>
                  <p className="text-white/50 text-base max-w-md mx-auto font-light leading-relaxed">
                    Thank you, <span className="text-white font-semibold">{formData.name}</span>. We have logged your request for <span className="text-white font-semibold">{formData.service}</span>. A technical manager will review your submission and follow up shortly.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: '', email: '', company: '', service: 'Website Development', budget: 15000, details: '' });
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
