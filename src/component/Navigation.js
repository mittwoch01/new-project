import React from 'react';
import '../style/Navigation.scss';

export default function Navigation() {
  return (
    <div id="nav">
      <div className="left">
        <ul className="gnb">
          <li><span>DR.마일스</span></li>
          <li><span>소개</span></li>
          <li><span>스토어</span></li>
          <li><span>건강더하기</span></li>
          <li><span>이벤트</span></li>
        </ul>
      </div>
      <div className="right">
        <div className="search_box"></div>
        <ul className="menu_box">
          <li>장바구니</li>
          <li>배송조회</li>
          <li>고객센터</li>
        </ul>
      </div>
    </div>
  )
}
