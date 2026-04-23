"use client";

import { useState } from "react";
import { AnimatePresence, motion,Variants } from "framer-motion";
import Button from "@/components/Header/NavButton"
import Nav from "@/components/Header/Nav/page";

const menuVariants:Variants = {
  open: {
    width: "480px",
    height: "650px",
    top: "-25px",
    right: "-25px",
    transition: { duration: 0.75, type: "tween", ease: [0.76, 0, 0.24, 1] },
  },
  closed: {
    width: "100px",
    height: "40px",
    top: "0px",
    right: "0px",
    transition: { duration: 0.75, delay: 0.35, type: "tween", ease: [0.76, 0, 0.24, 1] },
  },
};

export default function Header() {
  const [isActive, setIsActive] = useState(false);

  const toggleMenu = () => setIsActive((prev) => !prev);

  return (
    <header className="fixed top-[50px] right-[50px]">
      <motion.div
        className="relative w-[480px] h-[650px] bg-[#c9fd74] rounded-[25px]"
        variants={menuVariants}
        animate={isActive ? "open" : "closed"}
        initial="closed"
      >
        <AnimatePresence mode="wait">
          {isActive && <Nav />}
        </AnimatePresence>
      </motion.div>
      
      <Button isActive={isActive} toggleMenu={toggleMenu} />
    </header>
  );
}