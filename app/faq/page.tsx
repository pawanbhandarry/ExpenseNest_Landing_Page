'use client';

import { useState } from 'react';
import { ArrowLeft, ChevronDown } from 'lucide-react';
import Link from 'next/link';
import FloatingNavbar from '@/components/floating-navbar';
import Footer from '@/components/footer';
import { motion, AnimatePresence } from 'framer-motion';

interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'general' | 'privacy' | 'features' | 'pricing';
}

const faqItems: FAQItem[] = [
  {
    id: 'general-1',
    category: 'general',
    question: 'What is ExpenseNest?',
    answer: 'ExpenseNest is a private, offline-first expense tracker designed specifically for freelancers. It helps you manage projects, track expenses, generate invoices, and gain AI-powered financial insights—all while keeping your data completely private and secure on your device.',
  },
  {
    id: 'privacy-1',
    category: 'privacy',
    question: 'Is my data really private?',
    answer: 'Yes, absolutely. All your financial data is stored locally on your device and never transmitted to our servers. We do not collect, access, or track any of your financial information. Your data stays under your complete control at all times.',
  },
  {
    id: 'privacy-2',
    category: 'privacy',
    question: 'Does ExpenseNest work offline?',
    answer: 'Yes, ExpenseNest is designed to work completely offline. You can manage your expenses, projects, and invoices without an internet connection. Your data is stored on your device and remains accessible at all times.',
  },
  {
    id: 'privacy-3',
    category: 'privacy',
    question: 'What happens if I lose my phone?',
    answer: 'If you lose your phone, your data would be on that device. We recommend regularly backing up your data by exporting it to a secure location. You can also set up optional backup features through your device settings.',
  },
  {
    id: 'features-1',
    category: 'features',
    question: 'Can I export my data?',
    answer: 'Yes, with Premium Pro, you can export all your data in standard formats (CSV, PDF, etc.). This allows you to back up your information or transfer it to other applications. Free users have limited export options.',
  },
  {
    id: 'features-2',
    category: 'features',
    question: 'What is Rasa, the AI Financial Advisor?',
    answer: 'Rasa is an AI-powered financial advisor available in the Premium Pro plan. It analyzes your spending patterns, income trends, and financial data to provide personalized insights, recommendations, and forecasts to help you make better financial decisions.',
  },
  {
    id: 'features-3',
    category: 'features',
    question: 'How many projects can I create?',
    answer: 'In the Free plan, you can create up to 5 projects. With Premium Pro ($4.99/month), you can create unlimited projects. This allows you to organize and track expenses for as many client projects as you need.',
  },
  {
    id: 'features-4',
    category: 'features',
    question: 'How many invoices can I generate?',
    answer: 'In the Free plan, you can generate up to 5 invoices. Premium Pro ($4.99/month) gives you unlimited invoices with access to 20+ professional templates to choose from.',
  },
  {
    id: 'features-5',
    category: 'features',
    question: 'Can I import data from other apps?',
    answer: 'With Premium Pro, you can import data from CSV files and other standard formats. This allows you to migrate your existing expense data from other tools into ExpenseNest.',
  },
  {
    id: 'pricing-1',
    category: 'pricing',
    question: 'What\'s the difference between Free and Premium Pro?',
    answer: 'The Free plan includes: 5 projects, 5 invoices, basic dashboard, and analytics. Premium Pro ($4.99/month) adds: unlimited projects/invoices, 20+ invoice templates, AI Financial Advisor Rasa, import/export data, and advanced analytics.',
  },
  {
    id: 'pricing-2',
    category: 'pricing',
    question: 'Is there a free trial for Premium Pro?',
    answer: 'Yes, new users can try Premium Pro features free for a limited trial period. After the trial, Premium Pro is just $4.99/month and can be cancelled anytime.',
  },
  {
    id: 'pricing-3',
    category: 'pricing',
    question: 'Can I upgrade or downgrade anytime?',
    answer: 'Yes, you can upgrade to Premium Pro or downgrade to Free at any time. If you downgrade, you\'ll lose access to premium features, but your core data remains safe on your device.',
  },
  {
    id: 'general-2',
    category: 'general',
    question: 'Which platforms does ExpenseNest support?',
    answer: 'ExpenseNest is available on iOS (App Store) and Android (Google Play). We\'re committed to ensuring a consistent, privacy-first experience across both platforms.',
  },
  {
    id: 'general-3',
    category: 'general',
    question: 'How do I contact support?',
    answer: 'You can reach our support team at contact@tryexpensenest.app. We\'re here to help with any questions, feedback, or issues you might encounter.',
  },
  {
    id: 'general-4',
    category: 'general',
    question: 'Is there a desktop version?',
    answer: 'Currently, ExpenseNest is available as a mobile app for iOS and Android. We\'re exploring the possibility of a desktop version in the future.',
  },
];

