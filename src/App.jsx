import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import Sobre from './components/Sobre.jsx'
import Salas from './components/Salas.jsx'
import Localizacao from './components/Localizacao.jsx'
import Alugue from './components/Alugue.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <div className="overflow-x-hidden">
      <Header />
      <main>
        <Hero />
        <Sobre />
        <Salas />
        <Localizacao />
        <Alugue />
      </main>
      <Footer />
    </div>
  )
}
