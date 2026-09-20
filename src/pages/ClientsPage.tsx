import { useState } from 'react'
import { salesVideos, successStories, testimonials } from '../data/content'

export function ClientsPage() {
  const [index, setIndex] = useState(0)
  const current = salesVideos[index]

  return (
    <div className="section-pad pt-8 sm:pt-10">
      <div className="container-site space-y-14">
        <div className="anim-in max-w-2xl">
          <p className="eyebrow">Clients</p>
          <h1 className="page-title mt-2">What clients report</h1>
        </div>

        <div className="grid gap-4 lg:grid-cols-3">
          {successStories.map((s) => (
            <article key={s.name} className="flex flex-col border border-[var(--color-line)] bg-white p-5 sm:p-6">
              <p className="text-[0.75rem] font-medium text-[var(--color-accent)]">{s.stack}</p>
              <blockquote className="font-serif mt-4 flex-1 text-[1.0625rem] leading-snug">
                “{s.quote}”
              </blockquote>
              <div className="mt-6 flex items-center gap-3 border-t border-[var(--color-line)] pt-4">
                <img src={s.photo} alt="" className="h-10 w-10 object-cover" />
                <div>
                  <p className="text-[0.875rem] font-medium">{s.name}</p>
                  <p className="text-[0.75rem] text-[var(--color-ink-soft)]">
                    {s.role}, {s.company}
                  </p>
                </div>
              </div>
              <div className="mt-4 overflow-hidden border border-[var(--color-line)]">
                <table className="w-full border-collapse">
                  <tbody>
                    {s.metrics.map((m) => (
                      <tr key={m.label} className="border-b border-[var(--color-line)] last:border-b-0">
                        <td className="px-2.5 py-2 text-[0.75rem] text-[var(--color-mute)]">{m.label}</td>
                        <td className="px-2.5 py-2 text-right font-mono text-[0.8125rem] font-semibold">
                          {m.value}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </article>
          ))}
        </div>

        <section>
          <h2 className="page-title">Client videos</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((t) => (
              <figure key={t.name} className="overflow-hidden border border-[var(--color-line)] bg-[var(--color-ink)]">
                <video
                  className="aspect-[9/16] w-full object-cover"
                  src={t.video}
                  controls
                  playsInline
                  preload="metadata"
                />
                <figcaption className="border-t border-white/10 px-4 py-3 text-white">
                  <p className="font-medium">{t.name}</p>
                  <p className="text-[0.8125rem] text-white/50">{t.niche}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </section>

        <section>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="page-title">Sales videos we produced</h2>
              <p className="mt-2 text-[0.9375rem] text-[var(--color-ink-soft)]">
                High-converting video ads for client campaigns.
              </p>
            </div>
            <p className="font-mono text-[0.875rem] text-[var(--color-ink-soft)]">
              {index + 1} / {salesVideos.length}
            </p>
          </div>

          <div className="mt-6 overflow-hidden border border-[var(--color-line)] bg-[var(--color-ink)]">
            <video
              key={current.src}
              className="aspect-video w-full object-contain"
              src={current.src}
              controls
              playsInline
              preload="metadata"
            />
          </div>

          <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <p className="font-medium">{current.title}</p>
            <div className="grid grid-cols-2 gap-2 sm:flex">
              <button
                type="button"
                onClick={() => setIndex((i) => (i === 0 ? salesVideos.length - 1 : i - 1))}
                className="h-11 border border-[var(--color-line-strong)] bg-white px-4 text-[0.8125rem] font-medium sm:h-9"
              >
                Previous
              </button>
              <button
                type="button"
                onClick={() => setIndex((i) => (i === salesVideos.length - 1 ? 0 : i + 1))}
                className="h-11 bg-[var(--color-ink)] px-4 text-[0.8125rem] font-medium text-white sm:h-9"
              >
                Next
              </button>
            </div>
          </div>

          <div className="mt-4 flex gap-2 overflow-x-auto pb-1">
            {salesVideos.map((v, i) => (
              <button
                key={v.src}
                type="button"
                onClick={() => setIndex(i)}
                className={`h-9 shrink-0 border px-3 font-mono text-[0.75rem] ${
                  i === index
                    ? 'border-[var(--color-accent)] bg-[var(--color-accent)] text-white'
                    : 'border-[var(--color-line)] bg-white'
                }`}
              >
                {String(i + 1).padStart(2, '0')}
              </button>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}
