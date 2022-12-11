import React from 'react'

import Icons from '../Icons';

const ExpirienceBlock = ({nameIcon, title, progress}) => {
  return (
    <div>
        <Icons
          name={nameIcon}
          width="27.8"
          height="30"
          color='#383838'
          className="icon"
        />
        <h3>{title}</h3>
        <label>{progress}%</label>
    </div>
  )
}
export default ExpirienceBlock;