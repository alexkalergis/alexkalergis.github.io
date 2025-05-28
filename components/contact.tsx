"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, MapPin, Phone } from "lucide-react"
import { useState } from "react"

export function Contact() {
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
    <section id="contact" className="container py-24 space-y-16">
      <div className="text-center space-y-4">
        <h2 className="text-3xl font-bold">Get In Touch</h2>
        <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
          Have a project in mind or want to discuss potential opportunities? I'd love to hear from you.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <Card>
          <CardContent className="p-6 space-y-6">
            <h3 className="text-xl font-bold">Send Me a Message</h3>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div className="grid gap-4">
                <div>
                  <Input placeholder="Your Name" name="name" value={formData.name} onChange={handleChange} required />
                </div>
                <div>
                  <Input
                    type="email"
                    placeholder="Your Email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div>
                  <Input placeholder="Subject" name="subject" value={formData.subject} onChange={handleChange} />
                </div>
                <div>
                  <Textarea
                    placeholder="Your Message"
                    className="min-h-32"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <Button type="submit" className="w-full">
                Send Message
              </Button>
            </form>
          </CardContent>
        </Card>

        <div className="space-y-8">
          <Card>
            <CardContent className="p-6 flex items-start gap-4">
              <div className="bg-primary/10 p-3 rounded-full">
                <Mail className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h4 className="font-bold">Email</h4>
                <p className="text-muted-foreground">kalergisalex@gmail.com</p>
                <p className="text-muted-foreground">Available for new opportunities</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6 flex items-start gap-4">
              <div className="bg-primary/10 p-3 rounded-full">
                <Phone className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h4 className="font-bold">Phone</h4>
                <p className="text-muted-foreground">+30 6973739493</p>
                <p className="text-muted-foreground">Available for calls</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6 flex items-start gap-4">
              <div className="bg-primary/10 p-3 rounded-full">
                <MapPin className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h4 className="font-bold">Location</h4>
                <p className="text-muted-foreground">Greece</p>
                <p className="text-muted-foreground">Available for remote work</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
