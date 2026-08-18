import Logo from './Logo.jsx'
import { config } from '../data/config.js'

export default function Hero() {
  const whatsappHref = `https://wa.me/${config.whatsapp}?text=${encodeURIComponent(config.whatsappMensagem)}`

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-navy-900"
    >
      {/* Fundo com textura em ripas verticais, ecoando a fachada da referência */}
      <div
        className="absolute inset-0 opacity-[0.12]"
        style={{
          backgroundImage:
            'repeating-linear-gradient(100deg, transparent 0px, transparent 18px, rgba(199,167,86,0.5) 18px, rgba(199,167,86,0.5) 20px)',
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-navy-900 via-navy-900/70 to-navy-900" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center reveal">
        <Logo className="items-center mx-auto mb-10 scale-125 md:scale-150" />

        <div className="gold-rule w-24 mx-auto mb-8" />

        <h1 className="font-display text-3xl sm:text-4xl md:text-6xl font-normal text-offwhite leading-tight">
          Seu espaço profissional
          <br />
          <span className="italic text-gold">começa aqui.</span>
        </h1>

        <p className="mt-6 text-offwhite/70 text-base md:text-lg max-w-xl mx-auto font-light">
          10 salas comerciais na Vila Aeroporto, Campinas. Um endereço sóbrio e
          funcional para quem quer atender com presença e conforto.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#salas"
            className="btn-outline px-8 py-3.5 text-sm tracking-widest2 uppercase w-full sm:w-auto text-center"
          >
            Conheça as salas
          </a>
          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold px-8 py-3.5 text-sm tracking-widest2 uppercase font-medium w-full sm:w-auto text-center"
          >
            Quero alugar uma sala
          </a>
        </div>
      </div>

      <a
        href="#sobre"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-gold/70 hover:text-gold transition-colors animate-bounce"
        aria-label="Rolar para saber mais"
      >
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
          <path d="M12 4v16M6 14l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </a>
    </section>
  )
}
