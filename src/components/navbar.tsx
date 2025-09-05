"use client";
import Link from "next/link";
import "../styles/navbar.css";
import React from "react";
import Image from "next/image";

const Navbar: React.FC = () => {
  const scrollToSectionById = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="navbar">
      {/* logo on left */}
      <div>
        <Image
          src="/images/logoBlack.png"
          alt="BOTOL Logo"
          width={150}
          height={40}
        />
      </div>

      {/* Links */}
      <div>
        <ul className="navLinks">
          <li>
            <button onClick={() => scrollToSectionById("products")}>
              Shop
            </button>
          </li>
          <li>
            <button onClick={() => scrollToSectionById("contact")}>
              Contact us
            </button>
          </li>
          <li>
            <button onClick={() => scrollToSectionById("about")}>About</button>
          </li>
          <li>
            <button onClick={() => scrollToSectionById("faq")}>Journal</button>
          </li>
          <li>
            <button onClick={() => scrollToSectionById("custom")}>
              Custom
            </button>
          </li>
        </ul>

        {/* Button */}
        <button className="inqButton">INQUIRY NOW</button>
      </div>
    </nav>
  );
};
export default Navbar;
