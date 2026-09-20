import { testimonials } from '../data/content'

export function VideoTestimonials() {
  return (
    <section className="section-pad border-t border-[var(--color-line)]">
      <div className="container-site">
        <div className="max-w-2xl">
          <p className="eyebrow">Video</p>
          <h2 className="display mt-3 text-[clamp(2rem,4vw,3rem)]">Client videos</h2>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t) => (
            <figure key={t.name} className="overflow-hidden border border-[var(--color-line)] bg-[var(--color-ink)]">
              <video
                className="aspect-[9/16] w-full object-cover"
                src={t.video}
                controls
                playsInline
                preload="metadata"
              />
              <figcaption className="border-t border-white/10 px-4 py-4 text-white">
                <p className="font-medium">{t.name}</p>
                <p className="text-[0.8125rem] text-white/50">{t.niche}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
