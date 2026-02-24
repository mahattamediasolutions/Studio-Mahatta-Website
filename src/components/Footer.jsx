const navLinks = [
  { label: 'Slate',    href: '#slate'       },
  { label: 'About',   href: '#about'       },
  { label: 'Partners',href: '#partnership' },
  { label: 'Studio',  href: '#leadership'  },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer
      className="border-t border-border bg-surface"
      aria-label="Site footer"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-16">

        {/* Top row */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-10 mb-12 pb-12 border-b border-border">

          {/* Brand */}
          <div>
            <p className="font-serif text-lg font-light text-text tracking-[0.06em] mb-2">
              Studio Mahatta
            </p>
            <p className="eyebrow text-text-dim">Independent Production Studio</p>
          </div>

          {/* Footer nav */}
          <nav className="flex flex-wrap gap-x-8 gap-y-3" aria-label="Footer navigation">
            {navLinks.map(({ label, href }) => (
              <a
                key={href}
                href={href}
                className="eyebrow text-text-muted hover:text-gold transition-colors duration-300"
              >
                {label}
              </a>
            ))}
          </nav>

          {/* Contact */}
          <a
            href="mailto:contact@studiomahatta.com"
            className="eyebrow text-text-muted hover:text-gold transition-colors duration-300 self-start md:self-end"
          >
            contact@studiomahatta.com
          </a>
        </div>

        {/* Bottom row */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <p className="eyebrow text-text-dim">
            © {year} Studio Mahatta. All rights reserved.
          </p>
          <p className="eyebrow text-text-dim">
            New Delhi, India
          </p>
        </div>

      </div>
    </footer>
  )
}
