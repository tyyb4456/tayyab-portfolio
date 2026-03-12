import { useState, useEffect, useRef } from 'react'
import ProfilePanel from './ProfilePanel'

export default function Hero() {
  const [visible, setVisible] = useState({ title: false, subtitle: false, desc: false, buttons: false })
  const [subtitleText, setSubtitleText] = useState('')
  const [panelOpen, setPanelOpen] = useState(false)
  const heroRef = useRef(null)
  const fullText = 'AI engineer'

  useEffect(() => {
    setTimeout(() => setVisible(v => ({ ...v, title: true })), 200)
    setTimeout(() => setVisible(v => ({ ...v, subtitle: true })), 600)
    setTimeout(() => setVisible(v => ({ ...v, desc: true })), 1000)
    setTimeout(() => setVisible(v => ({ ...v, buttons: true })), 1400)

    let i = 0
    const timer = setTimeout(() => {
      const type = setInterval(() => {
        if (i < fullText.length) {
          setSubtitleText(fullText.slice(0, i + 1))
          i++
        } else clearInterval(type)
      }, 100)
    }, 800)

    return () => clearTimeout(timer)
  }, [])

  const handleMouseMove = (e) => {
    const rect = heroRef.current.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width - 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5
    heroRef.current.querySelectorAll('.blob').forEach((blob, i) => {
      const intensity = (i + 1) * 20
      blob.style.transform = `translate(${x * intensity}px, ${y * intensity}px)`
    })
  }

  const handleMouseLeave = () => {
    heroRef.current.querySelectorAll('.blob').forEach(blob => {
      blob.style.transform = 'translate(0,0)'
    })
  }

  return (
    <>
      <section
        id="hero"
        ref={heroRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="text-center py-24 relative overflow-hidden min-h-screen flex items-center justify-center"
      >
        <div className="absolute inset-0 -z-10">
          <div className="blob absolute w-96 h-96 bg-gray-700 opacity-30 rounded-full blur-3xl transition-transform duration-700" style={{ left: '20%', top: '30%' }} />
          <div className="blob absolute w-80 h-80 bg-gray-600 opacity-20 rounded-full blur-3xl transition-transform duration-700" style={{ right: '15%', bottom: '25%' }} />
          <div className="blob absolute w-64 h-64 bg-gray-500 opacity-25 rounded-full blur-3xl transition-transform duration-700" style={{ left: '60%', top: '10%' }} />
        </div>

        <div className="absolute inset-0 opacity-5 pointer-events-none"
          style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '50px 50px' }} />

        <div className="relative z-10 space-y-8">
          <h1 className={`text-6xl md:text-8xl font-extrabold tracking-tight transition-all duration-700 ${visible.title ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
            <span className="text-white hover:text-gray-300 transition-all duration-300 cursor-pointer inline-block hover:scale-110 hover:rotate-2">A</span>
            <span className="text-gray-400 hover:text-gray-200 transition-all duration-300 cursor-pointer inline-block hover:scale-110 hover:-rotate-2">I.</span>
          </h1>

          <p className={`uppercase tracking-widest text-gray-400 text-sm transition-all duration-700 hover:text-gray-200 hover:tracking-wider cursor-default ${visible.subtitle ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            {subtitleText}<span className="animate-pulse">|</span>
          </p>

          <p className={`text-gray-300 text-base max-w-2xl mx-auto transition-all duration-700 hover:text-white cursor-default ${visible.desc ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            With expertise in Machine Learning, LLM applications, RAG systems, and full-stack AI development
          </p>

          <div className={`flex justify-center space-x-8 transition-all duration-700 ${visible.buttons ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <button
              onClick={() => setPanelOpen(true)}
              className="group relative px-8 py-3 bg-transparent border-2 border-gray-200 text-gray-200 rounded-lg font-medium overflow-hidden transition-all duration-300 hover:border-white hover:text-black transform hover:scale-105 hover:shadow-2xl hover:shadow-white/20 active:scale-95"
            >
              <span className="absolute inset-0 bg-white transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out" />
              <span className="relative z-10">Learn More</span>
            </button>
            <a
              href="mailto:igntayyab@gmail.com"
              className="group relative px-8 py-3 bg-gray-400 text-black rounded-lg font-medium overflow-hidden transition-all duration-300 hover:bg-white transform hover:scale-105 hover:shadow-2xl hover:shadow-gray-400/30 active:scale-95"
            >
              <span className="absolute inset-0 bg-linear-to-r from-white to-gray-100 transform translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out" />
              <span className="relative z-10">Contact Me</span>
            </a>
          </div>

          {[
            { style: { top: '-5rem', left: '-5rem' }, size: 'w-2 h-2', delay: '0s' },
            { style: { top: '-2.5rem', right: '8rem' }, size: 'w-1 h-1', delay: '2s' },
            { style: { top: '8rem', right: '-4rem' }, size: 'w-1.5 h-1.5', delay: '4s' },
            { style: { bottom: '-5rem', left: '4rem' }, size: 'w-1 h-1', delay: '1s' },
          ].map((dot, i) => (
            <div key={i} className={`absolute ${dot.size} bg-white rounded-full opacity-40 animate-pulse`}
              style={{ ...dot.style, animationDelay: dot.delay }} />
          ))}
        </div>
      </section>

      <ProfilePanel open={panelOpen} onClose={() => setPanelOpen(false)} />
    </>
  )
}