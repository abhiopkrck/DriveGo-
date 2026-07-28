import Navbar from "../components/Navbar";
import Breadcrumb from "../components/Breadcrumb";
import Footer from "../components/Footer";
import "../components/css/about.css";

export default function About() {
  return (
    <>
      <Navbar />

      <Breadcrumb title="About Us" />

      <section className="about-container">

        <p>
          MyChoize Self Drive Cars is a self drive brand owned by ORIX,
          Japan's second largest self drive car rental company currently
          managing more than 63,000 cars globally.
        </p>

        <p>
          MyChoize is currently present across major Indian cities and aims
          to provide world-class self-drive services with premium customer
          experience.
        </p>

        <p>
          We provide hatchbacks, sedans, SUVs and luxury cars with unlimited
          kilometers and transparent pricing.
        </p>

        <h2>
          Why Choose MyChoize?
        </h2>

        <ul>

          <li>Rent cars Daily, Weekly & Monthly.</li>

          <li>Unlimited Kilometers.</li>

          <li>No Hidden Charges.</li>

          <li>Lowest Price Guarantee.</li>

          <li>Insurance Included.</li>

          <li>24×7 Customer Support.</li>

        </ul>

      </section>

      <Footer />
    </>
  );
}