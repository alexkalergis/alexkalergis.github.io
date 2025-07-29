import { Card, CardContent } from "@/components/ui/card"
import { Award, Trophy, GraduationCap, Map } from "lucide-react"

export function About() {
  return (
    <>
      {/* About Me & My Journey Section */}
      <section id="about" className="py-24 bg-background">
        <div className="container space-y-12">
          <div className="space-y-6">
            <h2 className="font-bold text-5xl">About</h2>
            <p className="text-muted-foreground leading-relaxed text-lg">A few words about me.</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 items-stretch">
            {/* My Journey Card */}
            <Card className="border bg-card/50 backdrop-blur-sm flex flex-col">
              <CardContent className="p-8 flex-1 flex flex-col">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-muted rounded-xl">
                    <Map className="h-6 w-6 text-foreground" />
                  </div>
                  <h3 className="font-bold text-3xl">My Journey</h3>
                </div>
                <div className="space-y-6 flex-1 flex flex-col">
                  <div className="space-y-3">
                    <p
                      className="text-muted-foreground leading-relaxed text-justify text-sm"
                      style={{ textJustify: "inter-word" }}
                    >
                      My path into technology began with a Master's in Electrical & Computer Engineering from the
                      University of Patras. My academic focus on Cyber-Physical Systems immersed me in the exciting
                      realms of Artificial Intelligence, Machine Learning, and Human-Computer Interaction.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Education Card */}
            <Card className="border bg-card/50 backdrop-blur-sm flex flex-col">
              <CardContent className="p-8 flex-1 flex flex-col">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-muted rounded-xl">
                    <GraduationCap className="h-6 w-6 text-foreground" />
                  </div>
                  <h3 className="font-bold text-3xl">Education</h3>
                </div>
                <div className="space-y-6 flex-1 flex flex-col">
                  <div className="space-y-3">
                    <h4 className="font-bold leading-tight text-lg">University of Patras, Greece</h4>
                    <div className="flex justify-between items-start">
                      <p className="text-muted-foreground text-sm">Electrical & Computer Engineering</p>
                      <span className="text-muted-foreground text-xs whitespace-nowrap ml-2">2018 - 2023</span>
                    </div>
                  </div>
                  <div className="grid gap-4 pt-4 border-t border-gray-300 mt-auto">
                    <div>
                      <span className="text-sm font-medium text-foreground">Thesis</span>
                      <p className="text-muted-foreground text-sm">Robot writing via Reinforcement Learning</p>
                    </div>
                    <div>
                      <span className="text-sm font-medium text-foreground">Achievement</span>
                      <p className="text-sm text-muted-foreground">Top 2.9% of class</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Certifications & Achievements Section */}
      <section className="py-24 bg-background">
        <div className="container space-y-16">
          <div className="space-y-6">
            <h2 className="font-bold text-3xl">Certifications & Achievements</h2>
            <p className="text-muted-foreground text-lg">
              My certifications and awards in the field of technology and engineering.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 items-stretch">
            {/* Certifications Card */}
            <Card className="border bg-card/50 backdrop-blur-sm flex flex-col">
              <CardContent className="p-8 flex-1 flex flex-col">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-muted rounded-xl">
                    <Award className="h-6 w-6 text-foreground" />
                  </div>
                  <h3 className="font-bold text-3xl">Certifications</h3>
                </div>
                <div className="space-y-6 flex-1 flex flex-col">
                  <div className="space-y-3">
                    <h4 className="font-bold leading-tight text-lg">Interaction Design Foundation</h4>
                    <div className="space-y-1">
                      <div className="flex justify-between items-start">
                        <p className="text-muted-foreground text-sm">Human-Computer Interaction</p>
                        <span className="text-muted-foreground text-xs whitespace-nowrap ml-2">2025</span>
                      </div>
                      <div className="flex justify-between items-start">
                        <p className="text-muted-foreground text-sm">Design Thinking</p>
                        <span className="text-muted-foreground text-xs whitespace-nowrap ml-2">2025</span>
                      </div>
                      <div className="flex justify-between items-start">
                        <p className="text-muted-foreground text-sm">User Experience</p>
                        <span className="text-muted-foreground text-xs whitespace-nowrap ml-2">2025</span>
                      </div>
                    </div>
                  </div>
                  <div className="grid gap-4 pt-4 border-t border-gray-300 mt-auto">
                    <div className="space-y-3">
                      <h4 className="font-bold leading-tight text-lg">University of Patras</h4>
                    </div>
                    <div className="flex justify-between items-start">
                      <p className="text-muted-foreground text-sm">Interactive Fiction</p>
                      <span className="text-muted-foreground text-xs whitespace-nowrap ml-2">2022</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Awards Card */}
            <Card className="border bg-card/50 backdrop-blur-sm flex flex-col">
              <CardContent className="p-8 flex-1 flex flex-col">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-muted rounded-xl">
                    <Trophy className="h-6 w-6 text-foreground" />
                  </div>
                  <h3 className="text-2xl font-bold md:text-3xl">Awards</h3>
                </div>
                <div className="space-y-6 flex-1 flex flex-col">
                  <div className="space-y-3">
                    <div className="flex justify-between items-start">
                      <h4 className="text-lg font-semibold leading-tight">University of Patras (AI-Hub)</h4>
                    </div>
                    <div className="flex justify-between items-start">
                      <p className="text-muted-foreground text-sm">Honorable Mention in AI competition</p>
                      <span className="text-muted-foreground text-xs whitespace-nowrap ml-2">2023</span>
                    </div>
                  </div>
                  <div className="grid gap-4 pt-4 border-t border-gray-300 mt-auto">
                    <div>
                      <span className="text-sm font-medium text-foreground">About</span>
                      <p
                        className="text-sm text-muted-foreground leading-relaxed text-justify pt-2 md:text-sm"
                        style={{ textJustify: "inter-word" }}
                      >
                        This project explores Reinforcement Learning methods in robotic systems designed to mimic human
                        actions. We developed an RL-based locomotion controller for a 6-DOF robot to learn walking and
                        implemented a Deep Q-Learning algorithm on a 2-DoF robot to learn handwriting. This research
                        aims to advance AI-driven motor learning in robotic applications.
                      </p>
                    </div>
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
