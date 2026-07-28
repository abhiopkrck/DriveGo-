import { FaGasPump, FaUserFriends, FaCog, FaStar } from "react-icons/fa";
import "./css/fleetcard.css";
import Navbar from "./Navbar";
export default function FleetCard({ car }) {
  return (
    
    <div className="fleet-card">

      <img src={car.image} alt={car.name} />

      <div className="fleet-info">

        <h2>{car.name}</h2>

        <h3>₹{car.price} / Day</h3>

        <div className="features">

          <span>
            <FaGasPump /> {car.fuel}
          </span>

          <span>
            <FaUserFriends /> {car.seats}
          </span>

          <span>
            <FaCog /> {car.transmission}
          </span>

        </div>

        <p>

          <FaStar color="gold" /> {car.rating}

        </p>

        <button>

          Book Now

        </button>

      </div>
<Navbar/>
    </div>
  );
}