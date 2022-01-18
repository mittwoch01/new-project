import React from 'react';

import Slide from '../page/Slide.js';
import MainBest from '../page/MainBest.js';
import MainSale from '../page/MainSale.js';
import MainAd from '../page/MainAd.js';
import MainPlus from '../page/MainPlus.js';
import MainInstagram from '../page/MainInstagram.js';

import '../style/Section.scss';

export default function Section() {
  return (
    <section id="mainBox">
      <Slide />
      <MainBest />
      <MainSale />
      <MainAd />
      <MainPlus />
      <MainInstagram />
    </section>
  )
}
