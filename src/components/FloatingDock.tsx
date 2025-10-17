import React, { useState } from "react";
import { Home, PanelsTopLeft, Hexagon, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

type Item = { name: string; href: string; icon: React.ReactNode };

const items: Item[] = [
  { name: "Home", href: "#home", icon: <Home size={18} /> },
  {
    name: "Architecture",
    href: "#architecture",
    icon: <PanelsTopLeft size={18} />,
  },
  { name: "Applications", href: "#apps", icon: <Hexagon size={18} /> },
  { name: "Waitlist", href: "#waitlist", icon: <Sparkles size={18} /> },
];

export function FloatingDock({ className }: { className?: string }) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <nav
      className={cn("fixed left-1/2 top-6 z-50 -translate-x-1/2", className)}
    >
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="relative backdrop-blur-xl shadow-2xl ring-1 ring-white/10 rounded-2xl bg-neutral-900/70"
      >
        {/* Glow effect */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-violet-500/20 to-cyan-500/20 opacity-0 group-hover:opacity-100 blur-xl transition-opacity" />

        <ul className="relative flex items-center gap-1 p-2">
          {items.map((it, idx) => (
            <li key={it.name}>
              <motion.a
                href={it.href}
                className="relative group inline-flex items-center gap-2 rounded-xl px-3 py-2 text-xs text-neutral-200"
                onMouseEnter={() => setHoveredIndex(idx)}
                onMouseLeave={() => setHoveredIndex(null)}
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.96 }}
              >
                {/* Hover background */}
                <AnimatePresence>
                  {hoveredIndex === idx && (
                    <motion.span
                      layoutId="hoverBackground"
                      className="absolute inset-0 rounded-xl bg-gradient-to-r from-violet-500/20 to-cyan-500/20 backdrop-blur-sm"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.15 }}
                    />
                  )}
                </AnimatePresence>

                {/* Icon */}
                <motion.span
                  className="relative grid place-items-center rounded-md bg-white/10 p-1.5"
                  animate={{
                    rotate: hoveredIndex === idx ? [0, -10, 10, -10, 0] : 0,
                  }}
                  transition={{ duration: 0.5 }}
                >
                  {it.icon}
                </motion.span>

                {/* Label */}
                <span className="relative opacity-75 group-hover:opacity-100 transition font-medium">
                  {it.name}
                </span>

                {/* Active indicator dot */}
                {hoveredIndex === idx && (
                  <motion.span
                    layoutId="activeIndicator"
                    className="absolute -bottom-1 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-gradient-to-r from-violet-400 to-cyan-400"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    exit={{ scale: 0 }}
                  />
                )}
              </motion.a>
            </li>
          ))}
        </ul>
      </motion.div>
    </nav>
  );
}
