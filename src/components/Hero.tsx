import { motion } from "framer-motion";
import { Particles } from "./ui/particles";
import { BorderBeam } from "./ui/border-beam";
import { TextAnimate } from "./ui/text-animate";
import { OrbitingCircles } from "./ui/orbiting-circles";
import { AnimatedGridPattern } from "./ui/animated-grid-pattern";
import { Cpu, Network, Brain, Zap } from "lucide-react";

const words = ["Autonomous", "Connected", "Evolving"];

export function Hero() {
  return (
    <section
      id="home"
      className="relative mx-4 mt-24 max-w-6xl overflow-hidden rounded-3xl border border-white/10 bg-neutral-950 px-4 py-16 sm:mx-6 sm:px-8 md:mt-28 md:px-10 md:py-24 lg:mx-auto"
    >
      {/* Animated Grid Background */}
      <AnimatedGridPattern
        numSquares={30}
        maxOpacity={0.1}
        duration={3}
        className="absolute inset-0 h-full w-full [mask-image:radial-gradient(500px_circle_at_center,white,transparent)]"
      />

      {/* Particles Effect */}
      <Particles
        className="absolute inset-0"
        quantity={50}
        ease={80}
        color="#ffffff"
        refresh={false}
      />

      {/* Border Beam Animation */}
      <BorderBeam
        size={250}
        duration={12}
        colorFrom="#a78bfa"
        colorTo="#22d3ee"
        delay={0}
      />

      <div className="relative z-10 mx-auto max-w-3xl text-center">
        <TextAnimate
          animation="blurInUp"
          by="word"
          className="text-balance text-3xl font-semibold leading-tight text-white sm:text-4xl md:text-5xl lg:text-6xl"
          once
        >
          Intelligence, Interconnected.
        </TextAnimate>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mx-auto mt-4 max-w-xl text-pretty text-sm text-neutral-300 sm:mt-6 sm:text-base md:text-lg"
        >
          MindMesh is building the foundation for a world where agents think,
          act, and evolve — together.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mt-6 flex flex-col items-center justify-center gap-3 sm:mt-8 sm:flex-row md:mt-10"
        >
          <a
            href="#waitlist"
            className="group relative inline-flex items-center justify-center overflow-hidden rounded-xl bg-white px-6 py-3 text-sm font-medium text-black shadow-lg transition-all hover:scale-105 hover:shadow-white/30"
          >
            <span className="relative">Join the Waitlist</span>
          </a>
          <a
            href="#vision"
            className="rounded-xl border border-white/20 px-6 py-3 text-center text-sm text-white backdrop-blur transition hover:bg-white/10"
          >
            Read the Vision
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-2 text-xs text-neutral-400 sm:text-sm md:mt-12"
          aria-hidden="true"
        >
          <span>Agentic</span>
          <span className="mx-1">•</span>
          <span className="inline-flex overflow-hidden">
            {words.map((w, i) => (
              <motion.span
                key={w}
                initial={{ y: 24, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  delay: 1.1 + i * 0.2,
                  type: "spring",
                  stiffness: 300,
                  damping: 20,
                }}
                className="mx-1 sm:mx-2"
              >
                {w}
              </motion.span>
            ))}
          </span>
        </motion.div>
      </div>
    </section>
  );
}
