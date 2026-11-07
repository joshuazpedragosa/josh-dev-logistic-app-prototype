import { Button } from '../../components/common/Button'
import { Card } from '../../components/common/Card'
import { Icon } from '../../components/common/Icon'
import { Footer } from '../../components/layout/Footer'
import { Header } from '../../components/layout/Header'
import { TrackingSearch } from '../../components/tracking/TrackingSearch'
import { FEATURES, HERO_STATS, SERVICES, STEPS } from '../../constants/landing'
import { useInView } from '../../hooks/useInView'
import { useEffect, useState, type CSSProperties } from 'react'
import './Home.css'

const TRUCK_IMAGE = '/home-background/road/truck-removebg-preview.png'
/** Must match the hero fade-out transition in Home.css. */
const HERO_FADE_MS = 500
const AIRPLANE_IMAGE = '/home-background/airport/airplane.png'
const SHIP_IMAGE = '/home-background/sea/ship.png'

/** A section counts as "active" while it crosses the middle 60% of the viewport. */
const SECTION_IN_VIEW = { threshold: 0, rootMargin: '-20% 0px -20% 0px' } as const

/** Scroll-reveal props: `i` sets the stagger order within its section. */
function reveal(i: number, className?: string) {
  return {
    className: className ? `reveal ${className}` : 'reveal',
    style: { '--i': i } as CSSProperties,
  }
}

const activeClass = (base: string, active: boolean) => (active ? `${base} is-active` : base)

const PREVIEW_EVENTS = [
  { label: 'Picked up', place: 'Metro Manila', time: 'Nov 5, 09:12', done: true },
  { label: 'In transit', place: 'Laguna Hub', time: 'Nov 6, 18:40', done: true },
  { label: 'Out for delivery', place: 'Oriental Mindoro', time: 'Expected Nov 8', done: false },
]

