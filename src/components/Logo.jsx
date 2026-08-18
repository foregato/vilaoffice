import logoImg from '../public/Logo/logo.png'

export default function Logo({ className = '', light = true }) {
  return (
    <img
      src="/public/Logo/logo.png"   // ou importe a imagem
      alt="Vila Office"
      className={`h-10 md:h-12 w-auto object-contain ${className}`}
    />
  )
}
