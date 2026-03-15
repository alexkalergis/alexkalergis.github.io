"use client";

import { Github, Linkedin } from "lucide-react";
import Link from "next/link";
import "./contact.scss";

export function Contact() {
  const handleEmailClick = () => {
    const subject = encodeURIComponent("Contact from Portfolio Website");
    window.open(`mailto:kalergisalex@gmail.com?subject=${subject}`, "_blank");
  };

  return (
    <section id="contact" className="contact" data-section>
      <div className="contact__container">
        <div className="contact__left">
          <span className="contact__num" aria-hidden="true">05</span>
          <h2 className="contact__label">Contact</h2>
        </div>

        <div className="contact__right">
          <h2 className="contact__title">Let's work together.</h2>

          <div className="contact__body">
            <p className="contact__blurb">
              Open to new opportunities, reach out and let's talk.
            </p>

            <button
              className="contact__email"
              onClick={handleEmailClick}
              aria-label="Send email to Alex Kalergis"
            >
              kalergisalex@gmail.com
              <span className="contact__email-arrow" aria-hidden="true">↗</span>
            </button>

            <div className="contact__links">
              <Link
                href="https://github.com/alexkalergis"
                target="_blank"
                rel="noopener noreferrer"
                className="contact__link"
              >
                <Github className="h-4 w-4" />
                GitHub
              </Link>
              <span className="contact__sep" aria-hidden="true">·</span>
              <Link
                href="https://www.linkedin.com/in/alexandros-kalergis/"
                target="_blank"
                rel="noopener noreferrer"
                className="contact__link"
              >
                <Linkedin className="h-4 w-4" />
                LinkedIn
              </Link>
            </div>

            <p className="contact__meta">
              Athens, Greece&nbsp;&nbsp;·&nbsp;&nbsp;Available for remote work worldwide
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
