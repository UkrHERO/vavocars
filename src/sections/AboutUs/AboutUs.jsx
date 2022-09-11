import { useState } from "react";
import Container from "../../components/Container/Container";
import img from "../../images/car1/car.jpg";

import "./AboutUs.css";

function AboutUs() {
  const [activeItem, setActiveItem] = useState();
  return (
    <section id="aboutus" className="service_sec">
      <Container>
        <h2 className="service_title">ABOUT US</h2>
        <div className="line"></div>
        <div className="aboutus_box">
          <div className="aboutus_left">
            <p className="aboutus_title">VAVO Cars</p>
            <p className="aboutus_text">
              Located in Beautiful Florida's Riviera Sunny Isles Beach & Fort
              Lauderdale Beach, VIP Miami Auto specializes in providing you with
              any car or yacht rental for any occasion. We offer a wide variety
              of cars ranging from Luxury Cars to Super Cars! We can arrange for
              the vehicle to be delivered/picked-up directly to your home,
              hotel, airport, or current location within Miami and Broward. Our
              highly trained staff will provide you with an easy and hassle free
              reservation process. We offer 24 hour support for any of of your
              car rental needs, questions, or comments.
            </p>
          </div>
          <div className="aboutus_right">
            <img className="aboutus_img" src={img} alt="About Us" />
          </div>
        </div>
      </Container>
    </section>
  );
}

export default AboutUs;
