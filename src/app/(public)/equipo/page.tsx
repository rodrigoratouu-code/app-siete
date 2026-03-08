import type { Metadata } from 'next'
import Link from 'next/link'
import { siteConfig } from '@/config/siteConfig'
import { SectionHeading } from '@/components/public/SectionHeading'

export const metadata: Metadata = {
  title: siteConfig.seo.titleTemplate.replace('%s', 'Instructores'),
  description: `Conozca al equipo de instructores de ${siteConfig.firmName} en ${siteConfig.contact.city}.`,
}

export default function EquipoPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-20 lg:py-28 overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#B026FF]/20 rounded-full blur-[100px] -z-10 mix-blend-screen" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <SectionHeading
            label="Nuestro Equipo"
            title="Instructores Élite"
            subtitle={`Aprende de los mejores profesionales en la escena del baile latino y urbano.`}
          />
        </div>
      </section>

      {/* Team members */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {siteConfig.team.map((member, index) => {
              const initials = member.name.split(' ').map(n => n[0]).join('')
              return (
                <div
                  key={index}
                  className="card-glass p-8 flex flex-col items-center text-center group hover:-translate-y-2 transition-transform duration-500"
                >
                  {/* Photo / Placeholder */}
                  <div className="mb-6 relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#FF007F] to-[#B026FF] rounded-full blur-lg opacity-40 group-hover:opacity-70 transition-opacity duration-500" />
                    {member.imageUrl ? (
                      <img
                        src={member.imageUrl}
                        alt={member.name}
                        className="w-40 h-40 rounded-full object-cover border-2 border-white/20 relative z-10"
                      />
                    ) : (
                      <div className="w-40 h-40 rounded-full bg-black/50 border border-white/10 flex items-center justify-center relative z-10 backdrop-blur-md">
                        <span className="text-5xl font-heading font-black text-transparent bg-clip-text bg-gradient-to-br from-[#FF007F] to-[#00F0FF]">
                          {initials}
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="w-full">
                    <h2 className="font-heading text-display-xs text-white mb-1 font-black">
                      {member.name}
                    </h2>
                    <p className="text-body-sm text-[#00F0FF] font-bold uppercase tracking-wider mb-4">
                      {member.title}
                    </p>
                    <p className="text-body-sm text-white/70 leading-relaxed mb-6 line-clamp-3">
                      {member.bio}
                    </p>

                    {/* Specialties */}
                    <div className="flex flex-wrap justify-center gap-2 mb-8">
                      {member.specialties.map((spec) => (
                        <span
                          key={spec}
                          className="bg-white/5 border border-white/10 text-white/90 text-[10px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-full"
                        >
                          {spec}
                        </span>
                      ))}
                    </div>

                    {member.bookingSlug && (
                      <Link
                        href={`/book/${member.bookingSlug}`}
                        className="inline-flex w-full justify-center items-center py-3 rounded-lg bg-white/5 text-white font-bold tracking-widest uppercase hover:bg-[#FF007F] transition-colors border border-white/10 text-xs"
                      >
                        Agendar con {member.name.split(' ')[0]}
                      </Link>
                    )}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* About firm section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#00F0FF]/5 -z-10" />
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 card-glass p-10 md:p-14">
          <h2 className="font-heading text-display-sm text-white mb-6 font-black">
            Sobre {siteConfig.firmName}
          </h2>
          <p className="text-lg text-white/80 leading-relaxed mb-8 font-medium">
            {siteConfig.firmDescription}
          </p>
          <Link
            href="/contacto"
            className="btn-neon inline-flex"
          >
            Contáctenos
          </Link>
        </div>
      </section>
    </>
  )
}
