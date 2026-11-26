import './ActionLink.css'
import type { MouseEvent, ReactNode } from 'react'

type ActionLinkProps = Readonly<{
  label: string
  href?: string
  onNavigate?: (event: MouseEvent<HTMLAnchorElement>) => void
  variant?: 'primary' | 'text' | 'outline'
  className?: string
  leadingIcon?: ReactNode
  arrow?: boolean
  arrowClassName?: string
}>

export default function ActionLink({
  label,
  href,
  variant = 'primary',
  className,
  onNavigate,
  leadingIcon,
  arrow,
  arrowClassName,
}: ActionLinkProps) {
  const classes = ['action-link', `action-link--${variant}`, className].filter(Boolean).join(' ')
  const content = (
    <>
      {leadingIcon}
      {label}
      {arrow && (
        <span
          className={arrowClassName ? `action-arrow ${arrowClassName}` : 'action-arrow'}
          aria-hidden="true"
        />
      )}
    </>
  )

  return href
    ? <a href={href} className={classes} onClick={onNavigate}>{content}</a>
    : <button type="button" disabled className={classes}>{content}</button>
}
