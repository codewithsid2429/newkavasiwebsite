'use client';

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import Logo from './Logo';

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'Services', path: '/services' },
  { name: 'Portfolio', path: '/portfolio' },
  { name: 'About', path: '/about' },
  { name: 'Careers', path: '/careers' },
  { name: 'Contact', path: '/contact' },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when page changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  return (
    <motion.nav
      suppressHydrationWarning
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled || isMenuOpen
          ? 'bg-black/95 backdrop-blur-xl border-b border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.8)]'
          : 'bg-black/40 backdrop-blur-md'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-3.5 md:py-4 flex justify-between items-center" suppressHydrationWarning>
        <Link href="/">
          <motion.div
            className="flex items-center cursor-pointer"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            <Logo heightClass="h-11 md:h-14" />
          </motion.div>
        </Link>

        <div className="hidden md:flex gap-8 text-sm font-medium items-center">
          {navItems.map((item) => {
            const isActive = pathname === item.path;
            return (
              <Link
                key={item.name}
                href={item.path}
                className={`relative py-1 font-medium transition-colors ${
                  isActive ? 'text-white font-semibold' : 'text-white/70 hover:text-white'
                }`}
              >
                {item.name}
                {isActive && (
                  <motion.div
                    layoutId="activeNavIndicator"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            );
          })}
        </div>

        <div className="hidden md:flex items-center gap-4">
          <Link href="/contact">
            <button className="px-6 py-2.5 rounded-full text-sm font-medium transition-all cursor-pointer border border-white/20 text-white hover:bg-white hover:text-black hover:border-white shadow-[0_0_20px_rgba(255,255,255,0.15)]">
              Get in touch
            </button>
          </Link>
        </div>

        {/* Mobile controls */}
        <div className="flex md:hidden items-center gap-3" suppressHydrationWarning>
          <button
            suppressHydrationWarning
            aria-label="Open menu"
            className="p-2 rounded-xl transition-colors text-white hover:bg-white/10"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            suppressHydrationWarning
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden p-6 flex flex-col gap-4 overflow-hidden backdrop-blur-xl border-b bg-black/95 border-white/10 text-white"
          >
            {navItems.map((item) => {
              const isActive = pathname === item.path;
              return (
                <Link
                  key={item.name}
                  href={item.path}
                  className={`text-lg font-medium py-1 transition-colors ${
                    isActive ? 'text-purple-400 font-bold' : 'text-white/70 hover:text-white'
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}
            <Link href="/contact" className="mt-2">
              <button className="w-full px-5 py-2.5 rounded-full text-sm font-medium transition-all border border-white/20 text-white hover:bg-white hover:text-black">
                Get in touch
              </button>
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
