import { useReveal } from '../hooks/useReveal'

const team = [
  {
    name:   'Muazim Khala',
    title:  'Founder & Producer',
    detail: 'Development, financing, and production strategy.',
  },
  {
    name:   '',
    title:  'Executive Producer',
    detail: 'International co-production and distribution.',
  },
  {
    name:   '',
    title:  'Chief AD',
    detail: 'Production design and on-set direction.',
  },
]

export default function Leadership() {
  const ref = useReveal()

  return (
    <section
      id="leadership"
      ref={ref}
      className="border-t border-border py-section"
      aria-labelledby="leadership-heading"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10">

        {/* Header */}
        <div className="reveal flex items-center gap-4 mb-16">
          <span className="eyebrow">The Studio</span>
          <div className="flex-1 h-px bg-border max-w-16" />
        </div>

        <h2
          id="leadership-heading"
          className="reveal reveal-delay-1 font-serif font-light text-headline text-text mb-16"
        >
          Leadership
        </h2>

        {/* Team grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border">
          {team.map(({ name, title, detail }, i) => (
            <div
              key={title}
              className={[
                'reveal',
                `reveal-delay-${i + 1}`,
                'bg-ink p-8 md:p-10 flex flex-col justify-between gap-8 min-h-[14rem]',
              ].join(' ')}
            >
              {/* Avatar placeholder */}
              <div className="w-10 h-10 border border-border flex items-center justify-center">
                <div className="w-3 h-3 border border-text-dim" />
              </div>

              {/* Name & title */}
              <div>
                {name && (
                  <p className="font-serif text-xl font-light text-text mb-1">{name}</p>
                )}
                {!name && (
                  <p className="font-serif text-xl font-light text-text-dim mb-1 italic">To be announced</p>
                )}
                <p className="eyebrow text-gold">{title}</p>
                <p className="font-sans text-sm font-light text-text-muted mt-3 leading-relaxed">{detail}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
