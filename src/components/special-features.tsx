"use client";
import React from "react";
import Image from "next/image";
import "../styles/special-features.css";

const SpecialFeatures: React.FC = () => {
  return (
    <section className="special-features" id="features">
      {/* Left side image */}
      <div className="special-features-left">
        <div className="imageWrapper">
          <Image
            src="/images/bottle-in-hand.png"
            alt="Bottle"
            fill
            style={{ objectFit: "fill" }}
          />
        </div>
      </div>

      {/* Right side features */}
      <div className="special-features-right">
        <ul>
          <li>
            <div>
              <Image
                src="/images/vacuum.png"
                alt="Vacuum"
                width={40}
                height={40}
              />
            </div>

            <span>Vacuum Bottles</span>
          </li>
          <li>
            <div>
              <Image
                src="/images/fridge.png"
                alt="Fridge"
                width={40}
                height={40}
              />
            </div>
            <span>Fridge Bottles & Jugs</span>
          </li>
          <li>
            <div>
              <Image
                src="/images/borosilicate.png"
                alt="Borosilicate"
                width={40}
                height={40}
              />
            </div>
            <span>Borosilicate Bottles</span>
          </li>
          <li>
            <div>
              <Image
                src="/images/kettle.png"
                alt="Kettle"
                width={40}
                height={40}
              />
            </div>
            <span>Kettles</span>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default SpecialFeatures;
