import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="bg-secondary py-8">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex justify-center space-x-6 mb-4">
          <a href="https://github.com/OsbornNyakaru" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
            <FaGithub className="text-2xl" />
          </a>
          <a href="https://linkedin.com/in/nyakaru-osborn" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
            <FaLinkedin className="text-2xl" />
          </a>
          <a href="mailto:osbornnyakaru@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
            <FaEnvelope className="text-2xl" />
          </a>
        </div>
        <p className="text-center text-muted-foreground">© {new Date().getFullYear()} Osborn Nyakaru. All rights reserved.</p>
      </div>
    </footer>
  )
}

