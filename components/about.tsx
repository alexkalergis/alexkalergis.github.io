import { Card, CardContent } from "@/components/ui/card"
import { Award, Trophy, GraduationCap } from "lucide-react"

export function About() {
  return (
    <>
      {/* About Me & My Journey Section */}
      <section id="about" className="py-24 bg-background">
        <div className="container space-y-12">
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold">About</h2>
            <p className="text-xl text-muted-foreground leading-relaxed">A few words about me.</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div className="space-y-6">
              <h3 className="text-3xl font-bold">My Journey</h3>
              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                <p>
                  My path into technology began with a Master's in Electrical & Computer Engineering from the University
                  of Patras. My academic focus on Cyber-Physical Systems immersed me in the exciting realms of
                  Artificial Intelligence, Machine Learning, and Human-Computer Interaction.
                </p>
                <p>
                  A highlight of my studies was my thesis on "Robot Writing via Reinforcement Learning," a challenge
                  that perfectly blended my interests in robotics, machine learning, and practical engineering.
                </p>
              </div>
            </div>

            <Card className="border bg-card/50 backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-muted rounded-xl">
                      <GraduationCap className="h-6 w-6 text-foreground" />
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold">Education</h3>
                  </div>
                  <div className="space-y-6">
                    <div className="space-y-4">
                      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2">
                        <h4 className="text-xl font-bold leading-tight">MEng in Electrical & Computer Engineering</h4>
                        <span className="text-xs text-muted-foreground self-start whitespace-nowrap">2018 - 2023</span>
                      </div>
                      <p className="text-muted-foreground">University of Patras, Greece</p>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-4 pt-4 border-t border-gray-300">
                      <div className="space-y-3">
                        <div>
                          <span className="text-sm font-medium text-foreground">Major</span>
                          <p className="text-sm text-muted-foreground">Cyber-Physical Systems</p>
                        </div>
                        <div>
                          <span className="text-sm font-medium text-foreground">Achievement</span>
                          <p className="text-sm text-muted-foreground">Top 2.9% of class</p>
                        </div>
                      </div>
                      <div>
                        <span className="text-sm font-medium text-foreground">Thesis</span>
                        <p className="text-sm text-muted-foreground">Robot writing via Reinforcement Learning</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Credentials & Achievements Section */}
      <section className="py-24 bg-background">
        <div className="container space-y-16">
          <div className="space-y-6">
            <h2 className="font-bold text-3xl">Credentials & Achievements</h2>
            <p className="text-xl text-muted-foreground">
              My certifications and awards in the field of technology and engineering.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <Card className="border bg-card/50 backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-4 bg-muted rounded-xl">
                    <Award className="h-8 w-8 text-foreground" />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold">Certifications</h3>
                </div>
                <div className="space-y-6">
                  {[
                    { name: "Human-Computer Interaction", org: "Interaction Design Foundation", year: "2025" },
                    { name: "Interactive Fiction", org: "University of Patras", year: "2022" },
                  ].map((cert, idx, arr) => (
                    <div key={idx} className="space-y-2">
                      <div className="flex justify-between items-start">
                        <h4 className="text-lg font-semibold leading-tight">{cert.name}</h4>
                        <span className="text-xs text-muted-foreground whitespace-nowrap ml-2">{cert.year}</span>
                      </div>
                      <p className="text-sm text-muted-foreground">{cert.org}</p>
                      {idx < arr.length - 1 && <div className="pt-6 border-b border-gray-300" />}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="border bg-card/50 backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-4 bg-muted rounded-xl">
                    <Trophy className="h-8 w-8 text-foreground" />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold">Awards</h3>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between items-start">
                    <h4 className="text-lg font-semibold leading-tight">Honorable Mention in AI Competition </h4>
                    <span className="text-xs text-muted-foreground whitespace-nowrap ml-2">2023</span>
                  </div>
                  <p className="text-sm text-muted-foreground">AI-Hub by University of Patras </p>
                  <div className="space-y-3 pt-3">
                    <div className="border-t border-gray-300" />
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {
                        "This project explores Reinforcement Learning methods on robotic systems that mimic human actions. We developed RL-based locomotion control for a biped robot and deep RL algorithm that helps a 2DOF robot learns handwriting. This research aims to advance AI-driven motor learning for robotic applications."
                      }
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </>
  )
}
