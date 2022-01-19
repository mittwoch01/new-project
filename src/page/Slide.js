import React from 'react';
import '../style/Slide.scss';

export default function Slide() {
  return (
    <div id="mainSlideBox">
      <div className="slide_btn">
        <button type="button" className="left"></button>
        <button type="button" className="right"></button>
      </div>
      <div className="slide_content">

      </div>
      <ul className="slider-dot">
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </div>
  )
}
