import SearchBar from "./SearchBar";
import Slider from "./Slider";
import "./css/hero.css";

export default function Hero() {
  return (
    <section className="hero">

      <div className="hero-bg"></div>

      <div className="hero-container">

        <SearchBar />

        <Slider />

      </div>

    </section>
  );
}