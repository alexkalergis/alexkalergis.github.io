"use client";

import Image from "next/image";
import "./education.scss";

export function Education() {
  return (
    <section id="education" className="education">
      <div className="container education__container">
        <div className="education__section">
          <div className="education__header">
            <h2 className="education__title">Education</h2>
            <p className="education__subtitle">
              My academic journey including degrees, certifications and
              achievements.
            </p>
          </div>

          <div className="education__item">
            <div className="education__item-header">
              <div className="education__item-logo">
                <Image
                  src="/images/Education/UniversityOfPatras.png"
                  alt="University of Patras logo"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="education__item-content">
                <div className="education__item-info">
                  <div className="education__item-title">
                    University of Patras, Greece
                  </div>
                  <div className="education__item-date">2018 - 2023</div>
                </div>
                <div className="education__item-subtitle">
                  Electrical & Computer Engineering
                </div>
                <div className="education__item-detail">
                  Thesis: Robot writing via Reinforcement Learning
                </div>
                <div className="education__item-detail">
                  Distinction: Top 3% of class
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="education__section">
          <div className="education__header">
            <h2 className="education__title">Certifications</h2>
            <p className="education__subtitle">
              My academic journey including degrees, certifications and
              achievements.
            </p>
          </div>

          <div className="education__items">
            <div className="education__item">
              <div className="education__item-header">
                <div className="education__item-logo">
                  <Image
                    src="/images/Education/IXDF.png"
                    alt="Interaction Design Foundation logo"
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="education__item-content">
                  <div className="education__item-info">
                    <div className="education__item-title">
                      Interaction Design Foundation
                    </div>
                    <div className="education__item-date">Present</div>
                  </div>

                  <div className="education__item-detail">
                    Human-Computer Interaction
                  </div>
                  <div className="education__item-detail">Design Thinking</div>
                  <div className="education__item-detail">User Experience</div>
                </div>
              </div>
            </div>

            <div className="education__item">
              <div className="education__item-header">
                <div className="education__item-logo">
                  <Image
                    src="/images/Education/UniversityOfPatras.png"
                    alt="University of Patras logo"
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="education__item-content">
                  <div className="education__item-info">
                    <div className="education__item-title">
                      University of Patras, Greece
                    </div>
                    <div className="education__item-date">2022</div>
                  </div>
                  <div className="education__item-detail">
                    Interactive Fiction
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="education__section">
          <div className="education__header">
            <h2 className="education__title">Awards</h2>
            <p className="education__subtitle">
              My academic journey including degrees, certifications and
              achievements.
            </p>
          </div>

          <div className="education__item">
            <div className="education__item-header">
              <div className="education__item-logo">
                <Image
                  src="/images/Education/AIHUB.png"
                  alt="Award logo"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="education__item-content">
                <div className="education__item-info">
                  <div className="education__item-title">
                    Honorable Mention in AI
                  </div>
                  <div className="education__item-date">2023</div>
                </div>
                <div className="education__item-detail">
                  AI HUB, University of Patras
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
