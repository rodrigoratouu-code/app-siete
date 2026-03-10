'use client'

import { useState, useEffect } from 'react'
import { SunIcon, MoonIcon } from './icons'

export function ThemeToggle() {
  const [theme, setTheme] = useState<'light' | 'dark'>('dark')

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null
    if (savedTheme) {
      setTheme(savedTheme)
      document.documentElement.classList.toggle('light', savedTheme === 'light')
    }
  }, [])

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light'
    setTheme(newTheme)
    localStorage.setItem('theme', newTheme)
    document.documentElement.classList.toggle('light', newTheme === 'light')
  }

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full glass border border-white/20 hover:border-[#FF007F]/50 transition-colors group"
      aria-label="Cambiar tema"
    >
      {theme === 'light' ? (
        <MoonIcon className="w-5 h-5 text-[#B026FF] group-hover:scale-110 transition-transform" />
      ) : (
        <SunIcon className="w-5 h-5 text-[#00F0FF] group-hover:scale-110 transition-transform" />
      )}
    </button>
  )
}
