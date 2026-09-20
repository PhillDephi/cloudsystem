import { agency, liveProjects, portfolioStats } from '../data/content'

export function LiveProjects() {
  return (
    <section className="section-pad border-t border-[var(--color-line)]">
      <div className="container-site">
        <div className="max-w-2xl">
          <p className="eyebrow">Projects</p>
          <h2 className="display mt-3 text-[clamp(2rem,4vw,3rem)]">Live stores and campaigns</h2>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {liveProjects.map((p) => (
            <article key={p.title} className="flex flex-col overflow-hidden border border-[var(--color-line)] bg-white">
              <div className="relative aspect-[16/10]">
                <img src={p.image} alt="" className="absolute inset-0 h-full w-full object-cover" />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-4 pt-12 text-white">
                  <p className="text-[0.75rem] text-white/70">{p.tag}</p>
                  <p className="mt-0.5 text-[0.9375rem] font-semibold">{p.highlight}</p>
                </div>
              </div>
              <div className="flex flex-1 flex-col p-5">
                <h3 className="text-[1.0625rem] font-semibold">{p.title}</h3>
                <p className="mt-2 flex-1 text-[0.875rem] leading-relaxed text-[var(--color-ink-soft)]">
                  {p.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tags.map((tag) => (
                    <span
                      key={tag}
                      className="border border-[var(--color-line)] px-2 py-1 text-[0.6875rem] text-[var(--color-ink-soft)]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <a
                  href={p.url !== '#' ? p.url : agency.whatsappLink}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-5 text-[0.8125rem] font-medium text-[var(--color-accent)]"
                >
                  {p.url !== '#' ? 'View live store' : 'Ask about this project'}
                </a>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 grid grid-cols-2 gap-px overflow-hidden border border-[var(--color-line)] bg-[var(--color-line)] sm:grid-cols-5">
          {portfolioStats.map((s) => (
            <div key={s.label} className="bg-white px-3 py-6 text-center">
              <p className="display text-2xl tracking-tight sm:text-3xl">{s.value}</p>
              <p className="mt-2 text-[0.75rem] text-[var(--color-ink-soft)]">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
