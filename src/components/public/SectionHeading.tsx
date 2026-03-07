interface SectionHeadingProps {
  label?: string
  title: string
  subtitle?: string
  centered?: boolean
  light?: boolean
}

export function SectionHeading({ label, title, subtitle, centered = true, light = false }: SectionHeadingProps) {
  return (
    <div className={centered ? 'text-center' : ''}>
      {label && (
        <p className={`text-sm font-bold uppercase tracking-widest mb-3 ${light ? 'text-[#00F0FF]' : 'text-[#FF007F]'}`}>
          {label}
        </p>
      )}
      <h2 className={`font-heading text-display-md md:text-display-lg mb-6 tracking-wide font-black drop-shadow-md ${light ? 'text-white' : 'text-white'}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`text-lg max-w-2xl font-medium ${centered ? 'mx-auto' : ''} ${light ? 'text-white/80' : 'text-white/70'}`}>
          {subtitle}
        </p>
      )}
    </div>
  )
}
