import { agency } from '../data/content'

export function ContactPage() {
  return (
    <div className="section-pad pt-8 sm:pt-10">
      <div className="container-site">
        <div className="anim-in max-w-2xl">
          <p className="eyebrow">Contact</p>
          <h1 className="page-title mt-2">Talk to the team</h1>
          <p className="mt-3 text-[1rem] text-[var(--color-ink-soft)]">
            Message us on WhatsApp or email. We usually reply within one hour during business hours.
          </p>
        </div>

        <div className="mt-8 grid gap-3 sm:grid-cols-2">
          <a
            href={agency.whatsappLink}
            target="_blank"
            rel="noreferrer"
            className="border border-[var(--color-ink)] bg-[var(--color-ink)] p-5 text-white transition-colors hover:bg-[var(--color-accent)] sm:p-6"
          >
            <p className="text-[0.75rem] text-white/55">WhatsApp</p>
            <p className="mt-2 text-[1.25rem] font-semibold tracking-[-0.01em]">{agency.whatsapp}</p>
            <p className="mt-4 text-[0.8125rem] text-white/60">Tap to open chat</p>
          </a>
          <a
            href={agency.emailLink}
            className="border border-[var(--color-line)] bg-white p-5 transition-colors hover:border-[var(--color-ink)] sm:p-6"
          >
            <p className="text-[0.75rem] text-[var(--color-mute)]">Email</p>
            <p className="mt-2 break-all text-[1.125rem] font-semibold tracking-[-0.01em] sm:text-[1.25rem]">
              {agency.email}
            </p>
            <p className="mt-4 text-[0.8125rem] text-[var(--color-ink-soft)]">Tap to compose</p>
          </a>
        </div>

        <div className="mt-8 overflow-hidden border border-[var(--color-line)] bg-white">
          <div className="border-b border-[var(--color-line)] bg-[var(--color-paper)] px-4 py-2.5 text-[0.75rem] font-semibold">
            Contact record
          </div>
          <table className="w-full border-collapse text-left">
            <tbody>
              <tr className="border-b border-[var(--color-line)]">
                <td className="px-4 py-3 text-[0.8125rem] text-[var(--color-mute)]">Channel</td>
                <td className="px-4 py-3 text-[0.875rem] font-medium">WhatsApp</td>
                <td className="px-4 py-3 font-mono text-[0.875rem]">{agency.whatsapp}</td>
              </tr>
              <tr>
                <td className="px-4 py-3 text-[0.8125rem] text-[var(--color-mute)]">Channel</td>
                <td className="px-4 py-3 text-[0.875rem] font-medium">Email</td>
                <td className="break-all px-4 py-3 font-mono text-[0.8125rem] sm:text-[0.875rem]">
                  {agency.email}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
