import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function Skills() {
  const programmingLanguages = [
    "Python",
    "Matlab",
    "JavaScript",
    "Java",
    "Prolog",
    "HTML",
    "Arduino",
    "Verilog",
    "LaTeX",
  ]

  const frameworksTools = [
    "React",
    "React Native",
    "Git/GitHub",
    "Figma",
    "VS Code",
    "SourceTree",
    "PyCharm",
    "Arduino IDE",
    "Linux",
    "AutoCAD",
  ]

  const languages = [
    { language: "Greek", level: "Native Speaker" },
    { language: "English", level: "Proficient" },
  ]

  return (
    <section id="skills" className="container py-24 space-y-16">
      <div className="text-center space-y-4">
        <h2 className="text-3xl font-bold">My Skills</h2>
        <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
          A combination of technical expertise and language skills that allows me to create comprehensive solutions.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        <Card>
          <CardContent className="p-6 space-y-4">
            <h3 className="text-xl font-bold">Programming Languages</h3>
            <div className="flex flex-wrap gap-2">
              {programmingLanguages.map((skill) => (
                <Badge key={skill} variant="secondary">
                  {skill}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6 space-y-4">
            <h3 className="text-xl font-bold">Frameworks & Tools</h3>
            <div className="flex flex-wrap gap-2">
              {frameworksTools.map((skill) => (
                <Badge key={skill} variant="secondary">
                  {skill}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6 space-y-4">
            <h3 className="text-xl font-bold">Languages</h3>
            <div className="space-y-3">
              {languages.map((lang) => (
                <div key={lang.language} className="flex justify-between items-center">
                  <span className="font-medium">{lang.language}</span>
                  <Badge variant="outline">{lang.level}</Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
