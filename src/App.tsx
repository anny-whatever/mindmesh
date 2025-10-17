import { FloatingDock } from '@/components/FloatingDock'
import { Hero } from '@/components/Hero'
import { Features } from '@/components/Features'
import { Applications } from '@/components/Applications'
import { CTA } from '@/components/CTA'
import { Footer } from '@/components/Footer'

export default function App() {
  return (
    <div className="relative min-h-screen">
      <FloatingDock />
      <Hero />
      <main>
        <section id="vision" className="mx-auto max-w-4xl px-6 py-16 sm:px-10">
          <h2 className="text-2xl font-semibold text-white sm:text-3xl">A new intelligence fabric</h2>
          <p className="mt-3 text-neutral-300">
            Artificial intelligence is evolving from isolated models into autonomous, connected systems.
            MindMesh is the layer that connects them — a distributed intelligence fabric where agents
            communicate, coordinate, and co-create across any domain.
          </p>
        </section>
        <Features />
        <Applications />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}
