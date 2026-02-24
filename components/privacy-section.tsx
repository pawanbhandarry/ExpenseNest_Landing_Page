'use client';

import { motion } from 'framer-motion';
import { Shield, Lock, Smartphone, Eye } from 'lucide-react';

const benefits = [
  {
    icon: Shield,
    title: 'Private & Secure',
    description: 'Your financial data never leaves your device. No cloud sync, no data collection.',
  },
  {
    icon: Lock,
    title: 'No Tracking',
    description: 'We don\'t track your spending habits or sell your data to third parties.',
  },
  {
    icon: Smartphone,
    title: 'Works Offline',
    description: 'Full functionality without internet. Perfect for on-the-go expense tracking.',
  },
  {
    icon: Eye,
    title: 'Complete Control',
    description: 'You own your data. Manage, export, or delete anytime with no questions asked.',
  },
];

export default function PrivacySection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring" as const, stiffness: 80, damping: 15 }
    }
  };

  return (
    <section id="privacy" className="py-24 px-4 sm:px-6 lg:px-8 bg-zinc-900 text-zinc-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-zinc-800/30 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-zinc-800/30 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/3 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left - Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-zinc-800 mb-6 border border-zinc-700">
              <Shield className="w-6 h-6 text-zinc-300" />
            </div>
            <h2 className="text-4xl sm:text-5xl font-extrabold mb-6 tracking-tight text-balance">
              Your Data, <br />
              <span className="text-zinc-400 font-medium">Your Control.</span>
            </h2>
            <p className="text-lg text-zinc-400 max-w-xl text-pretty leading-relaxed mb-8">
              ExpenseNest is built exclusively on privacy-first principles. We believe your financial data belongs to you alone. That's why everything stays encrypted directly on your device with zero cloud tracking.
            </p>
            <div className="flex items-center gap-4 text-sm font-semibold tracking-wider uppercase text-zinc-500">
              <span>Encrypted</span>
              <div className="w-1.5 h-1.5 rounded-full bg-zinc-700" />
              <span>Offline First</span>
              <div className="w-1.5 h-1.5 rounded-full bg-zinc-700" />
              <span>Zero Tracking</span>
            </div>
          </motion.div>

          {/* Right - Grid */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="p-6 rounded-3xl bg-zinc-800/50 border border-zinc-700/50 backdrop-blur-sm hover:bg-zinc-800 transition-colors"
                >
                  <div className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-zinc-700/50 mb-4">
                    <Icon className="w-5 h-5 text-zinc-300" />
                  </div>
                  <h3 className="text-lg font-bold mb-2 tracking-tight">
                    {benefit.title}
                  </h3>
                  <p className="text-sm text-zinc-400 leading-relaxed">
                    {benefit.description}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
