import React from 'react'
import { Home, PanelsTopLeft, Hexagon, Sparkles } from 'lucide-react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

type Item = { name: string; href: string; icon: React.ReactNode }

const items: Item[] = [
  { name: 'Home', href: '#home', icon: <Home size={18} /> },
  { name: 'Architecture', href: '#architecture', icon: <PanelsTopLeft size={18} /> },
  { name: 'Applications', href: '#apps', icon: <Hexagon size={18} /> },
  { name: 'Waitlist', href: '#waitlist', icon: <Sparkles size={18} /> },
]

export function FloatingDock({ className }: { className?: string }) {
  return (
    <nav className={cn('fixed left-1/2 top-6 z-50 -translate-x-1/2', className)}>
      <div className="backdrop-blur-xl shadow-2xl ring-1 ring-white/10 rounded-2xl bg-neutral-900/70">
        <ul className="flex items-center gap-2 p-2">
          {items.map((it) => (
            <li key={it.name}>
              <motion.a
                href={it.href}
                className="group inline-flex items-center gap-2 rounded-xl px-3 py-2 text-xs text-neutral-200 hover:bg-white/10"
                whileHover={{ scale: 1.06 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="grid place-items-center rounded-md bg-white/10 p-1">{it.icon}</span>
                <span className="opacity-75 group-hover:opacity-100 transition">{it.name}</span>
              </motion.a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}
