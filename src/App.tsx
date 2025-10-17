import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { Applications } from "@/components/Applications";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";
import { ScrollProgress } from "@/components/ui/scroll-progress";
import { DotPattern } from "@/components/ui/dot-pattern";
import { SmoothScroll } from "@/components/SmoothScroll";
import { motion } from "framer-motion";

export default function App() {
  return (
    <SmoothScroll>
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

        <Navbar />
        <Hero />

        <main>
          <motion.section
            id="vision"
            className="mx-auto max-w-4xl px-4 py-12 sm:px-6 sm:py-16 md:px-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-xl font-semibold text-white sm:text-2xl md:text-3xl">
              A new intelligence fabric
            </h2>
            <p className="mt-3 text-base leading-relaxed text-neutral-300 sm:mt-4 sm:text-lg">
              Artificial intelligence is evolving from isolated models into
              autonomous, connected systems. MindMesh is the layer that connects
              them — a distributed intelligence fabric where agents communicate,
              coordinate, and co-create across any domain.
            </p>
            <div className="mt-6 grid gap-3 sm:grid-cols-3 sm:gap-4">
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
                  className="rounded-xl border border-white/10 bg-neutral-900/50 p-3 sm:p-4"
                >
                  <div className="text-xs text-neutral-400 sm:text-sm">
                    {item.label}
                  </div>
                  <div className="mt-1 text-base font-semibold text-white sm:text-lg">
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
    </SmoothScroll>
  );
}
