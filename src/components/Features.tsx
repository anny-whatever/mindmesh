import { motion } from 'framer-motion'
import { Brain, Workflow, Database, Users } from 'lucide-react'

const items = [
  {
    title: 'Cognitive Core',
    icon: Brain,
    desc: 'Reasoning, planning, and goal-directed behavior for autonomous agents.'
  },
  {
    title: 'Mesh Fabric',
    icon: Workflow,
    desc: 'A low-latency coordination layer for multi-agent collaboration.'
  },
  {
    title: 'Memory Layer',
    icon: Database,
    desc: 'Short & long-term memory with retrieval, embeddings, and summaries.'
  },
  {
    title: 'Human Interface',
    icon: Users,
    desc: 'Natural interfaces that align agent behavior to human intent.'
  }
]

export function Features() {
  return (
    <section id="architecture" className="mx-auto max-w-6xl px-6 py-20 sm:px-10">
      <h2 className="text-2xl font-semibold text-white sm:text-3xl">The Architecture of Autonomy</h2>
      <p className="mt-3 max-w-2xl text-neutral-300">A modular stack designed for connected intelligence.</p>

      <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
        {items.map((it, idx) => (
          <motion.div
            key={it.title}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: idx * 0.04 }}
            className="group relative overflow-hidden rounded-2xl border border-white/10 bg-neutral-900/50 p-5"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-violet-500/10 to-cyan-400/10 opacity-0 transition-opacity group-hover:opacity-100" />
            <div className="relative z-10">
              <it.icon className="h-5 w-5 text-neutral-300" />
              <h3 className="mt-3 text-lg font-medium text-white">{it.title}</h3>
              <p className="mt-2 text-sm text-neutral-300">{it.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
