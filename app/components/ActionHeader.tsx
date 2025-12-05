'use client'

import { Button } from '@/components/ui/button'
import { siteConfig } from '@/data/site-config'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

export default function ActionHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="w-full bg-white/80 backdrop-blur-md border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-5">
        {/* Logo */}
        <Link href="/" className="hover:opacity-75 transition-opacity">
          <Image 
            src={siteConfig.logo.src} 
            alt={siteConfig.logo.alt} 
            width={100} 
            height={100}
            className="object-contain"
          />
        </Link>

        {/* Navigation Desktop - Actions */}
        <nav className="hidden md:flex items-center gap-6">
          <Link href="/linux" className="text-sm text-gray-600 hover:text-purple-600 font-medium transition-colors py-2">
            🐧 Linux
          </Link>
          <Link href="/reemploi" className="text-sm text-gray-600 hover:text-purple-600 font-medium transition-colors py-2">
            ♻️ Réemploi
          </Link>
          <Link href="/forge" className="text-sm text-gray-600 hover:text-purple-600 font-medium transition-colors py-2">
            📚 Forge
          </Link>
          <Link href="/sobriete" className="text-sm text-gray-600 hover:text-purple-600 font-medium transition-colors py-2">
            🌱 Sobriété
          </Link>
        </nav>

        {/* CTA Button */}
        <div className="hidden md:block">
          <Button className="bg-linear-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-6 rounded-full" asChild>
            <Link href="/">Accueil</Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <Button 
            variant="ghost" 
            size="icon" 
            className="rounded-full"
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
          <div className="px-6 py-4 space-y-3">
            <Link 
              href="/linux" 
              className="block text-sm text-gray-600 hover:text-purple-600 py-2 font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              🐧 Linux
            </Link>
            <Link 
              href="/reemploi" 
              className="block text-sm text-gray-600 hover:text-purple-600 py-2 font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              ♻️ Réemploi
            </Link>
            <Link 
              href="/forge" 
              className="block text-sm text-gray-600 hover:text-purple-600 py-2 font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              📚 Forge
            </Link>
            <Link 
              href="/sobriete" 
              className="block text-sm text-gray-600 hover:text-purple-600 py-2 font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              🌱 Sobriété
            </Link>
            <Button 
              className="w-full bg-linear-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white mt-2" 
              asChild
            >
              <Link href="/">Accueil</Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  )
}
