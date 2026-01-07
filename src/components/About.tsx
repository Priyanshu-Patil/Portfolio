import { TextAnimate } from "@/components/magicui/text-animate";

export const AboutSection = () => {
  return (
    <>
      <section className="py-16">
        <div className="container">
          <div className="flex justify-center">
            <p className="uppercase font-semibold tracking-widest bg-gradient-to-r from-emerald-300 to-sky-400 text-transparent bg-clip-text text-center">
              Explore More
            </p>
          </div>
          <h2 className="font-serif text-3xl md:text-5xl text-center mt-6">
            About Me
          </h2>
          <p className="text-center md:text-lg lg:text-xl max-w-md mx-auto text-white/60 mt-4">
            Know more about who I am, my skills, and what inspires me.
          </p>
          <div className="max-w-6xl mt-20 sm:mt-10 text-center">
            <div className="leading-10 font-light font-host-grotesk lg:text-2xl sm:text-lg md:text-xl tracking-wide break-words">
              <TextAnimate animation="blurInUp" by="character" duration={3}>
              I&apos;m Priyanshu Patil. I build modern web products with a focus on clarity, performance, and real usability. I work across the stack, from responsive interfaces in React to backend APIs, authentication, and background workflows. I enjoy solving product problems end-to-end and shipping features that teams can actually rely on.
              </TextAnimate>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
