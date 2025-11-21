import { motion } from "framer-motion";
import { MagicCard } from "./ui/magic-card";
import { Sparkles, Zap, Palette, User, ArrowUpRight } from "lucide-react";

const apps = [
  {
    title: "Enterprise Autonomy",
    desc: "Orchestrate complex workflows through adaptive AI agents that learn and optimize over time.",
    icon: Sparkles,
    gradientFrom: "#8B5CF6",
    gradientTo: "#A78BFA",
  },
  {
    title: "Research Acceleration",
    desc: "Deploy reasoning clusters that analyze vast datasets, formulate hypotheses, and generate insights.",
    icon: Zap,
    gradientFrom: "#06B6D4",
    gradientTo: "#22D3EE",
  },
  {
    title: "Creative Systems",
    desc: "Collaborate with agents that can compose music, design interfaces, and prototype 3D models.",
    icon: Palette,
    gradientFrom: "#EC4899",
    gradientTo: "#F472B6",
  },
  {
    title: "Personal Assistants",
    desc: "Your digital self — a personalized agent built on the same fabric to handle your digital life.",
    icon: User,
    gradientFrom: "#10B981",
    gradientTo: "#34D399",
  },
];

export function Applications() {
  return (
    <section
      id="apps"
      className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-12 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end"
      >
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
            Endless Possibilities
          </h2>
          <p className="mt-4 max-w-xl text-lg text-neutral-400">
            One intelligence fabric. Many expressions. From enterprise automation to creative exploration.
          </p>
        </div>
        <a
          href="#"
          className="group flex items-center gap-2 text-sm font-medium text-violet-400 transition-colors hover:text-violet-300"
        >
          View all use cases
          <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </a>
      </motion.div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {apps.map((a, i) => (
          <motion.div
            key={a.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            className="h-full"
          >
            <MagicCard
              className="flex h-full flex-col justify-between border border-white/10 bg-neutral-900/50 p-6 sm:p-8"
              gradientFrom={a.gradientFrom}
              gradientTo={a.gradientTo}
              gradientSize={300}
              gradientOpacity={0.15}
            >
              <div>
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-white/5">
                  <a.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="mb-2 text-xl font-semibold text-white">
                  {a.title}
                </h3>
                <p className="text-sm leading-relaxed text-neutral-400">
                  {a.desc}
                </p>
              </div>

              <div className="mt-6 flex items-center text-sm font-medium text-white opacity-0 transition-opacity group-hover:opacity-100">
                Learn more <ArrowUpRight className="ml-1 h-3 w-3" />
              </div>
            </MagicCard>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
