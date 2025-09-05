"use client";
import React from "react";
import "../styles/footer.css";
import Image from "next/image";

const Footer: React.FC = () => {
  const scrollToSectionById = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="footer">
      <div className="footer-top">
        {/* logo on left */}
        <div className="footer-logo">
          <Image
            src="/images/logoWhite.png"
            alt="BOTOL Logo"
            width={220}
            height={40}
          />
        </div>

        {/* navigations */}
        <nav className="footer-nav">
          <button onClick={() => scrollToSectionById("products")}>Shop</button>
          <button onClick={() => scrollToSectionById("contact")}>
            Contact Us
          </button>
          <button onClick={() => scrollToSectionById("about")}>About</button>
          <button onClick={() => scrollToSectionById("faq")}>Jurnal</button>
          <button onClick={() => scrollToSectionById("custom")}>Custom</button>
        </nav>
      </div>

      <div className="footer-middle">
        {/* Social Icons */}
        <div className="footer-socials">
          <a href="https://facebook.com">
            <Image
              src="/images/facebook.png"
              alt="Facebook"
              width={28}
              height={28}
            />
          </a>
          <a href="https://instagram.com">
            <Image
              src="/images/instagram.png"
              alt="Instagram"
              width={28}
              height={28}
            />
          </a>
          <a href="https://twitter.com">
            <Image
              src="/images/twitter.png"
              alt="Twitter"
              width={28}
              height={28}
            />
          </a>
        </div>
        {/* Others Links */}
        <div className="footer-links">
          <a href="/faq">FAQ’s</a>
          <a href="/returns">Returns</a>
          <a href="/ordering">Ordering</a>
          <a href="/shipping">Shipping</a>
          <a href="/policies">Personalization Policies</a>
        </div>
      </div>

      {/* Copyright */}
      <div className="footer-bottom">
        <p>Copyright © 2023 BOTOL. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
