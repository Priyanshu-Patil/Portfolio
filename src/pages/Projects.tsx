import docsImage from "@/assets/images/Docs.png";
import ochiImage from "@/assets/images/Ochi.png";
import sundownImage from "@/assets/images/Sundown.png";
import usabilityImage from "@/assets/images/Usability.png";
import Image from "next/image";
import CheckCircleIcon from "@/assets/icons/check-circle.svg";
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import GrainImage from "@/assets/images/grain.jpg";

const portfolioProjects = [
  {
    company: "Tech",
    year: "ReactJS, Locomotive Js",
    title: "Ochi Design",
    results: [
      { title: "Boosted visual engagement and interactivity" },
      { title: "Created a seamless scroll experience" },
      { title: "Strengthened responsive design skills" },
    ],
    link: "https://ochi-dev.netlify.app/",
    image: ochiImage,
  },
  {
    company: "Tech",
    year: "reactjs, framer motion",
    title: "Docs - Ultimate Document Management",
    results: [
      { title: "Add, Edit, and Delete Cards" },
      { title: "Smooth and intuitive drag-and-drop" },
      { title: "Browser’s localStorage, no login required!" },
    ],
    link: "https://docs-document.netlify.app/",
    image: docsImage,
  },
  {
    company: "tech",
    year: "JavaScript, Lenis, Locomotive",
    title: "Sundown Studio",
    results: [
      { title: "Real-world scroll performance optimization" },
      { title: "Aesthetic-driven development" },
      { title: "Strengthened animation logic in vanilla JS" },
    ],
    link: "https://sundown-design-studio.netlify.app/",
    image: sundownImage,
  },
  {
    company: "Tech",
    year: "Html, css, git, github",
    title: "UsabilityHub",
    results: [
      { title: "Honed pixel-perfect layout skills" },
      { title: "Practiced clean and maintainable CSS" },
      { title: "Git & GitHub for real-time collaboration" },
    ],
    link: "https://project-usabilityhub.netlify.app/",
    image: usabilityImage,
  },
];

export const Projects = () => {
  return (
    <section className="pb-16 lg:py-24">
      <div className="container">
        <div className="flex justify-center">
          <p className="uppercase font-semibold tracking-widest bg-gradient-to-r bg-emerald-300 to-sky-400 text-transparent bg-clip-text text-center">
            Real-World Results
          </p>
        </div>
        <h2 className="font-serif text-3xl md:text-5xl text-center mt-6">
          Featured Projects
        </h2>
        <p className="text-center md:text-lg lg:text-xl max-w-md mx-auto text-white/60 mt-4">
          See how I transformed concepts to engaging digital experiences.
        </p>
        <div className="flex flex-col gap-20 md:mt-20 mt-10">
          {portfolioProjects.map((project, index) => (
            <div
              key={`${project.title}-${project.year}`}
              style={{
                top: `calc(64px + ${index * 40}px)`,
              }}
              className="bg-gray-800 rounded-3xl z-0 after:z-10 overflow-hidden after:content-[''] after:absolute after:inset-0 after:outline-2 after:outline after:-outline-offset-2 after:rounded-3xl after:pointer-events-none after:outline-white/20 md:pt-12 md:px-10 px-8 pt-8 lg:pt-16 lg:px-20 sticky"
            >
              <div
                className="absolute inset-0 -z-10 opacity-5"
                style={{
                  backgroundImage: `url(${GrainImage.src})`,
                }}
              ></div>
              <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                <div className="lg:pb-16">
                  <div className="bg-gradient-to-r from-emerald-300 to-sky-400 inline-flex font-bold uppercase tracking-widest gap-2 text-sm text-transparent bg-clip-text">
                    <span>{project.company}</span>
                    <span>—</span>
                    <span>{project.year}</span>
                  </div>

                  <h3 className="font-serif text-2xl mt-2 md:text-4xl md:mt-5">
                    {project.title}
                  </h3>
                  <hr className="border-t-2 border-white/5 mt-4 md:mt-5" />
                  <ul className="flex flex-col gap-2 mt-4 md:mt-5">
                    {project.results.map((result) => (
                      <li
                        key={result.title}
                        className="flex gap-2 text-sm md:text-base text-white/50"
                      >
                        <CheckCircleIcon className="size-5 md:size-6" />
                        <span>{result.title}</span>
                      </li>
                    ))}
                  </ul>
                  <a href={project.link} target="_blank">
                    <button className="bg-white text-gray-950 h-12 w-full rounded-xl inline-flex items-center justify-center gap-2 md:w-auto px-6 font-semibold mt-8">
                      <span>Visit Live Site</span>
                      <ArrowUpRightIcon className=" size-5 ml-2" />
                    </button>
                  </a>
                </div>
                <div className="relative">
                  <Image
                    src={project.image}
                    alt={project.title}
                    className="mt-8 rounded-3xl border-2 border-white/50 top-3 -mb-4 md:-mb-0 lg:mt-0 lg:h-full lg:w-auto lg:max-w-none lg:absolute"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
