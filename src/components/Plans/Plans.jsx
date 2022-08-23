import React from "react";
import "./Plans.css";
import { plansData } from "../../data/plansData";
import whiteTick from "../../assets/whiteTick.png";

const Plans = () => {
  return (
    <div className="plans-container" id="plans">
      <div className="blur plans-blur-1"></div>
      <div className="blur plans-blur-2"></div>

      <div className="programs-header">
        <span className="stroke-text">READY TO START</span>
        <span>YOUR JOURNEY</span>
        <span className="stroke-text">NOW WITH US</span>
      </div>

      {/* Plan cards */}
      <div className="plan-cards">
        {plansData.map((item, index) => (
          <div key={index} className="plan">
            {item.icon}
            <span>{item.name}</span>
            <span>${item.price}</span>

            <div className="plan-features">
              {item.features.map((feature, index) => (
                <div className="feature" key={index}>
                  <img src={whiteTick} alt="white-tick" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>

            <div>
              <span>See more benefits &rarr;</span>
            </div>
            <button className="btn">Join now</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Plans;
