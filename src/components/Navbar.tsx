import React, { useState } from "react";
import { Home, PanelsTopLeft, Hexagon, Sparkles, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

type NavItem = {
  name: string;
  href: string;
  icon: React.ReactNode;
};

const navItems: NavItem[] = [
  { name: "Home", href: "#home", icon: <Home size={18} /> },
  {
    name: "Architecture",
    href: "#architecture",
    icon: <PanelsTopLeft size={18} />,
  },
  { name: "Applications", href: "#apps", icon: <Hexagon size={18} /> },
  { name: "Waitlist", href: "#waitlist", icon: <Sparkles size={18} /> },
];

export function Navbar({ className }: { className?: string }) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Desktop Navbar */}
      <nav
        className={cn(
          "fixed left-1/2 top-6 z-50 hidden -translate-x-1/2 md:block",
          className
        )}
      >
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="relative rounded-2xl border border-white/10 bg-neutral-900/70 p-2 shadow-2xl backdrop-blur-xl"
        >
          {/* Glow effect */}
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-violet-500/20 to-cyan-500/20 opacity-0 blur-xl transition-opacity group-hover:opacity-100" />

          <ul className="relative flex items-center gap-1">
            {navItems.map((item, idx) => (
              <li key={item.name}>
                <motion.a
                  href={item.href}
                  className="group relative inline-flex items-center gap-2 rounded-xl px-4 py-2 text-sm text-neutral-200 transition-colors"
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
                    {item.icon}
                  </motion.span>

                  {/* Label */}
                  <span className="relative font-medium opacity-75 transition group-hover:opacity-100">
                    {item.name}
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

      {/* Mobile Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 md:hidden">
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mx-4 mt-4 rounded-2xl border border-white/10 bg-neutral-900/90 p-4 backdrop-blur-xl"
        >
          <div className="flex items-center justify-between">
            <a href="#home" className="flex items-center gap-2">
              <div className="rounded-lg bg-gradient-to-r from-violet-500 to-cyan-500 p-2">
                <Hexagon size={20} className="text-white" />
              </div>
              <span className="text-lg font-semibold text-white">MindMesh</span>
            </a>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="rounded-lg bg-white/10 p-2 text-white transition-colors hover:bg-white/20"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          <AnimatePresence>
            {mobileMenuOpen && (
              <motion.ul
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="mt-4 space-y-2 overflow-hidden"
              >
                {navItems.map((item) => (
                  <motion.li
                    key={item.name}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: -20, opacity: 0 }}
                  >
                    <a
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="flex items-center gap-3 rounded-lg bg-white/5 p-3 text-neutral-200 transition-colors hover:bg-white/10"
                    >
                      <span className="rounded-md bg-white/10 p-2">
                        {item.icon}
                      </span>
                      <span className="font-medium">{item.name}</span>
                    </a>
                  </motion.li>
                ))}
              </motion.ul>
            )}
          </AnimatePresence>
        </motion.div>
      </nav>
    </>
  );
}
