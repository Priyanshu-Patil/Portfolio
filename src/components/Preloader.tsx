"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

const Preloader = () => {
  const counterRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    let current = 0;

    const interval = setInterval(() => {
      current += 1;
      setCounter(current);
      if (current >= 100) {
        clearInterval(interval);

        const tl = gsap.timeline();

        tl.to(counterRef.current, {
          opacity: 0,
          y: -20,
          duration: 0.4,
          ease: "power2.out",
        })
          .to(lineRef.current, {
            width: "100vw",
            height: "100vh",
            left: 0,
            top: 0,
            duration: 1,
            ease: "power2.inOut",
          })
          .to(overlayRef.current, {
            opacity: 0,
            duration: 1,
            ease: "power2.out",
          });
      }
    }, 20); // ~2 seconds

    // Animate line from left center to center
    gsap.to(lineRef.current, {
      width: "50vw",
      duration: 2,
      ease: "power2.out",
    });

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 z-[9999] bg-black flex items-center justify-center"
    >
      <div
        ref={lineRef}
        className="absolute w-0 h-[2px] bg-white left-0 top-1/2 transform -translate-y-1/2"
      />
      <div
        ref={counterRef}
        className="text-white text-4xl font-semibold z-10"
      >
        {counter}%
      </div>
    </div>
  );
};

export default Preloader;
