import React from 'react';

import Icons from '../Icons';

import styles from './ExpirienceBlock.module.scss';

const ExpirienceBlock = ({ nameIcon, title, progress }) => {
  return (
    <div className={styles.skillsBlock}>
      <div className={styles.block}>
        <Icons name={nameIcon} width="27.8" height="30" className={styles.icon} />
        <div className={styles.info}>
          <h3>{title}</h3>
          <label>{progress}%</label>
        </div>
      </div>
      <div
        className={styles.line}
        style={{
          background: '#84B1DB',
          height: `${progress}%`,
        }}
      ></div>
    </div>
  );
};
export default ExpirienceBlock;
