import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { GitBranch, Users, BookOpen, Lightbulb, ArrowLeft } from 'lucide-react'
import ActionHeader from '../components/ActionHeader'

export default function ForgePage() {
  return (
    <div className="min-h-screen bg-white">
      <ActionHeader />

      <main className="max-w-4xl mx-auto px-6 py-16">
        {/* Hero */}
        <div className="mb-16">
          <div className="flex items-center gap-6 mb-6">
            <Image
              src="/la-forge.png"
              alt="Logo La Forge"
              width={80}
              height={80}
              className="object-contain"
            />
            <h1 className="text-5xl font-bold text-gray-900">
              Mutualiser les Ressources
            </h1>
          </div>
          <p className="text-xl text-gray-600 leading-relaxed">
            Partagez et utilisez des outils libres via la Forge des communs numériques éducatifs. 
            Une communauté d'enseignants qui créent et partagent des ressources éducatives libres.
          </p>
        </div>

        {/* Qu'est-ce que la Forge */}
        <section className="mb-16">
          <div className="bg-linear-to-br from-blue-50 to-purple-50 border-2 border-blue-200 rounded-2xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
                <GitBranch className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900">
                Qu'est-ce que la Forge ?
              </h2>
            </div>
            <div className="space-y-4 text-gray-700">
              <p>
                <strong>La Forge des communs numériques éducatifs</strong> est une communauté 
                d'enseignantes et d'enseignants qui créent et partagent des logiciels et des 
                ressources éducatives libres.
              </p>
              <p>
                Ces outils sont conçus pour être utiles à leurs collègues et à leurs élèves, 
                dans leur pratique quotidienne. Tout cela se passe dans un espace de travail 
                collaboratif en ligne, qui rassemble plusieurs milliers de projets.
              </p>
              <p className="font-medium text-purple-700">
                « L'union fait la forge ! »
              </p>
            </div>
          </div>
        </section>

        {/* Principes clés */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Les principes de la mutualisation
          </h2>

          <div className="space-y-6">
            <div className="border-2 border-purple-200 rounded-2xl p-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center shrink-0">
                  <Users className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Par et pour les enseignants
                  </h3>
                  <p className="text-gray-700">
                    Des ressources créées par des enseignants, testées en classe, 
                    et partagées librement avec la communauté éducative.
                  </p>
                </div>
              </div>
            </div>

            <div className="border-2 border-blue-200 rounded-2xl p-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center shrink-0">
                  <BookOpen className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Ressources libres et ouvertes
                  </h3>
                  <p className="text-gray-700">
                    Chacun peut utiliser ces ressources, les adapter à ses besoins, 
                    et surtout, y contribuer librement. Aucune licence payante requise.
                  </p>
                </div>
              </div>
            </div>

            <div className="border-2 border-green-200 rounded-2xl p-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center shrink-0">
                  <Lightbulb className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Collaboration et amélioration continue
                  </h3>
                  <p className="text-gray-700">
                    La Forge permet de partager des ressources ou d'aider à améliorer 
                    des ressources existantes. Un lieu pour créer des communautés autour 
                    de projets pédagogiques.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Portails thématiques */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Portails thématiques
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <a 
              href="https://primaire.forge.apps.education.fr/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-6 bg-yellow-50 border-2 border-yellow-200 rounded-xl hover:border-yellow-400 hover:shadow-lg transition-all"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-2">🎨 Primaire</h3>
              <p className="text-gray-700">Des ressources utiles à l'école primaire</p>
            </a>

            <a 
              href="https://nsi-snt.forge.apps.education.fr/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-6 bg-blue-50 border-2 border-blue-200 rounded-xl hover:border-blue-400 hover:shadow-lg transition-all"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-2">💻 NSI-SNT</h3>
              <p className="text-gray-700">Ressources pour SNT (seconde) et NSI (première/terminale)</p>
            </a>

            <a 
              href="https://markdown.forge.apps.education.fr/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-6 bg-purple-50 border-2 border-purple-200 rounded-xl hover:border-purple-400 hover:shadow-lg transition-all"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-2">📝 Markdown</h3>
              <p className="text-gray-700">Outils pour apprendre et créer avec Markdown</p>
            </a>

            <a 
              href="https://cartographie.forge.apps.education.fr/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-6 bg-green-50 border-2 border-green-200 rounded-xl hover:border-green-400 hover:shadow-lg transition-all"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-2">🗺️ Cartographie</h3>
              <p className="text-gray-700">Explorer toutes les ressources de la Forge</p>
            </a>
          </div>
        </section>

        {/* Comment contribuer */}
        <section className="mb-16">
          <div className="bg-linear-to-br from-pink-50 to-purple-50 border-2 border-pink-200 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              🤝 Contribuer à la Forge
            </h2>
            <div className="space-y-4 text-gray-700">
              <p>
                La Forge est ouverte aux personnes de l'Éducation nationale, mais également 
                aux personnes externes qui désirent contribuer à ces ressources pédagogiques libres.
              </p>
              <ul className="space-y-2">
                <li>• Partager vos propres ressources</li>
                <li>• Améliorer des ressources existantes</li>
                <li>• Rejoindre ou créer des communautés autour de projets</li>
                <li>• Documenter et tester des outils pédagogiques</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Lien avec NIRD */}
        <section className="mb-16">
          <div className="bg-white border-2 border-purple-300 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              🔗 La Forge et NIRD
            </h2>
            <p className="text-gray-700 mb-4">
              La démarche NIRD est hébergée et soutenue par la Forge des communs numériques éducatifs. 
              Le collectif NIRD fait partie de cette communauté qui crée et partage des outils libres 
              pour l'éducation.
            </p>
            <p className="text-gray-700">
              En mutualisant les ressources via la Forge, les établissements NIRD contribuent à 
              un écosystème numérique éducatif <strong>inclusif, responsable et durable</strong>.
            </p>
          </div>
        </section>

        {/* CTA */}
        <div className="bg-linear-to-br from-purple-50 to-pink-50 border-2 border-purple-300 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Rejoignez la communauté de la Forge
          </h3>
          <p className="text-gray-700 mb-6">
            Découvrez des milliers de ressources et contribuez à la mutualisation
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-linear-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white" asChild>
              <a href="https://forge.apps.education.fr/" target="_blank" rel="noopener noreferrer">
                Accéder à la Forge
              </a>
            </Button>
            <Button variant="outline" className="border-2 border-purple-500 text-purple-600 hover:bg-purple-50" asChild>
              <a href="https://docs.forge.apps.education.fr/" target="_blank" rel="noopener noreferrer">
                Documentation
              </a>
            </Button>
          </div>
        </div>
      </main>
    </div>
  )
}
