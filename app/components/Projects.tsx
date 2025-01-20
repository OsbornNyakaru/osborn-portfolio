import Image from 'next/image'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

const projects = [
  {
    title: 'E-commerce Platform',
    description: 'A full-stack e-commerce solution built with Next.js, MongoDB, and Stripe integration.',
    image: '/port-1.PNG?height=200&width=300',
    technologies: ['Next.js', 'MongoDB', 'Stripe', 'TailwindCSS', 'Clerk'],
    demoUrl: 'https://next-js-14-e-commerce-store-vtbt.vercel.app/',
    githubUrl: 'https://github.com/OsbornNyakaru/NextJS-14-E-commerce-Store.git',
  },
  {
    title: 'Prompt-Sharing Platform for GenAI',
    description: 'A Prompt Sharing Platform for generative AI platforms using Next.js, TypeScript, MongoDB and GoogleAuth.',
    image: '/port-2.PNG?height=200&width=300',
    technologies: ['Next.js', 'TypeScript', 'MongoDB', 'TailwindCSS'],
    demoUrl: 'https://project-arifa-avko.vercel.app/',
    githubUrl: 'https://github.com/yourusername/task-management-app',
  },
  {
    title: 'Arifa Healthcare Platform',
    description: 'A healthcare management system for with admin panel using Next.js, Typescript, TailwindCSS, and MongoDB.',
    image: '/port-3.PNG?height=200&width=300',
    technologies: ['Next.js', 'Javascipt', 'Typescript', 'MongoDB', 'TailwindCSS'],
    demoUrl: 'https://carepulse-afya.vercel.app/',
    githubUrl: 'https://github.com/OsbornNyakaru/carepulse_afya.git',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-secondary/10">
      <div className="container mx-auto px-4 sm:px-6">
        <h2 className="text-3xl font-bold mb-8 text-center">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <Card key={project.title} className="overflow-hidden">
              <Image src={project.image || "/placeholder.svg"} alt={project.title} width={300} height={200} className="w-full h-48 object-cover" />
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button asChild variant="outline">
                  <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">Live Demo</a>
                </Button>
                <Button asChild variant="outline">
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">GitHub</a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

