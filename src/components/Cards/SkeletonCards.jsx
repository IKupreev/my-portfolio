import React from 'react';
import ContentLoader from 'react-content-loader';

const MyLoader = () => (
  <ContentLoader
    className="about__item"
    speed={2}
    width={200}
    height={152}
    viewBox="0 0 200 152"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <rect x="3" y="3" rx="8" ry="8" width="200" height="145" />
  </ContentLoader>
);

export default MyLoader;
