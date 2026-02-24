'use client';

import { motion } from 'framer-motion';

export default function FinalCTA() {
  return (
    <section className="py-32 px-4 sm:px-6 lg:px-8 bg-zinc-50 dark:bg-zinc-900/40 relative overflow-hidden">
      {/* Decorative lines */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border/80 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-border/80 to-transparent" />

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center space-y-10"
        >
          {/* Headline */}
          <div className="space-y-6">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-foreground text-balance tracking-tight leading-tight">
              Ready to take control of <br />
              <span className="text-muted-foreground">your freelance finances?</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty font-medium">
              Join thousands of independent professionals managing their money smarter and more securely with ExpenseNest.
            </p>
          </div>

          {/* App Store Badges */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <a
              href="https://apps.apple.com/app/expensenest/id6739261524"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto"
            >
              <div className="bg-foreground hover:bg-foreground/90 text-background gap-3 rounded-xl font-medium shadow-sm active:scale-[0.98] transition-all px-8 py-3.5 flex items-center justify-center w-full">
                <svg className="w-6 h-6" viewBox="0 0 384 512" fill="currentColor">
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
              className="w-full sm:w-auto"
            >
              <div className="bg-background hover:bg-secondary border-2 border-border text-foreground gap-3 rounded-xl font-medium shadow-sm active:scale-[0.98] transition-all px-8 py-3.5 flex items-center justify-center w-full">
                <svg className="w-6 h-6" viewBox="0 0 512 512" fill="currentColor">
                  <path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z" />
                </svg>
                <div className="flex flex-col items-start">
                  <span className="text-[10px] leading-none opacity-80 uppercase tracking-wider">Get it on</span>
                  <span className="text-base font-semibold leading-none mt-1">Google Play</span>
                </div>
              </div>
            </a>
          </div>

          {/* Trust Statement */}
          <p className="text-sm font-semibold text-muted-foreground pt-4 uppercase tracking-widest">
            No credit card required. Start for free.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
