import { salas } from '../data/salas.js'
import SalaCard from './SalaCard.jsx'

export default function Salas() {
  return (
    <section id="salas" className="py-24 md:py-32 bg-navy-900 border-t border-gold/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 reveal">
          <span className="text-gold text-xs tracking-widest2 uppercase">Espaços</span>
          <h2 className="font-display text-3xl md:text-4xl mt-3">Nossas salas</h2>
          <div className="gold-rule w-16 mx-auto mt-6" />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {salas.map((sala) => (
            <SalaCard key={sala.numero} sala={sala} />
          ))}
        </div>
      </div>
    </section>
  )
}
