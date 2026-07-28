import { useEffect, useState } from "react";
import { slides } from "../data/slides";
import "./css/slider.css";

export default function Slider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 2000);

    return () => clearTimeout(timer);
  }, [current]);

  return (
    <section className="slider">

      <div className="slider-content">

        <div className="slider-text">
          <h1>{slides[current].title}</h1>

          <p>{slides[current].subtitle}</p>

          <button className="hero-btn">
            Book Now
          </button>
        </div>

        <div className="slider-image">
          <img
            src={slides[current].image}
            alt={slides[current].title}
          />
        </div>

      </div>

      <div className="dots">

        {slides.map((_, index) => (
          <span
            key={index}
            onClick={() => setCurrent(index)}
            className={current === index ? "dot active" : "dot"}
          />
        ))}

      </div>

    </section>
  );
}