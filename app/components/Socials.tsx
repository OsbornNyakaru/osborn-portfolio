import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'

export default function Socials() {
  return (
    <div className="flex justify-center space-x-6">
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
  )
}