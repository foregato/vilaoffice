import { config } from '../data/config.js'

export default function SalaCard({ sala }) {
  const ocupada = sala.status === 'ocupada'
  const numeroFmt = String(sala.numero).padStart(2, '0')

  const interesseMsg = `Olá! Vim pelo site do Vila Office e tenho interesse na Sala ${numeroFmt}.`
  const whatsappHref = `https://wa.me/${config.whatsapp}?text=${encodeURIComponent(interesseMsg)}`

  const instagramHref = sala.ocupante?.instagram
    ? `https://instagram.com/${sala.ocupante.instagram.replace('@', '')}`
    : null
  const siteHref = sala.ocupante?.site || null

  // Prioridade: Instagram > Site
  const cardLinkHref = ocupada ? instagramHref || siteHref : null
  const isCardClickable = Boolean(cardLinkHref)

  const CardWrapper = isCardClickable ? 'a' : 'div'
  const wrapperProps = isCardClickable
    ? {
        href: cardLinkHref,
        target: '_blank',
        rel: 'noopener noreferrer',
        'aria-label': `Sala ${numeroFmt} — ${sala.ocupante?.nome || 'ocupante'}`,
      }
    : {}

  return (
    <CardWrapper
      {...wrapperProps}
      className={`card-vila flex flex-col reveal ${
        isCardClickable ? 'cursor-pointer hover:border-gold/30 transition-colors' : ''
      }`}
    >
      <div className="aspect-[4/3] bg-navy-700 flex items-center justify-center border-b border-gold/10 relative overflow-hidden">
        {sala.foto ? (
          <img src={sala.foto} alt={`Sala ${numeroFmt}`} className="w-full h-full object-cover" />
        ) : (
          <span className="text-offwhite/25 text-sm font-light">Foto em breve</span>
        )}
        <span
          className={`absolute top-3 right-3 text-[11px] tracking-widest2 uppercase px-3 py-1 ${
            ocupada ? 'bg-navy-900/80 text-offwhite/60 border border-offwhite/15' : 'bg-gold text-navy-900 font-medium'
          }`}
        >
          {ocupada ? 'Ocupada' : 'Disponível'}
        </span>
      </div>

      <div className="p-6 flex flex-col flex-1">
        <h3 className="font-display text-xl text-gold mb-2">Sala {numeroFmt}</h3>

        {sala.descricao ? (
          <p className="text-offwhite/65 text-sm font-light leading-relaxed mb-4">{sala.descricao}</p>
        ) : (
          <p className="text-offwhite/35 text-sm font-light italic leading-relaxed mb-4">
            Descrição em atualização.
          </p>
        )}

        {sala.info?.length > 0 && (
          <ul className="text-offwhite/55 text-xs font-light mb-4 space-y-1">
            {sala.info.map((i) => (
              <li key={i}>• {i}</li>
            ))}
          </ul>
        )}

        <div className="mt-auto pt-4 border-t border-gold/10">
          {ocupada ? (
            sala.ocupante?.nome ? (
              <div>
                <p className="text-offwhite text-sm">{sala.ocupante.nome}</p>
                {sala.ocupante.servico && (
                  <p className="text-offwhite/50 text-xs mb-1">{sala.ocupante.servico}</p>
                )}
                {(instagramHref || siteHref) && (
                  <div className="flex gap-2 mt-2 text-[11px]">
                    {instagramHref && (
                      <span className="inline-flex items-center gap-1 border border-gold/25 text-gold px-2 py-1 tracking-wide">
                        Instagram
                      </span>
                    )}
                    {siteHref && (
                      <span className="inline-flex items-center gap-1 border border-gold/25 text-gold px-2 py-1 tracking-wide">
                        Site
                      </span>
                    )}
                  </div>
                )}
              </div>
            ) : (
              <p className="text-offwhite/35 text-xs italic">Informações do locatário em atualização.</p>
            )
          ) : (
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="btn-gold inline-block w-full text-center text-xs tracking-widest2 uppercase font-medium py-3"
            >
              Tenho interesse
            </a>
          )}
        </div>
      </div>
    </CardWrapper>
  )
}
