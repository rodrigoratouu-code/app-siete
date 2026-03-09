import type { Metadata } from 'next'
import { siteConfig } from '@/config/siteConfig'
import { SectionHeading } from '@/components/public/SectionHeading'
import { ContactForm } from '@/components/public/ContactForm'
import { MapPinIcon, PhoneIcon, MailIcon, ClockIcon, WhatsAppIcon } from '@/components/public/icons'

export const metadata: Metadata = {
  title: siteConfig.seo.titleTemplate.replace('%s', 'Contacto'),
  description: `Contáctenos para una consulta gratuita. ${siteConfig.firmName} - ${siteConfig.contact.address}, ${siteConfig.contact.city}. Tel: ${siteConfig.contact.phoneDisplay}`,
}

export default function ContactoPage() {
  const { contact } = siteConfig

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#FF007F]/20 to-[#00F0FF]/20 py-16 lg:py-24 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Contacto"
            title="Aprende a Bailar Ritmos Latinos"
            subtitle="¿Listo para dar tu primer paso? Contáctanos para informarte sobre nuestras clases de Salsa, Bachata, Reguetón y más."
            light
          />
        </div>
      </section>

      {/* Contact form + Map */}
      <section className="py-20 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Map + Info */}
            <div className="card-glass p-8">
              <div className="rounded-2xl overflow-hidden shadow-neon h-[350px] mb-8 border border-white/10">
                <iframe
                  src={contact.googleMapsEmbedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title={`Ubicación de ${siteConfig.firmName}`}
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-start gap-3 p-4 bg-white/5 rounded-xl border border-white/10">
                  <MapPinIcon className="w-5 h-5 text-[#00F0FF] mt-0.5 shrink-0" />
                  <div>
                    <p className="font-semibold text-white text-body-sm">Dirección</p>
                    <p className="text-body-xs text-white/70">{contact.address}, {contact.city}, {contact.country}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 bg-white/5 rounded-xl border border-white/10">
                  <PhoneIcon className="w-5 h-5 text-[#00F0FF] mt-0.5 shrink-0" />
                  <div>
                    <p className="font-semibold text-white text-body-sm">Teléfono</p>
                    <a href={`tel:${contact.phone}`} className="text-body-xs text-[#00F0FF] hover:text-[#FF007F] transition-colors">{contact.phoneDisplay}</a>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 bg-white/5 rounded-xl border border-white/10">
                  <MailIcon className="w-5 h-5 text-[#00F0FF] mt-0.5 shrink-0" />
                  <div>
                    <p className="font-semibold text-white text-body-sm">Email</p>
                    <a href={`mailto:${contact.email}`} className="text-body-xs text-[#00F0FF] hover:text-[#FF007F] transition-colors">{contact.email}</a>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 bg-white/5 rounded-xl border border-white/10">
                  <ClockIcon className="w-5 h-5 text-[#00F0FF] mt-0.5 shrink-0" />
                  <div>
                    <p className="font-semibold text-white text-body-sm">Horario</p>
                    <p className="text-body-xs text-white/70">{contact.officeHours}</p>
                  </div>
                </div>
              </div>

              {contact.whatsappNumber && (
                <a
                  href={`https://wa.me/${contact.whatsappNumber.replace(/[^0-9]/g, '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 mt-6 w-full bg-[#25D366] hover:bg-[#128C7E] text-white font-semibold py-3.5 rounded-xl transition-all shadow-lg hover:shadow-[#25D366]/20"
                >
                  <WhatsAppIcon className="w-5 h-5" />
                  Escribir por WhatsApp
                </a>
              )}
            </div>

            {/* Form */}
            <div className="card-glass p-8">
              <h2 className="font-heading text-display-xs text-white mb-2">Envíanos un Mensaje</h2>
              <p className="text-body-md text-white/70 mb-8">
                Completa el formulario y nos pondremos en contacto contigo para empezar a bailar.
              </p>
              <div className="[&_label]:text-white/70 [&_input]:bg-white/5 [&_input]:border-white/10 [&_input]:text-white [&_textarea]:bg-white/5 [&_textarea]:border-white/10 [&_textarea]:text-white">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
