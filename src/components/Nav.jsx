import { useState, useEffect } from 'react'

const links = [
  { label: 'Slate',     href: '#slate'       },
  { label: 'About',     href: '#about'       },
  { label: 'Partners',  href: '#partnership' },
  { label: 'Studio',    href: '#leadership'  },
]

export default function Nav() {
  const [scrolled,     setScrolled]     = useState(false)
  const [menuOpen,     setMenuOpen]     = useState(false)
  const [activeAnchor, setActiveAnchor] = useState('')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close mobile menu on resize
  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 768) setMenuOpen(false) }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  // Lock body scroll when menu open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const handleAnchorClick = (href) => {
    setMenuOpen(false)
    setActiveAnchor(href)
  }

  return (
    <>
      <header
        className={[
          'fixed top-0 left-0 right-0 z-50 h-16',
          'flex items-center transition-all duration-500',
          scrolled
            ? 'bg-ink/90 backdrop-blur-md border-b border-border'
            : 'bg-transparent',
        ].join(' ')}
      >
        <div className="w-full max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#"
            className="font-serif text-[1.0625rem] font-light tracking-[0.06em] text-text hover:text-gold transition-colors duration-300"
          >
            Studio Mahatta
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8" aria-label="Primary navigation">
            {links.map(({ label, href }) => (
              <a
                key={href}
                href={href}
                onClick={() => handleAnchorClick(href)}
                className={[
                  'text-eyebrow transition-colors duration-300',
                  activeAnchor === href ? 'text-gold' : 'text-text-muted hover:text-text',
                ].join(' ')}
              >
                {label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <a
            href="#partnership"
            onClick={() => handleAnchorClick('#partnership')}
            className="hidden md:inline-flex items-center gap-2 px-5 py-2 border border-border text-eyebrow text-text-muted hover:border-gold hover:text-gold transition-all duration-300"
          >
            Partner With Us
          </a>

          {/* Hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            className="md:hidden flex flex-col justify-center gap-[5px] w-8 h-8 focus:outline-none"
          >
            <span className={`block h-px bg-text transition-all duration-300 origin-center ${menuOpen ? 'rotate-45 translate-y-[6px]' : ''}`} />
            <span className={`block h-px bg-text transition-all duration-300 ${menuOpen ? 'opacity-0 scale-x-0' : ''}`} />
            <span className={`block h-px bg-text transition-all duration-300 origin-center ${menuOpen ? '-rotate-45 -translate-y-[6px]' : ''}`} />
          </button>
        </div>
      </header>

      {/* Mobile fullscreen overlay */}
      <div
        className={[
          'fixed inset-0 z-40 bg-ink flex flex-col justify-center px-8',
          'transition-opacity duration-400',
          menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none',
        ].join(' ')}
        aria-hidden={!menuOpen}
      >
        <nav className="flex flex-col gap-8" aria-label="Mobile navigation">
          <span className="eyebrow mb-2">Navigation</span>
          {links.map(({ label, href }, i) => (
            <a
              key={href}
              href={href}
              onClick={() => handleAnchorClick(href)}
              className={[
                'font-serif text-4xl font-light text-text hover:text-gold transition-colors duration-300',
                `transition-delay-${i + 1}00`,
              ].join(' ')}
            >
              {label}
            </a>
          ))}
          <a
            href="#partnership"
            onClick={() => handleAnchorClick('#partnership')}
            className="mt-4 inline-flex items-center gap-2 text-eyebrow text-text-muted border-b border-text-dim pb-1 self-start hover:text-gold hover:border-gold transition-all duration-300"
          >
            Partner With Us →
          </a>
        </nav>
        <p className="absolute bottom-10 left-8 text-eyebrow text-text-dim">contact@studiomahatta.com</p>
      </div>
    </>
  )
}
