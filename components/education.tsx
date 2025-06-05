import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Award, BookOpen, Trophy } from "lucide-react"

export function Education() {
  return (
    <section id="education" className="container py-24 space-y-16">
      <div className="text-center space-y-4">
        <h2 className="text-3xl font-bold">Education & Achievements</h2>
        <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
          My academic background, professional certifications, and recognitions.
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        <Card>
          <CardHeader className="flex flex-row items-center gap-4">
            <BookOpen className="h-8 w-8 text-primary flex-shrink-0" />
            <CardTitle>Education</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <div className="flex flex-col gap-2">
                <h3 className="font-bold text-lg">MEng in Electrical & Computer Engineering</h3>
                <Badge className="self-start">2018 - 2023</Badge>
              </div>
              <p className="text-muted-foreground">University of Patras, Greece</p>
              <div className="space-y-2">
                <p>
                  <span className="font-medium">Major:</span> Cyber-Physical Systems
                </p>
                <p>
                  <span className="font-medium">Achievement:</span> Top 2.9% of class
                </p>
                <p>
                  <span className="font-medium">Thesis:</span> Robot writing via Reinforcement Learning
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center gap-4">
            <Award className="h-8 w-8 text-primary flex-shrink-0" />
            <CardTitle>Certifications</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-3">
              <div className="flex flex-col gap-2">
                <p className="font-medium">Human-Computer Interaction</p>
                <p className="text-sm text-muted-foreground">Interaction Design Foundation</p>
                <Badge variant="outline" className="self-start">
                  2025
                </Badge>
              </div>
              <div className="flex flex-col gap-2">
                <p className="font-medium">Design Thinking</p>
                <p className="text-sm text-muted-foreground">Interaction Design Foundation</p>
                <Badge variant="outline" className="self-start">
                  2025
                </Badge>
              </div>
              <div className="flex flex-col gap-2">
                <p className="font-medium">User Experience Design</p>
                <p className="text-sm text-muted-foreground">Interaction Design Foundation</p>
                <Badge variant="outline" className="self-start">
                  2025
                </Badge>
              </div>
              <div className="flex flex-col gap-2">
                <p className="font-medium">Interactive Fiction</p>
                <p className="text-sm text-muted-foreground">University of Patras</p>
                <Badge variant="outline" className="self-start">
                  2022
                </Badge>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center gap-4">
            <Trophy className="h-8 w-8 text-primary flex-shrink-0" />
            <CardTitle>Awards</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-4">
              <div className="flex flex-col gap-2">
                <h3 className="font-bold">Honorable Mention</h3>
                <p className="text-sm text-muted-foreground">Artificial Intelligence Competition</p>
                <Badge variant="outline" className="self-start">
                  2023
                </Badge>
              </div>
              <p className="text-sm text-muted-foreground">
                Designed and developed two robotic systems using reinforcement learning algorithms. Researched multiple
                papers for the framework we proposed.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
