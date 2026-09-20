import { agency } from '../data/content'

export function ContactCta() {
  return (
    <section id="contact" className="section-pad pt-0">
      <div className="container-site">
        <div className="grid gap-10 border border-[var(--color-line)] bg-white p-8 sm:p-12 lg:grid-cols-[1.2fr_0.8fr] lg:p-14">
          <div>
            <p className="eyebrow">Contact</p>
            <h2 className="display mt-3 text-[clamp(2rem,4vw,3rem)]">Talk to the team</h2>
            <p className="mt-4 max-w-lg text-[1.0625rem] text-[var(--color-ink-soft)]">
              Message us on WhatsApp or email. We usually reply within one hour during business hours.
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <a
              href={agency.whatsappLink}
              target="_blank"
              rel="noreferrer"
              className="border border-[var(--color-ink)] bg-[var(--color-ink)] px-5 py-5 text-white transition-colors hover:bg-[var(--color-accent)]"
            >
              <p className="text-[0.75rem] text-white/55">WhatsApp</p>
              <p className="mt-1 text-[1.25rem] font-semibold tracking-[-0.01em]">{agency.whatsapp}</p>
            </a>
            <a
              href={agency.emailLink}
              className="border border-[var(--color-line)] px-5 py-5 transition-colors hover:border-[var(--color-ink)]"
            >
              <p className="text-[0.75rem] text-[var(--color-mute)]">Email</p>
              <p className="mt-1 text-[1.125rem] font-semibold tracking-[-0.01em] sm:text-[1.25rem]">
                {agency.email}
              </p>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
