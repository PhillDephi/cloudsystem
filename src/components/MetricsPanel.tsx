type Metric = {
  value: string
  label: string
  unit?: string
  period?: string
}

type Props = {
  title?: string
  rows: readonly Metric[]
  dense?: boolean
}

export function MetricsPanel({ title = 'Performance summary', rows, dense = false }: Props) {
  return (
    <div className="anim-in overflow-hidden border border-[var(--color-line)] bg-white">
      <div className="flex items-center justify-between gap-3 border-b border-[var(--color-line)] bg-[var(--color-paper)] px-3 py-2.5 sm:px-4">
        <p className="text-[0.75rem] font-semibold tracking-wide text-[var(--color-ink)]">{title}</p>
        <p className="text-[0.6875rem] font-medium uppercase tracking-[0.08em] text-[var(--color-mute)]">
          Live data
        </p>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full min-w-[280px] border-collapse text-left">
          <thead>
            <tr className="border-b border-[var(--color-line)] text-[0.6875rem] uppercase tracking-[0.06em] text-[var(--color-mute)]">
              <th className="px-3 py-2.5 font-medium sm:px-4">Metric</th>
              <th className="px-3 py-2.5 font-medium sm:px-4">Value</th>
              <th className="hidden px-3 py-2.5 font-medium sm:table-cell sm:px-4">Unit</th>
              <th className="hidden px-3 py-2.5 font-medium md:table-cell md:px-4">Period</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr
                key={row.label}
                className="border-b border-[var(--color-line)] last:border-b-0 transition-colors hover:bg-[var(--color-paper)]"
              >
                <td className={`px-3 sm:px-4 ${dense ? 'py-2.5' : 'py-3.5'} text-[0.875rem] text-[var(--color-ink-soft)]`}>
                  {row.label}
                </td>
                <td className={`px-3 sm:px-4 ${dense ? 'py-2.5' : 'py-3.5'} font-mono text-[0.9375rem] font-semibold tracking-tight text-[var(--color-ink)] sm:text-[1.0625rem]`}>
                  {row.value}
                </td>
                <td className="hidden px-3 py-3.5 font-mono text-[0.75rem] text-[var(--color-mute)] sm:table-cell sm:px-4">
                  {row.unit ?? 'n/a'}
                </td>
                <td className="hidden px-3 py-3.5 text-[0.75rem] text-[var(--color-mute)] md:table-cell md:px-4">
                  {row.period ?? 'All time'}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

type KpiProps = {
  rows: readonly { metric: string; value: string; window: string }[]
}

export function KpiStrip({ rows }: KpiProps) {
  return (
    <div className="grid grid-cols-1 gap-px overflow-hidden border border-[var(--color-line)] bg-[var(--color-line)] sm:grid-cols-3">
      {rows.map((row, i) => (
        <div
          key={row.metric}
          className={`anim-in bg-white p-4 sm:p-5 ${i === 0 ? 'anim-in-1' : i === 1 ? 'anim-in-2' : 'anim-in-3'}`}
        >
          <p className="text-[0.6875rem] font-medium uppercase tracking-[0.08em] text-[var(--color-mute)]">
            {row.metric}
          </p>
          <p className="mt-2 font-mono text-[1.5rem] font-semibold tracking-tight sm:text-[1.75rem]">
            {row.value}
          </p>
          <p className="mt-1 text-[0.75rem] text-[var(--color-ink-soft)]">{row.window}</p>
        </div>
      ))}
    </div>
  )
}

type CaseMetricsProps = {
  metrics: { label: string; value: string }[]
}

export function CaseMetricsTable({ metrics }: CaseMetricsProps) {
  return (
    <div className="overflow-hidden border border-[var(--color-line)]">
      <table className="w-full border-collapse text-left">
        <thead>
          <tr className="border-b border-[var(--color-line)] bg-[var(--color-paper)] text-[0.6875rem] uppercase tracking-[0.06em] text-[var(--color-mute)]">
            <th className="px-3 py-2 font-medium">Field</th>
            <th className="px-3 py-2 font-medium">Result</th>
          </tr>
        </thead>
        <tbody>
          {metrics.map((m) => (
            <tr key={m.label} className="border-b border-[var(--color-line)] last:border-b-0">
              <td className="px-3 py-2.5 text-[0.8125rem] text-[var(--color-ink-soft)]">{m.label}</td>
              <td className="px-3 py-2.5 font-mono text-[0.875rem] font-semibold text-[var(--color-accent)]">
                {m.value}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
