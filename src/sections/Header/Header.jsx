import MobileMenu from "../../components/MobileMunu/MobileMenu";
import logo from "../../images/logo2.png";

import "./Header.css";

function Header() {
  return (
    <div className="header_cont">
      <img className="logo" src={logo} alt="logo" className="logo"></img>
      <MobileMenu />
      <ul className="menu">
        <li>
          <a className="menu_item" href="#advantages">
            ADVANTAGES
          </a>
        </li>
        <li>
          <a className="menu_item" href="#cars">
            CARS
          </a>
        </li>
        <li>
          <a className="menu_item" href="#aboutus">
            ABOUT US
          </a>
        </li>
        <li>
          <a className="menu_item" href="#contacts">
            CONTACTS
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Header;
