import { siteConfig } from '@/data/site-config'
import { Brain, Zap, Shield, Users, Lightbulb, Recycle, LucideIcon } from 'lucide-react'

// Map des icônes disponibles
const iconMap: Record<string, LucideIcon> = {
  Brain,
  Zap,
  Shield,
  Users,
  Lightbulb,
  Recycle,
}

export default function Features() {
  const { features } = siteConfig

  return (
    <section className="w-full py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* En-tête de section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {features.title}
          </h2>
          <p className="text-xl text-gray-600">
            {features.subtitle}
          </p>
        </div>

        {/* Grille des features */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.items.map((feature, index) => {
            const Icon = iconMap[feature.icon] || Brain
            const colors = [
              { bg: 'bg-blue-100', text: 'text-blue-600', border: 'hover:border-blue-500' },
              { bg: 'bg-purple-100', text: 'text-purple-600', border: 'hover:border-purple-500' },
              { bg: 'bg-pink-100', text: 'text-pink-600', border: 'hover:border-pink-500' },
              { bg: 'bg-yellow-100', text: 'text-yellow-600', border: 'hover:border-yellow-500' },
            ]
            const color = colors[index % colors.length]
            return (
              <div 
                key={feature.title}
                className={`p-6 rounded-xl border border-gray-200 ${color.border} transition-colors hover:shadow-lg`}
              >
                <div className={`w-12 h-12 ${color.bg} rounded-lg flex items-center justify-center mb-4`}>
                  <Icon className={`w-6 h-6 ${color.text}`} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
