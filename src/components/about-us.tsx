"use client";
import { FC } from "react";
import Image from "next/image";
import "../styles/about-us.css";

const AboutUs: FC = () => {
  const features = [
    "Wide Mouth Bottles To Clean Easily.",
    "Insulated Bottles For Hot And Cold Technology",
    "Variation In Sizes, Styles, And Material",
    "Made In India To Serve Authenticity",
  ];

  return (
    <section className="about-section" id="about">
      <div className="container">
        {/* Left Section */}
        <div className="left">
          <h2 className="title">About us</h2>
          <p className="sub-title">HEALTH, HAPPINESS, & SUSTAINABILITY</p>
          <p className="description">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
          <button className="button">LEARN MORE</button>
        </div>

        {/* Right Section */}
        <div className="right">
          {features.map((item, index) => (
            <div key={index} className="feature-box">
              <span className="feature-number">{index + 1}</span>
              <p className="feature-text">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
