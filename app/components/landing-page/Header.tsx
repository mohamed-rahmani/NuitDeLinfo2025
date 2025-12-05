'use client'

import { Button } from '@/components/ui/button'
import { siteConfig } from '@/data/site-config'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="w-full bg-white/80 backdrop-blur-md border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-5">
        {/* Desktop Layout */}
        <div className="hidden md:grid md:grid-cols-3 items-center gap-4">
          {/* Logo */}
          <Link href="/" className="hover:opacity-75 transition-opacity">
            <Image 
              src={siteConfig.logo.src} 
              alt={siteConfig.logo.alt} 
              width={120} 
              height={120}
              className="object-contain"
            />
          </Link>

          {/* Navigation Desktop - Centrée */}
          <nav className="flex items-center justify-center gap-6">
            {siteConfig.header.navigation.map((menu) => (
              <div key={menu.label} className="group relative">
                <button className="text-sm text-gray-600 hover:text-gray-900 font-medium transition-colors py-2">
                  {menu.label}
                </button>
                {/* Dropdown au hover */}
                <div className="absolute top-full left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  <div className="bg-white rounded-xl shadow-xl border border-gray-100 py-2 min-w-[200px]">
                    {menu.items.map((item) => (
                      <Link
                        key={item.label}
                        href={item.href}
                        className="block px-4 py-2.5 text-sm text-gray-600 hover:text-purple-600 hover:bg-purple-50 transition-colors"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </nav>

          {/* CTA Button - Aligné à droite */}
          <div className="flex justify-end">
            <Button className="bg-linear-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-6 rounded-full" asChild>
              <a href="https://edurl.fr/tchap-laforgeedu-nird" target="_blank" rel="noopener noreferrer">
                Rejoindre la communauté
              </a>
            </Button>
          </div>
        </div>

        {/* Mobile Layout - Centered Logo */}
        <div className="md:hidden flex items-center justify-center relative">
          {/* Logo centré */}
          <Link href="/" className="hover:opacity-75 transition-opacity">
            <Image 
              src={siteConfig.logo.src} 
              alt={siteConfig.logo.alt} 
              width={100} 
              height={100}
              className="object-contain"
            />
          </Link>

          {/* Mobile Menu Button - Position absolue à droite */}
          <Button 
            variant="ghost" 
            size="icon" 
            className="rounded-full absolute right-0"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100">
          <div className="px-6 py-4 space-y-4">
            {siteConfig.header.navigation.map((menu) => (
              <div key={menu.label}>
                <p className="text-sm font-bold text-gray-900 mb-2">{menu.label}</p>
                <div className="space-y-2 pl-4">
                  {menu.items.map((item) => (
                    <Link
                      key={item.label}
                      href={item.href}
                      className="block text-sm text-gray-600 hover:text-purple-600 py-1"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
            <Button 
              className="w-full bg-linear-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white" 
              asChild
            >
              <a href="https://edurl.fr/tchap-laforgeedu-nird" target="_blank" rel="noopener noreferrer">
                Rejoindre la communauté
              </a>
            </Button>
          </div>
        </div>
      )}
    </header>
  )
}
