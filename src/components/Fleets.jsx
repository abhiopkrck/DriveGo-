import "./css/fleets.css";

import slide1 from "../assets/img/hero/slide1.jpeg";
import slide2 from "../assets/img/hero/slide2.jpeg";
import slide3 from "../assets/img/hero/slide3.jpeg";
import slide4 from "../assets/img/hero/slide4.jpeg";

const cars = [
  {
    id: 1,
    name: "Mahindra Thar",
    image: slide1,
    price: "₹2499/day",
  },
  {
    id: 2,
    name: "Hyundai Creta",
    image: slide2,
    price: "₹1999/day",
  },
  {
    id: 3,
    name: "Maruti Baleno",
    image: slide3,
    price: "₹1499/day",
  },
  {
    id: 4,
    name: "Kia Seltos",
    image: slide4,
    price: "₹2299/day",
  },
];

function Fleets() {
  return (
    <>
     

      <section className="fleets">
        <h2>Explore Our Fleet</h2>

        <div className="fleet-grid">
          {cars.map((car) => (
            <div className="card" key={car.id}>
              <img src={car.image} alt={car.name} />

              <h3>{car.name}</h3>

              <p>{car.price}</p>

              <button>Book Now</button>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default Fleets;