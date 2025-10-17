export function Footer() {
  return (
    <footer className="mx-auto max-w-6xl px-6 pb-16 pt-10 sm:px-10">
      <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
        <div className="text-sm text-neutral-400">© 2025 MindMesh. All rights reserved.</div>
        <nav className="flex items-center gap-4 text-sm text-neutral-300">
          <a href="#vision" className="hover:text-white">Vision</a>
          <a href="#architecture" className="hover:text-white">Architecture</a>
          <a href="#apps" className="hover:text-white">Applications</a>
          <a href="mailto:hello@mindmesh.ai" className="hover:text-white">Contact</a>
        </nav>
      </div>
    </footer>
  )
}
