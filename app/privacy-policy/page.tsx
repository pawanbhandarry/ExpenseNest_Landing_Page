'use client';

import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import FloatingNavbar from '@/components/floating-navbar';
import Footer from '@/components/footer';
import { motion } from 'framer-motion';

export default function PrivacyPolicy() {
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
            Privacy Policy
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
          {/* Introduction */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground tracking-tight">Introduction</h2>
            <p className="text-muted-foreground leading-relaxed font-medium">
              At ExpenseNest, we are committed to protecting your privacy. This Privacy Policy explains how we handle your data. ExpenseNest is designed with privacy as our core principle – your financial data is stored locally on your device and never transmitted to our servers.
            </p>
          </section>

          {/* Data Collection */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground tracking-tight">Data Collection & Storage</h2>
            <p className="text-muted-foreground leading-relaxed font-medium">
              ExpenseNest operates on a privacy-first model:
            </p>
            <ul className="list-disc list-inside space-y-3 text-muted-foreground font-medium">
              <li>All your expense data, projects, invoices, and financial information are stored locally on your device</li>
              <li>We do not collect, access, or store any of your financial data on our servers</li>
              <li>Your data never leaves your device unless you explicitly choose to export it</li>
              <li>No tracking of your financial activities or personal information</li>
            </ul>
          </section>

          {/* App Analytics */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground tracking-tight">App Analytics & Telemetry</h2>
            <p className="text-muted-foreground leading-relaxed font-medium">
              We may collect anonymized, non-personal data to improve the app experience:
            </p>
            <ul className="list-disc list-inside space-y-3 text-muted-foreground font-medium">
              <li>App crash reports and error logs (anonymized)</li>
              <li>Feature usage statistics (aggregated, non-identifying)</li>
              <li>Device type and operating system version</li>
              <li>App performance metrics</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed font-medium">
              This data cannot be used to identify you and is only used to enhance app reliability and performance.
            </p>
          </section>

          {/* Third-Party Services */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground tracking-tight">Third-Party Services</h2>
            <p className="text-muted-foreground leading-relaxed font-medium">
              ExpenseNest does not share your data with third parties. However, the app may use third-party services such as cloud backup services (optional and only if you choose to enable them).
            </p>
          </section>

          {/* Security */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground tracking-tight">Security Measures</h2>
            <ul className="list-disc list-inside space-y-3 text-muted-foreground font-medium">
              <li>All data is encrypted using industry-standard encryption protocols</li>
              <li>Your device's native security measures protect your data</li>
              <li>Optional password/biometric protection for the app</li>
              <li>No data is transmitted over the internet without your explicit consent</li>
            </ul>
          </section>

          {/* Your Rights */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground tracking-tight">Your Rights</h2>
            <ul className="list-disc list-inside space-y-3 text-muted-foreground font-medium">
              <li>You have full control and ownership of all your data</li>
              <li>You can export your data at any time in standard formats</li>
              <li>You can delete all your data from the app with one action</li>
              <li>You can disable analytics and telemetry collection in app settings</li>
            </ul>
          </section>

          {/* Changes to This Policy */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground tracking-tight">Changes to This Policy</h2>
            <p className="text-muted-foreground leading-relaxed font-medium">
              We may update this Privacy Policy occasionally. We will notify users of significant changes through the app or via email at contact@tryexpensenest.app.
            </p>
          </section>

          {/* Contact */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground tracking-tight">Contact Us</h2>
            <p className="text-muted-foreground leading-relaxed font-medium">
              If you have questions about this Privacy Policy or our privacy practices, please contact us at:
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
