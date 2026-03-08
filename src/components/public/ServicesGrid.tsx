import Link from 'next/link'
import { siteConfig } from '@/config/siteConfig'
import { SectionHeading } from './SectionHeading'
import { ServiceIcon, ChevronRightIcon } from './icons'

export function ServicesGrid() {
  return (
    <section className="py-20 lg:py-28 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-[#FF007F]/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-[#00F0FF]/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          label="Siente la música"
          title="Descubre nuestras Clases de Baile"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-14">
          {siteConfig.services.map((service) => (
            <div
              key={service.slug}
              className="group relative h-[500px] card-glass overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-white/10 hover:border-[#FF007F]/50"
            >
              {/* Video Background */}
              {service.videoUrl && (
                <video
                  src={service.videoUrl}
                  className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700"
                  autoPlay
                  muted
                  loop
                  playsInline
                />
              )}

              {/* Gradient Overlays */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500" />
              <div className="absolute inset-0 bg-gradient-to-b from-[#FF007F]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Content */}
              <div className="relative h-full p-8 flex flex-col justify-end z-20">
                <div className="mb-auto transform group-hover:-translate-y-2 transition-transform duration-500">
                  <div className="w-14 h-14 bg-white/5 backdrop-blur-md rounded-2xl flex items-center justify-center mb-6 border border-white/20 group-hover:border-[#FF007F]/50 shadow-xl">
                    <ServiceIcon icon={service.icon} className="w-7 h-7 text-white group-hover:text-[#00F0FF] transition-colors" />
                  </div>
                </div>

                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <h3 className="font-heading text-display-xs text-white mb-3 tracking-wide font-bold drop-shadow-lg">
                    {service.title}
                  </h3>
                  <p className="text-body-sm text-white/80 leading-relaxed mb-8 font-medium line-clamp-2 group-hover:line-clamp-none transition-all duration-500">
                    {service.shortDescription}
                  </p>

                  <Link
                    href={`/servicios#${service.slug}`}
                    className="inline-flex items-center justify-center w-full py-4 px-6 bg-white/10 hover:bg-[#FF007F] border border-white/20 hover:border-[#FF007F] text-white font-bold rounded-xl backdrop-blur-lg transition-all duration-300 group/btn shadow-[0_0_20px_rgba(255,0,127,0)] hover:shadow-[0_0_25px_rgba(255,0,127,0.4)]"
                  >
                    <span className="uppercase tracking-widest text-xs">Reservar Clase</span>
                    <ChevronRightIcon className="w-5 h-5 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>

              {/* Decorative corner accent */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-[#FF007F]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
