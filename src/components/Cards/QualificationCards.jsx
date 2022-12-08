import React from 'react';

import Icons from '../Icons';

function QualificationCards({ specilization, location, dataStart, dataEnd }) {
  return (
    <main className="about__item">
      <div className="about__specialization">{specilization}</div>
      <div className="about__location">{location}</div>
      <Icons name="calendar" width="15" height="16" className="about__calendar-icon" />
      <span className="about__data">
        {dataStart} - {dataEnd}
      </span>
    </main>
  );
}

export default QualificationCards;
