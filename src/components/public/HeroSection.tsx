import Link from 'next/link'
import { siteConfig } from '@/config/siteConfig'

export function HeroSection() {
  const { hero } = siteConfig

  return (
    <section className="relative min-h-[100vh] flex items-center justify-center pt-24 pb-12 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/dancing.png"
          alt="Gente aprendiendo a bailar ritmos latinos"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-[#0a0a0a]" />
      </div>

      {/* Content wrapper with margin auto to center, z-10 properly stacks on top of bg */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col items-center justify-center text-center">
        
        {/* Main Glass Card wrapping the Hero text */}
        <div className="card-glass p-8 md:p-14 max-w-4xl mx-auto flex flex-col items-center animate-slide-up">
          
          {/* Badge */}
          <div className="inline-flex items-center gap-3 bg-black/20 backdrop-blur-md rounded-full px-5 py-2 mb-8 border border-white/20 shadow-neon">
            <span className="w-2.5 h-2.5 rounded-full bg-[#FF007F] animate-pulse shadow-[0_0_10px_#FF007F]" />
            <span className="text-body-sm text-white font-semibold uppercase tracking-widest">
              Líderes en {siteConfig.contact.city}
            </span>
          </div>

          <h1 className="font-heading text-display-lg md:text-display-xl lg:text-display-2xl text-transparent bg-clip-text bg-gradient-to-r from-[#FF007F] to-[#00F0FF] mb-6 leading-tight font-black drop-shadow-md pb-2">
            {hero.headline}
          </h1>
          
          <p className="text-body-lg md:text-display-xs text-white/90 mb-10 max-w-3xl leading-relaxed drop-shadow-lg font-medium">
            {hero.subheadline}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 w-full sm:w-auto mt-4">
            <Link
              href={hero.ctaHref}
              className="btn-neon text-lg uppercase tracking-widest py-4 px-10"
            >
              {hero.ctaText}
            </Link>
            <a
              href={`https://wa.me/${siteConfig.contact.whatsappNumber?.replace('+', '')}`}
              className="inline-flex items-center justify-center glass hover:bg-white/10 text-white font-bold text-body-md px-10 py-4 rounded-full transition-all border border-white/30 text-center uppercase tracking-wider backdrop-blur-xl"
            >
              Contactar al WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
