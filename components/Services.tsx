// components/ServicesSection.tsx
"use client";

import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

const services = [
  {
    title: "Badminton Courts",
    description: "Premium indoor courts with professional flooring",
    bg: "bg-[#b5d4f4]",
    img: "/Img/racket.jpg",
    dark: false,
  },
  {
    title: "Football Turf",
    description: "High-quality artificial turf for matches & training",
    bg: "bg-[#1a1a1a]",
    img: "https://images.unsplash.com/photo-1551958219-acbc608c6377?q=80&w=1000",
    dark: true,
  },
  {
    title: "Box Cricket",
    description: "Fast-paced, fun cricket experience",
    bg: "bg-[#9FE1CB]",
    img: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?q=80&w=1000",
    dark: false,
  },
  {
    title: "Pickleball",
    description: "Fast-growing sport with dedicated courts",
    bg: "bg-[#f1efe8]",
    img: "https://images.unsplash.com/photo-1629203851020-f572114729c1?q=80&w=1000",
    dark: false,
  },
];

export default function Services() {
  return (
    <section className="w-full bg-black py-16 px-4 sm:px-8 lg:px-16">
      {/* Header */}
      <div className="mb-10">
        <p className="text-xs uppercase tracking-[0.2em] text-gray-400 mb-3 font-medium">
          Services / Offerings
        </p>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight max-w-xl">
          Everything You Need —{" "}
          <span className="text-gray-400">In One Place</span>
        </h2>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {services.map((service) => (
          <div
            key={service.title}
            className={`
              group relative rounded-3xl p-8 overflow-hidden cursor-pointer
              ${service.bg}
              transition-all duration-500 hover:shadow-2xl
            `}
            style={{ minHeight: "260px" }}
          >
            {/* Content Layer */}
            <div className="relative z-20 flex flex-col h-full justify-between">
              <div className="max-w-[200px]">
                <h3
                  className={`text-2xl font-bold mb-2 leading-tight ${
                    service.dark ? "text-white" : "text-gray-900"
                  }`}
                >
                  {service.title}
                </h3>
                <p
                  className={`text-sm leading-relaxed ${
                    service.dark ? "text-gray-400" : "text-gray-700"
                  }`}
                >
                  {service.description}
                </p>
              </div>

              <button
                className={`
                  mt-8 flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-widest
                  w-fit transition-all duration-300 group-hover:gap-3
                  ${service.dark ? "text-white" : "text-gray-900"}
                `}
              >
                Learn More
                <ArrowUpRight size={16} />
              </button>
            </div>

            {/* Image Layer */}
            <div className="absolute right-[-10%] bottom-[-10%] w-48 h-48 sm:w-56 sm:h-56 z-10">
              <div className="relative w-full h-full">
                <Image
                  src={service.img}
                  alt={service.title}
                  fill
                  className="object-cover rounded-2xl transform rotate-[-12deg] 
                    group-hover:rotate-0 group-hover:scale-110 transition-all duration-700 ease-out
                    shadow-xl grayscale-[20%] group-hover:grayscale-0"
                />
                {/* Gradient overlay to blend image with card background */}
                <div
                  className={`absolute inset-0 bg-gradient-to-tr from-transparent to-white/10 
                  ${service.dark ? "opacity-20" : "opacity-0"}`}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
