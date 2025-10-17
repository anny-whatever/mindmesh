import { FloatingDock } from "@/components/FloatingDock";
import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { Applications } from "@/components/Applications";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";
import { ScrollProgress } from "@/components/ui/scroll-progress";
import { DotPattern } from "@/components/ui/dot-pattern";
import { motion } from "framer-motion";

export default function App() {
  return (
    <div className="relative min-h-screen bg-neutral-950">
      {/* Scroll Progress Indicator */}
      <ScrollProgress />

      {/* Background Pattern */}
      <div className="fixed inset-0 -z-10">
        <DotPattern
          width={20}
          height={20}
          cx={1}
          cy={1}
          cr={1}
          className="[mask-image:linear-gradient(to_bottom,white,transparent,transparent)] opacity-40"
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-neutral-950 via-neutral-950/90 to-neutral-950" />
      </div>

      <FloatingDock />
      <Hero />

      <main>
        <motion.section
          id="vision"
          className="mx-auto max-w-4xl px-6 py-16 sm:px-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl font-semibold text-white sm:text-3xl">
            A new intelligence fabric
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-neutral-300">
            Artificial intelligence is evolving from isolated models into
            autonomous, connected systems. MindMesh is the layer that connects
            them — a distributed intelligence fabric where agents communicate,
            coordinate, and co-create across any domain.
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            {[
              { label: "Distributed", value: "Architecture" },
              { label: "Real-time", value: "Coordination" },
              { label: "Evolving", value: "Intelligence" },
            ].map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.4 }}
                className="rounded-xl border border-white/10 bg-neutral-900/50 p-4"
              >
                <div className="text-sm text-neutral-400">{item.label}</div>
                <div className="mt-1 text-lg font-semibold text-white">
                  {item.value}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <Features />
        <Applications />
        <CTA />
      </main>

      <Footer />
    </div>
  );
}
