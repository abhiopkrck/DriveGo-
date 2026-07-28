import { useState } from "react";
import "./css/search.css";

export default function SearchBar() {
  const cities = [
    "Pune",
    "Mumbai",
    "Delhi",
    "Bangalore",
    "Hyderabad",
    "Chennai",
    "Kolkata",
    "Jaipur",
    "Ahmedabad",
    "Goa"
  ];

  const [location, setLocation] = useState("");
  const [pickup, setPickup] = useState("");
  const [drop, setDrop] = useState("");

  const handleSearch = () => {
    if (!location || !pickup || !drop) {
      alert("Please fill all fields.");
      return;
    }

    console.log({
      location,
      pickup,
      drop,
    });

    alert(`Searching cars in ${location}`);
  };

  return (
    <div className="search">

      <div className="tabs">
        <button className="active">Daily Rentals</button>
        <button>Monthly Subscription</button>
      </div>

      <div className="search-box">

        <div className="input">
          <label>Location</label>

          <select
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          >
            <option value="">Select City</option>

            {cities.map((city) => (
              <option key={city} value={city}>
                {city}
              </option>
            ))}

          </select>
        </div>

        <div className="input">
          <label>Pickup</label>

          <input
            type="datetime-local"
            value={pickup}
            onChange={(e) => setPickup(e.target.value)}
          />
        </div>

        <div className="input">
          <label>Return</label>

          <input
            type="datetime-local"
            value={drop}
            onChange={(e) => setDrop(e.target.value)}
          />
        </div>

        <button
          className="search-btn"
          onClick={handleSearch}
        >
          Search
        </button>

      </div>

    </div>
  );
}