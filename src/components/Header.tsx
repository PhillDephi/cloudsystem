import { agency, navLinks } from '../data/content'

type Props = { scrolled: boolean }

export function Header({ scrolled }: Props) {
  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-[background,border] duration-200 ${
        scrolled
          ? 'border-b border-[var(--color-line)] bg-[rgba(247,247,245,0.92)] backdrop-blur-md'
          : 'border-b border-transparent bg-transparent'
      }`}
    >
      <div className="container-site flex h-16 items-center justify-between gap-8">
        <a href="#top" className="text-[0.9375rem] font-semibold tracking-[-0.01em]">
          {agency.name}
        </a>

        <nav className="hidden items-center gap-7 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className="text-[0.8125rem] font-medium text-[var(--color-ink-soft)] transition-colors hover:text-[var(--color-ink)]"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href={agency.whatsappLink}
          target="_blank"
          rel="noreferrer"
          className="inline-flex h-9 items-center bg-[var(--color-ink)] px-4 text-[0.8125rem] font-medium text-white transition-colors hover:bg-[var(--color-accent)]"
        >
          Contact
        </a>
      </div>
    </header>
  )
}
