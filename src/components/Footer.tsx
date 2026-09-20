import { agency } from '../data/content'

export function Footer() {
  return (
    <footer className="border-t border-[var(--color-line)] bg-white">
      <div className="container-site flex flex-col gap-6 py-10 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-[0.9375rem] font-semibold">{agency.name}</p>
          <p className="mt-1 text-[0.8125rem] text-[var(--color-ink-soft)]">{agency.tagline}</p>
        </div>
        <div className="flex flex-wrap gap-6 text-[0.8125rem] font-medium">
          <a href="#work" className="text-[var(--color-ink-soft)] hover:text-[var(--color-ink)]">
            Work
          </a>
          <a href="#services" className="text-[var(--color-ink-soft)] hover:text-[var(--color-ink)]">
            Services
          </a>
          <a href={agency.whatsappLink} target="_blank" rel="noreferrer" className="text-[var(--color-ink-soft)] hover:text-[var(--color-ink)]">
            WhatsApp
          </a>
          <a href={agency.emailLink} className="text-[var(--color-ink-soft)] hover:text-[var(--color-ink)]">
            Email
          </a>
        </div>
      </div>
      <div className="border-t border-[var(--color-line)]">
        <div className="container-site py-5 text-[0.75rem] text-[var(--color-mute)]">
          © {new Date().getFullYear()} {agency.name}
        </div>
      </div>
    </footer>
  )
}
