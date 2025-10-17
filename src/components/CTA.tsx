import { motion } from "framer-motion";
import { ShimmerButton } from "./ui/shimmer-button";
import { BorderBeam } from "./ui/border-beam";
import { AnimatedGridPattern } from "./ui/animated-grid-pattern";
import { Sparkles } from "lucide-react";

export function CTA() {
  return (
    <section id="waitlist" className="mx-auto max-w-4xl px-6 py-20 sm:px-10">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-violet-600/20 via-neutral-950 to-cyan-500/20 p-8 sm:p-12"
      >
        {/* Animated Grid Background */}
        <AnimatedGridPattern
          numSquares={20}
          maxOpacity={0.1}
          duration={3}
          className="absolute inset-0 h-full w-full [mask-image:radial-gradient(400px_circle_at_center,white,transparent)]"
        />

        {/* Border Beam */}
        <BorderBeam
          size={200}
          duration={15}
          colorFrom="#a78bfa"
          colorTo="#22d3ee"
          borderWidth={2}
        />

        {/* Radial gradient overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(600px_circle_at_50%_0%,rgba(124,58,237,0.15),transparent_60%)]" />

        <div className="relative z-10">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-violet-500 to-cyan-500">
              <Sparkles className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-2xl font-semibold text-white sm:text-3xl">
              Join the Mesh
            </h3>
          </div>
          <p className="mt-4 max-w-2xl text-lg text-neutral-200">
            We're inviting pioneers, builders, and dreamers to shape connected
            intelligence with us.
          </p>
          <form
            className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-[1fr_auto] sm:gap-3"
            onSubmit={(e) => {
              e.preventDefault();
              alert("Thanks for joining! We'll be in touch soon.");
            }}
          >
            <input
              required
              type="email"
              placeholder="you@company.com"
              className="h-12 rounded-xl border border-white/20 bg-black/40 px-4 text-sm text-white placeholder:text-neutral-400 outline-none backdrop-blur-sm transition focus:border-violet-400/50 focus:ring-2 focus:ring-violet-400/20"
            />
            <ShimmerButton
              type="submit"
              className="h-12 min-w-[140px]"
              shimmerColor="#ffffff"
              shimmerSize="0.1em"
              shimmerDuration="2s"
              background="linear-gradient(to right, rgb(124 58 237), rgb(34 211 238))"
            >
              <span className="flex items-center gap-2 text-sm font-semibold">
                Join Waitlist
                <svg
                  className="h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </span>
            </ShimmerButton>
          </form>

          {/* Stats or social proof */}
          <div className="mt-8 flex items-center gap-6 text-sm text-neutral-400">
            <div className="flex items-center gap-2">
              <div className="flex -space-x-2">
                {[1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="h-6 w-6 rounded-full bg-gradient-to-br from-violet-400 to-cyan-400 border-2 border-neutral-900"
                  />
                ))}
              </div>
              <span>100+ early adopters</span>
            </div>
            <div className="h-4 w-px bg-white/10" />
            <span>✨ No credit card required</span>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
