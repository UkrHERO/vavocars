import emailjs from "@emailjs/browser";
import React, { useRef, useState } from "react";
import Container from "../../components/Container/Container";
import { ReactComponent as Phone } from "../../images/phone.svg";
import { ReactComponent as Mail } from "../../images/mail.svg";
import { ReactComponent as Telegram } from "../../images/social/telegram.svg";
import { ReactComponent as Viber } from "../../images/social/viber.svg";
import { ReactComponent as Whatsapp } from "../../images/social/whatsapp.svg";
import keys from "../../images/keys.png";

import "./Contacts.css";

function Contacts() {
  const [name, setName] = useState("");
  const [tel, setTel] = useState("");
  const [massege, setMassege] = useState("");
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_ivqo7z7",
        "template_tjp14d3",
        {
          from_name: name,
          to_name: tel,
          message: massege,
        },
        "Qx6gI8OHQrv8NEFNP"
      )
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
    setName("");
    setTel("");
    setMassege("");
  };
  return (
    <section id="contacts" className="services_sec">
      <Container>
        <h2 className="service_title">CONTACTS</h2>
        <div className="line"></div>
        <div className="service_box">
          <div className="contact_box">
            <div className="cont_ph_box">
              <a className="phone phone_footer" href="tel:+19145223334">
                <Phone className="phone_icon" />
                +1 (914) 522 3334
              </a>
            </div>
            <div>
              <a
                className="phone phone_footer"
                href="mailto:vavocarsmiami@gmail.com"
              >
                <Mail className="phone_icon" />
                vavocarsmiami@gmail.com
              </a>
            </div>
            <div className="contact_socials">
              <Telegram className="social_item" />
              <Whatsapp className="social_item" />
              <Viber className="social_item" />
            </div>
            <img className="keys_img" src={keys} alt="keys" />
          </div>
          <form className="form" ref={form} onSubmit={sendEmail}>
            <p className="contact_form">Contact form</p>
            {/* <label className="form_label">Name</label> */}
            <input
              className="form_input"
              placeholder="Name"
              type="text"
              name="from_name"
              value={name}
              onChange={(text) => setName(text.target.value)}
            />
            {/* <label className="form_label">Email</label> */}
            <input
              onChange={(text) => setTel(text.target.value)}
              className="form_input"
              placeholder="Phone or Email"
              type="tel"
              name="email"
              value={tel}
            />
            {/* <label className="form_label">Message</label> */}
            {/* <input
              className="form_input"
              placeholder="Повідомлення"
              type="email"
              name="message"
            /> */}
            <textarea
              className="form_input form_mass"
              placeholder="Message"
              name="message"
              value={massege}
              onChange={(text) => setMassege(text.target.value)}
            />
            <input className="form_btn" type="submit" value="SEND" />
          </form>
        </div>
      </Container>
    </section>
  );
}

export default Contacts;
