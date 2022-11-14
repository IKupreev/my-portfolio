import Icons from './Icons';

import React from 'react';

function About() {
  return (
    <section class="about">
      <div class="about__wrapper">
        <h1 class="about__title">About</h1>
        <p class="about__description">
          Web developer, with extensive knowledge and years of experience, working in web
          technologies and UI/UX design, delivering quality work.
        </p>
        <div class="about__about-cards">
          <div class="about__card">
            <Icons name="exp" color="#383838" width="17" height="20" className="about__icon" />
            <div class="about__info">
              <span class="about__subtitle">Years experience</span>
              <span class="about__count">6</span>
            </div>
          </div>
          <div class="about__card">
            <Icons name="proj" color="#383838" width="20" height="20" className="about__icon" />
            <div class="about__info">
              <span class="about__subtitle">Completed projects</span>
              <span class="about__count">20</span>
            </div>
          </div>
          <div class="about__card">
            <Icons name="work" color="#383838" width="20" height="19" className="about__icon" />
            <div class="about__info">
              <span class="about__subtitle">Companies worked</span>
              <span class="about__count">4</span>
            </div>
          </div>
        </div>
        <div class="about__body">
          <h1 class="about__title">Qualification</h1>
          <span class="about__label">My personal journey</span>
        </div>
        <div class="about__tabs">
          <button class="about__btn-educat">Education</button>
          <button class="about__btn-work">Work</button>
        </div>
        <div class="about__line"></div>
        <section class="about__qualification-cards">
          <main class="about__item">
            <div class="about__specialization">Computer Engineer</div>
            <div class="about__educational-institution">Peru - University</div>
            <span class="about__data">2009 - 2014</span>
          </main>
          <main class="about__item">
            <div class="about__specialization">Web Design</div>
            <div class="about__educational-institution">Spain - Institute</div>
            <span class="about__data">2014 - 2017</span>
          </main>
          <main class="about__item">
            <div class="about__specialization">Web Development</div>
            <div class="about__educational-institution">Peru - Institute</div>
            <span class="about__data">2017 - 2019</span>
          </main>
          <main class="about__item">
            <div class="about__specialization">Master UI / UX</div>
            <div class="about__educational-institution">Peru - Institute</div>
            <span class="about__data">2019 - 2021</span>
          </main>
        </section>
      </div>
    </section>
  );
}

export default About;
