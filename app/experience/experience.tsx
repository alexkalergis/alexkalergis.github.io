"use client";

import { ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import "./experience.scss";

const companies = [
  {
    name: "maMEDS",
    logo: "/images/Experience/maMEDS.png",
    role: "Software Engineer | Lead Product Designer",
    startDate: "Jul 2025",
    endDate: "Present",
    location: "Athens, Greece",
    description: [
      "Led the Product Design of maMEDS platform, user flows and UI prototypes.",
      "Maintained Frontend features, contributing to a responsive and accessible UX.",
      "Collaborated with cross-functional teams on product strategy and feature planning.",
    ],
    website: "https://mameds.gr",
  },
  {
    name: "Ainigma Technologies",
    logo: "/images/Experience/AinigmaTechnologies.png",
    role: "Software Engineer | Product Designer",
    startDate: "Jan 2025",
    endDate: "Present",
    location: "Athens, Greece",
    description: [
      "Designed the UX/UI for multiple mobile and web applications for EU-funded programs.",
      "Designed a product that converts doctor–patient conversations into clinical notes.",
      "Assisted in the design and setup of the company's website.",
    ],
    website: "https://ainigma.tech",
  },
  {
    name: "Family Business",
    logo: "/images/Experience/FamilyBusiness.png",
    role: "Assistant Manager",
    startDate: "Feb 2024",
    endDate: "Jul 2024",
    location: "Volos, Greece",
    description: [
      "Introduced new customer engagement strategies, improving overall customer experience.",
      "Assisted in the strategic business's successful exit planning.",
      "Gained experience of business operations, budget allocation and revenue management.",
    ],
    website: "#",
  },
  {
    name: "BuildUpLabs",
    logo: "/images/Experience/BuildUpLabs.png",
    role: "Product Design Intern",
    startDate: "Oct 2023",
    endDate: "Jan 2024",
    location: "Lisbon, Portugal",
    description: [
      "Led the design of a product that suggests business models for early-stage startups.",
      "Developed a minimum viable product using Retool to ensure strategic objectives.",
      "Gained experience in product lifecycle, UX Design, coding and collaboration skills.",
    ],
    website: "https://builduplabs.com",
  },
];

export function Experience() {
  return (
    <section id="experience" className="experience" data-section>
      <div className="experience__container">
        <div className="experience__left">
          <span className="experience__num" aria-hidden="true">01</span>
          <h2 className="experience__title">Experience</h2>
        </div>

        <div className="experience__right">
          <div className="experience__list">
            {companies.map((company) => (
              <div key={company.name} className="experience__item">
                <div className="experience__item-top">
                  <div className="experience__logo-wrapper">
                    <Image
                      src={company.logo}
                      alt={`${company.name} logo`}
                      fill
                      className="object-contain"
                    />
                  </div>
                  <div className="experience__item-info">
                    <div className="experience__item-row">
                      <h3 className="experience__role">{company.role}</h3>
                      <span className="experience__date">{company.startDate} — {company.endDate}</span>
                    </div>
                    <div className="experience__item-row">
                      {company.website !== "#" ? (
                        <Link
                          href={company.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="experience__company-link"
                        >
                          {company.name}
                          <ExternalLink className="h-3 w-3" />
                        </Link>
                      ) : (
                        <span className="experience__company-name">{company.name}</span>
                      )}
                      <span className="experience__location">{company.location}</span>
                    </div>
                  </div>
                </div>

                <ul className="experience__description experience__description--indented">
                  {company.description.map((item, idx) => (
                    <li key={idx} className="experience__description-item">
                      <span className="experience__bullet" />
                      <span className="experience__description-text">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
