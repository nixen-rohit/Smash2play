import React, { useRef, useEffect, useState, CSSProperties, useCallback } from "react";
import { gsap } from "gsap";

interface PixelTransitionProps {
  firstContent: React.ReactNode | string;
  secondContent: React.ReactNode | string;
  gridSize?: number;
  pixelColor?: string;
  animationStepDuration?: number;
  className?: string;
  style?: CSSProperties;
  aspectRatio?: string;
  autoPlay?: boolean;
  autoPlayInterval?: number;
  onCycleStart?: () => void;
}

const PixelTransition: React.FC<PixelTransitionProps> = ({
  firstContent,
  secondContent,
  gridSize = 7,
  pixelColor = "currentColor",
  animationStepDuration = 0.3,
  aspectRatio = "100%",
  className = "",
  autoPlay = false,
  autoPlayInterval = 2000,
  onCycleStart,
  style = {},
}) => {
  const pixelGridRef = useRef<HTMLDivElement | null>(null);
  const activeRef = useRef<HTMLDivElement | null>(null);
  const delayedCallRef = useRef<gsap.core.Tween | null>(null);
  const [isActive, setIsActive] = useState<boolean>(false);

  useEffect(() => {
    const pixelGridEl = pixelGridRef.current;
    if (!pixelGridEl) return;

    pixelGridEl.innerHTML = "";

    for (let row = 0; row < gridSize; row++) {
      for (let col = 0; col < gridSize; col++) {
        const pixel = document.createElement("div");
        pixel.classList.add("pixelated-image-card__pixel", "absolute");
        pixel.style.backgroundColor = pixelColor;
        pixel.style.display = "none";

        const size = 100 / gridSize;
        pixel.style.width = `${size}%`;
        pixel.style.height = `${size}%`;
        pixel.style.left = `${col * size}%`;
        pixel.style.top = `${row * size}%`;

        pixelGridEl.appendChild(pixel);
      }
    }
  }, [gridSize, pixelColor]);

  const animatePixels = useCallback(
    (activate: boolean): void => {
      setIsActive(activate);

      const pixelGridEl = pixelGridRef.current;
      const activeEl = activeRef.current;
      if (!pixelGridEl || !activeEl) return;

      const pixels = pixelGridEl.querySelectorAll<HTMLDivElement>(
        ".pixelated-image-card__pixel"
      );
      if (!pixels.length) return;

      gsap.killTweensOf(pixels);
      if (delayedCallRef.current) delayedCallRef.current.kill();

      gsap.set(pixels, { display: "none" });

      const staggerDuration = animationStepDuration / pixels.length;

      gsap.to(pixels, {
        display: "block",
        duration: 0,
        stagger: { each: staggerDuration, from: "random" },
      });

      delayedCallRef.current = gsap.delayedCall(animationStepDuration, () => {
        activeEl.style.display = activate ? "block" : "none";
        activeEl.style.pointerEvents = activate ? "none" : "";
      });

      gsap.to(pixels, {
        display: "none",
        duration: 0,
        delay: animationStepDuration,
        stagger: { each: staggerDuration, from: "random" },
      });
    },
    [animationStepDuration]
  );

  useEffect(() => {
    if (!autoPlay) return;

    const activeState = { current: false };
    const totalDuration = autoPlayInterval + animationStepDuration * 1000;

    const interval = setInterval(() => {
      activeState.current = !activeState.current;
      if (activeState.current) {
        onCycleStart?.();
      }
      animatePixels(activeState.current);
    }, totalDuration);

    return () => clearInterval(interval);
  }, [autoPlay, autoPlayInterval, animationStepDuration, animatePixels, onCycleStart]);

  return (
    <div
      className={`
        ${className}
        bg-[#222]
        text-white
        rounded-[15px]
        w-[300px]
        max-w-full
        relative
        overflow-hidden
      `}
      style={style}
    >
      <div style={{ paddingTop: aspectRatio }} />

      <div className="absolute inset-0 w-full h-full" aria-hidden={isActive}>
        {firstContent}
      </div>

      <div
        ref={activeRef}
        className="absolute inset-0 w-full h-full z-2"
        style={{ display: "none" }}
        aria-hidden={!isActive}
      >
        {secondContent}
      </div>

      <div
        ref={pixelGridRef}
        className="absolute inset-0 w-full h-full pointer-events-none z-3"
      />
    </div>
  );
};

export default PixelTransition;