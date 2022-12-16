import React from 'react';

import ExperienceBlock from '../components/SkillsBlock';

const Skills = () => {
  const [frontend, setfrontend] = React.useState([]);
  const [designer, setDesigner] = React.useState([]);

  React.useEffect(() => {
    fetch('https://638c8f9feafd555746a8fe43.mockapi.io/frontend')
      .then((res) => {
        return res.json();
      })
      .then((arr) => {
        setfrontend(arr);
      });
  }, []);
  React.useEffect(() => {
    fetch('https://638c8f9feafd555746a8fe43.mockapi.io/Designer')
      .then((res) => {
        return res.json();
      })
      .then((arr) => {
        setDesigner(arr);
      });
  }, []);
  return (
    <main className="skills">
      <div className="skills__wrapper">
        <h1 className="skills__title">Skills</h1>
        <h1 className="skills__subtitle">My technical level</h1>
        <div className="skills__container">
          <section className="skills__oneBlock">
            <h2 className="skills__block-title">Frontend Developer</h2>
            <label className="skills__subtitle">More than 4 years</label>
            <div className="skills__experience">
              {frontend.map((obj) => (
                <ExperienceBlock key={obj.id} {...obj} />
              ))}
            </div>
          </section>
          <section className="skills__twoBlock">
            <h1 className="skills__block-title">Designer</h1>
            <span className="skills__subtitle">More than 2 years</span>
            <div className="skills__experience">
              {designer.map((obj) => (
                <ExperienceBlock key={obj.id} {...obj} />
              ))}
            </div>
          </section>
        </div>
      </div>
    </main>
  );
};

export default Skills;
