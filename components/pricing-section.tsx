'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';

const plans = [
  {
    name: 'Free Tier',
    price: '$0',
    description: 'Perfect for getting started',
    features: [
      'Expense tracking & categorization',
      'Up to 5 projects',
      'Up to 5 invoices',
      'Dashboard & basic analytics',
      'Works completely offline',
      'Private & secure (local storage only)',
    ],
    highlighted: false,
  },
  {
    name: 'Premium Pro',
    price: '$4.99',
    period: '/month',
    description: 'Unlock full potential with AI',
    features: [
      'Unlimited projects & invoices',
      '20+ professional invoice templates',
      'AI Financial Advisor "Rasa"',
      'Advanced analytics & reports',
      'Import & export data',
      'Works completely offline',
      'Private & secure (local storage only)',
    ],
    highlighted: true,
  },
];

export default function PricingSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 30 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { type: "spring" as const, stiffness: 80, damping: 15 }
    }
  };

  return (
    <section id="pricing" className="py-24 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <span className="inline-block px-3 py-1 rounded-md bg-secondary text-secondary-foreground text-xs font-bold uppercase tracking-widest mb-4">
              Pricing
            </span>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-foreground mb-4 text-balance tracking-tight">
              Honest, Transparent Pricing
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty font-medium">
              Choose the plan that fits your needs. No hidden fees, no shady tracking.
            </p>
          </motion.div>
        </div>

        {/* Pricing Cards */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={`relative h-full rounded-3xl p-8 border transition-all duration-500 ${plan.highlighted
                  ? 'border-foreground bg-zinc-900 text-zinc-50 shadow-2xl scale-100 md:scale-105 z-10'
                  : 'border-border bg-background hover:border-foreground/30 hover:shadow-xl'
                }`}
            >
              {/* Popular Badge */}
              {plan.highlighted && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-foreground text-background px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest">
                    Most Popular
                  </div>
                </div>
              )}

              {/* Plan Name */}
              <h3 className={`text-2xl font-bold mb-2 tracking-tight ${plan.highlighted ? 'text-zinc-50' : 'text-foreground'}`}>
                {plan.name}
              </h3>
              <p className={`text-sm mb-8 font-medium ${plan.highlighted ? 'text-zinc-400' : 'text-muted-foreground'}`}>
                {plan.description}
              </p>

              {/* Price */}
              <div className="mb-8">
                <span className={`text-5xl font-extrabold tracking-tight ${plan.highlighted ? 'text-white' : 'text-foreground'}`}>
                  {plan.price}
                </span>
                {plan.period && (
                  <span className={`ml-2 font-medium ${plan.highlighted ? 'text-zinc-400' : 'text-muted-foreground'}`}>
                    {plan.period}
                  </span>
                )}
              </div>

              {/* CTA Button */}
              <Button
                className={`w-full mb-8 font-bold rounded-xl h-12 transition-all active:scale-[0.98] ${plan.highlighted
                    ? 'bg-white text-zinc-900 hover:bg-zinc-200'
                    : 'bg-foreground text-background hover:bg-foreground/90'
                  }`}
              >
                {plan.highlighted ? 'Start Premium Trial' : 'Get Started for Free'}
              </Button>

              {/* Features List */}
              <div className="space-y-4">
                {plan.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-start gap-3">
                    <div className={`mt-1 w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 ${plan.highlighted ? 'bg-zinc-800' : 'bg-secondary'
                      }`}>
                      <Check className={`w-3 h-3 ${plan.highlighted ? 'text-zinc-300' : 'text-foreground'}`} />
                    </div>
                    <span className={`text-sm font-medium ${plan.highlighted ? 'text-zinc-300' : 'text-foreground/80'}`}>
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* FAQ Link */}
        <div className="text-center mt-16">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-muted-foreground font-medium"
          >
            Questions about pricing?{' '}
            <a href="#faq" className="text-foreground hover:underline font-bold">
              Check our FAQ
            </a>
          </motion.p>
        </div>
      </div>
    </section>
  );
}
