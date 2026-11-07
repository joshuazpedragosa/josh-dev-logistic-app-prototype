import { APP_NAME, FOOTER_LINKS } from '../../constants/landing'
import { SOCIAL_LINKS } from '../../constants/socials'
import { Icon } from '../common/Icon'
import { SocialIcon } from '../common/SocialIcon'
import './Footer.css'

const YEAR = new Date().getFullYear()

export function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__grid">
          <div className="footer__brand">
            <a href="#top" className="logo">
              <span className="logo__mark">
                <Icon name="box" size={20} />
              </span>
              {APP_NAME}
            </a>
            <p>Fast, reliable and fully tracked shipping for businesses of every size.</p>

            <ul className="footer__socials" aria-label="Social links">
              {SOCIAL_LINKS.map((social) => (
                <li key={social.platform}>
                  {social.url ? (
                    <a
                      className="social"
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      title={social.label}
                    >
                      <SocialIcon platform={social.platform} />
                    </a>
                  ) : (
                    <span
                      className="social social--empty"
                      role="img"
                      aria-label={`${social.label} (link not added yet)`}
                      title={`${social.label}: add your link in src/constants/socials.ts`}
                    >
                      <SocialIcon platform={social.platform} />
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {FOOTER_LINKS.map((group) => (
            <div key={group.title} className="footer__col">
              <h4>{group.title}</h4>
              <ul>
                {group.links.map((link) => (
                  <li key={link.label}>
                    <a href={link.href}>{link.label}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="footer__notice" role="note">
          <span className="footer__notice-badge">Prototype</span>
          <p>
            This website is a <strong>prototype for demonstration purposes only</strong>. It is not a real
            logistics service. Shipments, tracking numbers, quotes and statistics shown here are sample data.
          </p>
        </div>

        <div className="footer__bottom">
          <span>
            © {YEAR} {APP_NAME}. All rights reserved.
          </span>
          <span>Prototype only · Not a real service</span>
        </div>
      </div>
    </footer>
  )
}
