import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Quote } from "lucide-react"

export function Testimonials() {
  const testimonials = [
    {
      id: 1,
      content:
        "Alexandros is an exceptional senior engineer who consistently delivers high-quality solutions. His ability to architect scalable systems and mentor junior developers makes him an invaluable team member.",
      author: "Sarah Johnson",
      role: "Engineering Manager, TechCorp",
      avatar: "/placeholder.svg?height=100&width=100",
    },
    {
      id: 2,
      content:
        "Working with Alexandros on our microservices migration was transformative. His technical expertise and leadership skills helped us achieve a seamless transition with zero downtime.",
      author: "Michael Chen",
      role: "CTO, ScaleUp Inc",
      avatar: "/placeholder.svg?height=100&width=100",
    },
    {
      id: 3,
      content:
        "Alexandros brings a unique combination of technical depth and strategic thinking. His contributions to our platform architecture have been instrumental in our ability to scale efficiently.",
      author: "Emily Rodriguez",
      role: "VP of Engineering, DataFlow",
      avatar: "/placeholder.svg?height=100&width=100",
    },
  ]

  return (
    <section id="testimonials" className="container py-24 space-y-16">
      <div className="text-center space-y-4">
        <h2 className="text-3xl font-bold">What Colleagues Say</h2>
        <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
          Feedback from engineering leaders and team members I've worked with.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {testimonials.map((testimonial) => (
          <Card key={testimonial.id} className="relative">
            <CardContent className="p-6 pt-12">
              <div className="absolute -top-6 left-6 bg-primary text-primary-foreground p-3 rounded-full">
                <Quote className="h-6 w-6" />
              </div>
              <p className="text-muted-foreground mb-6">"{testimonial.content}"</p>
              <div className="flex items-center gap-4">
                <Avatar>
                  <AvatarImage src={testimonial.avatar || "/placeholder.svg"} alt={testimonial.author} />
                  <AvatarFallback>
                    {testimonial.author
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-medium">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
