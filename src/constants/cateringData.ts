import type { NavItem, CulinaryPrinciple, ProcessStep, SocialNetwork } from '@/types/catering'

export const BRAND = {
  name: 'Diego Chaparro Catering',
  shortName: 'DC Catering',
  chef: 'Diego Chaparro',
  role: 'Chef Ejecutivo & Fundador',
  tagline: 'El Arte de Cocinar',
  subtitle: 'Gastronomía creada para experiencias extraordinarias.',
  logoUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuALw2cVc7TPMyurOuO8lDNFueIXZxgsijE6Vk5L6vU66P4jZf6PDz7ICQR4Bd01WhVLLNv3wljtJBXG8ft-883-ItDeBediL9hFezYeytqXWKrMSj23MKkt4j_gzBUWzKtCvGRgU3EEwQP2JunY-1x0GEnWahshsgd6y6VWsHq78jydjn5KYx5epRZmxlgM2zBG_9KWvRf5FNFnNzlsTrA81CavEUe4EJseKekt1PSebv3v-hBR8evMi-mWWbKJMe5FxAg',
  footerLogoUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC10qbax4qHOr_Kuuz1Ui2X_GbYBmZs-yf5D8q95tadPJwrNl7wRMguXggUE7ZYQJaM8Q3bH-BwaHrNWhonJcoyqDMBraf6wE5cttqCbxRduipGau5TvBRQ7qPT2D2habL3_YCs5gJnvBZ4XYueTbeyb9BOJuY3zrR1QpN5Hw6FMprNnKc-8_EthbUIIJnynB-wylZ5LZ5JHTH9-9sESSQxHdgpIKGUBngQ5NrEtrwdL6ow_t2AaEpAmiqxAkd_0A-BLFU',
  phone: '+57 313 407 5240',
  phoneClean: '573134075240',
  email: 'contacto@dccatering.com',
  coverage: 'Bogotá, Sabana & Destinos Especiales',
  quoteWhatsAppUrl: 'https://wa.me/573134075240?text=Hola%20Diego%20Chaparro%20Catering,%20deseo%20hablar%20con%20un%20asesor%20para%20cotizar%20un%20evento.',
}

export const SOCIAL_NETWORKS: SocialNetwork[] = [
  {
    name: 'Instagram',
    handle: '/diegoccatering/',
    url: 'https://www.instagram.com/diegoccatering/',
    platform: 'instagram',
    description: 'Nuestras creaciones culinarias, reels de emplatado y el detrás de cámaras de cada evento.',
    badgeText: '@diegoccatering',
  },
  {
    name: 'TikTok',
    handle: '/diegoccatering/',
    url: 'https://www.tiktok.com/@diegoccatering/',
    platform: 'tiktok',
    description: 'Técnicas en parrilla viva, tips del chef y contenido dinámico de nuestra cocina.',
    badgeText: 'Seguir en TikTok',
  },
  {
    name: 'Facebook',
    handle: '/diegoccatering/',
    url: 'https://www.facebook.com/diegoccatering/',
    platform: 'facebook',
    description: 'Galerías fotográficas de montajes de gala, eventos corporativos y testimonios.',
    badgeText: 'Comunidad Facebook',
  },
  {
    name: 'YouTube',
    handle: '/diegoccatering/',
    url: 'https://www.youtube.com/@diegoccatering/',
    platform: 'youtube',
    description: 'Coberturas en alta definición, masterclasses y la filosofía del chef en video.',
    badgeText: 'Canal de YouTube',
  },
]

export const NAV_ITEMS: NavItem[] = [
  { label: 'Nuestra Esencia', href: '#historia' },
  { label: 'Servicios', href: '#servicios' },
  { label: 'El Proceso', href: '#proceso' },
  { label: 'Experiencias', href: '#experiencias' },
  { label: 'Redes', href: '#redes' },
  { label: 'Contacto', href: '#contacto' },
]


export const PRINCIPLES: CulinaryPrinciple[] = [
  { id: '1', number: '01', title: 'Escuchar' },
  { id: '2', number: '02', title: 'Entender' },
  { id: '3', number: '03', title: 'Crear' },
  { id: '4', number: '04', title: 'Cuidar' },
  { id: '5', number: '05', title: 'Servir' },
]

export const PROCESS_STEPS: ProcessStep[] = [
  {
    step: '01',
    title: 'Conversemos',
    description: 'Conocemos el tipo de evento, sus necesidades, invitados, espacio y expectativas culinarias.',
    phase: 'Fase Inicial',
    borderColorClass: 'border-[#C89B3C]',
    accentColorClass: 'text-[#C89B3C]',
  },
  {
    step: '02',
    title: 'Diseñamos',
    description: 'Construimos una propuesta gastronómica y de servicio acorde con la ocasión, el formato y objetivos.',
    phase: 'Curaduría de Menú',
    borderColorClass: 'border-burgundy-800',
    accentColorClass: 'text-burgundy-800',
  },
  {
    step: '03',
    title: 'Ajustamos',
    description: 'Revisamos juntos cada elemento hasta encontrar la combinación de texturas y tiempos que mejor funcione.',
    phase: 'Refinamiento',
    borderColorClass: 'border-olive-700',
    accentColorClass: 'text-olive-700',
  },
  {
    step: '04',
    title: 'Organizamos',
    description: 'Coordinamos logística, tiempos de despacho, personal capacitado, montaje y todo lo indispensable.',
    phase: 'Operativa',
    borderColorClass: 'border-charcoal-800',
    accentColorClass: 'text-charcoal-800',
  },
  {
    step: '05',
    title: 'Lo Hacemos Realidad',
    description: 'Llegamos preparados para cuidar cada detalle y hacer que el servicio fluya de principio a fin sin fricción.',
    phase: 'Puesta en Escena',
    borderColorClass: 'border-gold-500',
    accentColorClass: 'text-gold-500',
  },
]

