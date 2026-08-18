export default function Logo({ className = '', light = true }) {
  const color = light ? '#F6F3EC' : '#0B0F17'
  return (
    <div className={`flex flex-col leading-none select-none ${className}`}>
      <span
        className="font-script text-4xl md:text-5xl"
        style={{ color, textShadow: '0 0 24px rgba(199,167,86,0.15)' }}
      >
        Vila
      </span>
      <span
        className="font-sans text-xs md:text-sm tracking-widest2 uppercase -mt-1 ml-1"
        style={{ color: '#C7A756' }}
      >
        Office
      </span>
    </div>
  )
}
