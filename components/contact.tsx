"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, Github, Linkedin, MapPin, Clock, Globe, Users, Share2 } from "lucide-react"
import Link from "next/link"

export function Contact() {
  const handleEmailClick = () => {
    const subject = encodeURIComponent("Contact from Portfolio Website")
    window.open(`mailto:kalergisalex@gmail.com?subject=${subject}&body=${body}`, "_blank")
  }

  return (
    <section id="contact" className="py-24">
      <div className="container space-y-16">
        <div className="space-y-6">
          <h2 className="text-4xl md:text-5xl font-bold">Get In Touch</h2>
          <p className="text-xl text-muted-foreground max-w-3xl">Want to work together?</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <Card className="border bg-card/50 backdrop-blur-sm">
            <CardContent className="p-8 space-y-8">
              <div className="flex items-center gap-4">
                <div className="bg-muted p-3 rounded-lg">
                  <Mail className="h-6 w-6 text-foreground" />
                </div>
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold">Email Me</h3>
                  <p className="text-muted-foreground">Let's start a conversation</p>
                </div>
              </div>
              <div className="space-y-4 pl-2">
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-sm text-muted-foreground">
                    <Clock className="h-4 w-4 text-foreground" />
                    <span>Usually respond within 24 hours</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-muted-foreground">
                    <Users className="h-4 w-4 text-foreground" />
                    <span>Open to freelance opportunities</span>
                  </div>
                </div>
                <div className="pt-4">
                  <Button className="w-full sm:w-auto px-8" onClick={handleEmailClick}>
                    Send Message
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border bg-card/50 backdrop-blur-sm">
            <CardContent className="p-8 space-y-8">
              <div className="flex items-center gap-4">
                <div className="bg-muted p-3 rounded-lg">
                  <Share2 className="h-6 w-6 text-foreground" />
                </div>
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold">Follow My Work</h3>
                  <p className="text-muted-foreground">Stay updated with my projects</p>
                </div>
              </div>
              <div className="space-y-6 pl-2">
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-sm text-muted-foreground">
                    <MapPin className="h-4 w-4 text-foreground" />
                    <span>Based in Athens, Greece</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-muted-foreground">
                    <Globe className="h-4 w-4 text-foreground" />
                    <span>Available for remote work worldwide</span>
                  </div>
                </div>
                <div className="pt-4">
                  <div className="grid grid-cols-2 gap-3">
                    <Button variant="outline" asChild>
                      <Link
                        href="https://github.com/alexkalergis"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center"
                      >
                        <Github className="h-4 w-4 mr-2" />
                        GitHub
                      </Link>
                    </Button>
                    <Button variant="outline" asChild>
                      <Link
                        href="https://www.linkedin.com/in/alexandros-kalergis/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center"
                      >
                        <Linkedin className="h-4 w-4 mr-2" />
                        LinkedIn
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
