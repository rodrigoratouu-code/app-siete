import type { Metadata } from 'next'
import { siteConfig } from '@/config/siteConfig'
import { SectionHeading } from '@/components/public/SectionHeading'
import { ServiceIcon } from '@/components/public/icons'
import Link from 'next/link'

export const metadata: Metadata = {
  title: siteConfig.seo.titleTemplate.replace('%s', 'Clases'),
  description: `Conozca nuestras clases: ${siteConfig.services.map(s => s.title).join(', ')}. ${siteConfig.firmName} en ${siteConfig.contact.city}.`,
}

export default function ServiciosPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-20 lg:py-28 overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#FF007F]/20 rounded-full blur-[100px] -z-10 mix-blend-screen" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#00F0FF]/20 rounded-full blur-[120px] -z-10 mix-blend-screen" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <SectionHeading
            label="Nuestras Clases"
            title="Siente el Ritmo"
            subtitle={`En ${siteConfig.firmName} ofrecemos la mejor selección de ritmos latinos y urbanos.`}
          />
        </div>
      </section>

      {/* Services */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="space-y-16">
            {siteConfig.services.map((service, index) => (
              <div
                key={service.slug}
                id={service.slug}
                className="scroll-mt-24 group"
              >
                <div className={`flex flex-col lg:flex-row gap-10 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                  {/* Icon block / Video Placeholder */}
                  <div className="shrink-0 w-full lg:w-[450px]">
                    <div className="card-glass aspect-video p-2 rounded-3xl flex items-center justify-center relative overflow-hidden group-hover:border-[#FF007F]/50 transition-colors duration-500">
                      <div className="absolute inset-0 bg-gradient-to-br from-[#FF007F]/10 to-[#B026FF]/10 z-0" />
                      <ServiceIcon icon={service.icon} className="w-24 h-24 text-[#00F0FF] relative z-10 drop-shadow-[0_0_15px_rgba(0,240,255,0.5)] group-hover:scale-110 transition-transform duration-500" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h2 className="font-heading text-display-sm md:text-display-md text-white mb-4 font-black drop-shadow-md">
                      {service.title}
                    </h2>
                    <p className="text-body-lg text-white/70 leading-relaxed mb-6">
                      {service.fullDescription}
                    </p>
                    <Link
                      href="/contacto"
                      className="inline-flex items-center btn-neon text-body-sm"
                    >
                      Reservar {service.title}
                      <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </Link>
                  </div>
                </div>

                {index < siteConfig.services.length - 1 && (
                  <hr className="mt-16 border-white/10" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[#FF007F]/5 backdrop-blur-3xl -z-10" />
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h2 className="font-heading text-display-sm md:text-display-md text-white mb-4 font-black">
            ¿Listo para dominar la pista?
          </h2>
          <p className="text-body-lg text-white/80 mb-8 font-medium">
            Únete hoy a {siteConfig.firmName} y descubre por qué somos la academia número uno.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link
              href="/contacto"
              className="btn-neon text-center"
            >
              Agendar Clase de Prueba
            </Link>
            <a
              href={`tel:${siteConfig.contact.phone}`}
              className="inline-flex items-center justify-center px-8 py-4 rounded-xl font-bold uppercase tracking-widest text-white/90 bg-white/5 border border-white/10 hover:bg-white/10 hover:text-white transition-all duration-300"
            >
              Llamar al {siteConfig.contact.phoneDisplay}
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
