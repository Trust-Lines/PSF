import '../styles/header.css';
const logo = '/assets/logo-header.svg';
const badge = '/assets/tshop-badge.svg';

export default function Header() {
  return (
    <header className="header">
      <div className="header__shape">
        <span className="header__cap header__cap--left" />
        <span className="header__mid" />
        <span className="header__cap header__cap--right" />
      </div>
      <a className="header__logo" href="#">
        <img src={logo} alt="T Lines Premium Store fitouts" />
      </a>
      <a className="header__shop" href="#">
        <img src={badge} alt="" />
        <span className="header__shop-text">
          <b>T Shop</b>
          <i>Online Store</i>
        </span>
      </a>
    </header>
  );
}
