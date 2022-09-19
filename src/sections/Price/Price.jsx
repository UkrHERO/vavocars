import { useState } from "react";
import withLocalization from "../../components/hocLang/withLocalization";

import Container from "../../components/Container/Container";
import ModalBox from "../../components/modal/Modal";
import ModalBoxImage from "../../components/modalImage/Modal";
import car1 from "../../images/car1/car.jpg";
import car1_2 from "../../images/car1/02.jpg";
import car1_3 from "../../images/car1/03.jpg";
import car1_4 from "../../images/car1/04.jpg";
import car1_5 from "../../images/car1/05.jpg";
import car2 from "../../images/car2/car2.jpg";
import car2_2 from "../../images/car2/02.jpg";
import car2_3 from "../../images/car2/03.jpg";
import car2_4 from "../../images/car2/04.jpg";
import car2_5 from "../../images/car2/05.jpg";
import car3 from "../../images/car3/car3.jpg";
import car3_2 from "../../images/car3/02.jpg";
import car3_3 from "../../images/car3/03.jpg";
import car3_4 from "../../images/car3/04.jpg";
import car4 from "../../images/car4/car7.jpg";
import car4_2 from "../../images/car4/02.jpg";
import car4_3 from "../../images/car4/03.jpg";
import car4_4 from "../../images/car4/04.jpg";
import car4_5 from "../../images/car4/05.jpg";
import car5 from "../../images/car5/02.jpg";
import car5_2 from "../../images/car5/car5.jpg";
import car5_3 from "../../images/car5/03.jpg";
import car5_4 from "../../images/car5/04.jpg";
import car6 from "../../images/car6/car6.jpg";
import car6_2 from "../../images/car6/02.jpg";
import car6_3 from "../../images/car6/03.jpg";
import car6_4 from "../../images/car6/04.jpg";
import car6_5 from "../../images/car6/05.jpg";

import "./Price.css";

