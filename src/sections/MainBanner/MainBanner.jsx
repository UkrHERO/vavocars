import { useState } from "react";
import Container from "../../components/Container/Container";
import ModalBox from "../../components/modal/Modal";

import "./MainBanner.css";

function MainBanner() {
  const [modalShow, setModalShow] = useState(false);
  return (
    <section className="mainbanner_sec">
      <div className="banner_box">
        <Container>
          <div className="banner_content">
            <h1 className="main_title">Car rental in Miami</h1>
            <h2 className="main_desc">
              Reasonable prices, good range of cars, quick reservation <br />
              Vavo has great choices of the cars in Miami
            </h2>
            <button
              type="button"
              className="main_button"
              onClick={() => setModalShow(true)}
            >
              CONTACT US
            </button>
          </div>
          <ModalBox show={modalShow} onHide={() => setModalShow(false)} />
        </Container>
      </div>
    </section>
  );
}

export default MainBanner;
