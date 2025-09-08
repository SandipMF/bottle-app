"use client";
import Image from "next/image";
import "../styles/landing.css";
import React, { useEffect, useState } from "react";
import { motion, useAnimation, useScroll, useTransform } from "framer-motion";

const LandingPage: React.FC = () => {
  const controls = useAnimation();

  const { scrollYProgress } = useScroll();
  const [initalAnimationEnd, setInitalAnimationEnd] = useState(false);

  const bottleY = useTransform(scrollYProgress, [0, 0.25], ["0%", "80%"]);
  const capY = useTransform(scrollYProgress, [0, 0.05], ["-50%", "1%"]);
  const bottleScale = useTransform(scrollYProgress, [0, 0.25], [1, 0.7]);

  useEffect(() => {
    controls.start("visible");
  }, [controls]);

  return (
    <motion.section
      className="home"
      id="home"
      initial={{ scale: 0.5, opacity: 1 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 2, ease: "easeOut", delay: 1 }}
    >
      <div className="circle"></div>

      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 2, ease: "easeOut", delay: 1 }}
      >
        <h1 className="title">
          The Ultimate Companion
          <br />
          for Hydration
        </h1>

        <p className="subtitle">
          we believe in the power of hydration. <br />
          Our mission is simple yet vital
        </p>

        <button className="inq-btn">INQUIRY NOW</button>
      </motion.div>
      {/* Left Bottle */}
      <motion.div
        className="leftBottle"
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 2, ease: "easeOut", delay: 1 }}
      >
        <div className="bottleCircle">
          <Image
            src="/images/bottle2.png"
            alt="Bottle Left"
            width={80}
            height={200}
          />
        </div>
      </motion.div>

      {/* Right Bottle */}
      <motion.div
        className="rightBottle"
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 2, ease: "easeOut", delay: 1 }}
      >
        <div className="bottleCircle">
          <Image
            src="/images/bottle3.png"
            alt="Bottle Right"
            width={80}
            height={200}
          />
        </div>
      </motion.div>
      <motion.div
        className="bottle-container"
        style={{ y: bottleY, scale: bottleScale }}
      >
        {/* Bottle Image */}
        <motion.img
          src="/images/bottle-base.png"
          alt="Bottle Base"
          className="bottle"
          initial={{ opacity: 1, y: 0 }}
          animate={controls}
          variants={{
            visible: { opacity: 1, y: 0, transition: { duration: 1 } },
          }}
        />
        {/* Cap Animation */}
        <motion.img
          src="/images/bottle-cap.png"
          alt="Bottle Cap"
          className="cap"
          initial={{ y: 0 }}
          animate={
            !initalAnimationEnd
              ? {
                  y: "-50%", // open -> close
                }
              : { y: "-50%" }
          }
          transition={{ duration: 3, ease: "easeOut", delay: 1 }}
          style={initalAnimationEnd ? { y: capY } : {}}
          onAnimationComplete={() => setInitalAnimationEnd(true)}
        />
      </motion.div>
    </motion.section>
  );
};

export default LandingPage;
