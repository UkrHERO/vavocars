import Container from "../../components/Container/Container";

// import img1 from "../../images/img_1.jpg";

import "./Copyright.css";

function Copyright() {
  return (
    <section className="copy_sec">
      <Container>
        <p className="copy_text">
          © Copyright {new Date().getFullYear()} VAVOCARS | Car rental in Miami
          by Yura
        </p>
      </Container>
    </section>
  );
}

export default Copyright;
