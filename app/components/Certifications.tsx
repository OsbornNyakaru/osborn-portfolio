import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const certifications = [
  {
    name: 'Computer Science',
    issuer: 'Undergraduate degree',
    date: 'Currently pursuing till 2027',
  },
  {
    name: 'Software Development Certification',
    issuer: 'Power Learn Project',
    date: 'August 2024',
  },
  {
    name: 'Software Engineering Certification',
    issuer: 'MODCOM Institute of Technology',
    date: 'August 2022',
  },
]

export default function Certifications() {
  return (
    <section id="certifications" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6">
        <h2 className="text-3xl font-bold mb-8 text-center">Certifications</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert) => (
            <Card key={cert.name}>
              <CardHeader>
                <CardTitle>{cert.name}</CardTitle>
                <CardDescription>{cert.issuer}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Date: {cert.date}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

