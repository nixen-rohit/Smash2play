"use client";

import React, { useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import Link from "next/link";
import Image from "next/image";

import {
  FaWhatsapp,
  FaPhone,
  FaCalendarCheck,
  FaBars,
  FaXmark,
} from "react-icons/fa6";
const navTabs = [
  { name: "HOME", href: "#" },
  { name: "SPORTS", href: "#sports" },
  { name: "PARTNERSHIP", href: "#partner" },
  { name: "EVENTS", href: "#services" },
  { name: "VENUES", href: "#venues" },
];

export default function Header() {
  const [isHidden, setIsHidden] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { scrollY } = useScroll();

  const wanumber = process.env.NEXT_PUBLIC_WA_NUMBER;
  // --- Scroll Logic: Hide on scroll down, show on scroll up ---
  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    if (latest > previous && latest > 150) {
      setIsHidden(true);
      setIsMenuOpen(false); // Close menu if scrolling down
    } else {
      setIsHidden(false);
    }
  });

  return (
    <>
      <motion.header
        variants={{
          visible: { y: 0 },
          hidden: { y: "-100%" },
        }}
        animate={isHidden ? "hidden" : "visible"}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="fixed top-0 left-0 w-full z-100 bg-transparent backdrop-blur-sm border-b border-(--dark-text)/5"
      >
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          {/* --- Logo --- */}
          <Link href="/" className="group">
            <Image
              src="/Img/logo.webp"
              alt="Smash2play Logo"
              width={80}
              height={80}
              className="object-contain"
              priority
            />
          </Link>

          {/* --- Desktop Navigation Tabs --- */}
          <nav className="hidden lg:flex items-center gap-10">
            {navTabs.map((tab) => (
              <Link key={tab.name} href={tab.href}>
                <motion.div
                  initial="initial"
                  whileHover="hover"
                  animate="initial"
                  className="relative py-2 text-sm font-bold uppercase tracking-[0.25em] text-(--highlight) cursor-pointer"
                >
                  {tab.name}
                  <motion.div
                    variants={{
                      initial: { scaleX: 0 },
                      hover: { scaleX: 1 },
                    }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="absolute bottom-0 left-0 right-0 h-[2px] bg-(--red) origin-center"
                  />
                </motion.div>
              </Link>
            ))}
          </nav>

          {/* --- Mobile/Tablet Menu Toggle --- */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden flex items-center gap-2 text-(--dark-text) font-bold uppercase tracking-widest text-xs"
          >
            {isMenuOpen ? (
              <FaXmark className="text-xl" />
            ) : (
              <FaBars className="text-xl" />
            )}
            Menu
          </button>
        </div>

        {/* --- Mobile Expanded Menu --- */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="lg:hidden bg-(--glass-bg) border-t border-(--dark-text)/20 overflow-hidden rounded-b-2xl"
            >
              <div className="flex flex-col p-8 gap-6">
                {navTabs.map((tab) => (
                  <Link
                    key={tab.name}
                    href={tab.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="text-2xl font-black uppercase tracking-tighter text-(--dark-text) hover:text-(--red) transition-colors"
                  >
                    {tab.name}
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      {/* --- Floating Action Buttons (Always Visible) --- */}
      <div className="fixed text-(--dark-text) bottom-8 right-6 flex flex-col gap-4 z-110">
        {/* WhatsApp FAB */}
        <FloatingIcon
          href={`https://wa.me/${wanumber}`}
          bgColor="bg-(--highlight)"
          icon={<FaWhatsapp className="text-white" />}
          label="WhatsApp"
        />
        {/* Call FAB */}
        <FloatingIcon
          href={`tel:+${wanumber}`}
          bgColor="bg-(--highlight)"
          icon={<FaPhone className="text-white" />}
          label="Call Us"
        />

        {/* Trial FAB */}
        <FloatingIcon
          href="#pricing"
          bgColor="bg-(--highlight)"
          icon={<FaCalendarCheck className="text-white" />}
          label="Book Trial"
        />
      </div>
    </>
  );
}

/**
 * Floating Icon Button
 */
function FloatingIcon({
  href,
  bgColor,
  icon,
  label,
}: {
  href: string;
  bgColor: string;
  icon: React.ReactNode;
  label: string;
}) {
  return (
    <motion.a
      href={href}
      whileHover={{ scale: 1.1, x: -5 }}
      whileTap={{ scale: 0.9 }}
      className={`${bgColor} w-14 h-14 rounded-full flex items-center justify-center text-(--dark-text) text-2xl shadow-2xl relative group`}
    >
      {icon}
      {/* Tooltip Label */}
      <span className="absolute right-16 bg-(--dark-bg) text-black text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded-md opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap shadow-md">
        {label}
      </span>
    </motion.a>
  );
}
