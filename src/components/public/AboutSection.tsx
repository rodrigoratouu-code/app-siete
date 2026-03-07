import Link from 'next/link'
import { siteConfig } from '@/config/siteConfig'

export function AboutSection() {
  const { founderName, founderTitle, founderBio, yearsExperience, firmName } = siteConfig
  const initials = founderName.split(' ').map(n => n[0]).join('')

  return (
    <section className="py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image / Placeholder con Glassmorphism */}
          <div className="relative">
            <div className="aspect-[4/5] rounded-3xl bg-gradient-to-br from-[#FF007F]/20 to-[#B026FF]/20 flex items-center justify-center overflow-hidden border border-white/20 shadow-neon backdrop-blur-md">
              <span className="text-9xl font-heading font-black text-white/40 drop-shadow-lg">{initials}</span>
            </div>
            {/* Experience badge */}
            <div className="absolute -bottom-5 -right-5 md:bottom-8 md:-right-6 card-glass p-6 text-center animate-pulse-slow border-[#00F0FF]/40 shadow-[0_0_15px_rgba(0,240,255,0.3)]">
              <span className="block font-heading text-display-md text-[#00F0FF] font-black">{yearsExperience}+</span>
              <span className="text-body-sm text-white/80 font-bold uppercase tracking-widest">Años de Exp.</span>
            </div>
          </div>

          {/* Content */}
          <div className="card-glass p-8 md:p-10">
            <p className="text-sm font-bold uppercase tracking-widest text-[#FF007F] mb-4">
              La dirección de {firmName.split(' ')[0]}
            </p>
            <h2 className="font-heading text-display-md md:text-display-lg text-white mb-6 font-black leading-tight drop-shadow-md">
              Somos la academia de{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF007F] to-[#00F0FF]">baile latino</span>{' '}
              definitiva en {siteConfig.contact.city}.
            </h2>
            <p className="text-lg text-white/80 leading-relaxed mb-8 font-medium">
              {founderBio}
            </p>

            {/* Founder card */}
            <div className="flex items-center gap-5 p-5 bg-white/5 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#FF007F] to-[#B026FF] flex items-center justify-center shrink-0 shadow-neon">
                <span className="text-xl font-black text-white">{initials}</span>
              </div>
              <div>
                <p className="font-heading text-xl font-bold text-white tracking-wide">{founderName}</p>
                <p className="text-sm text-[#00F0FF] font-semibold uppercase tracking-wider">{founderTitle}</p>
              </div>
            </div>

            <Link
              href="/equipo"
              className="inline-flex items-center mt-8 text-[#FF007F] hover:text-[#00F0FF] font-bold uppercase tracking-widest transition-colors"
            >
              Conocer al equipo
              <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
