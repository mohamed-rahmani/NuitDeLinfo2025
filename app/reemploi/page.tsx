import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Recycle, Users, Lightbulb } from 'lucide-react'
import ActionHeader from '../components/ActionHeader'

export default function ReconditionnementPage() {
  return (
    <div className="min-h-screen bg-white">
      <ActionHeader />

      <main className="max-w-4xl mx-auto px-6 py-16">
        {/* Hero */}
        <div className="mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            ♻️ Réemploi & Reconditionnement
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Donnez une seconde vie aux ordinateurs plutôt que de les jeter prématurément. 
            Le reconditionnement par les élèves est au cœur de la démarche NIRD.
          </p>
        </div>

        {/* Qu'est-ce que le reconditionnement */}
        <section className="mb-16">
          <div className="bg-linear-to-br from-green-50 to-blue-50 border-2 border-green-200 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Qu'est-ce que le reconditionnement ?
            </h2>
            <p className="text-gray-700 mb-4">
              Le reconditionnement de PC désigne le processus de remise en état d'ordinateurs 
              non-neufs pour leur donner une seconde vie :
            </p>
            <ul className="space-y-2 text-gray-700">
              <li>• Récupération d'ordinateurs usagés (particuliers, entreprises, administrations)</li>
              <li>• Effacement sécurisé des données personnelles</li>
              <li>• Nettoyage et réparation des composants matériels</li>
              <li>• Test et remplacement des pièces défectueuses si nécessaire</li>
              <li>• Réinstallation d'un système d'exploitation Linux et de logiciels libres</li>
            </ul>
          </div>
        </section>

        {/* Les 3 piliers */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Pourquoi reconditioning par les élèves ?
          </h2>

          <div className="space-y-8">
            {/* Inclusif */}
            <div className="border-2 border-blue-200 rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Un choix inclusif</h3>
              </div>
              <p className="text-gray-700 mb-4">
                Un apprentissage actif et valorisant pour tous
              </p>
              <ul className="space-y-3 text-gray-700">
                <li>• <strong>Apprendre en faisant :</strong> compétences concrètes en informatique au-delà de l'utilisation</li>
                <li>• <strong>Valoriser tous les profils :</strong> travail en équipe permettant à chacun de contribuer</li>
                <li>• <strong>Encourager l'autonomie :</strong> projet concret avec résultat tangible</li>
                <li>• <strong>Réduire les inégalités :</strong> redistribution solidaire aux écoles et familles</li>
                <li>• <strong>Mobiliser la communauté :</strong> enseignants, parents, collectivités impliqués</li>
              </ul>
            </div>

            {/* Responsable */}
            <div className="border-2 border-purple-200 rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center">
                  <Lightbulb className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Un choix responsable</h3>
              </div>
              <p className="text-gray-700 mb-4">
                Former à la citoyenneté numérique et à l'esprit critique
              </p>
              <ul className="space-y-3 text-gray-700">
                <li>• <strong>Esprit d'équipe :</strong> coopération et organisation nécessaires</li>
                <li>• <strong>Éthique et protection des données :</strong> importance de l'effacement sécurisé</li>
                <li>• <strong>Développer l'esprit critique :</strong> compréhension technique, moins de dépendance</li>
                <li>• <strong>Culture citoyenne :</strong> commun numérique au service de l'éducation</li>
                <li>• <strong>Réseau de partenaires :</strong> entreprises, associations, établissements scolaires</li>
              </ul>
            </div>

            {/* Durable */}
            <div className="border-2 border-green-200 rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                  <Recycle className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Un choix durable</h3>
              </div>
              <p className="text-gray-700 mb-4">
                Agir concrètement pour l'environnement et la sobriété numérique
              </p>
              <ul className="space-y-3 text-gray-700">
                <li>• <strong>Allonger la durée de vie :</strong> plusieurs années d'usage supplémentaires</li>
                <li>• <strong>Réduire les déchets électroniques :</strong> chaque machine sauvée = un déchet en moins</li>
                <li>• <strong>Sensibiliser à la sobriété :</strong> consommation responsable du numérique</li>
                <li>• <strong>Redistribution solidaire :</strong> équipement des écoles et familles dans le besoin</li>
                <li>• <strong>Dynamique collective :</strong> établissement acteur du développement durable</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Impact concret */}
        <section className="mb-16">
          <div className="bg-linear-to-br from-yellow-50 to-orange-50 border-2 border-yellow-300 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              💡 Impact concret
            </h2>
            <p className="text-gray-700 mb-4">
              Au lycée Carnot de Bruay-la-Buissière, les élèves du club informatique 
              reconditionnent des PC avec Linux pour :
            </p>
            <ul className="space-y-2 text-gray-700">
              <li>✅ Équiper le parc informatique de l'établissement</li>
              <li>✅ Distribuer des ordinateurs aux écoles primaires du bassin</li>
              <li>✅ Fournir du matériel aux familles dans le besoin</li>
              <li>✅ Former les utilisateurs à Linux et aux logiciels libres</li>
            </ul>
          </div>
        </section>

        {/* Comment démarrer */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Comment démarrer un projet de reconditionnement ?
          </h2>
          <div className="bg-white border-2 border-gray-200 rounded-2xl p-8">
            <p className="text-gray-700 mb-6">
              La démarche NIRD propose bientôt de la documentation détaillée. En attendant, 
              rejoignez les forums Tchap pour échanger avec des enseignants expérimentés qui vous 
              guideront pas à pas.
            </p>
            <div className="space-y-3">
              <h3 className="font-bold text-gray-900">Étapes générales :</h3>
              <ol className="space-y-2 text-gray-700 list-decimal list-inside">
                <li>Identifier les sources d'ordinateurs usagés (dons, collectivités)</li>
                <li>Former une équipe d'élèves motivés (club informatique, EDD, NSI)</li>
                <li>S'équiper du matériel nécessaire (tournevis, clés USB, logiciels)</li>
                <li>Se former aux bases du reconditionnement et de Linux</li>
                <li>Démarrer avec quelques machines test</li>
                <li>Documenter et partager l'expérience</li>
              </ol>
            </div>
          </div>
        </section>

        {/* CTA */}
        <div className="bg-linear-to-br from-purple-50 to-pink-50 border-2 border-purple-300 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Prêt à lancer votre projet de reconditionnement ?
          </h3>
          <p className="text-gray-700 mb-6">
            La communauté NIRD est là pour vous accompagner
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-linear-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white" asChild>
              <a href="https://edurl.fr/tchap-laforgeedu-nird" target="_blank" rel="noopener noreferrer">
                Rejoindre le forum Tchap
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
