import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Code, GraduationCap, Palette, FileText } from "lucide-react"
import Link from "next/link"

export function About() {
  return (
    <section id="about" className="container py-24 space-y-16">
      <div className="text-center space-y-4">
        <h2 className="text-3xl font-bold">About Me</h2>
        <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
          I'm a software engineer with a background in electrical and computer engineering, focused on creating
          innovative solutions at the intersection of technology and design.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-10 items-center">
        <div className="space-y-6">
          <h3 className="text-2xl font-bold">My Background</h3>
          <p className="text-muted-foreground">
            I graduated with a Master's in Electrical & Computer Engineering from the University of Patras, where I
            ranked in the top 2.9% of my class. My academic journey focused on Cyber-Physical Systems, with coursework
            in Artificial Intelligence, Machine Learning, Human-Computer Interaction, Virtual Reality, and Robotics.
          </p>
          <p className="text-muted-foreground">
            My thesis research explored Robot Writing via Reinforcement Learning, where I designed and developed a 2-DOF
            robot that learns handwriting through AI algorithms. This project combined my interests in robotics, machine
            learning, and practical engineering applications.
          </p>
          <p className="text-muted-foreground">
            My professional experience spans both software engineering and product design, including roles at Ainigma
            Technologies and a product design internship at BuildUpLabs where I worked on AI-powered digital products.
            I'm passionate about creating solutions that are both technically sound and user-centered.
          </p>
          <div>
            <Button variant="outline" asChild>
              <Link
                href="/files/alex-kalergis-cv.pdf"
                target="_blank"
                rel="noopener noreferrer"
                download="Alex_Kalergis_CV.pdf"
                className="inline-flex items-center gap-2"
              >
                <FileText className="h-4 w-4" />
                Download Resume
              </Link>
            </Button>
          </div>
        </div>

        <div className="grid gap-6">
          <Card>
            <CardContent className="p-6 flex items-start gap-4">
              <div className="bg-primary/10 p-3 rounded-full">
                <Code className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h4 className="font-bold">Software Engineering</h4>
                <p className="text-muted-foreground">
                  Experience with Python, JavaScript, React, and various frameworks for building robust applications.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6 flex items-start gap-4">
              <div className="bg-primary/10 p-3 rounded-full">
                <Palette className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h4 className="font-bold">Product Design</h4>
                <p className="text-muted-foreground">
                  Experience in UX design, user research, and creating digital products with tools like Figma and
                  Retool.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6 flex items-start gap-4">
              <div className="bg-primary/10 p-3 rounded-full">
                <GraduationCap className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h4 className="font-bold">Academic Excellence</h4>
                <p className="text-muted-foreground">
                  Top 2.9% of class in Electrical & Computer Engineering with focus on AI and Cyber-Physical Systems.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
