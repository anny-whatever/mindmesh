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

const smoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
  e.preventDefault();
  if (href === "#home") {
    window.scrollTo({ top: 0, behavior: "smooth" });
  } else {
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }
};

export function Navbar({ className }: { className?: string }) {
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
          className="rounded-full border border-white/10 bg-neutral-900/80 px-2 py-1.5 shadow-lg backdrop-blur-xl"
        >
          <ul className="flex items-center gap-1">
            {navItems.map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  onClick={(e) => smoothScroll(e, item.href)}
                  className="group relative inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm text-neutral-300 transition-colors hover:bg-white/10 hover:text-white"
                >
                  <span className="relative font-medium">{item.name}</span>
                </a>
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
          className="mx-4 mt-4 rounded-xl border border-white/10 bg-neutral-900/90 px-4 py-3 backdrop-blur-xl"
        >
          <div className="flex items-center justify-between">
            <a
              href="#home"
              onClick={(e) => smoothScroll(e, "#home")}
              className="flex items-center gap-2"
            >
              <div className="rounded-lg bg-gradient-to-r from-violet-500 to-cyan-500 p-1.5">
                <Hexagon size={18} className="text-white" />
              </div>
              <span className="text-base font-semibold text-white">
                MindMesh
              </span>
            </a>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="rounded-lg bg-white/10 p-2 text-white transition-colors hover:bg-white/20"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>

          <AnimatePresence>
            {mobileMenuOpen && (
              <motion.ul
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="mt-3 space-y-1 overflow-hidden"
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
                      onClick={(e) => {
                        smoothScroll(e, item.href);
                        setMobileMenuOpen(false);
                      }}
                      className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm text-neutral-200 transition-colors hover:bg-white/10"
                    >
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
