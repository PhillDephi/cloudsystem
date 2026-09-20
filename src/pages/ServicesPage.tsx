import { agency, services } from '../data/content'

export function ServicesPage() {
  return (
    <div className="section-pad pt-8 sm:pt-10">
      <div className="container-site">
        <div className="anim-in max-w-2xl">
          <p className="eyebrow">Services</p>
          <h1 className="page-title mt-2">Clear services. Clear prices.</h1>
          <p className="mt-3 text-[1rem] text-[var(--color-ink-soft)]">
            Each service includes consultation and support. Contact us to confirm scope.
          </p>
        </div>

        <div className="mt-8 overflow-hidden border border-[var(--color-line)] bg-white sm:hidden">
          <div className="border-b border-[var(--color-line)] bg-[var(--color-paper)] px-3 py-2.5 text-[0.75rem] font-semibold">
            Service catalog
          </div>
          {services.map((s) => (
            <div key={s.title} className="border-b border-[var(--color-line)] p-4 last:border-b-0">
              <div className="flex items-start justify-between gap-3">
                <h2 className="text-[0.9375rem] font-semibold">{s.title}</h2>
                <p className="shrink-0 font-mono text-[0.75rem] font-semibold">{s.price}</p>
              </div>
              <p className="mt-2 text-[0.875rem] text-[var(--color-ink-soft)]">{s.description}</p>
              <div className="mt-3 flex items-center justify-between">
                <p className="font-mono text-[0.75rem] text-[var(--color-mute)]">
                  {s.rating}★ · {s.reviews} reviews
                </p>
                <a href={agency.whatsappLink} target="_blank" rel="noreferrer" className="text-[0.8125rem] font-medium text-[var(--color-accent)]">
                  Ask
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 hidden overflow-x-auto border border-[var(--color-line)] bg-white sm:block">
          <table className="w-full min-w-[640px] border-collapse text-left">
            <thead>
              <tr className="border-b border-[var(--color-line)] bg-[var(--color-paper)] text-[0.6875rem] uppercase tracking-[0.06em] text-[var(--color-mute)]">
                <th className="px-4 py-3 font-medium">Service</th>
                <th className="px-4 py-3 font-medium">Description</th>
                <th className="px-4 py-3 font-medium">Rating</th>
                <th className="px-4 py-3 font-medium">Price</th>
                <th className="px-4 py-3 font-medium" />
              </tr>
            </thead>
            <tbody>
              {services.map((s) => (
                <tr key={s.title} className="border-b border-[var(--color-line)] last:border-b-0 hover:bg-[var(--color-paper)]">
                  <td className="px-4 py-4 text-[0.9375rem] font-semibold">{s.title}</td>
                  <td className="max-w-md px-4 py-4 text-[0.875rem] text-[var(--color-ink-soft)]">
                    {s.description}
                  </td>
                  <td className="px-4 py-4 font-mono text-[0.8125rem] text-[var(--color-mute)]">
                    {s.rating}★ ({s.reviews})
                  </td>
                  <td className="px-4 py-4 font-mono text-[0.875rem] font-semibold">{s.price}</td>
                  <td className="px-4 py-4 text-right">
                    <a
                      href={agency.whatsappLink}
                      target="_blank"
                      rel="noreferrer"
                      className="text-[0.8125rem] font-medium text-[var(--color-accent)]"
                    >
                      Inquire
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
