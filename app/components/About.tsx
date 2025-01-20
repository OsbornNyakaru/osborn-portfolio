import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function About() {
  return (
    <section id="about" className="py-20 bg-secondary/10">
      <div className="container mx-auto px-4 sm:px-6">
        <h2 className="text-3xl font-bold mb-8 text-center">About Me</h2>
        <Card>
          <CardHeader>
            <CardTitle>Passionate Full Stack Developer</CardTitle>
            <CardDescription>Specializing in Next.js and modern web technologies</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="mb-4">
              With over 5 years of experience in web development, I've honed my skills in creating efficient, scalable, and user-friendly applications. My expertise lies in Next.js, React, TypeScript, and MongoDB, allowing me to build full-stack solutions that meet and exceed client expectations.
            </p>
            <p>
              I'm passionate about staying up-to-date with the latest industry trends and continuously improving my skills. When I'm not coding, you can find me contributing to open-source projects, writing technical blog posts, or mentoring aspiring developers.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

