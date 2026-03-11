import { useState, useEffect } from 'react'

const navLinks = ['About', 'Services', 'Skills', 'Projects']

export default function Navbar() {
  const [hidden, setHidden] = useState(false)
  const [lastScrollY, setLastScrollY] = useState(0)
  const [btnState, setBtnState] = useState('Connect') // 'Connect' | 'Connecting...' | 'Connected!'

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY
      setHidden(currentY > lastScrollY && currentY > 100)
      setLastScrollY(currentY)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY])

  const handleConnect = () => {
    setBtnState('Connecting...')
    setTimeout(() => setBtnState('Connected!'), 150)
    setTimeout(() => setBtnState('Connect'), 2000)
  }

  return (
    <nav
      className={`flex justify-between items-center px-10 py-6 bg-black bg-opacity-80 backdrop-blur-sm fixed w-full top-0 z-50 transition-transform duration-300 ease-in-out ${
        hidden ? '-translate-y-full' : 'translate-y-0'
      }`}
    >
      {/* Logo */}
      <div className="text-2xl font-bold tracking-wide group cursor-pointer">
        <span className="text-white transition-all duration-300 group-hover:text-blue-400">tayyab</span>
        <span className="text-gray-400 transition-all duration-300 group-hover:text-blue-300">.ai</span>
      </div>

      {/* Nav Links */}
      <ul className="flex space-x-8 text-sm text-gray-300">
        {navLinks.map((link) => (
          <li key={link}>
            <a href={`#${link.toLowerCase()}`} className="relative hover:text-white transition-all duration-300 group">
              {link}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full" />
            </a>
          </li>
        ))}
      </ul>

      {/* Connect Button */}
      <button
        onClick={handleConnect}
        className={`px-5 py-2 rounded-3xl font-medium text-sm transition-all duration-200 transform hover:scale-105 active:scale-95 hover:shadow-lg hover:shadow-white/20 ${
          btnState === 'Connected!'
            ? 'bg-green-500 text-white'
            : 'bg-white text-black hover:bg-gray-200'
        }`}
      >
        {btnState}
      </button>
    </nav>
  )
}