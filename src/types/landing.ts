export type IconName =
  | 'truck'
  | 'plane'
  | 'ship'
  | 'warehouse'
  | 'box'
  | 'map'
  | 'clock'
  | 'shield'
  | 'globe'
  | 'headset'
  | 'search'
  | 'arrow'
  | 'check'

export type SocialPlatform = 'tiktok' | 'facebook' | 'portfolio'

export interface SocialLink {
  platform: SocialPlatform
  label: string
  /** Full URL (https://…). Leave empty to show the icon as a disabled placeholder. */
  url: string
}

export interface NavLink {
  label: string
  href: string
}

export interface Service {
  icon: IconName
  title: string
  description: string
}

export interface Step {
  title: string
  description: string
}

export interface Feature {
  icon: IconName
  title: string
  description: string
}

export interface Stat {
  value: string
  label: string
}
