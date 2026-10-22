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
                  "Full Stack Developer",
                  "Building Production-Ready Products & Distributed Backend Systems",
                ],
              
                1: [
                  "Frontend: React, Next.js, TypeScript, Tailwind CSS",
                  "Backend: Node.js, Express.js, REST APIs",
                  "Databases: PostgreSQL, MongoDB, Prisma",
                  "Messaging: RabbitMQ, Asynchronous Processing",
                  "Architecture: Distributed Systems, Multi-Tenancy, RBAC",
                ],
              
                2: [
                  "ObserveX → Distributed API Monitoring & Analytics",
                  "Flowdeck → Project Management SaaS",
                  "Phoenix → AI-Powered Chat Application",
                  "Northeast Auto Creations → E-Commerce Platform",
                ],
              
                3: [
                  "Production-Deployed Product Development",
                  "API Monitoring & Observability",
                  "Event-Driven Backend Architecture",
                  "Fault Tolerance & Reliable Processing",
                  "Full Stack Product Engineering",
                ],
              
                4: [
                  "Build systems that solve real problems.",
                  "Design for failure, not just the happy path.",
                  "Measure performance instead of guessing.",
                  "Keep code simple, maintainable, and reliable.",
                ],
              }} 
            />
        </div>
      </div>
    </section>
  );
};
