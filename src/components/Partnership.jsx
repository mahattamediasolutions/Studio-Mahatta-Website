import { useReveal } from '../hooks/useReveal'

const partnerTypes = [
  { label: 'OTT Platforms',           desc: 'Streaming rights across global and regional platforms.' },
  { label: 'Theatrical Distributors', desc: 'India-wide and international theatrical partnerships.' },
  { label: 'Co-Production',           desc: 'International co-production and financing structures.' },
  { label: 'Broadcast Networks',      desc: 'Linear TV and broadcast licensing arrangements.' },
]

export default function Partnership() {
  const ref = useReveal()

  return (
    <section
      id="partnership"
      ref={ref}
      className="border-t border-border py-section bg-surface"
      aria-labelledby="partnership-heading"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">

          {/* Left — copy */}
          <div className="space-y-8">
            <span className="reveal eyebrow block">Distribution &amp; Co-Production</span>

            <h2
              id="partnership-heading"
              className="reveal reveal-delay-1 font-serif font-light text-headline text-text text-balance"
            >
              Global Partners, Strategic Reach
            </h2>

            <p className="reveal reveal-delay-2 font-sans text-[0.9375rem] font-light text-text-muted leading-relaxed max-w-prose-md">
              Studio Mahatta collaborates with OTT platforms, theatrical distributors, and
              international co-production partners. We bring content ready for global formats,
              with production discipline that meets international delivery standards.
            </p>

            <div className="reveal reveal-delay-3 pt-2">
              <a
                href="mailto:contact@studiomahatta.com"
                className="inline-flex items-center gap-3 px-7 py-3.5 bg-gold text-ink text-eyebrow font-medium tracking-widest hover:bg-gold-light transition-colors duration-300"
              >
                Partner With Us
                <span aria-hidden="true">→</span>
              </a>
            </div>

            <p className="reveal reveal-delay-4 text-eyebrow text-text-dim mt-4">
              contact@studiomahatta.com
            </p>
          </div>

          {/* Right — partnership types */}
          <div className="space-y-px">
            {partnerTypes.map(({ label, desc }, i) => (
              <div
                key={label}
                className={[
                  'reveal',
                  `reveal-delay-${i + 1}`,
                  'group flex items-start gap-5 p-6',
                  'border border-transparent hover:border-border',
                  'transition-all duration-400',
                  'cursor-default',
                ].join(' ')}
              >
                <div className="mt-1 w-1 h-1 rounded-full bg-gold flex-shrink-0" />
                <div>
                  <p className="font-sans text-sm font-medium text-text mb-1">{label}</p>
                  <p className="font-sans text-sm font-light text-text-muted">{desc}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
