import { profissionais } from '../data/profissionais.js'

export default function Profissionais() {
  return (
    <section id="profissionais" className="py-24 md:py-32 bg-navy-800 border-t border-gold/10">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16 reveal">
          <span className="text-gold text-xs tracking-widest2 uppercase">Comunidade</span>
          <h2 className="font-display text-3xl md:text-4xl mt-3">Profissionais Vila Office</h2>
          <div className="gold-rule w-16 mx-auto mt-6" />
        </div>

        {profissionais.length === 0 ? (
          <p className="text-offwhite/40 text-sm font-light text-center italic">
            Em breve, conheça aqui os profissionais que atendem no Vila Office.
          </p>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {profissionais.map((p) => (
              <div key={p.nome} className="text-center reveal">
                <div className="w-28 h-28 mx-auto rounded-full bg-navy-700 border border-gold/20 overflow-hidden flex items-center justify-center mb-4">
                  {p.foto ? (
                    <img src={p.foto} alt={p.nome} className="w-full h-full object-cover" />
                  ) : (
                    <span className="text-offwhite/25 text-xs">Foto</span>
                  )}
                </div>
                <h3 className="text-offwhite text-sm">{p.nome}</h3>
                <p className="text-offwhite/50 text-xs mb-2">{p.servico}</p>
                <div className="flex justify-center gap-3 text-xs">
                  {p.instagram && (
                    <a href={`https://instagram.com/${p.instagram.replace('@', '')}`} target="_blank" rel="noopener noreferrer" className="text-gold hover:text-gold-light">
                      {p.instagram}
                    </a>
                  )}
                  {p.site && (
                    <a href={p.site} target="_blank" rel="noopener noreferrer" className="text-gold hover:text-gold-light">
                      Site
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
