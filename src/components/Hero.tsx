import { motion } from 'framer-motion'
import AnimatedBackground from './AnimatedBackground'

const words = ['Autonomous', 'Connected', 'Evolving']

export function Hero() {
  return (
    <section id="home" className="relative mx-auto mt-28 max-w-6xl overflow-hidden rounded-3xl border border-white/10 bg-neutral-950 px-6 py-24 sm:px-10">
      <AnimatedBackground />
      <div className="mx-auto max-w-3xl text-center">
        <motion.h1
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-balance text-4xl font-semibold leading-tight text-white sm:text-6xl"
        >
          Intelligence, <span className="bg-gradient-to-r from-violet-400 to-cyan-300 bg-clip-text text-transparent">Interconnected</span>.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.6 }}
          className="mx-auto mt-6 max-w-xl text-pretty text-neutral-300"
        >
          MindMesh is building the foundation for a world where agents think, act, and evolve — together.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mt-10 flex items-center justify-center gap-3"
        >
          <a href="#waitlist" className="rounded-xl bg-white px-4 py-2 text-sm font-medium text-neutral-900 transition hover:opacity-90">Join the Waitlist</a>
          <a href="#vision" className="rounded-xl border border-white/20 px-4 py-2 text-sm text-white backdrop-blur transition hover:bg-white/10">Read the Vision</a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-12 flex items-center justify-center gap-2 text-sm text-neutral-400"
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
                transition={{ delay: 0.9 + i * 0.2, type: 'spring', stiffness: 300, damping: 20 }}
                className="mx-2"
              >
                {w}
              </motion.span>
            ))}
          </span>
        </motion.div>
      </div>
    </section>
  )
}
