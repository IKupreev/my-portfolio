import Icons from './Icons';

import React from 'react';

//import cardItem from './Cards/cardItem';
import QualificationCards from './Cards/QualificationCards';
import Skeleton from './Cards/SkeletonCards';
import AboutCards from './Cards/AboutCards';

function About() {
  const [activeTab, SetActiveTab] = React.useState(0);
  const [workItems, setWorkItems] = React.useState([]);
  const [educationItems, setEducationItems] = React.useState([]);
  let [minData, setminData] = React.useState(0);
  let [maxData, setmaxData] = React.useState(0);

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
        let dataStart = [];
        let dataEnd = [];
        for (let data in arr) {
          dataStart[data] = arr[data].dataStart;
          dataEnd[data] = arr[data].dataEnd;
        }
        setminData(Math.min.apply(null, dataStart));
        setmaxData(Math.max.apply(null, dataEnd));
      });
  }, [maxData, minData]);

  let countWorked = workItems.length;

  return (
    <section className="about">
      <div className="about__wrapper">
        <section className="about__topBlock">
          <h1 className="about__title">About</h1>
          <p className="about__description">
            Web developer, with extensive knowledge and years of experience, working in web
            technologies and UI/UX design, delivering quality work.
          </p>
          <section className="about__about-cards">
            <AboutCards countWorked={countWorked} minData={minData} maxData={maxData} />
          </section>
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
              ? educationItems.map((obj) => <QualificationCards key={obj.id} {...obj} />)
              : workItems.map((obj) => <QualificationCards key={obj.id} {...obj} />)}
          </section>
        </section>
      </div>
    </section>
  );
}

export default About;
