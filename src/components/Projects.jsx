import { useEffect, useRef, useState } from 'react'

const projects = [
  {
    id: 'wellai',
    title: 'WellAI – AI Health Assistant',
    tech: 'Python · LangChain · FastAPI · React · RAG',
    img: 'pexels-cottonbro-6153354.jpg',
    url: 'https://github.com/igntayyab',
  },
  {
    id: 'pneumonia',
    title: 'Pneumonia & Disease Detection',
    tech: 'TensorFlow · Keras · CNN · Transfer Learning',
    img: 'pexels-pavel-danilyuk-8438923.jpg',
    url: 'https://github.com/igntayyab',
  },
  {
    id: 'gemma-rag',
    title: 'Gemma RAG System',
    tech: 'Python · LangGraph · LangChain · ChromaDB',
    img: 'pexels-marketingtuig-185576.jpg',
    url: 'https://github.com/igntayyab',
  },
  {
    id: 'stock-forecast',
    title: 'Stock Price Forecasting',
    tech: 'Python · LSTM · Scikit-learn · Time Series',
    img: 'pexels-ron-lach-9783353.jpg',
    url: 'https://github.com/igntayyab',
  },
  {
    id: 'heart-disease',
    title: 'Heart Disease & Bank Churn',
    tech: 'Scikit-learn · XGBoost · SHAP',
    img: 'pexels-shvetsa-4226215.jpg',
    url: 'https://github.com/igntayyab',
  },
  {
    id: 'sales-app',
    title: 'Sales Management App',
    tech: 'React · FastAPI · REST API',
    img: 'pexels-thisisengineering-3913031.jpg',
    url: 'https://github.com/igntayyab',
  },
]

export default function Projects() {
  const [visible, setVisible] = useState(false)
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold: 0.1 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  const handleClick = (url) => {
    window.open(url, '_blank')
  }

  return (
    <section id="projects" ref={sectionRef} className="px-6 pb-24 pt-12 bg-white">

      {/* Header */}
      <div className={`text-center mb-20 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <h2 className="text-5xl font-black text-black mb-6 tracking-tight">Featured Work</h2>
        <div
          className="h-1 bg-black mx-auto transition-all duration-700 delay-300"
          style={{ width: visible ? '80px' : '0px' }}
        />
      </div>

      {/* Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, i) => (
          <div
            key={project.id + i}
            onClick={() => handleClick(project.url)}
            className={`group cursor-pointer transition-all duration-500 hover:-translate-y-1 ${
              visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
            style={{ transitionDelay: `${i * 100}ms` }}
          >
            <div className="relative overflow-hidden bg-gray-50 border border-black/10 rounded-lg aspect-[4/3] hover:border-black/30 transition-all duration-300">
              <img
                src={project.img}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h3 className="text-white text-xl font-bold mb-1">{project.title}</h3>
                <p className="text-white/80 text-sm">{project.tech}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

    </section>
  )
}