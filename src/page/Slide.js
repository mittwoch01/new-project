import React from 'react';
import '../style/Slide.scss';

export default function Slide() {
  return (
    <div id="mainSlideBox">
      <div className="slide_btn">
        <button type="button" className="next">다음</button>
        <button type="button" className="prev">이전</button>
      </div>
      <div className="slide_content">
        <ul>
          <li>01</li>
          <li>02</li>
          <li>03</li>
          <li>04</li>
        </ul>
      </div>
      <ul className="slider-dot">
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </div>
  )
}
