import Link from 'next/link'
import { siteConfig } from '@/config/siteConfig'
import { SectionHeading } from './SectionHeading'
import { MapPinIcon, PhoneIcon, MailIcon, ClockIcon } from './icons'

export function ContactSection() {
  const { contact } = siteConfig

  return (
    <section className="py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          title="Nuestra academia te espera."
          subtitle="¿Tienes dudas sobre los niveles o los horarios? Contáctanos y te asesoramos."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-16">
          {/* Map */}
          <div className="card-glass p-2 h-[450px] overflow-hidden">
            <div className="w-full h-full rounded-xl overflow-hidden bg-black/50 flex items-center justify-center">
              {contact.googleMapsEmbedUrl ? (
                <iframe
                  src={contact.googleMapsEmbedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) contrast(80%)' }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title={`Ubicación de ${siteConfig.firmName}`}
                />
              ) : (
                <p className="text-white/50 text-center font-heading tracking-widest uppercase">
                  Mapa Interactivo<br/><span className="text-xs">Ubicación de Ritmo Latino</span>
                </p>
              )}
            </div>
          </div>

          {/* Contact info cards */}
          <div className="space-y-6">
            <div className="card-glass p-6 md:p-8 hover:-translate-y-1 transition-transform">
              <div className="flex items-start gap-5">
                <div className="w-14 h-14 bg-white/5 rounded-2xl border border-white/10 flex items-center justify-center shrink-0">
                  <MapPinIcon className="w-7 h-7 text-[#00F0FF]" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-white mb-2 text-lg">Nuestra Academia</h3>
                  <p className="text-body-sm text-white/70 font-medium">{contact.address}</p>
                  <p className="text-body-sm text-white/70 font-medium">{contact.city}, {contact.country}</p>
                </div>
              </div>
            </div>

            <div className="card-glass p-6 md:p-8 hover:-translate-y-1 transition-transform">
              <div className="flex items-start gap-5">
                <div className="w-14 h-14 bg-white/5 rounded-2xl border border-white/10 flex items-center justify-center shrink-0">
                  <PhoneIcon className="w-7 h-7 text-[#FF007F]" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-white mb-2 text-lg">Contacto Directo</h3>
                  <p className="text-body-sm text-white/70 font-medium">
                    Llama al <a href={`tel:${contact.phone}`} className="text-[#00F0FF] hover:text-white transition-colors">{contact.phoneDisplay}</a><br/>
                    O envíanos un correo a{' '}
                    <a href={`mailto:${contact.email}`} className="text-[#00F0FF] hover:text-white transition-colors">{contact.email}</a>
                  </p>
                </div>
              </div>
            </div>

            <div className="card-glass p-6 md:p-8 hover:-translate-y-1 transition-transform">
              <div className="flex items-start gap-5">
                <div className="w-14 h-14 bg-white/5 rounded-2xl border border-white/10 flex items-center justify-center shrink-0 shadow-neon">
                  <ClockIcon className="w-7 h-7 text-[#B026FF]" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-white mb-2 text-lg">Horario de Clases</h3>
                  <p className="text-body-sm text-white/70 font-medium">{contact.officeHours}</p>
                </div>
              </div>
            </div>

            <a
              href={`https://wa.me/${contact.whatsappNumber?.replace('+', '')}`}
              className="block w-full text-center btn-neon mt-4"
            >
              Envíanos un WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
