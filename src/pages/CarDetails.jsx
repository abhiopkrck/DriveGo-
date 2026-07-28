import { useParams, useNavigate } from "react-router-dom";
import { cars } from "../data/cars";
import {
  FaGasPump,
  FaUserFriends,
  FaCog,
  FaStar,
  FaArrowLeft,
} from "react-icons/fa";
import "./cardetails.css";

export default function CarDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const car = cars.find((item) => item.id === Number(id));

  if (!car) {
    return <h2 style={{ textAlign: "center" }}>Car Not Found</h2>;
  }

  const similarCars = cars.filter(
    (item) => item.id !== car.id && item.city === car.city
  );

  return (
    <section className="car-details">

      <button className="back-btn" onClick={() => navigate(-1)}>
        <FaArrowLeft /> Back
      </button>

      <div className="details-container">

        <div className="details-image">
          <img src={car.image} alt={car.name} />
        </div>

        <div className="details-info">

          <h1>{car.name}</h1>

          <h2>₹{car.price} / Day</h2>

          <p>
            <FaStar color="gold" /> {car.rating}
          </p>

          <div className="specs">

            <div>
              <FaGasPump />
              <span>{car.fuel}</span>
            </div>

            <div>
              <FaUserFriends />
              <span>{car.seats} Seats</span>
            </div>

            <div>
              <FaCog />
              <span>{car.transmission}</span>
            </div>

          </div>

          <h3>Description</h3>

          <p>
            Enjoy premium self-drive experience with unlimited kilometres,
            sanitised interiors, roadside assistance and instant booking.
          </p>

          <button className="reserve-btn">
            Reserve Now
          </button>

        </div>

      </div>

      <h2 className="similar-title">
        Similar Cars
      </h2>

      <div className="similar-grid">

        {similarCars.map((item) => (

          <div
            className="similar-card"
            key={item.id}
            onClick={() => navigate(`/car/${item.id}`)}
          >

            <img src={item.image} alt={item.name} />

            <h3>{item.name}</h3>

            <p>₹{item.price}/Day</p>

          </div>

        ))}

      </div>

    </section>
  );
}