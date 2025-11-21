import { motion } from "framer-motion";
import { BorderBeam } from "./ui/border-beam";
import { AnimatedGridPattern } from "./ui/animated-grid-pattern";
import { OrbitingCircles } from "./ui/orbiting-circles";
import { TextAnimate } from "./ui/text-animate";
import { Sparkles, ArrowRight, Brain, Network, Cpu, Globe } from "lucide-react";

export function CTA() {
  return (
    <section
      id="waitlist"
      className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8"
    >
      <div className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-neutral-950 px-6 py-24 text-center shadow-2xl sm:px-16">
        {/* Background Effects */}
        <AnimatedGridPattern
          numSquares={30}
          maxOpacity={0.1}
          duration={3}
          className="absolute inset-0 h-full w-full [mask-image:radial-gradient(600px_circle_at_center,white,transparent)]"
        />

        <BorderBeam
          size={300}
          duration={12}
          colorFrom="#a78bfa"
          colorTo="#22d3ee"
          borderWidth={2}
        />

        <div className="relative z-10 mx-auto max-w-3xl">
          <div className="mb-6 flex justify-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 backdrop-blur-md">
              <Sparkles className="h-4 w-4 text-violet-400" />
              <span className="text-sm font-medium text-neutral-200">
                Join the Intelligence Revolution
              </span>
            </div>
          </div>

          <TextAnimate
            animation="blurInUp"
            by="word"
            className="text-balance text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl"
            once
          >
            Ready to shape the future of autonomy?
          </TextAnimate>

          <p className="mx-auto mt-6 max-w-xl text-lg text-neutral-400">
            We're inviting pioneers, builders, and dreamers to build the first generation of truly connected agents.
          </p>

          <form
            className="mx-auto mt-10 flex max-w-md flex-col gap-4 sm:flex-row"
            onSubmit={(e) => {
              e.preventDefault();
              alert("Thanks for joining! We'll be in touch soon.");
            }}
          >
            <input
              required
              type="email"
              placeholder="Enter your email"
              className="h-12 flex-1 rounded-xl border border-white/10 bg-white/5 px-4 text-white placeholder:text-neutral-500 outline-none ring-violet-500/50 transition focus:border-violet-500 focus:ring-2 backdrop-blur-sm"
            />
            <motion.button
              type="submit"
              className="group relative h-12 overflow-hidden rounded-xl bg-white px-8 text-sm font-semibold text-neutral-950 transition-transform active:scale-95"
              whileHover={{ scale: 1.05 }}
            >
              <span className="relative z-10 flex items-center gap-2">
                Join Waitlist
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
              <div className="absolute inset-0 -z-10 bg-gradient-to-r from-violet-200 to-cyan-200 opacity-0 transition-opacity group-hover:opacity-100" />
            </motion.button>
          </form>

          <p className="mt-6 text-xs text-neutral-500">
            Limited spots available for the beta program.
          </p>
        </div>
      </div>
    </section>
  );
}
