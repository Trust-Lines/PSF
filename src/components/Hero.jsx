import '../styles/hero.css';
import bg from '../assets/hero-bg.png';
import fox from '../assets/fox.png';

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero__bg"><img src={bg} alt="" /></div>
      <div className="hero__overlay" />
      <h1 className="hero__title">Coming soon..</h1>
      <p className="hero__subtitle">This website is under construction</p>
      <img className="hero__fox" src={fox} alt="" />
    </section>
  );
}
