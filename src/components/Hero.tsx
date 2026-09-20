import { agency } from '../data/content'

export function Hero() {
  return (
    <section id="top" className="pt-16">
      <div className="container-site grid min-h-[min(88vh,760px)] items-center gap-16 py-20 lg:grid-cols-[1.2fr_0.8fr] lg:py-28">
        <div>
          <p className="eyebrow">Shopify growth agency</p>
          <h1 className="display mt-5 max-w-[11ch] text-[clamp(2.75rem,6.5vw,4.75rem)]">
            Turn paid traffic into paid orders.
          </h1>
          <p className="body-lg mt-6 max-w-xl">
            Most Shopify stores lose 60–80% of possible sales after the click. We find those losses,
            fix them, and help you keep more of the revenue you already spend to acquire.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-3">
            <a
              href={agency.whatsappLink}
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-11 items-center bg-[var(--color-accent)] px-5 text-[0.875rem] font-medium text-white transition-colors hover:bg-[var(--color-accent-deep)]"
            >
              Book a free store review
            </a>
            <a
              href="#work"
              className="inline-flex h-11 items-center border border-[var(--color-line-strong)] bg-white px-5 text-[0.875rem] font-medium transition-colors hover:border-[var(--color-ink)]"
            >
              See results
            </a>
          </div>
        </div>

        <aside className="border border-[var(--color-line)] bg-white p-8">
          <p className="text-[0.8125rem] font-medium text-[var(--color-mute)]">What clients see</p>
          <ul className="mt-6 space-y-6">
            <li className="border-b border-[var(--color-line)] pb-6">
              <p className="display text-3xl tracking-tight">60–80%</p>
              <p className="mt-1 text-[0.9375rem] text-[var(--color-ink-soft)]">
                Average sales recovered within 60 days
              </p>
            </li>
            <li className="border-b border-[var(--color-line)] pb-6">
              <p className="display text-3xl tracking-tight">14 days</p>
              <p className="mt-1 text-[0.9375rem] text-[var(--color-ink-soft)]">
                First measurable sales improvement
              </p>
            </li>
            <li>
              <p className="display text-3xl tracking-tight">1,500+</p>
              <p className="mt-1 text-[0.9375rem] text-[var(--color-ink-soft)]">
                Shopify stores improved across 40+ countries
              </p>
            </li>
          </ul>
          <div className="mt-8 flex items-center gap-3 border-t border-[var(--color-line)] pt-6">
            <img src={agency.badge} alt="Shopify Partner" className="h-10 w-10" />
            <div>
              <p className="text-[0.875rem] font-medium">Shopify Partner</p>
              <p className="text-[0.8125rem] text-[var(--color-ink-soft)]">Certified</p>
            </div>
          </div>
        </aside>
      </div>
    </section>
  )
}
