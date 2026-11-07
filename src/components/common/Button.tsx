import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react'
import './Button.css'

type Variant = 'primary' | 'outline' | 'ghost'
type Size = 'md' | 'lg'

interface BaseProps {
  variant?: Variant
  size?: Size
  block?: boolean
  children: ReactNode
}

type ButtonProps = BaseProps & ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined }
type LinkProps = BaseProps & AnchorHTMLAttributes<HTMLAnchorElement> & { href: string }

function classes({ variant = 'primary', size = 'md', block }: BaseProps, extra?: string) {
  return ['btn', `btn--${variant}`, size === 'lg' && 'btn--lg', block && 'btn--block', extra]
    .filter(Boolean)
    .join(' ')
}

export function Button(props: ButtonProps | LinkProps) {
  const { variant, size, block, children, className, ...rest } = props
  const cls = classes({ variant, size, block, children }, className)

  if (rest.href !== undefined) {
    return (
      <a className={cls} {...(rest as AnchorHTMLAttributes<HTMLAnchorElement>)}>
        {children}
      </a>
    )
  }

  return (
    <button type="button" className={cls} {...(rest as ButtonHTMLAttributes<HTMLButtonElement>)}>
      {children}
    </button>
  )
}
