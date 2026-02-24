interface NavbarProps {
  isScrolled: boolean;
}

export default function Navbar({ isScrolled }: NavbarProps) {
  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-background/95 backdrop-blur shadow-md border-b border-border'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo & Tagline */}
          <div className="flex flex-col">
            <span className="text-lg font-bold text-foreground leading-none">
              ExpenseNest
            </span>
            <span className="text-xs text-muted-foreground font-medium">
              The Private AI Expense Tracker
            </span>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            <a
              href="#features"
              className="text-muted-foreground hover:text-foreground font-medium transition-colors text-sm"
            >
              Features
            </a>
            <a
              href="#privacy"
              className="text-muted-foreground hover:text-foreground font-medium transition-colors text-sm"
            >
              Privacy
            </a>
            <a
              href="#pricing"
              className="text-muted-foreground hover:text-foreground font-medium transition-colors text-sm"
            >
              Pricing
            </a>
            <a
              href="#faq"
              className="text-muted-foreground hover:text-foreground font-medium transition-colors text-sm"
            >
              FAQ
            </a>
          </div>

          {/* Contact Link */}
          <a
            href="mailto:contact@tryexpensenest.app"
            className="text-muted-foreground hover:text-primary font-medium transition-colors text-sm"
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}
