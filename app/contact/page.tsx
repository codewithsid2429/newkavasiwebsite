'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, Mail, MessageCircle, ArrowRight, CheckCircle2 } from 'lucide-react';
import AnimatedBackground from '../../components/AnimatedBackground';
import { submitInquiry } from '../actions';
import { useTheme } from '../../components/ThemeProvider';

export default function Contact() {
  const { theme } = useTheme();
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
            GET IN TOUCH
          </span>
          <h1 className={`text-4xl md:text-6xl font-bold tracking-tight mb-6 ${
            theme === 'dark' ? 'text-white' : 'text-slate-900'
          }`}>
            Let's Build Something Great
          </h1>
          <p className={`text-lg md:text-xl leading-relaxed font-light ${
            theme === 'dark' ? 'text-white/50' : 'text-slate-600'
          }`}>
            Have a project in mind or want to automate your team's workflow? Drop us a line and let's craft an intelligent solution.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-16 items-start max-w-6xl mx-auto">
          {/* Info Blocks */}
          <div className="lg:col-span-5 space-y-10">
            <div>
              <h2 className={`text-3xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>Contact Info</h2>
              <p className={`font-light leading-relaxed ${theme === 'dark' ? 'text-white/40' : 'text-slate-600'}`}>
                Whether you have complete specifications or just an initial idea, reach out to schedule an automation briefing.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center gap-5 group">
                <div className={`w-14 h-14 rounded-2xl border flex items-center justify-center group-hover:bg-purple-500 transition-colors duration-500 shrink-0 ${
                  theme === 'dark' ? 'bg-white/5 border-white/10 text-white/60 group-hover:text-white' : 'bg-slate-100 border-slate-200 text-slate-700 group-hover:text-white'
                }`}>
                  <Phone size={24} />
                </div>
                <div>
                  <p className={`text-xs font-medium mb-1 tracking-wide uppercase ${theme === 'dark' ? 'text-white/40' : 'text-slate-500'}`}>Call us directly</p>
                  <a href="tel:+916394974200" className={`text-xl font-bold hover:text-purple-500 transition-colors ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>+91 63949 74200</a>
                </div>
              </div>
              
              <div className="flex items-center gap-5 group">
                <div className={`w-14 h-14 rounded-2xl border flex items-center justify-center group-hover:bg-pink-500 transition-colors duration-500 shrink-0 ${
                  theme === 'dark' ? 'bg-white/5 border-white/10 text-white/60 group-hover:text-white' : 'bg-slate-100 border-slate-200 text-slate-700 group-hover:text-white'
                }`}>
                  <Mail size={24} />
                </div>
                <div>
                  <p className={`text-xs font-medium mb-1 tracking-wide uppercase ${theme === 'dark' ? 'text-white/40' : 'text-slate-500'}`}>Email address</p>
                  <a href="mailto:hello@kavasi.com" className={`text-xl font-bold hover:text-pink-500 transition-colors ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>hello@kavasi.com</a>
                </div>
              </div>
              
              <div className="flex items-center gap-5 group">
                <div className={`w-14 h-14 rounded-2xl border flex items-center justify-center group-hover:bg-emerald-500 transition-colors duration-500 shrink-0 ${
                  theme === 'dark' ? 'bg-white/5 border-white/10 text-white/60 group-hover:text-white' : 'bg-slate-100 border-slate-200 text-slate-700 group-hover:text-white'
                }`}>
                  <MessageCircle size={24} />
                </div>
                <div>
                  <p className={`text-xs font-medium mb-1 tracking-wide uppercase ${theme === 'dark' ? 'text-white/40' : 'text-slate-500'}`}>WhatsApp</p>
                  <a href="https://wa.me/916394974200" target="_blank" className={`text-xl font-bold hover:text-emerald-500 transition-colors flex items-center gap-2 ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>
                    Start a chat <ArrowRight size={16} />
                  </a>
                </div>
              </div>
            </div>

            <div className={`p-8 rounded-3xl border ${
              theme === 'dark' ? 'bg-white/[0.01] border-white/5' : 'bg-white border-slate-200 shadow-md'
            }`}>
              <h4 className={`font-bold mb-2 ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>Base Pricing Reminder</h4>
              <p className={`text-sm leading-relaxed font-light ${theme === 'dark' ? 'text-white/40' : 'text-slate-600'}`}>
                Development projects start from <span className="font-semibold underline">₹15,000</span>, with continuous cloud maintenance and server administration available at <span className="font-semibold underline">₹5,000/year</span>.
              </p>
            </div>
          </div>

          {/* Form */}
          <div className={`lg:col-span-7 rounded-[2.5rem] border p-8 md:p-12 backdrop-blur-xl ${
            theme === 'dark'
              ? 'bg-white/[0.02] border-white/10 shadow-[0_0_100px_rgba(0,0,0,0.5)]'
              : 'bg-white border-slate-200 shadow-xl'
          }`}>
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
                      <label className={`text-sm font-semibold ${theme === 'dark' ? 'text-white/70' : 'text-slate-700'}`}>Your Name *</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        className={`w-full px-5 py-4 rounded-2xl border focus:outline-none focus:border-purple-500 transition-all ${
                          theme === 'dark'
                            ? 'bg-black/40 border-white/10 text-white placeholder:text-white/20'
                            : 'bg-slate-50 border-slate-300 text-slate-900 placeholder:text-slate-400'
                        } ${errors.name ? 'border-red-500' : ''}`}
                      />
                      {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name}</p>}
                    </div>

                    <div className="space-y-2">
                      <label className={`text-sm font-semibold ${theme === 'dark' ? 'text-white/70' : 'text-slate-700'}`}>Email Address *</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        className={`w-full px-5 py-4 rounded-2xl border focus:outline-none focus:border-purple-500 transition-all ${
                          theme === 'dark'
                            ? 'bg-black/40 border-white/10 text-white placeholder:text-white/20'
                            : 'bg-slate-50 border-slate-300 text-slate-900 placeholder:text-slate-400'
                        } ${errors.email ? 'border-red-500' : ''}`}
                      />
                      {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email}</p>}
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className={`text-sm font-semibold ${theme === 'dark' ? 'text-white/70' : 'text-slate-700'}`}>Organization / Company</label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="Acme Corp"
                        className={`w-full px-5 py-4 rounded-2xl border focus:outline-none focus:border-purple-500 transition-all ${
                          theme === 'dark'
                            ? 'bg-black/40 border-white/10 text-white placeholder:text-white/20'
                            : 'bg-slate-50 border-slate-300 text-slate-900 placeholder:text-slate-400'
                        }`}
                      />
                    </div>

                    <div className="space-y-2">
                      <label className={`text-sm font-semibold ${theme === 'dark' ? 'text-white/70' : 'text-slate-700'}`}>Service Required *</label>
                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className={`w-full px-5 py-4 rounded-2xl border focus:outline-none focus:border-purple-500 transition-all ${
                          theme === 'dark'
                            ? 'bg-neutral-900 border-white/10 text-white'
                            : 'bg-slate-50 border-slate-300 text-slate-900'
                        }`}
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
                      <label className={`text-sm font-semibold ${theme === 'dark' ? 'text-white/70' : 'text-slate-700'}`}>Estimated Project Budget</label>
                      <span className="text-lg font-bold text-purple-500 flex items-center gap-1">
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
                      className="w-full h-1.5 bg-purple-500/20 rounded-lg appearance-none cursor-pointer accent-purple-500 focus:outline-none"
                    />
                    <div className={`flex justify-between text-[10px] font-semibold tracking-wider ${theme === 'dark' ? 'text-white/30' : 'text-slate-400'}`}>
                      <span>₹15,000 (Min)</span>
                      <span>₹2,50,000+ (Max)</span>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className={`text-sm font-semibold ${theme === 'dark' ? 'text-white/70' : 'text-slate-700'}`}>Project Details *</label>
                    <textarea
                      name="details"
                      rows={4}
                      value={formData.details}
                      onChange={handleChange}
                      placeholder="Describe the scope of your project, key features required, and integration requests..."
                      className={`w-full px-5 py-4 rounded-2xl border focus:outline-none focus:border-purple-500 transition-all resize-none ${
                        theme === 'dark'
                          ? 'bg-black/40 border-white/10 text-white placeholder:text-white/20'
                          : 'bg-slate-50 border-slate-300 text-slate-900 placeholder:text-slate-400'
                      } ${errors.details ? 'border-red-500' : ''}`}
                    ></textarea>
                    {errors.details && <p className="text-red-400 text-xs mt-1">{errors.details}</p>}
                  </div>

                  {submitError && <p className="text-red-400 text-sm text-center">{submitError}</p>}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full py-4 rounded-2xl font-bold flex items-center justify-center gap-2 hover:gap-4 transition-all cursor-pointer shadow-lg ${
                      theme === 'dark'
                        ? 'bg-white text-black hover:bg-purple-100'
                        : 'bg-slate-900 text-white hover:bg-purple-600'
                    } ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
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
                  <div className="w-20 h-20 bg-green-500/10 border border-green-500/30 rounded-full flex items-center justify-center mx-auto text-green-500">
                    <CheckCircle2 size={40} />
                  </div>
                  <h3 className={`text-3xl font-bold ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>Inquiry Sent!</h3>
                  <p className={`text-base max-w-md mx-auto font-light leading-relaxed ${theme === 'dark' ? 'text-white/50' : 'text-slate-600'}`}>
                    Thank you, <span className="font-semibold">{formData.name}</span>. We have logged your request for <span className="font-semibold">{formData.service}</span>. A technical manager will review your submission and follow up shortly.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: '', email: '', company: '', service: 'Website Development', budget: 15000, details: '' });
                    }}
                    className={`px-6 py-2.5 border rounded-full text-sm font-medium transition-colors cursor-pointer ${
                      theme === 'dark' ? 'bg-white/5 border-white/10 text-white' : 'bg-slate-100 border-slate-300 text-slate-800'
                    }`}
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
