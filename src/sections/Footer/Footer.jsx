import Container from "../../components/Container/Container";

// import { ReactComponent as Check } from "../../images/check.svg";
import { ReactComponent as Facebook } from "../../images/facebook2.svg";
import { ReactComponent as Instagram } from "../../images/instagram.svg";
import { ReactComponent as Telegram } from "../../images/social/telegram.svg";
import { ReactComponent as Viber } from "../../images/social/viber.svg";
import { ReactComponent as Whatsapp } from "../../images/social/whatsapp.svg";

import "./Footer.css";

function Footer() {
  return (
    <section className="service_sec">
      <Container>
        <div className="footer_box">
          <div className="footer_item">
            <p className="footer_title">About us</p>
            <div className="footer_line"></div>
            <p className="footer_text">
              Located in Beautiful Florida's Riviera Sunny Isles Beach & Fort
              Lauderdale Beach, VIP Miami Auto specializes in providing you with
              any car or yacht rental for any occasion. We offer a wide variety
              of cars ranging from Luxury Cars to Super Cars! We can arrange for
              the vehicle to be delivered/picked-up directly to your home,
              hotel, airport, or current location within Miami and Broward.
            </p>
          </div>
          <div className="footer_item">
            <p className="footer_title">Advantages</p>
            <div className="footer_line"></div>
            <ul className="footer_ul">
              <li className="footer_li">
                <p className="footer_text">Great range of cars</p>
              </li>
              <li className="footer_li">
                <p className="footer_text">The perfect condition of cars</p>
              </li>
              <li className="footer_li">
                <p className="footer_text">Individual approach to the client</p>
              </li>
              <li className="footer_li">
                <p className="footer_text">Reasonable prices</p>
              </li>
            </ul>
          </div>
          <div className="footer_item">
            <p className="footer_title">Messengers</p>
            <div className="footer_line"></div>
            <div className="footer_mes">
              <Telegram className="social_item" />
              <Whatsapp className="social_item" />
              <Viber className="social_item" />
            </div>
            {/* <div className="footer_social">
              <a className="footer_link" href="https://www.facebook.com/">
                <Facebook className="footer_icon" />
              </a>
              <a className="footer_link" href="https://www.facebook.com/">
                <Instagram className="footer_icon" />
              </a>
            </div> */}
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Footer;
