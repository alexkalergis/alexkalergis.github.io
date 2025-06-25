import { Badge } from "@/components/ui/badge"
import { Award, Trophy, GraduationCap } from "lucide-react"

export function About() {
  return (
    <>
      {/* About Me Section */}
      <section id="about" className="py-24 bg-background">
        <div className="container space-y-16">
          {/* Section Header - Full Width */}
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold">About Me</h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              A passionate Software Engineer and Product Designer dedicated to crafting innovative solutions.
            </p>
          </div>
        </div>
      </section>

      {/* My Journey Section */}
      <section className="py-24 bg-background">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Left Column - Journey Text */}
            <div className="space-y-8">
              <div className="space-y-6">
                <h2 className="text-4xl md:text-5xl font-bold">My Journey</h2>
                <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                  <p>
                    My path into technology began with a Master's in Electrical & Computer Engineering from the
                    University of Patras. My academic focus on Cyber-Physical Systems immersed me in the exciting realms
                    of Artificial Intelligence, Machine Learning, and Human-Computer Interaction.
                  </p>
                  <p>
                    A highlight of my studies was my thesis on "Robot Writing via Reinforcement Learning," a challenge
                    that perfectly blended my interests in robotics, machine learning, and practical engineering.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column - Education */}
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-primary/10 rounded-xl">
                    <GraduationCap className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold">Education</h3>
                </div>

                <div className="space-y-6 pl-2">
                  <div className="space-y-4">
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2">
                      <h4 className="text-xl font-bold leading-tight">MEng in Electrical & Computer Engineering</h4>
                      <Badge variant="outline" className="self-start">
                        2018 - 2023
                      </Badge>
                    </div>
                    <p className="text-muted-foreground">University of Patras, Greece</p>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4 pt-4 border-t border-border/50">
                    <div className="space-y-3">
                      <div>
                        <span className="text-sm font-medium text-primary">Major</span>
                        <p className="text-sm text-muted-foreground">Cyber-Physical Systems</p>
                      </div>
                      <div>
                        <span className="text-sm font-medium text-primary">Achievement</span>
                        <p className="text-sm text-muted-foreground">Top 2.9% of class</p>
                      </div>
                    </div>
                    <div>
                      <span className="text-sm font-medium text-primary">Thesis</span>
                      <p className="text-sm text-muted-foreground">Robot writing via Reinforcement Learning</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Credentials & Achievements Section */}
      <section className="py-24 bg-background">
        <div className="container space-y-16">
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold">Credentials & Achievements</h2>
            <p className="text-xl text-muted-foreground font-normal">
              My certifications and recognition in the field of technology and engineering.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            {/* Certifications */}
            <div className="space-y-8">
              <div className="flex items-center gap-4">
                <div className="p-4 bg-primary/10 rounded-xl">
                  <Award className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold">Certifications</h3>
              </div>

              <div className="space-y-6 pl-2">
                {[
                  { name: "Human-Computer Interaction", org: "Interaction Design Foundation", year: "2025" },
                  { name: "Interactive Fiction", org: "University of Patras", year: "2022" },
                ].map((cert, idx) => (
                  <div key={idx} className="space-y-2 pb-6 border-b border-border/30 last:border-b-0 last:pb-0">
                    <div className="flex justify-between items-start">
                      <h4 className="text-lg font-semibold leading-tight">{cert.name}</h4>
                      <Badge variant="outline" className="text-xs whitespace-nowrap ml-2">
                        {cert.year}
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">{cert.org}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Awards */}
            <div className="space-y-8">
              <div className="flex items-center gap-4">
                <div className="p-4 bg-primary/10 rounded-xl">
                  <Trophy className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold">Awards</h3>
              </div>

              <div className="space-y-6 pl-2">
                <div className="space-y-3 pb-6">
                  <div className="flex justify-between items-start">
                    <h4 className="text-lg font-semibold leading-tight">Honorable Mention</h4>
                    <Badge variant="outline" className="text-xs whitespace-nowrap ml-2">
                      2023
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">Artificial Intelligence Competition</p>
                  <div className="pt-3 border-t border-border/30">
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Designed and developed two robotic systems using reinforcement learning algorithms. Researched
                      multiple papers for the framework we proposed.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
