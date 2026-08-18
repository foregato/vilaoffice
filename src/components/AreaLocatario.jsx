const itens = [
  { titulo: 'Login', texto: 'Acesso individual do locatário à área exclusiva.' },
  { titulo: 'Minha conta', texto: 'Dados cadastrais e informações do contrato.' },
  { titulo: 'Wi-Fi', texto: 'Consulta de senha e status da rede.' },
  { titulo: 'Avisos', texto: 'Comunicados e informações do condomínio.' },
]

export default function AreaLocatario() {
  return (
    <section className="py-24 md:py-32 bg-navy-900 border-t border-gold/10">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-14 reveal">
          <span className="text-gold text-xs tracking-widest2 uppercase">Em breve</span>
          <h2 className="font-display text-3xl md:text-4xl mt-3">Área do locatário</h2>
          <div className="gold-rule w-16 mx-auto mt-6" />
          <p className="text-offwhite/55 font-light max-w-xl mx-auto mt-6 text-sm">
            Um espaço exclusivo para quem já é locatário do Vila Office.
            Em desenvolvimento.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {itens.map((item) => (
            <div key={item.titulo} className="card-vila p-6 text-center opacity-60 reveal cursor-not-allowed">
              <h3 className="font-display text-gold text-base mb-2">{item.titulo}</h3>
              <p className="text-offwhite/50 text-xs font-light leading-relaxed">{item.texto}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
