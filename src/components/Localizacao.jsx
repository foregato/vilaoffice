import { config } from '../data/config.js'

export default function Localizacao() {
  const mapsQuery = encodeURIComponent(config.enderecoMapsQuery)
  const embedSrc = `https://www.google.com/maps?q=${mapsQuery}&output=embed`
  const dirHref = `https://www.google.com/maps/dir/?api=1&destination=${mapsQuery}`

  return (
    <section id="localizacao" className="py-24 md:py-32 bg-navy-800 border-t border-gold/10">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <div className="reveal">
          <span className="text-gold text-xs tracking-widest2 uppercase">Localização</span>
          <h2 className="font-display text-3xl md:text-4xl mt-3">Vila Aeroporto, Campinas</h2>
          <div className="gold-rule-left mt-6 mb-6" />
          <p className="text-offwhite/70 font-light leading-relaxed mb-2">
            {config.endereco}
          </p>
          <p className="text-offwhite/60 font-light leading-relaxed mb-8">
            Um bairro de fácil acesso, com boa circulação e proximidade de vias
            importantes de Campinas — ideal para receber clientes com comodidade.
          </p>
          <a
            href={dirHref}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline inline-block px-7 py-3 text-sm tracking-widest2 uppercase"
          >
            Como chegar
          </a>
        </div>

        <div className="reveal border border-gold/15 overflow-hidden aspect-[4/3]">
          <iframe
            title="Mapa Vila Office"
            src={embedSrc}
            width="100%"
            height="100%"
            style={{ border: 0, filter: 'grayscale(0.3) contrast(1.1)' }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  )
}
