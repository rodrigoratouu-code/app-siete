import Link from 'next/link'
import { siteConfig } from '@/config/siteConfig'
import { PhoneIcon, MailIcon, MapPinIcon, ClockIcon, FacebookIcon, InstagramIcon, LinkedInIcon } from './icons'

export function Footer() {
  const { contact, social, services } = siteConfig
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-black/80 backdrop-blur-2xl text-white/70 border-t border-white/10 relative z-20">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Column 1: About */}
          <div>
            <Link href="/" className="flex items-center gap-2 mb-6">
              <span className="font-heading text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#FF007F] to-[#00F0FF]">{siteConfig.firmName}</span>
            </Link>
            <p className="text-sm text-white/60 leading-relaxed mb-6 font-medium">
              {siteConfig.firmDescription}
            </p>
            <p className="text-xs text-[#00F0FF] tracking-wider uppercase font-bold">
              Las mejores pistas en {contact.city}.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="font-heading text-white font-bold mb-6 tracking-wide uppercase">La Academia</h3>
            <ul className="space-y-4">
              {siteConfig.navigation.items.map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="text-sm text-white/60 hover:text-[#00F0FF] transition-colors font-medium">
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/privacidad" className="text-sm text-white/60 hover:text-[#00F0FF] transition-colors font-medium">
                  Política de Privacidad
                </Link>
              </li>
              <li>
                <Link href="/terminos" className="text-sm text-white/60 hover:text-[#00F0FF] transition-colors font-medium">
                  Términos de Servicio
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Services */}
          <div>
            <h3 className="font-heading text-white font-bold mb-6 tracking-wide uppercase">Clases</h3>
            <ul className="space-y-4">
              {services.map((service) => (
                <li key={service.slug}>
                  <Link href={`/servicios#${service.slug}`} className="text-sm text-white/60 hover:text-[#FF007F] transition-colors font-medium">
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h3 className="font-heading text-white font-bold mb-6 tracking-wide uppercase">Contacto</h3>
            <ul className="space-y-4">
              <li>
                <div className="flex items-start gap-3 mt-1">
                  <MapPinIcon className="w-5 h-5 text-[#FF007F] mt-0.5 shrink-0" />
                  <span className="text-sm font-medium">{contact.address}, {contact.city}</span>
                </div>
              </li>
              <li>
                <a href={`tel:${contact.phone}`} className="flex items-center gap-3 text-sm hover:text-[#00F0FF] transition-colors font-medium">
                  <PhoneIcon className="w-5 h-5 text-[#00F0FF]" />
                  {contact.phoneDisplay}
                </a>
              </li>
              <li>
                <a href={`mailto:${contact.email}`} className="flex items-center gap-3 text-sm hover:text-[#00F0FF] transition-colors font-medium">
                  <MailIcon className="w-5 h-5 text-[#00F0FF]" />
                  {contact.email}
                </a>
              </li>
              <li className="flex items-center gap-3 text-sm font-medium">
                <ClockIcon className="w-5 h-5 text-[#B026FF]" />
                {contact.officeHours}
              </li>
            </ul>

            {/* Social links */}
            <div className="flex items-center gap-4 mt-8">
              {social.facebook && (
                <a href={social.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="w-10 h-10 rounded-full border border-white/10 glass hover:bg-white/10 flex items-center justify-center transition-all hover:border-[#00F0FF] hover:shadow-[0_0_10px_rgba(0,240,255,0.3)]">
                  <FacebookIcon className="w-5 h-5 text-white hover:text-[#00F0FF]" />
                </a>
              )}
              {social.instagram && (
                <a href={social.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="w-10 h-10 rounded-full border border-white/10 glass hover:bg-white/10 flex items-center justify-center transition-all hover:border-[#FF007F] hover:shadow-[0_0_10px_rgba(255,0,127,0.3)]">
                  <InstagramIcon className="w-5 h-5 text-white hover:text-[#FF007F]" />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10 bg-black/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-medium text-white/50 uppercase tracking-widest">
            <p>Copyright &copy; {currentYear} {siteConfig.firmName}. Todos los derechos reservados.</p>
            <div className="flex items-center gap-6">
              <Link href="/privacidad" className="hover:text-white transition-colors">Privacidad</Link>
              <Link href="/terminos" className="hover:text-white transition-colors">Legal</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
