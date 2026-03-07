import Link from 'next/link'
import { siteConfig } from '@/config/siteConfig'
import { SectionHeading } from './SectionHeading'
import { ServiceIcon, ChevronRightIcon } from './icons'

export function ServicesGrid() {
  return (
    <section className="py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          label="Siente la música"
          title="Descubre nuestras Clases de Baile"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-14">
          {siteConfig.services.map((service) => (
            <Link
              key={service.slug}
              href={`/servicios#${service.slug}`}
              className="group card-glass p-8 flex flex-col justify-between transition-all duration-300 transform hover:-translate-y-2"
            >
              <div>
                <div className="w-16 h-16 bg-white/5 group-hover:bg-[#FF007F]/20 rounded-2xl flex items-center justify-center mb-6 transition-all border border-white/10 group-hover:border-[#FF007F]/50 shadow-[0_0_15px_rgba(255,0,127,0.1)] group-hover:shadow-[0_0_20px_rgba(255,0,127,0.4)]">
                  <ServiceIcon icon={service.icon} className="w-8 h-8 text-white group-hover:text-[#00F0FF] transition-colors" />
                </div>
                <h3 className="font-heading text-display-xs text-white mb-4 tracking-wide font-bold">{service.title}</h3>
                <p className="text-body-sm text-white/70 leading-relaxed mb-6 font-medium">
                  {service.shortDescription}
                </p>
              </div>
              <span className="inline-flex items-center text-sm font-bold text-[#FF007F] group-hover:text-[#00F0FF] transition-colors uppercase tracking-widest mt-auto">
                Ver detalles
                <ChevronRightIcon className="w-5 h-5 ml-1 group-hover:translate-x-2 transition-transform" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
