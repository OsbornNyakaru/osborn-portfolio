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
            I am a Full-Stack Developer, AI Enthusiast, and Entrepreneur passionate about building scalable and impactful digital solutions. With expertise in Next.js, React, TypeScript, TailwindCSS, and Prisma, I develop dynamic front-end interfaces and efficient back-end systems powered by MongoDB, MySQL, and Django.

My projects focus on solving real-world problems, from e-commerce platforms and sales analytics tools to AI-driven prompt-sharing systems and waste management solutions. I am actively exploring Machine Learning and AI through DataCamp, with hands-on experience integrating OpenAI APIs and Microsoft Fabric tools for data-driven applications.

Beyond development, I am a problem-solver and strategist, currently building a financial management platform for local restaurants, a car hire database system, and an AI-powered agricultural solution for a hackathon project. My vision is to bridge technology with entrepreneurship, driving innovation in my community through well-designed, user-centric platforms.

Let's connect and build the future together! 🚀
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

