import { useState } from "react";
import withLocalization from "../../components/hocLang/withLocalization";

import Container from "../../components/Container/Container";
import img from "../../images/car1/car.jpg";

import "./AboutUs.css";

function AboutUs({ localization }) {
  const { about_us, about_text } = localization.localizedContent;
  const [activeItem, setActiveItem] = useState();
  return (
    <section id="aboutus" className="service_sec">
      <Container>
        <h2 className="service_title">{about_us}</h2>
        <div className="line"></div>
        <div className="aboutus_box">
          <div className="aboutus_left">
            <p className="aboutus_title">VAVO Cars</p>
            <p className="aboutus_text">{about_text}</p>
          </div>
          <div className="aboutus_right">
            <img className="aboutus_img" src={img} alt="About Us" />
          </div>
        </div>
      </Container>
    </section>
  );
}

export default withLocalization(AboutUs);
