import React from "react";
import "./Reasons.css";
import image1 from "../../assets/image1.png";
import image2 from "../../assets/image2.png";
import image3 from "../../assets/image3.png";
import image4 from "../../assets/image4.png";
import nb from "../../assets/nb.png";
import adidas from "../../assets/adidas.png";
import nike from "../../assets/nike.png";
import tick from "../../assets/tick.png";

const Reasons = () => {
  return (
    <div className="reasons" id="reasons">
      {/* Left side of Reasons */}
      <div className="left-r">
        <img src={image1} alt="reason-1"/>
        <img src={image2} alt="reason-2"/>
        <img src={image3} alt="reason-3"/>
        <img src={image4} alt="reason-4"/>
      </div>

      {/* Right side of Reasons */}
      <div className="right-r">
        <span>Some Reasons</span>
        <div>
            <span className="stroke-text">Why </span>
            <span>choose us?</span>
        </div>

        <div className="details-r">
            <div>
                <img src={tick} alt=""/>
                <span>OVER 140+ EXPERT COACHS</span>
            </div>
            <div>
                <img src={tick} alt=""/>
                <span>TRAIN SMARTER AND FASTER THAN BEFORE</span>
            </div>
            <div>
                <img src={tick} alt=""/>
                <span>1 FREE PROGRAM FOR NEW MEMBER</span>
            </div>
            <div>
                <img src={tick} alt=""/>
                <span>RELIABLE PARTNERS</span>
            </div>
        </div>

        <span className="reasons-partners">OUR PARTNERS</span>

        <div className="partner-brands">
            <img src={nb} alt="ew-balance"/>
            <img src={adidas} alt="adidas"/>
            <img src={nike} alt="nike"/>
        </div>
      </div>
    </div>
  );
};

export default Reasons;
