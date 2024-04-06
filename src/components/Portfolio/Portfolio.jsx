import React, { useContext } from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Sidebar from "../../img/projeler/boxShadow.png";
import Ecommerce from "../../img/projeler/myRoom.png";
import HOC from "../../img/projeler/dikeytarim.png";
import MusicApp from "../../img/projeler/lol.png";
import Collage from "../../img/projeler/collage.png";
import Qr from "../../img/projeler/qr.png";
import Restaurant from "../../img/projeler/restaurant.png";
import Shopping from "../../img/projeler/shopping.png";
import Travel from "../../img/projeler/travel.png";
import { themeContext } from "../../Context";
const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="portfolio" id="portfolio">
      {/* heading */}
      <span style={{ color: darkMode ? "white" : "" }}>Bazı Projelerim</span>
      <span>Portfolyo</span>

      {/* slider */}
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider"
      >
        <SwiperSlide>
          <img src={Sidebar} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Ecommerce} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={MusicApp} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Collage} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Qr} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Restaurant} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Shopping} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Travel} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={HOC} alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Portfolio;
