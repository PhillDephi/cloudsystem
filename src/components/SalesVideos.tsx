import { useState } from 'react'
import { salesVideos } from '../data/content'

export function SalesVideos() {
  const [index, setIndex] = useState(0)
  const current = salesVideos[index]

  return (
    <section className="section-pad">
      <div className="container-site">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <p className="eyebrow">Creative</p>
            <h2 className="display mt-3 text-[clamp(2rem,4vw,3rem)]">Sales videos we produced</h2>
          </div>
          <p className="text-[0.875rem] text-[var(--color-ink-soft)]">
            {index + 1} of {salesVideos.length}
          </p>
        </div>

        <div className="mt-10 overflow-hidden border border-[var(--color-line)] bg-[var(--color-ink)]">
          <video
            key={current.src}
            className="aspect-video w-full object-contain"
            src={current.src}
            controls
            playsInline
            preload="metadata"
          />
        </div>

        <div className="mt-5 flex flex-wrap items-center justify-between gap-4">
          <p className="text-[1.0625rem] font-medium">{current.title}</p>
          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => setIndex((i) => (i === 0 ? salesVideos.length - 1 : i - 1))}
              className="h-9 border border-[var(--color-line-strong)] bg-white px-4 text-[0.8125rem] font-medium"
            >
              Previous
            </button>
            <button
              type="button"
              onClick={() => setIndex((i) => (i === salesVideos.length - 1 ? 0 : i + 1))}
              className="h-9 bg-[var(--color-ink)] px-4 text-[0.8125rem] font-medium text-white"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
