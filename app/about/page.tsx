'use client';

import { ArrowLeft, User, Briefcase, Mail, Code } from 'lucide-react';
import Link from 'next/link';
import FloatingNavbar from '@/components/floating-navbar';
import Footer from '@/components/footer';
import { motion } from 'framer-motion';

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-background font-sans selection:bg-foreground selection:text-background relative">
            <FloatingNavbar />

            {/* Decorative Header Background */}
            <div className="absolute top-0 inset-x-0 h-[50vh] bg-zinc-50 dark:bg-zinc-900/40 border-b border-border/50 -z-10" />

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-40 pb-24">
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
                    className="mb-16 text-center"
                >
                    <span className="inline-block px-3 py-1 rounded-md bg-secondary text-secondary-foreground text-xs font-bold uppercase tracking-widest mb-6">
                        About the creator
                    </span>
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-foreground tracking-tight mb-6 text-balance">
                        Behind ExpenseNest
                    </h1>
                    <p className="text-xl text-muted-foreground font-medium max-w-2xl mx-auto leading-relaxed">
                        The story, vision, and creator behind the smartest, privacy-first expense tracker for modern freelancers.
                    </p>
                </motion.div>

                {/* Content Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
                    className="bg-background border border-border/60 rounded-[2.5rem] p-8 sm:p-12 shadow-sm relative overflow-hidden"
                >
                    {/* subtle decorative blur */}
                    <div className="absolute -top-32 -right-32 w-64 h-64 bg-foreground/5 rounded-full blur-3xl pointer-events-none" />

                    <div className="flex flex-col md:flex-row gap-12 items-center md:items-start">
                        {/* Avatar Profile */}
                        <div className="w-40 h-40 shrink-0 rounded-[2rem] bg-zinc-100 dark:bg-zinc-800 border-2 border-border flex items-center justify-center rotate-3 shadow-md relative overflow-hidden">
                            <User className="w-16 h-16 text-zinc-400" />
                        </div>

                        <div className="flex-1 space-y-6">
                            <div>
                                <h2 className="text-3xl font-extrabold text-foreground tracking-tight mb-2">Pawan Bhandari</h2>
                                <div className="flex flex-wrap gap-2 text-sm">
                                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50/50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 font-bold border border-blue-100 dark:border-blue-900/50">
                                        <Code className="w-3.5 h-3.5" />
                                        Flutter Developer
                                    </span>
                                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-50/50 dark:bg-purple-900/20 text-purple-700 dark:text-purple-300 font-bold border border-purple-100 dark:border-purple-900/50">
                                        <SparklesIcon className="w-3.5 h-3.5" />
                                        AI Expert
                                    </span>
                                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50/50 dark:bg-emerald-900/20 text-emerald-700 dark:text-emerald-300 font-bold border border-emerald-100 dark:border-emerald-900/50">
                                        <Briefcase className="w-3.5 h-3.5" />
                                        Full Stack Mobile App Developer
                                    </span>
                                </div>
                            </div>

                            <div className="prose prose-zinc dark:prose-invert font-medium text-muted-foreground leading-relaxed">
                                <p>
                                    As an independent developer, I experienced the frustration of using over-complicated, subscription-heavy tools to manage my own finances. I realized that freelancers don't need a heavy enterprise SaaS application; we need something fast, reliable, intelligent, and most importantly—private.
                                </p>
                                <p>
                                    That's why I built ExpenseNest. Leveraging my expertise in cross-platform mobile development (Flutter) and Artificial Intelligence, I set out to create an application that serves as your very own private financial advisor.
                                </p>
                                <p>
                                    With ExpenseNest, everything stays on your device. Zero mandatory cloud syncing, zero creepy data harvesting. Just a premium, fluid experience that lets you get back to what you do best: your work.
                                </p>
                            </div>

                            <div className="pt-6 border-t border-border/50">
                                <a href="mailto:contact@tryexpensenest.app" className="inline-flex items-center gap-2 px-6 py-3 bg-foreground text-background font-bold rounded-xl hover:bg-foreground/90 transition-all active:scale-95 shadow-sm">
                                    <Mail className="w-4 h-4" />
                                    Get in Touch
                                </a>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
            <Footer />
        </main>
    );
}

const SparklesIcon = (props: React.SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" /><path d="M5 3v4" /><path d="M19 17v4" /><path d="M3 5h4" /><path d="M17 19h4" /></svg>
