import { siteConfig } from '@/data/site-config'
import { Laptop, RefreshCw, Book, Sprout, LucideIcon } from 'lucide-react'
import Link from 'next/link'

// Map des icônes pour les actions
const iconMap: Record<string, LucideIcon> = {
  Laptop,
  RefreshCw,
  Book,
  Sprout,
}

export default function Actions() {
  const { actions } = siteConfig

  return (
    <section className="w-full py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* En-tête de section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {actions.title}
          </h2>
          <p className="text-xl text-gray-600">
            {actions.subtitle}
          </p>
        </div>

        {/* Grille des actions */}
        <div className="grid md:grid-cols-2 gap-6">
          {actions.items.map((action, index) => {
            const Icon = iconMap[action.icon] || Laptop
            const colors = [
              { gradient: 'from-blue-500 to-blue-600', bg: 'bg-blue-50', border: 'border-blue-200' },
              { gradient: 'from-purple-500 to-purple-600', bg: 'bg-purple-50', border: 'border-purple-200' },
              { gradient: 'from-pink-500 to-pink-600', bg: 'bg-pink-50', border: 'border-pink-200' },
              { gradient: 'from-yellow-500 to-yellow-600', bg: 'bg-yellow-50', border: 'border-yellow-200' },
            ]
            const color = colors[index % colors.length]
            
            return (
              <Link
                key={action.title}
                href={action.link}
                className={`group p-8 rounded-2xl border-2 ${color.border} ${color.bg} hover:shadow-xl transition-all duration-300`}
              >
                <div className={`w-14 h-14 bg-linear-to-br ${color.gradient} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {action.title}
                </h3>
                <p className="text-gray-700 text-lg">
                  {action.description}
                </p>
                <div className="mt-4 flex items-center text-gray-900 font-medium group-hover:translate-x-2 transition-transform">
                  En savoir plus 
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}
