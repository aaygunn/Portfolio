import React, { useContext } from "react";
import "./Works.css";

import Html from "../../img/skills/html-5.png";
import Css from "../../img/skills/css-3.png";
import Bootstrap from "../../img/skills/bootstrap.png";
import Js from "../../img/skills/js.png";
import Reacti from "../../img/skills/react.png";
import Tailwind from "../../img/skills/Tailwind.png";

import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
const Works = () => {
  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  // transition
  return (
    <div className="works" id="works">
      {/* left side */}
      <div className="w-left">
        <div className="awesome">
          {/* dark Mode */}
          <span style={{ color: darkMode ? "white" : "" }}>Kullandığım</span>
          <span>Teknolojiler</span>
          <spane>
            Tüm bu teknolojilerde,
            <br />
            ileri seviyede onlarca proje geliştirdim.
            <br />
            Yeni çıkan teknolojileri ilgiyle takip ediyor ve öğrenmekten büyük
            zevk duyuyorum.
            <br />
          </spane>
          <Link to="contact" smooth={true} spy={true}>
            <button className="button s-button">İletişime Geç</button>
          </Link>
          <div
            className="blur s-blur1"
            style={{ background: "#ABF1FF94" }}
          ></div>
        </div>

        {/* right side */}
      </div>
      <div className="w-right">
        <motion.div
          initial={{ rotate: 45 }}
          whileInView={{ rotate: 0 }}
          viewport={{ margin: "-40px" }}
          transition={{ duration: 3.5, type: "spring" }}
          className="w-mainCircle"
        >
          <div className="w-secCircle">
            <img src={Reacti} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Css} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Html} alt="" />
          </div>{" "}
          <div className="w-secCircle">
            <img src={Js} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Bootstrap} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Tailwind} alt="" />
          </div>
        </motion.div>
        {/* background Circles */}
        <div className="w-backCircle blueCircle"></div>
        <div className="w-backCircle yellowCircle"></div>
      </div>
    </div>
  );
};

export default Works;
