import { motion } from 'framer-motion'

export function CTA() {
  return (
    <section id="waitlist" className="mx-auto max-w-4xl px-6 py-20 sm:px-10">
      <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-violet-600/20 to-cyan-500/20 p-8">
        <div className="absolute inset-0 bg-[radial-gradient(600px_circle_at_0%_0%,rgba(255,255,255,0.08),transparent_40%)]" />
        <div className="relative">
          <h3 className="text-2xl font-semibold text-white sm:text-3xl">Join the Mesh</h3>
          <p className="mt-2 max-w-2xl text-neutral-200">We’re inviting pioneers, builders, and dreamers to shape connected intelligence with us.</p>
          <form
            className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-[1fr_auto]"
            onSubmit={(e) => { e.preventDefault(); alert('Thanks for joining!'); }}
          >
            <input
              required
              type="email"
              placeholder="you@company.com"
              className="h-11 rounded-xl border border-white/20 bg-black/40 px-4 text-sm text-white placeholder:text-neutral-400 outline-none focus:ring-2 focus:ring-violet-400/50"
            />
            <button className="h-11 rounded-xl bg-white px-5 text-sm font-medium text-neutral-900 transition hover:opacity-90">
              Join Waitlist
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
