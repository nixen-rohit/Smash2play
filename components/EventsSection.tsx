"use client";

import { motion } from "framer-motion";
import { HiMiniTrophy } from "react-icons/hi2";
import { FaUser, FaStar, FaArrowRight, FaBuilding, FaUsers, FaClipboardCheck, FaCalendar, FaUtensils } from "react-icons/fa";
import Image from 'next/image';
 

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
      icon: <FaUsers className="w-7 h-7 sm:w-8 sm:h-8 text-lime-400" />,
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
      icon: <FaStar className="w-7 h-7 sm:w-8 sm:h-8 text-lime-400" />,
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
    { title: "Match coordination", icon: <FaClipboardCheck className="w-5 h-5" /> },
    { title: "Event management", icon: <FaCalendar className="w-5 h-5" /> },
    { title: "Five star Food", icon: <FaUtensils className="w-5 h-5" /> },
  ];

type EventImage = {
  i: number;
  img: string;
};

const eventsImg: EventImage[] = [
  { i: 1, img: '/Img/Corporate.jpg' },
  { i: 2, img: '/Img/Team.webp' },
  { i: 3, img: '/Img/Trophy.jpg' },
  { i: 4, img: '/Img/Trophy.jpg' },
];

const sizePatterns = [
  'aspect-square',         // square
  'aspect-[4/5]',         // vertical
  'aspect-[16/9]',        // horizontal
  'aspect-[3/4]',         // portrait
  'aspect-video',         // wide
  'aspect-[5/4]',         // slightly horizontal
];
  return (
    <section className="bg-(--dark-bg) py-14 sm:py-16 md:py-20 px-4 sm:px-6 overflow-hidden">
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
            <span className="text-lime-500 block">Smash2Play</span>
          </h1>
          <p className="text-gray-400 max-w-4xl mx-auto text-sm sm:text-base md:text-lg leading-relaxed">
            From corporate tournaments to birthday parties — we turn your events into high-energy, memorable experiences.
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
              className="bg-(--card-bg) border border-green-900/50 p-5 sm:p-6 md:p-8 rounded-3xl hover:border-lime-500/50 transition-all group"
            >
              <div className="bg-green-950 w-14 h-14 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center mb-5 sm:mb-6 group-hover:scale-110 transition-transform">
                {service.icon}
              </div>
              <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">{service.title}</h3>
              <p className="text-gray-400 mb-5 sm:mb-6 text-sm sm:text-base leading-relaxed">{service.description}</p>
              <ul className="space-y-3">
                {service.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm sm:text-base text-gray-300">
                    <div className="w-1.5 h-1.5 rounded-full bg-lime-500 mt-2 shrink-0" />
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
          <span className="inline-block bg-lime-500/10 text-lime-400 px-4 py-1.5 rounded-full text-sm font-semibold mb-4 border border-lime-500/20">
            500+ successful events hosted
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold mb-3">Trusted by Leading Companies & Banks</h2>
          <p className="text-gray-400 max-w-3xl mx-auto mb-8 text-sm sm:text-base leading-relaxed">
            We’ve successfully hosted events for top corporates and institutions — delivering high-energy, well-organized experiences every time.
          </p>

          {/* Image Placeholder Grid (Replace with real photos) */}
     <section className="w-full py-8">
      <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[10px] gap-4">
        {eventsImg.map((item, index) => {
          const pattern = sizePatterns[index % sizePatterns.length];

          const spanClass =
            pattern === 'aspect-square'
              ? 'row-span-20'
              : pattern === 'aspect-[4/5]'
              ? 'row-span-28'
              : pattern === 'aspect-[16/9]'
              ? 'row-span-18 col-span-2 md:col-span-2'
              : pattern === 'aspect-[3/4]'
              ? 'row-span-30'
              : pattern === 'aspect-video'
              ? 'row-span-18 col-span-2'
              : 'row-span-22';

          return (
            <motion.div
              key={item.i}
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              whileHover={{ scale: 1.02 }}
              className={`
                group relative overflow-hidden rounded-3xl
                ${spanClass}
              `}
            >
              <div className="relative h-full w-full">
                <Image
                  src={item.img}
                  alt={`Event ${item.i}`}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 768px) 50vw, 25vw"
                  priority={index < 2}
                />
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
         </motion.div>

        {/* What We Handle Card (Grid + Bottom Buttons) */}
        <div className="relative bg-[#0d330d] rounded-[2rem] p-5 sm:p-8 md:p-12 border border-lime-900/30 overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-lime-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 relative z-10">
            {/* Left: What We Handle */}
            <div className="lg:col-span-1">
              <h3 className="text-2xl sm:text-3xl font-bold mb-6 text-lime-50">What We Handle</h3>
              <div className="space-y-3">
                {handledItems.map((item, i) => (
                  <div key={i} className="flex items-center gap-3 p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-colors cursor-default">
                    <div className="text-lime-400 shrink-0">{item.icon}</div>
                    <span className="font-medium text-base sm:text-lg text-gray-200">{item.title}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Middle: Why Choose Us */}
            <div className="lg:col-span-1 bg-white/5 rounded-2xl p-6 border border-lime-900/20 flex flex-col justify-between">
              <div>
                <h4 className="text-xl font-semibold mb-4 text-lime-50">Why Choose Us</h4>
                <ul className="space-y-3 text-gray-300 text-sm sm:text-base">
                  <li className="flex items-start gap-2"><span className="text-lime-400 mt-1">✓</span> End-to-end coordination</li>
                  <li className="flex items-start gap-2"><span className="text-lime-400 mt-1">✓</span> Verified vendor network</li>
                  <li className="flex items-start gap-2"><span className="text-lime-400 mt-1">✓</span> Real-time timeline tracking</li>
                </ul>
              </div>
            </div>

            {/* Right: Trust Quote */}
            <div className="lg:col-span-1 bg-gradient-to-br from-lime-900/40 to-[#0d330d] rounded-2xl p-6 border border-lime-800/30 flex flex-col justify-center items-center text-center">
              <div className="w-14 h-14 bg-lime-500/20 rounded-full flex items-center justify-center mb-4 text-lime-400">
                <FaArrowRight size={22} className="rotate-[-45deg]" />
              </div>
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed font-medium">
                &quot;You just show up and enjoy.&quot;
              </p>
            </div>

            {/* Bottom: Full-Width Buttons */}
            <div className="lg:col-span-3 flex flex-col sm:flex-row justify-center gap-4 mt-6 pt-6 border-t border-lime-900/30">
              <button className="w-full sm:w-auto flex items-center justify-center gap-2 bg-lime-500 hover:bg-lime-400 text-black font-bold py-3.5 px-8 rounded-full transition-all transform hover:scale-[1.02] hover:shadow-lg hover:shadow-lime-500/20 focus:outline-none focus:ring-2 focus:ring-lime-400 focus:ring-offset-2 focus:ring-offset-[#0d330d]">
                Plan Your Event <FaArrowRight size={18} />
              </button>
              <button className="w-full sm:w-auto flex items-center justify-center gap-2 bg-transparent border-2 border-lime-700 hover:border-lime-500 hover:bg-lime-500/10 text-lime-400 hover:text-lime-300 font-bold py-3.5 px-8 rounded-full transition-all focus:outline-none focus:ring-2 focus:ring-lime-400 focus:ring-offset-2 focus:ring-offset-[#0d330d]">
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
          <div className="bg-[#0a290a] border border-green-900/50 p-6 rounded-2xl">
            <h3 className="text-xl font-bold mb-2 text-lime-50">Coaching Programs</h3>
            <p className="text-gray-400 mb-4 text-sm">Train Like a Pro</p>
            <div className="flex flex-wrap gap-2">
              {["Beginner", "Intermediate", "Advanced", "Adult batches"].map((tag) => (
                <span key={tag} className="px-3 py-1 bg-green-900/50 text-gray-300 text-xs rounded-full border border-green-800/50">
                  {tag}
                </span>
              ))}
            </div>
            <p className="mt-3 text-lime-400/80 text-sm font-medium">Expert coaches + structured training</p>
          </div>

          <div className="bg-[#0a290a] border border-green-900/50 p-6 rounded-2xl">
            <h3 className="text-xl font-bold mb-2 text-lime-50">Events & Tournaments</h3>
            <p className="text-gray-400 mb-4 text-sm">Compete. Connect. Celebrate.</p>
            <div className="flex flex-wrap gap-2">
              {["Corporate tournaments", "Weekend leagues", "Community events"].map((tag) => (
                <span key={tag} className="px-3 py-1 bg-green-900/50 text-gray-300 text-xs rounded-full border border-green-800/50">
                  {tag}
                </span>
              ))}
            </div>
            <p className="mt-3 text-lime-400/80 text-sm font-medium">Open to all skill levels</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default EventsSection;