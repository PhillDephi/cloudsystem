import { processSteps, revenueLeaks } from '../data/content'

export function MethodPage() {
  return (
    <div className="section-pad pt-8 sm:pt-10">
      <div className="container-site">
        <div className="anim-in max-w-2xl">
          <p className="eyebrow">Method</p>
          <h1 className="page-title mt-2">Six common sales losses, and how we fix them</h1>
          <p className="mt-3 text-[1rem] text-[var(--color-ink-soft)]">
            Same traffic. Same products. More completed orders.
          </p>
        </div>

        <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((p, i) => (
            <div
              key={p.step}
              className={`anim-in border border-[var(--color-line)] bg-white p-5 anim-in-${Math.min(i + 1, 3)}`}
            >
              <p className="font-mono text-[0.75rem] text-[var(--color-mute)]">{p.step}</p>
              <h2 className="mt-2 text-[1.0625rem] font-semibold">{p.title}</h2>
              <p className="mt-2 text-[0.875rem] text-[var(--color-ink-soft)]">{p.copy}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 overflow-hidden border border-[var(--color-line)] bg-white">
          <div className="border-b border-[var(--color-line)] bg-[var(--color-paper)] px-4 py-2.5 text-[0.75rem] font-semibold">
            Loss diagnosis table
          </div>
          <div className="hidden md:block">
            <table className="w-full border-collapse text-left">
              <thead>
                <tr className="border-b border-[var(--color-line)] text-[0.6875rem] uppercase tracking-[0.06em] text-[var(--color-mute)]">
                  <th className="px-4 py-3 font-medium">#</th>
                  <th className="px-4 py-3 font-medium">Problem</th>
                  <th className="px-4 py-3 font-medium">Fix</th>
                  <th className="px-4 py-3 font-medium">Typical result</th>
                </tr>
              </thead>
              <tbody>
                {revenueLeaks.map((leak, i) => (
                  <tr key={leak.problem} className="border-b border-[var(--color-line)] last:border-b-0 align-top">
                    <td className="px-4 py-4 font-mono text-[0.8125rem] text-[var(--color-mute)]">
                      {String(i + 1).padStart(2, '0')}
                    </td>
                    <td className="px-4 py-4 text-[0.9375rem] font-semibold">{leak.problem}</td>
                    <td className="px-4 py-4 text-[0.875rem] text-[var(--color-ink-soft)]">{leak.fix}</td>
                    <td className="px-4 py-4 font-mono text-[0.8125rem] font-semibold text-[var(--color-accent)]">
                      {leak.result}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="md:hidden">
            {revenueLeaks.map((leak, i) => (
              <article key={leak.problem} className="border-b border-[var(--color-line)] p-4 last:border-b-0">
                <p className="font-mono text-[0.75rem] text-[var(--color-mute)]">
                  {String(i + 1).padStart(2, '0')}
                </p>
                <h2 className="mt-1 text-[1rem] font-semibold">{leak.problem}</h2>
                <p className="mt-2 text-[0.875rem] text-[var(--color-ink-soft)]">{leak.fix}</p>
                <p className="mt-3 font-mono text-[0.8125rem] font-semibold text-[var(--color-accent)]">
                  {leak.result}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
