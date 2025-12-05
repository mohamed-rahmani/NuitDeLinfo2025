import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Download, Check } from 'lucide-react'
import ActionHeader from '../components/ActionHeader'

export default function LinuxPage() {
  return (
    <div className="min-h-screen bg-white">
      <ActionHeader />

      <main className="max-w-4xl mx-auto px-6 py-16">
        {/* Hero */}
        <div className="mb-16">
          <div className="flex items-center gap-6 mb-6">
            <Link href="https://mohamed-rahmani.github.io/HiddenSnakeGame/">
            <Image
              src="/logo-linux.png"
              alt="Logo Linux"
              width={80}
              height={80}
              className="object-contain"
            />
            </Link>
            <h1 className="text-5xl font-bold text-gray-900">
              Adopter Linux
            </h1>
          </div>
          <p className="text-xl text-gray-600 leading-relaxed">
            Prolongez la vie de votre matériel en installant un système d'exploitation libre et performant. 
            Linux est au cœur de la démarche NIRD pour un numérique inclusif, responsable et durable.
          </p>
        </div>

        {/* Distribution Linux NIRD */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Distribution Linux NIRD pour le secondaire
          </h2>
          
          <div className="relative w-full h-64 md:h-96 rounded-xl overflow-hidden mb-8 border-2 border-gray-200">
            <Image
              src="/distribution-linux-nird.png"
              alt="Bureau de la distribution Linux NIRD"
              fill
              className="object-cover"
            />
          </div>

          <div className="prose prose-lg max-w-none mb-8">
            <p className="text-gray-700">
              Fruit de l'expérience du lycée Carnot, cette distribution GNU/Linux est adaptée au secondaire. 
              C'est une distribution créée, testée et maintenue par des enseignants pour les enseignants et les élèves.
            </p>
          </div>

          <div className="bg-linear-to-br from-purple-50 to-pink-50 border-2 border-purple-200 rounded-2xl p-8 mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">✨ Avantages</h3>
            <ul className="space-y-3">
              {[
                "Légère : fonctionne sur des machines anciennes (Linux Mint + Xfce)",
                "Suite complète de logiciels libres pour collège et lycée (dont NSI)",
                "Fonctionne sans connexion Internet",
                "Bootable sur clé USB (sans toucher au système)",
                "Support communautaire sur Tchap",
                "Distribution clé en main pour migrer de Windows vers Linux"
              ].map((avantage, index) => (
                <li key={index} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-purple-600 shrink-0 mt-1" />
                  <span className="text-gray-700">{avantage}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white border-2 border-gray-200 rounded-2xl p-8">
            <h3 className="text-xl font-bold text-gray-900 mb-4">📥 Téléchargement</h3>
            <div className="space-y-4">
              <Button className="w-full bg-linear-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white py-6" asChild>
                <a href="https://maths-code.fr/iso/NIRD-2025.iso" target="_blank" rel="noopener noreferrer">
                  <Download className="w-5 h-5 mr-2" />
                  Télécharger Linux NIRD (avec installeur)
                </a>
              </Button>
              <Button variant="outline" className="w-full border-2 border-purple-500 text-purple-600 hover:bg-purple-50 py-6" asChild>
                <a href="https://maths-code.fr/iso/NIRD-2025_USB_eleve.iso" target="_blank" rel="noopener noreferrer">
                  <Download className="w-5 h-5 mr-2" />
                  Version clé USB (compte élève)
                </a>
              </Button>
            </div>
            <p className="text-sm text-gray-600 mt-4">
              📌 Besoin d'aide pour l'installation ? Rejoignez le{' '}
              <a href="https://edurl.fr/tchap-distribution-linux-nird" className="text-purple-600 hover:underline" target="_blank" rel="noopener noreferrer">
                forum Tchap dédié
              </a>
            </p>
          </div>
        </section>

        {/* Pourquoi Linux */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Pourquoi le choix Linux ?
          </h2>

          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-blue-600 mb-4">1. 🤝 Un choix inclusif</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• <strong>Accessibilité universelle :</strong> gratuit, sans licence payante</li>
                <li>• <strong>Interfaces adaptées :</strong> différenciation pédagogique facilitée</li>
                <li>• <strong>Ressources éducatives libres :</strong> outils variés sans coûts additionnels</li>
                <li>• <strong>Support pour élèves à besoins spécifiques :</strong> synthèse vocale, aide à la lecture</li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-purple-600 mb-4">2. 🛡️ Un choix responsable</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• <strong>Respect des données personnelles :</strong> pas de collecte commerciale, conforme au RGPD</li>
                <li>• <strong>Maîtrise pédagogique :</strong> adaptation sans dépendance externe</li>
                <li>• <strong>Formation citoyenne :</strong> culture du partage et de la coopération</li>
                <li>• <strong>Souveraineté éducative :</strong> indépendance technologique</li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-green-600 mb-4">3. ♻️ Un choix durable</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• <strong>Optimisation du matériel :</strong> machines de +10 ans retrouvent une seconde vie</li>
                <li>• <strong>Réduction des déchets électroniques :</strong> moins de matériel jeté et racheté</li>
                <li>• <strong>Pérennité :</strong> cycles de support longs</li>
                <li>• <strong>Éducation à la sobriété numérique :</strong> consommation responsable</li>
              </ul>
            </div>
          </div>
        </section>

        {/* PrimTux */}
        <section className="mb-16">
          <div className="bg-blue-50 border-2 border-blue-200 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              📚 PrimTux pour le primaire
            </h2>
            <p className="text-gray-700 mb-4">
              Pour les écoles primaires, la démarche NIRD recommande <strong>PrimTux</strong>, 
              une distribution libre conçue par et pour des enseignants avec de très nombreuses ressources pédagogiques.
            </p>
            <Button variant="outline" className="border-2 border-blue-500 text-blue-600 hover:bg-blue-50" asChild>
              <a href="https://primtux.fr/" target="_blank" rel="noopener noreferrer">
                Découvrir PrimTux →
              </a>
            </Button>
          </div>
        </section>

        {/* CTA */}
        <div className="bg-linear-to-br from-purple-50 to-pink-50 border-2 border-purple-300 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Prêt à franchir le pas ?
          </h3>
          <p className="text-gray-700 mb-6">
            Rejoignez la communauté NIRD et bénéficiez du support d'enseignants expérimentés
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
