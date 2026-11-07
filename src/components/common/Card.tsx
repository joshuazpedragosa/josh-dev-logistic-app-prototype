import type { CSSProperties, ReactNode } from 'react'
import type { IconName } from '../../types/landing'
import { Icon } from './Icon'
import './Card.css'

interface CardProps {
  icon?: IconName
  title?: string
  children?: ReactNode
  interactive?: boolean
  className?: string
  style?: CSSProperties
}

export function Card({ icon, title, children, interactive = false, className, style }: CardProps) {
  const cls = ['card', interactive && 'card--interactive', className].filter(Boolean).join(' ')

  return (
    <div className={cls} style={style}>
      {icon && (
        <div className="card__icon">
          <Icon name={icon} />
        </div>
      )}
      {title && <h3>{title}</h3>}
      {children}
    </div>
  )
}
