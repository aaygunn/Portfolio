import React from "react";
import "./Footer.css";
import Wave from "../../img/wave.png";
import Insta from "@iconscout/react-unicons/icons/uil-whatsapp";
import Linkedin from "@iconscout/react-unicons/icons/uil-linkedin";
import Gitub from "@iconscout/react-unicons/icons/uil-github";

const Footer = () => {
  return (
    <div className="footer">
      <img src={Wave} alt="" style={{ width: "100%" }} />
      <div className="f-content">
        <span>aaygunn@gmail.com</span>
        <div className="f-icons">
          <a href="https://wa.me/+905067658615" target="_blank">
            <Insta color="white" size={"3rem"} />
          </a>
          <a href="https://www.linkedin.com/in/aaygunn" target="_blank">
            <Linkedin color="white" size={"3rem"} />
          </a>
          <a href="https://www.github.com/aaygunn" target="_blank">
            <Gitub color="white" size={"3rem"} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
