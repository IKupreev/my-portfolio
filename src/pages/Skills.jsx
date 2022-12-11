import React from 'react';

import ExperienceBlock from '../components/SkillsBlock'

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
  <section className="skills">
    <div className="skills__wrapper">
      <h1 className="skills__title">Skills</h1>
      <h1 className="skills__subtitle">My technical level</h1>
        <section className="skills__oneBlock">
          <h2 className="skills__block-title">Frontend Developer</h2>
          <label className="skills__label">
            More than 4 years
          </label>  
          <div className='sliils__experience'>
            <div className='slills__item'>
              
            </div>
          </div>  
        </section>
        <section className="skills__twoBlock">
          <h1 className="skills__block-title">Designer</h1>
          <span className="skills__label">More than 2 years</span>
          <div className='sliils__experience'>

          </div>
        </section>
    </div>
  </section>
);
}

export default Skills;
