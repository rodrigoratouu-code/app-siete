import { siteConfig } from '@/config/siteConfig'
import { ValueIcon } from './icons'

export function ValueCards() {
  return (
    <section className="relative -mt-16 z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {siteConfig.values.map((value, index) => (
            <div
              key={index}
              className="card-glass p-8 flex flex-col items-center text-center gap-4 hover:scale-105 transition-transform duration-300"
            >
              <div className="shrink-0 w-16 h-16 bg-[#FF007F]/20 rounded-2xl flex items-center justify-center border border-[#FF007F]/40 shadow-neon">
                <ValueIcon icon={value.icon as any} className="w-8 h-8 text-[#00F0FF]" />
              </div>
              <div className="mt-2">
                <h3 className="font-heading text-display-xs text-white mb-2 font-black tracking-wide">{value.title}</h3>
                <p className="text-body-sm text-white/80 leading-relaxed font-medium">{value.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
