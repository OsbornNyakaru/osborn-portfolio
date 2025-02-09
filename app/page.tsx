import Header from './components/Header'
import Hero from './components/Hero'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Certifications from './components/Certifications'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { Toaster } from 'react-hot-toast'

export default function Home() {
  return (
      <main className="min-h-screen bg-background text-foreground pt-16">
        <Header />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Certifications />
        <Contact />
        <Footer />
        <Toaster />
      </main>
  )
}

