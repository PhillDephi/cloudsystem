import { aboutCopy, aboutStats, agency, skillGroups, trustBadges } from '../data/content'

export function Studio() {
  const caps = skillGroups[0]

  return (
    <section id="about" className="section-pad">
      <div className="container-site">
        <div className="grid gap-14 lg:grid-cols-[1.15fr_0.85fr]">
          <div>
            <p className="eyebrow">About</p>
            <h2 className="display mt-3 text-[clamp(2rem,4vw,3rem)]">
              A Shopify agency focused on sales results
            </h2>
            <div className="mt-7 space-y-4 text-[1.0625rem] leading-relaxed text-[var(--color-ink-soft)]">
              <p>{aboutCopy.intro}</p>
              <p>{aboutCopy.body}</p>
              <p>{aboutCopy.close}</p>
            </div>

            <div className="mt-10 grid grid-cols-2 gap-px overflow-hidden border border-[var(--color-line)] bg-[var(--color-line)] sm:grid-cols-4">
              {aboutStats.map((s) => (
                <div key={s.label} className="bg-white px-3 py-5 text-center">
                  <p className="display text-2xl tracking-tight">{s.value}</p>
                  <p className="mt-1 text-[0.75rem] text-[var(--color-ink-soft)]">{s.label}</p>
                </div>
              ))}
            </div>
          </div>

          <aside className="overflow-hidden border border-[var(--color-line)] bg-white">
            <img src={agency.photo} alt={agency.founder} className="h-64 w-full object-cover sm:h-72" />
            <div className="p-7">
              <p className="text-[0.8125rem] text-[var(--color-mute)]">Founder</p>
              <h3 className="mt-1 text-[1.375rem] font-semibold">{agency.founder}</h3>
              <p className="mt-4 text-[0.9375rem] leading-relaxed text-[var(--color-ink-soft)]">
                Shopify Partner with 7+ years building and improving ecommerce stores across 40+
                countries. English, Spanish, and French.
              </p>
              <div className="mt-6 border-t border-[var(--color-line)] pt-5">
                <img src={agency.partnersLogo} alt="Shopify Partners" className="h-7" />
              </div>
            </div>
          </aside>
        </div>

        <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
          {trustBadges.map((b) => (
            <div key={b.title} className="border border-[var(--color-line)] bg-white p-4">
              <p className="text-[0.875rem] font-semibold">{b.title}</p>
              <p className="mt-1 text-[0.8125rem] text-[var(--color-ink-soft)]">{b.detail}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 border border-[var(--color-line)] bg-white p-7 sm:p-10">
          <h3 className="text-[1.25rem] font-semibold">{caps.category}</h3>
          <div className="mt-8 grid gap-8 lg:grid-cols-2">
            {caps.items.map((item) => (
              <div key={item.name}>
                <div className="flex items-baseline justify-between gap-3">
                  <h4 className="text-[0.9375rem] font-medium">{item.name}</h4>
                  <span className="text-[0.875rem] font-semibold text-[var(--color-accent)]">
                    {item.level}%
                  </span>
                </div>
                <div className="mt-2 h-1 overflow-hidden bg-[var(--color-paper-2)]">
                  <div className="h-full bg-[var(--color-accent)]" style={{ width: `${item.level}%` }} />
                </div>
                <p className="mt-2 text-[0.875rem] text-[var(--color-ink-soft)]">{item.note}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
