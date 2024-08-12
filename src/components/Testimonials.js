import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../assets/styles/Testimonials.css";

const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 900,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <section className="testimonials" id="testimonials">
      <h2>What Parents Are Saying</h2>
      <Slider {...settings} className="testimonial-carousel">
        <div className="testimonial">
          <p>"DreamTales has completely transformed bedtime for us!"</p>
          <h4>Parent A</h4>
        </div>
        <div className="testimonial">
          <p>"My child loves the stories and falls asleep so easily now."</p>
          <h4>Parent B</h4>
        </div>
        <div className="testimonial">
          <p>"The AI-generated stories are amazing and so unique."</p>
          <h4>Parent C</h4>
        </div>
      </Slider>
    </section>
  );
};

export default Testimonials;
