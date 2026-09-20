import { agency, caseStudies } from '../data/content'

export function CaseStudies() {
  return (
    <section id="work" className="section-pad">
      <div className="container-site">
        <div className="max-w-2xl">
          <p className="eyebrow">Work</p>
          <h2 className="display mt-3 text-[clamp(2rem,4vw,3rem)]">Results from real stores</h2>
          <p className="mt-4 text-[1.0625rem] text-[var(--color-ink-soft)]">
            Before and after numbers from projects we delivered.
          </p>
        </div>

        <div className="mt-14 space-y-6">
          {caseStudies.map((cs, i) => (
            <article
              key={cs.title}
              className={`grid overflow-hidden border border-[var(--color-line)] bg-white lg:min-h-[300px] ${
                i % 2 === 1 ? 'lg:grid-cols-[1fr_1.1fr]' : 'lg:grid-cols-[1.1fr_1fr]'
              }`}
            >
              <div className={`relative min-h-[220px] ${i % 2 === 1 ? 'lg:order-2' : ''}`}>
                <img src={cs.image} alt="" className="absolute inset-0 h-full w-full object-cover" />
              </div>
              <div className="flex flex-col justify-center p-7 sm:p-9">
                <p className="text-[0.8125rem] text-[var(--color-mute)]">
                  {cs.category} · {cs.client}
                </p>
                <h3 className="mt-2 text-[1.375rem] font-semibold tracking-[-0.02em] sm:text-[1.5rem]">
                  {cs.title}
                </h3>
                <dl className="mt-7 grid grid-cols-2 gap-5">
                  {cs.metrics.map((m) => (
                    <div key={m.label}>
                      <dt className="text-[0.75rem] text-[var(--color-mute)]">{m.label}</dt>
                      <dd className="mt-1 text-[1.0625rem] font-semibold text-[var(--color-accent)]">
                        {m.value}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-14 border border-[var(--color-line)] bg-white p-8 sm:p-12">
          <h3 className="display max-w-2xl text-[clamp(1.75rem,3vw,2.25rem)]">
            Free 20-minute store review
          </h3>
          <p className="mt-3 max-w-xl text-[1.0625rem] text-[var(--color-ink-soft)]">
            We will show you three places your store is losing sales, and what to fix first. You keep
            the findings either way.
          </p>
          <a
            href={agency.whatsappLink}
            target="_blank"
            rel="noreferrer"
            className="mt-7 inline-flex h-11 items-center bg-[var(--color-accent)] px-5 text-[0.875rem] font-medium text-white hover:bg-[var(--color-accent-deep)]"
          >
            Book the review
          </a>
        </div>
      </div>
    </section>
  )
}
