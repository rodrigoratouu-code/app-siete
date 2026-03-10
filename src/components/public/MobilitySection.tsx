import { SectionHeading } from './SectionHeading'
import { MapPinIcon, HomeIcon, SunIcon, ClockIcon, ShieldCheckIcon, UserGroupIcon } from './icons'

export function MobilitySection() {
  return (
    <section className="py-20 lg:py-28 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#FF007F]/5 rounded-full blur-[100px] -z-10" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#00F0FF]/5 rounded-full blur-[100px] -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          label="Libertad Total"
          title="Baila donde tú quieras"
          subtitle="Tu escuela de baile móvil en Barcelona. En Pinto Rosa, rompemos las barreras de la academia tradicional. Tú eliges el escenario, nosotros ponemos el ritmo."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          {/* Card 1: Domicilio */}
          <div className="card-glass p-8 group hover:border-[#FF007F]/40 transition-colors">
            <div className="w-16 h-16 bg-[#FF007F]/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <HomeIcon className="w-8 h-8 text-[#FF007F]" />
            </div>
            <h3 className="font-heading text-xl font-bold text-white mb-4">1. Clases a domicilio</h3>
            <p className="text-white/70 text-sm leading-relaxed">
              ¿Prefieres la privacidad de tu salón? Nos desplazamos a tu domicilio en cualquier barrio de BCN (Eixample, Gràcia, Les Corts, Sarrià, etc.). Ideal para soltarte sin presiones y avanzar a tu ritmo.
            </p>
          </div>

          {/* Card 2: Local/Estudio */}
          <div className="card-glass p-8 group hover:border-[#00F0FF]/40 transition-colors">
            <div className="w-16 h-16 bg-[#00F0FF]/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <MapPinIcon className="w-8 h-8 text-[#00F0FF]" />
            </div>
            <h3 className="font-heading text-xl font-bold text-white mb-4">2. Entrenamiento en local</h3>
            <p className="text-white/70 text-sm leading-relaxed">
              Si prefieres un ambiente de estudio con espejos y suelo técnico, disponemos de espacios colaboradores en el corazón de Barcelona. Inmersión total en la técnica.
            </p>
          </div>

          {/* Card 3: Aire Libre */}
          <div className="card-glass p-8 group hover:border-[#B026FF]/40 transition-colors">
            <div className="w-16 h-16 bg-[#B026FF]/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <SunIcon className="w-8 h-8 text-[#B026FF]" />
            </div>
            <h3 className="font-heading text-xl font-bold text-white mb-4">3. Bailar al aire libre</h3>
            <p className="text-white/70 text-sm leading-relaxed">
              Siente la energía de BCN en espacios abiertos emblemáticos como el Parc de la Ciutadella o frente al mar. Una experiencia liberadora que mejora tu salud física y conexión social.
            </p>
          </div>
        </div>

        {/* Benefits Highlight */}
        <div className="mt-16 card-glass p-8 md:p-12 border-[#FF007F]/30 bg-gradient-to-br from-[#FF007F]/5 to-transparent">
          <h3 className="font-heading text-2xl font-black text-white mb-8 text-center uppercase tracking-widest">
            ¿Por qué elegir la movilidad de Pinto Rosa?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-[#FF007F]/20 flex items-center justify-center shrink-0">
                <ClockIcon className="w-5 h-5 text-[#FF007F]" />
              </div>
              <div>
                <p className="font-bold text-white mb-1">Ahorro de tiempo</p>
                <p className="text-xs text-white/60 text-pretty">El profesor va hacia ti, optimizando tu agenda al máximo.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-[#00F0FF]/20 flex items-center justify-center shrink-0">
                <UserGroupIcon className="w-5 h-5 text-[#00F0FF]" />
              </div>
              <div>
                <p className="font-bold text-white mb-1">Personalización total</p>
                <p className="text-xs text-white/60 text-pretty">Adaptamos la clase al espacio disponible y a tus objetivos reales.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-[#B026FF]/20 flex items-center justify-center shrink-0">
                <ShieldCheckIcon className="w-5 h-5 text-[#B026FF]" />
              </div>
              <div>
                <p className="font-bold text-white mb-1">Sin miedos</p>
                <p className="text-xs text-white/60 text-pretty">Tú eliges el entorno donde te sientas más seguro para empezar desde cero.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
