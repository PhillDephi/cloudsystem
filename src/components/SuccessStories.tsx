import { successStories } from '../data/content'

export function SuccessStories() {
  return (
    <section id="clients" className="section-pad">
      <div className="container-site">
        <div className="max-w-2xl">
          <p className="eyebrow">Clients</p>
          <h2 className="display mt-3 text-[clamp(2rem,4vw,3rem)]">What clients report</h2>
        </div>

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {successStories.map((s) => (
            <article key={s.name} className="flex flex-col border border-[var(--color-line)] bg-white p-7">
              <p className="text-[0.75rem] font-medium text-[var(--color-accent)]">{s.stack}</p>
              <blockquote className="font-serif mt-5 flex-1 text-[1.125rem] leading-snug text-[var(--color-ink)]">
                “{s.quote}”
              </blockquote>
              <div className="mt-8 flex items-center gap-3 border-t border-[var(--color-line)] pt-5">
                <img src={s.photo} alt="" className="h-10 w-10 object-cover" />
                <div>
                  <p className="text-[0.875rem] font-medium">{s.name}</p>
                  <p className="text-[0.75rem] text-[var(--color-ink-soft)]">
                    {s.role}, {s.company}
                  </p>
                </div>
              </div>
              <div className="mt-5 grid grid-cols-3 gap-2">
                {s.metrics.map((m) => (
                  <div key={m.label} className="bg-[var(--color-paper)] px-2 py-3 text-center">
                    <p className="text-[0.9375rem] font-semibold">{m.value}</p>
                    <p className="mt-1 text-[0.6875rem] text-[var(--color-mute)]">{m.label}</p>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
