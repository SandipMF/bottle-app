"use client";
import Image from "next/image";
import "../styles/landing.css";
import React, { useEffect, useState } from "react";
import { motion, useAnimation, useScroll, useTransform } from "framer-motion";

const LandingPage: React.FC = () => {
  const controls = useAnimation();

  const { scrollYProgress } = useScroll();
  const [initalAnimationEnd, setInitalAnimationEnd] = useState(false);

  const capYMaxPsition = "-37%";
  const capYMinPsition = "15%";

  const baseYPosition = "20%";
  const bottleY = useTransform(scrollYProgress, [0, 0.17], ["0%", "60%"]);
  const capY = useTransform(
    scrollYProgress,
    [0, 0.05],
    [capYMaxPsition, capYMinPsition]
  );
  const bottleScale = useTransform(scrollYProgress, [0, 0.25], [1, 1]);

  useEffect(() => {
    controls.start("visible");
  }, [controls]);

  return (
    <motion.section className="home" id="home">
      <motion.div transition={{ duration: 2, ease: "easeOut", delay: 2 }}>
        {/* circle */}
        <motion.div
          className="circle-bg"
          initial={{ scale: 0.7, opacity: 1 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 2 }}
        >
          <div className="circle"></div>
        </motion.div>

        <div className="text-bg">
          {/* Heading & Sub-heading */}
          <motion.div
            initial={{ scale: 0.3, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut", delay: 2 }}
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
          </motion.div>
          {/* INQ btn */}
          <motion.div initial={{ opacity: 1, scale: 1 }}>
            <motion.button
              className="inq-btn"
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, ease: "easeOut", delay: 2 }}
            >
              INQUIRY NOW
            </motion.button>
          </motion.div>
        </div>
        {/* Left Bottle */}
        <motion.div
          className="leftBottle"
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 2, ease: "easeOut", delay: 2 }}
        >
          <div className="bottleCircle">
            <Image
              src="/images/bottle2.png"
              alt="Bottle Left"
              // width={80}
              // height={200}
              fill
              style={{ objectFit: "scale-down" }}
            />
          </div>
        </motion.div>

        {/* Right Bottle */}
        <motion.div
          className="rightBottle"
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 2, ease: "easeOut", delay: 2 }}
        >
          <div className="bottleCircle">
            <Image
              src="/images/bottle3.png"
              alt="Bottle Right"
              // width={80}
              // height={200}
              fill
              style={{ objectFit: "scale-down" }}
            />
          </div>
        </motion.div>
      </motion.div>

      {/* Bottle with basc & cap */}
      <motion.div
        className="bottle-container"
        initial={{ opacity: 1, scale: 1 }}
        animate={controls}
        style={{ y: bottleY, scale: 1 }}
      >
        {/* Bottle Base Image */}
        <motion.img
          src="/images/bottle-base.png"
          alt="Bottle Base"
          className="bottle"
          initial={{ opacity: 1, y: 0, scale: 1 }}
          animate={
            !initalAnimationEnd
              ? {
                  y: baseYPosition, // open -> close
                }
              : { y: baseYPosition }
          }
          transition={{ duration: 1, ease: "easeOut", delay: 2 }}
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
                  y: capYMaxPsition, // open -> close
                }
              : { y: capYMaxPsition }
          }
          transition={{ duration: 1, ease: "easeOut", delay: 2 }}
          style={initalAnimationEnd ? { y: capY } : {}}
          onAnimationComplete={() => setInitalAnimationEnd(true)}
        />
      </motion.div>
    </motion.section>
  );
};

export default LandingPage;
