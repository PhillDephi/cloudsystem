import { brandLogos, topMetrics } from '../data/content'

export function ProofBar() {
  return (
    <section className="border-y border-[var(--color-line)] bg-white">
      <div className="container-site py-12">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-4">
          {topMetrics.map((m) => (
            <div key={m.label}>
              <p className="display text-3xl tracking-tight sm:text-4xl">{m.value}</p>
              <p className="mt-2 text-[0.8125rem] text-[var(--color-ink-soft)]">{m.label}</p>
            </div>
          ))}
        </div>
        <div className="mt-12 border-t border-[var(--color-line)] pt-8">
          <p className="text-center text-[0.75rem] font-medium text-[var(--color-mute)]">
            Platforms we work with
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-x-10 gap-y-5 opacity-50 grayscale">
            {brandLogos.map((logo) => (
              <img
                key={logo.name}
                src={logo.src}
                alt={logo.name}
                className="h-5 w-auto max-w-[80px] object-contain"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
