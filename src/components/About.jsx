import { useReveal } from '../hooks/useReveal'

export default function About() {
  const ref = useReveal()

  return (
    <section
      id="about"
      ref={ref}
      className="border-t border-border py-section"
      aria-labelledby="about-heading"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10">

        {/* Top label row */}
        <div className="reveal flex items-center gap-4 mb-16">
          <span className="eyebrow">About the Studio</span>
          <div className="flex-1 h-px bg-border max-w-16" />
        </div>

        {/* Two-column grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">

          {/* Left — text */}
          <div className="space-y-8">
            <h2
              id="about-heading"
              className="reveal font-serif font-light text-headline text-text text-balance"
            >
              Building Cultural Narratives with Cinematic Discipline
            </h2>

            <div className="reveal reveal-delay-1 space-y-5 font-sans font-light text-[0.9375rem] leading-relaxed text-text-muted">
              <p>
                Studio Mahatta develops large-format historical and mythological films and series
                for global audiences. Our approach balances research, character depth, and
                commercial strategy.
              </p>
              <p>
                We work across animated features, documentary projects, and live-action narratives
                — each grounded in rigorous source material and designed for the widest possible reach.
              </p>
              <p>
                Based in New Delhi, we operate as an independent studio with production partnerships
                across India and internationally.
              </p>
            </div>

            {/* Stats row */}
            <div className="reveal reveal-delay-2 grid grid-cols-3 gap-6 pt-4 border-t border-border">
              {[
                { value: '4',       label: 'Projects in Slate' },
                { value: '2026',    label: 'First Release' },
                { value: 'Global',  label: 'Distribution Reach' },
              ].map(({ value, label }) => (
                <div key={label}>
                  <p className="font-serif text-3xl font-light text-text mb-1">{value}</p>
                  <p className="text-eyebrow text-text-dim">{label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right — image placeholder */}
          <div className="reveal reveal-delay-1">
            <div className="img-placeholder aspect-[4/5] w-full">
              {/* Cinematic frame lines */}
              <div className="absolute inset-4 border border-border opacity-30" />
              <div className="absolute top-8 left-8 flex items-center gap-2">
                <div className="w-1 h-1 rounded-full bg-gold opacity-40" />
                <span className="eyebrow text-text-dim opacity-60">Studio Mahatta</span>
              </div>
              <div className="absolute bottom-8 right-8 text-eyebrow text-text-dim opacity-40">
                New Delhi · Est. 2018
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
