"use client";

import { useState } from "react";
import { ExternalLink, ChevronDown, ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";
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
  const [expandedItems, setExpandedItems] = useState<number[]>([]);

  const toggleExpanded = (index: number) => {
    setExpandedItems((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  return (
    <section id="experience" className="experience">
      <div className="container experience__container">
        <div className="experience__header">
          <h2 className="experience__title">Experience</h2>
          <p className="experience__subtitle">
            My professional journey and career highlights.
          </p>
        </div>

        <div className="experience__list">
          {companies.map((company, index, arr) => {
            const isExpanded = expandedItems.includes(index);

            return (
              <div key={index} className="experience__item">
                <div className="experience__item-header">
                  {/* Fixed container size for all logos */}
                  <div className="experience__logo-container">
                    <div className="experience__logo-wrapper">
                      <Image
                        src={
                          company.logo ||
                          "/placeholder.svg?width=96&height=96&query=Company+Logo"
                        }
                        alt={`${company.name} logo`}
                        fill
                        className="object-contain"
                      />
                    </div>
                  </div>
                  <div className="experience__content">
                    <div className="experience__content-header">
                      <div className="experience__content-left">
                        <h3 className="experience__role">{company.role}</h3>
                        <div className="experience__company-wrapper">
                          {company.website !== "#" ? (
                            <Link
                              href={company.website}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="experience__company-link"
                            >
                              {company.name}
                              <ExternalLink className="h-4 w-4" />
                            </Link>
                          ) : (
                            <span className="experience__company-name">
                              {company.name}
                            </span>
                          )}
                        </div>
                      </div>
                      <div className="experience__content-right">
                        <span className="experience__date">
                          {company.startDate} - {company.endDate}
                        </span>
                        <span className="experience__location">
                          {company.location}
                        </span>
                      </div>
                    </div>

                    {/* View More Button */}
                    <div className="experience__toggle">
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => toggleExpanded(index)}
                        className="experience__toggle-button"
                      >
                        <span>View {isExpanded ? "less" : "more"}</span>
                        {isExpanded ? (
                          <ChevronUp className="h-4 w-4 ml-1" />
                        ) : (
                          <ChevronDown className="h-4 w-4 ml-1" />
                        )}
                      </Button>
                    </div>
                  </div>
                </div>

                {/* Expandable Description */}
                {isExpanded && (
                  <ul className="experience__description">
                    {company.description.map((item, idx) => (
                      <li key={idx} className="experience__description-item">
                        <span className="experience__bullet" />
                        <span className="experience__description-text">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
