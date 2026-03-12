import { useEffect, useRef, useState } from 'react'
import ServicePanel from './ServicePanel'

const services = [
  {
    title: 'ML & Deep Learning',
    desc: 'End-to-end ML pipelines, computer vision, and deep learning models for real-world problems.',
    sub: 'Ask me about ML projects',
    icon: (
      <svg className="h-12 w-12 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path d="M4 4h16v12H4z" /><path d="M8 20h8" /><path d="M10 16h4" />
      </svg>
    ),
  },
  {
    title: 'LLM & RAG Systems',
    desc: 'Retrieval-augmented generation pipelines, document Q&A, and LangChain-powered AI apps.',
    sub: 'Inquire about LLM development',
    icon: (
      <svg className="h-12 w-12 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path d="M4 20h16M4 4l7.5 7.5" /><path d="M14.5 12.5l5 5" />
      </svg>
    ),
  },
  {
    title: 'Full-Stack AI Apps',
    desc: 'Production-ready web applications powered by AI — React frontend, FastAPI backend, deployed on cloud.',
    sub: 'Learn about full-stack AI',
    icon: (
      <svg className="h-12 w-12 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path d="M12 12c2.5 0 4.5-2 4.5-4.5S14.5 3 12 3 7.5 5 7.5 7.5 9.5 12 12 12zM19 21v-2c0-2.5-5-3.9-7-4s-7 1.5-7 4v2" />
        <path d="M15 9h6v6" />
      </svg>
    ),
  },
]

export default function Services() {
  const [visible, setVisible] = useState(false)
  const [selectedService, setSelectedService] = useState(null)
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold: 0.15 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <>
      <section id="services" ref={sectionRef} className="bg-black text-white py-16 px-6">
        <div className="max-w-6xl mx-auto">

          {/* Header */}
          <div className={`mb-12 text-center transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
            <h2 className="text-4xl font-extrabold mb-4">Services</h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              From training deep learning models to deploying full-stack AI systems — I build end-to-end
              solutions that work in production, not just in notebooks.
            </p>
            <a
              href="mailto:igntayyab@gmail.com"
              className="mt-6 inline-block px-6 py-2 bg-white text-black font-semibold rounded-lg shadow hover:bg-gray-200 transition duration-300"
            >
              Start Your Project
            </a>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, i) => (
              <div
                key={service.title}
                className={`bg-white/5 border border-white/10 backdrop-blur-md p-6 rounded-xl hover:shadow-xl hover:border-white/20 transition-all duration-500 group flex flex-col ${
                  visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${i * 150}ms` }}
              >
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-gray-400 mb-4 flex-1">{service.desc}</p>
                <div className="text-sm text-gray-500 mb-4">{service.sub}</div>
                <button
                  onClick={() => setSelectedService(service)}
                  className="text-blue-400 hover:text-blue-300 text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all duration-200 w-fit"
                >
                  Read more <span className="transition-transform duration-200">→</span>
                </button>
              </div>
            ))}
          </div>

        </div>
      </section>

      <ServicePanel
        service={selectedService}
        onClose={() => setSelectedService(null)}
      />
    </>
  )
}