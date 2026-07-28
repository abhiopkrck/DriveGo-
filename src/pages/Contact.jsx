import Navbar from "../components/Navbar";
import Breadcrumb from "../components/Breadcrumb";
import Footer from "../components/Footer";
import "../components/css/contact.css";
import { FaMapMarkerAlt } from "react-icons/fa";

const locations = [
  {
    city: "DELHI-NCR",
    address:
      "Plot No.12 Sector 18, Maruti Industrial Area, Gurgaon 122015",
  },
  {
    city: "BENGALURU",
    address:
      "No 1, Bandappa Colony, Bengaluru, Karnataka 560038",
  },
  {
    city: "MUMBAI",
    address:
      "Plot No 94, Marol Co-op Industrial Estate, Andheri East",
  },
  {
    city: "PUNE",
    address:
      "Magarpatta City, Hadapsar, Pune 411013",
  },
  {
    city: "HYDERABAD",
    address:
      "Road No.49, Jubilee Hills, Hyderabad",
  },
  {
    city: "JAIPUR",
    address:
      "IBC Tower, Ashok Marg, Jaipur",
  },
  {
    city: "AMRITSAR",
    address:
      "Lawrence Road, Amritsar",
  },
  {
    city: "CHANDIGARH",
    address:
      "Sector 34, Chandigarh",
  },
  {
    city: "DEHRADUN",
    address:
      "Rajpur Road, Dehradun",
  },
];

export default function Contact() {
  return (
    <>
      <Navbar />

      <Breadcrumb title="Contact Us" />

      <section className="contact-page">

        <h2>We are Available 24×7 @ 9512341234</h2>

        <div className="contact-grid">

          {locations.map((item, index) => (

            <div className="contact-card" key={index}>

              <div className="icon">
                <FaMapMarkerAlt />
              </div>

              <h3>{item.city}</h3>

              <p>{item.address}</p>

            </div>

          ))}

        </div>

      </section>

      <Footer />
    </>
  );
}