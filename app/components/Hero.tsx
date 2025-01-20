import { Button } from "@/components/ui/button"

export default function Hero() {
  return (
    <section id="home" className="flex items-center justify-center min-h-[calc(100vh-4rem)] bg-gradient-to-b from-background to-background/80 px-4">
      <div className="text-center">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400">OSBORN NYAKARU</h1>
        <p className="text-lg sm:text-xl mb-8 text-muted-foreground">Full Stack Developer | Next.js Expert</p>
        <Button asChild size="lg">
          <a href="#contact">Get in Touch</a>
        </Button>
      </div>
    </section>
  )
}

