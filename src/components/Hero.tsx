import { motion } from "framer-motion";
import { Particles } from "./ui/particles";
import { BorderBeam } from "./ui/border-beam";
import { TextAnimate } from "./ui/text-animate";
import { AnimatedGridPattern } from "./ui/animated-grid-pattern";
import { ShimmerButton } from "./ui/shimmer-button";
import { ArrowRight, Sparkles } from "lucide-react";

const words = ["Autonomous", "Connected", "Evolving"];

export function Hero() {
  return (
    <section
      id="home"
      className="relative mx-auto mt-20 max-w-7xl px-4 sm:mt-24 sm:px-6 md:mt-32 lg:px-8"
    >
      <div className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-neutral-950/80 px-6 py-20 sm:px-10 sm:py-28 md:px-16 md:py-32">
        {/* Animated Grid Background */}
        <AnimatedGridPattern
          numSquares={40}
          maxOpacity={0.15}
          duration={3}
          repeatDelay={1}
          className="absolute inset-0 h-full w-full [mask-image:radial-gradient(800px_circle_at_center,white,transparent)]"
        />

        {/* Particles Effect */}
        <Particles
          className="absolute inset-0"
          quantity={70}
          ease={80}
          color="#ffffff"
          refresh={false}
        />

        {/* Border Beam Animation */}
        <BorderBeam
          size={400}
          duration={10}
          colorFrom="#a78bfa"
          colorTo="#22d3ee"
          delay={0}
          borderWidth={2}
        />

        {/* Glowing Orb Background */}
        <div className="absolute left-1/2 top-1/2 -z-10 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-500/20 blur-[100px]" />
        <div className="absolute left-1/2 top-1/2 -z-10 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/10 blur-[80px]" />

        <div className="relative z-10 mx-auto max-w-4xl text-center">
          {/* <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6 inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 backdrop-blur-md"
          >
            <Sparkles className="h-4 w-4 text-yellow-300" />
            <span className="text-xs font-medium text-neutral-200 sm:text-sm">
              The Future of Agentic AI
            </span>
          </motion.div> */}

          <TextAnimate
            animation="blurInUp"
            by="word"
            className="text-balance text-5xl font-bold tracking-tight text-white sm:text-6xl md:text-7xl lg:text-8xl"
            once
          >
            Intelligence, Interconnected.
          </TextAnimate>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="mx-auto mt-6 max-w-2xl text-pretty text-lg text-neutral-300 sm:mt-8 sm:text-xl"
          >
            MindMesh is building the foundation for a world where agents think,
            act, and evolve — together. A distributed fabric for the next generation of AI.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="mt-8 flex flex-col items-center justify-center gap-4 sm:mt-10 sm:flex-row"
          >
            <a href="#waitlist">
              <ShimmerButton className="shadow-2xl">
                <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
                  Join the Waitlist
                </span>
              </ShimmerButton>
            </a>

            <a
              href="#vision"
              className="group flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium text-neutral-300 transition-colors hover:text-white"
            >
              Read the Vision
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="mt-12 flex flex-wrap items-center justify-center gap-3 text-sm text-neutral-400 sm:text-base"
            aria-hidden="true"
          >
            <span className="font-medium text-neutral-500">Defining:</span>
            <span className="inline-flex flex-wrap justify-center gap-x-4 gap-y-2">
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
                  className="flex items-center gap-2 text-neutral-200"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-violet-500" />
                  {w}
                </motion.span>
              ))}
            </span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
