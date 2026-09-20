import { Link } from 'react-router-dom'
import { agency } from '../data/content'

type Props = {
  markOnly?: boolean
  className?: string
}

export function Logo({ markOnly = false, className = '' }: Props) {
  return (
    <Link to="/" className={`inline-flex items-center gap-2.5 ${className}`} aria-label={agency.name}>
      <img src={agency.logo} alt="" className="h-8 w-8 sm:h-9 sm:w-9" width={36} height={36} />
      {!markOnly && (
        <span className="leading-tight">
          <span className="block text-[0.9375rem] font-semibold tracking-[-0.02em] sm:text-[1rem]">
            {agency.name}
          </span>
          <span className="hidden text-[0.6875rem] font-medium text-[var(--color-mute)] sm:block">
            {agency.tagline}
          </span>
        </span>
      )}
    </Link>
  )
}
