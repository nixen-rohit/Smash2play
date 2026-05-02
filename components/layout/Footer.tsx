"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaYoutube, FaInstagram, FaFacebookF } from "react-icons/fa6";

export default function Footer() {
  // Define the text to repeat
  const brandText = "SMASH2PLAY";

  return (
    <footer className="relative bg-black text-white pt-12 pb-8 px-6 overflow-hidden">
      <div className="max-w-[1440px] mx-auto flex flex-col h-full min-h-[60vh] justify-between">
        {/* --- Top Utility Bar (Empty as per original) --- */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 text-[12px] md:text-xs 2xl:text-sm font-[Helvetica] uppercase tracking-widest opacity-80"></div>

        {/* --- Framer Motion Marquee --- */}
        <div className="relative flex overflow-hidden py-10 select-none">
          <motion.div
            className="flex whitespace-nowrap"
            animate={{ x: ["-50%", "0%"] }}
            transition={{
              duration: 20, // Adjust speed here (higher = slower)
              ease: "linear",
              repeat: Infinity,
            }}
          >
            {/* Render the brand name multiple times to fill the width and allow looping */}
            {[...Array(4)].map((_, i) => (
              <h2
                key={i}
                className="text-[20vw] font-bold leading-none pr-20 text-white"
              >
                {brandText}
              </h2>
            ))}
          </motion.div>
        </div>

        {/* --- Bottom Action Bar --- */}
        <div className="flex flex-col lg:flex-row justify-between items-center gap-8 border-t border-white/10 pt-10">
          {/* Social Icons */}
          <div className="flex items-center gap-5 text-xl">
            <Link href="#" className="hover:scale-110 transition-transform">
              <FaYoutube />
            </Link>
            <Link href="#" className="hover:scale-110 transition-transform">
              <FaInstagram />
            </Link>
            <Link href="#" className="hover:scale-110 transition-transform">
              <FaFacebookF />
            </Link>
          </div>

          {/* Copyright Section */}
          <div className="text-[12px] uppercase tracking-widest text-center lg:text-right">
            <p>
              © 2026 by SMASH2PLAY. Powered and secured by{" "}
              <span className="underline cursor-pointer">PELTOWN</span>
            </p>
          </div>
        </div>
      </div>

      {/* Subtle Grainy Overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-10 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]"></div>
    </footer>
  );
}
