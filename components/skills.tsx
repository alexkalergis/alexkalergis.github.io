import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function Skills() {
  const programmingLanguages = ["Python", "Matlab", "JavaScript", "Prolog", "HTML", "Arduino", "LaTeX"]

  const frameworksTools = [
    "React",
    "React Native",
    "Git/GitHub",
    "Figma",
    "VS Code",
    "SourceTree",
    "PyCharm",
    "Arduino IDE",
    "AutoCAD",
  ]

  const languages = [
    { language: "Greek", level: "Native Speaker" },
    { language: "English", level: "Proficient" },
  ]

  return (
    <section id="skills" className="container py-24 space-y-16">
      <div className="text-center space-y-4">
        <h2 className="text-3xl font-heading font-bold">My Skills</h2>
        <p className="text-muted-foreground text-lg max-w-3xl mx-auto font-sans">
          A combination of technical expertise and language skills that allows me to create comprehensive solutions.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        <Card>
          <CardContent className="p-6 space-y-4">
            <h3 className="text-xl font-heading font-bold">Programming Languages</h3>
            <div className="flex flex-wrap gap-2">
              {programmingLanguages.map((skill) => (
                <Badge key={skill} variant="secondary" className="font-mono text-xs">
                  {skill}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6 space-y-4">
            <h3 className="text-xl font-heading font-bold">Frameworks & Tools</h3>
            <div className="flex flex-wrap gap-2">
              {frameworksTools.map((skill) => (
                <Badge key={skill} variant="secondary" className="font-mono text-xs">
                  {skill}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6 space-y-4">
            <h3 className="text-xl font-heading font-bold">Languages</h3>
            <div className="space-y-3">
              {languages.map((lang) => (
                <div key={lang.language} className="flex justify-between items-center">
                  <span className="font-medium font-sans">{lang.language}</span>
                  <Badge variant="outline" className="font-sans text-xs">
                    {lang.level}
                  </Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