export function Home() {
  // The truck's drive-in needs the truck itself on screen (on load for desktop; on phones it sits lower in the hero).
  const { ref: truckRef, inView: truckInView } = useInView<HTMLDivElement>({ threshold: 0.4 })

  // Each section animates in while it's on screen and fades out once you scroll past it.
  const hero = useInView<HTMLElement>({ ...SECTION_IN_VIEW, initialInView: true })

  // Drive in every time the hero becomes active again. On the way out, keep the truck parked until the
  // hero's fade-out has finished, so it doesn't visibly jump back off-screen while still fading.
  const shouldDrive = hero.inView && truckInView
  const [truckLingering, setTruckLingering] = useState(shouldDrive)
  useEffect(() => {
    const id = window.setTimeout(() => setTruckLingering(shouldDrive), shouldDrive ? 0 : HERO_FADE_MS)
    return () => window.clearTimeout(id)
  }, [shouldDrive])
  const truckDriving = shouldDrive || truckLingering
  const services = useInView<HTMLElement>(SECTION_IN_VIEW)
  const steps = useInView<HTMLElement>(SECTION_IN_VIEW)
  const why = useInView<HTMLElement>(SECTION_IN_VIEW)
  const contact = useInView<HTMLElement>(SECTION_IN_VIEW)

  return (
    <>
      <Header />

      <main id="top">
        {/* Hero */}
        <section ref={hero.ref} className={activeClass('hero', hero.inView)}>
          <div className="hero__bg" aria-hidden="true" />
          <div className="hero__overlay" aria-hidden="true" />

          {/* Background truck: sits behind the hero content, on the road at the bottom of the hero. */}
          <div ref={truckRef} className={`hero__truck-layer${truckDriving ? ' is-in-view' : ''}`} aria-hidden="true">
            <img className="hero__truck" src={TRUCK_IMAGE} alt="" width={666} height={375} decoding="async" />
          </div>

          <div className="container hero__grid">
            <div className="hero__content">
              <span className="hero__badge">
                <span className="hero__badge-dot" />
                Live tracking across 150+ countries
              </span>
              <h1 className="hero__title">
                Shipping that moves <span className="text-accent">as fast</span> as your business
              </h1>
              <p className="hero__lead">
                Road, air and ocean freight with real-time visibility from pickup to doorstep. Book in minutes,
                track every mile.
              </p>

              <TrackingSearch />

              <div className="hero__ctas">
                <Button href="#contact" size="lg">
                  Get a free quote <Icon name="arrow" size={18} />
                </Button>
                <Button href="#services" variant="outline" size="lg">
                  Explore services
                </Button>
              </div>

              <dl className="hero__stats">
                {HERO_STATS.map((stat) => (
                  <div key={stat.label}>
                    <dt>{stat.label}</dt>
                    <dd>{stat.value}</dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className="hero__visual" aria-hidden="true">
              <Card className="preview">
                <div className="preview__head">
                  <div>
                    <span className="preview__label">Shipment</span>
                    <strong className="preview__id">#SH-209314</strong>
                  </div>
                  <span className="preview__status">In transit</span>
                </div>

                <div className="preview__route">
                  <span>MNL</span>
                  <span className="preview__line">
                    <span className="preview__truck">
                      <Icon name="truck" size={18} />
                    </span>
                  </span>
                  <span>MDR</span>
                </div>

                <ol className="preview__timeline">
                  {PREVIEW_EVENTS.map((event) => (
                    <li key={event.label} className={event.done ? 'is-done' : ''}>
                      <span className="preview__dot">{event.done && <Icon name="check" size={12} />}</span>
                      <div>
                        <strong>{event.label}</strong>
                        <span>
                          {event.place} · {event.time}
                        </span>
                      </div>
                    </li>
                  ))}
                </ol>
              </Card>
            </div>
          </div>
        </section>

        {/* Services */}
        <section ref={services.ref} id="services" className={activeClass('section services', services.inView)}>
          <div className="services__bg" aria-hidden="true" />
          <div className="services__overlay" aria-hidden="true" />

          {/* Airplane: above the photo + overlay, behind the section content. */}
          <div className="services__plane-layer" aria-hidden="true">
            <img className="services__plane" src={AIRPLANE_IMAGE} alt="" width={666} height={375} decoding="async" />
          </div>

          <div className="container">
            <header className="section-header">
              <span {...reveal(0, 'eyebrow')}>Our services</span>
              <h2 {...reveal(1)}>Every way to move your cargo</h2>
              <p {...reveal(2)}>One partner for parcels, pallets and containers, with tracking and support built in.</p>
            </header>

            <div className="grid grid--4">
              {SERVICES.map((service, i) => (
                <Card key={service.title} icon={service.icon} title={service.title} interactive {...reveal(3 + i)}>
                  <p>{service.description}</p>
                  <a href="#contact" className="card__link">
                    Learn more <Icon name="arrow" size={16} />
                  </a>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* How it works */}
        <section ref={steps.ref} id="how-it-works" className={activeClass('section how', steps.inView)}>
          <div className="how__bg" aria-hidden="true" />
          <div className="services__overlay" aria-hidden="true" />

          {/* Ship: above the photo + overlay, behind the section content. */}
          <div className="how__ship-layer" aria-hidden="true">
            <img className="how__ship" src={SHIP_IMAGE} alt="" width={666} height={375} decoding="async" />
          </div>

          <div className="container">
            <header className="section-header">
              <span {...reveal(0, 'eyebrow')}>How it works</span>
              <h2 {...reveal(1)}>From quote to doorstep in four steps</h2>
            </header>

            <ol className="grid grid--4 steps">
              {STEPS.map((step, i) => (
                <li key={step.title} {...reveal(2 + i)}>
                  <Card className="step">
                    <span className="step__num">{String(i + 1).padStart(2, '0')}</span>
                    <h3>{step.title}</h3>
                    <p>{step.description}</p>
                  </Card>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Why us */}
        <section ref={why.ref} id="why-us" className={activeClass('section', why.inView)}>
          <div className="container why">
            <div className="why__intro">
              <span {...reveal(0, 'eyebrow')}>Why choose us</span>
              <h2 {...reveal(1)}>Logistics you can count on</h2>
              <p {...reveal(2)}>
                We combine a global carrier network with smart routing software so your goods arrive on time,
                intact and fully accounted for.
              </p>
              <ul className="why__checks">
                <li {...reveal(3)}>
                  <Icon name="check" size={18} /> Transparent, upfront pricing
                </li>
                <li {...reveal(4)}>
                  <Icon name="check" size={18} /> Customs clearance handled for you
                </li>
                <li {...reveal(5)}>
                  <Icon name="check" size={18} /> Dedicated account manager
                </li>
              </ul>
            </div>

            <div className="grid grid--2">
              {FEATURES.map((feature, i) => (
                <Card key={feature.title} icon={feature.icon} title={feature.title} interactive {...reveal(4 + i)}>
                  <p>{feature.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section ref={contact.ref} id="contact" className={activeClass('section', contact.inView)}>
          <div className="container">
            <div {...reveal(0, 'cta')}>
              <div>
                <h2 {...reveal(1)}>Ready to ship smarter?</h2>
                <p {...reveal(2)}>Get an instant quote or talk to our logistics team. No commitment required.</p>
              </div>
              <div {...reveal(3, 'cta__actions')}>
                <Button href="#" size="lg">
                  Get a free quote
                </Button>
                <Button href="mailto:sales@example.com" variant="outline" size="lg">
                  Contact sales
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
