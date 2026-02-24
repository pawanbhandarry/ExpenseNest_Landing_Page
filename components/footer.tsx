import { Mail, Linkedin, Twitter, Github } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#09090b] text-zinc-400 py-24 px-4 sm:px-6 lg:px-8 border-t border-zinc-800/50">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-8 mb-16">

          {/* Brand Column */}
          <div className="md:col-span-5 space-y-6">
            <Link href="/" className="flex items-center gap-3">
              <div className="flex flex-col">
                <span className="text-2xl font-extrabold text-white tracking-tight leading-none">
                  ExpenseNest
                </span>
                <span className="text-xs font-semibold text-zinc-500 uppercase tracking-widest mt-1">
                  Private AI Finance
                </span>
              </div>
            </Link>
            <p className="text-base leading-relaxed max-w-sm font-medium text-zinc-400">
              The smartest way for freelancers to track money, generate invoices, and stay organized—all completely offline and highly secure.
            </p>
            <div className="flex items-center gap-4 pt-4">
              <a href="#" className="w-10 h-10 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center hover:bg-zinc-800 hover:text-white transition-all">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center hover:bg-zinc-800 hover:text-white transition-all">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center hover:bg-zinc-800 hover:text-white transition-all">
                <Github className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Links Columns */}
          <div className="md:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8">
            <div className="space-y-4">
              <h4 className="font-bold text-white tracking-tight">Product</h4>
              <ul className="space-y-3">
                <li><Link href="/#features" className="hover:text-white transition-colors font-medium">Features</Link></li>
                <li><Link href="/#pricing" className="hover:text-white transition-colors font-medium">Pricing</Link></li>
                <li><Link href="/faq" className="hover:text-white transition-colors font-medium">FAQ</Link></li>
                <li><Link href="/#download" className="hover:text-white transition-colors font-medium">Download App</Link></li>
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="font-bold text-white tracking-tight">Company</h4>
              <ul className="space-y-3">
                <li><Link href="/about" className="hover:text-white transition-colors font-medium">About Us</Link></li>
                <li><a href="mailto:contact@tryexpensenest.app" className="hover:text-white transition-colors font-medium">Contact</a></li>
              </ul>
            </div>

            <div className="space-y-4 col-span-2 sm:col-span-1 border-t border-zinc-800/50 pt-8 sm:pt-0 sm:border-0">
              <h4 className="font-bold text-white tracking-tight">Legal</h4>
              <ul className="space-y-3">
                <li><Link href="/privacy-policy" className="hover:text-white transition-colors font-medium">Privacy Policy</Link></li>
                <li><Link href="/terms-of-service" className="hover:text-white transition-colors font-medium">Terms of Service</Link></li>
              </ul>
            </div>
          </div>

        </div>

        {/* Divider & Bottom Section */}
        <div className="pt-8 border-t border-zinc-800/80 flex flex-col items-center">
          <p className="text-sm font-medium">
            &copy; {new Date().getFullYear()} ExpenseNest. All rights reserved. Built for freelancers.
          </p>
        </div>
      </div>
    </footer>
  );
}
