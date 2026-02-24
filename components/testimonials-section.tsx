'use client';

import { motion } from 'framer-motion';
import { Star, CheckCircle2 } from 'lucide-react';

const testimonials = [
    {
        name: "Sarah Jenkins",
        role: "Freelance Designer",
        image: "SJ",
        content: "ExpenseNest completely changed how I manage my freelance income. The fact that it's 100% offline gives me so much peace of mind.",
    },
    {
        name: "Marcus Chen",
        role: "Independent Developer",
        image: "MC",
        content: "I love the privacy-first approach. No tracking, no mandatory cloud sync. Just a clean, fast app that does exactly what I need.",
    },
    {
        name: "Elena Rodriguez",
        role: "Content Creator",
        image: "ER",
        content: "The Rasa AI insights actually helped me cut down on unnecessary subscriptions. It's like having a financial advisor right on my phone.",
    },
    {
        name: "David Kim",
        role: "Indie Maker",
        image: "DK",
        content: "The easiest tool to use out of the box. No login walls, everything is perfectly designed. I recommend it to all my contractor friends.",
    },
    {
        name: "Ayesha Patel",
        role: "Digital Marketer",
        image: "AP",
        content: "Finally, an expense tracker that doesn't feel like a spreadsheet. It's beautiful and the offline capability means I can use it anywhere.",
    },
    {
        name: "Liam O'Connor",
        role: "Photography Freelancer",
        image: "LO",
        content: "Managing projects and invoices used to be a headache. ExpenseNest combined those perfectly without compromising my data privacy.",
    }
];

// Duplicate the testimonials array to create a seamless infinite scroll effect
const doubleTestimonials = [...testimonials, ...testimonials];

export default function TestimonialsSection() {
    return (
        <section className="py-24 px-4 sm:px-6 lg:px-8 bg-zinc-50 dark:bg-zinc-900/30 border-y border-border/50 overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl font-bold tracking-tight text-foreground mb-4">
                            Trusted by 10,000+ Freelancers
                        </h2>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                            Don't just take our word for it. Here's what independent professionals are saying about ExpenseNest.
                        </p>
                    </motion.div>
                </div>

                {/* Marquee Wrapper */}
                <div className="relative flex overflow-hidden group mask-horizontal">
                    <motion.div
                        className="flex gap-6 py-4 px-4 whitespace-nowrap"
                        animate={{ x: ["0%", "-50%"] }}
                        transition={{
                            repeat: Infinity,
                            ease: "linear",
                            duration: 35, // Adjust speed here
                        }}
                    >
                        {doubleTestimonials.map((t, i) => (
                            <div
                                key={i}
                                className="w-[350px] shrink-0 whitespace-normal bg-background pt-6 pb-8 px-8 rounded-[2rem] border border-border/60 shadow-sm transition-all relative flex flex-col"
                            >
                                {/* Star Rating */}
                                <div className="flex gap-1 text-yellow-500 mb-6">
                                    {[...Array(5)].map((_, j) => (
                                        <Star key={j} className="w-4 h-4 fill-current" />
                                    ))}
                                </div>

                                <p className="text-foreground/90 leading-relaxed mb-8 text-base flex-grow">
                                    "{t.content}"
                                </p>

                                <div className="flex items-center gap-4 mt-auto">
                                    <div className="w-12 h-12 shrink-0 rounded-full bg-secondary flex items-center justify-center text-secondary-foreground font-bold text-lg border border-border">
                                        {t.image}
                                    </div>
                                    <div>
                                        <div className="font-semibold text-foreground flex items-center gap-1.5">
                                            {t.name}
                                            <CheckCircle2 className="w-4 h-4 text-blue-500 shrink-0" />
                                        </div>
                                        <div className="text-sm text-muted-foreground">{t.role}</div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
            {/* Adding mask class for edge fading */}
            <style jsx global>{`
                .mask-horizontal {
                    mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
                    -webkit-mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
                }
            `}</style>
        </section>
    );
}
