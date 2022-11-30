import React from 'react';

import Icons from './Icons';

function Qualifications({ specilization, education, data }) {
  return (
    <main className="about__item">
      <div className="about__specialization">{specilization}</div>
      <div className="about__educational-institution">{education}</div>
      <Icons name="calendar" width="15" height="16" className="about__calendar-icon" />
      <span className="about__data">{data}</span>
    </main>
  );
}

export default Qualifications;
