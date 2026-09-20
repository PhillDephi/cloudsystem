import { useEffect, useState } from 'react'
import { NavLink, Outlet, useLocation } from 'react-router-dom'
import { agency, navLinks } from '../data/content'
import { Logo } from './Logo'
import { Footer } from './Footer'

export function Layout() {
  const [open, setOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    setOpen(false)
    window.scrollTo(0, 0)
  }, [location.pathname])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <div className="min-h-screen bg-[var(--color-paper)] text-[var(--color-ink)]">
      <header className="sticky top-0 z-50 border-b border-[var(--color-line)] bg-[rgba(247,247,245,0.94)] backdrop-blur-md">
        <div className="container-site flex h-14 items-center justify-between gap-3 sm:h-16">
          <Logo />

          <nav className="hidden items-center gap-6 lg:flex">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  `text-[0.8125rem] font-medium transition-colors ${
                    isActive ? 'text-[var(--color-ink)]' : 'text-[var(--color-ink-soft)] hover:text-[var(--color-ink)]'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <a
              href={agency.whatsappLink}
              target="_blank"
              rel="noreferrer"
              className="hidden h-9 items-center bg-[var(--color-ink)] px-3.5 text-[0.8125rem] font-medium text-white transition-colors hover:bg-[var(--color-accent)] sm:inline-flex"
            >
              Contact
            </a>
            <button
              type="button"
              className="tap inline-flex items-center justify-center border border-[var(--color-line)] bg-white px-3 text-[0.8125rem] font-medium lg:hidden"
              aria-expanded={open}
              aria-label={open ? 'Close menu' : 'Open menu'}
              onClick={() => setOpen((v) => !v)}
            >
              {open ? 'Close' : 'Menu'}
            </button>
          </div>
        </div>

        {open && (
          <div className="anim-fade border-t border-[var(--color-line)] bg-white lg:hidden">
            <nav className="container-site flex flex-col py-2">
              {navLinks.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  className={({ isActive }) =>
                    `border-b border-[var(--color-line)] py-3.5 text-[0.9375rem] font-medium last:border-b-0 ${
                      isActive ? 'text-[var(--color-accent)]' : 'text-[var(--color-ink)]'
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              ))}
              <a
                href={agency.whatsappLink}
                target="_blank"
                rel="noreferrer"
                className="mt-3 mb-2 inline-flex h-11 items-center justify-center bg-[var(--color-accent)] text-[0.875rem] font-medium text-white"
              >
                WhatsApp {agency.whatsapp}
              </a>
            </nav>
          </div>
        )}
      </header>

      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
