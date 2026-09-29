import '../styles/footer.css';
import logo from '../assets/logo-footer.png';
import arrowLoc from '../assets/arrow-location.svg';
import arrowSubmit from '../assets/arrow-submit.svg';
import instagram from '../assets/social-instagram.svg';
import youtube from '../assets/social-youtube.svg';
import linkedin from '../assets/social-linkedin.svg';
import smA from '../assets/sm-a.svg';
import smB from '../assets/sm-b.svg';
import smC from '../assets/sm-c.svg';
import brandPremium from '../assets/brand-premium.svg';
import brandDesign from '../assets/brand-design.svg';

const columns = [
  { title: 'Menu', items: ['Home', 'News', 'About us'] },
  { title: 'News', items: ['Latest News', 'Blog', 'Events'] },
  { title: 'About us', items: ['Our Story', 'Our Mission', 'Our Goal'] },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__top">
        <img className="footer__logo" src={logo} alt="TLines Creativity Group" />

        <div className="footer__brands">
          <div className="brand brand--green">
            <div className="brand__sm">
              <img className="brand__sm-a" src={smA} alt="" />
              <img className="brand__sm-b" src={smB} alt="" />
              <img className="brand__sm-c" src={smC} alt="" />
            </div>
          </div>
          <div className="brand">
            <img className="brand__img" src={brandPremium} alt="T Lines Premium Store fitouts" />
          </div>
          <div className="brand">
            <img className="brand__img" src={brandDesign} alt="T Lines Design & Build" />
          </div>
        </div>
      </div>

      <div className="footer__main">
        <div className="footer__left">
          <h2 className="footer__newsletter">
            Subscribe to<br />our <b>Newsletter</b>.
          </h2>

          <button className="footer__submit" type="button">
            <span>Submit your email</span>
            <img src={arrowSubmit} alt="" />
          </button>

          <div className="footer__follow">
            <p className="label">Follow us on</p>
            <div className="footer__social">
              <img src={instagram} alt="Instagram" />
              <img src={youtube} alt="YouTube" />
              <img src={linkedin} alt="LinkedIn" />
            </div>
          </div>
        </div>

        <div className="footer__right">
          <div className="footer__menus">
            {columns.map((c) => (
              <div className="footer__col" key={c.title}>
                <p className="label">{c.title}</p>
                <div className="footer__links">
                  {c.items.map((i) => <a key={i} href="#">{i}</a>)}
                </div>
              </div>
            ))}
          </div>

          <div className="footer__contact">
            <div className="footer__contact-col">
              <p className="label">Locations</p>
              <a className="footer__location" href="#">
                <span>Atalanta, Georgia (GA)</span>
                <img src={arrowLoc} alt="" />
              </a>
            </div>
            <div className="footer__contact-col">
              <p className="label">Call us</p>
              <a className="footer__phone" href="tel:8006603772">800-660-3772</a>
            </div>
          </div>
        </div>
      </div>

      <div className="footer__bottom">
        <p className="footer__copy">All rights are reserved for TLines 2026</p>
        <p className="footer__copy footer__copy--right">All rights are reserved for TLines 2026</p>
      </div>
    </footer>
  );
}
