import { motion } from "framer-motion";
import { Brain, Workflow, Database, Users, Command, Share2, Cpu, Zap } from "lucide-react";
import { BentoGrid, BentoCard } from "./ui/bento-grid";
import { AnimatedGridPattern } from "./ui/animated-grid-pattern";
import { Meteors } from "./ui/meteors";
import { Ripple } from "./ui/ripple";

const features = [
  {
    Icon: Brain,
    name: "Cognitive Core",
    description: "Advanced reasoning capabilities that allow agents to plan, reflect, and adapt to changing environments.",
    href: "#",
    cta: "Learn more",
    className: "col-span-3 lg:col-span-1",
    background: (
      <div className="absolute inset-0 opacity-20">
        <AnimatedGridPattern
          numSquares={30}
          maxOpacity={0.5}
          duration={3}
          repeatDelay={1}
          className="[mask-image:radial-gradient(300px_circle_at_center,white,transparent)]"
        />
      </div>
    ),
  },
  {
    Icon: Workflow,
    name: "Mesh Fabric",
    description: "A high-performance, low-latency coordination layer enabling thousands of agents to collaborate in real-time.",
    href: "#",
    cta: "Learn more",
    className: "col-span-3 lg:col-span-2",
    background: (
      <div className="absolute inset-0 flex items-center justify-center opacity-30">
        <Ripple mainCircleSize={150} numCircles={6} />
      </div>
    ),
  },
  {
    Icon: Database,
    name: "Shared Memory",
    description: "Distributed vector memory allowing agents to share context, experiences, and learned skills instantly.",
    href: "#",
    cta: "Learn more",
    className: "col-span-3 lg:col-span-2",
    background: (
      <div className="absolute inset-0 opacity-20">
        <Meteors number={20} />
      </div>
    ),
  },
  {
    Icon: Users,
    name: "Human Alignment",
    description: "Built-in safety guardrails and interpretability tools ensuring agents act according to human intent.",
    href: "#",
    cta: "Learn more",
    className: "col-span-3 lg:col-span-1",
    background: (
      <div className="absolute inset-0 bg-gradient-to-br from-violet-500/10 to-cyan-500/10" />
    ),
  },
];

export function Features() {
  return (
    <section
      id="architecture"
      className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-12 text-center"
      >
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
          The Architecture of Autonomy
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-neutral-400">
          A modular, scalable stack designed for the next generation of connected intelligence.
        </p>
      </motion.div>

      <BentoGrid>
        {features.map((feature, idx) => (
          <BentoCard key={idx} {...feature} />
        ))}
      </BentoGrid>
    </section>
  );
}
