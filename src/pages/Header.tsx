'use client';
import React, { useState } from "react";
import { motion } from "framer-motion";

const sections = [
  { id: "hero", label: "Home" },
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

export const Header = () => {
  const [active, setActive] = useState("hero");

  const handleScroll = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setActive(id);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        type: "spring",
        duration: 1,
      }}
      className="flex items-center justify-center fixed top-3 w-full z-50"
    >
      <nav className="flex gap-1 p-1 border border-white/15 rounded-full bg-white/10 backdrop-blur">
        {sections.map((section) => (
          <button
            key={section.id}
            onClick={() => handleScroll(section.id)}
            className={`nav-item transition-colors duration-200 ${
              active === section.id
                ? "bg-white text-gray-900"
                : "hover:bg-white/70 hover:text-gray-900"
            }`}
            type="button"
          >
            {section.label}
          </button>
        ))}
      </nav>
    </motion.div>
  );
};