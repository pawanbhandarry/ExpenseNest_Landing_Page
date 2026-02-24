'use client';

import { motion } from 'framer-motion';
import { FolderPlus, TrendingUp, FileCheck } from 'lucide-react';

const steps = [
  {
    number: '1',
    icon: FolderPlus,
    title: 'Create a Project',
    description: 'Set your budget and add client details to get started.',
  },
  {
    number: '2',
    icon: TrendingUp,
    title: 'Log Expenses & Track Time',
    description: 'Add receipts and costs on the go with our mobile app.',
  },
  {
    number: '3',
    icon: FileCheck,
    title: 'Invoice & Get Paid',
    description: 'Generate professional invoices instantly from tracked data.',
  },
];

export default function HowItWorks() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { type: "spring" as const, stiffness: 100, damping: 15 }
    }
  };

  return (
    <section id="how-it-works" className="py-24 px-4 sm:px-6 lg:px-8 bg-zinc-50 dark:bg-zinc-900/20 border-y border-border/50">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <span className="inline-block px-3 py-1 rounded-md bg-secondary text-secondary-foreground text-xs font-bold uppercase tracking-widest mb-4">
              How It Works
            </span>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-foreground mb-4 text-balance tracking-tight">
              Get Started in Three Steps
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty font-medium">
              Organize your freelance finances in minutes with our intuitive process
            </p>
          </motion.div>
        </div>

        {/* Steps Container */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="relative group"
              >
                {/* Visual Line connecting steps (desktop) */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-12 left-[60%] w-[80%] h-px bg-border/80 border-dashed border-t-2" />
                )}

                {/* Step Card */}
                <div className="relative bg-background rounded-3xl p-8 border border-border/60 hover:border-foreground/20 transition-all duration-300 hover:shadow-xl mt-8 md:mt-0">
                  {/* Step Number Badge */}
                  <div className="absolute -top-6 left-8">
                    <div className="w-12 h-12 rounded-2xl bg-foreground flex items-center justify-center shadow-lg">
                      <span className="text-xl font-bold text-background">
                        {step.number}
                      </span>
                    </div>
                  </div>

                  {/* Icon */}
                  <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center mb-6 mt-4">
                    <Icon className="w-6 h-6 text-foreground" />
                  </div>

                  {/* Text */}
                  <h3 className="text-xl font-bold text-foreground mb-3 tracking-tight">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed font-medium">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
