"use client";

import { Terminal } from "@/components/ui/terminal";

export const AboutSection = () => {
  return (
    <section className="py-16">
      <div className="container">
        <div className="flex justify-center">
          <p className="uppercase font-semibold tracking-widest bg-gradient-to-r from-emerald-300 to-sky-400 text-transparent bg-clip-text text-center">
            Explore More
          </p>
        </div>

        <h2 className="font-host-grotesk font-semibold text-3xl md:text-5xl text-center mt-6">
          About Me
        </h2>

        <p className="text-center md:text-lg lg:text-xl max-w-md mx-auto text-white/60 mt-4">
          Know more about who I am, my skills, and what inspires me.
        </p>

        {/* Terminal Section */}
        <div className="max-w-7xl mx-auto mt-16 px-2 sm:px-0">
          <Terminal
            className="bg-black/80 backdrop-blur-md border border-white/10 rounded-xl shadow-xl shadow-emerald-500/10"
            username="priyanshu"
            typingSpeed={60}
            delayBetweenCommands={1000}
            initialDelay={500}
            enableSound={true}
            commands={[
            "whoami",
            "tech-stack --list",
            "projects --show",
            "currently-building",
            "engineering-philosophy",
            ]}
            outputs={{
              0: [
                "Priyanshu Patil",
                "Full Stack Engineer",
                "Building SaaS Products, Distributed Systems & AI Applications",
              ],
            
              1: [
                "Frontend: React, Next.js, TypeScript, Tailwind CSS",
                "Backend: Node.js, Express.js, REST APIs",
                "Databases: PostgreSQL, MongoDB, Prisma",
                "Infrastructure: Docker, RabbitMQ",
                "Architecture: Event-Driven Systems, RBAC, Multi-Tenancy",
              ],
            
              2: [
                "ObserveX → Distributed API Monitoring Platform",
                "Flowdeck → Project Management SaaS",
                "Phoenix → AI-Powered Web Application",
                "Northeast Auto Creations → CMS-Driven E-Commerce Platform",
              ],
            
              3: [
                "Scalable SaaS Applications",
                "Distributed Backend Systems",
                "API Monitoring & Observability",
                "AI-Powered User Experiences",
                "Open Source & Product Engineering",
              ],
            
              4: [
                "Build for scale.",
                "Optimize for maintainability.",
                "Automate repetitive work.",
                "Simple solutions outperform clever ones.",
              ],
            }}
          />
        </div>
      </div>
    </section>
  );
};
