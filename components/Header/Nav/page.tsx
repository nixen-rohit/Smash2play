"use client";

import { motion } from "framer-motion";
import { perspective, slideIn } from "@/components/Header/Nav/anim"
import { links, footerLinks } from "@/components/Header/Nav/data"

export default function Navigation() {
  return (
    <nav className="flex flex-col justify-between pt-[100px] px-[40px] pb-[50px] h-full">
      {/* Main Links */}
      <div className="flex flex-col gap-[10px]">
        {links.map((link, i) => {
          const { title, href } = link;
          return (
            <div
              key={`b_${i}`}
              className="perspective-[120px] perspective-origin:bottom"
            >
              <motion.a
                href={href}
                custom={i}
                variants={perspective}
                initial="initial"
                animate="enter"
                exit="exit"
                className="no-underline text-black text-[46px] block"
              >
                {title}
              </motion.a>
            </div>
          );
        })}
      </div>

      {/* Footer Links */}
      <motion.div className="flex flex-wrap">
        {footerLinks.map((link, i) => {
          const { title, href } = link;
          return (
            <motion.a
              key={`f_${i}`}
              href={href}
              variants={slideIn}
              custom={i}
              initial="initial"
              animate="enter"
              exit="exit"
              className="w-1/2 mt-[5px] no-underline text-black"
            >
              {title}
            </motion.a>
          );
        })}
      </motion.div>
    </nav>
  );
}