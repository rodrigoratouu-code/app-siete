// ============================================================
// SITE CONFIG - Academia de Baile Latino (Ritmo Latino)
// ============================================================

export interface ServiceItem {
  icon: 'divorce' | 'custody' | 'alimony' | 'mediation' | 'domestic-violence' | 'separation' | 'contracts' | 'corporate' | 'real-estate' | 'criminal' | 'immigration' | 'labor' | 'custom'
  title: string
  slug: string
  shortDescription: string
  fullDescription: string
  videoUrl?: string
}

export interface TeamMember {
  name: string
  title: string
  bio: string
  specialties: string[]
  imageUrl?: string
  bookingSlug?: string
}

export interface Testimonial {
  name: string
  quote: string
  rating: number
  caseType?: string
}

export interface NavItem {
  label: string
  href: string
  children?: { label: string; href: string }[]
}

export interface SiteConfig {
  firmName: string
  firmSlogan: string
  firmDescription: string
  founderName: string
  founderTitle: string
  founderBio: string
  yearsExperience: number
  yearFounded: number

  contact: {
    phone: string
    phoneDisplay: string
    email: string
    address: string
    city: string
    country: string
    googleMapsEmbedUrl: string
    whatsappNumber?: string
    officeHours: string
  }

  social: {
    facebook?: string
    instagram?: string
    linkedin?: string
    twitter?: string
  }

  navigation: {
    items: NavItem[]
  }

  hero: {
    headline: string
    subheadline: string
    ctaText: string
    ctaHref: string
    backgroundImageUrl?: string
  }

  values: Array<{
    icon: 'respect' | 'quality' | 'team' | 'experience' | 'confidential' | 'results'
    title: string
    description: string
  }>

  services: ServiceItem[]

  tabs: Array<{
    title: string
    content: string
  }>

  team: TeamMember[]

  testimonials: Testimonial[]

  booking: {
    enabled: boolean
    ctaText: string
    mainLawyerSlug?: string
  }

  seo: {
    siteTitle: string
    titleTemplate: string
    defaultDescription: string
    locale: string
    ogImageUrl?: string
  }

  legal: {
    privacyLastUpdated: string
    termsLastUpdated: string
  }
}

