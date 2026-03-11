import { useEffect, useRef, useState } from 'react'

const skills = [
  {
    name: 'Python',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
    invert: false,
  },
  {
    name: 'TensorFlow',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg',
    invert: false,
  },
  {
    name: 'PyTorch',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg',
    invert: false,
  },
  {
    name: 'React',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
    invert: false,
  },
  {
    name: 'FastAPI',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg',
    invert: false,
  },
  {
    name: 'Docker',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg',
    invert: false,
  },
  {
    name: 'Azure',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg',
    invert: false,
  },
  {
    name: 'GitHub',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg',
    invert: true,
  },
  {
    name: 'JavaScript',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
    invert: false,
  },
  {
    name: 'C++',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg',
    invert: false,
  },
]

export default function Skills() {
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
      id="skills"
      ref={sectionRef}
      className="relative bg-gradient-to-b from-white to-gray-100 text-black py-24 px-6 md:px-20 overflow-hidden"
    >
      {/* Background blob */}
      <div className="absolute inset-0 flex justify-center items-center -z-10">
        <div className="w-[550px] h-[550px] bg-black opacity-10 blur-[120px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto text-center">

        {/* Title */}
        <h2 className={`text-6xl font-extrabold mb-16 tracking-tight text-black transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          Skills
        </h2>

        {/* Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-10 justify-center items-center">
          {skills.map((skill, i) => (
            <div
              key={skill.name}
              className={`bg-white/70 backdrop-blur-md shadow-xl rounded-xl p-5 hover:scale-105 transition-all duration-500 cursor-default ${
                visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <img
                src={skill.icon}
                alt={skill.name}
                className={`w-14 h-14 mx-auto ${skill.invert ? 'invert' : ''}`}
              />
              <p className="mt-3 font-semibold text-sm">{skill.name}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}