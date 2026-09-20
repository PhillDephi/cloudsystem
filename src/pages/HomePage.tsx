import { Link } from 'react-router-dom'
import { agency, brandLogos, heroKpis, services, topMetrics } from '../data/content'
import { KpiStrip, MetricsPanel } from '../components/MetricsPanel'

export function HomePage() {
  return (
    <>
      <section className="section-pad pt-8 sm:pt-12">
        <div className="container-site grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-end lg:gap-14">
          <div className="anim-in">
            <p className="eyebrow">Shopify Growth Agency</p>
            <h1 className="page-title mt-3 max-w-[14ch]">
              Turn paid traffic into paid orders.
            </h1>
            <p className="body-lg mt-5 max-w-xl">
              Most Shopify stores lose 60 to 80% of possible sales after the click. We find those
              losses, fix them, and help you keep more of the revenue you already spend to acquire.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href={agency.whatsappLink}
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-11 items-center justify-center bg-[var(--color-accent)] px-5 text-[0.875rem] font-medium text-white transition-colors hover:bg-[var(--color-accent-deep)]"
              >
                Book a free store review
              </a>
              <Link
                to="/work"
                className="inline-flex h-11 items-center justify-center border border-[var(--color-line-strong)] bg-white px-5 text-[0.875rem] font-medium transition-colors hover:border-[var(--color-ink)]"
              >
                View work
              </Link>
            </div>
          </div>

          <div className="anim-in anim-in-2 space-y-4">
            <KpiStrip rows={heroKpis} />
            <div className="flex items-center gap-3 border border-[var(--color-line)] bg-white p-4">
              <img src={agency.badge} alt="Shopify Partner" className="h-10 w-10" />
              <div>
                <p className="text-[0.875rem] font-medium">Shopify Partner</p>
                <p className="text-[0.8125rem] text-[var(--color-ink-soft)]">Certified practice</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-[var(--color-line)] bg-white py-10 sm:py-12">
        <div className="container-site space-y-10">
          <MetricsPanel title="Agency performance summary" rows={topMetrics} />
          <div>
            <p className="text-center text-[0.75rem] font-medium text-[var(--color-mute)]">
              Platforms we work with
            </p>
            <div className="mt-5 flex flex-wrap items-center justify-center gap-x-8 gap-y-4 opacity-50 grayscale">
              {brandLogos.map((logo) => (
                <img
                  key={logo.name}
                  src={logo.src}
                  alt={logo.name}
                  className="h-4 w-auto max-w-[72px] object-contain sm:h-5"
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-site">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div className="max-w-xl">
              <p className="eyebrow">Services</p>
              <h2 className="page-title mt-2">What we deliver</h2>
            </div>
            <Link to="/services" className="text-[0.875rem] font-medium text-[var(--color-accent)]">
              All services
            </Link>
          </div>
          <div className="mt-8 grid gap-px overflow-hidden border border-[var(--color-line)] bg-[var(--color-line)] sm:grid-cols-2 lg:grid-cols-3">
            {services.slice(0, 6).map((s) => (
              <article key={s.title} className="bg-white p-5 sm:p-6">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="text-[1rem] font-semibold">{s.title}</h3>
                  <p className="shrink-0 font-mono text-[0.75rem] text-[var(--color-ink-soft)]">
                    {s.price}
                  </p>
                </div>
                <p className="mt-2 text-[0.875rem] leading-relaxed text-[var(--color-ink-soft)]">
                  {s.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad pt-0">
        <div className="container-site">
          <div className="border border-[var(--color-line)] bg-white p-6 sm:p-10">
            <h2 className="page-title max-w-xl">Free 20-minute store review</h2>
            <p className="mt-3 max-w-lg text-[1rem] text-[var(--color-ink-soft)]">
              We show you three places your store is losing sales, and what to fix first. You keep
              the findings either way.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <a
                href={agency.whatsappLink}
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-11 items-center justify-center bg-[var(--color-accent)] px-5 text-[0.875rem] font-medium text-white"
              >
                Book on WhatsApp
              </a>
              <Link
                to="/contact"
                className="inline-flex h-11 items-center justify-center border border-[var(--color-line-strong)] px-5 text-[0.875rem] font-medium"
              >
                Contact page
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
