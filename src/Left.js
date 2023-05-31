import React from 'react'
import "./Left.css";
import bord from "./images/Rectangle 15.png"
import logo from "./images/Frame 45 2.png"
import linkedin from "./images/linkedin (1) 1.png"
import facebook from "./images/facebook 1.svg"
import insta from "./images/instagram 1.png"
import footer from "./images/internet (1) 1.svg"

function Left() {
  return (
    <div className="left">
      <div className="left_part">
        <img src={bord} alt="" className="leftside_img" />
        <img src={logo} alt="" className="leftside_logo" />
        <div className="leftside_text">
          <h1>100% Uptime😎 </h1>
          <h3>Zero Infrastructure</h3>
          <h3>Management</h3>
        </div>
        <div className="leftside_end">
          <div className="footer">
            <img src={footer} alt="" />
            <h6>aesthisia.com</h6>
          </div>
          <div className="leftside_icon">
            <img src={linkedin} alt="" />
            <img src={facebook} alt="" />
            <img src={insta} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Left
