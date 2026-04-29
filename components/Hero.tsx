"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
const word = "PLAY. TRAIN. COMPETE";

const sideImages = [
  {
    src: "https://images.unsplash.com/photo-1517824806704-9040b037703b?q=80&w=1000",
    alt: "Mountain hiking adventure",
    position: "left",
    span: 1,
  },
  {
    src: "https://images.unsplash.com/photo-1510312305653-8ed496efae75?q=80&w=1000",
    alt: "Camping under stars",
    position: "left",
    span: 1,
  },
  {
    src: "https://images.unsplash.com/photo-1533873984035-25970ab07461?q=80&w=1000",
    alt: "Forest exploration",
    position: "right",
    span: 1,
  },
  {
    src: "https://images.unsplash.com/photo-1527004013197-933c4bb611b3?q=80&w=1000",
    alt: "Lake camping view",
    position: "right",
    span: 1,
  },
];

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!sectionRef.current || ticking) return;

      ticking = true;

      requestAnimationFrame(() => {
        const rect = sectionRef.current!.getBoundingClientRect();
        const scrollableHeight = window.innerHeight * 2;
        const scrolled = -rect.top;
        const progress = Math.max(0, Math.min(1, scrolled / scrollableHeight));

        setScrollProgress(progress);
        ticking = false;
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const isDesktop = typeof window !== "undefined" && window.innerWidth >= 1024;

  // Text fades out first (0 to 0.2)
  const textOpacity = Math.max(0, 1 - scrollProgress / 0.2);

  // Image transforms start after text fades (0.2 to 1)
  const imageProgress = Math.max(0, Math.min(1, (scrollProgress - 0.2) / 0.8));

  // Smooth interpolations
  // Mobile / md
  const centerWidthMobile = 100 - imageProgress * 10; // 100% to 80%
  const centerHeightMobile = 100 - imageProgress * 50; // 100% to 70%

  // Desktop / lg
  const centerWidthDesktop = 100 - imageProgress * 58; // 100% to 42%
  const centerHeightDesktop = 100 - imageProgress * 30; // 100% to 70%

  const centerWidth = isDesktop ? centerWidthDesktop : centerWidthMobile;
  const centerHeight = isDesktop ? centerHeightDesktop : centerHeightMobile;

  const sideWidth = imageProgress * 22; // 0% to 22%
  const sideOpacity = imageProgress;
  const sideTranslateLeft = -100 + imageProgress * 100; // -100% to 0%
  const sideTranslateRight = 100 - imageProgress * 100; // 100% to 0%
  const borderRadius = imageProgress * 24; // 0px to 24px
  const gap = imageProgress * 16; // 0px to 16px

  // Vertical offset for side columns to move them up on mobile
  const sideTranslateY = -(imageProgress * 15); // Move up by 15% when fully expanded

  return (
    <section ref={sectionRef} className="relative bg-black ">
      {/* Sticky container for scroll animation */}
      <div className="sticky top-0 h-screen overflow-hidden">
        <div className="flex h-full w-full items-center justify-center">
          {/* Bento Grid Container */}
          <div
            className="relative flex h-full w-full items-stretch justify-center"
            style={{
              gap: `${gap}px`,
              padding: `${imageProgress * 16}px`,
              paddingBottom: `${0 + imageProgress * 40}px`,
            }}
          >
            {/* Left Column */}
            <div
              className="hidden flex-col will-change-transform lg:flex "
              style={{
                width: `${sideWidth}%`,
                gap: `${gap}px`,
                transform: `translateX(${sideTranslateLeft}%) translateY(${sideTranslateY}%)`,
                opacity: sideOpacity,
              }}
            >
              {sideImages
                .filter((img) => img.position === "left")
                .map((img, idx) => (
                  <div
                    key={idx}
                    className="relative overflow-hidden will-change-transform border-2 border-white"
                    style={{
                      flex: img.span,
                      borderRadius: `${borderRadius}px`,
                    }}
                  >
                    <Image
                      src={img.src || "/placeholder.svg"}
                      alt={img.alt}
                      fill
                      className="object-cover"
                    />
                  </div>
                ))}
            </div>

            {/* Main Hero video - Center */}
            <div
              className="relative overflow-hidden will-change-transform border-2 border-white"
              style={{
                width: `${centerWidth}%`,
                height: `${centerHeight}%`,
                flex: "0 0 auto",
                borderRadius: `${borderRadius}px`,
              }}
            >
              <video
                className="absolute inset-0 h-full w-full object-cover "
                autoPlay
                muted
                loop
                playsInline
                preload="auto"
              >
                <source src="/Video/hero.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>

              {/* Overlay Text - Fades out first */}
              <div
                className="absolute inset-0 flex items-end overflow-hidden"
                style={{ opacity: textOpacity }}
              >
                <h1 className="w-full text-[12vw] md:text-[10vw] lg:text-[8vw] font-bold leading-[0.9] tracking-tighter text-white">
                  {word.split("").map((letter, index) => (
                    <span
                      key={index}
                      className="inline-block animate-[slideUp_0.8s_ease-out_forwards] opacity-0"
                      style={{
                        animationDelay: `${index * 0.08}s`,
                        transition: "all 1.5s",
                        transitionTimingFunction:
                          "cubic-bezier(0.86, 0, 0.07, 1)",
                      }}
                    >
                      {letter}
                    </span>
                  ))}
                </h1>
              </div>
            </div>

            {/* Right Column */}
            <div
              className="hidden flex-col will-change-transform lg:flex"
              style={{
                width: `${sideWidth}%`,
                gap: `${gap}px`,
                transform: `translateX(${sideTranslateRight}%) translateY(${sideTranslateY}%)`,
                opacity: sideOpacity,
              }}
            >
              {sideImages
                .filter((img) => img.position === "right")
                .map((img, idx) => (
                  <div
                    key={idx}
                    className="relative overflow-hidden will-change-transform border-2 border-white"
                    style={{
                      flex: img.span,
                      borderRadius: `${borderRadius}px`,
                    }}
                  >
                    <Image
                      src={img.src || "/placeholder.svg"}
                      alt={img.alt}
                      fill
                      className="object-cover"
                    />
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll space to enable animation */}

      <div className="h-[200vh]" />

      {/* Tagline Section only for mobile and tablet */}
      <div className="lg:hidden  text-white  h-[50vh] pb-10">
        <div className="mx-auto max-w-4xl text-center">
          {/* Main Paragraph */}
          <p className="mx-auto max-w-3xl text-2xl leading-relaxed text-muted-foreground md:text-3xl lg:text-[2rem] lg:leading-snug">
            Book premium sports venues, train with expert coaches, or host
            unforgettable game events — Smash2Play brings everything together.
          </p>

          {/* Trust Tagline */}
          <p className="py-6 text-sm font-medium tracking-wide text-white/70 md:text-base lg:text-lg">
            Trusted by 1000+ players across Delhi NCR
          </p>

          {/* Action Buttons */}

          <div className="  flex w-full flex-col items-center justify-center gap-3 px-4 sm:mt-10 sm:flex-row sm:gap-4">
            <button className=" w-full max-w-[280px] rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition-all duration-300 hover:scale-105 hover:bg-white/90 sm:w-auto sm:px-8 sm:py-4 sm:text-base">
              Book a Slot
            </button>

            <button className="mt-3 w-full max-w-[280px] rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:scale-105 hover:border-white hover:bg-white/10 sm:w-auto sm:px-8 sm:py-4 sm:text-base">
              Explore Venues
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}