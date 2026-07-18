'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import Logo from './Logo';

export default function Footer() {
  return (
    <footer suppressHydrationWarning className="pt-20 pb-10 px-6 md:px-10 border-t border-white/10 bg-black text-white z-10 relative">
      <div className="max-w-7xl mx-auto" suppressHydrationWarning>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-16" suppressHydrationWarning>
          <div className="lg:col-span-5 relative pr-8">
            <div className="mb-6 flex items-center">
              <Link href="/">
                <Logo heightClass="h-12 md:h-15" />
              </Link>
            </div>
            <p className="text-sm text-white/50 max-w-sm mb-8 leading-relaxed">
              We build AI-powered systems that help your business scale efficiently. From landing pages to complex backend automations, let's create something extraordinary together.
            </p>
            <div className="flex gap-4" suppressHydrationWarning>
              {['twitter', 'linkedin', 'instagram', 'github'].map((social, idx) => (
                <a
                  key={social}
                  href="#"
                  aria-label={social}
                  suppressHydrationWarning
                  className="w-11 h-11 rounded-full flex items-center justify-center border border-white/10 bg-white/5 text-white/60 hover:bg-purple-500 hover:text-white hover:border-transparent transition-all group"
                >
                  {idx === 0 && (
                    <svg fill="currentColor" viewBox="0 0 24 24" width={18} height={18} className="group-hover:scale-110 transition-transform"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>
                  )}
                  {idx === 1 && (
                    <svg fill="currentColor" viewBox="0 0 24 24" width={18} height={18} className="group-hover:scale-110 transition-transform"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                  )}
                  {idx === 2 && (
                    <svg fill="currentColor" viewBox="0 0 24 24" width={18} height={18} className="group-hover:scale-110 transition-transform"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.258.058 1.936.262 2.39.438.563.22.964.483 1.393.91.428.428.69.829.911 1.393.176.452.38 1.13.438 2.388.058 1.265.07 1.645.07 4.848s-.012 3.583-.07 4.848c-.058 1.258-.262 1.936-.438 2.388-.22.563-.483.964-.91 1.393-.429.428-.829.69-1.394.91-.453.176-1.125.38-2.388.438-1.265.059-1.645.07-4.85.07s-3.584-.011-4.85-.07c-1.258-.058-1.936-.262-2.388-.438-.565-.22-.966-.483-1.393-.91-.428-.429-.69-.829-.91-1.393-.176-.453-.38-1.125-.438-2.388-.059-1.265-.07-1.645-.07-4.848s.011-3.583.07-4.848c.058-1.258.262-1.936.438-2.388.22-.563.483-.966.91-1.393.429-.428.829-.69 1.393-.91.453-.176 1.13-.38 2.388-.438 1.266-.058 1.646-.07 4.85-.07zm0-2.163C8.756 0 8.35.013 7.054.072 5.76.13 4.877.334 4.148.618c-.76.297-1.405.688-2.05 1.332C1.455 2.595 1.064 3.24.767 4.001.483 4.73.28 5.612.22 6.906.16 8.204.147 8.61.147 11.838c0 3.23.013 3.635.072 4.933.059 1.294.263 2.176.547 2.905.297.76.688 1.405 1.332 2.05.644.646 1.29.037 2.05 1.334.73.284 1.611.487 2.906.546 1.297.059 1.703.072 4.933.072s3.636-.013 4.934-.072c1.295-.059 2.176-.262 2.905-.546.76-.297 1.405-.688 2.05-1.334.644-.645 1.037-1.29 1.334-2.05.284-.73.487-1.611.545-2.905.059-1.298.072-1.703.072-4.933s-.013-3.634-.072-4.932c-.058-1.295-.261-2.176-.545-2.905-.297-.761-.69-1.406-1.334-2.051-.645-.644-1.29-.037-2.05-1.334C18.172.334 17.29.13 16.03.072 14.734.013 14.328 0 11.097 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zm0 10.162a4 4 0 110-8 4 4 0 010 8zm3.98-9.022a1.44 1.44 0 100-2.88 1.44 1.44 0 000 2.88z"/></svg>
                  )}
                  {idx === 3 && (
                    <svg fill="currentColor" viewBox="0 0 24 24" width={18} height={18} className="group-hover:scale-110 transition-transform"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                  )}
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-2">
            <h4 className="font-bold text-white mb-6 uppercase tracking-wider text-xs">
              Company
            </h4>
            <ul className="space-y-3.5 text-sm font-medium text-white/50">
              <li><Link href="/" className="hover:text-purple-400 transition-colors">Home</Link></li>
              <li><Link href="/services" className="hover:text-purple-400 transition-colors">Services</Link></li>
              <li><Link href="/portfolio" className="hover:text-purple-400 transition-colors">Portfolio</Link></li>
              <li><Link href="/about" className="hover:text-purple-400 transition-colors">About</Link></li>
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="font-bold text-white mb-6 uppercase tracking-wider text-xs">
              Resources
            </h4>
            <ul className="space-y-3.5 text-sm font-medium text-white/50">
              <li>
                <Link href="/careers" className="hover:text-purple-400 transition-colors flex items-center gap-2">
                  Careers
                  <span className="text-[9px] bg-purple-500/20 text-purple-300 px-2 py-0.5 rounded-full border border-purple-500/30 uppercase tracking-widest font-bold">
                    Hiring
                  </span>
                </Link>
              </li>
              <li><Link href="/contact" className="hover:text-purple-400 transition-colors">Contact</Link></li>
              <li><Link href="/privacy" className="hover:text-purple-400 transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-purple-400 transition-colors">Terms of Service</Link></li>
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h4 className="font-bold text-white mb-6 uppercase tracking-wider text-xs">
              Subscribe
            </h4>
            <p className="text-sm text-white/50 mb-4">
              Get the latest insights on AI and web development directly to your inbox.
            </p>
            <div className="flex gap-2" suppressHydrationWarning>
              <input
                type="email"
                placeholder="Email address"
                className="w-full px-4 py-3 rounded-xl border border-white/10 bg-white/5 text-white placeholder:text-white/30 focus:outline-none focus:border-purple-500 transition-all text-sm"
              />
              <button
                suppressHydrationWarning
                aria-label="Subscribe"
                className="px-4 py-3 rounded-xl font-bold bg-white text-black hover:bg-purple-100 transition-colors cursor-pointer"
              >
                <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-medium text-white/40">
          <p>© {new Date().getFullYear()} KAVASI — AI-Powered Digital Agency. All rights reserved.</p>
          <div className="flex items-center gap-1">
            <span>Designed with</span>
            <span className="text-red-500 animate-pulse">❤️</span>
            <span>for unparalleled growth.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
