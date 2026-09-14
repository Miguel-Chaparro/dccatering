export interface NavItem {
  label: string
  href: string
}

export interface CulinaryPrinciple {
  id: string
  number: string
  title: string
}

export interface ServiceFeature {
  title: string
  description: string
}

export interface ServiceItem {
  id: string
  badge: string
  title: string
  description: string
  features?: ServiceFeature[]
  listItems?: string[]
  ctaText: string
  ctaHref: string
  imageSrc?: string
  imageAlt?: string
  images?: { src: string; alt: string }[]
  accentColor?: 'burgundy' | 'olive' | 'gold' | 'charcoal'
}

export interface ProcessStep {
  step: string
  title: string
  description: string
  phase: string
  borderColorClass: string
  accentColorClass: string
}

export interface QuoteFormState {
  nombre: string
  empresa: string
  email: string
  telefono: string
  tipo_evento: string
  invitados: number | null
  fecha: string
  detalles: string
}

export interface ContactChannel {
  icon: string
  title: string
  detail: string
}

export interface SocialNetwork {
  name: string
  handle: string
  url: string
  platform: 'facebook' | 'instagram' | 'tiktok' | 'youtube'
  description: string
  badgeText: string
}

