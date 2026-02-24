'use client';

import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

const navLinks = [
  { label: 'Features', href: '/#features' },
  { label: 'Privacy', href: '/#privacy' },
  { label: 'Pricing', href: '/#pricing' },
  { label: 'FAQ', href: '/faq' },
];

export default function FloatingNavbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
        setIsMobileOpen(false);
      } else {
        setIsVisible(true);
      }

      setIsScrolled(currentScrollY > 50);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <>
      <AnimatePresence>
        {isVisible && (
          <motion.nav
            initial={{ y: -50, opacity: 0, filter: "blur(10px)" }}
            animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
            exit={{ y: -50, opacity: 0, filter: "blur(10px)" }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="fixed top-0 left-0 right-0 z-50 pt-6 px-4 pointer-events-none flex justify-center"
          >
            <div
              className={`pointer-events-auto transition-all duration-500 overflow-hidden ${isScrolled
                  ? 'bg-background/80 backdrop-blur-xl border border-border/50 shadow-[0_8px_30px_rgb(0,0,0,0.08)] rounded-full w-full max-w-4xl'
                  : 'bg-transparent border-transparent w-full max-w-7xl'
                }`}
            >
              <div className={`flex items-center justify-between transition-all duration-300 ${isScrolled ? 'px-6 py-3' : 'px-2 py-2'}`}>
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2 group">
                  <span className="font-extrabold tracking-tight text-xl text-foreground px-2 py-1">
                    ExpenseNest
                  </span>
                </Link>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-1">
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="px-4 py-2 text-sm font-semibold text-muted-foreground hover:text-foreground hover:bg-muted/50 rounded-full transition-all"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>

                {/* CTA & Mobile Toggle */}
                <div className="flex items-center gap-3">
                  <Link
                    href="/#pricing"
                    className="hidden sm:flex px-5 py-2.5 text-sm font-bold bg-foreground text-background rounded-full hover:bg-foreground/90 transition-all active:scale-95"
                  >
                    Get Started
                  </Link>

                  <button
                    onClick={() => setIsMobileOpen(!isMobileOpen)}
                    className="md:hidden p-2.5 bg-muted/50 rounded-full hover:bg-muted transition-colors active:scale-95"
                    aria-label="Toggle menu"
                  >
                    {isMobileOpen ? (
                      <X className="w-5 h-5 text-foreground" />
                    ) : (
                      <Menu className="w-5 h-5 text-foreground" />
                    )}
                  </button>
                </div>
              </div>

              {/* Mobile Menu */}
              <AnimatePresence>
                {isMobileOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="md:hidden border-t border-border/50 bg-background/95 backdrop-blur-xl"
                  >
                    <div className="px-6 py-4 flex flex-col gap-2">
                      {navLinks.map((link) => (
                        <Link
                          key={link.href}
                          href={link.href}
                          onClick={() => setIsMobileOpen(false)}
                          className="px-4 py-3 text-sm font-bold text-foreground hover:bg-muted rounded-xl transition-colors"
                        >
                          {link.label}
                        </Link>
                      ))}
                      <Link
                        href="/#pricing"
                        onClick={() => setIsMobileOpen(false)}
                        className="mt-2 px-4 py-3 text-sm font-bold bg-foreground text-background rounded-xl text-center transition-colors"
                      >
                        Get Started
                      </Link>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
      <div className="h-24" />
    </>
  );
}
