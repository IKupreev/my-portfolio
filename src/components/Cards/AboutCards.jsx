import React from 'react';

import Icons from '../Icons';

function AboutCards({ countWorked }) {
  return (
    <>
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
          <span className="about__count">{countWorked}</span>
        </div>
      </div>
    </>
  );
}

export default AboutCards;