function Price({ localization }) {
  const {
    cars,
    review,
    classL,
    color,
    white,
    grey,
    silver,
    capacity,
    seats,
    interior,
    leather,
    from,
    book_now,
    sedan,
    cabriolet,
    blue,
    black,
  } = localization.localizedContent;

  const arrPhotos = {
    car_1: [car1, car1_2, car1_3, car1_4, car1_5],
    car_2: [car2, car2_2, car2_3, car2_4, car2_5],
    car_3: [car3, car3_2, car3_3, car3_4],
    car_4: [car4, car4_2, car4_3, car4_4, car4_5],
    car_5: [car5, car5_2, car5_3, car5_4],
    car_6: [car6, car6_2, car6_3, car6_4, car6_5],
  };

  const [modalShow, setModalShow] = useState(false);
  const [images, setImages] = useState([]);
  const [modalShowImg, setModalShowImg] = useState(false);
  return (
    <section id="cars" className="services_sec">
      <Container>
        <h2 className="service_title">{cars}</h2>
        <div className="line"></div>

        <div className="cars_box">
          <div className="car_card">
            <div className="card_top">
              <img className="car_img" src={car1} alt="car" />
              <div className="pr_box">
                <div className="project_btn">
                  <button
                    type="button"
                    className="pr_btn"
                    onClick={() => {
                      setImages(arrPhotos.car_1);
                      setModalShowImg(true);
                    }}
                  >
                    {review}
                  </button>
                </div>
              </div>
            </div>
            <div className="card_bottom">
              <p className="car_title">Range Rover 2016</p>
              <div className="details_box">
                <p className="car_detail">{classL}: Premium SUV</p>
                <p className="car_detail">
                  {color}: {black}
                </p>
                <p className="car_detail">
                  {capacity}: 5 {seats}
                </p>
                <p className="car_detail">
                  {interior}: {leather}
                </p>
              </div>
              <div className="btn_box">
                <div className="price_box">
                  <p className="car_detail">{from}:</p>
                  <p className="car_price">$89</p>
                </div>

                <button
                  type="button"
                  className="main_button_book"
                  onClick={() => setModalShow(true)}
                >
                  {book_now}
                </button>
              </div>
            </div>
          </div>
          <div className="car_card">
            <div className="card_top">
              <img className="car_img" src={car2} alt="car" />
              <div className="pr_box">
                <div className="project_btn">
                  <button
                    type="button"
                    className="pr_btn"
                    onClick={() => {
                      setImages(arrPhotos.car_2);
                      setModalShowImg(true);
                    }}
                  >
                    {review}
                  </button>
                </div>
              </div>
              {/* <ModalBoxImage
                images={arrPhotos.car_2}
                show={modalShowImg}
                onHide={() => setModalShowImg(false)}
              /> */}
            </div>
            <div className="card_bottom">
              <p className="car_title">volkswagen touareg</p>
              <div className="details_box">
                <p className="car_detail">{classL}: SUV</p>
                <p className="car_detail">
                  {color}: {grey}
                </p>
                <p className="car_detail">
                  {capacity}: 5 {seats}
                </p>
                <p className="car_detail">
                  {interior}: {leather}
                </p>
              </div>
              <div className="btn_box">
                <div className="price_box">
                  <p className="car_detail">{from}:</p>
                  <p className="car_price">$35</p>
                </div>

                <button
                  type="button"
                  className="main_button_book"
                  onClick={() => setModalShow(true)}
                >
                  {book_now}
                </button>
              </div>
            </div>
          </div>
          <div className="car_card">
            <div className="card_top">
              <img className="car_img" src={car3} alt="car" />
              <div className="pr_box">
                <div className="project_btn">
                  <button
                    type="button"
                    className="pr_btn"
                    onClick={() => {
                      setImages(arrPhotos.car_3);
                      setModalShowImg(true);
                    }}
                  >
                    {review}
                  </button>
                </div>
              </div>
              {/* <ModalBoxImage
                images={arrPhotos.car_3}
                show={modalShowImg}
                onHide={() => setModalShowImg(false)}
              />{" "} */}
            </div>
            <div className="card_bottom">
              <p className="car_title">mazda cx-9 2018</p>
              <div className="details_box">
                <p className="car_detail">{classL}: SUV</p>
                <p className="car_detail">
                  {color}: {grey}
                </p>
                <p className="car_detail">
                  {capacity}: 5 {seats}
                </p>
                <p className="car_detail">
                  {interior}: {leather}
                </p>
              </div>
              <div className="btn_box">
                <div className="price_box">
                  <p className="car_detail">{from}:</p>
                  <p className="car_price">$45</p>
                </div>

                <button
                  type="button"
                  className="main_button_book"
                  onClick={() => setModalShow(true)}
                >
                  {book_now}
                </button>
              </div>
            </div>
          </div>
          <div className="car_card">
            <div className="card_top">
              <img className="car_img" src={car4} alt="car" />
              <div className="pr_box">
                <div className="project_btn">
                  <button
                    type="button"
                    className="pr_btn"
                    onClick={() => {
                      setImages(arrPhotos.car_4);
                      setModalShowImg(true);
                    }}
                  >
                    {review}
                  </button>
                </div>
              </div>
              {/* <ModalBoxImage
                images={arrPhotos.car_4}
                show={modalShowImg}
                onHide={() => setModalShowImg(false)}
              />{" "} */}
            </div>
            <div className="card_bottom">
              <p className="car_title">Audi A5 2011</p>
              <div className="details_box">
                <p className="car_detail">
                  {classL}: {cabriolet}
                </p>
                <p className="car_detail">
                  {color}: {blue}
                </p>
                <p className="car_detail">
                  {capacity}: 4 {seats}
                </p>
                <p className="car_detail">
                  {interior}: {leather}
                </p>
              </div>
              <div className="btn_box">
                <div className="price_box">
                  <p className="car_detail">{from}:</p>
                  <p className="car_price">$39</p>
                </div>

                <button
                  type="button"
                  className="main_button_book"
                  onClick={() => setModalShow(true)}
                >
                  {book_now}
                </button>
              </div>
            </div>
          </div>
          <div className="car_card">
            <div className="card_top">
              <img className="car_img" src={car5} alt="car" />
              <div className="pr_box">
                <div className="project_btn">
                  <button
                    type="button"
                    className="pr_btn"
                    onClick={() => {
                      setImages(arrPhotos.car_5);
                      setModalShowImg(true);
                    }}
                  >
                    {review}
                  </button>
                </div>
              </div>
              {/* <ModalBoxImage
                images={arrPhotos.car_5}
                show={modalShowImg}
                onHide={() => setModalShowImg(false)}
              />{" "} */}
            </div>
            <div className="card_bottom">
              <p className="car_title">volkswagen touareg</p>
              <div className="details_box">
                <p className="car_detail">{classL}: SUV</p>
                <p className="car_detail">
                  {color}: {white}
                </p>
                <p className="car_detail">
                  {capacity}: 5 {seats}
                </p>
                <p className="car_detail">
                  {interior}: {leather}
                </p>
              </div>
              <div className="btn_box">
                <div className="price_box">
                  <p className="car_detail">{from}:</p>
                  <p className="car_price">$35</p>
                </div>

                <button
                  type="button"
                  className="main_button_book"
                  onClick={() => setModalShow(true)}
                >
                  {book_now}
                </button>
              </div>
            </div>
          </div>
          <div className="car_card">
            <div className="card_top">
              <img className="car_img" src={car6} alt="car" />
              <div className="pr_box">
                <div className="project_btn">
                  <button
                    type="button"
                    className="pr_btn"
                    onClick={() => {
                      setImages(arrPhotos.car_6);
                      setModalShowImg(true);
                    }}
                  >
                    {review}
                  </button>
                </div>
              </div>
              {/* <ModalBoxImage
                images={arrPhotos.car_6}
                show={modalShowImg}
                onHide={() => setModalShowImg(false)}
              />{" "} */}
            </div>
            <div className="card_bottom">
              <p className="car_title">kia optima ex 2013</p>
              <div className="details_box">
                <p className="car_detail">
                  {classL}: {sedan}
                </p>
                <p className="car_detail">
                  {color}: {silver}
                </p>
                <p className="car_detail">
                  {capacity}: 5 {seats}
                </p>
                <p className="car_detail">
                  {interior}: {leather}
                </p>
              </div>
              <div className="btn_box">
                <div className="price_box">
                  <p className="car_detail">{from}:</p>
                  <p className="car_price">$25</p>
                </div>

                <button
                  type="button"
                  className="main_button_book"
                  onClick={() => setModalShow(true)}
                >
                  {book_now}
                </button>
              </div>
            </div>
          </div>
        </div>

        <ModalBoxImage
          images={images}
          show={modalShowImg}
          onHide={() => setModalShowImg(false)}
        />
        <ModalBox show={modalShow} onHide={() => setModalShow(false)} />
      </Container>
    </section>
  );
}
export default withLocalization(Price);
