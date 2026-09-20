import { niches } from '../data/content'

export function Niches() {
  return (
    <section className="section-pad border-t border-[var(--color-line)]">
      <div className="container-site">
        <div className="max-w-2xl">
          <p className="eyebrow">Industries</p>
          <h2 className="display mt-3 text-[clamp(2rem,4vw,3rem)]">Who we work with</h2>
          <p className="mt-4 text-[1.0625rem] text-[var(--color-ink-soft)]">
            Stores with real products and real traffic that need more completed orders.
          </p>
        </div>

        <div className="mt-12 grid gap-px overflow-hidden border border-[var(--color-line)] bg-[var(--color-line)] sm:grid-cols-2 lg:grid-cols-3">
          {niches.map((n) => (
            <article key={n.title} className="bg-white p-7">
              <h3 className="text-[1.0625rem] font-semibold">{n.title}</h3>
              <p className="mt-3 text-[0.9375rem] leading-relaxed text-[var(--color-ink-soft)]">
                {n.copy}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
