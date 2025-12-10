"use client";

import "./about.scss";

export function About() {
  return (
    <section id="about" className="about">
      <div className="container about__container">
        <h2 className="about__title">About me</h2>
        <p className="about__subtitle">A few words about me.</p>
        <div className="about__content">
          <p className="about__text">
            My path into technology began with a Master's in Electrical &
            Computer Engineering from the University of Patras. My academic
            focus on Cyber-Physical Systems immersed me in the exciting realms
            of Artificial Intelligence, Machine Learning, and Human-Computer
            Interaction.
          </p>
        </div>
      </div>
    </section>
  );
}
