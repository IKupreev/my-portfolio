import Icons from './Icons';

import React from 'react';

function About() {
  return (
    <section className="about">
      <div className="about__wrapper">
        <h1 className="about__title">About</h1>
        <p className="about__description">
          Web developer, with extensive knowledge and years of experience, working in web
          technologies and UI/UX design, delivering quality work.
        </p>
        <div className="about__about-cards">
          <div className="about__card">
            <Icons name="exp" width="17" height="20" className="about__icon" />
            <div className="about__info">
              <span className="about__subtitle">Years experience</span>
              <span className="about__count">6</span>
            </div>
          </div>
          <div className="about__card">
            <Icons name="proj" width="20" height="20" className="about__icon" />
            <div className="about__info">
              <span className="about__subtitle">Completed projects</span>
              <span className="about__count">20</span>
            </div>
          </div>
          <div className="about__card">
            <Icons name="companies" width="20" height="19" className="about__icon" />
            <div className="about__info">
              <span className="about__subtitle">Companies worked</span>
              <span className="about__count">4</span>
            </div>
          </div>
        </div>
        <div className="about__body">
          <h1 className="about__title">Qualification</h1>
          <span className="about__label">My personal journey</span>
        </div>
        <div className="about__tabs">
          <button className="about__btn-educat">
            <Icons name="educations" width="26" height="19" className="about__btn-icon" />
            <span>Education</span>
          </button>
          <button className="about__btn-work">
            <Icons name="work" width="26" height="19" className="about__btn-icon" />
            <span>Work</span>
          </button>
        </div>
        <div className="about__line"></div>
        <section className="about__qualification-cards">
          <main className="about__item">
            <div className="about__specialization">Computer Engineer</div>
            <div className="about__educational-institution">Peru - University</div>
            <span className="about__data">2009 - 2014</span>
          </main>
          <main className="about__item">
            <div className="about__specialization">Web Design</div>
            <div className="about__educational-institution">Spain - Institute</div>
            <span className="about__data">2014 - 2017</span>
          </main>
          <main className="about__item">
            <div className="about__specialization">Web Development</div>
            <div className="about__educational-institution">Peru - Institute</div>
            <span className="about__data">2017 - 2019</span>
          </main>
          <main className="about__item">
            <div className="about__specialization">Master UI / UX</div>
            <div className="about__educational-institution">Peru - Institute</div>
            <span className="about__data">2019 - 2021</span>
          </main>
        </section>
      </div>
    </section>
  );
}

export default About;
