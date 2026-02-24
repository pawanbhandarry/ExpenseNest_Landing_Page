'use client';

import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import FloatingNavbar from '@/components/floating-navbar';
import Footer from '@/components/footer';
import { motion } from 'framer-motion';

export default function TermsOfService() {
  return (
    <main className="min-h-screen bg-background font-sans selection:bg-foreground selection:text-background relative">
      <FloatingNavbar />

      {/* Decorative Header Background */}
      <div className="absolute top-0 inset-x-0 h-[40vh] bg-zinc-50 dark:bg-zinc-900/40 border-b border-border/50 -z-10" />

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
          className="mb-16"
        >
          <span className="inline-block px-3 py-1 rounded-md bg-secondary text-secondary-foreground text-xs font-bold uppercase tracking-widest mb-6">
            Legal
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-foreground tracking-tight mb-6 text-balance">
            Terms of Service
          </h1>
          <p className="text-lg text-muted-foreground font-medium">
            Last updated: February 2026
          </p>
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
          className="space-y-12"
        >
          {/* Acceptance */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground tracking-tight">1. Acceptance of Terms</h2>
            <p className="text-muted-foreground leading-relaxed font-medium">
              By downloading, installing, or using ExpenseNest, you agree to be bound by these Terms of Service. If you do not agree with any part of these terms, you may not use the app.
            </p>
          </section>

          {/* License Grant */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground tracking-tight">2. License Grant</h2>
            <p className="text-muted-foreground leading-relaxed font-medium">
              ExpenseNest grants you a limited, non-exclusive, non-transferable license to use the app for personal, non-commercial purposes. You may not redistribute, sublicense, or resell the app.
            </p>
          </section>

          {/* User Responsibilities */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground tracking-tight">3. User Responsibilities</h2>
            <ul className="list-disc list-inside space-y-3 text-muted-foreground font-medium">
              <li>You are responsible for maintaining the confidentiality of your device and any passwords</li>
              <li>You agree to use the app in compliance with all applicable laws and regulations</li>
              <li>You will not attempt to reverse engineer, decompile, or disassemble the app</li>
              <li>You will not use the app for any unlawful or harmful purposes</li>
            </ul>
          </section>

          {/* Data Ownership */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground tracking-tight">4. Data Ownership</h2>
            <p className="text-muted-foreground leading-relaxed font-medium">
              All financial data, expense records, invoices, and information you create in ExpenseNest are your exclusive property. You retain full ownership and control of your data. ExpenseNest does not claim ownership of any user-generated content.
            </p>
          </section>

          {/* Disclaimer */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground tracking-tight">5. Disclaimer of Warranties</h2>
            <p className="text-muted-foreground leading-relaxed font-medium">
              ExpenseNest is provided "as is" without warranties of any kind. We do not guarantee:
            </p>
            <ul className="list-disc list-inside space-y-3 text-muted-foreground font-medium">
              <li>The app will be error-free or uninterrupted</li>
              <li>All features will work perfectly on all devices</li>
              <li>Your data will not be lost due to device failure</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed font-medium">
              We strongly recommend regularly backing up your data.
            </p>
          </section>

          {/* Limitation of Liability */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground tracking-tight">6. Limitation of Liability</h2>
            <p className="text-muted-foreground leading-relaxed font-medium">
              To the fullest extent permitted by law, ExpenseNest shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of the app, including loss of profits, data, or financial harm.
            </p>
          </section>

          {/* Indemnification */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground tracking-tight">7. Indemnification</h2>
            <p className="text-muted-foreground leading-relaxed font-medium">
              You agree to indemnify and hold harmless ExpenseNest from any claims, damages, or losses arising from your use of the app or violation of these terms.
            </p>
          </section>

          {/* Intellectual Property */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground tracking-tight">8. Intellectual Property Rights</h2>
            <p className="text-muted-foreground leading-relaxed font-medium">
              ExpenseNest, including its design, features, and functionality, are protected by copyright and intellectual property laws. You may not copy or distribute any part of the app without permission.
            </p>
          </section>

          {/* Termination */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground tracking-tight">9. Termination</h2>
            <p className="text-muted-foreground leading-relaxed font-medium">
              We reserve the right to terminate or suspend access to ExpenseNest at any time, with or without cause. Upon termination, your license to use the app immediately ceases.
            </p>
          </section>

          {/* Changes to Terms */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground tracking-tight">10. Changes to Terms</h2>
            <p className="text-muted-foreground leading-relaxed font-medium">
              We may modify these Terms of Service at any time. Your continued use of the app following any changes constitutes your acceptance of the new terms.
            </p>
          </section>

          {/* Contact */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground tracking-tight">11. Contact Us</h2>
            <p className="text-muted-foreground leading-relaxed font-medium">
              For questions about these Terms of Service, please contact:
            </p>
            <p className="text-foreground font-bold hover:underline">
              <a href="mailto:contact@tryexpensenest.app">contact@tryexpensenest.app</a>
            </p>
          </section>
        </motion.div>
      </div>
      <Footer />
    </main>
  );
}
