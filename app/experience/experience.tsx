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
    website: "https://mameds.gr",
  },
  {
    name: "Ainigma Technologies",
    logo: "/images/Experience/AinigmaTechnologies.png",
    role: "Software Engineer | Product Designer",
    startDate: "Jan 2025",
    endDate: "Present",
    location: "Athens, Greece",
    website: "https://ainigma.tech",
  },
  {
    name: "Family Business",
    logo: "/images/Experience/FamilyBusiness.png",
    role: "Assistant Manager",
    startDate: "Feb 2024",
    endDate: "Jul 2024",
    location: "Volos, Greece",
    website: "#",
  },
  {
    name: "BuildUpLabs",
    logo: "/images/Experience/BuildUpLabs.png",
    role: "Product Design Intern",
    startDate: "Oct 2023",
    endDate: "Jan 2024",
    location: "Lisbon, Portugal",
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
                          <ExternalLink className="h-4 w-4" />
                        </Link>
                      ) : (
                        <span className="experience__company-name">{company.name}</span>
                      )}
                      <span className="experience__location">{company.location}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
