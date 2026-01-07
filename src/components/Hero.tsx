"use client";

import { getLenis } from "@/lib/lenis";
import { useActiveSectionContext } from "@/context/activeSectionContext";
import type { SectionName } from "@/lib/types";

import memojiImgae from "../assets/images/memoji-computer.png";
import Image from "next/image";
import ArrowDonw from "../assets/icons/arrow-down.svg";
import grainImage from "../assets/images/grain.jpg";
import StarIcon from "@/assets/icons/star.svg";
import { HeroOrbit } from "@/components/HeroOrbit";
import SparkleIcon from "@/assets/icons/sparkle.svg";
import { TextAnimate } from "@/components/magicui/text-animate";

export const HeroSection = () => {
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  const scrollToContact = () => {
    const target = document.getElementById("contact");

    if (target) {
      const lenis = getLenis();
      lenis.scrollTo(target);

      setActiveSection("Contact" as SectionName);
      setTimeOfLastClick(Date.now());
    }
  };

  return (
    <>
      <div className="py-32 md:pd-[100px] md:py-48 lg:py-40 relative overflow-x-clip">
        <div className="absolute inset-0 -z-10 [mask-image:linear-gradient(black,transparent)]">
          <div
            className="absolute inset-0 -z-30 opacity-5"
            style={{ backgroundImage: `url(${grainImage.src})` }}
          ></div>
          <div className="size-[620px] hero-ring"></div>
          <div className="size-[820px] hero-ring"></div>
          <div className="size-[1020px] hero-ring"></div>
          <div className="size-[1220px] hero-ring"></div>
          <HeroOrbit size={800} rotation={-72}>
            <StarIcon className="size-28 text-emerald-300" />
          </HeroOrbit>
          <HeroOrbit size={550} rotation={20}>
            <StarIcon className="size-12 text-emerald-300" />
          </HeroOrbit>
          <HeroOrbit size={430} rotation={-14}>
            <SparkleIcon className="size-8 text-emerald-300/20" />
          </HeroOrbit>
          <HeroOrbit size={440} rotation={79}>
            <SparkleIcon className="size-5 text-emerald-300/20" />
          </HeroOrbit>
          <HeroOrbit size={530} rotation={178}>
            <SparkleIcon className="size-10 text-emerald-300/20" />
          </HeroOrbit>
          <HeroOrbit size={710} rotation={144}>
            <SparkleIcon className="size-14 text-emerald-300/20" />
          </HeroOrbit>
        </div>
        <div className="container">
          <div className="flex flex-col items-center">
            <div className="font-host-grotesk text-8xl font-bold mb-5 md:text-7xl sm:text-4xl">
              <TextAnimate
                animation="blurInUp"
                by="character"
                duration={1}
                once
              >
                Hey, I&apos;m Priyanshu
              </TextAnimate>
            </div>
            <Image
              className="size-[100px]"
              src={memojiImgae}
              alt="Person Peeking from behind laptop"
              priority
            />
            <div className="bg-gray-950 border border-gray-800 px-4 py-2 inline-flex items-center gap-4 rounded-lg">
              <div className="bg-green-500 size-2.5 rounded-full relative">
                <div className="bg-green-500 absolute inset-0 rounded-full animate-ping"></div>
              </div>
              <div className="text-sm font-semibold">
                Creative FrontEnd Developer
              </div>
            </div>
          </div>
          <div className="max-w-lg mx-auto">
            <h1 className="font-serif text-3xl md:text5xl text-center mt-8 tracking-wide">
              <TextAnimate animate="blueInUp" once>
                Crafting digital experiences through code and creative design.
              </TextAnimate>
            </h1>
            <div className="mt-4 text-center text-white/60 md:text-lg break-words">
              <TextAnimate
                animation="blurInUp"
                by="character"
                duration={3}
                once
              >
                I build responsive, intuitive web interfaces that focus on real usability, not just visuals. With clean code and full-stack experience, I turn ideas into thoughtful, production-ready products.
              </TextAnimate>
            </div>
          </div>
          <div className="flex flex-col items-center md:flex-row justify-center mt-8 gap-4 ">
            <button
              onClick={scrollToContact}
              className="inline-flex items-center gap-2 border border-white/15 px-6 h-12 rounded-full"
            >
              <span className="font-semibold">Contact Me</span>
              <ArrowDonw className="size-4 -rotate-[130deg]" />
            </button>
            <a
              href="https://drive.google.com/file/d/1mcX_oyR2z8QoMS4zh2C6QIWcCUDPeTsa/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              className="cursor:pointer inline-flex items-center gap-2 border border-white bg-white text-gray-900 px-6 h-12 rounded-full"
            >
              <span className="font-semibold">My Resume</span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
