"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const greetings = [
  { text: "Hello", emoji: "👋" },
  { text: "Bonjour", emoji: "👋" },
  { text: "नमस्ते", emoji: "👋" },
  { text: "Ciao", emoji: "👋" },
  { text: "Hola", emoji: "👋" },
];

interface LoadingAnimationProps {
  onComplete: () => void;
}

export function LoadingAnimation({ onComplete }: LoadingAnimationProps) {
  const [currentGreeting, setCurrentGreeting] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Cycle through greetings
    const interval = setInterval(() => {
      setCurrentGreeting((prev) => {
        if (prev === greetings.length - 1) {
          // After showing all greetings, start exit animation
          clearInterval(interval);
          setIsVisible(false);
          setTimeout(() => {
            onComplete();
          }, 500); // Wait for fade out animation
          return prev;
        }
        return prev + 1;
      });
    }, 800); // Change greeting every 1.2 seconds

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
          className="fixed inset-0 z-[9999] bg-black flex items-center justify-center"
        >
          <div className="text-center px-4">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentGreeting}
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -20, scale: 0.95 }}
                transition={{
                  duration: 0.3,
                  ease: [0.4, 0, 0.2, 1],
                }}
                className="flex items-center justify-center gap-3 sm:gap-4"
              >
                <motion.span
                  className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl select-none"
                  animate={{
                    rotate: [0, 14, -8, 14, -8, 0],
                  }}
                  transition={{
                    duration: 0.3,
                    ease: "easeInOut",
                    times: [0, 0.2, 0.4, 0.6, 0.8, 1],
                    repeat: Infinity,
                    repeatDelay: 0.6,
                  }}
                >
                  {greetings[currentGreeting].emoji}
                </motion.span>
                <motion.span
                  className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-sans font-medium tracking-tight select-none"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.15, duration: 0.3 }}
                >
                  {greetings[currentGreeting].text}
                </motion.span>
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
