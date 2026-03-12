"use client";

import { ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import "./experience.scss";

const companies = [
  {
    name: "maMEDS",
    logo: "/images/Experience/maMEDS.png",
    role: "Software Engineer | Product Designer",
    startDate: "Jul 2025",
    endDate: "Present",
    location: "Athens, Greece",
    description: [
      "Led the Product Design of maMEDS, using Figma for user flows and UI prototypes.",
      "Maintained Frontend features using React and React Native, contributing to a responsive and accessible UX.",
      "Assisted in the design and setup of the company's website using Figma and React.",
      "Collaborated with cross-functional teams on product strategy, design systems, and feature planning.",
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
      "Designed the UX/UI for an EU-funded application, mapping user journeys and creating prototypes in Figma.",
      "Led the Product Design for a cross-platform healthcare app, utilizing Figma for user flows and UI prototypes.",
      "Maintained Frontend features using React and React Native, contributing to a responsive and accessible UX.",
      "Assisted in the design and setup of the company's website using Figma and WordPress.",
    ],
    website: "https://ainigma.tech",
  },
  {
    name: "Family Business",
    logo: "/images/Experience/FamilyBusiness.png",
    role: "IT & Assistant Manager",
    startDate: "Jan 2024",
    endDate: "Dec 2024",
    location: "Volos, Greece",
    description: [
      "Supervised the digital presence of our family business and managed IT requirements, ensuring optimal operation.",
      "Introduced new customer engagement strategies, improving experience and increasing revenue by 23.8%.",
      "Assisted in the strategic business's successful transition, gaining experience in exit planning.",
      "Gained understanding of business operations, budget allocation, expense distribution and revenue management.",
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
      "Led the ideation and design of an AI digital product that suggests best business models using Figma.",
      "Developed a minimum viable product (MVP) using Retool and OpenAI API to ensure strategic objectives.",
      "Gained experience in digital product lifecycle, UX Design, coding, Agile methodologies, and collaboration skills.",
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
                <div className="experience__item-left">
                  <span className="experience__date">
                    {company.startDate}<br />{company.endDate}
                  </span>
                  <span className="experience__location">{company.location}</span>
                </div>

                <div className="experience__item-right">
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
                      <h3 className="experience__role">{company.role}</h3>
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
                    </div>
                  </div>

                  <ul className="experience__description">
                    {company.description.map((item, idx) => (
                      <li key={idx} className="experience__description-item">
                        <span className="experience__bullet" />
                        <span className="experience__description-text">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
