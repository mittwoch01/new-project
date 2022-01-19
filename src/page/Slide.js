import React from 'react';
import '../style/Slide.scss';

export default function Slide() {
  return (
    <div id="mainSlideBox">
      <div className="slider_area"></div>
      <div className="slide_button"></div>
      <ul className="slider-dot">
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </div>
  )
}
