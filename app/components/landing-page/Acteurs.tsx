import { siteConfig } from '@/data/site-config'

export default function Acteurs() {
  const { acteurs } = siteConfig

  return (
    <section className="w-full py-20 bg-gray-50">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {acteurs.title}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {acteurs.subtitle}
          </p>
        </div>

        {/* Grille simple 2 colonnes */}
        <div className="grid md:grid-cols-2 gap-4 mb-16">
          {acteurs.list.map((acteur, index) => (
            <div
              key={acteur}
              className="flex items-center gap-4 p-5 bg-white rounded-xl border border-gray-200"
            >
              <div className="w-10 h-10 shrink-0 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center text-sm font-bold">
                {index + 1}
              </div>
              <p className="text-base font-medium text-gray-800">
                {acteur}
              </p>
            </div>
          ))}
        </div>

        {/* Description du collectif */}
        <div className="max-w-3xl mx-auto">
          <div className="p-8 rounded-2xl bg-white border border-purple-200">
            <p className="text-lg text-gray-700 leading-relaxed text-center">
              <span className="font-bold text-purple-600">NIRD</span> est porté par un collectif enseignant de la{' '}
              <span className="font-semibold">Forge des communs numériques éducatifs</span>, soutenu par la{' '}
              <span className="font-semibold">Direction du numérique pour l'éducation</span>. 
              C'est une initiative d'en bas qui cherche à montrer en haut qu'il y a urgence à agir.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
