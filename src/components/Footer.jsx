import Logo from './Logo.jsx'
import { config } from '../data/config.js'

export default function Footer() {
  return (
    <footer className="bg-navy-950 border-t border-gold/10 py-12">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <Logo className="items-center md:items-start scale-75" />
        <div className="text-center md:text-right">
          <p className="text-offwhite/50 text-sm font-light">{config.endereco}</p>
          {config.instagram && (
            <a
              href={`https://instagram.com/${config.instagram.replace('@', '')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold text-sm hover:text-gold-light transition-colors"
            >
              {config.instagram}
            </a>
          )}
          <p className="text-offwhite/30 text-xs mt-2">
            © {new Date().getFullYear()} Vila Office. Todos os direitos reservados.
          </p>
          <p className="text-offwhite/25 text-xs mt-1">
            Desenvolvido por forecatt
          </p>
        </div>
      </div>
    </footer>
  )
}