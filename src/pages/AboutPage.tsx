import { aboutCopy, aboutStats, agency, niches, skillGroups, trustBadges } from '../data/content'
import { MetricsPanel } from '../components/MetricsPanel'

export function AboutPage() {
  const caps = skillGroups[0]

  return (
    <div className="section-pad pt-8 sm:pt-10">
      <div className="container-site space-y-12">
        <div className="anim-in grid gap-10 lg:grid-cols-[1.15fr_0.85fr]">
          <div>
            <p className="eyebrow">About</p>
            <h1 className="page-title mt-2">A Shopify agency focused on sales results</h1>
            <div className="mt-6 space-y-4 text-[1rem] leading-relaxed text-[var(--color-ink-soft)]">
              <p>{aboutCopy.intro}</p>
              <p>{aboutCopy.body}</p>
              <p>{aboutCopy.close}</p>
            </div>
            <div className="mt-8">
              <MetricsPanel title="Studio snapshot" rows={aboutStats} dense />
            </div>
          </div>

          <aside className="overflow-hidden border border-[var(--color-line)] bg-white">
            <img src={agency.photo} alt={agency.founder} className="h-56 w-full object-cover sm:h-64" />
            <div className="p-5 sm:p-6">
              <p className="text-[0.8125rem] text-[var(--color-mute)]">Founder</p>
              <h2 className="mt-1 text-[1.25rem] font-semibold">{agency.founder}</h2>
              <p className="mt-3 text-[0.9375rem] text-[var(--color-ink-soft)]">
                Shopify Partner with 7+ years building and improving ecommerce stores across 40+
                countries. English, Spanish, and French.
              </p>
              <div className="mt-5 border-t border-[var(--color-line)] pt-4">
                <img src={agency.partnersLogo} alt="Shopify Partners" className="h-7" />
              </div>
            </div>
          </aside>
        </div>

        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
          {trustBadges.map((b) => (
            <div key={b.title} className="border border-[var(--color-line)] bg-white p-4">
              <p className="text-[0.875rem] font-semibold">{b.title}</p>
              <p className="mt-1 text-[0.8125rem] text-[var(--color-ink-soft)]">{b.detail}</p>
            </div>
          ))}
        </div>

        <section>
          <h2 className="page-title">Who we work with</h2>
          <div className="mt-6 grid gap-px overflow-hidden border border-[var(--color-line)] bg-[var(--color-line)] sm:grid-cols-2 lg:grid-cols-3">
            {niches.map((n) => (
              <article key={n.title} className="bg-white p-5">
                <h3 className="font-semibold">{n.title}</h3>
                <p className="mt-2 text-[0.875rem] text-[var(--color-ink-soft)]">{n.copy}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="border border-[var(--color-line)] bg-white p-5 sm:p-8">
          <h2 className="text-[1.25rem] font-semibold">{caps.category}</h2>
          <div className="mt-6 grid gap-6 lg:grid-cols-2">
            {caps.items.map((item) => (
              <div key={item.name}>
                <div className="flex items-baseline justify-between gap-3">
                  <h3 className="text-[0.9375rem] font-medium">{item.name}</h3>
                  <span className="font-mono text-[0.875rem] font-semibold text-[var(--color-accent)]">
                    {item.level}%
                  </span>
                </div>
                <div className="mt-2 h-1.5 overflow-hidden bg-[var(--color-paper-2)]">
                  <div
                    className="h-full bg-[var(--color-accent)] transition-[width] duration-700"
                    style={{ width: `${item.level}%` }}
                  />
                </div>
                <p className="mt-2 text-[0.875rem] text-[var(--color-ink-soft)]">{item.note}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}
