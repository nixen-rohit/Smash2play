"use client";
import { motion } from "framer-motion";
import Image from "next/image";
const Test = () => {
  return (
    <section
      id="home"
      className="h-svh w-full bg-grid flex flex-col relative z-11 overflow-hidden bg-[#d8d5d5] "
    >
      {/* ── DESKTOP (lg+) ── */}
      <div className="hidden lg:flex h-full w-full">
        {/* Heading */}
        <motion.h1
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.5, delay: 2, ease: "easeOut" }}
          className=" absolute top-0 left-1/2 -translate-x-1/2 text-[clamp(3rem,8vw,7.5rem)] font-bold text-center text-nowrap pointer-events-none z-10 uppercase text-gray-800 "
          style={{ WebkitTextStroke: "2px #878d8c" }}
        >
          UI/UX Developer
        </motion.h1>

        {/* Left robot */}
        <motion.div
          initial={{ x: 0, opacity: 0 }}
          animate={{ x: -50, opacity: 1 }}
          transition={{ duration: 1.5, delay: 1.5, ease: "easeOut" }}
          className="bg-red-500 hover-float absolute -bottom-[clamp(2rem,6vw,5rem)] z-5 left-[clamp(8.5rem,6vw,15.5rem)] h-[67vh] w-[clamp(200px,28vw,33.33%)] flex items-end justify-center px-4 xl:left-49"
        >
          <Image
            height={500}
            width={500}
            quality={100}
            src="/Img/pickeball.png"
            alt="Robot illustration"
            className="h-full w-full object-contain"
          />
        </motion.div>

        {/* Center robot */}
        <motion.div
          initial={{ y: 100, scale: 0.8, opacity: 0.9 }}
          animate={{ y: 0, scale: 1, opacity: 1 }}
          transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
          className="bg-blue-400 hover-float   overflow-hidden absolute z-10 bottom-0 left-1/2 -translate-x-1/2 
          w-[calc(100%-2rem)] h-full "
        >
          <Image
            height={500}
            width={500}
            quality={100}
            priority
            sizes="100vw"
         src="/Img/pickeball.png"
            alt="center Robot image"
            className="w-full h-full object-cover object-top"
          />
        </motion.div>

        {/* Right robot */}
        <motion.div
          initial={{ x: 0, opacity: 0 }}
          animate={{ x: 50, opacity: 1 }}
          transition={{ duration: 1.5, delay: 1.5, ease: "easeOut" }}
          className="bg-green-500 hover-float absolute  -bottom-[clamp(2rem,6vw,5rem)] z-5 lg:right-[clamp(8.5rem,6vw,15.5rem)] xl:right-49
          h-[67vh] w-[clamp(200px,28vw,33.33%)]  flex items-end justify-center px-4 "
        >
          <Image
            height={500}
            width={500}
            quality={100}
            sizes="100vw"
           src="/Img/pickeball.png"
            alt="Robot illustration"
            className="h-full w-full object-contain -scale-x-100"
          />
        </motion.div>

        {/* Bottom gradient */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.5, delay: 2, ease: "easeOut" }}
          className="pointer-events-none absolute bottom-0 left-0 w-full h-32 bg-linear-to-t from-black/50 to-transparent z-10"
        />
      </div>

      {/* ── TABLET (md–lg) ── */}
      {/* <div className="hidden md:flex lg:hidden h-svh w-full flex-col items-center justify-start overflow-hidden">
        <motion.h1
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.3, delay: 2, ease: "easeOut" }}
          style={{ WebkitTextStroke: "2px #878d8c" }}
          className=" absolute top-16 left-1/2 -translate-x-1/2 text-[clamp(3.5rem,7vw,7rem)] uppercase font-bold text-gray-800 text-center pointer-events-none z-10 whitespace-nowrap "
        >
          UI/UX <span className="block">Developer</span>
        </motion.h1>

        <motion.div
          initial={{ y: 100, scale: 0.8, opacity: 0.9 }}
          animate={{ y: 0, scale: 1, opacity: 1 }}
          transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
          className="hover-float bg-transparent overflow-hidden absolute bottom-0 left-1/2 -translate-x-1/2 z-10 w-full h-[85vh]"
        >
          <Image
            height={600}
            width={600}
            quality={100}
            priority
            sizes="100vw"
            src="/img/model-size.webp"
            alt="Robot illustration"
            className="w-full h-full object-cover object-top"
          />
        </motion.div>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.5, delay: 2, ease: "easeOut" }}
          className="pointer-events-none absolute bottom-0 left-0 w-full h-32 bg-linear-to-t from-black/40 to-transparent z-10"
        />
      </div> */}

      {/* ── MOBILE (< md) ── */}
      {/* <div className="md:hidden h-svh w-full flex flex-col items-center justify-center overflow-hidden">
        <motion.h1
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.3, delay: 2, ease: "easeOut" }}
          style={{ WebkitTextStroke: "2px #878d8c" }}
          className=" absolute top-16 left-1/2 -translate-x-1/2   text-6xl   uppercase font-bold text-gray-800 text-center   pointer-events-none z-10 w-[90%] leading-tight "
        >
          UI/UX <span className="block">Developer</span>
        </motion.h1>

        <motion.div
          initial={{ y: 100, opacity: 0, scale: 0.9 }}
          animate={{ y: 0, opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 1, ease: "easeOut" }}
          className="absolute bottom-0 left-0 w-full"
        >
          <Image
            height={600}
            width={600}
            quality={100}
            priority
            sizes="100vw"
             src="/img/model-size.webp"
            alt="Robot illustration"
            className="w-full h-auto object-contain max-h-[75vh] mx-auto"
          />
        </motion.div>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.5, delay: 2, ease: "easeOut" }}
          className="pointer-events-none absolute bottom-0 left-0 w-full h-32 bg-linear-to-t from-black/50 to-transparent z-10"
        />
      </div> */}
    </section>
  );
};

export default Test;