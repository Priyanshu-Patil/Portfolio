"use client";

import React, { useEffect } from "react";
import { motion } from "framer-motion";
import clsx from "clsx";
import { useActiveSectionContext } from "@/context/activeSectionContext";
import type { SectionName } from "@/lib/types";
import { getLenis } from "@/lib/lenis";

const sections: { id: string; label: SectionName }[] = [
  { id: "hero", label: "Home" },
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

export const Header = () => {
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();

  useEffect(() => {
    getLenis();
  }, []);

  const handleScroll = (id: string, label: SectionName) => {
    const target = document.getElementById(id);
    if (target) {
      const lenis = getLenis();
      lenis.scrollTo(target);
      setActiveSection(label);
      setTimeOfLastClick(Date.now());
    }
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ type: "spring", duration: 1 }}
        className="flex items-center justify-center fixed top-3 w-full z-50"
      >
        <nav className="flex gap-1 p-1 border border-white/15 rounded-full bg-white/10 backdrop-blur">
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => handleScroll(section.id, section.label)}
              className={clsx(
                "relative px-4 py-2 rounded-full transition-colors duration-200",
                activeSection === section.label
                  ? "text-gray-900"
                  : "text-gray-300 hover:bg-white/70 hover:text-gray-900"
              )}
            >
              {section.label}
              {activeSection === section.label && (
                <motion.span
                  layoutId="activeSection"
                  transition={{
                    type: "spring",
                    stiffness: 380,
                    damping: 30,
                  }}
                  className="absolute inset-0 z-[-1] bg-white rounded-full"
                />
              )}
            </button>
          ))}
        </nav>
      </motion.div>
    </>
  );
};