export const IMAGES = {
  heroPlate: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBfBpmNYH84kCyFC4YW4LmJXR5BVx60Z2XMdl7gnP4EbrdTFxYGKQEH5S5A6QWqcgYWKWr6p_GR7jmT5R6k6RYgaSMg3ZVUr5Rz8lr00s_hOuGm2GPgr7ZXrMuMbTPH1gCK2VksIOH_bqPcEaKDzf7aDv1egP_rXgWURTxtAyM6n48Ga8mo0-_AqKbd4uNjmsEeTM3-XwRbZIIwAOVYRtWHGXbZgRyUzqv2s0XHcQVc5ctM7DRsawsNLd5eTrZ_09agA_M',
  chefPortrait: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCXC1v3rfd-1AkoNHdduCxtYlJorgv1NBVEvVUI2iDeeQSE71EEdpsr3SoJvzHdati6xPHSgAJ_HoVFsTm5yoKsfhUr-S1m3Oh1NYo2D2h2L88TfejcF3jxuBA8hH-aN-PnY9S2Sl3t67HTjPSxZTiOQ1-FR6uFY2k6ZWrxG9psTmCZRneyznJuLVYOA8WB8ddv0a-tT0ZBkGzR_J6tiFFeOzhyOnb4mIprtiD9_J1RIZsShZHL3QJCkWcDGUGB6FFm7pI',
  serviceCorporate: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDJQeZl-o3zjMbDSlq8ImY-J-R9Y-fHqxeCqERmr8bGLbWtLyXhNc0YblC03waX8XT0Yh_g12RcOtB2ypPdiRIqKMec4YbbpQt70IbAok1rmSo6J65BMdxl6tKnT6YCyOibD7V9izF1oCF3DhSwiiAi-lFzt2ek81Jxn5g8RJOHTnNqAhFpNwBMe2Tw42lOpGXT6zvrXNs13wuZz1cHZNdoV-smOtWOkWTGELkSUCSsLAj6akhtBMH2TBr_M_LPFFmhLL0',
  serviceSocial: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCDbWwMiJ4H0IA0cu6TfIp9XQjyQI6oDInpcx9Bu-HbDaJVwpQjOKfMJMrOqCflxlgyzm23MCS3OWSv3GyyB8ePLzeoBgSbD9rJIhHqFBCoIdEyhLjLiYtbmsJPEf4mWoPnurr7AsBLnhxucBuuLpq9Fh8gUA0XesByZr4Ak1TXfT8x7HMDMQBUOuLvbEtJjXJuXhERjDXqkuaLtKKMZpnZbqc2Js794XrDmRh0bMNi5Nmfs2UZv2MANbOQuOxidAeB2G4',
  serviceGrill: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDWbLCyLzvUK2yE59Qh0cAYnIbaIkjmc0f7RxKOiGJaKaLm9ZdSEhxeQvjaYq5c6PNth-uyarvxUImEacti_XVT3BH4vO9vOaLR_tWeWuLwCpF8Z5o_UdXfuU14haJ08BXr6C6VbEkPjb-QMHclOvNa5900Thkkna-6P78MN6OMRKYm7c-O799iJb5fm6zb0-RBseqBvcQvG4FdCWFrC9yzW4CUS046zUmlCosTWHYe6l4DWzcolfiKbdtHejGVG3A_ne4',
  servicePasta: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA3QG5kHrsdPlWkdzKBaZeJ5Nt0f4nveY_nAiEiQt2WyQyeceY3lNrJYNRqC-G7qxj55sqUvf-PbgLpDhXfW7-6gHqOvyKZMKRLGGCYQrQFZYIDLTi5sRdnC3YoXM1JwzfJvGPxn5996AfXdQZtMuvx3wygWP3hDuOBo9L329txjStZpFNqGCz79WLlU4zW6ksp8OdUP3cjWFuE2S9bu7rJN4tYdGPLSYbPku_I-kEz62jOJ7ZpCd30-Ad-tYZwZHu8WmM',
  servicePlatters: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBJfiyVGLHZr9B9YFgRcs4xo-734f0y0JXvP0BOC2n4hA2L3xQoFHWG7rcUt1ZeLRN-B2N8Vh_9IA_OCUcYPkqmXLSKogcUdFl9_BUNiJ_yK_Vi5gT_vFdc4CV1PJXdNtvRx1Hy2wr1-xUAX853-yOdrXSr0DL-oFwcQJTnyLgBWyyciHJcw5mSXnFvACtE8z6_69VN10tA2lqdGIq0kTZUAbh458vo3V6fdGJzBXHEzyF_VWyXxDP0cRCwz6UKtBE3w5s',
  serviceCoffeeToGo: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDgZX39xl3oJoZ63s7azhnG4A0q7lnDejcpdEbMXf0nH-j4CA9semtYNpQ_MP0t00M38Qfr8VSBENCpc2gd5GDmArd5TGLJ77VCQt7gzr80e2gcyS8cDGwsP1UPQyr7dh1s0VVxg5yN53ljt3Sh10InORqQOPJh8d0CTkM7iKA40gKfPXkn4QsLtjGS-NPUhs2bZ6JBOpxAsV2rEu7wCFNUh7RsbGFxL4eCpJ8X32_icnQczu72-s4hoD7Kz2OsJkNNLio',
}
