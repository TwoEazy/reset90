import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-dark border-t border-gold/10">
      <div className="w-[90%] max-w-[1200px] mx-auto py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <h3 className="text-2xl font-bold tracking-widest text-gold mb-4">
              RESET90
            </h3>
            <p className="text-sm text-gray leading-relaxed">
              The Shift Begins. A precision transformation system built on
              structured 90-day cycles.
            </p>
          </div>

          {/* Programs */}
          <div>
            <h4 className="text-sm font-semibold tracking-wider uppercase text-white mb-4">
              Programs
            </h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/online"
                  className="text-sm text-gray hover:text-gold transition-colors"
                >
                  RESET90 Online
                </Link>
              </li>
              <li>
                <Link
                  href="/professional"
                  className="text-sm text-gray hover:text-gold transition-colors"
                >
                  RESET90 Professional
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-sm font-semibold tracking-wider uppercase text-white mb-4">
              Company
            </h4>
            <ul className="space-y-3">
              {[
                { href: "/about", label: "About" },
                { href: "/team", label: "Team" },
                { href: "/faq", label: "FAQ" },
                { href: "/contact", label: "Contact" },
                { href: "/policies", label: "Policies" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray hover:text-gold transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA */}
          <div>
            <h4 className="text-sm font-semibold tracking-wider uppercase text-white mb-4">
              Ready to Begin?
            </h4>
            <p className="text-sm text-gray mb-6">
              Request your introduction meeting and start your transformation.
            </p>
            <Link
              href="/contact"
              className="btn-gold inline-block bg-gold text-dark font-semibold text-sm px-6 py-2.5 rounded tracking-wider uppercase hover:bg-gold-light transition-all"
            >
              Get Started
            </Link>
          </div>
        </div>

        <div className="section-divider mt-12 mb-8" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray">
            &copy; {new Date().getFullYear()} RESET90. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link
              href="/policies"
              className="text-xs text-gray hover:text-gold transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/policies"
              className="text-xs text-gray hover:text-gold transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
