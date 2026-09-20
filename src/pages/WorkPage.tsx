import { agency, caseStudies, liveProjects, portfolioStats } from '../data/content'
import { CaseMetricsTable, MetricsPanel } from '../components/MetricsPanel'

export function WorkPage() {
  return (
    <div className="section-pad pt-8 sm:pt-10">
      <div className="container-site">
        <div className="anim-in max-w-2xl">
          <p className="eyebrow">Work</p>
          <h1 className="page-title mt-2">Results from real stores</h1>
          <p className="mt-3 text-[1rem] text-[var(--color-ink-soft)]">
            Before and after numbers from projects we delivered.
          </p>
        </div>

        <div className="mt-8">
          <MetricsPanel title="Portfolio summary" rows={portfolioStats} dense />
        </div>

        <div className="mt-10 space-y-6">
          {caseStudies.map((cs, i) => (
            <article
              key={cs.title}
              className={`anim-in overflow-hidden border border-[var(--color-line)] bg-white lg:grid lg:min-h-[280px] ${
                i % 2 === 1 ? 'lg:grid-cols-[1fr_1.05fr]' : 'lg:grid-cols-[1.05fr_1fr]'
              }`}
            >
              <div className={`relative aspect-[16/10] lg:aspect-auto ${i % 2 === 1 ? 'lg:order-2' : ''}`}>
                <img src={cs.image} alt="" className="absolute inset-0 h-full w-full object-cover" />
              </div>
              <div className="flex flex-col justify-center p-5 sm:p-8">
                <p className="text-[0.8125rem] text-[var(--color-mute)]">
                  {cs.category} · {cs.client}
                </p>
                <h2 className="mt-2 text-[1.25rem] font-semibold tracking-[-0.02em] sm:text-[1.375rem]">
                  {cs.title}
                </h2>
                <div className="mt-5">
                  <CaseMetricsTable metrics={cs.metrics} />
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-14">
          <h2 className="page-title">Live stores and campaigns</h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {liveProjects.map((p) => (
              <article key={p.title} className="flex flex-col overflow-hidden border border-[var(--color-line)] bg-white">
                <div className="relative aspect-[16/10]">
                  <img src={p.image} alt="" className="absolute inset-0 h-full w-full object-cover" />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/75 to-transparent p-3 pt-10 text-white">
                    <p className="text-[0.75rem] text-white/70">{p.tag}</p>
                    <p className="font-mono text-[0.875rem] font-semibold">{p.highlight}</p>
                  </div>
                </div>
                <div className="flex flex-1 flex-col p-4">
                  <h3 className="font-semibold">{p.title}</h3>
                  <p className="mt-2 flex-1 text-[0.875rem] text-[var(--color-ink-soft)]">{p.description}</p>
                  <a
                    href={p.url !== '#' ? p.url : agency.whatsappLink}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-4 text-[0.8125rem] font-medium text-[var(--color-accent)]"
                  >
                    {p.url !== '#' ? 'View live store' : 'Ask about this project'}
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-12 border border-[var(--color-line)] bg-white p-6 sm:p-8">
          <h2 className="text-[1.25rem] font-semibold">Free 20-minute store review</h2>
          <p className="mt-2 text-[0.9375rem] text-[var(--color-ink-soft)]">
            Three places your store is losing sales, and what to fix first.
          </p>
          <a
            href={agency.whatsappLink}
            target="_blank"
            rel="noreferrer"
            className="mt-5 inline-flex h-11 items-center bg-[var(--color-accent)] px-5 text-[0.875rem] font-medium text-white"
          >
            Book the review
          </a>
        </div>
      </div>
    </div>
  )
}
