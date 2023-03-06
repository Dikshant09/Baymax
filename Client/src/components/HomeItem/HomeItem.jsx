import React from 'react'
import './HomeItem.scss';

const HomeItem = ({ item, index }) => {
  const { text, image, large } = item;

  return (
    <div className='homeItem-outer-container'>
      <div className='homeItem-container'>
        <div className={`homeItem-parent-container ${index % 2 === 0 ? 'flex-reverse' : ''} `}>
          <img src={image} className={`home-item-image ${large ? 'image-large' : ''}`} alt="" />
          <div className={`home-item-text ${index % 2 === 0 ? 'flex-reverse' : ''}`}>
            <div className='home-text'>{text}</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomeItem