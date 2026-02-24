import { useReveal } from '../hooks/useReveal'

const projects = [
  {
    id:     'bhakt-prahlad',
    title:  'Bhakt Prahlad',
    format: 'Animated Feature',
    phase:  'Final Post',
    year:   '2026',
    seq:    '01',
    note:   'Ancient India — devotion, power, and cosmic order. A feature-length animated film.',
  },
  {
    id:     'making-of-scriptures',
    title:  'Making of the Scriptures',
    format: 'Documentary Feature',
    phase:  'Research',
    year:   '2026–27',
    seq:    '02',
    note:   'The composition, oral tradition, and textual history of India\'s foundational texts.',
  },
  {
    id:     'history-of-kashmir',
    title:  'History of Kashmir — Rise of Islam',
    format: 'Docuseries',
    phase:  'Development',
    year:   '2027',
    seq:    '03',
    note:   'A multi-part historical series examining political, religious, and cultural transformation.',
  },
  {
    id:     'operation-gulmarg',
    title:  'Operation Gulmarg',
    format: 'Feature Film',
    phase:  'Script & Previz',
    year:   '2028',
    seq:    '04',
    note:   'A tense, research-driven dramatisation of a pivotal military and diplomatic event.',
  },
]

const phaseColors = {
  'Final Post':     'text-gold border-gold/30',
  'Research':       'text-text-muted border-border',
  'Development':    'text-text-muted border-border',
  'Script & Previz':'text-text-muted border-border',
}

export default function Slate() {
  const ref = useReveal({ threshold: 0.06 })

  return (
    <section
      id="slate"
      ref={ref}
      className="border-t border-border py-section"
      aria-labelledby="slate-heading"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10">

        {/* Section header */}
        <div className="reveal flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-16">
          <div>
            <span className="eyebrow block mb-4">Production Slate</span>
            <h2
              id="slate-heading"
              className="font-serif font-light text-headline text-text"
            >
              Current Projects
            </h2>
          </div>
          <p className="reveal reveal-delay-1 font-sans text-sm text-text-muted max-w-xs leading-relaxed">
            Four titles across animated feature, documentary, docuseries, and live-action formats.
          </p>
        </div>

        {/* Project grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border">
          {projects.map((p, i) => (
            <SlateCard key={p.id} project={p} index={i} />
          ))}
        </div>

        {/* Slate note */}
        <p className="reveal reveal-delay-2 mt-8 text-eyebrow text-text-dim">
          Slate subject to change. Production phases reflect current status as of Q1 2026.
        </p>

      </div>
    </section>
  )
}

function SlateCard({ project, index }) {
  const { title, format, phase, year, seq, note } = project
  const delayClass = `reveal-delay-${index + 1}`
  const phaseStyle = phaseColors[phase] ?? 'text-text-muted border-border'

  return (
    <article
      className={[
        'reveal', delayClass,
        'group relative bg-card',
        'p-8 md:p-10',
        'flex flex-col justify-between gap-8 min-h-[22rem]',
        'border border-transparent', // gap fill
        'transition-all duration-400 ease-cinematic',
        'hover:bg-card-hover hover:-translate-y-0.5',
        'cursor-default',
      ].join(' ')}
    >
      {/* Top row */}
      <div className="flex items-start justify-between gap-4">
        {/* Sequence number */}
        <span className="font-serif text-5xl font-light text-text-dim leading-none select-none">
          {seq}
        </span>

        {/* Phase badge */}
        <span
          className={[
            'inline-flex items-center px-3 py-1 border text-eyebrow',
            phaseStyle,
          ].join(' ')}
        >
          {phase}
        </span>
      </div>

      {/* Title block */}
      <div className="flex-1">
        <h3 className="font-serif font-light text-title text-text mb-2 leading-tight">
          {title}
        </h3>
        <p className="font-sans text-sm text-text-muted font-light mt-3 leading-relaxed max-w-prose-sm opacity-0 group-hover:opacity-100 transition-opacity duration-400">
          {note}
        </p>
      </div>

      {/* Bottom meta */}
      <div className="flex items-center justify-between pt-6 border-t border-border group-hover:border-border-light transition-colors duration-400">
        <span className="eyebrow text-text-dim">{format}</span>
        <span className="font-serif text-base text-text-muted">{year}</span>
      </div>

      {/* Hover accent line — left edge */}
      <div className="absolute left-0 top-0 bottom-0 w-px bg-gold scale-y-0 group-hover:scale-y-100 transition-transform duration-400 ease-cinematic origin-top" />
    </article>
  )
}
