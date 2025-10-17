import { motion } from "framer-motion";
import { BorderBeam } from "./ui/border-beam";
import { AnimatedGridPattern } from "./ui/animated-grid-pattern";
import { Sparkles, ArrowRight } from "lucide-react";

export function CTA() {
  return (
    <section
      id="waitlist"
      className="mx-auto max-w-4xl px-4 py-12 sm:px-6 sm:py-16 md:px-10 md:py-20"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-violet-600/20 via-neutral-950 to-cyan-500/20 p-6 sm:p-8 md:p-12"
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
          <div className="flex items-center gap-2 sm:gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-r from-violet-500 to-cyan-500 sm:h-12 sm:w-12">
              <Sparkles className="h-5 w-5 text-white sm:h-6 sm:w-6" />
            </div>
            <h3 className="text-xl font-semibold text-white sm:text-2xl md:text-3xl">
              Join the Mesh
            </h3>
          </div>
          <p className="mt-3 max-w-2xl text-sm text-neutral-200 sm:mt-4 sm:text-base md:text-lg">
            We're inviting pioneers, builders, and dreamers to shape connected
            intelligence with us.
          </p>
          <form
            className="mt-6 grid grid-cols-1 gap-3 sm:mt-8 sm:grid-cols-[1fr_auto] sm:gap-3 md:gap-4"
            onSubmit={(e) => {
              e.preventDefault();
              alert("Thanks for joining! We'll be in touch soon.");
            }}
          >
            <input
              required
              type="email"
              placeholder="you@company.com"
              className="h-11 rounded-xl border border-white/20 bg-black/40 px-4 text-sm text-white placeholder:text-neutral-400 outline-none backdrop-blur-sm transition focus:border-violet-400/50 focus:ring-2 focus:ring-violet-400/20 sm:h-12"
            />
            <motion.button
              type="submit"
              className="group relative h-11 min-w-[140px] overflow-hidden rounded-xl bg-white px-6 text-sm font-semibold text-neutral-900 transition-all hover:scale-[1.02] active:scale-[0.98] sm:h-12"
              whileHover={{ boxShadow: "0 0 20px rgba(167, 139, 250, 0.4)" }}
              transition={{ duration: 0.2 }}
            >
              {/* Subtle gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-violet-500/10 to-cyan-500/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

              {/* Button content */}
              <span className="relative flex items-center justify-center gap-2">
                Join Waitlist
                <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
              </span>
            </motion.button>
          </form>

          {/* Stats or social proof */}
          <div className="mt-6 flex flex-col items-start gap-4 text-xs text-neutral-400 sm:mt-8 sm:flex-row sm:items-center sm:gap-6 sm:text-sm">
            <div className="flex items-center gap-2">
              <div className="flex -space-x-2">
                {[1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="h-6 w-6 rounded-full border-2 border-neutral-900 bg-gradient-to-br from-violet-400 to-cyan-400"
                  />
                ))}
              </div>
              <span>100+ early adopters</span>
            </div>
            <div className="hidden h-4 w-px bg-white/10 sm:block" />
            <span>✨ No credit card required</span>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
