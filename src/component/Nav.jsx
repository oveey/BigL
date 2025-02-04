import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import "../styles/nav.css";

export const Nav = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 900);
  const location = useLocation();

  useEffect(() => {
    const { hash } = location;
    if (hash) {
      const target = document.getElementById(hash.substring(1));
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      scroll.scrollToTop(); // Scroll to the top of the page if no hash
    }
  }, [location]);

  // Detect scrolling for nav style
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle window resize for mobile view
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1200);
      if (window.innerWidth > 1200) {
        setIsOpen(false); // Close menu if resizing above 900px
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleMenu = () => {
    if (isMobile) {
      setIsOpen(!isOpen);
    }
  };

  return (
    <div className={`home__nav ${isScrolled ? "scrolled" : ""}`}>
      <Link to="/">
        <img src="/assets/logo.svg" alt="logo" />
      </Link>

      <ul className={`${isOpen ? "open" : ""}`}>
        <li>
          <Link to="/" className="nav_link">
            The story
          </Link>
        </li>
        <li>
          <Link to="/" className="nav_link">
            The Cause
          </Link>
        </li>
        <li>
          <Link to="/" className="nav_link">
            Tokenomics
          </Link>
        </li>
        <li>
          <Link to="/" className="nav_link">
            Knowledge
          </Link>
        </li>

        <li>
          <Link to="/" className="nav_link">
            <img src="/assets/Buybutton.svg" className="nav_icon" />
          </Link>
        </li>

        <li>
          <Link to="/" className="nav_link">
            <img src="/assets/telegram.svg" className="nav_icon" />
          </Link>
        </li>
        <li>
          <Link to="/" className="nav_link">
            <img src="/assets/X.svg" className="nav_icon" />
          </Link>
        </li>
      </ul>
      <div className="mobile__socials">
        <img src="/assets/telegram.svg" className="nav_icon2" />
        <img src="/assets/X.svg" className="nav_icon2" />
        <button className={`${isOpen ? "menu" : ""}`} onClick={toggleMenu}>
          <span className="line top"></span>
          <span className="line middle"></span>
          <span className="line last"></span>
        </button>
      </div>
    </div>
  );
};
