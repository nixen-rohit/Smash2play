"use client";

import React, { useState, useEffect, useCallback } from "react";
import { FaQuoteRight, FaStar } from "react-icons/fa";
import { LuChevronRight, LuChevronLeft } from "react-icons/lu";

interface Testimonial {
  id: number;
  name: string;
  handle: string;
  text: string;
  image: string;
  stars: number;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Guy Hawkins",
    handle: "@guyhawkins",
    text: "Impressed by the professionalism and attention to detail.",
    image: "https://i.pravatar.cc/150?u=guy",
    stars: 4,
  },
  {
    id: 2,
    name: "Karla Lynn",
    handle: "@karlalynn98",
    text: "A seamless experience from start to finish. Highly recommend!",
    image: "https://i.pravatar.cc/150?u=karla",
    stars: 5,
  },
  {
    id: 3,
    name: "Jane Cooper",
    handle: "@janecooper",
    text: "Reliable and trustworthy. Made my life so much easier!",
    image: "https://i.pravatar.cc/150?u=jane",
    stars: 4,
  },
  {
    id: 4,
    name: "Cody Fisher",
    handle: "@codyfish",
    text: "The results exceeded my expectations. Simply brilliant work.",
    image: "https://i.pravatar.cc/150?u=cody",
    stars: 3,
  },
  {
    id: 5,
    name: "Esther Howard",
    handle: "@estherh",
    text: "Amazing support and high-quality implementation throughout.",
    image: "https://i.pravatar.cc/150?u=esther",
    stars: 5,
  },
  {
    id: 6,
    name: "Cameron Williamson",
    handle: "@camwill",
    text: "A game changer for our workflow. Couldn't be happier!",
    image: "https://i.pravatar.cc/150?u=cam",
    stars: 5,
  },
];

function useItemsPerPage() {
  const [items, setItems] = useState(3);

  useEffect(() => {
    const update = () => {
      if (window.innerWidth < 640) setItems(1);
      else if (window.innerWidth < 1024) setItems(2);
      else setItems(3);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  return items;
}

export default function TestimonialSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = useItemsPerPage();
  const totalPages = Math.ceil(testimonials.length / itemsPerPage);

  // Reset to first page when layout changes (e.g. resize crosses breakpoint)
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setCurrentIndex(0);
  }, [itemsPerPage]);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev === totalPages - 1 ? 0 : prev + 1));
  }, [totalPages]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev === 0 ? totalPages - 1 : prev - 1));
  }, [totalPages]);

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  return (
    <section className="bg-(--dark-bg) py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="relative mb-10 sm:mb-12">
          {/* Centered text */}
          <div className="text-center">
            <p className="text-(--highlight)/80 text-xs sm:text-sm font-medium tracking-wide uppercase mb-2">
              Testimonial
            </p>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-(--dark-text) leading-tight">
              Transformative Client Experiences
            </h2>
          </div>

          {/* Desktop nav arrows — absolutely positioned bottom-right */}
          <div className="hidden lg:flex space-x-3 absolute right-0 bottom-0">
            <button
              onClick={prevSlide}
              aria-label="Previous"
              className="  shadow-md border border-(--highlight)/20 p-2.5 sm:p-3 rounded-full text-(--dark-text)  bg-(--highlight)/10 hover:border-(--highlight)/40 transition-all active:scale-95 focus:outline-none focus:ring-2 focus:ring-(--highlight)/50"
            >
              <LuChevronLeft size={22} />
            </button>
            <button
              onClick={nextSlide}
              aria-label="Next"
              className="  shadow-md border border-(--highlight)/20 p-2.5 sm:p-3 rounded-full text-(--dark-text)  bg-(--highlight)/10 hover:border-(--highlight)/40 transition-all active:scale-95 focus:outline-none focus:ring-2 focus:ring-(--highlight)/50"
            >
              <LuChevronRight size={22} />
            </button>
          </div>
        </div>

        {/* Carousel */}
        <div className="relative w-full overflow-hidden">
          {/* Track */}
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {Array.from({ length: totalPages }).map((_, pageIndex) => (
              <div key={pageIndex} className="w-full shrink-0 px-1 sm:px-4">
                <div
                  className={`grid gap-4 sm:gap-6 lg:gap-8 ${
                    itemsPerPage === 1
                      ? "grid-cols-1"
                      : itemsPerPage === 2
                        ? "grid-cols-2"
                        : "grid-cols-3"
                  }`}
                >
                  {testimonials
                    .slice(
                      pageIndex * itemsPerPage,
                      (pageIndex + 1) * itemsPerPage,
                    )
                    .map((item) => (
                      <div
                        key={item.id}
                        className="group h-full bg-white backdrop-blur-xs border border-(--highlight)/20 rounded-2xl sm:rounded-3xl p-5 sm:p-6 lg:p-8 shadow-sm hover:shadow-xl hover:shadow-(--dark)/5   hover:border-(--highlight)/40 transition-all duration-300 flex flex-col justify-between min-h-[260px] sm:min-h-[300px] lg:min-h-[340px]"
                      >
                        {/* Top */}
                        <div>
                          <div className="flex justify-center mb-5 sm:mb-7">
                            <FaQuoteRight
                              size={36}
                              className="text-(--highlight)/20 group-hover:text-(--highlight)/40 transition sm:w-12 sm:h-12"
                            />
                          </div>
                          <p className="text-(--p) text-base sm:text-lg leading-relaxed font-medium text-center mb-5 sm:mb-7">
                            &ldquo;{item.text}&rdquo;
                          </p>
                        </div>

                        {/* Stars */}
                        <div className="flex justify-center gap-1.5 sm:gap-2 mt-auto">
                          {[...Array(5)].map((_, i) => (
                            <FaStar
                              key={i}
                              size={22}
                              className={`transition-all sm:w-7 sm:h-7 ${
                                i < item.stars
                                  ? "text-(--highlight) fill-(--highlight)"
                                  : "text-(--highlight)/20"
                              }`}
                            />
                          ))}
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            ))}
          </div>

           
        </div>

        {/* Mobile nav arrows */}
        <div className="flex lg:hidden justify-center gap-4 mt-6">
          <button
            onClick={prevSlide}
            aria-label="Previous"
            className="bg-(--card-bg) shadow-md border border-(--highlight)/20 p-2.5 rounded-full text-(--dark-text) hover:bg-(--highlight)/10 hover:border-(--highlight)/40 transition-all active:scale-95 focus:outline-none focus:ring-2 focus:ring-(--highlight)/50"
          >
            <LuChevronLeft size={20} />
          </button>
          <button
            onClick={nextSlide}
            aria-label="Next"
            className="bg-(--card-bg) shadow-md border border-(--highlight)/20 p-2.5 rounded-full text-(--dark-text) hover:bg-(--highlight)/10 hover:border-(--highlight)/40 transition-all active:scale-95 focus:outline-none focus:ring-2 focus:ring-(--highlight)/50"
          >
            <LuChevronRight size={20} />
          </button>
        </div>

        {/* Dots */}
        <div className="flex justify-center mt-6 sm:mt-8 space-x-2">
          {Array.from({ length: totalPages }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              aria-label={`Go to page ${index + 1}`}
              className={`h-1.5 transition-all duration-300 rounded-full focus:outline-none focus:ring-2 focus:ring-(--highlight)/50 ${
                currentIndex === index
                  ? "w-8 bg-(--highlight)"
                  : "w-4 bg-(--highlight)/30 hover:bg-(--highlight)/50"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
