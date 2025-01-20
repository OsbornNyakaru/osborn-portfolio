import { FaReact, FaNodeJs, FaDatabase } from 'react-icons/fa'
import { SiNextdotjs, SiTypescript, SiTailwindcss, SiMongodb, SiStrapi } from 'react-icons/si'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

const skills = [
  { name: 'React', icon: FaReact, level: 90 },
  { name: 'Next.js', icon: SiNextdotjs, level: 85 },
  { name: 'TypeScript', icon: SiTypescript, level: 80 },
  { name: 'TailwindCSS', icon: SiTailwindcss, level: 85 },
  { name: 'MongoDB', icon: SiMongodb, level: 75 },
  { name: 'Node.js', icon: FaNodeJs, level: 80 },
  { name: 'Strapi', icon: SiStrapi, level: 60 },
]

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6">
        <h2 className="text-3xl font-bold mb-8 text-center">Skills</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill) => (
            <Card key={skill.name}>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  {skill.name}
                </CardTitle>
                <skill.icon className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{skill.level}%</div>
                <Progress
                  value={skill.level}
                  className="h-2"
                />
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

