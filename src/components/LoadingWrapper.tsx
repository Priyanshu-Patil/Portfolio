"use client";

import { useState, useEffect, useRef } from "react";
import { LoadingAnimation } from "./LoadingAnimation";
import { motion, AnimatePresence } from "framer-motion";

interface LoadingWrapperProps {
  children: React.ReactNode;
}

export function LoadingWrapper({ children }: LoadingWrapperProps) {
  const [isLoading, setIsLoading] = useState(true);
  const hasCompletedRef = useRef(false);

  const handleLoadingComplete = () => {
    if (!hasCompletedRef.current) {
      hasCompletedRef.current = true;
      setIsLoading(false);
    }
  };

  // Ensure maximum loading time for better UX (fallback)
  useEffect(() => {
    const timer = setTimeout(() => {
      if (isLoading && !hasCompletedRef.current) {
        handleLoadingComplete();
      }
    }, 6000); // Maximum 6 seconds loading time

    return () => clearTimeout(timer);
  }, [isLoading]);

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading ? (
          <LoadingAnimation key="loader" onComplete={handleLoadingComplete} />
        ) : (
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
