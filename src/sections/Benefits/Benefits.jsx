import { useState } from "react";
import Container from "../../components/Container/Container";
import { ReactComponent as Card } from "../../images/card.svg";
import { ReactComponent as User } from "../../images/user.svg";
import { ReactComponent as Check2 } from "../../images/check2.svg";
import { ReactComponent as Car } from "../../images/car.svg";

import "./Benefits.css";

function Benefits() {
  const [activeItem, setActiveItem] = useState();
  return (
    <section id="advantages" className="service_sec">
      <Container>
        <h2 className="service_title">ADVANTAGES</h2>
        <div className="line"></div>
        <div className="serv_box">
          <div className="benefits_item">
            <Car className="benefits_icon" />
            <p className="benefits_text">Great range of cars</p>
          </div>
          <div className="benefits_item">
            <Check2 className="benefits_icon" />
            <p className="benefits_text">The perfect condition of cars</p>
          </div>
          <div className="benefits_item">
            <User className="benefits_icon" />
            <p className="benefits_text">Individual approach to the client</p>
          </div>
          <div className="benefits_item">
            <Card className="benefits_icon" />
            <p className="benefits_text">Reasonable prices</p>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Benefits;
