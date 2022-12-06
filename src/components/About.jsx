import Icons from './Icons';

import React from 'react';

//import cardItem from './Cards/cardItem';
import CardItem from './Cards/CardItem';
import Skeleton from './Cards/SkeletonCards';

function About() {
  const [activeTab, SetActiveTab] = React.useState(0);
  const [workItems, setWorkItems] = React.useState([]);
  const [educationItems, setEducationItems] = React.useState([]);

  React.useEffect(() => {
    fetch('https://638c8f9feafd555746a8fe43.mockapi.io/educations')
      .then((res) => {
        return res.json();
      })
      .then((arr) => {
        setEducationItems(arr);
      });
  }, []);
  React.useEffect(() => {
    fetch('https://638c8f9feafd555746a8fe43.mockapi.io/works')
      .then((res) => {
        return res.json();
      })
      .then((arr) => {
        setWorkItems(arr);
      });
  }, []);

  return (
    <section className="about">
      <div className="about__wrapper">
        <section className="about__topBlock">
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
        </section>
        <section className="about__bottomBlock">
          <div className="about__body">
            <h1 className="about__title">Qualification</h1>
            <span className="about__label">My personal journey</span>
          </div>
          <div className="about__tabs">
            <button
              onClick={() => SetActiveTab(0)}
              className={activeTab === 0 ? 'about__btn-educat active' : 'about__btn-educat'}
            >
              <Icons
                name="educations"
                width="26"
                height="19"
                color={activeTab === 0 ? '#5671A6' : ''}
                className="about__btn-icon"
              />
              <span>Education</span>
            </button>
            <button
              onClick={() => SetActiveTab(1)}
              className={activeTab === 1 ? 'about__btn-work active' : 'about__btn-work'}
            >
              <Icons
                name="work"
                width="26"
                height="19"
                color={activeTab === 1 ? '#5671A6' : ''}
                className="about__btn-icon"
              />
              <span>Work</span>
            </button>
          </div>
          <div className="about__line"></div>
          <section className="about__qualification-cards">
            {activeTab === 0
              ? educationItems.map((obj) => <CardItem key={obj.id} {...obj} />)
              : workItems.map((obj) => <CardItem key={obj.id} {...obj} />)}
          </section>
        </section>
      </div>
    </section>
  );
}

export default About;
