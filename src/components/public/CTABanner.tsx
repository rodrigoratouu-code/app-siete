import Link from 'next/link'
import { siteConfig } from '@/config/siteConfig'
import { PhoneIcon } from './icons'

export function CTABanner() {
  return (
    <section className="relative overflow-hidden py-10 md:py-16">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="card-glass overflow-hidden border-[#FF007F]/30 shadow-[0_0_30px_rgba(255,0,127,0.2)]">
          {/* Decorative Glare */}
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 bg-gradient-to-br from-[#FF007F]/40 to-[#00F0FF]/40 blur-3xl rounded-full animate-pulse-slow" />
          
          <div className="relative p-10 lg:p-16 flex flex-col lg:flex-row items-center justify-between gap-8 z-10">
            <div className="text-center lg:text-left">
              <h2 className="font-heading text-display-xs md:text-display-sm text-white mb-4 font-black tracking-wide drop-shadow-md">
                ¿Listo para dominar la pista de baile?
              </h2>
              <p className="text-lg text-white/80 font-medium font-heading">
                Inscríbete hoy y prueba tu primera clase totalmente gratis.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-5 shrink-0 mt-4 lg:mt-0">
              <a
                href={`tel:${siteConfig.contact.phone}`}
                className="flex items-center gap-3 bg-white/5 backdrop-blur-md border border-white/20 text-white font-heading font-bold text-lg px-8 py-4 rounded-full hover:bg-white/10 transition-all shadow-lg hover:shadow-[0_0_15px_rgba(0,240,255,0.4)] hover:border-[#00F0FF]/50"
              >
                <PhoneIcon className="w-6 h-6 text-[#00F0FF]" />
                {siteConfig.contact.phoneDisplay}
              </a>
              <Link
                href="/contacto"
                className="btn-neon px-10 py-4 shadow-xl text-lg uppercase tracking-widest"
              >
                ¡Empieza a bailar!
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
