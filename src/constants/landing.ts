import type { Feature, NavLink, Service, Stat, Step } from '../types/landing'

// Placeholder brand name — replace with the real one.
export const APP_NAME = 'Josh|Dev'

export const NAV_LINKS: NavLink[] = [
  { label: 'Services', href: '#services' },
  { label: 'How it works', href: '#how-it-works' },
  { label: 'Why us', href: '#why-us' },
  { label: 'Contact', href: '#contact' },
]

export const HERO_STATS: Stat[] = [
  { value: '12M+', label: 'Parcels delivered' },
  { value: '150+', label: 'Countries served' },
  { value: '99.2%', label: 'On-time rate' },
]

export const SERVICES: Service[] = [
  {
    icon: 'truck',
    title: 'Road Freight',
    description: 'Full and partial truckloads with real-time GPS tracking across every route.',
  },
  {
    icon: 'plane',
    title: 'Air Cargo',
    description: 'Express air shipping for time-critical goods, door to door in 24–72 hours.',
  },
  {
    icon: 'ship',
    title: 'Ocean Freight',
    description: 'Cost-effective FCL and LCL container shipping to major ports worldwide.',
  },
  {
    icon: 'warehouse',
    title: 'Warehousing',
    description: 'Secure storage, inventory management and same-day fulfillment.',
  },
]

export const STEPS: Step[] = [
  { title: 'Get a quote', description: 'Enter origin, destination and package details for an instant rate.' },
  { title: 'Book & schedule', description: 'Pick a pickup time that works for you. We handle the paperwork.' },
  { title: 'Track in real time', description: 'Follow your shipment live with status alerts at every milestone.' },
  { title: 'Delivered', description: 'Proof of delivery with signature and photo, straight to your inbox.' },
]

export const FEATURES: Feature[] = [
  { icon: 'clock', title: 'On-time delivery', description: 'Optimized routing keeps 99% of shipments on schedule.' },
  { icon: 'shield', title: 'Fully insured', description: 'Every parcel is covered against loss and damage.' },
  { icon: 'globe', title: 'Global network', description: 'Partners in 150+ countries for seamless cross-border trade.' },
  { icon: 'headset', title: '24/7 support', description: 'Real people ready to help, any time of day.' },
]

export const FOOTER_LINKS: { title: string; links: NavLink[] }[] = [
  {
    title: 'Company',
    links: [
      { label: 'About', href: '#' },
      { label: 'Careers', href: '#' },
      { label: 'Press', href: '#' },
    ],
  },
  {
    title: 'Services',
    links: [
      { label: 'Road Freight', href: '#services' },
      { label: 'Air Cargo', href: '#services' },
      { label: 'Ocean Freight', href: '#services' },
      { label: 'Warehousing', href: '#services' },
    ],
  },
  {
    title: 'Support',
    links: [
      { label: 'Track shipment', href: '#top' },
      { label: 'Help center', href: '#' },
      { label: 'Contact', href: '#contact' },
    ],
  },
]
