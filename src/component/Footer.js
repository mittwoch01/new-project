import FootGnb from '../page/FootGnb.js';
import FootAddress from '../page/FootAddress.js';

import '../style/Footer.scss';

export default function Footer() {
  return (
    <footer id="footBox">
        <h2>addmiles</h2>
        <FootGnb />
        <FootAddress />
    </footer>
  )
}
