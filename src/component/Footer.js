import '../style/Footer.scss';
import FootGnb from '../page/FootGnb.js';
import FootAddress from '../page/FootAddress.js';

export default function Footer() {
  return (
    <footer id="footBox">
        <h2>addmiles</h2>
        <FootGnb />
        <FootAddress />
    </footer>
  )
}
