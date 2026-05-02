"use client";
import CircularGallery from "@/components/ui/CircularGallery";
import { motion } from "framer-motion";
import { HiMiniTrophy } from "react-icons/hi2";
import React, { useMemo } from "react";
import PixelTransition from "@/components/ui/PixelTransition"; // Adjust path as needed
import {
  FaUser,
  FaStar,
  FaArrowRight,
  FaBuilding,
  FaUsers,
  FaClipboardCheck,
  FaCalendar,
  FaUtensils,
} from "react-icons/fa";
import Image from "next/image";

const EventsSection = () => {
  const fadeInVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const services = [
    {
      title: "Corporate Events",
      icon: <FaUsers className="w-7 h-7 sm:w-8 sm:h-8 text-(--green)" />,
      description: "Perfect for companies, startups & teams",
      items: [
        "Team-building sports days",
        "Corporate tournaments & leagues",
        "Custom event planning",
        "End-to-end execution",
      ],
    },
    {
      title: "Birthday Parties",
      icon: <FaStar className="w-7 h-7 sm:w-8 sm:h-8 text-(--green)" />,
      description: "A unique way to celebrate",
      items: [
        "Sports-themed birthday celebrations",
        "Games, activities & fun competitions",
        "Dedicated space + event support",
      ],
    },
  ];

  const handledItems = [
    { title: "Venue setup", icon: <FaBuilding className="w-5 h-5" /> },
    { title: "Equipment & referees", icon: <FaUser className="w-5 h-5" /> },
    {
      title: "Match coordination",
      icon: <FaClipboardCheck className="w-5 h-5" />,
    },
    { title: "Event management", icon: <FaCalendar className="w-5 h-5" /> },
    { title: "Five star Food", icon: <FaUtensils className="w-5 h-5" /> },
  ];

  // 1. Array of random images
  const images = [
    "/Img/ball.png",
    "/Img/Corporate.jpg",
    "/Img/cricket-turf.jpg",
    "/Img/Team.webp",
  ];

  // 2. Memoize a random image so it doesn't change on every re-render
  // but stays consistent for this specific card instance.
  const randomImg = useMemo(
    () => images[Math.floor(Math.random() * images.length)],
    [],
  );

  // 3. Your original card content
  const CardContent = (
    <div className="w-full h-full bg-linear-to-br from-(--green)/10 to-(--card-bg) p-6 flex flex-col justify-center items-center text-center border border-(--green)/10">
      <div className="w-14 h-14 bg-(--green)/10 rounded-full flex items-center justify-center mb-4 text-(--green)">
        <FaArrowRight size={22} className="-rotate-45" />
      </div>
      <p className="text-(--p) text-sm sm:text-base leading-relaxed font-medium">
        &quot;You just show up and enjoy.&quot;
      </p>
    </div>
  );

  // 4. The Image content for the hover state
  const HoverImage = (
    <div className="w-full h-full">
      <img
        src={randomImg}
        alt="Random Tech"
        className="w-full h-full object-cover"
      />
    </div>
  );

  return (
    <section
      id="services"
      className="bg-(--dark-bg) py-14 sm:py-16 md:py-20 px-4 sm:px-6 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto space-y-16 sm:space-y-20">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInVariants}
          className="text-center"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-(--dark-text) font-extrabold mb-4 sm:mb-6 leading-tight">
            Host Unforgettable Events at{" "}
            <span className="text-(--green) block">Smash2Play</span>
          </h1>
          <p className="text-(--p) max-w-4xl mx-auto text-sm sm:text-base md:text-lg leading-relaxed">
            From corporate tournaments to birthday parties — we turn your events
            into high-energy, memorable experiences.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInVariants}
              className="bg-(--card-bg) border border-(--green)/20 p-5 sm:p-6 md:p-8 rounded-3xl hover:border-(--green)/50 transition-all group"
            >
              <div className="bg-[#0a290a] w-14 h-14 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center mb-5 sm:mb-6 group-hover:scale-110 transition-transform">
                {service.icon}
              </div>
              <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-(--dark-text)">
                {service.title}
              </h3>
              <p className="text-(--p) mb-5 sm:mb-6 text-sm sm:text-base leading-relaxed">
                {service.description}
              </p>
              <ul className="space-y-3">
                {service.items.map((item, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 text-sm sm:text-base text-(--p)"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-(--green) mt-2 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Trust & Visual Highlight */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInVariants}
          className="text-center"
        >
          <span className="inline-block bg-(--green)/10 text-(--green) px-4 py-1.5 rounded-full text-sm font-semibold mb-4 border border-(--green)/20">
            500+ successful events hosted
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold mb-3 text-(--dark-text)">
            Trusted by Leading Companies & Banks
          </h2>
          <p className="text-(--p) max-w-3xl mx-auto mb-8 text-sm sm:text-base leading-relaxed">
            We&apos;ve successfully hosted events for top corporates and
            institutions — delivering high-energy, well-organized experiences
            every time.
          </p>

          {/* images */}
          <div style={{ height: "600px", position: "relative" }}>
            <CircularGallery
              bend={3}
              textColor="#ffffff"
              borderRadius={0.05}
              scrollSpeed={2}
              scrollEase={0.05}
            />
          </div>
        </motion.div>

        {/* What We Handle Card */}
        <div className="relative bg-(--card-bg) rounded-4xl p-5 sm:p-8 md:p-12 border border-(--green)/20 overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-(--green)/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 relative z-10">
            <div className="lg:col-span-1">
              <h3 className="text-2xl sm:text-3xl font-bold mb-6 text-(--dark-text)">
                What We Handle
              </h3>
              <div className="space-y-3">
                {handledItems.map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 p-3 rounded-xl bg-(--dark-bg) hover:bg-[#1a2526] transition-colors cursor-default"
                  >
                    <div className="text-(--green) shrink-0">{item.icon}</div>
                    <span className="font-medium text-base sm:text-lg text-(--dark-text)">
                      {item.title}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-1 bg-(--dark-bg) rounded-2xl p-6 border border-(--green)/10 flex flex-col justify-between">
              <div>
                <h4 className="text-xl font-semibold mb-4 text-(--dark-text)">
                  Why Choose Us
                </h4>
                <ul className="space-y-3 text-(--p) text-sm sm:text-base">
                  <li className="flex items-start gap-2">
                    <span className="text-(--green) mt-1">✓</span> End-to-end
                    coordination
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-(--green) mt-1">✓</span> Verified
                    vendor network
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-(--green) mt-1">✓</span> Real-time
                    timeline tracking
                  </li>
                </ul>
              </div>
            </div>

            <PixelTransition
              firstContent={CardContent}
              secondContent={HoverImage}
              gridSize={12}
              pixelColor="#22c55e" // Matching your green theme
              animationStepDuration={0.4}
              className="lg:col-span-1 !w-full !h-full rounded-2xl border border-(--green)/10"
              aspectRatio="100%" // Makes it a square, adjust as needed
            />

            <div className="lg:col-span-3 flex flex-col sm:flex-row justify-center gap-4 mt-6 pt-6 border-t border-(--green)/10">
              <button className="w-full sm:w-auto flex items-center justify-center gap-2 bg-(--green) hover:bg-(--green)/90 text-(--dark-bg) font-bold py-3.5 px-8 rounded-full transition-all transform hover:scale-[1.02]">
                Plan Your Event <FaArrowRight size={18} />
              </button>
              <button className="w-full sm:w-auto flex items-center justify-center gap-2 bg-transparent border-2 border-(--green) hover:bg-(--green)/10 text-(--green) font-bold py-3.5 px-8 rounded-full transition-all">
                Talk to Our Team <FaArrowRight size={18} />
              </button>
            </div>
          </div>
        </div>

        {/* Bonus: Coaching & Tournaments */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInVariants}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          <div className="bg-(--card-bg) border border-(--green)/10 p-6 rounded-2xl">
            <h3 className="text-xl font-bold mb-2 text-(--dark-text)">
              Coaching Programs
            </h3>
            <p className="text-(--p) mb-4 text-sm">Train Like a Pro</p>
            <div className="flex flex-wrap gap-2">
              {["Beginner", "Intermediate", "Advanced", "Adult batches"].map(
                (tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-(--green) text-(--white-dark) text-xs rounded-full border border-(--green)/10"
                  >
                    {tag}
                  </span>
                ),
              )}
            </div>
          </div>

          <div className="bg-(--card-bg) border border-(--green)/10 p-6 rounded-2xl">
            <h3 className="text-xl font-bold mb-2 text-(--dark-text)">
              Events & Tournaments
            </h3>
            <p className="text-(--p) mb-4 text-sm">
              Compete. Connect. Celebrate.
            </p>
            <div className="flex flex-wrap gap-2">
              {[
                "Corporate tournaments",
                "Weekend leagues",
                "Community events",
              ].map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-(--green) text-(--white-dark) text-xs rounded-full border border-(--green)/10"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default EventsSection;
