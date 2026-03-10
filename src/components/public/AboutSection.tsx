import Link from 'next/link'
import Image from 'next/image'
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
            <div className="aspect-[4/5] rounded-3xl overflow-hidden border border-white/20 shadow-neon">
              <Image
                src="/gente-bailando.png"
                alt="Gente aprendiendo a bailar ritmos latinos"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>
            {/* Web promotion badge */}
            <div className="absolute -bottom-10 -right-5 md:-bottom-12 md:-right-10 card-glass p-5 max-w-[280px] text-center animate-pulse-slow border-[#FF007F]/40 shadow-[0_0_15px_rgba(255,0,127,0.3)] z-20">
              <p className="text-xs text-white/90 font-bold mb-2 uppercase tracking-wide">
                ¿Creación de páginas web como esta?
              </p>
              <div className="space-y-1 mb-3">
                <p className="text-[#00F0FF] text-sm font-black font-heading tracking-wider">617 615 732</p>
                <p className="text-[#FF007F] text-[10px] font-semibold tracking-wider">dominicana2226@gmail.com</p>
              </div>
              <div className="flex justify-center gap-3">
                <a href="https://wa.me/34617615732" target="_blank" rel="noreferrer" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#25D366]/20 hover:text-[#25D366] transition-colors text-white/70">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.099.824zm-3.423-14.416c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm.029 18.88c-1.161 0-2.305-.292-3.318-.844l-3.677.964.984-3.595c-.607-1.052-.927-2.246-.926-3.468.001-3.825 3.113-6.937 6.937-6.937 1.856.001 3.598.723 4.907 2.034 1.31 1.311 2.031 3.054 2.03 4.908-.001 3.825-3.113 6.938-6.937 6.938z"/></svg>
                </a>
                <a href="mailto:dominicana2226@gmail.com" target="_blank" rel="noreferrer" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#00F0FF]/20 hover:text-[#00F0FF] transition-colors text-white/70">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
                </a>
              </div>
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
