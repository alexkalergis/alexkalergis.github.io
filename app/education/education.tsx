"use client";

import Image from "next/image";
import "./education.scss";

export function Education() {
  return (
    <section id="education" className="education" data-section>
      <div className="education__container">
        <div className="education__left">
          <span className="education__num" aria-hidden="true">03</span>
          <h2 className="education__title">Education</h2>
        </div>

        <div className="education__right">
          {/* ── Degree ────────────────────────────────────────────────────── */}
          <div className="education__group">
            <span className="education__group-label">University Degree</span>
            <div className="education__flat-list">
              <div className="education__flat-item">
                <div className="education__flat-logo">
                  <Image
                    src="/images/Education/UniversityOfPatras.png"
                    alt="University of Patras logo"
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="education__flat-body">
                  <span className="education__flat-org">University of Patras, Greece </span>
                  <span className="education__flat-detail">Electrical &amp; Computer Engineering · 2018–2023</span>
                  <span className="education__flat-detail">Top 3% of class</span>
                </div>
              </div>
            </div>
          </div>

          {/* ── Certifications ────────────────────────────────────────────── */}
          <div className="education__group">
            <span className="education__group-label">Certifications</span>
            <div className="education__flat-list">
              <div className="education__flat-item">
                <div className="education__flat-logo">
                  <Image
                    src="/images/Education/IXDF.png"
                    alt="Interaction Design Foundation logo"
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="education__flat-body">
                  <span className="education__flat-org">Interaction Design Foundation</span>
                  <span className="education__flat-detail">
                    Human-Computer Interaction · Ongoing
                  </span>
                  <span className="education__flat-detail">
                    Design Thinking · Ongoing 
                  </span><span className="education__flat-detail">
                    User Experience · Ongoing
                  </span>
                </div>
              </div>

              <div className="education__flat-item">
                <div className="education__flat-logo">
                  <Image
                    src="/images/Education/UniversityOfPatras.png"
                    alt="University of Patras logo"
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="education__flat-body">
                  <span className="education__flat-org">University of Patras, Greece</span>
                  <span className="education__flat-detail">Interactive Fiction · 2022</span>
                </div>
              </div>
            </div>
          </div>

          {/* ── Awards ────────────────────────────────────────────────────── */}
          <div className="education__group">
            <span className="education__group-label">Awards</span>
            <div className="education__flat-list">
              <div className="education__flat-item">
                <div className="education__flat-logo">
                  <Image
                    src="/images/Education/AIHUB.png"
                    alt="AI HUB logo"
                    fill
                    className="oanabject-contain"
                  />
                </div>
                <div className="education__flat-body">
                  <span className="education__flat-org">Honorable Mention in AI</span>
                  <span className="education__flat-detail">
                    AI HUB · 2023
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
