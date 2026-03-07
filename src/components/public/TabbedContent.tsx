'use client'

import { useState } from 'react'
import { siteConfig } from '@/config/siteConfig'
import { SectionHeading } from './SectionHeading'

export function TabbedContent() {
  const [activeTab, setActiveTab] = useState(0)
  const { tabs } = siteConfig

  return (
    <section id="horarios" className="py-20 lg:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          label="Nuestra Metodología"
          title="Niveles diseñados para tu progreso"
        />

        <div className="mt-16 max-w-4xl mx-auto card-glass overflow-hidden p-1 md:p-2">
          {/* Desktop Tabs */}
          <div className="hidden md:flex border-b border-white/10">
            {tabs.map((tab, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`flex-1 py-5 px-6 text-sm font-bold uppercase tracking-widest text-center transition-all relative ${
                  activeTab === index
                    ? 'text-[#00F0FF] bg-white/5'
                    : 'text-white/60 hover:text-white hover:bg-white/5'
                }`}
              >
                {tab.title}
                {activeTab === index && (
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#FF007F] to-[#00F0FF] shadow-neon" />
                )}
              </button>
            ))}
          </div>

          {/* Desktop Tab Content */}
          <div className="hidden md:block">
            <div className="p-10 md:p-14 bg-black/20 rounded-b-2xl">
              <h3 className="font-heading text-display-xs text-white mb-5 font-black tracking-wide">
                {tabs[activeTab].title}
              </h3>
              <p className="text-body-lg text-white/80 leading-relaxed font-medium">
                {tabs[activeTab].content}
              </p>
            </div>
          </div>

          {/* Mobile Accordion */}
          <div className="md:hidden space-y-3 p-4">
            {tabs.map((tab, index) => (
              <div key={index} className="border border-white/10 rounded-2xl overflow-hidden bg-black/40">
                <button
                  onClick={() => setActiveTab(activeTab === index ? -1 : index)}
                  className={`w-full py-5 px-5 text-left font-bold text-sm uppercase tracking-widest flex items-center justify-between transition-colors ${
                    activeTab === index ? 'text-[#00F0FF] bg-white/10' : 'text-white/80 hover:bg-white/5'
                  }`}
                >
                  {tab.title}
                  <svg
                    className={`w-6 h-6 transition-transform ${activeTab === index ? 'rotate-180 text-[#FF007F]' : ''}`}
                    fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {activeTab === index && (
                  <div className="px-5 pb-6 pt-2 bg-black/20 animate-fade-in border-t border-white/5">
                    <p className="text-base text-white/80 leading-relaxed font-medium mt-2">
                      {tab.content}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
