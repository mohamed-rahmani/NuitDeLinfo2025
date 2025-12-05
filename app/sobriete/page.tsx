import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Leaf, Trash2, Zap, Globe, ArrowLeft } from 'lucide-react'
import ActionHeader from '../components/ActionHeader'

export default function SobrietePage() {
  return (
    <div className="min-h-screen bg-white">
      <ActionHeader />

      <main className="max-w-4xl mx-auto px-6 py-16">
        {/* Hero */}
        <div className="mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            🌱 Sobriété Numérique
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Sensibilisez élèves et équipes aux impacts environnementaux du numérique. 
            Adopter une démarche de sobriété numérique, c'est agir concrètement pour la planète.
          </p>
        </div>

        {/* Définition */}
        <section className="mb-16">
          <div className="bg-linear-to-br from-green-50 to-blue-50 border-2 border-green-200 rounded-2xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                <Leaf className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900">
                Qu'est-ce que la sobriété numérique ?
              </h2>
            </div>
            <div className="space-y-4 text-gray-700">
              <p>
                La sobriété numérique est une démarche qui vise à <strong>réduire l'impact environnemental 
                du numérique</strong> en questionnant nos usages et en privilégiant des solutions plus durables.
              </p>
              <p>
                Dans le contexte éducatif, cela signifie :
              </p>
              <ul className="space-y-2 ml-6">
                <li>• Prolonger la durée de vie du matériel informatique</li>
                <li>• Choisir des logiciels légers et efficaces</li>
                <li>• Limiter le streaming et les transferts de données inutiles</li>
                <li>• Éduquer aux impacts environnementaux du numérique</li>
                <li>• Favoriser le réemploi et le reconditionnement</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Enjeux environnementaux */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Les impacts du numérique
          </h2>

          <div className="space-y-6">
            <div className="border-2 border-orange-200 rounded-2xl p-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center shrink-0">
                  <Trash2 className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Déchets électroniques
                  </h3>
                  <p className="text-gray-700">
                    Chaque année, des millions de tonnes d'équipements numériques sont jetés. 
                    L'obsolescence programmée aggrave ce problème. En reconditionnant du matériel 
                    avec Linux, on prolonge sa durée de vie et on réduit les déchets.
                  </p>
                </div>
              </div>
            </div>

            <div className="border-2 border-red-200 rounded-2xl p-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center shrink-0">
                  <Zap className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Consommation énergétique
                  </h3>
                  <p className="text-gray-700">
                    Les data centers, le stockage cloud, le streaming vidéo... tout cela consomme 
                    énormément d'énergie. Privilégier des solutions locales et sobres permet de 
                    réduire cette empreinte énergétique.
                  </p>
                </div>
              </div>
            </div>

            <div className="border-2 border-blue-200 rounded-2xl p-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center shrink-0">
                  <Globe className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Extraction de ressources
                  </h3>
                  <p className="text-gray-700">
                    La fabrication d'équipements numériques nécessite l'extraction de métaux rares 
                    et génère une pollution importante. Choisir du matériel reconditionné évite de 
                    nouvelles extractions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Actions concrètes */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Actions pour une sobriété numérique
          </h2>

          <div className="bg-white border-2 border-gray-200 rounded-2xl p-8">
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Dans l'établissement scolaire
            </h3>
            <div className="space-y-3 mb-6">
              <div className="flex items-start gap-3">
                <span className="text-green-600 font-bold shrink-0">✓</span>
                <p className="text-gray-700">
                  <strong>Reconditionner le matériel ancien</strong> avec Linux plutôt que d'acheter du neuf
                </p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-green-600 font-bold shrink-0">✓</span>
                <p className="text-gray-700">
                  <strong>Utiliser des logiciels libres et légers</strong> qui fonctionnent sur du matériel ancien
                </p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-green-600 font-bold shrink-0">✓</span>
                <p className="text-gray-700">
                  <strong>Privilégier le stockage local</strong> plutôt que le cloud quand c'est possible
                </p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-green-600 font-bold shrink-0">✓</span>
                <p className="text-gray-700">
                  <strong>Éteindre les équipements</strong> quand ils ne sont pas utilisés
                </p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-green-600 font-bold shrink-0">✓</span>
                <p className="text-gray-700">
                  <strong>Réparer plutôt que jeter</strong> les équipements défectueux
                </p>
              </div>
            </div>

            <h3 className="text-xl font-bold text-gray-900 mb-4 mt-8">
              Sensibiliser les élèves
            </h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <span className="text-purple-600 font-bold shrink-0">→</span>
                <p className="text-gray-700">
                  Organiser des ateliers sur l'impact environnemental du numérique
                </p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-purple-600 font-bold shrink-0">→</span>
                <p className="text-gray-700">
                  Impliquer les élèves dans le reconditionnement d'ordinateurs
                </p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-purple-600 font-bold shrink-0">→</span>
                <p className="text-gray-700">
                  Créer des clubs "éco-numériques" ou "éco-délégués numériques"
                </p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-purple-600 font-bold shrink-0">→</span>
                <p className="text-gray-700">
                  Intégrer la sobriété numérique dans les cours (SNT, NSI, EDD)
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* NIRD et sobriété */}
        <section className="mb-16">
          <div className="bg-linear-to-br from-purple-50 to-pink-50 border-2 border-purple-200 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              🔗 NIRD et sobriété numérique
            </h2>
            <p className="text-gray-700 mb-4">
              La démarche NIRD place la sobriété numérique au cœur de ses actions :
            </p>
            <ul className="space-y-3 text-gray-700">
              <li>
                <strong>Linux</strong> permet de faire fonctionner des machines anciennes, 
                évitant ainsi le gaspillage et l'achat de matériel neuf
              </li>
              <li>
                <strong>Le reconditionnement</strong> par les élèves sensibilise concrètement 
                aux enjeux environnementaux
              </li>
              <li>
                <strong>Les logiciels libres</strong> sont généralement plus légers et moins 
                gourmands en ressources
              </li>
              <li>
                <strong>L'autonomie technologique</strong> évite la dépendance aux services 
                cloud énergivores
              </li>
            </ul>
          </div>
        </section>

        {/* Ressources */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            📚 Pour aller plus loin
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            <a 
              href="https://ecoinfo.cnrs.fr/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-4 bg-green-50 border border-green-200 rounded-xl hover:border-green-400 transition-colors"
            >
              <h3 className="font-bold text-gray-900 mb-1">EcoInfo (CNRS)</h3>
              <p className="text-sm text-gray-600">Impacts environnementaux du numérique</p>
            </a>
            <a 
              href="https://theshiftproject.org/lean-ict/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-4 bg-blue-50 border border-blue-200 rounded-xl hover:border-blue-400 transition-colors"
            >
              <h3 className="font-bold text-gray-900 mb-1">The Shift Project</h3>
              <p className="text-sm text-gray-600">Pour une sobriété numérique</p>
            </a>
          </div>
        </section>

        {/* CTA */}
        <div className="bg-linear-to-br from-purple-50 to-pink-50 border-2 border-purple-300 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Agissez pour un numérique plus sobre
          </h3>
          <p className="text-gray-700 mb-6">
            Rejoignez la démarche NIRD et engagez votre établissement dans la sobriété numérique
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-linear-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white" asChild>
              <a href="https://edurl.fr/tchap-laforgeedu-nird" target="_blank" rel="noopener noreferrer">
                Rejoindre la communauté
              </a>
            </Button>
            <Button variant="outline" className="border-2 border-purple-500 text-purple-600 hover:bg-purple-50" asChild>
              <Link href="/">
                Retour à l'accueil
              </Link>
            </Button>
          </div>
        </div>
      </main>
    </div>
  )
}
