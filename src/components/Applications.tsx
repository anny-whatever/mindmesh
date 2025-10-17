import { motion } from "framer-motion";
import { Meteors } from "./ui/meteors";
import { Ripple } from "./ui/ripple";
import { Sparkles, Zap, Palette, User } from "lucide-react";

const apps = [
  {
    title: "Enterprise Autonomy",
    desc: "Orchestrate workflows through adaptive AI agents.",
    icon: Sparkles,
    color: "from-violet-500 to-purple-600",
  },
  {
    title: "Research Acceleration",
    desc: "Reasoning clusters that learn from your data.",
    icon: Zap,
    color: "from-cyan-500 to-blue-600",
  },
  {
    title: "Creative Systems",
    desc: "Agents that compose, design, and prototype together.",
    icon: Palette,
    color: "from-pink-500 to-rose-600",
  },
  {
    title: "Personal Assistants",
    desc: "Your digital self — built on the same fabric.",
    icon: User,
    color: "from-emerald-500 to-teal-600",
  },
];

export function Applications() {
  return (
    <section
      id="apps"
      className="relative mx-auto max-w-6xl px-6 py-20 sm:px-10"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-2xl font-semibold text-white sm:text-3xl">
          Endless Possibilities
        </h2>
        <p className="mt-3 max-w-2xl bg-gradient-to-r from-neutral-200 to-neutral-400 bg-clip-text text-transparent">
          One intelligence fabric. Many expressions.
        </p>
      </motion.div>

      <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2">
        {apps.map((a, i) => (
          <motion.div
            key={a.title}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: 0.1 * i, duration: 0.5 }}
            className="group relative overflow-hidden rounded-2xl border border-white/10 bg-neutral-900/60 p-6 backdrop-blur-sm transition-all hover:border-white/20 hover:scale-[1.02] "
          >
            {/* Meteor shower effect on hover */}
            <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <Meteors
                number={8}
                minDelay={0}
                maxDelay={0.5}
                minDuration={1}
                maxDuration={3}
              />
            </div>

            {/* Ripple effect */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 duration-500">
              <Ripple mainCircleSize={100} numCircles={3} />
            </div>

            {/* Gradient orb */}
            <div className="absolute -right-16 -top-16 h-32 w-32 rounded-full bg-gradient-to-br from-violet-500/20 via-cyan-400/20 to-transparent blur-3xl" />

            {/* Content */}
            <div className="relative z-10">
              <div
                className={`inline-flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br ${a.color} shadow-lg`}
              >
                <a.icon className="h-7 w-7 text-white" />
              </div>
              <h3 className="mt-4 text-xl font-semibold text-white">
                {a.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-neutral-300">
                {a.desc}
              </p>

              {/* Hover indicator */}
              <div className="mt-4 flex items-center text-xs font-medium text-violet-400 opacity-0 group-hover:opacity-100 transition-opacity">
                <span>Explore</span>
                <svg
                  className="ml-1 h-3 w-3"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
