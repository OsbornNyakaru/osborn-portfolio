"use client"

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { ModeToggle } from './ModeToggle'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-background/80 backdrop-blur-sm shadow-md' : 'bg-transparent'}`}>
      <nav className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <Link href="#home" className="text-xl font-bold">ON</Link>
          <ul className="hidden md:flex space-x-8">
            <li><Link href="#home" className="hover:text-primary transition-colors">Home</Link></li>
            <li><Link href="#about" className="hover:text-primary transition-colors">About</Link></li>
            <li><Link href="#skills" className="hover:text-primary transition-colors">Skills</Link></li>
            <li><Link href="#projects" className="hover:text-primary transition-colors">Projects</Link></li>
            <li><Link href="#certifications" className="hover:text-primary transition-colors">Certifications</Link></li>
            <li><Link href="#contact" className="hover:text-primary transition-colors">Contact</Link></li>
          </ul>
          <ModeToggle />
        </div>
      </nav>
    </header>
  )
}

