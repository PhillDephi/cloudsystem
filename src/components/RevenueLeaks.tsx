import { processSteps, revenueLeaks } from '../data/content'

export function RevenueLeaks() {
  return (
    <section id="method" className="section-pad bg-[var(--color-ink)] text-white">
      <div className="container-site">
        <div className="max-w-2xl">
          <p className="text-[0.8125rem] font-medium text-[rgba(255,255,255,0.55)]">Method</p>
          <h2 className="display mt-3 text-[clamp(2rem,4vw,3rem)]">
            Six common sales losses — and how we fix them
          </h2>
          <p className="mt-4 text-[1.0625rem] leading-relaxed text-white/60">
            Same traffic. Same products. More completed orders.
          </p>
        </div>

        <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((p) => (
            <div key={p.step} className="border border-white/10 p-5">
              <p className="text-[0.75rem] font-medium text-white/40">{p.step}</p>
              <h3 className="mt-3 text-[1.0625rem] font-semibold">{p.title}</h3>
              <p className="mt-2 text-[0.875rem] leading-relaxed text-white/55">{p.copy}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 grid gap-3 lg:grid-cols-2">
          {revenueLeaks.map((leak, i) => (
            <article key={leak.problem} className="border border-white/10 p-6 sm:p-7">
              <p className="text-[0.75rem] font-medium text-white/40">
                {String(i + 1).padStart(2, '0')}
              </p>
              <h3 className="mt-3 text-[1.125rem] font-semibold">{leak.problem}</h3>
              <p className="mt-3 text-[0.9375rem] leading-relaxed text-white/60">{leak.fix}</p>
              <p className="mt-5 border-t border-white/10 pt-4 text-[0.875rem] font-medium text-white">
                {leak.result}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
