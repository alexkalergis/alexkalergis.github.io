"use client"

import type React from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, MapPin, Phone, ArrowLeft, ExternalLink } from "lucide-react"
import { useState } from "react"
import Link from "next/link"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // Create mailto link with form data
    const subject = encodeURIComponent(formData.subject || "Contact from Portfolio Website")
    const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`)

    // Open email client
    window.location.href = `mailto:kalergisalex@gmail.com?subject=${subject}&body=${body}`
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container py-24 space-y-16">
        <div className="flex items-center gap-4 mb-8">
          <Button variant="ghost" size="icon" asChild>
            <Link href="/" className="inline-flex items-center gap-2">
              <ArrowLeft className="h-5 w-5" />
            </Link>
          </Button>
          <div>
            <h1 className="text-4xl font-bold">Get In Touch</h1>
            <p className="text-muted-foreground text-lg mt-2">
              Have a project in mind or want to discuss potential opportunities? I'd love to hear from you.
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <Card>
            <CardContent className="p-8 space-y-6">
              <h2 className="text-2xl font-bold">Send Me a Message</h2>
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Your Name
                    </label>
                    <Input
                      id="name"
                      placeholder="John Doe"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Your Email
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="john@example.com"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-2">
                    Subject
                  </label>
                  <Input
                    id="subject"
                    placeholder="Project Collaboration"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Your Message
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Tell me about your project or opportunity..."
                    className="min-h-32"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                </div>
                <Button type="submit" className="w-full" size="lg">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          <div className="space-y-8">
            <Card>
              <CardContent className="p-6 flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-full flex-shrink-0">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-lg">Email</h3>
                  <Link
                    href="mailto:kalergisalex@gmail.com"
                    className="text-muted-foreground hover:text-primary transition-colors inline-flex items-center gap-1"
                  >
                    kalergisalex@gmail.com
                    <ExternalLink className="h-3 w-3 text-primary" />
                  </Link>
                  <p className="text-muted-foreground text-sm">Available for new opportunities</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-full flex-shrink-0">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-lg">Phone</h3>
                  <Link
                    href="tel:+306973739493"
                    className="text-muted-foreground hover:text-primary transition-colors inline-flex items-center gap-1"
                  >
                    +30 6973739493
                    <ExternalLink className="h-3 w-3 text-primary" />
                  </Link>
                  <p className="text-muted-foreground text-sm">Available for calls</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-full flex-shrink-0">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-lg">Location</h3>
                  <p className="text-muted-foreground">Greece</p>
                  <p className="text-muted-foreground text-sm">Available for remote work</p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-primary/5">
              <CardContent className="p-6">
                <h3 className="font-bold text-lg mb-3">Let's Connect</h3>
                <p className="text-muted-foreground mb-4">
                  I'm always interested in discussing new opportunities, collaborating on interesting projects, or just
                  having a conversation about technology and design.
                </p>
                <div className="space-y-2 text-sm">
                  <p>
                    <span className="font-medium">Response Time:</span> Usually within 24 hours
                  </p>
                  <p>
                    <span className="font-medium">Best Time to Call:</span> 9 AM - 6 PM (EET)
                  </p>
                  <p>
                    <span className="font-medium">Languages:</span> Greek (Native), English (Proficient)
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
