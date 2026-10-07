import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Hero from '../components/Hero.jsx'
import Skills from '../components/Skills.jsx'
import Projects from '../components/Projects.jsx'
import Connect from '../components/connect.jsx'

export default function Home() {
  const { hash } = useLocation()

  useEffect(() => {
    if (!hash) return
    document.getElementById(hash.slice(1))?.scrollIntoView({ behavior: 'smooth' })
  }, [hash])

  return (
    <main>
      <Hero />
      <Skills />
      <Projects />
      <Connect />
    </main>
  )
}

