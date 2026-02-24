'use client';

import { motion } from 'framer-motion';
import { FolderOpen, FileText, Zap, ShieldCheck } from 'lucide-react';

const features = [
  {
    icon: FolderOpen,
    title: 'Project-Based Tracking',
    description: 'Organize expenses and income by specific client projects, not just random categories.',
    color: 'bg-indigo-500/10 text-indigo-600 dark:text-indigo-400',
    borderColor: 'border-indigo-500/20'
  },
  {
    icon: FileText,
    title: 'Smart Invoicing',
    description: 'Create professional invoices with 20+ templates. Works offline, keeps data private.',
    color: 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400',
    borderColor: 'border-emerald-500/20'
  },
  {
    icon: Zap,
    title: 'Rasa AI Advisor',
    description: 'Premium AI assistant that analyzes spending habits and provides personalized insights.',
    color: 'bg-blue-500/10 text-blue-600 dark:text-blue-400',
    borderColor: 'border-blue-500/20'
  },
  {
    icon: ShieldCheck,
    title: 'Absolute Privacy',
    description: 'Complete offline functionality. Your data stays on your device. No tracking, no cloud sync.',
    color: 'bg-rose-500/10 text-rose-600 dark:text-rose-400',
    borderColor: 'border-rose-500/20'
  },
];

export default function FeaturesSection() {
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
      transition: { type: "spring", stiffness: 80, damping: 15 }
    }
  };

  return (
    <section id="features" className="py-24 px-4 sm:px-6 lg:px-8 bg-background relative">
      <div className="absolute top-0 inset-x-0 h-px bg-border/40" />

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <span className="inline-block px-3 py-1 rounded-md bg-secondary text-secondary-foreground text-xs font-bold uppercase tracking-widest mb-4">
              Premium Features
            </span>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-foreground mb-6 text-balance tracking-tight">
              Powerful Tools Built <br />
              <span className="text-muted-foreground font-medium">for Financial Freedom</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty font-medium leading-relaxed">
              Designed exclusively for independent professionals who value their privacy, security, and time.
            </p>
          </motion.div>
        </div>

        {/* Features Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`group relative p-8 rounded-3xl bg-background border ${feature.borderColor} hover:border-foreground/20 transition-all duration-300 hover:shadow-xl hover:-translate-y-1`}
              >
                {/* Icon Background */}
                <div className={`w-14 h-14 rounded-2xl ${feature.color} flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300`}>
                  <Icon className="w-7 h-7" strokeWidth={2} />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-foreground mb-3 tracking-tight">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed font-medium">
                  {feature.description}
                </p>

                {/* Subtle gradient hover effect */}
                <div className="absolute inset-0 rounded-3xl bg-secondary/0 group-hover:bg-secondary/20 transition-all duration-300 pointer-events-none" />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
