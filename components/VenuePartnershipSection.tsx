"use client";

import { motion ,Variants} from "framer-motion";
import Image from "next/image";
import { FaArrowUp, FaArrowRight, FaHandshake, FaChartLine, FaBuilding, FaTools, FaCog, FaMoneyBillWave } from "react-icons/fa";

// Types
interface FeatureCard {
  title: string;
  description: string;
  icon: React.ReactNode;
  items: string[];
  bg: string;
  img: string;
  dark: boolean;
}

interface PartnershipModel {
  title: string;
  description: string;
  highlight: string;
  icon: React.ReactNode;
  bgGradient: string;
}

const fadeInVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const whatYouGet: FeatureCard[] = [
  {
    title: "In-House Construction",
    description: "End-to-end design & execution",
    icon: <FaTools className="w-6 h-6" />,
    items: ["End-to-end design & execution", "High-quality turf, courts & lighting", "Fast & reliable delivery"],
    bg: "bg-[var(--card-bg)]",
    img: "https://images.unsplash.com/photo-1529900748604-07564a03e7a6?q=80&w=1000",
    dark: true,
  },
  {
    title: "Complete Operations",
    description: "Daily management handled for you",
    icon: <FaCog className="w-6 h-6" />,
    items: ["Booking system integration", "Staff hiring & maintenance", "Daily management handled"],
    bg: "bg-[var(--card-bg)]",
    img: "https://images.unsplash.com/photo-1574623452334-1e0ac2b7ccb9?q=80&w=1000",
    dark: true,
  },
  {
    title: "Proven Revenue Model",
    description: "Multiple income streams built-in",
    icon: <FaChartLine className="w-6 h-6" />,
    items: ["Pay & play bookings", "Coaching programs", "Tournaments & events"],
    bg: "bg-[var(--card-bg)]",
    img: "https://images.unsplash.com/photo-1571260899304-425eee4c7efc?q=80&w=1000",
    dark: true,
  },
];

const partnershipModels: PartnershipModel[] = [
  {
    title: "Revenue Share",
    description: "You provide land. We build & operate.",
    highlight: "→ You earn passive income like rent",
    icon: <FaHandshake className="w-8 h-8 text-[var(--green)]" />,
    bgGradient: "from-[var(--card-bg)] to-[var(--dark-bg)]",
  },
  {
    title: "Investment Partnership",
    description: "Co-invest and grow together.",
    highlight: "→ Share profits",
    icon: <FaChartLine className="w-8 h-8 text-[var(--green)]" />,
    bgGradient: "from-[var(--card-bg)] to-[var(--dark-bg)]",
  },
  {
    title: "Build & Manage",
    description: "You invest. We construct & run operations.",
    highlight: "→ Zero operational headache",
    icon: <FaBuilding className="w-8 h-8 text-[var(--green)]" />,
    bgGradient: "from-[var(--card-bg)] to-[var(--dark-bg)]",
  },
];

