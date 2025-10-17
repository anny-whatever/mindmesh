import { motion } from "framer-motion";
import { Brain, Workflow, Database, Users } from "lucide-react";
import { MagicCard } from "./ui/magic-card";
import { BorderBeam } from "./ui/border-beam";

const items = [
  {
    title: "Cognitive Core",
    icon: Brain,
    desc: "Reasoning, planning, and goal-directed behavior for autonomous agents.",
    gradient: "from-violet-500/20 to-purple-500/20",
  },
  {
    title: "Mesh Fabric",
    icon: Workflow,
    desc: "A low-latency coordination layer for multi-agent collaboration.",
    gradient: "from-cyan-500/20 to-blue-500/20",
  },
  {
    title: "Memory Layer",
    icon: Database,
    desc: "Short & long-term memory with retrieval, embeddings, and summaries.",
    gradient: "from-emerald-500/20 to-green-500/20",
  },
  {
    title: "Human Interface",
    icon: Users,
    desc: "Natural interfaces that align agent behavior to human intent.",
    gradient: "from-amber-500/20 to-orange-500/20",
  },
];

export function Features() {
  return (
    <section
      id="architecture"
      className="mx-auto max-w-6xl px-6 py-20 sm:px-10"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-2xl font-semibold text-white sm:text-3xl">
          The Architecture of Autonomy
        </h2>
        <p className="mt-3 max-w-2xl text-neutral-300">
          A modular stack designed for connected intelligence.
        </p>
      </motion.div>

      <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
        {items.map((it, idx) => (
          <motion.div
            key={it.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: idx * 0.1, duration: 0.5 }}
          >
            <MagicCard
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-neutral-900/50 p-6 cursor-pointer transition-all hover:scale-[1.02]"
              gradientFrom="#9E7AFF"
              gradientTo="#FE8BBB"
              gradientSize={300}
            >
              {/* Subtle border beam on hover */}

              {/* Gradient background */}
              {/* <div
                className={`absolute inset-0 bg-gradient-to-br ${it.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
              /> */}

              {/* Content */}
              <div className="relative z-10">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm">
                  <it.icon className="h-6 w-6 text-violet-400" />
                </div>
                <h3 className="mt-4 text-xl font-semibold text-white">
                  {it.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-neutral-300">
                  {it.desc}
                </p>
              </div>

              {/* Decorative corner gradient */}
              <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-gradient-to-br from-violet-500/20 to-transparent blur-2xl" />
            </MagicCard>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
