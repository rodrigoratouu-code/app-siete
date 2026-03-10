'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { siteConfig } from '@/config/siteConfig'
import { ChevronDownIcon, MenuIcon } from './icons'
import { MobileMenu } from './MobileMenu'

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setOpenDropdown(null)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <>
      <nav className={`fixed w-full top-0 z-50 transition-all duration-300 ${scrolled ? 'glass border-b border-white/20' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-24">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              <Image
                src="/icons/PartyRP-192.png"
                alt={siteConfig.firmName}
                width={44}
                height={44}
                className="rounded-full shadow-neon"
              />
              <div>
                <span className="font-heading text-2xl lg:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#FF007F] to-[#00F0FF] tracking-tighter">
                  {siteConfig.firmName.split(' ')[0]}
                </span>
                <span className="font-heading text-2xl lg:text-3xl font-light text-white tracking-tighter ml-2">
                  {siteConfig.firmName.split(' ').slice(1).join(' ')}
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-2" ref={dropdownRef}>
              {siteConfig.navigation.items.map((item) => (
                <div key={item.label} className="relative">
                  {item.children ? (
                    <>
                      <button
                        onClick={() => setOpenDropdown(openDropdown === item.label ? null : item.label)}
                        className={`flex items-center gap-1 px-4 py-2 text-sm font-bold uppercase tracking-widest transition-colors ${
                          openDropdown === item.label ? 'text-[#FF007F]' : 'text-white hover:text-[#00F0FF]'
                        }`}
                      >
                        {item.label}
                        <ChevronDownIcon className={`w-4 h-4 transition-transform ${openDropdown === item.label ? 'rotate-180' : ''}`} />
                      </button>
                      {openDropdown === item.label && (
                        <div className="absolute top-full left-0 mt-2 w-56 glass border border-white/20 rounded-xl py-3 animate-fade-in shadow-glass">
                          {item.children.map((child) => (
                            <Link
                              key={child.label}
                              href={child.href}
                              className="block px-5 py-3 text-sm font-semibold text-white hover:bg-white/10 hover:text-[#00F0FF] transition-colors"
                              onClick={() => setOpenDropdown(null)}
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
                      className="px-4 py-2 text-sm font-bold uppercase tracking-widest text-white hover:text-[#FF007F] transition-colors"
                    >
                      {item.label}
                    </Link>
                  )}
                </div>
              ))}
              <Link
                href="/contacto"
                className="ml-6 flex items-center justify-center btn-neon"
              >
                Inscribirme
              </Link>
            </div>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMobileOpen(true)}
              className="lg:hidden p-2 text-white hover:text-[#FF007F] transition-colors glass rounded-md"
              aria-label="Abrir menú"
            >
              <MenuIcon className="w-6 h-6" />
            </button>
          </div>
        </div>
      </nav>

      <MobileMenu open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  )
}
