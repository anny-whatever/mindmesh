const smoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
  e.preventDefault();
  const target = document.querySelector(href);
  if (target) {
    target.scrollIntoView({ behavior: "smooth", block: "start" });
  }
};

export function Footer() {
  return (
    <footer className="mx-auto max-w-6xl px-4 pb-12 pt-8 sm:px-6 sm:pb-16 sm:pt-10 md:px-10">
      <div className="flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row">
        <div className="text-xs text-neutral-400 sm:text-sm">
          © 2025 MindMesh. All rights reserved.
        </div>
        <nav className="flex flex-wrap items-center justify-center gap-3 text-xs text-neutral-300 sm:gap-4 sm:text-sm">
          <a
            href="#vision"
            onClick={(e) => smoothScroll(e, "#vision")}
            className="transition-colors hover:text-white"
          >
            Vision
          </a>
          <a
            href="#architecture"
            onClick={(e) => smoothScroll(e, "#architecture")}
            className="transition-colors hover:text-white"
          >
            Architecture
          </a>
          <a
            href="#apps"
            onClick={(e) => smoothScroll(e, "#apps")}
            className="transition-colors hover:text-white"
          >
            Applications
          </a>
          <a
            href="mailto:hello@mindmesh.ai"
            className="transition-colors hover:text-white"
          >
            Contact
          </a>
        </nav>
      </div>
    </footer>
  );
}
