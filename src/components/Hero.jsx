import { Link } from "react-router-dom";
import Food from "../assets/food.jpg";
import "../styles/Hero.css";

const Hero = () => {
  return (
    <section id="hero" className="hero">
      <div className="display-container">
        <div className="display-title">Little Lemon</div>
        <div className="display-subtitle">Chicago</div>
        <div className="display-text">
          We are a family owned Mediterranean restaurant, focused on traditional
          recipes served with a modern twist.
        </div>
        <Link to="/reservation" className="reserve-button">
          Reserve a Table
        </Link>
      </div>
      <div className="image-container">
        <img
          src={Food}
          alt="food"
          className="display-image"
        />
      </div>
    </section>
  );
};

export default Hero;
