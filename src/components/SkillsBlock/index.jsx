import React from 'react';

import Icons from '../Icons';

import styles from './ExpirienceBlock.module.scss';

const ExpirienceBlock = ({ nameIcon, title, progress }) => {
  return (
    <div className={styles.skillsBlock}>
      <Icons name={nameIcon} width="27.8" height="30" className={styles.icon} />
      <div className={styles.info}>
        <h3>{title}</h3>
        <label>{progress}%</label>
      </div>
      <Icons name="wave" width="170" height="17" color="#84B1DB" />
      <div className={styles.line} style={{ background: '#84B1DB' }}></div>
    </div>
  );
};
export default ExpirienceBlock;
