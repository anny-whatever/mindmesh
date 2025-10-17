import { motion } from 'framer-motion'

const apps = [
  { title: 'Enterprise Autonomy', desc: 'Orchestrate workflows through adaptive AI agents.' },
  { title: 'Research Acceleration', desc: 'Reasoning clusters that learn from your data.' },
  { title: 'Creative Systems', desc: 'Agents that compose, design, and prototype together.' },
  { title: 'Personal Assistants', desc: 'Your digital self — built on the same fabric.' }
]

export function Applications() {
  return (
    <section id="apps" className="mx-auto max-w-6xl px-6 py-20 sm:px-10">
      <h2 className="text-2xl font-semibold text-white sm:text-3xl">Endless Possibilities</h2>
      <p className="mt-3 max-w-2xl text-neutral-300">One intelligence fabric. Many expressions.</p>

      <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
        {apps.map((a, i) => (
          <motion.div
            key={a.title}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: 0.05 * i }}
            className="relative overflow-hidden rounded-2xl border border-white/10 bg-neutral-900/60 p-5"
          >
            <div className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-gradient-to-br from-violet-500/20 to-cyan-400/20 blur-2xl" />
            <h3 className="text-lg font-medium text-white">{a.title}</h3>
            <p className="mt-2 text-sm text-neutral-300">{a.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
