"use client";

import React, { useRef, useState } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useMotionValueEvent,
} from "framer-motion";
import Image from "next/image";
import HeroVideo from "@/components/HeroVideo";

const Hero = () => {
  const containerRef = useRef(null);
  const [heroProgress, setHeroProgress] = useState(0);

  // We keep 300vh to give enough "breathing room"
  // for the video to finish and then stay still before moving to next section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (latest > 0.5) {
      const internalProgress = (latest - 0.5) * 2; // Normalizes 0.5-1.0 range to 0.0-1.0
      setHeroProgress(internalProgress);
    } else {
      setHeroProgress(0);
    }
  });
  // 1. Video Animation: Moves from bottom to top.
  // It finishes exactly at 0.5 (middle of the scroll) so it stays pinned for the rest.

  // 3. Content Animation: Fades out before the video covers it
  const contentOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
  const contentScale = useTransform(scrollYProgress, [0, 0.3], [1, 0.9]);

  // 4. Parallax
  const img1Parallax = useTransform(scrollYProgress, [0, 0.5], [0, -150]);
  const img2Parallax = useTransform(scrollYProgress, [0, 0.5], [0, 150]);
  // Animation for the Hero layer coming up
  const heroY = useTransform(scrollYProgress, [0.3, 0.55], ["100%", "0%"]);
   const smooth = useSpring(scrollYProgress, {
    stiffness: 60,
    damping: 20,
  });
  const gridOpacity = useTransform(smooth, [0, 0.4], [0.15, 0.05]);
  return (
    <section
      ref={containerRef}
      // Height controls how "long" the user scrolls to finish the animation
      className="relative h-[300vh] bg-(--dark-bg) text-(--dark-text)"
    >
      {/* Sticky container ensures everything stays in viewport while scrolling */}
      <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center">
        {/* Background Video */}
        <motion.div
          style={{ opacity: contentOpacity }}
          className="absolute inset-0 w-full h-full z-0"
        >
          <video
            className="h-full w-full object-cover"
            autoPlay
            muted
            loop
            playsInline
          >
            <source src="/Video/smashfootball.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-black/60" />
        </motion.div>

        {/* Grid */}
        <motion.div
          className="absolute inset-0 z-0 pointer-events-none"
          style={{ opacity: gridOpacity }}
        >
          <svg width="100%" height="100%">
            <defs>
              <pattern
                id="grid"
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
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </motion.div>

        {/* 1. Hero Content Section (The Text and Floating Icons) */}
        <motion.div
          style={{
            opacity: contentOpacity,
            scale: contentScale,
            // Hide pointer events when faded out so video buttons are clickable
            pointerEvents: useTransform(
              scrollYProgress,
              [0.3, 0.4],
              ["auto", "none"],
            ),
          }}
          className="relative z-10 flex flex-col items-center justify-center h-full px-6 text-center w-full"
        >
          {/* Floating Images */}
          <motion.div
            style={{ y: img1Parallax }}
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-[15%] left-[5%] w-32 h-32 md:w-56 md:h-56 hidden sm:block pointer-events-none"
          >
            <Image
              src="/Img/shutel.png"
              alt="Shuttle"
              fill
              priority
              className="object-contain"
            />
          </motion.div>

          <motion.div
            style={{ y: img2Parallax }}
            animate={{ y: [0, 25, 0] }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.5,
            }}
            className="absolute bottom-[15%] right-[5%] w-36 h-36 md:w-64 md:h-64 hidden sm:block pointer-events-none"
          >
            <Image
              src="/Img/pickeball.png"
              alt="Pickle"
              fill
              className="object-contain"
            />
          </motion.div>

          {/* Text Content */}
          <div className="max-w-4xl relative z-30">
            <motion.p className="text-white text-[12px] font-black uppercase tracking-[0.4em] mb-5">
              Trusted by 1000+ players across Delhi NCR
            </motion.p>
            <h2 className="text-5xl md:text-8xl font-black tracking-tighter mb-8">
              Play. Train. Compete. <br />
              <span className="text-white">All in One Place.</span>
            </h2>
            <p className="font-medium text-(--dark-text) text-lg md:text-xl max-w-2xl mx-auto mb-10">
              Book premium sports venues, Train with expert coaches, <br />
              Or host unforgettable game events.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-black border border-(--highlight) text-white px-10 py-5 rounded-full font-black uppercase text-xs tracking-widest hover:scale-105 transition-transform">
                Book a Slot
              </button>
              <button className="border border-white px-10 py-5 rounded-full font-black uppercase text-xs tracking-widest hover:bg-white/5 transition">
                Explore Venues
              </button>
            </div>
          </div>
        </motion.div>

        {/* Layer 2: The Bento Hero Component */}
        <motion.div
          style={{ y: heroY }}
          initial={{
            width: "70%",
            height: "420px", // keeps the trending/video section height
            left: "50%",
            x: "-50%",
            bottom: "2rem", // starts near bottom like a trending hero card
            borderRadius: "24px",
          }}
          animate={{
            width: "100%",
            height: "100vh",
            left: 0,
            x: 0,
            bottom: 0,
            borderRadius: "0px",
          }}
          transition={{
            duration: 1.4,
            ease: [0.22, 1, 0.36, 1], // smoother cinematic expansion
            delay: 0.3,
          }}
          className="absolute z-20 bg-black overflow-hidden"
        >
          {/* Bottom trending hero / video expands into fullscreen */}
          <HeroVideo progress={heroProgress} />
        </motion.div>
      </div>

      {/* 3. Spacer to handle the transition out */}
      {/* This ensures the scroll continues until the container is done */}
      <div className="h-screen" />
    </section>
  );
};

export default Hero;
