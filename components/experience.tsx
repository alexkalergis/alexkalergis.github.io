import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ExternalLink } from "lucide-react"
import Link from "next/link"

export function Experience() {
  const experiences = [
    {
      id: 1,
      title: "Software Engineer",
      company: "Ainigma Technologies",
      companyUrl: "https://ainigma.tech",
      location: "Athens, Greece",
      period: "Jan 2025 - Present",
      description: ["Currently working as a Software Engineer at Ainigma Technologies."],
    },
    {
      id: 2,
      title: "IT & Operations Assistant Manager",
      company: "Family Business",
      companyUrl: null,
      location: "Volos, Greece",
      period: "Jan 2024 - Dec 2024",
      description: [
        "Supervised the digital presence of the business and managed IT requirements, ensuring optimal operation.",
        "Developed new ways to engage with customers, improving their overall experience which increased revenue by 23.8%.",
        "Gained understanding of business operations, budget allocation, expense distribution, and revenue management.",
      ],
    },
    {
      id: 3,
      title: "Product Design Intern",
      company: "BuildUpLabs",
      companyUrl: "https://builduplabs.com",
      location: "Lisbon, Portugal",
      period: "Oct 2023 - Jan 2024",
      description: [
        "Led the ideation, design and development of an AI digital product that suggests best business models using Figma.",
        "Developed a minimum viable product (MVP) using Retool and OpenAI API to ensure strategic objectives.",
        "Gained experience in digital product lifecycle, UX Design, coding, Agile methodologies, and collaboration skills.",
      ],
    },
  ]

  return (
    <section id="experience" className="container py-24 space-y-16">
      <div className="text-center space-y-4">
        <h2 className="text-3xl font-bold">Work Experience</h2>
        <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
          My professional journey and career highlights.
        </p>
      </div>

      <div className="space-y-8">
        {experiences.map((exp) => (
          <Card key={exp.id}>
            <CardContent className="p-6">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                <div>
                  <h3 className="text-xl font-bold">{exp.title}</h3>
                  {exp.companyUrl ? (
                    <Link
                      href={exp.companyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-lg hover:text-primary transition-colors inline-flex items-center gap-2"
                    >
                      {exp.company}
                      <ExternalLink className="h-4 w-4 text-primary" />
                    </Link>
                  ) : (
                    <p className="text-lg">{exp.company}</p>
                  )}
                  <p className="text-muted-foreground">{exp.location}</p>
                </div>
                <Badge className="md:self-start self-start md:mt-0 mt-2" variant="outline">
                  {exp.period}
                </Badge>
              </div>
              <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                {exp.description.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
