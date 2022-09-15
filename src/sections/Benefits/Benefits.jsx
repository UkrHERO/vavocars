import { useState } from "react";
import withLocalization from "../../components/hocLang/withLocalization";

import Container from "../../components/Container/Container";
import { ReactComponent as Card } from "../../images/card.svg";
import { ReactComponent as User } from "../../images/user.svg";
import { ReactComponent as Check2 } from "../../images/check2.svg";
import { ReactComponent as Car } from "../../images/car.svg";

import "./Benefits.css";

function Benefits({ localization }) {
  const { advantages, great_range, perf_cond, ind_approach, reas_prisec } =
    localization.localizedContent;
  const [activeItem, setActiveItem] = useState();
  return (
    <section id="advantages" className="service_sec">
      <Container>
        <h2 className="service_title">{advantages}</h2>
        <div className="line"></div>
        <div className="serv_box">
          <div className="benefits_item">
            <Car className="benefits_icon" />
            <p className="benefits_text">{great_range}</p>
          </div>
          <div className="benefits_item">
            <Check2 className="benefits_icon" />
            <p className="benefits_text">{perf_cond}</p>
          </div>
          <div className="benefits_item">
            <User className="benefits_icon" />
            <p className="benefits_text">{ind_approach}</p>
          </div>
          <div className="benefits_item">
            <Card className="benefits_icon" />
            <p className="benefits_text">{reas_prisec}</p>
          </div>
        </div>
      </Container>
    </section>
  );
}
export default withLocalization(Benefits);
