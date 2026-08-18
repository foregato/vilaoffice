import { useEffect, useState } from 'react'
import Logo from './Logo.jsx'
import { config } from '../data/config.js'

const links = [
  { label: 'Início', href: '#inicio' },
  { label: 'O Espaço', href: '#sobre' },
  { label: 'Salas', href: '#salas' },
  { label: 'Localização', href: '#localizacao' },
  { label: 'Contato', href: '#contato' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const whatsappHref = `https://wa.me/${config.whatsapp}?text=${encodeURIComponent(config.whatsappMensagem)}`

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-navy-900/95 backdrop-blur border-b border-gold/10 py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <a href="#inicio" aria-label="Vila Office — início">
          <Logo className="scale-75 origin-left md:scale-90" />
        </a>

        <nav className="hidden lg:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm tracking-wide text-offwhite/80 hover:text-gold transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <a
          href={whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden lg:inline-block btn-gold text-sm font-medium px-5 py-2.5 tracking-wide"
        >
          Alugue uma sala
        </a>

        <button
          className="lg:hidden text-offwhite"
          aria-label="Abrir menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            {open ? (
              <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
            ) : (
              <path d="M3 6h18M3 12h18M3 18h18" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <nav className="lg:hidden mt-4 px-6 pb-6 flex flex-col gap-4 bg-navy-900/98 border-t border-gold/10 pt-4">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-base text-offwhite/85 hover:text-gold transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold text-center text-sm font-medium px-5 py-3 tracking-wide mt-2"
          >
            Alugue uma sala
          </a>
        </nav>
      )}
    </header>
  )
}
