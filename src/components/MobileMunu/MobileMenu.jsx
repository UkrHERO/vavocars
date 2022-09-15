import React, { useState } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import withLocalization from "../hocLang/withLocalization";

import { ReactComponent as Burger } from "../../images/burger.svg";

import "./MobileMenu.css";

function MobileMenu({ localization }) {
  const { advantages, cars, about_us, contacts } =
    localization.localizedContent;

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="mob_box">
      <button className="burger" type="button" onClick={handleShow}>
        <Burger />
      </button>

      <Offcanvas show={show} onHide={handleClose} placement={"end"}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>VAVOCARS</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <ul className="menu_mob">
            <li className="item_mob" onClick={handleClose}>
              <a className="menu_item" href="#advantages">
                {advantages}
              </a>
            </li>
            <li className="item_mob" onClick={handleClose}>
              {" "}
              <a className="menu_item" href="#cars">
                {cars}
              </a>
            </li>
            <li className="item_mob" onClick={handleClose}>
              <a className="menu_item" href="#aboutus">
                {about_us}
              </a>
            </li>
            <li className="item_mob" onClick={handleClose}>
              <a className="menu_item" href="#contacts">
                {contacts}
              </a>
            </li>
          </ul>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
}
export default withLocalization(MobileMenu);
