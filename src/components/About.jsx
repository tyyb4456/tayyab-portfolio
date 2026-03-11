import { useEffect, useRef, useState } from 'react'

export default function About() {
  const [visible, setVisible] = useState(false)
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold: 0.2 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="about"
      ref={sectionRef}
      className="bg-black text-white px-6 md:px-20 py-20 relative overflow-hidden"
    >
      {/* Background blob */}
      <div className="absolute inset-0 flex justify-center items-center -z-10">
        <div className="w-[500px] h-[500px] bg-gray-700 opacity-20 blur-3xl rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

        {/* Text */}
        <div className={`transition-all duration-700 ${visible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
          <h2 className="text-5xl font-extrabold mb-4">About Me</h2>
          <p className="text-sm uppercase text-gray-400 mb-4 tracking-widest">
            AI Engineer | ML & Full-Stack AI Systems
          </p>
          <p className="text-gray-300 leading-relaxed">
            I'm Tayyab Hussain, an AI Engineer and IT undergraduate at Bahauddin Zakariya University (CGPA: 3.40),
            based in Multan, Pakistan. I specialize in building production-ready ML pipelines, RAG systems,
            and full-stack AI applications using Python, TensorFlow, PyTorch, LangChain, FastAPI, and React.
            <br /><br />
            I'm a Kaggle Master ranked in the global top tier, and a 2nd place finisher in an International AI
            Hackathon against 50+ teams. My focus is delivering end-to-end AI solutions — from model training
            to live deployment.
          </p>
          <p className="mt-4 text-gray-400 italic">
            Interested in building something with AI?
          </p>
          <a
            href="#contact"
            className="mt-6 inline-block text-sm text-gray-500 hover:text-white border-b border-gray-500 hover:border-white transition-all duration-300"
          >
            Contact Me →
          </a>
        </div>

        {/* Image */}
        <div className={`flex justify-center transition-all duration-700 delay-200 ${visible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
          <img
            src="1118a52b-a8fd-4b47-8042-f18d7b520be1.png"
            alt="Rawal Kazi"
            className="w-72 h-80 object-cover rounded-3xl shadow-lg"
            style={{ clipPath: 'polygon(20% 0%, 100% 0%, 80% 100%, 0% 100%)' }}
          />
        </div>

      </div>
    </section>
  )
}