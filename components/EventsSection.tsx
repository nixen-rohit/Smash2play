"use client";
import CircularGallery from "@/components/ui/CircularGallery";
import { motion } from "framer-motion";
import { useState, useCallback } from "react";
import PixelTransition from "@/components/ui/PixelTransition";
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

const images = [
  "/Img/ball.png",
  "/Img/Corporate.jpg",
  "/Img/cricket-turf.jpg",
  "/Img/Team.webp",
];

const EventsSection = () => {
  const fadeInVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const [currentImgIndex, setCurrentImgIndex] = useState(0);

  const handleCycleStart = useCallback(() => {
    setCurrentImgIndex((prev) => (prev + 1) % images.length);
  }, []);

  const services = [
    {
      title: "Corporate Events",
      icon: <FaUsers className="w-7 h-7 sm:w-8 sm:h-8 text-(--highlight)" />,
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
      icon: <FaStar className="w-7 h-7 sm:w-8 sm:h-8 text-(--highlight)" />,
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

  const CardContent = (
    <div className="w-full h-full bg-linear-to-br from-(--highlight)/10 to-(--card-bg) p-6 flex flex-col justify-center items-center text-center border border-(--highlight)/10">
      <div className="w-14 h-14 bg-(--highlight)/10 rounded-full flex items-center justify-center mb-4 text-(--highlight)">
        <FaArrowRight size={22} className="-rotate-45" />
      </div>
      <p className="text-(--p) text-sm sm:text-base leading-relaxed font-medium">
        &quot;You just show up and enjoy.&quot;
      </p>
    </div>
  );

  const HoverImage = (
    <div className="w-full h-full">
      <Image
        width={500}
        height={500}
        src={images[currentImgIndex]}
        alt="Event highlight"
        className="w-full h-full object-cover"
      />
    </div>
  );

  const coachingTags = [
    "Beginner",
    "Intermediate",
    "Advanced",
    "Adult batches",
  ];
  const eventTags = [
    "Corporate tournaments",
    "Weekend leagues",
    "Community events",
  ];

  return (
    <section
      id="services"
      className="bg-(--white-bg) py-14 sm:py-16 md:py-20 px-4 sm:px-6 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto space-y-16 sm:space-y-20">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInVariants}
          className="text-center"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-(--white-text) font-extrabold mb-4 sm:mb-6 leading-tight">
            Host Unforgettable Events at{" "}
            <span className="text-(--highlight) block">Smash2Play</span>
          </h1>
          <p className="text-(--p) max-w-4xl mx-auto text-sm sm:text-base md:text-lg leading-relaxed">
            From corporate tournaments to birthday parties — we turn your events
            into high-energy, memorable experiences.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInVariants}
              className="bg-(--dark-bg)/10  border border-(--highlight)/20 p-5 sm:p-6 md:p-8 rounded-3xl hover:border-(--highlight)/50 transition-all group"
            >
              <div className="bg-(--dark-bg) w-14 h-14 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center mb-5 sm:mb-6 group-hover:scale-110 transition-transform">
                {service.icon}
              </div>
              <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-(--white-text)">
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
                    <div className="w-1.5 h-1.5 rounded-full bg-(--highlight) mt-2 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInVariants}
          className="text-center"
        >
          <span className="inline-block bg-(--highlight)/10 text-(--highlight) px-4 py-1.5 rounded-full text-sm font-semibold mb-4 border border-(--highlight)/20">
            500+ successful events hosted
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold mb-3 text-(--white-text)">
            Trusted by Leading Companies & Banks
          </h2>
          <p className="text-(--p) max-w-3xl mx-auto mb-8 text-sm sm:text-base leading-relaxed">
            We&apos;ve successfully hosted events for top corporates and
            institutions — delivering high-energy, well-organized experiences
            every time.
          </p>
          <div className="h-[600px] relative">
            <CircularGallery
              bend={1}
              textColor="#ffffff"
              borderRadius={0.05}
              scrollSpeed={2}
              scrollEase={0.05}
            />
          </div>
        </motion.div>

        <div className="relative bg-(--dark-bg)/10  rounded-4xl p-5 sm:p-8 md:p-12 border border-(--highlight)/20 overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-(--highlight)/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 relative z-10">
            <div className="lg:col-span-1">
              <h3 className="text-2xl sm:text-3xl font-bold mb-6 text-(--white-text)">
                What We Handle
              </h3>
              <div className="space-y-3">
                {handledItems.map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 p-3 rounded-xl bg-(--white-bg) hover:bg-(--highlight)/10 transition-colors cursor-default"
                  >
                    <div className="text-(--highlight) shrink-0">
                      {item.icon}
                    </div>
                    <span className="font-medium text-base sm:text-lg text-(--white-text)">
                      {item.title}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-1 bg-(--white-bg) rounded-2xl p-6 border border-(--highlight)/10 flex flex-col justify-between">
              <div>
                <h4 className="text-xl font-semibold mb-4 text-(--white-text)">
                  Why Choose Us
                </h4>
                <ul className="space-y-3 text-(--p) text-sm sm:text-base">
                  <li className="flex items-start gap-2">
                    <span className="text-(--highlight) mt-1">✓</span>{" "}
                    End-to-end coordination
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-(--highlight) mt-1">✓</span> Verified
                    vendor network
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-(--highlight) mt-1">✓</span> Real-time
                    timeline tracking
                  </li>
                </ul>
              </div>
            </div>

            <div className="lg:col-span-1">
              <PixelTransition
                firstContent={CardContent}
                secondContent={HoverImage}
                gridSize={12}
                pixelColor="#bef365"
                animationStepDuration={0.4}
                autoPlay={true}
                autoPlayInterval={3000}
                onCycleStart={handleCycleStart} // <-- add this
                className="w-full! h-full! rounded-2xl border border-(--highlight)/10"
                aspectRatio="100%"
              />
            </div>

            <div className="lg:col-span-3 flex flex-col sm:flex-row justify-center gap-4 mt-6 pt-6 border-t border-(--highlight)/10">
              <button className="w-full sm:w-auto flex items-center justify-center gap-2 bg-(--highlight) hover:bg-(--highlight)/90 text-(--white-bg) font-bold py-3.5 px-8 rounded-full transition-all transform hover:scale-[1.02]">
                Plan Your Event <FaArrowRight size={18} />
              </button>
              <button className="w-full sm:w-auto flex items-center justify-center gap-2 bg-transparent border-2 border-(--highlight) hover:bg-(--highlight)/10 text-(--highlight) font-bold py-3.5 px-8 rounded-full transition-all">
                Talk to Our Team <FaArrowRight size={18} />
              </button>
            </div>
          </div>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInVariants}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 p-4"
        >
          {/* Coaching Card */}
          <motion.div
            whileHover={{ y: -5 }}
            className="group relative bg-(--dark-bg)/10  border border-(--highlight)/20 p-8 rounded-4xl overflow-hidden transition-colors hover:border-(--highlight)/50"
          >
            {/* Decorative background glow */}
            <div className="absolute -top-24 -right-24 w-48 h-48 bg-(--highlight)/10 blur-[80px] group-hover:bg-(--highlight)/20 transition-all" />

            <div className="relative z-10">
              <span className="text-(--highlight) text-xs font-bold uppercase tracking-widest mb-4 block">
                Expert Training
              </span>
              <h3 className="text-3xl font-bold mb-3 text-(--white-text) tracking-tight">
                Coaching Programs
              </h3>
              <p className="text-(--p) mb-8 text-base leading-relaxed opacity-80">
                Elevate your game with structured modules designed for every
                skill level.
                <span className="block font-semibold mt-1 text-(--white-text)">
                  Train Like a Pro.
                </span>
              </p>

              <div className="flex flex-wrap gap-2">
                {coachingTags.map((tag) => (
                  <span
                    key={tag}
                    className="px-4 py-1.5 bg-(--highlight)/10 text-(--highlight) text-[11px] font-bold uppercase rounded-full border border-(--highlight)/10 group-hover:bg-(--highlight) group-hover:text-black transition-colors"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Events Card */}
          <motion.div
            whileHover={{ y: -5 }}
            className="group relative bg-(--dark-bg)/10  border border-(--highlight)/20 p-8 rounded-4xl overflow-hidden transition-colors hover:border-(--highlight)/50"
          >
            {/* Decorative background glow */}
            <div className="absolute -top-24 -right-24 w-48 h-48 bg-(--highlight)/10 blur-[80px] group-hover:bg-(--highlight)/20 transition-all" />

            <div className="relative z-10">
              <span className="text-(--highlight) text-xs font-bold uppercase tracking-widest mb-4 block">
                Competitive Play
              </span>
              <h3 className="text-3xl font-bold mb-3 text-(--white-text) tracking-tight">
                Events & Tournaments
              </h3>
              <p className="text-(--p) mb-8 text-base leading-relaxed opacity-80">
                From corporate showdowns to community matchups.
                <span className="block font-semibold mt-1 text-(--white-text)">
                  Compete. Connect. Celebrate.
                </span>
              </p>

              <div className="flex flex-wrap gap-2">
                {eventTags.map((tag) => (
                  <span
                    key={tag}
                    className="px-4 py-1.5 bg-(--highlight)/10 text-(--highlight) text-[11px] font-bold uppercase rounded-full border border-(--highlight)/10 group-hover:bg-(--highlight) group-hover:text-black transition-colors"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default EventsSection;
