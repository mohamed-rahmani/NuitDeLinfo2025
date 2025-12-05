import { Button } from '@/components/ui/button'
import { siteConfig } from '@/data/site-config'
import Image from 'next/image'

export default function Hero() {
  const { hero } = siteConfig

  return (
    <section className="w-full pt-32 pb-12 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Badge et titre centré */}
        <div className="text-center max-w-4xl mx-auto mb-16 space-y-6">
          <div className="inline-block px-4 py-2 bg-linear-to-r from-blue-50 to-purple-50 rounded-full border border-purple-200">
            <span className="text-sm font-medium text-purple-700">
              💪 {siteConfig.tagline}
            </span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight">
            {hero.title}
          </h1>
          
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
            {hero.subtitle}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button 
              size="lg" 
              className="bg-linear-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-8"
              asChild
            >
              <a href={hero.cta.primary.href} target="_blank" rel="noopener noreferrer">{hero.cta.primary.text}</a>
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-2 border-blue-500 text-blue-600 hover:bg-blue-50 px-8"
              asChild
            >
              <a href={hero.cta.secondary.href} target="_blank" rel="noopener noreferrer">{hero.cta.secondary.text}</a>
            </Button>
          </div>
        </div>
      </div>

      {/* Image pleine largeur en bas */}
      <div className="w-full flex justify-center px-4 md:px-8 lg:px-12">
        <div className="relative w-full max-w-5xl rounded-2xl overflow-hidden shadow-2xl bg-linear-to-br from-blue-100 via-purple-100 to-pink-100" style={{aspectRatio: '1710/1080'}}>
          {hero.image.src ? (
            <Image
              src={hero.image.src}
              alt={hero.image.alt}
              fill
              className="object-contain"
              priority
            />
          ) : (
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8">
              <div className="text-6xl mb-4">🛡️</div>
              <p className="text-2xl font-bold text-gray-700 mb-2">Le Village Résistant</p>
              <p className="text-gray-600">Face au Goliath numérique,<br/>l'École reprend le pouvoir !</p>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}