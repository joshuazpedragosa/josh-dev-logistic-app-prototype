import { useEffect, useState } from 'react'
import { APP_NAME, NAV_LINKS } from '../../constants/landing'
import { Button } from '../common/Button'
import { Icon } from '../common/Icon'
import './Header.css'

export function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close the mobile menu on Escape or when the viewport grows to desktop.
  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
    }
    const mq = window.matchMedia('(min-width: 900px)')
    const onChange = () => {
      if (mq.matches) setOpen(false)
    }
    window.addEventListener('keydown', onKey)
    mq.addEventListener('change', onChange)
    return () => {
      window.removeEventListener('keydown', onKey)
      mq.removeEventListener('change', onChange)
    }
  }, [open])

  const close = () => setOpen(false)
  const cls = ['header', scrolled && 'header--scrolled', open && 'header--open'].filter(Boolean).join(' ')

  return (
    <header className={cls}>
      <div className="container header__inner">
        <a href="#top" className="logo" onClick={close}>
          <span className="logo__mark">
            <Icon name="box" size={20} />
          </span>
          {APP_NAME}
        </a>

        <nav className="nav" aria-label="Main">
          <ul className="nav__list">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a className="nav__link" href={link.href}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="header__actions">
          <Button href="#" variant="ghost">
            Sign in
          </Button>
          <Button href="#contact">Get a quote</Button>
        </div>

        <button
          type="button"
          className="menu-toggle"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="menu-toggle__bars" />
        </button>
      </div>

      {open && (
        <div id="mobile-menu" className="mobile-menu">
          <ul>
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a className="mobile-menu__link" href={link.href} onClick={close}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="mobile-menu__actions">
            <Button href="#" variant="outline" block onClick={close}>
              Sign in
            </Button>
            <Button href="#contact" block onClick={close}>
              Get a quote
            </Button>
          </div>
        </div>
      )}
    </header>
  )
}
