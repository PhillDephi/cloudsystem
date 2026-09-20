import { agency, services } from '../data/content'

export function Services() {
  return (
    <section id="services" className="section-pad">
      <div className="container-site">
        <div className="max-w-2xl">
          <p className="eyebrow">Services</p>
          <h2 className="display mt-3 text-[clamp(2rem,4vw,3rem)]">Clear services. Clear prices.</h2>
          <p className="mt-4 text-[1.0625rem] text-[var(--color-ink-soft)]">
            Each service includes consultation and support. Contact us to scope the right fit.
          </p>
        </div>

        <div className="mt-14 grid gap-px overflow-hidden border border-[var(--color-line)] bg-[var(--color-line)] sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <article key={s.title} className="flex flex-col bg-white p-7">
              <div className="flex items-start justify-between gap-4">
                <h3 className="text-[1.0625rem] font-semibold tracking-[-0.01em]">{s.title}</h3>
                <p className="shrink-0 text-[0.8125rem] font-medium text-[var(--color-ink-soft)]">
                  {s.price}
                </p>
              </div>
              <p className="mt-3 flex-1 text-[0.9375rem] leading-relaxed text-[var(--color-ink-soft)]">
                {s.description}
              </p>
              <div className="mt-8 flex items-center justify-between border-t border-[var(--color-line)] pt-4">
                <p className="text-[0.75rem] text-[var(--color-mute)]">
                  {s.rating}★ · {s.reviews} reviews
                </p>
                <a
                  href={agency.whatsappLink}
                  target="_blank"
                  rel="noreferrer"
                  className="text-[0.8125rem] font-medium text-[var(--color-accent)] hover:text-[var(--color-accent-deep)]"
                >
                  Ask about this
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
