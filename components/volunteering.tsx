import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Heart } from "lucide-react"

export function Volunteering() {
  const volunteering = [
    {
      id: 1,
      organization: "IEEE Organization",
      role: "Academic Team Member",
      period: "2019 - 2020",
      description: "Contributed to academic initiatives and events as part of the IEEE student chapter.",
    },
  ]

  return (
    <section id="volunteering" className="container py-24 space-y-16">
      <div className="text-center space-y-4">
        <h2 className="text-3xl font-bold">Volunteering</h2>
        <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
          My contributions to organizations and communities.
        </p>
      </div>

      <div className="space-y-8">
        {volunteering.map((vol) => (
          <Card key={vol.id}>
            <CardContent className="p-6">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Heart className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">{vol.organization}</h3>
                    <p className="text-lg">{vol.role}</p>
                  </div>
                </div>
                <Badge className="md:self-start self-start md:mt-0 mt-2" variant="outline">
                  {vol.period}
                </Badge>
              </div>
              <p className="text-muted-foreground">{vol.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
