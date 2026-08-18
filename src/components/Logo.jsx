export default function Logo({ className = '' }) {
  return (
    <img
      src="/Logo/logo.png"
      alt="Vila Office"
      className={`h-10 md:h-12 w-auto object-contain ${className}`}
    />
  )
}