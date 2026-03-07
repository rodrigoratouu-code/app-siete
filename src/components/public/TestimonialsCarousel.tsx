'use client'

import { useRef } from 'react'
import { siteConfig } from '@/config/siteConfig'
import { SectionHeading } from './SectionHeading'
import { StarIcon, ChevronLeftIcon, ChevronRightIcon } from './icons'

export function TestimonialsCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null)

  const scroll = (direction: 'left' | 'right') => {
    if (!scrollRef.current) return
    const amount = 360
    scrollRef.current.scrollBy({
      left: direction === 'left' ? -amount : amount,
      behavior: 'smooth',
    })
  }

  return (
    <section className="py-20 lg:py-28 relative overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <SectionHeading
          label="Testimonios"
          title="Lo que dicen nuestros alumnos"
          subtitle="La energía de nuestras clases contada por quienes la viven día a día."
          light
        />

        {/* Navigation arrows */}
        <div className="hidden md:flex items-center justify-end gap-3 mt-8 mb-6">
          <button
            onClick={() => scroll('left')}
            className="w-12 h-12 rounded-full card-glass hover:bg-white/10 flex items-center justify-center transition-all border border-[#00F0FF]/30 hover:border-[#00F0FF] hover:shadow-[0_0_15px_rgba(0,240,255,0.4)]"
            aria-label="Anterior"
          >
            <ChevronLeftIcon className="w-6 h-6 text-white" />
          </button>
          <button
            onClick={() => scroll('right')}
            className="w-12 h-12 rounded-full card-glass hover:bg-white/10 flex items-center justify-center transition-all border border-[#00F0FF]/30 hover:border-[#00F0FF] hover:shadow-[0_0_15px_rgba(0,240,255,0.4)]"
            aria-label="Siguiente"
          >
            <ChevronRightIcon className="w-6 h-6 text-white" />
          </button>
        </div>

        {/* Carousel */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto pb-6 snap-x snap-mandatory scrollbar-hide mt-10 md:mt-0"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {siteConfig.testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="flex-none w-[320px] md:w-[380px] card-glass p-8 snap-start hover:-translate-y-2 transition-transform duration-300"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <StarIcon
                    key={i}
                    className={`w-5 h-5 ${i < testimonial.rating ? 'text-[#FF007F] drop-shadow-[0_0_5px_rgba(255,0,127,0.8)]' : 'text-white/20'}`}
                  />
                ))}
              </div>

              {/* Quote */}
              <p className="text-body-md text-white/90 leading-relaxed mb-8 line-clamp-6 italic font-medium">
                &ldquo;{testimonial.quote}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-4 pt-5 border-t border-white/10">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#00F0FF] to-[#FF007F] flex items-center justify-center shadow-neon">
                  <span className="text-body-sm font-black text-white">
                    {testimonial.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <div>
                  <p className="font-bold text-white tracking-wide">{testimonial.name}</p>
                  {testimonial.caseType && (
                    <p className="text-body-xs text-[#00F0FF] uppercase tracking-widest font-semibold">{testimonial.caseType}</p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
