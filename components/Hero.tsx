"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const sideImages = [
  {
    src: "/Img/hero-badminton.jpg",
    alt: "Hero section Badminton person",
    position: "left",
    span: 1,
  },
  {
    src: "/Img/hero-cricket.png",
    alt: "Hero section cricket person",
    position: "left",
    span: 1,
  },
  {
    src: "/Img/hero-pickelball.png",
    alt: "Hero section picketball person",
    position: "right",
    span: 1,
  },
  {
    src: "/Img/hero-football.jpg",
    alt: "Hero section football person",
    position: "right",
    span: 1,
  },
];

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  const words = ["PLAY", "TRAIN", "COMPETE", "All in One Place"];

  // Centered diagonal: starts left-of-center, ends right-of-center
  const indentSteps = ["5vw", "15vw", "25vw", "35vw"];

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

  const heroTransformY = imageProgress * 20;

  const sideTranslateLeft = -100 + imageProgress * 100; // -100% to 0%
  const sideTranslateRight = 100 - imageProgress * 100; // 100% to 0%

  const borderRadius = imageProgress * 24; // 0px to 24px
  const gap = imageProgress * 16; // 0px to 16px

  // Vertical offset for side columns to move them up on mobile
  const sideTranslateY = -(imageProgress * -3); // Move up by 15% when fully expanded

  return (
    <section ref={sectionRef} className="relative bg-black ">
      {/* Sticky container for scroll animation */}
      <div className="sticky top-0 h-screen overflow-hidden ">
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
              className=" hidden flex-col will-change-transform lg:flex "
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
              className="relative overflow-hidden will-change-transform border-2 border-white lg:translate-y-(--hero-transform-y)"
              style={
                {
                  width: `${centerWidth}%`,
                  height: `${centerHeight}%`,
                  flex: "0 0 auto",
                  borderRadius: `${borderRadius}px`,
                  "--hero-transform-y": `${heroTransformY}%`,
                } as React.CSSProperties
              }
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
                className="absolute inset-0 flex items-center justify-center overflow-hidden"
                style={{ opacity: textOpacity }}
              >
                <h1 className="font-bold leading-[0.95]   tracking-tighter text-white flex flex-col gap-5 lg:gap-2">
                  {words.map((word, wordIndex) => {
                    const previousLettersCount = words
                      .slice(0, wordIndex)
                      .reduce((acc, w) => acc + w.length, 0);

                    return (
                      <div
                        key={wordIndex}
                        className="overflow-hidden"
                        style={{ paddingLeft: indentSteps[wordIndex] }}
                      >
                        <div className="flex items-baseline">
                          {word.split("").map((letter, letterIndex) => (
                            <span
                              key={letterIndex}
                              className="inline-block  animate-[slideUp_0.8s_ease-out_forwards] opacity-0"
                              style={{
                                animationDelay: `${(previousLettersCount + letterIndex) * 0.05}s`,
                                transition: "all 1.5s",
                                transitionTimingFunction:
                                  "cubic-bezier(0.86, 0, 0.07, 1)",
                                fontSize:
                                  wordIndex === words.length - 1
                                    ? "clamp(1.5rem, 5vw, 4rem)"
                                    : "clamp(1.8rem, 9vw, 7rem)",
                              }}
                            >
                              {letter === " " ? "\u00A0" : letter}
                            </span>
                          ))}
                        </div>
                      </div>
                    );
                  })}
                </h1>
              </div>
            </div>

            {/* Right Column */}
            <div
              className=" hidden flex-col will-change-transform lg:flex"
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

    
    </section>
  );
}
