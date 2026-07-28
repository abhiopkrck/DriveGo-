import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Breadcrumb from "../components/Breadcrumb";
import "./css/deals.css";

const deals = [
  {
    id: 1,
    title: "Weekend Special",
    discount: "Flat 20% OFF",
    code: "WEEKEND20",
    image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=900",
  },
  {
    id: 2,
    title: "First Ride",
    discount: "₹500 OFF",
    code: "FIRST500",
    image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=900",
  },
  {
    id: 3,
    title: "Luxury Cars",
    discount: "Save 25%",
    code: "LUXURY25",
    image: "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=900",
  },
  {
    id: 4,
    title: "Monthly Subscription",
    discount: "30% OFF",
    code: "MONTH30",
    image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=900",
  },
  {
    id: 5,
    title: "SUV Offer",
    discount: "₹999 OFF",
    code: "SUV999",
    image: "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?w=900",
  },
  {
    id: 6,
    title: "App Exclusive",
    discount: "15% OFF",
    code: "APP15",
    image: "https://images.unsplash.com/photo-1502877338535-766e1452684a?w=900",
  },
];

function Deals() {
  return (
    <>
      <Navbar />

      <Breadcrumb title="Deals" />

      <section className="deals-page">

        <div className="hero-banner">

          <div className="hero-content">

            <h1>Best Car Rental Deals</h1>

            <p>
              Save more with exclusive offers and promo codes.
            </p>

            <button>Book Now</button>

          </div>

        </div>

        <h2 className="section-title">
          Hot Deals
        </h2>

        <div className="deals-grid">

          {deals.map((deal) => (

            <div className="deal-card" key={deal.id}>

              <img src={deal.image} alt={deal.title} />

              <div className="deal-info">

                <h3>{deal.title}</h3>

                <h4>{deal.discount}</h4>

                <p>Coupon Code</p>

                <span>{deal.code}</span>

                <button>Claim Offer</button>

              </div>

            </div>

          ))}

        </div>

      </section>

      <Footer />
    </>
  );
}

export default Deals;