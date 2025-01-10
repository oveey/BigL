import React, { useEffect } from "react";
import "../styles/footer.css";
import { Link } from "react-router-dom";
import AOS from "aos";

import "aos/dist/aos.css";

export const Footer = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000, // Duration of the animation in milliseconds
      once: true, // Whether animation should happen only once - while scrolling down
      startEvent: "DOMContentLoaded", // Trigger animations when the DOM is fully loaded
      offset: 120, // Adjust this value as needed
    });
  }, []);

  return (
    <>
      <section className="footer__section">
        <div className="footer">
          <div className="footer__content" data-aos="fade-up">
            <div className="footer__logo">
              <img src="/assets/logo2.svg" alt="logo" />

              <p className="logo__text">
                The BigL team came together with one goal: to make a difference.
                After realizing cancer had touched all their families, they were
                inspired by innovative startups working to prevent that pain.
                BigL became their way to turn passion into action.
              </p>
            </div>
            <ul className="footer__links">
              <h2>Site Map</h2>
              <li>
                <Link to="/">The stroy</Link>
              </li>
              <li>
                <Link to="/#who">The Cause</Link>
              </li>
              <li>
                <Link to="/#faq">Tokenomics</Link>
              </li>

              <li>
                <Link to="/blogs">Start BigLing</Link>
              </li>

              <li>
                <Link to="/blogs">Buy</Link>
              </li>
              <li>
                <Link to="/blogs">Knowledge</Link>
              </li>
            </ul>

            <div className="footer__logo">
              <img src="/assets/telegram1.svg" alt="logo" />
              <img src="/assets/twiiter.svg" alt="logo" />
              <p className="logo__text">Contact</p>
              <p className="logo__text">contact@biglcoin.com</p>
            </div>
          </div>
        </div>
        <div className="footer__section2">
          <div className="footer__two">
            <p>&copy; {new Date().getFullYear()} BigL All rights reserved.</p>
          </div>
        </div>
      </section>
    </>
  );
};
