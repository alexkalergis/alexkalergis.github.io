import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Award, BookOpen, ExternalLink } from "lucide-react"
import Link from "next/link"

export function Education() {
  const certifications = [
    {
      id: 1,
      title: "Human-Computer Interaction",
      issuer: "Interaction Design Foundation",
      year: 2025,
    },
    {
      id: 2,
      title: "Design Thinking",
      issuer: "Interaction Design Foundation",
      year: 2025,
    },
    {
      id: 3,
      title: "User Experience Design",
      issuer: "Interaction Design Foundation",
      year: 2025,
    },
    {
      id: 4,
      title: "Interactive Fiction",
      issuer: "University of Patras",
      year: 2022,
    },
  ]

  return (
    <section id="education" className="container py-24 space-y-16">
      <div className="text-center space-y-4">
        <h2 className="text-3xl font-bold">Education & Certifications</h2>
        <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
          My academic background and professional certifications.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        <Card>
          <CardHeader className="flex flex-row items-center gap-4">
            <BookOpen className="h-8 w-8 text-primary flex-shrink-0" />
            <div>
              <CardTitle>Education</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2">
                <h3 className="font-bold text-lg">MEng in Electrical & Computer Engineering</h3>
                <Badge className="self-start">2018 - 2023</Badge>
              </div>
              <p className="text-muted-foreground">University of Patras, Greece</p>
              <div className="space-y-3">
                <div className="grid sm:grid-cols-2 gap-2">
                  <p>
                    <span className="font-medium">Major:</span> Cyber-Physical Systems
                  </p>
                  <p>
                    <span className="font-medium">Achievement:</span> Top 2.9% of class
                  </p>
                </div>
                <p>
                  <span className="font-medium">Thesis:</span> Robot writing via Reinforcement Learning
                </p>
                <p>
                  <span className="font-medium">Key Courses:</span> Artificial Intelligence, Machine Learning,
                  Human-Computer Interaction, Virtual Reality, Robotics
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center gap-4">
            <Award className="h-8 w-8 text-primary flex-shrink-0" />
            <div>
              <CardTitle>Certifications & Awards</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-6">
              <div className="space-y-3">
                <h3 className="font-bold">Honorable Mention in Artificial Intelligence Competition (2023)</h3>
                <p className="text-muted-foreground text-sm">
                  Designed and developed two robotic systems using reinforcement learning algorithms. Gained experience
                  with Python libraries like Tensorflow, NumPy, Keras, PyTorch for deep learning. Researched multiple
                  papers for the framework we proposed.
                </p>
                <p className="text-sm text-muted-foreground">
                  <span className="font-medium">Collaborator:</span>{" "}
                  <Link
                    href="https://www.linkedin.com/in/vassileios-kalaitzopoulos/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary transition-colors inline-flex items-center gap-1"
                  >
                    Vassileios Kalaitzopoulos
                    <ExternalLink className="h-3 w-3 text-primary" />
                  </Link>
                </p>
              </div>

              <div className="border-t pt-4">
                <h3 className="font-bold mb-3">Professional Certifications</h3>
                <div className="space-y-3">
                  {certifications.map((cert) => (
                    <div key={cert.id} className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2">
                      <div className="flex-1">
                        <p className="font-medium">{cert.title}</p>
                        <p className="text-sm text-muted-foreground">{cert.issuer}</p>
                      </div>
                      <Badge variant="outline" className="self-start">
                        {cert.year}
                      </Badge>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
