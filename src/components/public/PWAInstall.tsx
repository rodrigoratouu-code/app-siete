'use client'

import { useState, useEffect } from 'react'
import { DownloadIcon, XIcon } from './icons'

export function PWAInstall() {
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handler = (e: any) => {
      // Prevent the mini-infobar from appearing on mobile
      e.preventDefault()
      // Stash the event so it can be triggered later.
      setDeferredPrompt(e)
      // Update UI notify the user they can install the PWA
      setIsVisible(true)
    }

    window.addEventListener('beforeinstallprompt', handler)

    return () => {
      window.removeEventListener('beforeinstallprompt', handler)
    }
  }, [])

  const handleInstallClick = async () => {
    if (!deferredPrompt) return

    // Show the install prompt
    deferredPrompt.prompt()
    // Wait for the user to respond to the prompt
    const { outcome } = await deferredPrompt.userChoice
    console.log(`User response to the install prompt: ${outcome}`)
    // We've used the prompt, and can't use it again, throw it away
    setDeferredPrompt(null)
    setIsVisible(false)
  }

  const handleClose = () => {
    setIsVisible(false)
  }

  if (!isVisible) return null

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[100] w-[calc(100%-2rem)] max-w-md">
      <div className="card-glass p-5 flex items-center gap-4 border border-[#FF007F]/30 shadow-[0_10px_40px_rgba(255,0,127,0.2)] animate-in fade-in slide-in-from-bottom-5 duration-500">
        <div className="w-12 h-12 bg-[#FF007F]/20 rounded-xl flex items-center justify-center shrink-0">
          <DownloadIcon className="w-6 h-6 text-[#FF007F]" />
        </div>
        
        <div className="flex-1 min-w-0">
          <p className="text-white font-bold text-sm tracking-wide">Instalar App</p>
          <p className="text-white/60 text-xs truncate">Añade Ritmo Latino a tu pantalla de inicio</p>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={handleInstallClick}
            className="bg-[#FF007F] hover:bg-[#FF007F]/80 text-white text-xs font-bold py-2 px-4 rounded-lg transition-colors"
          >
            Instalar
          </button>
          <button
            onClick={handleClose}
            className="p-2 hover:bg-white/5 rounded-lg text-white/40 hover:text-white transition-colors"
          >
            <XIcon className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  )
}
