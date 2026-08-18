import { config } from '../data/config.js'

export default function Alugue() {
  const whatsappHref = `https://wa.me/${config.whatsapp}?text=${encodeURIComponent(config.whatsappMensagem)}`

  return (
    <section id="contato" className="py-28 md:py-36 bg-navy-900 border-t border-gold/10 relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage:
            'repeating-linear-gradient(100deg, transparent 0px, transparent 18px, rgba(199,167,86,0.5) 18px, rgba(199,167,86,0.5) 20px)',
        }}
      />
      <div className="relative max-w-2xl mx-auto px-6 text-center reveal">
        <div className="gold-rule w-16 mx-auto mb-8" />
        <h2 className="font-display text-3xl md:text-5xl leading-tight">
          Tenha seu espaço profissional
          <br />
          <span className="italic text-gold">no Vila Office.</span>
        </h2>
        <p className="text-offwhite/65 font-light mt-6 mb-10">
          Fale agora com a gente pelo WhatsApp e saiba mais sobre as salas disponíveis.
        </p>
        <a
          href={whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-gold inline-flex items-center gap-3 px-9 py-4 text-sm tracking-widest2 uppercase font-medium"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.87.5 3.62 1.44 5.13L2 22l5.13-1.55a9.85 9.85 0 0 0 4.9 1.3h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.13-2.9-7C17.17 3.03 14.69 2 12.04 2Zm0 18.15h-.01a8.2 8.2 0 0 1-4.19-1.15l-.3-.18-3.11.94.94-3.03-.2-.31a8.19 8.19 0 0 1-1.26-4.4c0-4.53 3.69-8.22 8.24-8.22 2.2 0 4.27.86 5.83 2.42a8.16 8.16 0 0 1 2.41 5.82c0 4.53-3.69 8.11-8.35 8.11Z" />
          </svg>
          Falar no WhatsApp
        </a>
      </div>
    </section>
  )
}
