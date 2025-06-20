import { TextAnimate } from "@/components/magicui/text-animate";

export const AboutSection = () => {
  return (
    <section id="About" className="py-16">
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
          <div className="leading-10 font-light font-host-grotesk lg:text-2xl sm:text-lg md:text-xl tracking-wide">
            <TextAnimate animation="blurInUp" by="character" duration={3}>
            I'm Priyanshu Patil, a Frontend Developer who loves crafting seamless and
            responsive user experiences. I turn ideas into interactive and
            accessible interfaces. I enjoy building clean, maintainable code and
            constantly exploring the latest in web technologies. Whether it's
            optimizing performance or designing pixel-perfect layouts — I'm all
            about delivering value through the web.
            </TextAnimate>
          </div>
        </div>
      </div>
    </section>
  );
};
