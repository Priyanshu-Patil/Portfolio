"use client";
import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CanvasRevealEffect } from "@/components/CanvasRevealEffect";

const Approach = () => {
  return (
    <>
      <section className="w-full sm:py-2 lg:mt-20 py-10 px-20">
        <h1 className="font-host-grotesk font-semibold text-3xl md:text-5xl text-center">
          My Approach
        </h1>
        {/* remove bg-white dark:bg-black */}
        <div className="lg:my-20 sm:my-10 flex flex-col lg:flex-row items-center justify-center w-full sm:gap-12">
          {/* add des prop */}
          <Card
            title="Planning & Strategy"
            icon={<AceternityIcon order="Phase 1" />}
            des="We'll collaborate to map out your website's goals, target audience, 
          and key functionalities. We'll discuss things like site structure, 
          navigation, and content requirements."
          >
            <CanvasRevealEffect
              animationSpeed={3}
              // add these classed for the border rounded overflowing -> rounded-3xl overflow-hidden
              containerClassName="bg-emerald-900 rounded-3xl overflow-hidden"
            />
          </Card>
          <Card
            title="Development & Progress Update"
            icon={<AceternityIcon order="Phase 2" />}
            des="Once we agree on the plan, I cue my lofi playlist and dive into
          coding. From initial sketches to polished code, I keep you updated
          every step of the way."
          >
            <CanvasRevealEffect
              animationSpeed={3}
              // change bg-black to bg-pink-900
              containerClassName="bg-pink-900 rounded-3xl overflow-hidden"
              colors={[
                // change the colors of the
                [255, 166, 158],
                [221, 255, 247],
              ]}
              dotSize={2}
            />
            {/* Radial gradient for the cute fade */}
            {/* remove this one */}
            {/* <div className="absolute inset-0 [mask-image:radial-gradient(400px_at_center,white,transparent)] bg-black/50 dark:bg-black/90" /> */}
          </Card>
          <Card
            title="Development & Launch"
            icon={<AceternityIcon order="Phase 3" />}
            des="This is where the magic happens! Based on the approved design, 
          I'll translate everything into functional code, building your website
          from the ground up."
          >
            <CanvasRevealEffect
              animationSpeed={3}
              containerClassName="bg-sky-600 rounded-3xl overflow-hidden"
              colors={[[125, 211, 252]]}
            />
          </Card>
        </div>
      </section>
    </>
  );
};

export default Approach;

const Card = ({
  title,
  icon,
  children,
  des,
}: {
  title: string;
  icon: React.ReactNode;
  children?: React.ReactNode;
  des: string;
}) => {
  const [hovered, setHovered] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      // Responsive height and padding, rounded corners
      className="border border-black/[0.2] group/canvas-card flex items-center justify-center
       dark:border-white/[0.2] max-w-sm w-full mx-auto p-3 sm:p-4 relative h-80 sm:h-96 lg:h-[35rem] rounded-3xl"
      style={{
        background: "rgb(4,7,29)",
        backgroundColor:
          "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
      }}
    >
      {/* Icon corners */}
      <Icon className="absolute h-8 w-8 sm:h-10 sm:w-10 -top-2 -left-2 sm:-top-3 sm:-left-3 dark:text-white text-black opacity-30" />
      <Icon className="absolute h-8 w-8 sm:h-10 sm:w-10 -bottom-2 -left-2 sm:-bottom-3 sm:-left-3 dark:text-white text-black opacity-30" />
      <Icon className="absolute h-8 w-8 sm:h-10 sm:w-10 -top-2 -right-2 sm:-top-3 sm:-right-3 dark:text-white text-black opacity-30" />
      <Icon className="absolute h-8 w-8 sm:h-10 sm:w-10 -bottom-2 -right-2 sm:-bottom-3 sm:-right-3 dark:text-white text-black opacity-30" />

      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="h-full w-full absolute inset-0"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative z-20 px-2 sm:px-6">
        <div
          className="text-center group-hover/canvas-card:-translate-y-4 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] 
        group-hover/canvas-card:opacity-0 transition duration-200 min-w-32 sm:min-w-40 mx-auto flex items-center justify-center"
        >
          {icon}
        </div>
        <h2
          className="dark:text-white text-center text-xl sm:text-2xl md:text-3xl opacity-0 group-hover/canvas-card:opacity-100
         relative z-10 text-black mt-4 font-bold group-hover/canvas-card:text-white 
         group-hover/canvas-card:-translate-y-2 transition duration-200"
        >
          {title}
        </h2>
        <p
          className="text-xs sm:text-sm md:text-base opacity-0 group-hover/canvas-card:opacity-100
         relative z-10 mt-4 group-hover/canvas-card:text-white text-center
         group-hover/canvas-card:-translate-y-2 transition duration-200"
          style={{ color: "#E4ECFF" }}
        >
          {des}
        </p>
      </div>
    </div>
  );
};
// add order prop for the Phase number change
const AceternityIcon = ({ order }: { order: string }) => {
  return (
    <div>
      {/* this btn is from https://ui.aceternity.com/components/tailwindcss-buttons border magic */}
      {/* change rounded-lg, text-purple px-5 py-2 */}
      {/* remove focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 cuz we don't need to focus */}
      {/* remove text-sm font-medium h-12 , add font-bold text-2xl */}
      <button className="relative inline-flex overflow-hidden rounded-full p-[1px] ">
        <span
          className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite]
         bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]"
        />
        <span
          className="inline-flex h-full w-full cursor-pointer items-center 
        justify-center rounded-full bg-slate-950 px-5 py-2 text-purple backdrop-blur-3xl font-bold text-2xl"
        >
          {order}
        </span>
      </button>
    </div>
  );
};

export const Icon = ({ className, ...rest }: any) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={className}
      {...rest}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
    </svg>
  );
};
