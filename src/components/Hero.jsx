import { useEffect, useRef } from 'react'

export default function Hero() {
  const lineRef = useRef(null)

  // Animate the decorative rule on mount
  useEffect(() => {
    const el = lineRef.current
    if (!el) return
    const t = setTimeout(() => el.classList.add('w-16'), 600)
    return () => clearTimeout(t)
  }, [])

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-end overflow-hidden"
      aria-label="Hero"
    >
      {/* Cinematic background */}
      <div className="absolute inset-0 bg-ink">
        {/* Subtle noise-like grain using layered pseudo elements via inline style */}
        <div
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage: `
              radial-gradient(ellipse 80% 60% at 60% 40%, #1e1a14 0%, transparent 70%),
              radial-gradient(ellipse 50% 70% at 20% 80%, #12100e 0%, transparent 60%)
            `,
          }}
        />
        {/* Film-frame vignette */}
        <div
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(ellipse 100% 100% at 50% 50%, transparent 40%, rgba(0,0,0,0.75) 100%)',
          }}
        />
        {/* Subtle gold bleed — top right */}
        <div
          className="absolute top-0 right-0 w-1/2 h-1/2 opacity-[0.04]"
          style={{
            background: 'radial-gradient(ellipse 60% 60% at 80% 20%, #c4a06b, transparent)',
          }}
        />
      </div>

      {/* Content — anchored to bottom-left, classical poster layout */}
      <div className="relative z-10 max-w-7xl mx-auto w-full px-6 md:px-10 pb-20 md:pb-28">

        {/* Eyebrow */}
        <p
          className="eyebrow text-text-dim mb-6 opacity-0 animate-fade-in"
          style={{ animationDelay: '0.2s' }}
        >
          Independent Production Studio · New Delhi
        </p>

        {/* Headline */}
        <h1
          className="font-serif font-light text-text text-display max-w-[16ch] mb-6 opacity-0 animate-fade-up"
          style={{ animationDelay: '0.4s' }}
        >
          Large-format cinematic narratives rooted in Indian history and mythology.
        </h1>

        {/* Decorative rule */}
        <div className="flex items-center gap-4 mb-6" style={{ animationDelay: '0.5s' }}>
          <div
            ref={lineRef}
            className="h-px bg-gold transition-all duration-700 ease-cinematic w-0"
          />
          <p
            className="font-sans text-sm font-light text-text-muted max-w-prose-sm opacity-0 animate-fade-in"
            style={{ animationDelay: '0.65s' }}
          >
            Character-driven storytelling at the intersection of culture and scale.
          </p>
        </div>

        {/* CTAs */}
        <div
          className="flex flex-wrap items-center gap-4 mt-10 opacity-0 animate-fade-up"
          style={{ animationDelay: '0.8s' }}
        >
          <a
            href="#slate"
            className="inline-flex items-center gap-3 px-7 py-3.5 bg-gold text-ink text-eyebrow font-medium tracking-widest hover:bg-gold-light transition-colors duration-300"
          >
            Watch Bhakt Prahlad
            <span aria-hidden="true">→</span>
          </a>
          <a
            href="#slate"
            className="inline-flex items-center gap-3 px-7 py-3.5 border border-border text-eyebrow text-text-muted hover:border-gold hover:text-gold transition-all duration-300"
          >
            Explore Our Slate
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-0 animate-fade-in"
        style={{ animationDelay: '1.4s' }}
        aria-hidden="true"
      >
        <span className="eyebrow text-text-dim">Scroll</span>
        <div className="w-px h-8 bg-border relative overflow-hidden">
          <div
            className="absolute top-0 w-full bg-gold"
            style={{
              animation: 'scrollLine 2s cubic-bezier(0.4,0,0.2,1) infinite',
              height: '40%',
            }}
          />
        </div>
      </div>

      <style>{`
        @keyframes scrollLine {
          0%   { transform: translateY(-100%); opacity: 1; }
          70%  { opacity: 1; }
          100% { transform: translateY(300%); opacity: 0; }
        }
      `}</style>
    </section>
  )
}
