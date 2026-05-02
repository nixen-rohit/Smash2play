"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

const NewHero = () => {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // 1. Video Animation: Moves from bottom to top
  const videoY = useTransform(scrollYProgress, [0, 0.6], ["100%", "0%"]);

  // 2. Content Animation: Fades and scales down slightly
  const contentOpacity = useTransform(scrollYProgress, [0.2, 0.5], [1, 0]);
  const contentScale = useTransform(scrollYProgress, [0, 0.5], [1, 0.9]);

  // 3. Scroll Parallax for Images (Adds depth)
  const img1Parallax = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const img2Parallax = useTransform(scrollYProgress, [0, 1], [0, 80]);

  return (
    <section
      ref={containerRef}
      className="relative h-[300vh] bg-[#050B0A] text-white"
    >
      <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col items-center justify-center">
        {/* 1. Hero Content Section */}
        <motion.div
          style={{ opacity: contentOpacity, scale: contentScale }}
          className="relative z-10 flex flex-col items-center justify-center h-full px-6 text-center w-full"
        >
          {/* Top Left Floating Image */}
          <motion.div
            style={{ y: img1Parallax }}
            animate={{
              y: [0, -20, 0], // Continuous floating movement
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute top-[15%] left-[5%] md:left-[5%] w-32 h-32 md:w-56 md:h-56 hidden sm:block pointer-events-none"
          >
            <Image
              src="/Img/shutel.png"
              alt="Shuttlecock"
              fill
              priority
              className="object-contain drop-shadow-[0_0_25px_rgba(190,242,100,0.3)]"
              sizes="(max-width: 768px) 128px, 224px"
            />
          </motion.div>

          {/* Bottom Right Floating Image */}
          <motion.div
            style={{ y: img2Parallax }}
            animate={{
              y: [0, 25, 0], // Continuous floating movement
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.5,
            }}
            className="absolute bottom-[15%] right-[5%] md:right-[10%] w-36 h-36 md:w-64 md:h-64 hidden sm:block pointer-events-none"
          >
            <Image
              src="/Img/pickeball.png"
              alt="Pickleball"
              fill
              className="object-contain drop-shadow-[0_0_25px_rgba(255,255,255,0.2)]"
              sizes="(max-width: 768px) 144px, 256px"
            />
          </motion.div>

          {/* Text Content */}
          <div className="max-w-4xl relative z-30 pointer-events-auto">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-[#BEF264] text-[10px] md:text-xs font-black uppercase tracking-[0.4em] mb-6"
            >
              Trusted by 1000+ players across Delhi NCR
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-8xl font-black leading-[0.85] tracking-tighter mb-8"
            >
              Play. Train. Compete. <br />
              <span className="text-[#BEF264]">All in One Place.</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-10"
            >
              Book premium sports venues, train with expert coaches, or host
              unforgettable game events - Smash2Play brings everything together.
            </motion.p>

            <motion.div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-[#BEF264] text-black px-10 py-5 rounded-sm font-black uppercase text-xs tracking-widest hover:scale-105 transition-transform active:scale-95">
                Book a Slot
              </button>
              <button className="border border-white/20 px-10 py-5 rounded-sm font-black uppercase text-xs tracking-widest hover:bg-white/5 transition active:scale-95">
                Explore Venues
              </button>
            </motion.div>
          </div>
        </motion.div>

        {/* 2. Sliding Video Section*/}
        <motion.div
          style={{
            y: videoY,
            width: "98%",
          }}
          className="absolute h-[85vh] z-20 bg-black overflow-hidden"
        >
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover opacity-70"
          >
            <source src="/Video/hero.mp4" type="video/mp4" />
          </video>

          {/* Overlays */}
          <div className="absolute inset-0 bg-linear-to-t from-[#050B0A] via-transparent to-transparent z-10" />

          <div className="absolute inset-0 pointer-events-none opacity-10">
            <svg width="100%" height="100%">
              <pattern
                id="grid-pattern-hero"
                width="60"
                height="60"
                patternUnits="userSpaceOnUse"
              >
                <path
                  d="M 60 0 L 0 0 0 60"
                  fill="none"
                  stroke="white"
                  strokeWidth="0.5"
                />
              </pattern>
              <rect width="100%" height="100%" fill="url(#grid-pattern-hero)" />
            </svg>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default NewHero;
