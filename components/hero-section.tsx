'use client';

import { motion, Variants } from 'framer-motion';
import { Star } from 'lucide-react';
import Image from 'next/image';

export default function HeroSection() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
  };

  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-background relative overflow-hidden">
      {/* Subtle modern pattern overlay instead of gradient blob */}
      <div className="absolute inset-0 z-0 opacity-[0.03] pattern-grid-lg"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            className="space-y-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-secondary text-sm font-medium text-secondary-foreground border border-border">
              <span className="flex items-center gap-1 text-yellow-500">
                <Star className="w-3.5 h-3.5 fill-current" />
                <Star className="w-3.5 h-3.5 fill-current" />
                <Star className="w-3.5 h-3.5 fill-current" />
                <Star className="w-3.5 h-3.5 fill-current" />
                <Star className="w-3.5 h-3.5 fill-current" />
              </span>
              <span className="opacity-80">4.9/5 on the App Store</span>
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-6">
              <h1 className="text-5xl sm:text-6xl lg:text-[4.5rem] font-bold text-foreground leading-[1.1] tracking-tight text-balance">
                Financial Freedom, <br />
                <span className="text-muted-foreground">Absolute Privacy.</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed text-pretty max-w-xl font-medium">
                The intelligent expense tracker built for freelancers. All your data stays securely on your device. Never synced, never sold.
              </p>
            </motion.div>

            {/* App Store Badges */}
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row flex-wrap gap-4 pt-4">
              <a
                href="https://apps.apple.com/app/expensenest/id6739261524"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="bg-foreground hover:bg-foreground/90 text-background gap-3 rounded-xl font-medium shadow-sm active:scale-[0.98] transition-all px-8 py-3.5 flex items-center justify-center sm:justify-start ring-1 ring-foreground/10">
                  <svg
                    className="w-6 h-6"
                    viewBox="0 0 384 512"
                    fill="currentColor"
                  >
                    <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z" />
                  </svg>
                  <div className="flex flex-col items-start">
                    <span className="text-[10px] leading-none opacity-80 uppercase tracking-wider">Download on the</span>
                    <span className="text-base font-semibold leading-none mt-1">App Store</span>
                  </div>
                </div>
              </a>
              <a
                href="https://play.google.com/store/apps/details?id=com.kodxe.expensenest"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="bg-background hover:bg-secondary border-2 border-border text-foreground gap-3 rounded-xl font-medium shadow-sm active:scale-[0.98] transition-all px-8 py-3.5 flex items-center justify-center sm:justify-start">
                  <svg
                    className="w-6 h-6"
                    viewBox="0 0 512 512"
                    fill="currentColor"
                  >
                    <path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z" />
                  </svg>
                  <div className="flex flex-col items-start">
                    <span className="text-[10px] leading-none opacity-80 uppercase tracking-wider">Get it on</span>
                    <span className="text-base font-semibold leading-none mt-1">Google Play</span>
                  </div>
                </div>
              </a>
            </motion.div>

            {/* Trust Signals */}
            <motion.div variants={itemVariants} className="pt-8 flex items-center gap-6 border-t border-border/50">
              <div className="flex flex-col">
                <span className="text-xl font-bold text-foreground">10k+</span>
                <span className="text-xs text-muted-foreground font-medium uppercase tracking-wider">Freelancers</span>
              </div>
              <div className="w-px h-8 bg-border/50"></div>
              <div className="flex flex-col">
                <span className="text-xl font-bold text-foreground">Offline</span>
                <span className="text-xs text-muted-foreground font-medium uppercase tracking-wider">First Architecture</span>
              </div>
              <div className="w-px h-8 bg-border/50"></div>
              <div className="flex flex-col">
                <div className="flex items-center gap-1 text-green-600">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path></svg>
                  <span className="text-xl font-bold">100%</span>
                </div>
                <span className="text-xs text-muted-foreground font-medium uppercase tracking-wider">Device Secure</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right - 3 Cascading App Mockups */}
          <div className="relative h-[500px] lg:h-[600px] flex items-center justify-center mt-12 lg:mt-0 w-full perspective-1000">

            {/* Left Mockup - Analytics (Hidden on mobile) */}
            <motion.div
              initial={{ opacity: 0, x: 100, y: 50, rotate: -15, scale: 0.8 }}
              animate={{ opacity: 1, x: -220, y: 20, rotate: -8, scale: 0.85 }}
              transition={{ duration: 1, delay: 0.1, type: "spring" }}
              className="absolute w-[280px] h-[580px] rounded-[3rem] bg-zinc-900 p-2 shadow-2xl border border-zinc-800 z-10 hidden md:block"
            >
              {/* Phone hardware frame */}
              <div className="absolute top-1/2 -right-2 w-1.5 h-16 bg-zinc-800 rounded-l-md -translate-y-1/2" />
              <div className="absolute top-32 -left-2 w-1.5 h-12 bg-zinc-800 rounded-r-md" />
              <div className="absolute top-48 -left-2 w-1.5 h-12 bg-zinc-800 rounded-r-md" />

              <div className="w-full h-full bg-zinc-950 rounded-[2.5rem] relative border border-zinc-800 overflow-hidden">
                <Image
                  src="/screenshots/projects.png"
                  alt="ExpenseNest Projects"
                  fill
                  className="object-cover object-bottom"
                />
              </div>
            </motion.div>

            {/* Right Mockup - Invoices (Hidden on mobile) */}
            <motion.div
              initial={{ opacity: 0, x: -100, y: 50, rotate: 15, scale: 0.8 }}
              animate={{ opacity: 1, x: 220, y: 40, rotate: 8, scale: 0.85 }}
              transition={{ duration: 1, delay: 0.2, type: "spring" }}
              className="absolute w-[280px] h-[580px] rounded-[3rem] bg-zinc-900 p-2 shadow-2xl border border-zinc-800 z-10 hidden md:block"
            >
              {/* Phone hardware frame */}
              <div className="absolute top-1/2 -right-2 w-1.5 h-16 bg-zinc-800 rounded-l-md -translate-y-1/2" />
              <div className="absolute top-32 -left-2 w-1.5 h-12 bg-zinc-800 rounded-r-md" />
              <div className="absolute top-48 -left-2 w-1.5 h-12 bg-zinc-800 rounded-r-md" />

              <div className="w-full h-full bg-zinc-950 rounded-[2.5rem] relative border border-zinc-800 overflow-hidden">
                <Image
                  src="/screenshots/invoices.png"
                  alt="ExpenseNest Invoices"
                  fill
                  className="object-cover object-bottom"
                />
              </div>
            </motion.div>

            {/* Center Main Mockup - Dashboard */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3, type: "spring" }}
              className="relative w-[280px] h-[580px] rounded-[3rem] bg-zinc-900 p-2 shadow-2xl border border-zinc-800 z-20"
            >
              {/* Phone hardware frame */}
              <div className="absolute top-1/2 -right-2 w-1.5 h-16 bg-zinc-800 rounded-l-md -translate-y-1/2" />
              <div className="absolute top-32 -left-2 w-1.5 h-12 bg-zinc-800 rounded-r-md" />
              <div className="absolute top-48 -left-2 w-1.5 h-12 bg-zinc-800 rounded-r-md" />

              <div className="w-full h-full bg-zinc-950 rounded-[2.5rem] relative border border-zinc-800 overflow-hidden">
                <Image
                  src="/screenshots/dashboard.png"
                  alt="ExpenseNest Dashboard"
                  fill
                  className="object-cover object-bottom"
                  priority
                />
              </div>
            </motion.div>

            {/* Glowing Backdrop */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-md h-[400px] bg-foreground/10 dark:bg-foreground/5 blur-[100px] rounded-full -z-20 pointer-events-none" />
          </div>
        </div>
      </div>
    </section>
  );
}
