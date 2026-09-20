import { Link } from 'react-router-dom'
import { agency } from '../data/content'

export function Footer() {
  return (
    <footer className="border-t border-[var(--color-line)] bg-white">
      <div className="container-site flex flex-col gap-6 py-8 sm:flex-row sm:items-center sm:justify-between sm:py-10">
        <div>
          <p className="text-[0.9375rem] font-semibold">{agency.name}</p>
          <p className="mt-1 text-[0.8125rem] text-[var(--color-ink-soft)]">{agency.tagline}</p>
        </div>
        <div className="flex flex-wrap gap-x-5 gap-y-3 text-[0.8125rem] font-medium">
          <Link to="/work" className="text-[var(--color-ink-soft)] hover:text-[var(--color-ink)]">
            Work
          </Link>
          <Link to="/services" className="text-[var(--color-ink-soft)] hover:text-[var(--color-ink)]">
            Services
          </Link>
          <a href={agency.whatsappLink} target="_blank" rel="noreferrer" className="text-[var(--color-ink-soft)] hover:text-[var(--color-ink)]">
            WhatsApp
          </a>
          <a href={agency.emailLink} className="text-[var(--color-ink-soft)] hover:text-[var(--color-ink)]">
            Email
          </a>
        </div>
      </div>
      <div className="border-t border-[var(--color-line)]">
        <div className="container-site py-4 text-[0.75rem] text-[var(--color-mute)]">
          © {new Date().getFullYear()} {agency.name}
        </div>
      </div>
    </footer>
  )
}