export const siteConfig: SiteConfig = {
  firmName: 'PARTY Pinto Rosa',
  firmSlogan: 'Siente la música, vive el baile',
  firmDescription: 'Baila donde tú quieras: Tu escuela de baile móvil en Barcelona. En Pinto Rosa, rompemos las barreras de la academia tradicional. Tú elige el escenario, nosotros ponemos el ritmo.',
  founderName: 'Ibelisse Rosa',
  founderTitle: 'Coordinadora General de Baile',
  founderBio: 'Bailarina profesional con destacada trayectoria internacional. Ha llevado el sabor latino a múltiples escenarios y ahora lidera un equipo de instructores élite.',
  yearsExperience: 15,
  yearFounded: 2010,

  contact: {
    phone: '+34661526912',
    phoneDisplay: '+34 661 526 912',
    email: 'dominicana2226@gmail.com',
    address: 'Calle Santa Carolina 60',
    city: 'Barcelona',
    country: 'España',
    googleMapsEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2992.835467366373!2d2.1678144154261767!3d41.409384979262174!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a4a2c002cd1fb9%3A0x6b78eb2fffe81977!2sCarrer%20de%20Santa%20Carolina%2C%2060%2C%2008025%20Barcelona!5e0!3m2!1ses!2ses!4v1700000000000!5m2!1ses!2ses',
    whatsappNumber: '+34661526912',
    officeHours: 'Lunes a Domingo, 10:00 a.m. a 10:00 p.m.',
  },

  social: {
    facebook: 'https://facebook.com/partypintorosa',
    instagram: 'https://instagram.com/partypintorosa',
  },

  navigation: {
    items: [
      { label: 'Inicio', href: '/' },
      {
        label: 'Clases',
        href: '/servicios',
        children: [
          { label: 'Salsa', href: '/servicios#salsa' },
          { label: 'Bachata', href: '/servicios#bachata' },
          { label: 'Reguetón', href: '/servicios#regueton' },
          { label: 'Perreo', href: '/servicios#perreo' },
        ],
      },
      { label: 'Instructores', href: '/equipo' },
      { label: 'Horarios', href: '/#horarios' },
    ],
  },

  hero: {
    headline: 'Domina la Pista con PARTY Pinto Rosa',
    subheadline: 'Baila donde tú quieras: Tu escuela de baile móvil en Barcelona. Aprende Salsa, Bachata, Reguetón y Perreo con un sistema a medida.',
    ctaText: 'Reserva tu primera clase',
    ctaHref: '/contacto',
  },

  values: [
    {
      icon: 'experience',
      title: 'Instructores de Élite',
      description: 'Aprende de los mejores profesionales con años de experiencia en los escenarios internacionales.',
    },
    {
      icon: 'team',
      title: 'Comunidad Vibrante',
      description: 'Más que una academia, somos una familia unida por la pasión al baile.',
    },
    {
      icon: 'results',
      title: 'Metodología Probada',
      description: 'No importa si empiezas de cero, nuestro método te garantiza bailar desde el primer día.',
    },
  ],

  services: [
    {
      icon: 'custom',
      title: 'Clases de Salsa',
      slug: 'salsa',
      shortDescription: 'Aprende salsa en línea y cubana con la mejor técnica y sabor.',
      fullDescription: 'Domina los pasos libres, las vueltas en pareja y la musicalidad característica de la Salsa. Desde niveles básicos hasta avanzados, disfruta de este ritmo que enciende cualquier pista de baile.',
      videoUrl: '/1.mp4',
    },
    {
      icon: 'custom',
      title: 'Bachata Sensual',
      slug: 'bachata',
      shortDescription: 'Conecta con tu pareja con los movimientos suaves de la bachata.',
      fullDescription: 'Expresión, conexión y fluidez corporal. Te enseñamos todas las técnicas de la bachata dominicana y la bachata sensual moderna, enfocándonos en la disociación corporal.',
      videoUrl: '/2.mp4',
    },
    {
      icon: 'custom',
      title: 'Reguetón',
      slug: 'regueton',
      shortDescription: 'Siente el beat urbano y domina las coreografías del momento.',
      fullDescription: 'Clases dinámicas para mejorar tu coordinación, estilo (styling) urbano y resistencia. Aprende de los pioneros del género con coreos explosivas.',
      videoUrl: '/3.mp4',
    },
    {
      icon: 'custom',
      title: 'Perreo Intensivo',
      slug: 'perreo',
      shortDescription: 'La clase para soltarte, trabajar tu movilidad de cadera y disfrutar sin complejos.',
      fullDescription: 'Enfocado en movimientos de cadera, floorwork, y actitud callejera. Un espacio seguro para aprender los pasos del perreo y liberar energía al máximo.',
      videoUrl: '/4.mp4',
    },
  ],

  tabs: [
    {
      title: 'Niveles Principiantes',
      content: 'Ideal para quienes nunca han bailado. Nos enfocamos en el ritmo base, el conteo y la confianza en la pista.',
    },
    {
      title: 'Niveles Intermedios',
      content: 'Para quienes ya tienen experiencia y quieren perfeccionar técnica, añadir estilo propio y dominar giros múltiples.',
    },
    {
      title: 'Competencia y Shows',
      content: 'Entrenamiento de alto rendimiento para alumnos que buscan presentarse en congresos o participar en campeonatos.',
    },
  ],

  team: [
    {
      name: 'Carlos Ruiz',
      title: 'Director - Especialista en Salsa',
      bio: 'Bailarín profesional con 15 años de trayectoria.',
      specialties: ['Salsa Cubana', 'Salsa On1'],
    },
    {
      name: 'Sofia Méndez',
      title: 'Instructora de Bachata',
      bio: 'Campeona nacional de Bachata Sensual.',
      specialties: ['Bachata Sensual', 'Lady Style'],
    },
    {
      name: 'Eliel "Flow"',
      title: 'Coreógrafo Urbano',
      bio: 'El rey de los ritmos urbanos, creador de trends virales.',
      specialties: ['Reguetón', 'Perreo'],
    },
  ],

  testimonials: [
    {
      name: 'Lucía G.',
      quote: '¡La mejor decisión! Entré sin saber mover un pie y ahora no salgo de la pista. Los profes de salsa son lo máximo.',
      rating: 5,
      caseType: 'Salsa',
    },
    {
      name: 'Marcos R.',
      quote: 'El taller de Bachata Sensual cambió mi forma de conectar en el baile. Hay una energía increíble en esta academia.',
      rating: 5,
      caseType: 'Bachata',
    },
    {
      name: 'Karla P.',
      quote: 'Las clases de Perreo son mi terapia semanal. Sudas, te ríes y sales con el autoestima por las nubes.',
      rating: 5,
      caseType: 'Perreo',
    },
  ],

  booking: {
    enabled: true,
    ctaText: 'Reserva tu lugar',
  },

  seo: {
    siteTitle: 'PARTY Pinto Rosa - Escuela de Baile Móvil Barcelona',
    titleTemplate: '%s | PARTY Pinto Rosa',
    defaultDescription: 'Baila donde tú quieras en Barcelona. Clases de baile a domicilio, al aire libre o en estudio. Salsa, Bachata y ritmos urbanos con PARTY Pinto Rosa.',
    locale: 'es_ES',
  },

  legal: {
    privacyLastUpdated: '2026-03-01',
    termsLastUpdated: '2026-03-01',
  },
}
