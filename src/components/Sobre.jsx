const itens = [
  { titulo: 'Estrutura enxuta', texto: 'Recepção, salas prontas para uso e ambiente cuidado para o dia a dia de atendimento.' },
  { titulo: 'Localização estratégica', texto: 'Na Vila Aeroporto, com fácil acesso e boa circulação na região de Campinas.' },
  { titulo: 'Ambiente profissional', texto: 'Convivência entre profissionais de diferentes áreas, em um espaço sóbrio e discreto.' },
]

export default function Sobre() {
  return (
    <section id="sobre" className="py-24 md:py-32 bg-navy-900 border-t border-gold/10">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-16 reveal">
          <span className="text-gold text-xs tracking-widest2 uppercase">Sobre</span>
          <h2 className="font-display text-3xl md:text-4xl mt-3">O Vila Office</h2>
          <div className="gold-rule w-16 mx-auto mt-6" />
          <p className="text-offwhite/70 font-light max-w-2xl mx-auto mt-6 leading-relaxed">
            O Vila Office reúne 10 salas comerciais pensadas para profissionais liberais
            e pequenas empresas que buscam um espaço próprio para atender, com estrutura
            simples, ambiente elegante e um endereço fácil de chegar.
          </p>
        </div>

        <div className="grid sm:grid-cols-3 gap-8">
          {itens.map((item) => (
            <div key={item.titulo} className="text-center px-4 reveal">
              <div className="gold-rule-left mx-auto mb-5" />
              <h3 className="font-display text-lg text-gold mb-2">{item.titulo}</h3>
              <p className="text-offwhite/60 text-sm font-light leading-relaxed">{item.texto}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
