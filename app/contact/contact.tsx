"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Mail,
  Github,
  Linkedin,
  MapPin,
  Clock,
  Globe,
  Users,
  Share2,
} from "lucide-react";
import Link from "next/link";
import "./contact.scss";

export function Contact() {
  const handleEmailClick = () => {
    const subject = encodeURIComponent("Contact from Portfolio Website");
    // Removed the 'body' parameter to prevent pre-filled text
    window.open(`mailto:kalergisalex@gmail.com?subject=${subject}`, "_blank");
  };

  return (
    <section id="contact" className="contact">
      <div className="container contact__container">
        <div className="contact__header">
          <h2 className="contact__title">Get In Touch</h2>
          <p className="contact__subtitle">Want to work together?</p>
        </div>

        <div className="contact__grid">
          <Card className="contact__card">
            <CardContent className="contact__card-content">
              <div className="contact__card-header">
                <div className="contact__card-icon-wrapper">
                  <Mail className="h-6 w-6 text-foreground" />
                </div>
                <div>
                  <h3 className="contact__card-title">Email Me</h3>
                </div>
              </div>
              <div className="contact__card-body">
                <div className="contact__card-info">
                  <div className="contact__card-info-item">
                    <Clock className="h-4 w-4 text-foreground" />
                    <span>Usually respond within 24 hours</span>
                  </div>
                  <div className="contact__card-info-item">
                    <Users className="h-4 w-4 text-foreground" />
                    <span>Open to freelance opportunities</span>
                  </div>
                </div>
                <div className="contact__card-actions">
                  <Button
                    className="contact__button"
                    onClick={handleEmailClick}
                  >
                    Send Message
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="contact__card">
            <CardContent className="contact__card-content">
              <div className="contact__card-header">
                <div className="contact__card-icon-wrapper">
                  <Share2 className="h-6 w-6 text-foreground" />
                </div>
                <div>
                  <h3 className="contact__card-title">Follow My Work</h3>
                </div>
              </div>
              <div className="contact__card-body">
                <div className="contact__card-info">
                  <div className="contact__card-info-item">
                    <MapPin className="h-4 w-4 text-foreground" />
                    <span>Based in Athens, Greece</span>
                  </div>
                  <div className="contact__card-info-item">
                    <Globe className="h-4 w-4 text-foreground" />
                    <span>Available for remote work worldwide</span>
                  </div>
                </div>
                <div className="contact__card-actions">
                  <div className="contact__social-grid">
                    <Button variant="outline" asChild>
                      <Link
                        href="https://github.com/alexkalergis"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="contact__social-link"
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
                        className="contact__social-link"
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
  );
}
