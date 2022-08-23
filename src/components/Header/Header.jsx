import React, { useState } from "react";
import "./Header.css";
import Logo from "../../assets/logo.png";
import Bars from "../../assets/bars.png";
import { Link } from "react-scroll";

const Header = () => {
  const mobile = window.innerWidth <= 768 ? true : false;
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="header">
      <img src={Logo} alt="logo" className="logo" />

      {!menuOpen && mobile ? (
        <div className="mobile-menu" onClick={() => setMenuOpen(true)}>
          <img src={Bars} alt="menu" className="mobile-menu-img" />
        </div>
      ) : (
        <>
          <div
            className="mobile-menu-overlay"
            onClick={() => setMenuOpen(false)}
          ></div>
          <ul className="header-menu">
            <li>
              <Link
                to="home"
                span={true}
                smooth={true}
                onClick={() => setMenuOpen(false)}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="programs"
                span={true}
                smooth={true}
                onClick={() => setMenuOpen(false)}
              >
                Programs
              </Link>
            </li>
            <li>
              <Link
                to="reasons"
                span={true}
                smooth={true}
                onClick={() => setMenuOpen(false)}
              >
                Why Us
              </Link>
            </li>
            <li>
              <Link
                to="plans"
                span={true}
                smooth={true}
                onClick={() => setMenuOpen(false)}
              >
                Plans
              </Link>
            </li>
            <li>
              <Link
                to="testimonials"
                span={true}
                smooth={true}
                onClick={() => setMenuOpen(false)}
              >
                Testimonials
              </Link>
            </li>
          </ul>
        </>
      )}
    </div>
  );
};

export default Header;
