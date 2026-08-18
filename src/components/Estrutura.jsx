const itens = [
  { titulo: 'Recepção', icone: 'M4 21V9l8-6 8 6v12M9 21v-6h6v6' },
  { titulo: 'Wi-Fi', icone: 'M5 13a10 10 0 0 1 14 0M8.5 16.5a5 5 0 0 1 7 0M12 20h.01' },
  { titulo: 'Salas comerciais', icone: 'M3 21h18M6 21V7l6-4 6 4v14M10 21v-5h4v5' },
  { titulo: 'Localização estratégica', icone: 'M12 21s7-6.5 7-12a7 7 0 1 0-14 0c0 5.5 7 12 7 12ZM12 12a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z' },
  { titulo: 'Ambiente profissional', icone: 'M4 20v-1a6 6 0 0 1 6-6h4a6 6 0 0 1 6 6v1M12 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z' },
]

export default function Estrutura() {
  return (
    <section className="py-24 md:py-32 bg-navy-800 border-t border-gold/10">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16 reveal">
          <span className="text-gold text-xs tracking-widest2 uppercase">Estrutura</span>
          <h2 className="font-display text-3xl md:text-4xl mt-3">O que o Vila Office oferece</h2>
          <div className="gold-rule w-16 mx-auto mt-6" />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-8">
          {itens.map((item) => (
            <div key={item.titulo} className="text-center reveal">
              <svg
                width="34"
                height="34"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#C7A756"
                strokeWidth="1.2"
                className="mx-auto mb-4"
              >
                <path d={item.icone} strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <p className="text-offwhite/75 text-sm font-light">{item.titulo}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
