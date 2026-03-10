'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { siteConfig } from '@/config/siteConfig'
import { CloseIcon, ChevronDownIcon, PhoneIcon, MailIcon, MapPinIcon } from './icons'

interface MobileMenuProps {
  open: boolean
  onClose: () => void
}

export function MobileMenu({ open, onClose }: MobileMenuProps) {
  const [expandedItem, setExpandedItem] = useState<string | null>(null)

  if (!open) return null

  return (
    <div className="fixed inset-0 z-[60] lg:hidden">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/70 backdrop-blur-md" onClick={onClose} />

      {/* Panel */}
      <div className="absolute right-0 top-0 bottom-0 w-80 max-w-[85vw] bg-[#0a0a0a]/90 backdrop-blur-xl shadow-neon border-l border-white/10 animate-slide-in-right overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-5 border-b border-white/10">
          <Link href="/" className="flex items-center gap-3" onClick={onClose}>
            <Image
              src="/icons/PartyRP-192.png"
              alt={siteConfig.firmName}
              width={36}
              height={36}
              className="rounded-full shadow-neon"
            />
            <span className="font-heading text-xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#FF007F] to-[#00F0FF]">{siteConfig.firmName}</span>
          </Link>
          <button onClick={onClose} className="p-2 text-white/70 hover:text-white" aria-label="Cerrar menú">
            <CloseIcon className="w-6 h-6" />
          </button>
        </div>

        {/* Navigation */}
        <nav className="p-5">
          {siteConfig.navigation.items.map((item) => (
            <div key={item.label} className="border-b border-white/10">
              {item.children ? (
                <>
                  <button
                    onClick={() => setExpandedItem(expandedItem === item.label ? null : item.label)}
                    className="flex items-center justify-between w-full py-4 text-sm font-bold uppercase tracking-widest text-white"
                  >
                    {item.label}
                    <ChevronDownIcon className={`w-5 h-5 text-white/50 transition-transform ${expandedItem === item.label ? 'rotate-180' : ''}`} />
                  </button>
                  {expandedItem === item.label && (
                    <div className="pb-3 pl-4 space-y-2 animate-fade-in border-l border-white/10 ml-2">
                      {item.children.map((child) => (
                        <Link
                          key={child.label}
                          href={child.href}
                          className="block py-2 text-sm text-white/70 hover:text-[#00F0FF]"
                          onClick={onClose}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <Link
                  href={item.href}
                  className="block py-4 text-sm font-bold uppercase tracking-widest text-white hover:text-[#FF007F]"
                  onClick={onClose}
                >
                  {item.label}
                </Link>
              )}
            </div>
          ))}
        </nav>

        {/* Contact info */}
        <div className="p-5 mx-5 mb-5 glass rounded-xl space-y-4">
          <a href={`tel:${siteConfig.contact.phone}`} className="flex items-center gap-3 text-sm font-medium text-white/90">
            <PhoneIcon className="w-5 h-5 text-[#00F0FF]" />
            {siteConfig.contact.phoneDisplay}
          </a>
          <a href={`mailto:${siteConfig.contact.email}`} className="flex items-center gap-3 text-sm font-medium text-white/90">
            <MailIcon className="w-5 h-5 text-[#00F0FF]" />
            {siteConfig.contact.email}
          </a>
          <div className="flex items-start gap-3 text-sm font-medium text-white/90">
            <MapPinIcon className="w-5 h-5 text-[#00F0FF] mt-0.5 shrink-0" />
            <span>{siteConfig.contact.address}, {siteConfig.contact.city}</span>
          </div>
        </div>

        {/* CTA buttons */}
        <div className="p-5 space-y-4 mb-8">
          <a
            href={`tel:${siteConfig.contact.phone}`}
            className="block w-full text-center bg-gradient-to-r from-[#FF007F] to-[#B026FF] text-white font-bold tracking-widest uppercase py-4 rounded-xl shadow-neon transition-all hover:scale-105"
          >
            Llamar Ahora
          </a>
          <Link
            href="/contacto"
            className="block w-full text-center border-2 border-white/20 text-white font-bold tracking-widest uppercase py-4 rounded-xl hover:bg-white/10 transition-all"
            onClick={onClose}
          >
            Área de Alumnos
          </Link>
        </div>
      </div>
    </div>
  )
}