const categories = [
  { id: 'all', label: 'All' },
  { id: 'general', label: 'General' },
  { id: 'privacy', label: 'Privacy' },
  { id: 'features', label: 'Features' },
  { id: 'pricing', label: 'Pricing' },
];

export default function FAQPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [expandedItems, setExpandedItems] = useState<Set<string>>(new Set());

  const filteredFAQs = selectedCategory === 'all'
    ? faqItems
    : faqItems.filter(item => item.category === selectedCategory);

  const toggleItem = (id: string) => {
    const newExpanded = new Set(expandedItems);
    if (newExpanded.has(id)) {
      newExpanded.delete(id);
    } else {
      newExpanded.add(id);
    }
    setExpandedItems(newExpanded);
  };

  return (
    <main className="min-h-screen bg-background font-sans selection:bg-foreground selection:text-background relative">
      <FloatingNavbar />

      {/* Decorative Header Background */}
      <div className="absolute top-0 inset-x-0 h-[50vh] bg-zinc-50 dark:bg-zinc-900/40 border-b border-border/50 -z-10" />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pt-40 pb-24">
        {/* Back Button */}
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
          <Link href="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-12 font-bold transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
        </motion.div>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
          className="mb-16 text-center sm:text-left"
        >
          <span className="inline-block px-3 py-1 rounded-md bg-secondary text-secondary-foreground text-xs font-bold uppercase tracking-widest mb-6">
            Help Center
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-foreground tracking-tight mb-6 text-balance">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-muted-foreground font-medium text-pretty">
            Everything you need to know about ExpenseNest's features, privacy, and pricing.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
          className="mb-12 flex flex-wrap gap-2 justify-center sm:justify-start"
        >
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-5 py-2.5 rounded-full font-bold text-sm transition-all duration-300 active:scale-95 ${selectedCategory === category.id
                  ? 'bg-foreground text-background shadow-md'
                  : 'bg-transparent text-muted-foreground hover:bg-secondary hover:text-foreground border border-transparent hover:border-border'
                }`}
            >
              {category.label}
            </button>
          ))}
        </motion.div>

        {/* FAQ Items */}
        <motion.div
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}
          className="space-y-4"
        >
          {filteredFAQs.map((item) => {
            const isExpanded = expandedItems.has(item.id);
            return (
              <motion.div
                layout
                key={item.id}
                className={`border rounded-2xl overflow-hidden transition-all duration-300 ${isExpanded ? 'bg-secondary/30 border-border shadow-sm' : 'bg-background border-border hover:border-foreground/20'}`}
              >
                <button
                  onClick={() => toggleItem(item.id)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
                >
                  <span className="font-bold text-lg text-foreground pr-8 tracking-tight">{item.question}</span>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-colors ${isExpanded ? 'bg-foreground text-background' : 'bg-secondary text-muted-foreground'}`}>
                    <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`} />
                  </div>
                </button>
                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-6 pt-2">
                        <p className="text-muted-foreground leading-relaxed font-medium">{item.answer}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="mt-24 p-12 bg-zinc-900 text-zinc-50 rounded-3xl text-center relative overflow-hidden shadow-2xl"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-zinc-800/50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />
          <h2 className="text-2xl sm:text-3xl font-extrabold mb-4 tracking-tight relative z-10">Still have questions?</h2>
          <p className="text-zinc-400 mb-8 max-w-lg mx-auto font-medium relative z-10 text-pretty">
            Can't find the answer you're looking for? Our support team is here to help you get sorted.
          </p>
          <a
            href="mailto:contact@tryexpensenest.app"
            className="inline-flex items-center justify-center px-8 py-3.5 bg-white text-zinc-900 rounded-xl font-bold hover:bg-zinc-200 transition-all active:scale-95 shadow-xl relative z-10"
          >
            Contact Support
          </a>
        </motion.div>
      </div>
      <Footer />
    </main>
  );
}
