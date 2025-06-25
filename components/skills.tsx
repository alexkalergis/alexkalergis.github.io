import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

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

export function Skills() {
  return (
    <section id="skills" className="container py-24 space-y-16">
      <div className="text-center space-y-4">
        <h2 className="text-3xl md:text-4xl font-bold">My Skills</h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          A combination of technical expertise and language skills that allows me to create comprehensive solutions.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        <Card className="border bg-card/50 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-xl">Programming Languages</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex flex-wrap gap-2">
              {programmingLanguages.map((skill) => (
                <Badge key={skill} variant="secondary" className="font-mono text-xs px-2 py-0.5">
                  {skill}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
        <Card className="border bg-card/50 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-xl">Frameworks & Tools</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex flex-wrap gap-2">
              {frameworksTools.map((skill) => (
                <Badge key={skill} variant="secondary" className="font-mono text-xs px-2 py-0.5">
                  {skill}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
        <Card className="border bg-card/50 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-xl">Languages</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {languages.map((lang) => (
              <div key={lang.language} className="flex justify-between items-center text-sm">
                <span className="font-medium">{lang.language}</span>
                <Badge variant="outline" className="text-xs px-2 py-0.5">
                  {lang.level}
                </Badge>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