export default function VenuePartnershipSection() {
  return (
    <section className="w-full bg-[var(--dark-bg)] text-[var(--dark-text)] py-16 sm:py-20 px-4 sm:px-8 lg:px-16 overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInVariants}
          className="text-center max-w-4xl mx-auto"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[var(--dark-text)] leading-tight mb-4">
            Build Your Own Sports Venue With{" "}
            <span className="text-[var(--green)]">Smash2Play</span>
          </h2>
          <p className="text-xl sm:text-2xl font-bold text-[var(--green)] mt-2 mb-4">
            We Don&apos;t Just Build Sports Venues. We Build Profitable Businesses.
          </p>
          <p className="text-[var(--p)] text-base sm:text-lg leading-relaxed">
            Have land or planning to invest? We design, construct, and operate high-performing sports venues — so you don&apos;t have to figure it out yourself.
          </p>
        </motion.div>

        {/* What You Get - Animated Cards Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInVariants}
        >
          <h3 className="text-2xl sm:text-3xl font-bold mb-8 text-center text-[var(--dark-text)]">What You Get</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
            {whatYouGet.map((feature) => (
              <motion.div
                key={feature.title}
                whileHover={{ y: -8 }}
                transition={{ type: "spring", stiffness: 300 }}
                className={`
                  group relative rounded-3xl p-6 sm:p-8 overflow-hidden cursor-pointer
                  ${feature.bg} border border-[var(--green)]/20
                  transition-all duration-500 hover:shadow-2xl hover:shadow-[var(--green)]/10
                `}
                style={{ minHeight: "320px" }}
              >
                {/* Content Layer */}
                <div className="relative z-20 flex flex-col h-full">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-[var(--green)]/20 flex items-center justify-center text-[var(--green)]">
                      {feature.icon}
                    </div>
                    <h4 className="text-lg sm:text-xl font-bold text-[var(--dark-text)]">{feature.title}</h4>
                  </div>
                  
                  <p className={`text-sm mb-4 ${feature.dark ? "text-[var(--p)]" : "text-gray-700"}`}>
                    {feature.description}
                  </p>

                  <ul className="space-y-2 mb-6 flex-grow">
                    {feature.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-[var(--dark-text)]/90">
                        <span className="text-[var(--green)] mt-1">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <button
                    className={`
                      mt-auto flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-widest
                      w-fit transition-all duration-300 group-hover:gap-3
                      ${feature.dark ? "text-[var(--green)]" : "text-gray-900"}
                    `}
                  >
                    Learn More
                    <FaArrowUp size={14} className="group-hover:translate-y-[-2px] transition-transform" />
                  </button>
                </div>

                {/* Image Layer - Same animation style as reference */}
                <div className="absolute right-[-15%] bottom-[-15%] w-32 h-32 sm:w-40 sm:h-40 z-10">
                  <div className="relative w-full h-full">
                    <Image
                      src={feature.img}
                      alt={feature.title}
                      fill
                      className="object-cover rounded-2xl transform rotate-[-12deg] group-hover:rotate-0 group-hover:scale-110 transition-all duration-700 ease-out shadow-xl opacity-60 group-hover:opacity-80"
                      sizes="(max-width: 768px) 128px, 160px"
                    />
                    <div className="absolute inset-0 bg-gradient-to-tr from-transparent to-black/20 rounded-2xl" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Partnership Models */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInVariants}
        >
          <h3 className="text-2xl sm:text-3xl font-bold mb-8 text-center text-[var(--dark-text)]">Partnership Models</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
            {partnershipModels.map((model, index) => (
              <motion.div
                key={model.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className={`
                  relative rounded-2xl p-6 border border-[var(--green)]/20
                  bg-gradient-to-br ${model.bgGradient}
                  hover:border-[var(--green)]/50 transition-all duration-300
                `}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-[var(--green)]/20 flex items-center justify-center">
                    {model.icon}
                  </div>
                  <h4 className="text-lg font-bold text-[var(--dark-text)]">{model.title}</h4>
                </div>
                
                <p className="text-[var(--p)] text-sm mb-3">{model.description}</p>
                <p className="text-[var(--green)] font-semibold text-sm">{model.highlight}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section - Bottom Buttons */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInVariants}
          className="flex flex-col sm:flex-row justify-center gap-4 pt-8 border-t border-[var(--green)]/20"
        >
          <button className="w-full sm:w-auto flex items-center justify-center gap-2 bg-[var(--green)] hover:brightness-110 text-[var(--dark-bg)] font-bold py-4 px-8 rounded-full transition-all transform hover:scale-[1.02] hover:shadow-lg hover:shadow-[var(--green)]/20 focus:outline-none focus:ring-2 focus:ring-[var(--green)] focus:ring-offset-2 focus:ring-offset-[var(--dark-bg)]">
            Partner With Smash2Play <FaArrowRight size={18} />
          </button>
          <button className="w-full sm:w-auto flex items-center justify-center gap-2 bg-transparent border-2 border-[var(--green)]/50 hover:border-[var(--green)] hover:bg-[var(--green)]/10 text-[var(--green)] hover:text-[var(--dark-text)] font-bold py-4 px-8 rounded-full transition-all focus:outline-none focus:ring-2 focus:ring-[var(--green)] focus:ring-offset-2 focus:ring-offset-[var(--dark-bg)]">
            Book a Consultation <FaArrowRight size={18} />
          </button>
        </motion.div>
      </div>
    </section>
  );
}